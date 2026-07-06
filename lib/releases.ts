export type Release = {
  slug: string;
  date: string;
  dateline: string;
  headline: string;
  summary: string;
  body: string[];
  about: string;
  contact: string;
};

export const releases: Release[] = [
  {
    slug: "voranox-establishes-legal-domain",
    date: "Second Release",
    dateline: "NEW YORK · LONDON · HONG KONG",
    headline:
      "Voranox Inc. Establishes Legal as the Firm's Ninth Domain, Elevating Voranox Counsel and Introducing Voranox Statute and Voranox Accord",
    summary:
      "Voranox Inc. today established Legal as the firm's ninth domain, elevating Voranox Counsel to anchor it and introducing two new platforms: Voranox Statute for regulatory affairs and compliance, and Voranox Accord for arbitration and dispute resolution.",
    body: [
      "Voranox Inc. today established Legal as the firm's ninth domain, bringing the platform directory to forty-eight industry-native intelligent platforms across nine domains of human enterprise.",
      "The Legal domain is anchored by Voranox Counsel, the firm's platform for law firms, in-house counsel, and professional-services practices, which moves from the Knowledge domain to lead the new grouping. It is joined by two newly introduced platforms.",
      "Voranox Statute serves regulatory affairs and compliance — continuous regulatory horizon scanning, provision-level obligations mapping, compliance operations, and examiner-ready reporting for the global corporates and supervisory authorities that must keep pace with the law as it is written, interpreted, and enforced.",
      "Voranox Accord serves arbitration and dispute resolution — case, evidence, and settlement intelligence for arbitral institutions, international tribunals, and the counsel who appear before them, engineered to the confidentiality and neutrality the forum demands.",
      "“Law is not a subcategory of knowledge work — it is its own physics,” the firm said. “Privilege, disclosure, neutrality, and the supervisory relationship are constraints no general-purpose system carries natively. The Legal domain gives the profession what our doctrine promises every industry: intelligence engineered to its own language, its own physics, and its own ethics.”",
      "Consistent with the Voranox doctrine, all three platforms are engineered sovereign-grade by default, with auditability and provenance as first-class properties and human authority preserved: the lawyer's judgment, the compliance officer's attestation, and the tribunal's decision remain human acts.",
      "The full directory is available at voranox.com/platforms. The Legal domain platforms are published at voranox.com/platforms/legal, voranox.com/platforms/regulatory-compliance, and voranox.com/platforms/disputes.",
    ],
    about:
      "Voranox Inc. is the parent company architecting intelligent platforms across every industry, sector, and institution worldwide. The firm operates as an intelligence consultancy serving sovereigns, institutions, and global industries with intelligence engineered to their reality. Voranox is reserved for organizations operating at the scale of nations, markets, and global industries, and engineers its platforms to that standard.",
    contact:
      "Press desks may direct inquiries to press@voranox.com. The firm responds to bona fide press inquiries within one business day.",
  },
  {
    slug: "voranox-introduces-the-firm",
    date: "Inaugural Release",
    dateline: "NEW YORK · LONDON · HONG KONG",
    headline:
      "Voranox Inc. Introduces the Firm and Its Initial Platform Directory of Forty-Six Industry-Native Intelligent Platforms",
    summary:
      "Voranox Inc., the parent company architecting intelligent platforms for the institutions of every industry, sector, and discipline, today introduced the firm and its inaugural directory of forty-six industry-native platforms.",
    body: [
      "Voranox Inc., the parent company architecting intelligent platforms for the institutions of every industry, sector, and discipline of human enterprise, today introduced the firm and its inaugural directory of forty-six industry-native intelligent platforms.",
      "The firm operates as an intelligence consultancy in the institutional tradition — engineering one purpose-built platform per industry, deployed to the standards of the central banks, ministries, hospitals, and global operators it serves. The platforms span eight domains: public sector, financial, life sciences, infrastructure, industry, knowledge, society, and commerce.",
      "“Each industry has its own physics, its own language, and its own ethics,” the firm wrote in its inaugural doctrine essay. “Intelligence engineered to those particulars compounds. Intelligence retrofitted to them depreciates. Voranox is a long bet on the inverse of consolidation.”",
      "The directory introduced today includes Voranox Sterling for banking and financial services, Voranox Sentinel for allied defense, Voranox Vitae for healthcare and life sciences, Voranox Civitas for governments, Voranox Oracle for intelligence and diplomacy, Voranox Bastion for cybersecurity, Voranox Stellar for the orbital domain, and thirty-nine other industry-native platforms across the breadth of global enterprise.",
      "Each platform is engineered to the regulatory, ethical, and operational standards of its industry. Sterling is aligned to the auditability and reserving disciplines of regulated banking. Vitae is engineered to clinical evidence standards and HIPAA-grade privacy by default. Sentinel is reserved for allied democracies and operates with humans on the loop. Civitas is built for digital sovereignty, public legitimacy, and the long horizon of the state.",
      "Voranox engagements are conducted under confidentiality. The firm operates from offices in New York, London, Hong Kong, Dubai, Accra, and Geneva, and serves clients across six continents.",
      "The full directory is available at voranox.com/platforms. Long-form essays on the firm's doctrine, architecture, and standards are published at voranox.com/insights. Detailed security and trust posture is available at voranox.com/trust.",
    ],
    about:
      "Voranox Inc. is the parent company architecting intelligent platforms across every industry, sector, and institution worldwide. The firm operates as an intelligence consultancy serving sovereigns, institutions, and global industries with intelligence engineered to their reality. Voranox is reserved for organizations operating at the scale of nations, markets, and global industries, and engineers its platforms to that standard.",
    contact:
      "Press desks may direct inquiries to press@voranox.com. The firm responds to bona fide press inquiries within one business day.",
  },
];

export const releaseBySlug = (slug: string): Release | undefined =>
  releases.find((r) => r.slug === slug);
