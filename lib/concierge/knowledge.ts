// Retrieval corpus for the Voranox concierge.
//
// Flattens the site's own content (platforms, essays, doctrine, case studies,
// releases, key pages) into small documents the concierge can retrieve over.
// Everything here is already-public developer-authored content — no secrets.

import { sectors } from "@/lib/sectors";
import { essays } from "@/lib/insights";
import { caseStudies } from "@/lib/caseStudies";
import { releases } from "@/lib/releases";

export type KnowledgeDoc = {
  id: string;
  kind: "platform" | "essay" | "case-study" | "release" | "page" | "firm";
  title: string;
  url: string;
  text: string;
};

const SITE = "https://voranox.com";

function build(): KnowledgeDoc[] {
  const docs: KnowledgeDoc[] = [];

  // Firm-level facts — always useful context.
  docs.push({
    id: "firm-overview",
    kind: "firm",
    title: "Voranox Inc. — the firm",
    url: `${SITE}/about`,
    text: [
      "Voranox Inc. (legal name Voranox Incorporated) is the parent company architecting intelligent platforms across every industry, sector, and institution worldwide.",
      "It operates as an intelligence consultancy serving sovereigns, central banks, hospitals, ministries, and global operators with intelligence engineered to their reality.",
      "Offices: New York, London, Hong Kong, Dubai, Accra, Geneva. Tagline: Intelligence, refined.",
      "Doctrine: one platform per industry; sovereign-grade by default; auditability as a first-class property; human authority preserved; provenance on every figure; long horizon; restraint (the firm refuses work for adversarial regimes, surveillance creep, or ends the public would find indefensible).",
      "Engagements are confidential. Contact: briefings@voranox.com. Engagement stages: Initial Briefing, Discovery & Scoping, Diligence & Trust Pack, Engagement Memorandum, Deployment, Continuous Partnership.",
    ].join(" "),
  });

  for (const s of sectors) {
    const parts = [
      `${s.platform} is the Voranox platform for ${s.name} (${s.category}).`,
      s.tagline,
      s.description,
      `Capabilities: ${s.capabilities.join(", ")}.`,
    ];
    if (s.deep) {
      parts.push(s.deep.longTagline, s.deep.manifesto);
      parts.push(`Pillars: ${s.deep.pillars.map((p) => p.name).join(", ")}.`);
      parts.push(
        `Use cases: ${s.deep.useCases.map((u) => u.title).join(", ")}.`,
      );
      parts.push(`Serves: ${s.deep.clients.join(", ")}.`);
      parts.push(`Doctrine: ${s.deep.doctrine.join(" ")}`);
    }
    docs.push({
      id: `platform-${s.slug}`,
      kind: "platform",
      title: `${s.platform} — ${s.name}`,
      url: `${SITE}/platforms/${s.slug}`,
      text: parts.join(" "),
    });
  }

  for (const e of essays) {
    docs.push({
      id: `essay-${e.slug}`,
      kind: "essay",
      title: e.title,
      url: `${SITE}/insights/${e.slug}`,
      text: `${e.title}. ${e.subtitle} ${e.body.join(" ")}`,
    });
  }

  for (const c of caseStudies) {
    docs.push({
      id: `case-${c.slug}`,
      kind: "case-study",
      title: `${c.platform} · ${c.industry}`,
      url: `${SITE}/case-studies/${c.slug}`,
      text: [
        `Illustrative engagement for ${c.platform} in ${c.industry} (${c.region}, ${c.duration}).`,
        c.headline,
        `Challenge: ${c.challenge.join(" ")}`,
        `Approach: ${c.approach.join(" ")}`,
        `Outcome: ${c.outcome.map((o) => `${o.metric} ${o.value}`).join("; ")}. ${c.outcomeNarrative}`,
      ].join(" "),
    });
  }

  for (const r of releases) {
    docs.push({
      id: `release-${r.slug}`,
      kind: "release",
      title: r.headline,
      url: `${SITE}/press/${r.slug}`,
      text: `${r.headline}. ${r.summary} ${r.body.join(" ")}`,
    });
  }

  // A few navigational pages the concierge should be able to point to.
  const pages: Array<[string, string, string]> = [
    ["Platforms directory", "/platforms", `The full directory of ${sectors.length} Voranox platforms across nine domains, including the Legal domain (Voranox Counsel, Voranox Statute, Voranox Accord).`],
    ["Trust & Standards", "/trust", "Security, governance, and compliance posture: sovereign deployment, auditability, ISO 27001/42001, SOC 2, NIST AI RMF, EU AI Act, GDPR, HIPAA."],
    ["Architecture", "/architecture", "Engineering posture: substrate, data sovereignty, model lifecycle, deployment topology, integration standards, observability, resilience."],
    ["Engagement", "/engagement", "How a Voranox engagement proceeds across six stages."],
    ["Client Portal", "/portal/login", "Magic-link sign-in for engaged institutions; includes the live Sterling FX command center."],
    ["Contact", "/contact", "Request a confidential briefing."],
  ];
  for (const [title, path, text] of pages) {
    docs.push({
      id: `page-${path.replace(/\//g, "-")}`,
      kind: "page",
      title,
      url: `${SITE}${path}`,
      text,
    });
  }

  return docs;
}

// Built once per server process.
export const knowledge: KnowledgeDoc[] = build();
