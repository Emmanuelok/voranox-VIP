import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { retrieve, renderContext } from "../lib/concierge/retrieve";
import { knowledge } from "../lib/concierge/knowledge";

describe("concierge · knowledge corpus", () => {
  it("builds a non-trivial corpus from site content", () => {
    assert.ok(knowledge.length >= 50, `expected >=50 docs, got ${knowledge.length}`);
    // Every doc carries a title and a canonical URL.
    for (const d of knowledge) {
      assert.ok(d.title.length > 0);
      assert.match(d.url, /^https:\/\/voranox\.com\//);
      assert.ok(d.text.length > 0);
    }
  });

  it("includes all 48 platforms", () => {
    const platforms = knowledge.filter((d) => d.kind === "platform");
    assert.equal(platforms.length, 48);
  });

  it("includes the Legal domain platforms", () => {
    const ids = knowledge.map((d) => d.id);
    assert.ok(ids.includes("platform-legal"), "Counsel present");
    assert.ok(ids.includes("platform-regulatory-compliance"), "Statute present");
    assert.ok(ids.includes("platform-disputes"), "Accord present");
  });
});

describe("concierge · retrieval", () => {
  it("ranks the banking platform first for a banking query", () => {
    const results = retrieve("which platform is for banking and finance", 5);
    assert.ok(results.length > 0);
    assert.match(results[0].url, /financial-services/);
  });

  it("finds the healthcare platform for a clinical query", () => {
    const results = retrieve("clinical decision support for hospitals", 5);
    const top = results.slice(0, 3).map((r) => r.url).join(" ");
    assert.match(top, /healthcare/);
  });

  it("surfaces doctrine content for a doctrine query", () => {
    const results = retrieve("what is the firm's doctrine on restraint", 6);
    const joined = results.map((r) => r.id).join(" ");
    assert.match(joined, /restraint|doctrine|firm/);
  });

  it("finds the regulatory platform for a compliance query", () => {
    const results = retrieve("regulatory compliance obligations mapping", 5);
    const top = results.slice(0, 3).map((r) => r.url).join(" ");
    assert.match(top, /regulatory-compliance/);
  });

  it("returns a sane floor when the query has no usable terms", () => {
    const results = retrieve("the a an of to", 6);
    assert.ok(results.length > 0, "should still return floor docs");
  });

  it("caps results at k", () => {
    const results = retrieve("intelligence platform", 3);
    assert.ok(results.length <= 3);
  });

  it("renderContext produces cited, URL-bearing context", () => {
    const results = retrieve("sovereign deployment and auditability", 3);
    const ctx = renderContext(results);
    assert.match(ctx, /URL: https:\/\/voranox\.com/);
    assert.match(ctx, /\[1\]/);
  });
});
