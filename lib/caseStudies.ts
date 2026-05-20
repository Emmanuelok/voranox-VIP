export type CaseStudy = {
  slug: string;
  platform: string;
  industry: string;
  category: string;
  client: string; // anonymized institution descriptor
  region: string;
  duration: string;
  headline: string;
  challenge: string[];
  approach: string[];
  architecture: string[];
  outcome: { metric: string; value: string }[];
  outcomeNarrative: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sterling-g-sib-credit-revaluation",
    platform: "Voranox Sterling",
    industry: "Banking & Financial Services",
    category: "Financial",
    client: "Global Systemically Important Bank · top-10 by assets",
    region: "North America · EMEA · APAC",
    duration: "11 months from briefing to production",
    headline:
      "Continuous credit revaluation across a $1.4 trillion balance sheet, replacing a quarterly batch process inherited from the 2010s.",
    challenge: [
      "The institution's credit risk function was running counterparty PD, LGD, and EAD on a quarterly batch cycle, with intra-quarter recalibration only on named-watchlist names. By the time exposures revalued, several macro and idiosyncratic signals had moved meaningfully — and the bank's regulator was beginning to ask why.",
      "The internal team had built three prior attempts at continuous revaluation across the last decade. Each failed for the same reason: the model was not auditable to the standard the appointed actuary or the regulator required, and the bank's risk committee was unwilling to govern a system whose decisions could not be reproduced.",
    ],
    approach: [
      "Voranox Sterling was deployed under a six-month Discovery and Scoping phase against the bank's existing credit data warehouse, with no production data leaving the bank's sovereign cloud. The Engagement Memorandum was negotiated by the bank's general counsel and the firm's general counsel and signed by the bank's Chief Risk Officer and the firm's Managing Partner.",
      "The deployment was conducted by joint working groups of the bank's credit-risk engineers and Voranox engineers, operating against the bank's own standards of audit, change management, and model governance.",
    ],
    architecture: [
      "Sterling deployed entirely within the bank's sovereign cloud topology — no Voranox-operated infrastructure carries customer data. The platform integrates with the bank's existing credit data warehouse, market-data feed, and macro-signal ingestion via the bank's own service mesh.",
      "Every PD recalculation produces a tamper-evident audit record carrying the model artifact hash, the input data hash, the policy in force, and the resulting figure. The bank's internal audit can replay any decision at any historical point with cryptographic certainty.",
    ],
    outcome: [
      { metric: "Revaluation cadence", value: "Quarterly → Continuous" },
      { metric: "Counterparties revalued", value: "240,000+ · live" },
      { metric: "Model-decision audit latency", value: "<2 sec / replay" },
      { metric: "Capital model uplift", value: "Within Pillar 2 tolerance" },
    ],
    outcomeNarrative:
      "The bank's risk committee accepted the model into governance at the second review. The regulator's standing question on intra-quarter revaluation was withdrawn. The Voranox engagement has since extended into the wholesale-banking advisory and trading-desk surveillance modules.",
  },
  {
    slug: "vitae-amc-bedside-co-pilot",
    platform: "Voranox Vitae",
    industry: "Healthcare & Life Sciences",
    category: "Life Sciences",
    client: "Academic Medical Center · 1,200 beds, US Northeast",
    region: "United States",
    duration: "14 months from briefing to ward go-live",
    headline:
      "A clinician-governed bedside co-pilot deployed across cardiothoracic, internal medicine, and emergency, integrated to the hospital's electronic record under SaMD-pathway governance.",
    challenge: [
      "The medical center's clinicians were under documented time pressure that institutional leadership had stopped pretending was tolerable. Three prior vendor pilots had failed institutional governance — either because the model was not calibrated to the patient population the AMC actually serves, or because the rationale chain was not citable in a way the hospital's clinical-governance board could accept.",
      "The Chief Medical Information Officer was clear with the firm at the first briefing: the AMC would not deploy a system whose recommendations the clinician could not defend in morbidity-and-mortality conference.",
    ],
    approach: [
      "Vitae was scoped against three pilot wards before any wider deployment, with continuous clinician governance from week one. The clinical governance board was given veto over every model artifact before it reached the bedside.",
      "Deployment followed the SaMD regulatory pathway with the institution's own quality function, including pre-market evaluation against the AMC's own patient population — not against a benchmark dataset.",
    ],
    architecture: [
      "Vitae deployed on-premise inside the hospital's network, integrated to the EHR via FHIR and to the institutional clinical-knowledge base via internal APIs. No patient data leaves the institution. The platform is operated under joint clinical-IT governance.",
      "Every bedside recommendation carries a citation chain back to the originating evidence — institutional protocol, society guideline, peer-reviewed literature — with the evidence level marked. Clinicians review every recommendation before action; the system never executes orders.",
    ],
    outcome: [
      { metric: "Wards live", value: "9 · across 3 services" },
      { metric: "Bedside recommendations cited", value: "100% · to source" },
      { metric: "Clinician minutes returned / shift", value: "~38 (median)" },
      { metric: "Adverse-event signal", value: "Within institutional baseline" },
    ],
    outcomeNarrative:
      "The clinical governance board accepted Vitae into standard of care for the three pilot services in the second review cycle. The AMC is now extending Vitae to two additional services and exploring population-health applications through the integrated delivery network.",
  },
  {
    slug: "sentinel-allied-theater-fusion",
    platform: "Voranox Sentinel",
    industry: "Defense & National Security",
    category: "Public Sector",
    client: "Allied joint-command theater operations centre",
    region: "Allied-democracy theater",
    duration: "Multi-year programme, classified phasing",
    headline:
      "Multi-INT fusion across the operating picture for an allied joint command, with human-on-loop authority preserved at every echelon and full evidentiary chain on every track.",
    challenge: [
      "The joint command's existing fusion stack was a federation of seven sensor-specific systems and three legacy display surfaces. Watch officers were reconstructing the operational picture by hand at shift change, and the delta between sensor pickup and operationally-recognized track was measured in minutes the theater could not afford.",
      "Prior attempts to consolidate the picture had failed because they collapsed sensor provenance — a track in the consolidated view could not be traced back to the originating sensor, which meant the rules of engagement could not be lawfully applied to it.",
    ],
    approach: [
      "Sentinel was deployed under the firm's standing policy of serving allied democracies only, with explicit human-on-loop and lawful-collection guarantees written into the Engagement Memorandum. The deployment was conducted by joint working groups of allied engineers and Voranox engineers, with theater-command oversight at every milestone.",
      "Every operational behaviour of the platform was wargamed against the command's own doctrine before it reached live operations.",
    ],
    architecture: [
      "Sentinel deployed in the command's air-gapped sovereign environment at IL5-equivalent. Fusion operates over the command's existing sensor ingestion, with provenance preserved end-to-end — every track in the consolidated picture is traceable to the originating GEOINT, SIGINT, MASINT, or OSINT source with timestamp and confidence band.",
      "Human authority is structural: the platform does not act, recommend a kinetic action, or alter sensor tasking without an authenticated operator in the loop. Every action by the platform produces a tamper-evident record for the inspector general.",
    ],
    outcome: [
      {
        metric: "Sensor-to-recognized-track latency",
        value: "Minutes → seconds",
      },
      { metric: "Tracks with full provenance", value: "100%" },
      { metric: "Human-on-loop preservation", value: "Structurally enforced" },
      { metric: "Inspector-general audit coverage", value: "Complete" },
    ],
    outcomeNarrative:
      "The joint command brought Sentinel into operational standing after a phased acceptance against doctrine, oversight, and red-team review. The platform is governed under the command's own standing orders, with the firm in continuous engineering partnership.",
  },
  {
    slug: "civitas-ministry-services-modernization",
    platform: "Voranox Civitas",
    industry: "Government & Public Sector",
    category: "Public Sector",
    client: "National ministry · OECD-member jurisdiction",
    region: "Western Europe",
    duration: "18 months from briefing to first service in production",
    headline:
      "Multilingual citizen-services intelligence across tax, health appointment, and identity-replacement workflows, deployed on the national cloud under public-sector procurement.",
    challenge: [
      "The ministry's citizen-services contact centre was processing 140,000+ requests per day across six languages, with first-contact resolution stagnant at 64% for three years. Staff turnover had become a structural problem; institutional knowledge was leaving faster than it could be transferred.",
      "Two prior vendor procurements had failed political review — the first on data-sovereignty grounds, the second on accessibility grounds. The minister was unwilling to be the third.",
    ],
    approach: [
      "Civitas was procured through the ministry's standing public-sector framework, with the Engagement Memorandum reviewed by the parliamentary scrutiny committee in addition to the ministry's own counsel. Citizen data sovereignty, open standards, and public-accessibility commitments were written into the procurement instrument.",
      "Deployment was conducted by joint teams of ministry technologists and Voranox engineers, with weekly review by the ministry's accessibility ombudsman.",
    ],
    architecture: [
      "Civitas deployed entirely on the national cloud — no Voranox-operated infrastructure carries citizen data. The platform integrates with the ministry's existing identity provider, accessibility framework, and language services via open standards (eIDAS, WCAG 2.2 AA, ISO 639).",
      "Every citizen-facing recommendation is auditable to the public's standard, not merely the ministry's — sample interactions are published quarterly through the ministry's open-government framework.",
    ],
    outcome: [
      { metric: "First-contact resolution", value: "64% → 89%" },
      { metric: "Languages supported (native, plain)", value: "6" },
      { metric: "Accessibility (WCAG 2.2)", value: "AA · independently audited" },
      { metric: "Citizen-data jurisdiction", value: "Sovereign · in-region" },
    ],
    outcomeNarrative:
      "The ministry brought Civitas into production across three citizen-services workflows after the parliamentary scrutiny committee's acceptance. Three additional workflows are scheduled. The model artifacts are inspectable on request by the ombudsman.",
  },
];

export const caseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((c) => c.slug === slug);
