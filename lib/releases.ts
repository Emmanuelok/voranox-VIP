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
    slug: "voranox-introduces-the-firm",
    date: "Inaugural Release",
    dateline: "NEW YORK · LONDON · SINGAPORE",
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
      "Voranox engagements are conducted under confidentiality. The firm operates from offices in New York, London, Singapore, Dubai, Lagos, and Geneva, and serves clients across six continents.",
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
