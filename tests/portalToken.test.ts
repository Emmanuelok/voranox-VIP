import { describe, it } from "node:test";
import assert from "node:assert/strict";

// Set the secret before any token operation. getSecret() is called on
// every hmac call, so setting it once at module load is sufficient.
process.env.PORTAL_SECRET = "test-secret-do-not-use-in-production-aaaaaaaaa";

import {
  signToken,
  verifyToken,
  MAGIC_TTL_SECONDS,
  SESSION_TTL_SECONDS,
  SESSION_COOKIE,
} from "../lib/portalToken";

describe("portalToken", () => {
  it("round-trips a session token", async () => {
    const exp = Math.floor(Date.now() / 1000) + 3600;
    const token = await signToken({
      email: "alice@example.com",
      exp,
      kind: "session",
    });
    assert.equal(typeof token, "string");
    assert.match(token, /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/);

    const claims = await verifyToken(token);
    assert.ok(claims, "token should verify");
    assert.equal(claims!.email, "alice@example.com");
    assert.equal(claims!.kind, "session");
    assert.equal(claims!.exp, exp);
    assert.equal(typeof claims!.iat, "number");
  });

  it("round-trips a magic-link token with a different kind", async () => {
    const exp = Math.floor(Date.now() / 1000) + MAGIC_TTL_SECONDS;
    const token = await signToken({
      email: "bob@example.com",
      exp,
      kind: "magic",
    });
    const claims = await verifyToken(token);
    assert.ok(claims);
    assert.equal(claims!.kind, "magic");
  });

  it("rejects an expired token", async () => {
    const exp = Math.floor(Date.now() / 1000) - 60; // a minute in the past
    const token = await signToken({
      email: "expired@example.com",
      exp,
      kind: "session",
    });
    const claims = await verifyToken(token);
    assert.equal(claims, null);
  });

  it("rejects a tampered payload", async () => {
    const exp = Math.floor(Date.now() / 1000) + 3600;
    const token = await signToken({
      email: "victim@example.com",
      exp,
      kind: "session",
    });
    const [payload, sig] = token.split(".");
    // Forge a different payload that keeps the original signature.
    const forgedPayload = Buffer.from(
      JSON.stringify({
        email: "attacker@example.com",
        exp,
        kind: "session",
      }),
    )
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/g, "");
    const forged = `${forgedPayload}.${sig}`;
    const claims = await verifyToken(forged);
    assert.equal(claims, null, "tampered token must be rejected");
    // Sanity: the original still verifies.
    assert.ok(await verifyToken(`${payload}.${sig}`));
  });

  it("rejects a malformed token", async () => {
    assert.equal(await verifyToken(""), null);
    assert.equal(await verifyToken("notatoken"), null);
    assert.equal(await verifyToken("a.b.c"), null);
    assert.equal(await verifyToken(".sig"), null);
  });

  it("exports stable constants", () => {
    assert.equal(typeof MAGIC_TTL_SECONDS, "number");
    assert.ok(MAGIC_TTL_SECONDS > 0 && MAGIC_TTL_SECONDS <= 60 * 60);
    assert.equal(typeof SESSION_TTL_SECONDS, "number");
    assert.ok(SESSION_TTL_SECONDS >= 24 * 60 * 60);
    assert.equal(SESSION_COOKIE, "voranox_portal");
  });

  it("ignores an explicit iat: undefined and still issues a number", async () => {
    const exp = Math.floor(Date.now() / 1000) + 3600;
    const token = await signToken({
      email: "iat@example.com",
      exp,
      iat: undefined,
      kind: "session",
    });
    const claims = await verifyToken(token);
    assert.ok(claims);
    assert.equal(typeof claims!.iat, "number");
  });

  it("fails closed in production when PORTAL_SECRET is unset", async () => {
    const env = process.env as Record<string, string | undefined>;
    const savedSecret = env.PORTAL_SECRET;
    const savedEnv = env.NODE_ENV;
    try {
      // First mint a valid token while the secret is present.
      const exp = Math.floor(Date.now() / 1000) + 3600;
      const token = await signToken({
        email: "prod@example.com",
        exp,
        kind: "session",
      });

      // Now simulate a misconfigured production deploy.
      delete env.PORTAL_SECRET;
      env.NODE_ENV = "production";

      // Signing must refuse rather than use a known default.
      await assert.rejects(
        () => signToken({ email: "x@example.com", exp, kind: "session" }),
        /PORTAL_SECRET/,
      );
      // Verification must deny rather than accept a default-signed token.
      assert.equal(await verifyToken(token), null);
    } finally {
      env.NODE_ENV = savedEnv;
      if (savedSecret !== undefined) env.PORTAL_SECRET = savedSecret;
    }
  });
});
