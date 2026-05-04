import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  checkLimit,
  isHoneypotTripped,
  HONEYPOT_FIELD_NAME,
} from "../lib/rateLimit";

// Each test uses a unique `key` so the global bucket map stays isolated
// without needing a reset between tests.

describe("rateLimit · checkLimit", () => {
  it("allows requests under the limit", () => {
    for (let i = 0; i < 5; i++) {
      const r = checkLimit({
        key: "rl-test-allow",
        windowMs: 60_000,
        max: 5,
        subject: "ip-A",
      });
      assert.equal(r.allowed, true, `hit ${i + 1} should be allowed`);
    }
  });

  it("denies the request that exceeds the limit", () => {
    for (let i = 0; i < 3; i++) {
      const r = checkLimit({
        key: "rl-test-deny",
        windowMs: 60_000,
        max: 3,
        subject: "ip-B",
      });
      assert.equal(r.allowed, true);
    }
    const denied = checkLimit({
      key: "rl-test-deny",
      windowMs: 60_000,
      max: 3,
      subject: "ip-B",
    });
    assert.equal(denied.allowed, false);
    assert.equal(denied.remaining, 0);
    assert.ok(denied.resetAt > Date.now());
  });

  it("isolates buckets across different subjects", () => {
    for (let i = 0; i < 3; i++) {
      const r = checkLimit({
        key: "rl-test-isolation",
        windowMs: 60_000,
        max: 3,
        subject: "ip-X",
      });
      assert.equal(r.allowed, true);
    }
    // ip-X is now exhausted.
    const exhausted = checkLimit({
      key: "rl-test-isolation",
      windowMs: 60_000,
      max: 3,
      subject: "ip-X",
    });
    assert.equal(exhausted.allowed, false);

    // ip-Y starts fresh.
    const fresh = checkLimit({
      key: "rl-test-isolation",
      windowMs: 60_000,
      max: 3,
      subject: "ip-Y",
    });
    assert.equal(fresh.allowed, true);
  });

  it("isolates buckets across different keys", () => {
    for (let i = 0; i < 3; i++) {
      checkLimit({
        key: "rl-test-key-A",
        windowMs: 60_000,
        max: 3,
        subject: "ip-Z",
      });
    }
    const sameSubjectDifferentKey = checkLimit({
      key: "rl-test-key-B",
      windowMs: 60_000,
      max: 3,
      subject: "ip-Z",
    });
    assert.equal(sameSubjectDifferentKey.allowed, true);
  });

  it("tracks remaining capacity correctly", () => {
    const a = checkLimit({
      key: "rl-test-remaining",
      windowMs: 60_000,
      max: 3,
      subject: "ip-R",
    });
    assert.equal(a.remaining, 2);
    const b = checkLimit({
      key: "rl-test-remaining",
      windowMs: 60_000,
      max: 3,
      subject: "ip-R",
    });
    assert.equal(b.remaining, 1);
    const c = checkLimit({
      key: "rl-test-remaining",
      windowMs: 60_000,
      max: 3,
      subject: "ip-R",
    });
    assert.equal(c.remaining, 0);
  });

  it("expires entries outside the window", async () => {
    // Sub-second window so the test stays fast.
    const opts = {
      key: "rl-test-expiry",
      windowMs: 100,
      max: 2,
      subject: "ip-T",
    };
    assert.equal(checkLimit(opts).allowed, true);
    assert.equal(checkLimit(opts).allowed, true);
    assert.equal(checkLimit(opts).allowed, false);
    await new Promise((r) => setTimeout(r, 150));
    assert.equal(
      checkLimit(opts).allowed,
      true,
      "after the window the bucket should refill",
    );
  });
});

describe("rateLimit · honeypot", () => {
  it("detects a tripped honeypot", () => {
    const fd = new FormData();
    fd.set(HONEYPOT_FIELD_NAME, "https://spam.example.com");
    assert.equal(isHoneypotTripped(fd), true);
  });

  it("ignores an empty honeypot", () => {
    const fd = new FormData();
    fd.set(HONEYPOT_FIELD_NAME, "");
    assert.equal(isHoneypotTripped(fd), false);
  });

  it("ignores a missing honeypot field", () => {
    const fd = new FormData();
    assert.equal(isHoneypotTripped(fd), false);
  });

  it("treats whitespace-only as untripped", () => {
    const fd = new FormData();
    fd.set(HONEYPOT_FIELD_NAME, "   \n  ");
    assert.equal(isHoneypotTripped(fd), false);
  });
});
