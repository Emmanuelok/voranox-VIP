export type PlatformPillar = {
  name: string;
  body: string;
};

export type PlatformUseCase = {
  title: string;
  body: string;
};

export type PlatformMetric = {
  value: string;
  label: string;
};

export type PlatformDeepContent = {
  longTagline: string;
  manifesto: string;
  pillars: PlatformPillar[];
  useCases: PlatformUseCase[];
  clients: string[];
  metrics: PlatformMetric[];
  doctrine: string[];
};

export type Sector = {
  slug: string;
  name: string;
  platform: string;
  category:
    | "Public Sector"
    | "Financial"
    | "Industry"
    | "Life Sciences"
    | "Society"
    | "Infrastructure"
    | "Knowledge"
    | "Legal"
    | "Commerce";
  tagline: string;
  description: string;
  capabilities: string[];
  href: string;
  deep?: PlatformDeepContent;
};

export const sectors: Sector[] = [
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    platform: "Voranox Vitae",
    category: "Life Sciences",
    tagline: "Clinical intelligence for the next century of medicine.",
    description:
      "Decision intelligence across hospitals, payers, providers, and biotech — from diagnostics to population health.",
    capabilities: [
      "Clinical decision support",
      "Population health analytics",
      "Genomic intelligence",
      "Hospital operations AI",
    ],
    href: "https://vitae.voranox.com",
    deep: {
      longTagline:
        "Vitae is the clinical intelligence platform engineered to medicine's standard of care — and beyond it.",
      manifesto:
        "Medicine is the most consequential profession humanity has built — and the one most punished by bad data, fragmented records, and time-poor clinicians. Voranox Vitae is intelligence engineered for the bedside, the operating theater, and the population — calibrated to the clinical evidence base, governed by clinicians, and accountable to the patient. We do not replace medical judgment. We give it more time, more memory, and more reach.",
      pillars: [
        {
          name: "Clinical Decision Support",
          body: "Differential diagnosis, treatment pathway, and medication intelligence calibrated to the latest evidence — with full provenance to source literature and guidelines.",
        },
        {
          name: "Population Health",
          body: "Risk stratification, care-gap intelligence, and outcomes analytics across covered lives — for payers, ACOs, and integrated delivery networks.",
        },
        {
          name: "Genomic & Precision Medicine",
          body: "Variant interpretation, pharmacogenomics, and trial-matching intelligence — engineered for clinical genomics teams and biotech research.",
        },
        {
          name: "Hospital Operations",
          body: "Capacity, throughput, OR scheduling, and clinical workforce intelligence — the operating system of the modern hospital.",
        },
      ],
      useCases: [
        {
          title: "Bedside clinical co-pilot",
          body: "Synthesizes patient record, current evidence, and institutional protocols at the point of care — surfacing what a senior consultant would notice, with full citations.",
        },
        {
          title: "Population risk surveillance",
          body: "Continuous stratification of covered populations against deterioration, readmission, and care-gap risk — directing limited clinical attention to where it changes outcomes.",
        },
        {
          title: "Genomic tumor board",
          body: "Variant interpretation, therapy matching, and trial discovery — assembled into the artifact a tumor board actually uses, in the time a tumor board actually has.",
        },
        {
          title: "Capacity & throughput intelligence",
          body: "Real-time bed, OR, and ED capacity intelligence — turning the hospital into a coordinated system rather than a federation of departments.",
        },
      ],
      clients: [
        "Academic Medical Centers",
        "Integrated Delivery Networks",
        "National Health Services",
        "Health Insurers & Payers",
        "Biotechnology & Pharma",
        "Public Health Authorities",
      ],
      metrics: [
        { value: "HIPAA + GDPR", label: "Privacy posture by default" },
        { value: "ISO 13485", label: "Quality system certified" },
        { value: "SaMD", label: "Software-as-Medical-Device pathway" },
        { value: "Clinician-led", label: "Every model, governed" },
      ],
      doctrine: [
        "Clinicians govern the model, not the other way around.",
        "Every recommendation cites its evidence.",
        "Privacy is sacred. Consent is meaningful.",
        "Outcomes are the only ground truth that matters.",
      ],
    },
  },
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals & Biotech",
    platform: "Voranox Helix",
    category: "Life Sciences",
    tagline: "From molecule to market, intelligently engineered.",
    description:
      "Drug discovery, clinical trial optimization, and regulatory intelligence for global pharma and biotech.",
    capabilities: [
      "Target discovery",
      "Trial design intelligence",
      "Pharmacovigilance",
      "Regulatory strategy",
    ],
    href: "https://helix.voranox.com",
    deep: {
      longTagline:
        "Helix is the intelligence platform for the discovery, development, and stewardship of medicines — engineered to the cadence and standard of regulated life science.",
      manifesto:
        "Drug development is a multi-decade act of patience, capital, and scientific discipline. Voranox Helix exists to compress the parts of that journey that should be compressed, and to safeguard the parts that should not. From target identification to pharmacovigilance, Helix is engineered to the cadence of regulated life science — and to the moral stakes of medicine.",
      pillars: [
        {
          name: "Discovery",
          body: "Target identification, validation, and drug design intelligence — engineered for medicinal chemists, biologists, and computational discovery teams.",
        },
        {
          name: "Clinical Development",
          body: "Trial design, site selection, recruitment, and operations intelligence — calibrated to ICH-GCP and the realities of multi-region clinical execution.",
        },
        {
          name: "Pharmacovigilance",
          body: "Real-world signal detection, case processing, and regulatory reporting intelligence at global scale — engineered for safety teams and DSURs.",
        },
        {
          name: "Regulatory & Market Access",
          body: "Regulatory strategy, dossier intelligence, and HTA/payer evidence synthesis for global filings and market access programs.",
        },
      ],
      useCases: [
        {
          title: "Target identification at literature scale",
          body: "Continuous synthesis of biomedical literature, omics, and preclinical evidence — to surface the targets a translational team would otherwise take months to find.",
        },
        {
          title: "Adaptive trial design",
          body: "Trial design, site selection, and recruitment intelligence — calibrated to historical execution data and engineered for protocol amendments at scale.",
        },
        {
          title: "Continuous pharmacovigilance",
          body: "Global signal detection across spontaneous reports, literature, and real-world data — with case processing automation and regulator-ready output.",
        },
        {
          title: "HTA and payer evidence",
          body: "Synthesis of comparative effectiveness, budget impact, and patient evidence into the dossier the payer or HTA body actually needs.",
        },
      ],
      clients: [
        "Top-20 Pharmaceutical Companies",
        "Clinical-Stage Biotech",
        "Contract Research Organizations",
        "Regulatory Agencies",
        "HTA & Payer Bodies",
        "Patient Advocacy Organizations",
      ],
      metrics: [
        { value: "ICH-GCP", label: "Regulated by design" },
        { value: "GxP", label: "Validated quality posture" },
        { value: "Global", label: "FDA, EMA, MHRA, PMDA, NMPA" },
        { value: "Provenanced", label: "Every claim, traceable" },
      ],
      doctrine: [
        "Medicine is sacred. The model serves it.",
        "Patient safety is the floor, not a feature.",
        "Every claim is traceable to its evidence.",
        "Regulation is the standard, not the obstacle.",
      ],
    },
  },
  {
    slug: "financial-services",
    name: "Banking & Financial Services",
    platform: "Voranox Sterling",
    category: "Financial",
    tagline: "The institutional standard for financial intelligence.",
    description:
      "Risk, compliance, and capital intelligence for global banks, asset managers, and sovereign institutions.",
    capabilities: [
      "Credit & market risk",
      "AML & compliance",
      "Trading intelligence",
      "Wealth advisory AI",
    ],
    href: "https://sterling.voranox.com",
    deep: {
      longTagline:
        "Sterling is the intelligence layer underneath the world's most trusted balance sheets.",
      manifesto:
        "Banking is, at its core, a profession of judgment under uncertainty — about credit, about counterparties, about capital, about the future. For three centuries that judgment was carried in the heads of senior bankers. Voranox Sterling is the institutional memory and instinct of a great bank, made tractable, auditable, and continuous. It does not replace the banker; it equips them with intelligence at the scale of every position, every counterparty, every regulation, every market — at every moment.",
      pillars: [
        {
          name: "Risk Intelligence",
          body: "A unified credit, market, liquidity, and operational risk plane — continuously revalued against position, counterparty, and macro signal.",
        },
        {
          name: "Compliance & Conduct",
          body: "AML, KYC, sanctions, surveillance, and conduct intelligence engineered to the standards of FATF, FCA, OCC, and the ECB — with auditability as a first-class property.",
        },
        {
          name: "Markets & Trading",
          body: "Pre-trade, in-trade, and post-trade intelligence across asset classes — execution, hedging, and inventory optimization with sovereign-grade controls.",
        },
        {
          name: "Client & Wealth",
          body: "Relationship, portfolio, and advisory intelligence for private banks, wealth managers, and family offices — with institutional discretion built in.",
        },
      ],
      useCases: [
        {
          title: "Continuous credit revaluation",
          body: "Every loan, every counterparty, every facility — continuously revalued against earnings, market, and macro signals. PD, LGD, and EAD as living surfaces, not quarterly snapshots.",
        },
        {
          title: "Sanctions & AML at the speed of payments",
          body: "Sub-second screening across global sanctions regimes, with explainable risk reasoning, false-positive suppression, and full regulator-grade audit trail.",
        },
        {
          title: "Trader & desk intelligence",
          body: "Real-time desk PnL, exposure, and behavior analytics — with surveillance signals that distinguish market-making from misconduct without false alarms.",
        },
        {
          title: "Sovereign & institutional advisory",
          body: "Macro, FX reserve, and balance-sheet intelligence for central banks, sovereign wealth funds, and DFIs — with the discretion the work demands.",
        },
      ],
      clients: [
        "Global Systemically Important Banks (G-SIBs)",
        "Investment & Universal Banks",
        "Asset Managers & Insurers",
        "Central Banks & Monetary Authorities",
        "Sovereign Wealth Funds",
        "Development Finance Institutions",
      ],
      metrics: [
        { value: "$50T+", label: "Addressable balance sheet served" },
        { value: "180", label: "Jurisdictions supported" },
        { value: "<50ms", label: "Sanctions screening latency" },
        { value: "Tier 1", label: "Operational resilience standard" },
      ],
      doctrine: [
        "Auditability is a first-class property, not an afterthought.",
        "The model is wrong until proven right by the regulator.",
        "Speed without discretion is a liability, not an asset.",
        "Every figure is reproducible. Every decision is explainable.",
      ],
    },
  },
  {
    slug: "insurance",
    name: "Insurance & Reinsurance",
    platform: "Voranox Aegis",
    category: "Financial",
    tagline: "Underwriting, claims, and catastrophe intelligence.",
    description:
      "Actuarial AI for life, P&C, health, and reinsurance — from underwriting to climate-exposed portfolios.",
    capabilities: [
      "Underwriting automation",
      "Claims intelligence",
      "Catastrophe modeling",
      "Fraud detection",
    ],
    href: "https://aegis.voranox.com",
    deep: {
      longTagline:
        "Aegis is the actuarial intelligence layer for the institutions that price, underwrite, and pay the world's risk.",
      manifesto:
        "Insurance is a profession of patient, disciplined judgment about risks that may take decades to crystallize. Voranox Aegis exists to give underwriters, actuaries, and claims professionals the modern apparatus their predecessors deserved — continuous data, calibrated models, and the humility that the long tail demands. From property to life to reinsurance, Aegis serves the institutions whose promise is to be there when the loss arrives.",
      pillars: [
        {
          name: "Underwriting Intelligence",
          body: "Risk pricing, exposure, and bind intelligence calibrated to the line of business — engineered for underwriters, not for spreadsheets.",
        },
        {
          name: "Claims Operations",
          body: "First notice of loss, triage, fraud, and settlement intelligence — turning the claim from friction into the moment the policy is kept.",
        },
        {
          name: "Catastrophe & Climate",
          body: "Catastrophe modeling, climate risk, and accumulation intelligence engineered for the era of correlated, climate-driven loss.",
        },
        {
          name: "Reserving & Capital",
          body: "Reserve, capital, and solvency intelligence aligned to IFRS 17, Solvency II, and the actuarial standards of the profession.",
        },
      ],
      useCases: [
        {
          title: "Submission-to-bind underwriting",
          body: "Automated submission triage, risk pricing, and bind support — reserving underwriters' attention for the risks that actually require human judgment.",
        },
        {
          title: "Claims triage at scale",
          body: "First-notice-of-loss triage, fraud signals, and settlement-recommendation intelligence — engineered for both speed and equity of treatment.",
        },
        {
          title: "Climate-conscious catastrophe",
          body: "Catastrophe and climate-risk modeling that reflects what the next decade will do, not just what the last one did.",
        },
        {
          title: "Reserving with discipline",
          body: "Reserving and IBNR intelligence aligned to actuarial standards — auditable, replicable, and defensible to the appointed actuary.",
        },
      ],
      clients: [
        "Global Primary Insurers",
        "Reinsurers",
        "Lloyd's & MGA Markets",
        "Bancassurance & Health Plans",
        "Mutuals & Cooperatives",
        "Captive & Risk-Pool Operators",
      ],
      metrics: [
        { value: "IFRS 17", label: "Aligned reserving" },
        { value: "Solvency II", label: "Capital posture by design" },
        { value: "P&C · Life · Health", label: "All major lines served" },
        { value: "Auditable", label: "Every figure, defensible" },
      ],
      doctrine: [
        "The promise to pay is sacred.",
        "Pricing must be defensible to the actuary, not just the algorithm.",
        "Equity of claims treatment is non-negotiable.",
        "The long tail decides who survives the cycle.",
      ],
    },
  },
  {
    slug: "capital-markets",
    name: "Capital Markets & Investment",
    platform: "Voranox Meridian",
    category: "Financial",
    tagline: "Alpha, engineered.",
    description:
      "Quantitative intelligence for hedge funds, private equity, sovereign wealth, and market makers.",
    capabilities: [
      "Quant signal discovery",
      "Portfolio optimization",
      "Private market intelligence",
      "ESG analytics",
    ],
    href: "https://meridian.voranox.com",
    deep: {
      longTagline:
        "Meridian is the research and risk platform for the institutions that allocate the world's capital.",
      manifesto:
        "Capital markets reward those who find signal where others find noise — and punish those who confuse one for the other. Voranox Meridian is the research, risk, and execution intelligence layer for the funds, allocators, and market makers whose results are measured to the basis point. Meridian is built to the standard of the institutions that have to be right, repeatedly, across cycles.",
      pillars: [
        {
          name: "Research & Signal",
          body: "Continuous research synthesis across filings, transcripts, alternative data, and academic literature — distilled into the signal an analyst would actually act on.",
        },
        {
          name: "Portfolio & Risk",
          body: "Portfolio construction, attribution, and risk intelligence across asset classes — engineered for the rigor of institutional risk committees.",
        },
        {
          name: "Private Markets",
          body: "Sourcing, diligence, and portfolio monitoring intelligence for private equity, venture, infrastructure, and credit — fully integrated with the public-market view.",
        },
        {
          name: "ESG & Stewardship",
          body: "Materiality-driven ESG, climate-risk, and stewardship intelligence — engineered for fiduciary use, not for marketing.",
        },
      ],
      useCases: [
        {
          title: "Continuous earnings and filing intelligence",
          body: "Automated synthesis of 10-Ks, 10-Qs, transcripts, and global equivalents — with the granularity an analyst needs and the citations the IC demands.",
        },
        {
          title: "Cross-asset portfolio risk",
          body: "Live attribution, scenario, and stress intelligence across equities, fixed income, FX, commodities, and private holdings.",
        },
        {
          title: "Private-market diligence",
          body: "Sourcing and diligence intelligence for PE and venture — including market sizing, competitive dynamics, and portfolio overlap.",
        },
        {
          title: "Climate and transition risk",
          body: "Forward-looking climate and transition risk modeling at the security level — calibrated to fiduciary, not narrative, standards.",
        },
      ],
      clients: [
        "Hedge Funds & Multi-Strategy Firms",
        "Private Equity & Venture Capital",
        "Sovereign Wealth Funds",
        "Pension & Endowment Funds",
        "Asset Managers & Insurers",
        "Market Makers & Prop Firms",
      ],
      metrics: [
        { value: "Cross-asset", label: "Public and private, one fabric" },
        { value: "Attribution-grade", label: "Every basis point traceable" },
        { value: "Discreet", label: "Holdings remain the client's" },
        { value: "Audited", label: "Every signal, every decision" },
      ],
      doctrine: [
        "The model that cannot be explained will not be deployed.",
        "Backtest is hypothesis. Live is evidence.",
        "Holdings are the client's. Always.",
        "Fiduciary duty is the only standard we recognize.",
      ],
    },
  },
  {
    slug: "government",
    name: "Government & Public Sector",
    platform: "Voranox Civitas",
    category: "Public Sector",
    tagline: "Sovereign intelligence for nations and cities.",
    description:
      "Policy, service delivery, and digital sovereignty for national and subnational governments.",
    capabilities: [
      "Policy modeling",
      "Citizen services AI",
      "Digital identity",
      "Public finance intelligence",
    ],
    href: "https://civitas.voranox.com",
    deep: {
      longTagline:
        "Civitas is sovereign-grade intelligence for the institutions that govern — designed for digital sovereignty, public legitimacy, and the long horizon of the state.",
      manifesto:
        "Government is not a market. It is the architecture of collective life. Voranox Civitas builds intelligence for the ministries, agencies, and cities that operate at that scale — with the discipline of public accountability, the patience of policy, and the technical sovereignty that nations require. Our platforms run in the jurisdictions that own them, on the terms that the public demands.",
      pillars: [
        {
          name: "Policy & Foresight",
          body: "Policy simulation, fiscal impact modeling, and long-horizon scenario planning for ministries and policy units.",
        },
        {
          name: "Citizen Services",
          body: "Multilingual citizen-services AI engineered for accessibility, plain-language, and the dignity of the encounter with the state.",
        },
        {
          name: "Digital Identity & Trust",
          body: "Sovereign digital identity, attestations, and trust frameworks — interoperable with eIDAS, and engineered for public legitimacy.",
        },
        {
          name: "Public Finance & Procurement",
          body: "Tax, customs, public-finance, and procurement intelligence — the fiscal nervous system of the modern state.",
        },
      ],
      useCases: [
        {
          title: "Policy impact simulation",
          body: "Model the fiscal, distributional, and behavioral impact of policy options before they reach the floor — with full transparency on assumptions.",
        },
        {
          title: "Multilingual citizen services",
          body: "Plain-language, accessible, and respectful citizen-facing AI — engineered for the linguistic and accessibility realities of a modern population.",
        },
        {
          title: "Sovereign digital identity",
          body: "Identity and attestation infrastructure that the state owns, citizens trust, and the private sector can interoperate with.",
        },
        {
          title: "Tax & customs intelligence",
          body: "Risk-based intelligence for revenue authorities — protecting the public purse without burdening the compliant majority.",
        },
      ],
      clients: [
        "National Governments & Ministries",
        "Central & Federal Agencies",
        "Subnational & City Governments",
        "Multilateral Institutions",
        "Public-Sector Modernization Programs",
        "Sovereign Digital Infrastructure",
      ],
      metrics: [
        { value: "Sovereign", label: "Deployable in-jurisdiction" },
        { value: "Open standards", label: "By policy, by principle" },
        { value: "Multilingual", label: "Built for plural societies" },
        { value: "Auditable", label: "By the public, not just by us" },
      ],
      doctrine: [
        "The state owns the data. Always.",
        "Citizens are not users. They are constituents.",
        "Open standards are non-negotiable.",
        "Every decision must be defensible to the public it serves.",
      ],
    },
  },
  {
    slug: "defense",
    name: "Defense & National Security",
    platform: "Voranox Sentinel",
    category: "Public Sector",
    tagline: "Decision dominance for the modern theater.",
    description:
      "Mission intelligence, ISR, and command-and-control AI for allied defense and security agencies.",
    capabilities: [
      "ISR fusion",
      "Mission planning AI",
      "Threat intelligence",
      "Logistics & sustainment",
    ],
    href: "https://sentinel.voranox.com",
    deep: {
      longTagline:
        "Sentinel is the decision-intelligence layer for allied defense — engineered to compress the kill chain without compromising the chain of command.",
      manifesto:
        "Modern conflict is decided at the speed of decision. Sensors out-pace analysts; weapons out-pace planners; adversaries out-pace doctrine written for a slower century. Voranox Sentinel exists to put the right intelligence in front of the right decision-maker, in time, with the lawful and ethical guardrails the profession of arms requires. Our work is reserved for the defense and security agencies of allied democracies, and is engineered to their standards.",
      pillars: [
        {
          name: "ISR Fusion",
          body: "Multi-INT fusion across SIGINT, GEOINT, MASINT, and OSINT — turning sensor exhaust into a single, queryable operational picture.",
        },
        {
          name: "Mission Planning",
          body: "Course-of-action generation, wargaming, and operational risk modeling — accelerating planning cycles without removing the commander from the loop.",
        },
        {
          name: "Threat & Adversary Intelligence",
          body: "Continuous tracking of adversary order-of-battle, doctrine, and capability evolution — with confidence bands and evidentiary provenance.",
        },
        {
          name: "Logistics & Sustainment",
          body: "Predictive sustainment, parts intelligence, and contested-logistics modeling — the unglamorous discipline that decides modern campaigns.",
        },
      ],
      useCases: [
        {
          title: "Multi-INT fusion at theater scale",
          body: "Continuous fusion of imagery, signals, and open-source intelligence into a single operational picture — with provenance, classification, and time-to-confidence on every track.",
        },
        {
          title: "Accelerated mission planning",
          body: "Course-of-action generation and wargaming for joint staff — compressing planning cycles from days to hours without bypassing doctrine or authority.",
        },
        {
          title: "Predictive sustainment",
          body: "Parts, fuel, and platform readiness modeling across contested logistics — keeping the force in the fight when the supply line is under pressure.",
        },
        {
          title: "Lawful, ethical AI under operational tempo",
          body: "Human-on-the-loop architectures, IHL-compliant guardrails, and full evidentiary chains — engineered for democratic oversight at speed.",
        },
      ],
      clients: [
        "Allied Defense Ministries",
        "Joint & Combined Commands",
        "National Security Agencies",
        "Intelligence Communities",
        "Defense Primes & Integrators",
        "Coast Guards & Border Authorities",
      ],
      metrics: [
        { value: "Allied", label: "Democracies only — by policy" },
        { value: "IL5/IL6", label: "Classified deployment ready" },
        { value: "Human-on-loop", label: "By default, by doctrine" },
        { value: "Audited", label: "Every action, every time" },
      ],
      doctrine: [
        "We serve allied democracies. We do not arm adversaries.",
        "Human authority is preserved. Always.",
        "Speed without lawfulness is not an advantage.",
        "Every action is recorded. Every decision is reviewable.",
      ],
    },
  },
  {
    slug: "intelligence",
    name: "Intelligence & Diplomacy",
    platform: "Voranox Oracle",
    category: "Public Sector",
    tagline: "Strategic foresight for statecraft.",
    description:
      "Open-source intelligence, geopolitical modeling, and diplomatic decision support.",
    capabilities: [
      "OSINT synthesis",
      "Geopolitical scenarios",
      "Sanctions intelligence",
      "Strategic foresight",
    ],
    href: "https://oracle.voranox.com",
    deep: {
      longTagline:
        "Oracle is the strategic-foresight platform for ministries of foreign affairs, intelligence services, and the institutions that author the long view.",
      manifesto:
        "Diplomacy and statecraft are professions of foresight under conditions of permanent ambiguity. Voranox Oracle gathers, synthesizes, and stress-tests the open and lawful evidence base required for sovereign decisions — and presents it with the confidence bands, provenance, and dissent that strategic decisions deserve. Oracle does not predict the future. It equips the institutions that must act on it.",
      pillars: [
        {
          name: "OSINT Synthesis",
          body: "Continuous synthesis of open-source intelligence across languages, jurisdictions, and modalities — with provenance to the originating source and confidence on every claim.",
        },
        {
          name: "Geopolitical Modeling",
          body: "Scenario, wargame, and policy-impact modeling for foreign ministries and policy planning staffs — calibrated against historical evidence, not vibes.",
        },
        {
          name: "Sanctions & Economic Statecraft",
          body: "Sanctions design, evasion analysis, and economic-statecraft intelligence for Treasury, MoFA, and central bank counterparts.",
        },
        {
          name: "Strategic Foresight",
          body: "Long-horizon trend, capability, and risk monitoring — engineered for the multi-administration time scale that statecraft requires.",
        },
      ],
      useCases: [
        {
          title: "Ambassador-grade country briefs",
          body: "Continuously updated, evidence-cited country and region briefs — produced at the depth of a foreign-ministry analyst, at the speed of a morning's preparation.",
        },
        {
          title: "Sanctions design and impact modeling",
          body: "Model the first, second, and third-order economic impact of sanctions packages — including evasion pathways and humanitarian carve-outs.",
        },
        {
          title: "Wargaming and crisis exercises",
          body: "Multi-actor, multi-scenario wargames for crisis cells and policy planning staffs — with traceable assumptions and structured dissent.",
        },
        {
          title: "Long-horizon foresight monitoring",
          body: "Continuous monitoring of strategic trend lines — capability, demographic, technological, climatic — across the time scales that outlast any administration.",
        },
      ],
      clients: [
        "Ministries of Foreign Affairs",
        "Intelligence Communities",
        "Treasuries & Sanctions Authorities",
        "Multilateral Diplomatic Bodies",
        "Strategic Policy Planning Staffs",
        "Sovereign Wealth & Reserve Managers",
      ],
      metrics: [
        { value: "Open-source", label: "Lawful collection only" },
        { value: "40+", label: "Languages, native fluency" },
        { value: "Cited", label: "Every claim, every time" },
        { value: "Discreet", label: "Engagement by default" },
      ],
      doctrine: [
        "Oracle does not collect what is not lawfully open.",
        "We model. We do not predict.",
        "Dissent is preserved, not averaged away.",
        "The decision belongs to the diplomat. Always.",
      ],
    },
  },
  {
    slug: "law-enforcement",
    name: "Law Enforcement & Justice",
    platform: "Voranox Lex",
    category: "Public Sector",
    tagline: "Lawful, accountable intelligence.",
    description:
      "Investigations, court analytics, and corrections intelligence with built-in oversight and auditability.",
    capabilities: [
      "Case intelligence",
      "Court analytics",
      "Forensic AI",
      "Public safety modeling",
    ],
    href: "https://lex.voranox.com",
    deep: {
      longTagline:
        "Lex is the lawful, accountable intelligence platform for investigations, courts, and corrections in the democracies that hold themselves to a standard.",
      manifesto:
        "Public safety and the administration of justice are among the most consequential — and most easily misused — arenas of state power. Voranox Lex is engineered to give investigators, prosecutors, and the courts the modern intelligence apparatus they need, governed by the constitutional guardrails that legitimacy demands. We serve democracies, with oversight, and with the discipline that the public deserves from its institutions.",
      pillars: [
        {
          name: "Case Intelligence",
          body: "Lawful, oversight-bounded intelligence for investigations — engineered with provenance, audit, and Brady-style discovery as first-class properties.",
        },
        {
          name: "Court Analytics",
          body: "Docket, case-load, and outcome intelligence for courts and prosecutors — illuminating equity, throughput, and the quality of justice.",
        },
        {
          name: "Forensic AI",
          body: "Digital and forensic-evidence intelligence with explainability, contestability, and chain-of-custody designed in.",
        },
        {
          name: "Public-Safety Modeling",
          body: "Resource and demand intelligence for public-safety agencies — engineered for accountability, not for surveillance creep.",
        },
      ],
      useCases: [
        {
          title: "Lawful investigative synthesis",
          body: "Synthesis of evidence, leads, and lawfully obtained data — with every artifact provenanced, auditable, and disclosable to the defense.",
        },
        {
          title: "Equitable court analytics",
          body: "Docket, case-load, and outcome analytics that illuminate disparity, backlog, and the actual experience of the parties.",
        },
        {
          title: "Forensic explainability",
          body: "Forensic AI engineered to be challenged in court — every inference contestable, every chain of custody intact.",
        },
        {
          title: "Resourcing without surveillance creep",
          body: "Public-safety resourcing intelligence with hard guardrails against function creep and unconstitutional collection.",
        },
      ],
      clients: [
        "Federal & State Prosecutors",
        "National & Local Police",
        "Court Administration",
        "Corrections Authorities",
        "Inspectors General & Oversight Bodies",
        "Public Defenders & Legal Aid",
      ],
      metrics: [
        { value: "Constitutional", label: "Bounded by law, by design" },
        { value: "Disclosable", label: "Every artifact, defense-ready" },
        { value: "Audited", label: "By oversight, by default" },
        { value: "Allied", label: "Democracies only — by policy" },
      ],
      doctrine: [
        "The state's burden of proof is the floor.",
        "Discovery and disclosure are not adversarial — they are the system.",
        "Every model used in court must be defensible in court.",
        "Public legitimacy is the only durable form of authority.",
      ],
    },
  },
  {
    slug: "energy",
    name: "Energy & Utilities",
    platform: "Voranox Lumen",
    category: "Infrastructure",
    tagline: "Powering the grid of tomorrow.",
    description:
      "Grid intelligence, generation optimization, and energy trading for utilities and IPPs.",
    capabilities: [
      "Grid optimization",
      "Renewables forecasting",
      "Energy trading",
      "Asset performance",
    ],
    href: "https://lumen.voranox.com",
    deep: {
      longTagline:
        "Lumen is the intelligence platform for the grids, generators, and traders that keep the lights on through the energy transition.",
      manifesto:
        "The energy transition is the most consequential industrial undertaking of the century. Voranox Lumen serves the utilities, IPPs, and system operators executing it — turning sensor exhaust, market signal, and weather telemetry into the operational and commercial intelligence the grid actually needs. Lumen is engineered for reliability first, optimization second, and the institutional patience the grid requires.",
      pillars: [
        {
          name: "Grid Intelligence",
          body: "Distribution, transmission, and SCADA intelligence — engineered for operators who must keep frequency stable through every weather, every hour.",
        },
        {
          name: "Generation Optimization",
          body: "Renewables forecasting, dispatch, and asset-performance intelligence across thermal, wind, solar, hydro, and storage fleets.",
        },
        {
          name: "Energy Trading",
          body: "Wholesale, ancillary-services, and balancing-market intelligence engineered for the cadence of the spot market.",
        },
        {
          name: "Customer & DER",
          body: "Distributed-energy-resource, demand-response, and customer intelligence for the increasingly distributed grid.",
        },
      ],
      useCases: [
        {
          title: "Renewables forecasting at fleet scale",
          body: "Wind, solar, and hydro forecasting calibrated to local meteorology and asset behavior — for dispatch, hedging, and bid-stack construction.",
        },
        {
          title: "Distribution intelligence",
          body: "Real-time distribution intelligence — outage prediction, fault localization, and DER orchestration for the increasingly two-way grid.",
        },
        {
          title: "Power-market trading",
          body: "Wholesale and ancillary-services trading intelligence — pre-trade, in-trade, and post-trade with full audit.",
        },
        {
          title: "Asset performance management",
          body: "Continuous monitoring of generation and grid assets — predictive maintenance, derate forecasting, and life-extension intelligence.",
        },
      ],
      clients: [
        "Investor-Owned Utilities",
        "National & Regional TSOs",
        "Independent Power Producers",
        "Energy Trading Houses",
        "Renewable Developers & IPPs",
        "Public Utilities & Cooperatives",
      ],
      metrics: [
        { value: "24/7/365", label: "Reliability is the product" },
        { value: "OT-grade", label: "SCADA-aware by design" },
        { value: "Multi-market", label: "ISO/RTO and global" },
        { value: "Sovereign", label: "Deployable in-jurisdiction" },
      ],
      doctrine: [
        "The grid does not have an off-switch. We engineer accordingly.",
        "Reliability is the product. Optimization is the gift.",
        "OT and IT are not the same. We respect the difference.",
        "The transition is real. The physics has not changed.",
      ],
    },
  },
  {
    slug: "oil-gas",
    name: "Oil, Gas & Petrochemicals",
    platform: "Voranox Strata",
    category: "Infrastructure",
    tagline: "Subsurface to surface, intelligently optimized.",
    description:
      "Upstream, midstream, and downstream intelligence for the global hydrocarbon value chain.",
    capabilities: [
      "Reservoir intelligence",
      "Production optimization",
      "Pipeline integrity",
      "Trading & logistics",
    ],
    href: "https://strata.voranox.com",
    deep: {
      longTagline:
        "Strata is the subsurface-to-surface intelligence platform for the operators of the global hydrocarbon value chain.",
      manifesto:
        "Hydrocarbons remain the operating substrate of the modern economy — and the industry that produces them is among the most technically demanding humans have built. Voranox Strata serves the integrated majors, NOCs, and service companies whose work begins miles underground and ends in the global commodity markets. Strata is engineered for the engineers who actually run the field.",
      pillars: [
        {
          name: "Reservoir Intelligence",
          body: "Subsurface, geomechanics, and recovery intelligence engineered for reservoir engineers and exploration teams.",
        },
        {
          name: "Production Operations",
          body: "Lift, flow assurance, and production optimization across upstream assets — from a single well to a basin.",
        },
        {
          name: "Midstream Integrity",
          body: "Pipeline, terminal, and process-safety intelligence for midstream operators — engineered for integrity and continuity.",
        },
        {
          name: "Trading & Logistics",
          body: "Crude, product, and LNG trading intelligence integrated with logistics and storage realities.",
        },
      ],
      useCases: [
        {
          title: "Reservoir simulation, accelerated",
          body: "Reservoir intelligence and simulation acceleration — letting subsurface teams test more scenarios in the time available.",
        },
        {
          title: "Production optimization",
          body: "Lift, flow assurance, and choke-management intelligence — optimizing well and field performance under operational and HSE constraints.",
        },
        {
          title: "Pipeline and asset integrity",
          body: "Continuous integrity intelligence across pipelines, terminals, and process units — engineered for safety, not just throughput.",
        },
        {
          title: "Cargo and trade intelligence",
          body: "Crude, product, and LNG trading intelligence integrated with shipping and storage — for the desk and the supply chain together.",
        },
      ],
      clients: [
        "Integrated Oil Majors",
        "National Oil Companies",
        "Independent E&Ps",
        "Midstream Operators",
        "Oilfield Services",
        "Refiners & Petrochemicals",
      ],
      metrics: [
        { value: "HSE-first", label: "Safety is the gating standard" },
        { value: "OT-grade", label: "Built for the control room" },
        { value: "Multi-basin", label: "Global E&P coverage" },
        { value: "Auditable", label: "Every figure, every decision" },
      ],
      doctrine: [
        "Safety is the gating constraint. Always.",
        "We respect the engineer who runs the well.",
        "OT integrity is non-negotiable.",
        "The energy transition is real. So is the next molecule.",
      ],
    },
  },
  {
    slug: "mining",
    name: "Mining & Metals",
    platform: "Voranox Lode",
    category: "Industry",
    tagline: "From exploration to extraction, optimized.",
    description:
      "Geological intelligence, mine operations AI, and commodities analytics for the mining majors.",
    capabilities: [
      "Exploration AI",
      "Mine optimization",
      "Tailings & ESG monitoring",
      "Commodities forecasting",
    ],
    href: "https://lode.voranox.com",
    deep: {
      longTagline:
        "Lode is the geological-to-commercial intelligence platform for the mining majors and their stakeholders.",
      manifesto:
        "Mining underwrites the energy transition, the digital economy, and the steel of every other industry. Voranox Lode serves the majors, mid-tiers, and exploration companies whose work spans decades, jurisdictions, and the legitimate scrutiny of host communities. Lode is engineered for geological accuracy, operational reliability, and the social license that the modern industry must continuously earn.",
      pillars: [
        {
          name: "Exploration & Resource",
          body: "Geological, geophysical, and geochemical intelligence for exploration and resource estimation teams.",
        },
        {
          name: "Mine Operations",
          body: "Pit, plant, and fleet intelligence — engineered for reliability, throughput, and safety on the operating site.",
        },
        {
          name: "ESG & Tailings",
          body: "Tailings, water, and community-impact intelligence — engineered for the standards the industry must hold itself to.",
        },
        {
          name: "Commodities & Logistics",
          body: "Commodity, contract, and logistics intelligence for the desk that turns rock into revenue.",
        },
      ],
      useCases: [
        {
          title: "Exploration target intelligence",
          body: "Synthesis of geological, geophysical, and historical drilling data into the target ranking that exploration teams actually act on.",
        },
        {
          title: "Mine planning and dispatch",
          body: "Continuous mine planning, fleet dispatch, and short-interval control intelligence — engineered for the operational realities of the pit.",
        },
        {
          title: "Tailings and water stewardship",
          body: "Continuous tailings and water-quality intelligence — engineered to the GISTM and the standard the public deserves.",
        },
        {
          title: "Concentrate and commodity desks",
          body: "Pricing, benchmark, and logistics intelligence for the marketing teams that monetize the operation.",
        },
      ],
      clients: [
        "Mining Majors",
        "Mid-Tier & Exploration Companies",
        "State Mining Enterprises",
        "Smelters & Refiners",
        "Mining Finance & Royalty Companies",
        "Host-Community Authorities",
      ],
      metrics: [
        { value: "GISTM", label: "Tailings standard, by default" },
        { value: "Multi-commodity", label: "From base to battery metals" },
        { value: "OT-grade", label: "Built for the operating site" },
        { value: "Auditable", label: "Every figure, every disclosure" },
      ],
      doctrine: [
        "The license to operate is earned, not granted.",
        "Safety and tailings standards are the floor.",
        "Geology is the boss. We work to its truth.",
        "The energy transition runs on what we mine.",
      ],
    },
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    platform: "Voranox Forge",
    category: "Industry",
    tagline: "The intelligent factory, at scale.",
    description:
      "Industry 5.0 intelligence for discrete and process manufacturers — from shop floor to global supply chain.",
    capabilities: [
      "Predictive maintenance",
      "Quality intelligence",
      "Supply chain optimization",
      "Digital twins",
    ],
    href: "https://forge.voranox.com",
    deep: {
      longTagline:
        "Forge is the operating intelligence of the modern factory and the global industrial network it sits inside.",
      manifesto:
        "Manufacturing is the discipline that turns molecules into machines, and machines into the substrate of every other industry. Voranox Forge is the intelligence layer for the engineers, operators, and operations leaders who keep that substrate moving — from a single line to a global network. Forge is engineered for the shop floor first, the boardroom second, and the supply chain that connects them throughout.",
      pillars: [
        {
          name: "Asset & Reliability",
          body: "Predictive maintenance, condition monitoring, and reliability engineering across discrete and process plants.",
        },
        {
          name: "Quality & Yield",
          body: "Process and quality intelligence — turning the millions of measurements a modern plant produces into the few that matter.",
        },
        {
          name: "Supply Chain",
          body: "Demand, inventory, and network intelligence across multi-tier supply chains — calibrated for resilience, not just efficiency.",
        },
        {
          name: "Digital Twin",
          body: "Continuous digital twins of plants, lines, and networks — engineered for engineering teams, not for marketing slides.",
        },
      ],
      useCases: [
        {
          title: "Predictive maintenance at fleet scale",
          body: "Continuous monitoring of rotating equipment, motors, and process assets — with prioritized work orders the plant team actually trusts.",
        },
        {
          title: "Quality intelligence at the line",
          body: "Real-time process and quality intelligence — surfacing the upstream cause of the downstream defect before the lot is built.",
        },
        {
          title: "Multi-tier supply visibility",
          body: "Continuous visibility across tier-1, tier-2, and tier-3 suppliers — with risk, exposure, and substitution intelligence at SKU granularity.",
        },
        {
          title: "Plant and network digital twins",
          body: "Living digital twins of plants, lines, and global networks — used for design, debottlenecking, and what-if planning.",
        },
      ],
      clients: [
        "Discrete Manufacturers",
        "Process & Chemical Manufacturers",
        "Industrial Conglomerates",
        "Tier-1 Automotive & Aerospace",
        "Consumer Goods Manufacturers",
        "Industrial Equipment OEMs",
      ],
      metrics: [
        { value: "OT-native", label: "Engineered for the plant floor" },
        { value: "ISA-95", label: "Aligned to industrial reality" },
        { value: "Edge-capable", label: "Runs where the steel runs" },
        { value: "Multi-site", label: "From one plant to one network" },
      ],
      doctrine: [
        "We respect the engineer who runs the line.",
        "OT is not IT. We engineer for both, separately.",
        "Reliability is a discipline, not a dashboard.",
        "Every recommendation must survive the shop-floor test.",
      ],
    },
  },
  {
    slug: "automotive",
    name: "Automotive & Mobility",
    platform: "Voranox Drive",
    category: "Industry",
    tagline: "Intelligence for the autonomous age.",
    description:
      "Vehicle AI, fleet intelligence, and mobility platforms for OEMs, tier-1 suppliers, and operators.",
    capabilities: [
      "Autonomy stacks",
      "Fleet analytics",
      "Connected vehicle data",
      "EV charging intelligence",
    ],
    href: "https://drive.voranox.com",
    deep: {
      longTagline:
        "Drive is the intelligence layer for the OEMs, suppliers, and operators reinventing how the world moves.",
      manifesto:
        "The automotive industry is undergoing its largest reinvention in a century — electrification, autonomy, software-defined vehicles, and the data exhaust of a connected fleet. Voranox Drive serves the OEMs, tier-1 suppliers, and mobility operators executing that reinvention. Drive is engineered for the engineers and operators who must keep the existing fleet on the road while building what replaces it.",
      pillars: [
        {
          name: "Autonomy & ADAS",
          body: "Perception, planning, and validation intelligence for autonomy stacks — engineered for the realities of mass-market deployment.",
        },
        {
          name: "Connected Vehicle Data",
          body: "Fleet-scale telematics, diagnostics, and event intelligence — turning the connected vehicle into a learning instrument.",
        },
        {
          name: "Manufacturing & Quality",
          body: "Body, paint, powertrain, and assembly intelligence — engineered for the cadence and precision of automotive manufacturing.",
        },
        {
          name: "EV Operations",
          body: "Battery, charging, and grid-interaction intelligence for OEMs, fleet operators, and charging networks.",
        },
      ],
      useCases: [
        {
          title: "Autonomy validation at scale",
          body: "Scenario, simulation, and field-data intelligence for autonomy programs — accelerating validation while preserving safety case integrity.",
        },
        {
          title: "Connected-fleet telematics",
          body: "Fleet-scale event detection, diagnostics, and warranty intelligence — turning telematics from cost center into engineering input.",
        },
        {
          title: "Quality and warranty intelligence",
          body: "Cross-plant, cross-supplier quality and warranty intelligence — surfacing root causes before they become recall events.",
        },
        {
          title: "Battery and charging operations",
          body: "Battery health, charging network, and V2G intelligence for the operators of the electric fleet.",
        },
      ],
      clients: [
        "Global Automotive OEMs",
        "Tier-1 Suppliers",
        "Commercial-Vehicle & Truck OEMs",
        "Fleet Operators & Mobility Providers",
        "Charging Network Operators",
        "Connected & Autonomous Programs",
      ],
      metrics: [
        { value: "ASIL-D", label: "Functional-safety pathway" },
        { value: "ISO 26262", label: "Aligned engineering posture" },
        { value: "Fleet-scale", label: "Tens of millions of vehicles" },
        { value: "OT + IT", label: "Plant floor to cloud" },
      ],
      doctrine: [
        "Safety case integrity is non-negotiable.",
        "Connected vehicle data belongs to the customer first.",
        "Software-defined does not mean recall-defined.",
        "We respect the engineer who builds the car.",
      ],
    },
  },
  {
    slug: "aerospace",
    name: "Aerospace & Aviation",
    platform: "Voranox Apex",
    category: "Industry",
    tagline: "From runway to orbit.",
    description:
      "Flight operations, MRO, air traffic, and space domain awareness for civil and defense aviation.",
    capabilities: [
      "Flight ops AI",
      "MRO intelligence",
      "Air traffic optimization",
      "Space domain awareness",
    ],
    href: "https://apex.voranox.com",
    deep: {
      longTagline:
        "Apex is the operations and engineering intelligence platform for the institutions that fly — and for those that build, maintain, and govern flight.",
      manifesto:
        "Aviation is a profession built on engineering precision and institutional discipline. Voranox Apex serves the airlines, MROs, manufacturers, and authorities responsible for safe, efficient, and increasingly low-carbon flight. Apex is engineered to the standards of an industry that does not tolerate informality.",
      pillars: [
        {
          name: "Flight Operations",
          body: "Crew, flight, and network operations intelligence engineered for airlines and operators of every scale.",
        },
        {
          name: "MRO & Engineering",
          body: "Predictive maintenance, parts, and engineering intelligence for MRO providers and operator engineering teams.",
        },
        {
          name: "Air Traffic & Airspace",
          body: "Air-traffic, airspace, and airport intelligence for ANSPs, airports, and government aviation authorities.",
        },
        {
          name: "Space Domain Awareness",
          body: "Where aviation meets the orbital domain — coordination, deconfliction, and intelligence at the edge of atmosphere.",
        },
      ],
      useCases: [
        {
          title: "Network operations control",
          body: "Disruption, recovery, and crew-pairing intelligence for the OCC — turning a bad weather day from chaos into a managed event.",
        },
        {
          title: "Predictive MRO",
          body: "Component, engine, and airframe intelligence — turning unscheduled maintenance into scheduled, parts-ready work.",
        },
        {
          title: "Airport and airspace flow",
          body: "Airport and airspace flow intelligence for the ANSP and airport operations center — engineered for capacity without compromising safety.",
        },
        {
          title: "Sustainable aviation",
          body: "Fuel, route, and operations intelligence engineered to extract the last percent of efficiency — and to credibly account for it.",
        },
      ],
      clients: [
        "Global Airlines",
        "MRO Providers",
        "Aircraft & Engine OEMs",
        "Air Navigation Service Providers",
        "Airports & Authorities",
        "Defense & Civil Aviation Regulators",
      ],
      metrics: [
        { value: "Safety-first", label: "The non-negotiable standard" },
        { value: "ATA-aligned", label: "Industry-native data" },
        { value: "Multi-region", label: "FAA · EASA · CAAC · DGCA" },
        { value: "Auditable", label: "Every action, every flight" },
      ],
      doctrine: [
        "Safety is the gating constraint. Always.",
        "Engineering rigor is non-negotiable.",
        "Capacity must never come at the expense of margin.",
        "We respect the engineer, the pilot, and the controller.",
      ],
    },
  },
  {
    slug: "maritime",
    name: "Maritime & Shipping",
    platform: "Voranox Tide",
    category: "Infrastructure",
    tagline: "Intelligence across the world's oceans.",
    description:
      "Vessel operations, port logistics, and maritime domain awareness for shipping and naval ecosystems.",
    capabilities: [
      "Voyage optimization",
      "Port intelligence",
      "Maritime domain awareness",
      "Decarbonization analytics",
    ],
    href: "https://tide.voranox.com",
    deep: {
      longTagline:
        "Tide is the operating intelligence for the world's oceans — the vessels that cross them, the ports that receive them, and the authorities that govern them.",
      manifesto:
        "Maritime is the unglamorous backbone of global trade and the strategic frontier of the oceans. Voranox Tide serves the shipping companies, port operators, and naval and coast-guard authorities whose work sustains the flow of goods and the security of the seas. Tide is engineered for the cadence of an industry where a single voyage spans weeks, oceans, and jurisdictions.",
      pillars: [
        {
          name: "Voyage Operations",
          body: "Voyage planning, weather routing, and bunker intelligence for shipping operators of every scale and class.",
        },
        {
          name: "Port & Terminal",
          body: "Port-call, berth, and terminal intelligence engineered for the operators turning ships around at speed.",
        },
        {
          name: "Maritime Domain Awareness",
          body: "Vessel, AIS, and dark-fleet intelligence for naval, coast-guard, and customs authorities.",
        },
        {
          name: "Decarbonization",
          body: "Fuel, emissions, and FuelEU/CII intelligence engineered for the maritime decarbonization runway.",
        },
      ],
      useCases: [
        {
          title: "Voyage and bunker optimization",
          body: "Continuous weather routing and bunker intelligence — engineered for both fuel efficiency and the realities of charter parties.",
        },
        {
          title: "Port-call intelligence",
          body: "ETA, berth, and terminal-resource intelligence — turning the just-in-time port call from aspiration into execution.",
        },
        {
          title: "Maritime domain awareness",
          body: "Persistent vessel, AIS-spoofing, and STS intelligence for naval and coast-guard agencies.",
        },
        {
          title: "Decarbonization compliance",
          body: "Emissions, FuelEU, and CII intelligence engineered for maritime decarbonization compliance and the next charter regime.",
        },
      ],
      clients: [
        "Container & Bulk Shipping",
        "Tanker & LNG Operators",
        "Port Authorities & Terminals",
        "Naval & Coast Guard Forces",
        "Maritime Insurers & Brokers",
        "Customs & Maritime Authorities",
      ],
      metrics: [
        { value: "Global", label: "Every ocean, every flag" },
        { value: "IMO-aligned", label: "Decarbonization-ready" },
        { value: "Sovereign", label: "Coast-guard deployable" },
        { value: "Auditable", label: "Every voyage, every claim" },
      ],
      doctrine: [
        "Safety of life at sea is the floor.",
        "We respect the master and crew on the bridge.",
        "Decarbonization is real. The economics must be too.",
        "Maritime domain awareness must remain lawful and proportionate.",
      ],
    },
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    platform: "Voranox Conduit",
    category: "Infrastructure",
    tagline: "The intelligent backbone of global trade.",
    description:
      "End-to-end supply chain intelligence for 3PLs, freight forwarders, and global shippers.",
    capabilities: [
      "Network optimization",
      "Demand forecasting",
      "Last-mile AI",
      "Trade compliance",
    ],
    href: "https://conduit.voranox.com",
    deep: {
      longTagline:
        "Conduit is the planning and operations intelligence for the global supply chains that keep modern economies coherent.",
      manifesto:
        "Supply chains became visible to the public exactly when they became most stressed. Voranox Conduit serves the 3PLs, freight forwarders, and global shippers whose work has always required quiet, multi-tier intelligence — and now requires it under conditions of geopolitical friction and climate disruption. Conduit is engineered for resilience as well as efficiency.",
      pillars: [
        {
          name: "Network Optimization",
          body: "Multi-modal network design, inventory placement, and capacity-allocation intelligence engineered for resilience as well as cost.",
        },
        {
          name: "Demand & Forecasting",
          body: "Demand sensing, forecasting, and S&OP intelligence engineered for the cadence of modern commerce.",
        },
        {
          name: "Last-Mile & Execution",
          body: "Last-mile, dock, and yard intelligence — engineered for the operators who actually move the box.",
        },
        {
          name: "Trade & Compliance",
          body: "Tariff, sanctions, and trade-compliance intelligence engineered for an era of fragmented globalization.",
        },
      ],
      useCases: [
        {
          title: "Multi-modal network design",
          body: "Continuous network design and inventory placement intelligence — calibrated for cost, service, and resilience together.",
        },
        {
          title: "Demand sensing and S&OP",
          body: "Demand sensing across channels and forecasting integrated into the S&OP cadence the business actually runs on.",
        },
        {
          title: "Last-mile and execution",
          body: "Routing, dock, and yard intelligence — engineered for the realities of the warehouse, the driver, and the customer.",
        },
        {
          title: "Tariff and sanctions intelligence",
          body: "HS classification, sanctions, and tariff intelligence engineered for an era where trade compliance is an executive concern.",
        },
      ],
      clients: [
        "Global 3PLs & Freight Forwarders",
        "Retail & Consumer Brands",
        "Industrial & Automotive Shippers",
        "Carriers & Couriers",
        "Customs & Trade Authorities",
        "Defense & Humanitarian Logistics",
      ],
      metrics: [
        { value: "Multi-modal", label: "Air, ocean, ground, last-mile" },
        { value: "Multi-tier", label: "Tier-1 to Tier-N visibility" },
        { value: "Global", label: "Every trade lane, every regime" },
        { value: "Real-time", label: "Sense and respond, continuously" },
      ],
      doctrine: [
        "Resilience is not the same as redundancy.",
        "Service to the customer is the only ground truth.",
        "Compliance is a feature, not a friction.",
        "We respect the operator who moves the box.",
      ],
    },
  },
  {
    slug: "transportation",
    name: "Transportation & Rail",
    platform: "Voranox Transit",
    category: "Infrastructure",
    tagline: "Moving people and goods, intelligently.",
    description:
      "Rail, transit, and intermodal intelligence for operators, authorities, and infrastructure owners.",
    capabilities: [
      "Network planning",
      "Asset health AI",
      "Passenger intelligence",
      "Intermodal optimization",
    ],
    href: "https://transit.voranox.com",
    deep: {
      longTagline:
        "Transit is the planning, operations, and asset-health intelligence for the rail, transit, and intermodal networks of the world.",
      manifesto:
        "Rail and transit are the most efficient mass-movers humans have built — and the most underinvested. Voranox Transit serves the operators, authorities, and infrastructure owners running networks that often outlive the governments that built them. Transit is engineered for the multi-decade horizon that rail demands.",
      pillars: [
        {
          name: "Network Planning",
          body: "Service planning, timetable, and capacity intelligence engineered for the realities of fixed infrastructure.",
        },
        {
          name: "Asset Health",
          body: "Track, signaling, and rolling-stock intelligence — engineered for the engineers who keep the network safe.",
        },
        {
          name: "Passenger & Freight",
          body: "Passenger experience, ticketing, and freight intelligence engineered for the customers the network serves.",
        },
        {
          name: "Intermodal Optimization",
          body: "Intermodal and station-area intelligence — turning rail into a node in the integrated mobility network.",
        },
      ],
      useCases: [
        {
          title: "Timetable and capacity planning",
          body: "Service-planning and capacity intelligence engineered for the operational reality of fixed infrastructure.",
        },
        {
          title: "Predictive asset health",
          body: "Track, signaling, and rolling-stock intelligence — turning unscheduled events into planned, parts-ready maintenance.",
        },
        {
          title: "Passenger experience",
          body: "Disruption, ticketing, and customer-information intelligence engineered for the daily commuter and the long-haul passenger alike.",
        },
        {
          title: "Freight and intermodal",
          body: "Freight, yard, and intermodal-handoff intelligence engineered for the customers and partners the network depends on.",
        },
      ],
      clients: [
        "National & Regional Rail Operators",
        "Urban Transit Authorities",
        "Freight Rail Operators",
        "Infrastructure Owners",
        "Rail Regulators",
        "Multi-Modal Mobility Authorities",
      ],
      metrics: [
        { value: "Multi-decade", label: "Built for the asset life" },
        { value: "Safety-first", label: "The non-negotiable standard" },
        { value: "OT-grade", label: "Engineered for signaling reality" },
        { value: "Sovereign", label: "Deployable in-jurisdiction" },
      ],
      doctrine: [
        "Safety is the gating constraint.",
        "Infrastructure outlives its operators. We engineer accordingly.",
        "The passenger and the freight customer are the only judges that matter.",
        "We respect the engineer who maintains the track.",
      ],
    },
  },
  {
    slug: "construction",
    name: "Construction & Engineering",
    platform: "Voranox Atlas",
    category: "Infrastructure",
    tagline: "Building the world, intelligently.",
    description:
      "Project intelligence, BIM AI, and capital project analytics for global EPCs and developers.",
    capabilities: [
      "Project intelligence",
      "BIM AI",
      "Capital project analytics",
      "Site safety AI",
    ],
    href: "https://atlas.voranox.com",
    deep: {
      longTagline:
        "Atlas is the project, BIM, and capital-program intelligence platform for the global EPCs and developers building the modern world.",
      manifesto:
        "Construction and engineering remain among the most consequential industries on earth and the most stubbornly difficult to optimize. Voranox Atlas serves the EPCs, developers, and infrastructure owners executing capital programs measured in billions and years. Atlas is engineered to bring the discipline of an industrial intelligence platform to a craft tradition that deserves it.",
      pillars: [
        {
          name: "Project Intelligence",
          body: "Schedule, cost, and risk intelligence engineered for capital projects — and for the project controls professionals who run them.",
        },
        {
          name: "BIM & Design",
          body: "Building-information-model and design intelligence engineered for the architects and engineers actually doing the work.",
        },
        {
          name: "Site Operations",
          body: "Field, safety, and productivity intelligence engineered for the realities of the construction site.",
        },
        {
          name: "Capital Program Analytics",
          body: "Portfolio, contractor, and benchmark intelligence engineered for the CFO and program director of a multi-asset capital program.",
        },
      ],
      useCases: [
        {
          title: "Schedule and cost intelligence",
          body: "Continuous schedule and cost intelligence — turning the project-controls function from monthly reporting into continuous foresight.",
        },
        {
          title: "BIM-grade design intelligence",
          body: "BIM, clash-detection, and design-coordination intelligence engineered for engineering and design teams.",
        },
        {
          title: "Site safety and productivity",
          body: "Field intelligence — safety, productivity, and quality — engineered for the realities of the active construction site.",
        },
        {
          title: "Capital-program analytics",
          body: "Portfolio, contractor, and benchmark intelligence engineered for the program director responsible for the whole.",
        },
      ],
      clients: [
        "Global EPCs",
        "Developers & Infrastructure Owners",
        "Architects & Engineering Firms",
        "Public Infrastructure Authorities",
        "Real Estate & Industrial Owners",
        "Construction-Tech Innovators",
      ],
      metrics: [
        { value: "Multi-year", label: "Built for capital-project time" },
        { value: "Field-aware", label: "Engineered for the site" },
        { value: "BIM-native", label: "Speaks the language of design" },
        { value: "Auditable", label: "Every change, every decision" },
      ],
      doctrine: [
        "Site safety is the gating standard.",
        "We respect the foreman, the engineer, and the architect.",
        "The schedule is real. So is the soil.",
        "Quality is built, not inspected.",
      ],
    },
  },
  {
    slug: "real-estate",
    name: "Real Estate & PropTech",
    platform: "Voranox Domus",
    category: "Commerce",
    tagline: "Intelligence for the built environment.",
    description:
      "Investment, leasing, and operations intelligence for institutional real estate and REITs.",
    capabilities: [
      "Investment analytics",
      "Smart building AI",
      "Tenant intelligence",
      "Portfolio ESG",
    ],
    href: "https://domus.voranox.com",
    deep: {
      longTagline:
        "Domus is the investment, leasing, and operations intelligence for the institutional real-estate sector.",
      manifesto:
        "Real estate is the largest asset class in the world and the least digitally legible. Voranox Domus serves the institutional investors, REITs, and operators whose capital sits in buildings — turning the operational reality of leases, tenants, and physical assets into the intelligence that institutional capital can actually use. Domus is engineered for the cycle, not the quarter.",
      pillars: [
        {
          name: "Investment Analytics",
          body: "Acquisition, valuation, and portfolio-construction intelligence engineered for the institutional capital allocator.",
        },
        {
          name: "Leasing & Tenant",
          body: "Leasing, tenant, and customer-experience intelligence engineered for the operators of office, retail, industrial, and residential.",
        },
        {
          name: "Smart Building Operations",
          body: "Energy, capex, and operations intelligence engineered for the property and facilities teams keeping the asset productive.",
        },
        {
          name: "ESG & Climate",
          body: "Building-level emissions, transition-risk, and disclosure intelligence engineered for fiduciary use.",
        },
      ],
      useCases: [
        {
          title: "Acquisition and valuation",
          body: "Continuous market, asset, and portfolio intelligence engineered for institutional acquisition and disposition decisions.",
        },
        {
          title: "Leasing and tenant intelligence",
          body: "Leasing, retention, and tenant-experience intelligence — turning the lease from a contract event into a continuous relationship.",
        },
        {
          title: "Smart building operations",
          body: "Energy, capex, and operations intelligence — engineered for both NOI and the climate-disclosure obligations modern buildings face.",
        },
        {
          title: "Climate-aware portfolio management",
          body: "Building-level emissions, transition-risk, and physical-risk intelligence engineered for fiduciary portfolio management.",
        },
      ],
      clients: [
        "REITs & Listed Real Estate",
        "Pension & Insurance RE Investors",
        "Private Equity Real Estate",
        "Operators & Asset Managers",
        "Sovereign Wealth Real Estate",
        "Public-Sector Estate Authorities",
      ],
      metrics: [
        { value: "Asset-level", label: "From the lease to the portfolio" },
        { value: "Climate-aware", label: "Transition risk, by design" },
        { value: "Multi-sector", label: "Office, retail, industrial, residential" },
        { value: "Fiduciary-grade", label: "Engineered for the IC" },
      ],
      doctrine: [
        "Buildings are physical assets first.",
        "The tenant is the customer.",
        "Climate disclosure is a fiduciary obligation.",
        "The cycle is real. We plan accordingly.",
      ],
    },
  },
  {
    slug: "agriculture",
    name: "Agriculture & Agritech",
    platform: "Voranox Verdant",
    category: "Industry",
    tagline: "Feeding nine billion, intelligently.",
    description:
      "Precision agriculture, crop intelligence, and food chain analytics for growers, co-ops, and agribusiness.",
    capabilities: [
      "Precision farming",
      "Yield forecasting",
      "Soil & water AI",
      "Commodity intelligence",
    ],
    href: "https://verdant.voranox.com",
    deep: {
      longTagline:
        "Verdant is the agronomic and commercial intelligence for the growers, cooperatives, and agribusinesses feeding the world.",
      manifesto:
        "Agriculture is the most consequential industry humans have ever practiced and the one most directly exposed to climate, geopolitics, and biology. Voranox Verdant serves the growers, cooperatives, and global agribusinesses producing and trading the world's food and fiber. Verdant is engineered for the field as much as for the trading desk — and for the long arc that connects them.",
      pillars: [
        {
          name: "Precision Agriculture",
          body: "Field-level agronomic intelligence engineered for growers and agronomists — soil, water, crop, and input.",
        },
        {
          name: "Yield & Climate",
          body: "Yield, weather, and climate-risk intelligence engineered for growers, cooperatives, and crop insurers.",
        },
        {
          name: "Supply Chain & Trading",
          body: "Origin-to-destination intelligence for cooperatives, traders, and processors of the world's commodities.",
        },
        {
          name: "Sustainability & Compliance",
          body: "Carbon, deforestation, and traceability intelligence engineered for EUDR and the next regulatory regime.",
        },
      ],
      useCases: [
        {
          title: "Field-level agronomy",
          body: "Soil, water, crop, and input intelligence engineered for the agronomist and grower making the decisions on the ground.",
        },
        {
          title: "Yield and weather forecasting",
          body: "Crop yield and weather-risk intelligence calibrated to local agronomy and climate — for cooperatives, processors, and insurers.",
        },
        {
          title: "Origin-to-destination supply chain",
          body: "Continuous intelligence across grain, soft, and protein supply chains — from origin to processor to global market.",
        },
        {
          title: "Deforestation and traceability",
          body: "EUDR-grade traceability and deforestation intelligence — engineered for the regulatory regime that is already arriving.",
        },
      ],
      clients: [
        "Global Grain & Commodity Traders",
        "Agricultural Cooperatives",
        "Food & Beverage Processors",
        "Crop Insurers & Reinsurers",
        "Agribusiness Input Providers",
        "Public Agricultural Authorities",
      ],
      metrics: [
        { value: "Field-grade", label: "Engineered for agronomic reality" },
        { value: "EUDR-ready", label: "Traceability, by default" },
        { value: "Multi-region", label: "Every major growing geography" },
        { value: "Climate-aware", label: "Risk modeled at the field" },
      ],
      doctrine: [
        "The grower is the customer. Always.",
        "The field is the source of truth. The model serves it.",
        "Traceability is a feature of legitimacy, not an inconvenience.",
        "Food security is a public good. We engineer accordingly.",
      ],
    },
  },
  {
    slug: "food-beverage",
    name: "Food, Beverage & Hospitality",
    platform: "Voranox Hearth",
    category: "Commerce",
    tagline: "From farm to table, intelligently served.",
    description:
      "Demand, menu, and operations intelligence for global food, beverage, and hospitality leaders.",
    capabilities: [
      "Demand forecasting",
      "Menu intelligence",
      "Cold-chain AI",
      "Guest experience",
    ],
    href: "https://hearth.voranox.com",
    deep: {
      longTagline:
        "Hearth is the demand, menu, and operations intelligence for the global food, beverage, and hospitality leaders.",
      manifesto:
        "Hospitality is the original product of human warmth, scaled into one of the largest industries on earth. Voranox Hearth serves the restaurants, hotels, and beverage companies whose work is to serve, well, at scale. Hearth is engineered for both the cadence of service and the discipline of global operations.",
      pillars: [
        {
          name: "Demand & Menu",
          body: "Demand forecasting and menu intelligence engineered for the operators of restaurants, beverage brands, and food service.",
        },
        {
          name: "Cold-Chain Operations",
          body: "Cold-chain, freshness, and waste intelligence engineered for the realities of perishable food at scale.",
        },
        {
          name: "Guest Experience",
          body: "Guest, loyalty, and personalization intelligence engineered for hospitality brands serving people, not just transactions.",
        },
        {
          name: "Operations & Labor",
          body: "Labor, scheduling, and unit-economics intelligence engineered for the realities of hospitality operations.",
        },
      ],
      useCases: [
        {
          title: "Demand forecasting and menu engineering",
          body: "Continuous demand and menu intelligence — engineered for the cadence of service and the realities of supply.",
        },
        {
          title: "Cold-chain and waste intelligence",
          body: "Cold-chain integrity and waste reduction intelligence engineered for both food safety and unit economics.",
        },
        {
          title: "Guest and loyalty intelligence",
          body: "Continuous guest, loyalty, and personalization intelligence engineered for hospitality brands operating at scale.",
        },
        {
          title: "Labor and unit operations",
          body: "Labor, scheduling, and unit-economics intelligence engineered for the realities of the dining room and the front desk.",
        },
      ],
      clients: [
        "Global Restaurant Brands",
        "Hotel & Resort Groups",
        "Food & Beverage Manufacturers",
        "Catering & Food Service",
        "Beverage Conglomerates",
        "Hospitality Investors & Operators",
      ],
      metrics: [
        { value: "Hospitality-first", label: "The guest is the standard" },
        { value: "Multi-format", label: "QSR to luxury, every format" },
        { value: "Real-time", label: "The cadence of service" },
        { value: "Unit-aware", label: "Economics down to the unit" },
      ],
      doctrine: [
        "The guest is the only judge that matters.",
        "Food safety is the floor. Hospitality is the gift.",
        "We respect the line cook, the server, and the front-desk agent.",
        "Hospitality is human. The model serves the humanity.",
      ],
    },
  },
  {
    slug: "retail",
    name: "Retail & E-Commerce",
    platform: "Voranox Bazaar",
    category: "Commerce",
    tagline: "The intelligent commerce engine.",
    description:
      "Merchandising, pricing, and customer intelligence for global retail and digital commerce.",
    capabilities: [
      "Personalization AI",
      "Pricing intelligence",
      "Inventory optimization",
      "Omnichannel analytics",
    ],
    href: "https://bazaar.voranox.com",
    deep: {
      longTagline:
        "Bazaar is the merchandising, pricing, and customer intelligence for the global retail and digital commerce industry.",
      manifesto:
        "Retail is the most direct relationship most companies have with their customers and the most volatile arena of modern commerce. Voranox Bazaar serves the global retailers, digital commerce leaders, and category managers whose results are decided shopping cart by shopping cart. Bazaar is engineered for the speed of commerce and the depth that real personalization requires.",
      pillars: [
        {
          name: "Personalization",
          body: "Customer, recommendation, and content intelligence engineered for retailers serving real people, not data points.",
        },
        {
          name: "Pricing & Promotion",
          body: "Pricing, promotion, and markdown intelligence engineered for the cadence and competitive reality of retail.",
        },
        {
          name: "Inventory & Allocation",
          body: "Demand, inventory, and allocation intelligence engineered for the realities of multi-channel retail networks.",
        },
        {
          name: "Omnichannel Analytics",
          body: "Cross-channel customer, traffic, and conversion intelligence engineered for the modern retailer's operating reality.",
        },
      ],
      useCases: [
        {
          title: "Personalization at retail scale",
          body: "Customer-level personalization across channels — engineered for relevance without surrendering customer trust.",
        },
        {
          title: "Pricing and promotion",
          body: "Continuous pricing, promotion, and markdown intelligence — engineered for margin and competitive defense together.",
        },
        {
          title: "Inventory and allocation",
          body: "Demand, inventory, and allocation intelligence engineered for the operational realities of stores, DCs, and digital fulfillment.",
        },
        {
          title: "Omnichannel customer intelligence",
          body: "Cross-channel customer, traffic, and conversion intelligence engineered for the modern omnichannel operating model.",
        },
      ],
      clients: [
        "Global Retailers",
        "Digital Commerce Leaders",
        "Department Stores & Specialty",
        "Grocery & Convenience Chains",
        "Marketplaces & Platforms",
        "Wholesale & Distribution",
      ],
      metrics: [
        { value: "Customer-first", label: "Personalization, with consent" },
        { value: "Real-time", label: "The cadence of commerce" },
        { value: "Omnichannel", label: "Stores, digital, marketplace" },
        { value: "Margin-aware", label: "Built for the P&L" },
      ],
      doctrine: [
        "The customer's trust is the only asset that compounds.",
        "Personalization without consent is surveillance.",
        "Margin is earned. Markdown is information.",
        "Retail is human. The model serves the humanity.",
      ],
    },
  },
  {
    slug: "consumer-goods",
    name: "Consumer Goods & FMCG",
    platform: "Voranox Vivid",
    category: "Commerce",
    tagline: "Brand intelligence at planetary scale.",
    description:
      "Brand, channel, and consumer intelligence for the world's largest CPG companies.",
    capabilities: [
      "Brand analytics",
      "Channel intelligence",
      "Consumer AI",
      "Trade promotion",
    ],
    href: "https://vivid.voranox.com",
    deep: {
      longTagline:
        "Vivid is the brand, channel, and consumer intelligence for the world's largest CPG companies.",
      manifesto:
        "Consumer goods is the planetary-scale industry of everyday life. Voranox Vivid serves the CPG companies whose products move through tens of millions of shopping carts each day — turning the firehose of point-of-sale, channel, and panel data into the brand and category intelligence that actually informs the next decision. Vivid is engineered for the cadence at which CPG actually operates.",
      pillars: [
        {
          name: "Brand Analytics",
          body: "Brand health, equity, and competitive intelligence engineered for the brand teams that own the relationship with the consumer.",
        },
        {
          name: "Channel Intelligence",
          body: "Channel, retailer, and shopper intelligence engineered for the realities of CPG distribution and trade.",
        },
        {
          name: "Consumer & Innovation",
          body: "Consumer, panel, and innovation intelligence engineered for the teams pursuing tomorrow's product portfolio.",
        },
        {
          name: "Trade Promotion",
          body: "Trade promotion, pricing, and revenue-management intelligence engineered for the commercial realities of modern retail.",
        },
      ],
      useCases: [
        {
          title: "Continuous brand health",
          body: "Brand equity, sentiment, and competitive intelligence — turning brand tracking from quarterly study into continuous instrument.",
        },
        {
          title: "Channel and retailer intelligence",
          body: "Channel, retailer, and shopper intelligence engineered for the cadence of category reviews and joint business planning.",
        },
        {
          title: "Innovation and category management",
          body: "Consumer, panel, and innovation intelligence engineered for the category and innovation teams pursuing the next launch.",
        },
        {
          title: "Trade promotion optimization",
          body: "Trade promotion and revenue-management intelligence engineered for the joint reality of brand and retailer.",
        },
      ],
      clients: [
        "Global Top-50 CPG Companies",
        "Beverage Conglomerates",
        "Personal & Household Care",
        "Packaged Food Manufacturers",
        "Beauty & Wellness Brands",
        "Emerging DTC Innovators",
      ],
      metrics: [
        { value: "Planet-scale", label: "Tens of millions of consumers" },
        { value: "Multi-market", label: "Every developed and emerging market" },
        { value: "Continuous", label: "Brand health, always on" },
        { value: "Margin-aware", label: "Built for the P&L" },
      ],
      doctrine: [
        "The consumer is sovereign. We listen.",
        "Brand equity is the most patient asset on the balance sheet.",
        "Channel partners are partners. We engineer joint value.",
        "Marketing is craft. The model serves the craft.",
      ],
    },
  },
  {
    slug: "luxury",
    name: "Luxury & Fashion",
    platform: "Voranox Atelier",
    category: "Commerce",
    tagline: "Intelligence, tailored to the maison.",
    description:
      "Clienteling, creative intelligence, and provenance analytics for luxury houses and fashion conglomerates.",
    capabilities: [
      "Clienteling AI",
      "Creative intelligence",
      "Provenance & authenticity",
      "Boutique analytics",
    ],
    href: "https://atelier.voranox.com",
    deep: {
      longTagline:
        "Atelier is the clienteling, creative, and provenance intelligence engineered for the maisons of luxury.",
      manifesto:
        "Luxury is a profession of patience, craft, and the relationship between the maison and the client. Voranox Atelier serves the houses, fashion conglomerates, and luxury operators whose work depends on a different cadence than the rest of commerce. Atelier is engineered with the discretion the category requires — and the technical sophistication the contemporary maison demands.",
      pillars: [
        {
          name: "Clienteling",
          body: "Client, household, and relationship intelligence engineered for the sales associates who carry the maison's relationship with the client.",
        },
        {
          name: "Creative & Collection",
          body: "Creative, collection, and merchandising intelligence engineered for the teams shaping each season.",
        },
        {
          name: "Provenance & Authenticity",
          body: "Provenance, authentication, and traceability intelligence engineered for the authenticity that luxury requires.",
        },
        {
          name: "Boutique & Network",
          body: "Boutique, traffic, and network intelligence engineered for the realities of luxury distribution.",
        },
      ],
      useCases: [
        {
          title: "Sales-associate clienteling",
          body: "Household-level relationship intelligence — engineered to serve the associate, not to replace them.",
        },
        {
          title: "Creative and collection intelligence",
          body: "Creative, color, and collection intelligence engineered for the teams shaping each season — informing, not dictating.",
        },
        {
          title: "Provenance and authentication",
          body: "Provenance and authentication intelligence engineered for the integrity the maison's name requires.",
        },
        {
          title: "Boutique-network intelligence",
          body: "Boutique, traffic, and network intelligence engineered for the realities of luxury distribution and clienteling.",
        },
      ],
      clients: [
        "Luxury Maisons & Houses",
        "Fashion Conglomerates",
        "Watchmaking & Jewelry",
        "Beauty & Fragrance Houses",
        "Luxury Hospitality",
        "Heritage & Specialist Brands",
      ],
      metrics: [
        { value: "Discreet", label: "Engagement by default" },
        { value: "Maison-grade", label: "Engineered for the house" },
        { value: "Provenanced", label: "Authenticity, by design" },
        { value: "Multi-region", label: "Every key client geography" },
      ],
      doctrine: [
        "The maison's relationship with the client is sacred.",
        "Discretion is the standard, not the exception.",
        "Craft is the soul of luxury. We serve it.",
        "The associate is the maison's voice. We empower them.",
      ],
    },
  },
  {
    slug: "media",
    name: "Media, Entertainment & Gaming",
    platform: "Voranox Lyric",
    category: "Knowledge",
    tagline: "Intelligence for the storytellers.",
    description:
      "Content, audience, and rights intelligence for studios, broadcasters, publishers, and game makers.",
    capabilities: [
      "Audience AI",
      "Content intelligence",
      "Rights & royalties",
      "Live & streaming analytics",
    ],
    href: "https://lyric.voranox.com",
    deep: {
      longTagline:
        "Lyric is the audience, content, and rights intelligence platform for the storytellers — studios, broadcasters, publishers, and game makers.",
      manifesto:
        "Media is the most direct way societies make sense of themselves. Voranox Lyric serves the studios, broadcasters, publishers, and game makers whose work shapes that sense-making — at the cadence of attention and the discipline of rights and royalties. Lyric is engineered for the creative business, with the rigor of a real industry platform.",
      pillars: [
        {
          name: "Audience Intelligence",
          body: "Cross-platform audience, engagement, and lifetime-value intelligence engineered for media operators in a fragmented ecosystem.",
        },
        {
          name: "Content Intelligence",
          body: "Title, library, and slate intelligence engineered for the creative and commercial teams shaping the offering.",
        },
        {
          name: "Rights & Royalties",
          body: "Rights, royalties, and IP intelligence engineered for the contractual realities of modern media.",
        },
        {
          name: "Live & Streaming Operations",
          body: "Live, streaming, and gaming-operations intelligence engineered for the technical realities of modern distribution.",
        },
      ],
      useCases: [
        {
          title: "Audience and engagement intelligence",
          body: "Cross-platform audience, engagement, and lifetime-value intelligence — turning the firehose of telemetry into actionable strategy.",
        },
        {
          title: "Title and slate intelligence",
          body: "Title, library, and slate intelligence — informing greenlight, acquisition, and licensing decisions with rigor and humility.",
        },
        {
          title: "Rights and royalties",
          body: "Rights, royalties, and IP intelligence engineered for the contractual realities of modern media and gaming.",
        },
        {
          title: "Live and streaming operations",
          body: "Live, streaming, and gaming-operations intelligence engineered for technical reliability and audience continuity.",
        },
      ],
      clients: [
        "Global Studios",
        "Broadcasters & Networks",
        "Publishers & Press",
        "Streaming Platforms",
        "Music Labels & Publishers",
        "Game Studios & Publishers",
      ],
      metrics: [
        { value: "Cross-platform", label: "Linear, streaming, social, gaming" },
        { value: "Rights-aware", label: "IP integrity, by design" },
        { value: "Real-time", label: "Live and streaming cadence" },
        { value: "Multi-region", label: "Every major media market" },
      ],
      doctrine: [
        "Storytelling is craft. The model serves the craft.",
        "Audiences are people. We respect them.",
        "Rights are sacred. So is the contract.",
        "The creative voice is the ground truth, not the model.",
      ],
    },
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    platform: "Voranox Pulse",
    category: "Infrastructure",
    tagline: "The intelligent network.",
    description:
      "Network, customer, and service intelligence for global telcos and connectivity providers.",
    capabilities: [
      "Network AI",
      "Customer intelligence",
      "5G/6G optimization",
      "Fraud & assurance",
    ],
    href: "https://pulse.voranox.com",
    deep: {
      longTagline:
        "Pulse is the network, customer, and service intelligence engineered for the global telcos and connectivity providers.",
      manifesto:
        "Telecommunications is the substrate of every other digital industry — the unglamorous infrastructure on which the modern economy assumes the right to depend. Voranox Pulse serves the telcos, MVNOs, and connectivity providers whose work is to keep the substrate stable while the world's traffic continues to compound. Pulse is engineered for the cadence of network operations and the discipline of telco economics.",
      pillars: [
        {
          name: "Network Intelligence",
          body: "Radio, transport, and core-network intelligence engineered for the engineers responsible for the substrate.",
        },
        {
          name: "Customer & Care",
          body: "Customer, care, and experience intelligence engineered for telcos serving tens of millions of subscribers.",
        },
        {
          name: "5G & 6G Operations",
          body: "5G, slicing, and 6G readiness intelligence engineered for the operators delivering next-generation connectivity.",
        },
        {
          name: "Fraud & Assurance",
          body: "Revenue, fraud, and assurance intelligence engineered for the long-tail integrity of telco operations.",
        },
      ],
      useCases: [
        {
          title: "RAN and transport optimization",
          body: "Radio, transport, and core-network optimization intelligence — engineered for both customer experience and capex efficiency.",
        },
        {
          title: "Customer experience and care",
          body: "Continuous customer-experience intelligence — engineered for retention, NPS, and the realities of telco service.",
        },
        {
          title: "5G slicing and enterprise",
          body: "5G slicing and enterprise-connectivity intelligence engineered for the operators monetizing the next generation of network.",
        },
        {
          title: "Fraud and revenue assurance",
          body: "Continuous fraud and revenue-assurance intelligence engineered for the long-tail integrity of telco operations.",
        },
      ],
      clients: [
        "National & Global Telcos",
        "Mobile & Fixed-Line Operators",
        "Cable & Broadband Providers",
        "Towercos & Infrastructure",
        "MVNOs & Specialty Operators",
        "Public-Sector Connectivity",
      ],
      metrics: [
        { value: "24/7/365", label: "The substrate cannot stop" },
        { value: "Multi-region", label: "Global telco coverage" },
        { value: "Real-time", label: "RAN-to-core cadence" },
        { value: "Auditable", label: "Fraud and assurance ready" },
      ],
      doctrine: [
        "The network is the product. We engineer accordingly.",
        "Customer experience is what the meter actually measures.",
        "Capex discipline outlives revenue cycles.",
        "Fraud and assurance are continuous, not periodic.",
      ],
    },
  },
  {
    slug: "technology",
    name: "Technology & Software",
    platform: "Voranox Nexus",
    category: "Knowledge",
    tagline: "Intelligence for those who build it.",
    description:
      "Engineering productivity, product intelligence, and AI-native operations for tech leaders.",
    capabilities: [
      "Engineering analytics",
      "Product intelligence",
      "AI evaluation",
      "Cloud cost AI",
    ],
    href: "https://nexus.voranox.com",
    deep: {
      longTagline:
        "Nexus is the engineering, product, and AI-operations intelligence platform for the technology companies building the rest.",
      manifesto:
        "Technology is the industry that builds the industries. Voranox Nexus serves the engineering organizations, product teams, and AI operations groups inside the technology companies whose decisions compound across every other sector. Nexus is engineered for the engineers, with the discipline of an industry platform rather than the bloat of a developer-tools fad.",
      pillars: [
        {
          name: "Engineering Productivity",
          body: "Engineering velocity, quality, and developer-experience intelligence engineered for the realities of modern software organizations.",
        },
        {
          name: "Product Intelligence",
          body: "Product, growth, and customer intelligence engineered for the product organizations of modern technology companies.",
        },
        {
          name: "AI Operations & Evaluation",
          body: "AI evaluation, observability, and governance intelligence engineered for the operators of production AI systems.",
        },
        {
          name: "Cloud & Cost",
          body: "Cloud cost, capacity, and reliability intelligence engineered for the engineers running production infrastructure.",
        },
      ],
      useCases: [
        {
          title: "Engineering velocity intelligence",
          body: "Continuous engineering-velocity, quality, and developer-experience intelligence engineered for engineering leaders, not for vanity metrics.",
        },
        {
          title: "Product and growth intelligence",
          body: "Continuous product, growth, and customer intelligence engineered for the product organization actually shipping the work.",
        },
        {
          title: "AI evaluation and governance",
          body: "Continuous AI evaluation, observability, and governance intelligence engineered for production AI systems.",
        },
        {
          title: "Cloud cost and reliability",
          body: "Cloud cost, capacity, and reliability intelligence engineered for the engineers responsible for the bill and the uptime.",
        },
      ],
      clients: [
        "Hyperscalers & Cloud Providers",
        "Enterprise Software Companies",
        "Frontier AI & Research Labs",
        "Internet & Consumer Tech",
        "FinTech & RegTech Innovators",
        "Public-Sector Tech Programs",
      ],
      metrics: [
        { value: "Engineering-grade", label: "Built by engineers, for engineers" },
        { value: "AI-aware", label: "Production AI as first-class" },
        { value: "Real-time", label: "The cadence of engineering" },
        { value: "Auditable", label: "Every model, every decision" },
      ],
      doctrine: [
        "We respect the engineer who ships the code.",
        "Productivity is shipped, not measured.",
        "AI in production is engineering, not magic.",
        "Cost discipline outlives growth narratives.",
      ],
    },
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    platform: "Voranox Bastion",
    category: "Knowledge",
    tagline: "The intelligence layer for cyber defense.",
    description:
      "Threat, exposure, and resilience intelligence for CISOs, SOCs, and national cyber commands.",
    capabilities: [
      "Threat intelligence",
      "Exposure management",
      "SOC autonomy",
      "Resilience modeling",
    ],
    href: "https://bastion.voranox.com",
    deep: {
      longTagline:
        "Bastion is the intelligence and autonomy layer that turns the modern SOC from a queue of alerts into a system of defense.",
      manifesto:
        "Cyber defense is the only profession where the adversary writes the test, grades the answer, and takes the consequences. Voranox Bastion exists to give defenders the patience, scale, and continuity that human teams alone cannot sustain — without surrendering the human judgment that defense ultimately requires. Bastion is engineered to the standards of the CISOs, SOCs, and national cyber commands whose mandate does not allow for failure.",
      pillars: [
        {
          name: "Threat Intelligence",
          body: "Continuous fusion of internal telemetry, vendor feeds, dark-web sources, and open-source signal — distilled into the threat picture that decisions are actually made from.",
        },
        {
          name: "Exposure Management",
          body: "Asset, identity, and configuration intelligence across the enterprise — quantified by exploitability, blast radius, and priority of remediation.",
        },
        {
          name: "SOC Autonomy",
          body: "Tier-1 and Tier-2 triage, enrichment, and response automation — bounded by policy, audited end-to-end, and reviewable by the analyst at any step.",
        },
        {
          name: "Resilience Modeling",
          body: "Continuous resilience and recoverability modeling — answering not just whether you will be breached, but how quickly you will recover.",
        },
      ],
      useCases: [
        {
          title: "Autonomous SOC Tier-1",
          body: "Triage, enrichment, and containment of routine alerts at machine speed — with full evidentiary chain to the originating signal and human escalation on novelty.",
        },
        {
          title: "Exposure prioritization at enterprise scale",
          body: "Continuously scored exposure across assets, identities, and configurations — turning the CVE backlog into a ranked list of what an adversary would actually exploit.",
        },
        {
          title: "Threat-led briefings",
          body: "CISO and board-grade briefings on the threats that actually matter to your sector, your geography, and your stack — with explicit confidence and source.",
        },
        {
          title: "Tabletop & resilience exercises",
          body: "Continuous, scenario-driven exercising of incident response, recovery, and crisis communications — calibrated to the institution's risk profile.",
        },
      ],
      clients: [
        "CISOs of Global Enterprises",
        "Financial-Sector ISACs",
        "Critical-Infrastructure Operators",
        "National Cyber Commands & CERTs",
        "Defense & Intelligence Agencies",
        "Managed Security Providers",
      ],
      metrics: [
        { value: "24/7/365", label: "Continuous defense posture" },
        { value: "Sub-minute", label: "Tier-1 triage latency" },
        { value: "Audited", label: "Every action, replayable" },
        { value: "Sovereign", label: "Deployable in-jurisdiction" },
      ],
      doctrine: [
        "The defender's mistake is the adversary's payday — we engineer for the defender's good day.",
        "Automation is bounded by policy, not by ambition.",
        "Every action is reviewable. Always.",
        "The human analyst is the institution's last and best instrument.",
      ],
    },
  },
  {
    slug: "education",
    name: "Education & EdTech",
    platform: "Voranox Lyceum",
    category: "Knowledge",
    tagline: "Learning, intelligently personalized.",
    description:
      "Learning intelligence, institutional analytics, and credentialing for K-12, higher ed, and lifelong learning.",
    capabilities: [
      "Adaptive learning",
      "Institutional analytics",
      "Credentialing AI",
      "Faculty research tools",
    ],
    href: "https://lyceum.voranox.com",
    deep: {
      longTagline:
        "Lyceum is the learning, institutional, and credentialing intelligence platform for K-12, higher education, and lifelong learning.",
      manifesto:
        "Education is the most patient industry humans have built — and the one most consequential to the next century. Voranox Lyceum serves the schools, universities, and learning organizations whose work compounds across generations. Lyceum is engineered with the dignity learners deserve, the discipline regulators require, and the long horizon education actually demands.",
      pillars: [
        {
          name: "Adaptive Learning",
          body: "Learner-level intelligence engineered for educators — adaptive, evidence-based, and respectful of the learner.",
        },
        {
          name: "Institutional Analytics",
          body: "Enrollment, retention, and outcomes intelligence engineered for institutional leaders responsible for the whole.",
        },
        {
          name: "Credentialing & Assessment",
          body: "Assessment, credential, and pathway intelligence engineered for the integrity that credentials require.",
        },
        {
          name: "Faculty & Research",
          body: "Faculty, research, and grant intelligence engineered for the academic professionals who make institutions great.",
        },
      ],
      useCases: [
        {
          title: "Adaptive learning at scale",
          body: "Adaptive, evidence-based learning intelligence engineered for educators serving real learners — not standardized cohorts.",
        },
        {
          title: "Enrollment and retention",
          body: "Enrollment, retention, and outcomes intelligence engineered for the institutional leaders responsible for the whole.",
        },
        {
          title: "Credentialing and assessment",
          body: "Assessment integrity, credential pathway, and skills intelligence engineered for the integrity that credentials require.",
        },
        {
          title: "Faculty and research support",
          body: "Faculty, research, and grant intelligence engineered for the academic professionals carrying the institution.",
        },
      ],
      clients: [
        "Universities & Higher Education",
        "K-12 School Systems",
        "Education Ministries",
        "Lifelong Learning Providers",
        "Workforce & Skills Programs",
        "EdTech Innovators",
      ],
      metrics: [
        { value: "Learner-first", label: "The dignity of the student" },
        { value: "Evidence-based", label: "Pedagogy, not vibes" },
        { value: "FERPA + GDPR", label: "Privacy posture by default" },
        { value: "Multi-decade", label: "Education's actual horizon" },
      ],
      doctrine: [
        "The learner's dignity is the floor.",
        "Privacy is sacred. Especially for minors.",
        "Pedagogy is craft. The model serves it.",
        "Credentials are integrity. We engineer accordingly.",
      ],
    },
  },
  {
    slug: "research",
    name: "Research & Academia",
    platform: "Voranox Athenaeum",
    category: "Knowledge",
    tagline: "Where knowledge compounds.",
    description:
      "Research intelligence, grant analytics, and discovery platforms for universities and research institutes.",
    capabilities: [
      "Literature synthesis",
      "Grant intelligence",
      "Research operations",
      "Open science tooling",
    ],
    href: "https://athenaeum.voranox.com",
    deep: {
      longTagline:
        "Athenaeum is the discovery, grant, and research-operations intelligence for the institutions where knowledge compounds.",
      manifesto:
        "Research is among the slowest and most patient forms of human progress — and among the most resistant to platform-thinking that does not respect the work. Voranox Athenaeum serves the universities, research institutes, and funders whose work spans the time horizons that actually matter. Athenaeum is engineered for the researcher first, the institution second.",
      pillars: [
        {
          name: "Literature & Synthesis",
          body: "Literature, citation, and synthesis intelligence engineered for the researchers actually pursuing the question.",
        },
        {
          name: "Grant Intelligence",
          body: "Grant, opportunity, and proposal intelligence engineered for principal investigators and research-development offices.",
        },
        {
          name: "Research Operations",
          body: "Research-operations, lab, and core-facility intelligence engineered for the institutional leaders running research.",
        },
        {
          name: "Open Science",
          body: "Open-science, data-sharing, and reproducibility intelligence engineered for the integrity research requires.",
        },
      ],
      useCases: [
        {
          title: "Literature synthesis at depth",
          body: "Cross-domain literature and citation intelligence engineered for the researcher pursuing the actual question.",
        },
        {
          title: "Grant and opportunity intelligence",
          body: "Grant and opportunity intelligence engineered for principal investigators and research-development offices.",
        },
        {
          title: "Research operations",
          body: "Research-operations, lab, and core-facility intelligence engineered for institutional leaders running research at scale.",
        },
        {
          title: "Reproducibility and open science",
          body: "Reproducibility, data-sharing, and open-science intelligence engineered for the integrity research requires.",
        },
      ],
      clients: [
        "Research Universities",
        "National Research Institutes",
        "Funding Agencies",
        "Hospital Research Networks",
        "Industrial Research Labs",
        "Multilateral Research Bodies",
      ],
      metrics: [
        { value: "Researcher-first", label: "The PI is the customer" },
        { value: "Reproducible", label: "Integrity, by design" },
        { value: "Open-standards", label: "By policy, by principle" },
        { value: "Multi-domain", label: "Every field of inquiry" },
      ],
      doctrine: [
        "The researcher is the customer. Always.",
        "Reproducibility is a feature, not a friction.",
        "Open science is the standard, not a slogan.",
        "Knowledge compounds. We engineer for the long horizon.",
      ],
    },
  },
  {
    slug: "legal",
    name: "Legal & Professional Services",
    platform: "Voranox Counsel",
    category: "Legal",
    tagline: "The intelligent practice.",
    description:
      "Matter, contract, and knowledge intelligence for law firms, in-house counsel, and consulting firms.",
    capabilities: [
      "Contract intelligence",
      "Matter analytics",
      "eDiscovery AI",
      "Knowledge management",
    ],
    href: "https://counsel.voranox.com",
    deep: {
      longTagline:
        "Counsel is the matter, contract, and knowledge intelligence platform for law firms, in-house counsel, and consulting firms.",
      manifesto:
        "Legal practice is one of the oldest knowledge professions — and the one most often offered shallow technology that does not respect the work. Voranox Counsel serves the law firms, in-house counsel, and consulting firms whose product is judgment under conditions of risk and confidentiality. Counsel is engineered for the practitioner, with the privilege and discretion the profession requires.",
      pillars: [
        {
          name: "Contract Intelligence",
          body: "Contract, clause, and negotiation intelligence engineered for the attorneys and contract professionals actually doing the work.",
        },
        {
          name: "Matter Analytics",
          body: "Matter, billing, and outcome intelligence engineered for the partners and managing counsel running the practice.",
        },
        {
          name: "eDiscovery & Investigations",
          body: "eDiscovery, investigations, and review intelligence engineered for the integrity discovery requires.",
        },
        {
          name: "Knowledge Management",
          body: "Knowledge, precedent, and research intelligence engineered for the long memory of the firm.",
        },
      ],
      useCases: [
        {
          title: "Contract and clause intelligence",
          body: "Continuous contract and clause intelligence engineered for negotiation, review, and ongoing portfolio management.",
        },
        {
          title: "Matter analytics and billing",
          body: "Continuous matter, billing, and outcome intelligence engineered for partners and managing counsel running the practice.",
        },
        {
          title: "eDiscovery and review",
          body: "eDiscovery and review intelligence engineered for the integrity discovery and investigations require.",
        },
        {
          title: "Knowledge and precedent",
          body: "Knowledge, precedent, and research intelligence engineered for the long memory of the firm and its institutional clients.",
        },
      ],
      clients: [
        "Global Law Firms",
        "In-House Counsel",
        "Government & Regulatory Counsel",
        "Consulting Firms",
        "Litigation Funders",
        "Compliance & Investigations",
      ],
      metrics: [
        { value: "Privilege-first", label: "Engineered to preserve privilege" },
        { value: "Discreet", label: "Confidentiality, by default" },
        { value: "Multi-jurisdiction", label: "Global legal coverage" },
        { value: "Auditable", label: "Every artifact, every chain" },
      ],
      doctrine: [
        "Privilege is sacred. We engineer accordingly.",
        "The lawyer's judgment is the product.",
        "Confidentiality is the floor, not a feature.",
        "Citations and provenance are non-negotiable.",
      ],
    },
  },
  {
    slug: "regulatory-compliance",
    name: "Regulatory Affairs & Compliance",
    platform: "Voranox Statute",
    category: "Legal",
    tagline: "Compliance, engineered to the letter and the spirit.",
    description:
      "Regulatory intelligence, obligations management, and compliance operations for global corporates and the authorities that regulate them.",
    capabilities: [
      "Regulatory horizon scanning",
      "Obligations mapping",
      "Compliance operations AI",
      "Regulatory reporting",
    ],
    href: "https://statute.voranox.com",
    deep: {
      longTagline:
        "Statute is the regulatory intelligence platform for the institutions that must keep pace with the law as it is written, interpreted, and enforced.",
      manifesto:
        "Regulation is the grammar of legitimate commerce — and it now changes faster than any compliance function can read. Tens of thousands of regulatory updates issue every year across the jurisdictions a global institution operates in, and the cost of missing one is measured in consent orders, license risk, and public trust. Voranox Statute exists to read the law at the rate it is produced, map it to the obligations an institution actually carries, and turn compliance from a periodic scramble into a continuous, auditable operation.",
      pillars: [
        {
          name: "Regulatory Horizon",
          body: "Continuous monitoring of statutes, rules, guidance, and enforcement actions across jurisdictions — with materiality triage so the compliance function reads what matters.",
        },
        {
          name: "Obligations Mapping",
          body: "A living map from each regulatory provision to the policies, controls, and owners inside the institution that discharge it — with gaps surfaced, not buried.",
        },
        {
          name: "Compliance Operations",
          body: "Attestation, control-testing, and issue-management intelligence engineered for the cadence of a real compliance function.",
        },
        {
          name: "Regulatory Reporting",
          body: "Report production and filing intelligence — every figure traceable to source data and the provision that requires it.",
        },
      ],
      useCases: [
        {
          title: "Horizon scanning with materiality triage",
          body: "Continuous scanning of regulatory publications across jurisdictions, triaged by materiality to the institution's actual footprint — so a change in one market reaches the right owner within hours, not quarters.",
        },
        {
          title: "Living obligations register",
          body: "A continuously reconciled register mapping every applicable provision to the control that discharges it — with drift, gaps, and orphaned controls surfaced to the CCO.",
        },
        {
          title: "Regulatory change impact assessment",
          body: "When a rule changes, Statute traces the change through the obligations map to the affected policies, controls, systems, and training — producing the impact assessment a regulator expects to see.",
        },
        {
          title: "Examination readiness",
          body: "Continuous assembly of the evidentiary record an examiner will ask for — so the institution walks into supervision prepared rather than reconstructing history under deadline.",
        },
      ],
      clients: [
        "Chief Compliance Officers",
        "Global Banks & Insurers",
        "Pharmaceutical & Med-Device Compliance",
        "Energy & Industrial Operators",
        "Regulators & Supervisory Authorities",
        "RegTech & Assurance Partners",
      ],
      metrics: [
        { value: "Multi-jurisdiction", label: "Every operating footprint" },
        { value: "Provision-level", label: "Obligations mapped to controls" },
        { value: "Continuous", label: "Not periodic — always current" },
        { value: "Examiner-ready", label: "Evidence assembled as you go" },
      ],
      doctrine: [
        "The letter of the law and the spirit of the law are both binding.",
        "An obligation without an owner is a finding waiting to happen.",
        "Every compliance assertion must trace to evidence.",
        "The regulator is a counterpart, not an adversary.",
      ],
    },
  },
  {
    slug: "disputes",
    name: "Arbitration & Dispute Resolution",
    platform: "Voranox Accord",
    category: "Legal",
    tagline: "Resolution, at the standard of the tribunal.",
    description:
      "Case, evidence, and settlement intelligence for arbitral institutions, chambers, and the parties appearing before them.",
    capabilities: [
      "Case intelligence",
      "Evidence & disclosure AI",
      "Settlement analytics",
      "Tribunal operations",
    ],
    href: "https://accord.voranox.com",
    deep: {
      longTagline:
        "Accord is the dispute-resolution intelligence platform for arbitral institutions, international tribunals, and the counsel who appear before them.",
      manifesto:
        "Dispute resolution is where commercial relationships are tested against the record. A single international arbitration can carry a million documents, a decade of correspondence, and outcomes measured in the billions — decided by tribunals working under confidentiality and time pressure. Voranox Accord exists to master that record: the evidence, the authorities, the procedural history, and the economics of settlement — engineered to the neutrality and confidentiality the forum demands, in service of the parties, their counsel, and the institutions that administer justice between them.",
      pillars: [
        {
          name: "Case Intelligence",
          body: "The full procedural and factual record of a matter — pleadings, orders, correspondence, exhibits — as a queryable, cited whole.",
        },
        {
          name: "Evidence & Disclosure",
          body: "Document review, privilege screening, and disclosure intelligence at arbitration scale — with the defensibility production demands.",
        },
        {
          name: "Settlement Analytics",
          body: "Quantum modeling, outcome ranges, and settlement-posture intelligence — engineered for the party weighing resolution against award risk.",
        },
        {
          name: "Tribunal Operations",
          body: "Docket, deliberation-support, and drafting intelligence for arbitral institutions and tribunals — with strict party-confidentiality separation.",
        },
      ],
      useCases: [
        {
          title: "Arbitration-scale document mastery",
          body: "A million-document record made queryable and citable — every factual assertion in a memorial traceable to the exhibit that supports it.",
        },
        {
          title: "Privilege and disclosure at speed",
          body: "Review, privilege screening, and production intelligence that compresses disclosure from months to weeks without sacrificing defensibility.",
        },
        {
          title: "Quantum and settlement posture",
          body: "Damages modeling and outcome-range analytics that give the client a grounded view of award risk before the next settlement conversation.",
        },
        {
          title: "Institutional case administration",
          body: "Docket, appointment, and case-management intelligence for arbitral institutions administering hundreds of concurrent matters under confidentiality.",
        },
      ],
      clients: [
        "Arbitral Institutions",
        "International Arbitration Practices",
        "Corporate Disputes Counsel",
        "Investor-State Tribunals",
        "Mediation & ADR Bodies",
        "Litigation Funders",
      ],
      metrics: [
        { value: "Confidential", label: "By the standard of the forum" },
        { value: "Million-document", label: "Records mastered, cited" },
        { value: "Party-separated", label: "Structural confidentiality walls" },
        { value: "Neutral", label: "Engineered for the tribunal's duty" },
      ],
      doctrine: [
        "The record decides. We serve the record.",
        "Confidentiality between parties is structural, not procedural.",
        "The tribunal's neutrality is inviolable — the platform inherits it.",
        "Settlement is a decision for the parties; our job is that it be an informed one.",
      ],
    },
  },
  {
    slug: "accounting-audit",
    name: "Accounting, Audit & Tax",
    platform: "Voranox Ledger",
    category: "Knowledge",
    tagline: "Assurance, automated.",
    description:
      "Audit, tax, and assurance intelligence for the Big Four, mid-market firms, and corporate finance teams.",
    capabilities: [
      "Continuous audit",
      "Tax intelligence",
      "Risk advisory AI",
      "Financial close",
    ],
    href: "https://ledger.voranox.com",
    deep: {
      longTagline:
        "Ledger is the audit, tax, and assurance intelligence engineered for the Big Four, mid-market firms, and corporate finance teams.",
      manifesto:
        "Accounting and audit are the disciplines of public trust in private capital. Voranox Ledger serves the audit, tax, and assurance professionals whose signatures the public depends on — and the corporate finance teams who must be ready for them. Ledger is engineered for the discipline of the profession, not the marketing of it.",
      pillars: [
        {
          name: "Continuous Audit",
          body: "Continuous, risk-based audit intelligence engineered for the audit teams responsible for institutional trust.",
        },
        {
          name: "Tax Intelligence",
          body: "Tax, transfer-pricing, and indirect-tax intelligence engineered for tax professionals and their corporate clients.",
        },
        {
          name: "Risk Advisory",
          body: "Risk, controls, and advisory intelligence engineered for the assurance and advisory practices of modern firms.",
        },
        {
          name: "Financial Close",
          body: "Close, reconciliation, and reporting intelligence engineered for the corporate finance and accounting teams behind every clean opinion.",
        },
      ],
      useCases: [
        {
          title: "Continuous, risk-based audit",
          body: "Continuous audit intelligence — risk-based, evidence-driven, and engineered to the standards of the profession.",
        },
        {
          title: "Tax and transfer-pricing intelligence",
          body: "Tax, transfer-pricing, and indirect-tax intelligence engineered for the realities of multinational corporate operations.",
        },
        {
          title: "Risk and controls advisory",
          body: "Risk, controls, and advisory intelligence engineered for the assurance and advisory practices of modern firms.",
        },
        {
          title: "Financial close and reporting",
          body: "Close, reconciliation, and reporting intelligence engineered for corporate finance teams and their auditors together.",
        },
      ],
      clients: [
        "Big Four Audit Firms",
        "Mid-Market Audit & Tax Firms",
        "Corporate Finance & Controllership",
        "Internal Audit & SOX Programs",
        "Public-Sector Auditors",
        "Regulators & Standards Bodies",
      ],
      metrics: [
        { value: "PCAOB / IAASB", label: "Aligned to the standards" },
        { value: "Multi-GAAP", label: "US GAAP, IFRS, local" },
        { value: "Auditable", label: "Every figure, defensible" },
        { value: "Continuous", label: "Risk-based, not periodic" },
      ],
      doctrine: [
        "Public trust in capital is the standard.",
        "The auditor's signature is sacred.",
        "Independence is a feature, not a friction.",
        "Every figure must be reproducible. Always.",
      ],
    },
  },
  {
    slug: "human-capital",
    name: "Human Capital & Talent",
    platform: "Voranox Cadre",
    category: "Society",
    tagline: "Intelligence for the people who build everything.",
    description:
      "Workforce, talent, and organizational intelligence for global enterprises and HR leaders.",
    capabilities: [
      "Talent intelligence",
      "Skills graphs",
      "Workforce planning",
      "Org network analytics",
    ],
    href: "https://cadre.voranox.com",
    deep: {
      longTagline:
        "Cadre is the workforce, talent, and organizational intelligence engineered for the global enterprises and HR leaders who shape institutional capability.",
      manifesto:
        "Human capital is the only durable advantage modern enterprises actually have. Voranox Cadre serves the HR leaders, talent organizations, and operating leaders responsible for building, sustaining, and renewing institutional capability. Cadre is engineered with the dignity people deserve, the privacy regulation requires, and the rigor that the discipline of human capital actually demands.",
      pillars: [
        {
          name: "Talent Intelligence",
          body: "Talent, sourcing, and workforce-market intelligence engineered for the talent organizations of modern enterprises.",
        },
        {
          name: "Skills Graphs",
          body: "Skills, capability, and learning-pathway intelligence engineered for the realities of modern organizations.",
        },
        {
          name: "Workforce Planning",
          body: "Workforce planning, scenario, and capacity intelligence engineered for the realities of operating leaders.",
        },
        {
          name: "Organizational Network",
          body: "Org-network, collaboration, and culture intelligence engineered for leaders responsible for the institution.",
        },
      ],
      useCases: [
        {
          title: "Talent and workforce-market intelligence",
          body: "Continuous talent, sourcing, and workforce-market intelligence engineered for the realities of modern talent organizations.",
        },
        {
          title: "Skills and capability graphs",
          body: "Skills, capability, and learning-pathway intelligence engineered for the realities of modern, evolving organizations.",
        },
        {
          title: "Workforce planning and scenarios",
          body: "Workforce planning, scenario, and capacity intelligence engineered for operating leaders and HR partners together.",
        },
        {
          title: "Organizational network analytics",
          body: "Org-network, collaboration, and culture intelligence engineered with the dignity of employees as the design constraint.",
        },
      ],
      clients: [
        "Global Enterprises & HR Functions",
        "Talent Acquisition Organizations",
        "Workforce Planning & Strategy",
        "Learning & Development",
        "Public-Sector Workforce Programs",
        "HR Technology Innovators",
      ],
      metrics: [
        { value: "Employee-first", label: "Dignity is the design constraint" },
        { value: "GDPR + global", label: "Privacy posture by default" },
        { value: "Multi-region", label: "Every key labor market" },
        { value: "Auditable", label: "Every decision, defensible" },
      ],
      doctrine: [
        "The dignity of every employee is the floor.",
        "Privacy is sacred. Especially in HR data.",
        "Skills are evolving. Models must too.",
        "Workforce decisions are people decisions. We engineer accordingly.",
      ],
    },
  },
  {
    slug: "marketing",
    name: "Marketing & Advertising",
    platform: "Voranox Resonance",
    category: "Commerce",
    tagline: "Brands, in tune with the world.",
    description:
      "Audience, creative, and media intelligence for global brands, agencies, and ad-tech leaders.",
    capabilities: [
      "Audience graphs",
      "Creative intelligence",
      "Media mix AI",
      "Attribution analytics",
    ],
    href: "https://resonance.voranox.com",
    deep: {
      longTagline:
        "Resonance is the audience, creative, and media intelligence platform for the global brands, agencies, and ad-tech leaders.",
      manifesto:
        "Marketing is the public voice of every business. Voranox Resonance serves the global brands, agencies, and ad-tech operators whose work is to make that voice land — at the cadence of culture and the discipline of measured commercial outcomes. Resonance is engineered for the craft of marketing and the rigor of modern attribution.",
      pillars: [
        {
          name: "Audience Graphs",
          body: "Audience, segment, and persona intelligence engineered for marketers serving real people, with consent and care.",
        },
        {
          name: "Creative Intelligence",
          body: "Creative, brand, and content intelligence engineered for the creative teams shaping the brand voice.",
        },
        {
          name: "Media Mix",
          body: "Media mix, planning, and optimization intelligence engineered for the realities of modern fragmented media.",
        },
        {
          name: "Attribution & MMM",
          body: "Attribution, MMM, and incrementality intelligence engineered for the marketers responsible for actual commercial outcomes.",
        },
      ],
      useCases: [
        {
          title: "Audience and segment intelligence",
          body: "Continuous audience, segment, and persona intelligence engineered for marketers serving real people, with consent.",
        },
        {
          title: "Creative and brand intelligence",
          body: "Creative, brand, and content intelligence engineered for the creative teams shaping voice across formats and channels.",
        },
        {
          title: "Media mix and planning",
          body: "Continuous media mix, planning, and optimization intelligence engineered for the realities of modern, fragmented media.",
        },
        {
          title: "Attribution and incrementality",
          body: "Attribution, MMM, and incrementality intelligence engineered for marketers responsible for actual commercial outcomes.",
        },
      ],
      clients: [
        "Global Brand Marketers",
        "Holding Group & Independent Agencies",
        "Ad-Tech & MarTech Operators",
        "Publishers & Media Owners",
        "Performance & DTC Brands",
        "Sports & Entertainment Brands",
      ],
      metrics: [
        { value: "Consent-first", label: "Privacy by design" },
        { value: "Multi-channel", label: "Every modern medium" },
        { value: "Outcome-grade", label: "Built for commercial reality" },
        { value: "Multi-region", label: "Every key brand geography" },
      ],
      doctrine: [
        "The consumer's consent is the floor.",
        "Creative is craft. The model serves it.",
        "Attribution is hard. We will not pretend otherwise.",
        "Brand equity is patient. We engineer accordingly.",
      ],
    },
  },
  {
    slug: "sports",
    name: "Sports & Athletics",
    platform: "Voranox Arena",
    category: "Society",
    tagline: "Performance, intelligently amplified.",
    description:
      "Performance, scouting, and fan intelligence for clubs, leagues, federations, and broadcasters.",
    capabilities: [
      "Performance analytics",
      "Scouting AI",
      "Fan intelligence",
      "Venue operations",
    ],
    href: "https://arena.voranox.com",
    deep: {
      longTagline:
        "Arena is the performance, scouting, and fan intelligence platform for clubs, leagues, federations, and broadcasters.",
      manifesto:
        "Sport is the most patient and most public meritocracy humans have built. Voranox Arena serves the clubs, leagues, federations, and broadcasters whose work is measured both in the seconds of competition and the decades of institutional excellence. Arena is engineered for the athletes and coaches as much as for the front office.",
      pillars: [
        {
          name: "Performance Analytics",
          body: "Athlete, team, and competition intelligence engineered for coaches and performance staffs.",
        },
        {
          name: "Scouting & Recruitment",
          body: "Scouting, recruitment, and roster intelligence engineered for sporting directors and front offices.",
        },
        {
          name: "Fan & Commercial",
          body: "Fan, ticketing, and commercial intelligence engineered for clubs, leagues, and broadcasters.",
        },
        {
          name: "Venue & Operations",
          body: "Venue, broadcast, and operations intelligence engineered for matchday and live-event reality.",
        },
      ],
      useCases: [
        {
          title: "Performance and tactical analysis",
          body: "Athlete, team, and competition intelligence engineered for the coaches and performance staffs actually on the bench.",
        },
        {
          title: "Scouting and recruitment",
          body: "Continuous scouting and recruitment intelligence engineered for sporting directors and recruitment teams.",
        },
        {
          title: "Fan and commercial intelligence",
          body: "Fan, ticketing, and commercial intelligence engineered for clubs, leagues, and broadcasters serving real fans.",
        },
        {
          title: "Venue and broadcast operations",
          body: "Venue, broadcast, and operations intelligence engineered for matchday excellence and audience experience.",
        },
      ],
      clients: [
        "Professional Clubs & Franchises",
        "National Federations",
        "Leagues & Tours",
        "Broadcasters & Rights Holders",
        "Athletes & Agents",
        "Sports & Entertainment Groups",
      ],
      metrics: [
        { value: "Athlete-first", label: "Health and longevity, prioritized" },
        { value: "Real-time", label: "The cadence of competition" },
        { value: "Multi-sport", label: "Every major code" },
        { value: "Fan-grade", label: "The fan is the customer" },
      ],
      doctrine: [
        "Athlete welfare is the floor.",
        "We respect the coach and the trainer.",
        "Fairness of competition is sacred.",
        "Fans are partners. We engineer the relationship accordingly.",
      ],
    },
  },
  {
    slug: "travel",
    name: "Travel, Tourism & Aviation Services",
    platform: "Voranox Voyage",
    category: "Commerce",
    tagline: "Intelligence for every journey.",
    description:
      "Distribution, revenue, and guest intelligence for airlines, hotels, OTAs, and tourism boards.",
    capabilities: [
      "Revenue management",
      "Distribution AI",
      "Guest intelligence",
      "Destination analytics",
    ],
    href: "https://voyage.voranox.com",
    deep: {
      longTagline:
        "Voyage is the distribution, revenue, and guest intelligence engineered for airlines, hotels, OTAs, and tourism boards.",
      manifesto:
        "Travel is the industry that turns geography into experience. Voranox Voyage serves the airlines, hotels, online travel agencies, and tourism authorities whose work is to make journeys both possible and worthwhile. Voyage is engineered for the cadence of travel commerce and the discipline of yield.",
      pillars: [
        {
          name: "Revenue Management",
          body: "Pricing, inventory, and yield intelligence engineered for the cadence of travel commerce.",
        },
        {
          name: "Distribution Intelligence",
          body: "Channel, OTA, and distribution intelligence engineered for travel suppliers managing complex distribution.",
        },
        {
          name: "Guest Intelligence",
          body: "Guest, loyalty, and personalization intelligence engineered for hospitality and travel brands serving real travelers.",
        },
        {
          name: "Destination & Tourism",
          body: "Destination, demand, and tourism-policy intelligence engineered for tourism boards and destination authorities.",
        },
      ],
      useCases: [
        {
          title: "Yield and revenue management",
          body: "Continuous pricing, inventory, and yield intelligence engineered for travel suppliers responsible for both revenue and customer trust.",
        },
        {
          title: "Distribution intelligence",
          body: "Channel, OTA, and distribution intelligence engineered for travel suppliers managing complex multi-channel distribution.",
        },
        {
          title: "Guest and loyalty",
          body: "Guest, loyalty, and personalization intelligence engineered for travel and hospitality brands serving real travelers.",
        },
        {
          title: "Destination intelligence",
          body: "Destination demand, tourism, and policy intelligence engineered for tourism boards and destination authorities.",
        },
      ],
      clients: [
        "Global Airlines",
        "Hotel & Resort Groups",
        "Online Travel Agencies",
        "Cruise Lines",
        "Tourism Boards & Authorities",
        "Travel Distribution Platforms",
      ],
      metrics: [
        { value: "Real-time", label: "Pricing and inventory cadence" },
        { value: "Multi-channel", label: "Every distribution path" },
        { value: "Guest-first", label: "Personalization with consent" },
        { value: "Multi-region", label: "Every traveler geography" },
      ],
      doctrine: [
        "The traveler's trust is the only asset that compounds.",
        "Yield without service is short-term.",
        "Distribution partners are partners. We engineer accordingly.",
        "Travel is human. The model serves the humanity.",
      ],
    },
  },
  {
    slug: "nonprofit",
    name: "Nonprofit, Philanthropy & NGOs",
    platform: "Voranox Beacon",
    category: "Society",
    tagline: "Intelligence in service of mission.",
    description:
      "Program, donor, and impact intelligence for foundations, NGOs, and humanitarian organizations.",
    capabilities: [
      "Impact measurement",
      "Donor intelligence",
      "Program analytics",
      "Field operations AI",
    ],
    href: "https://beacon.voranox.com",
    deep: {
      longTagline:
        "Beacon is the program, donor, and impact intelligence platform for foundations, NGOs, and humanitarian organizations.",
      manifesto:
        "Nonprofit and philanthropic work is the conscience of the modern economy — and the industry most often offered tooling that does not respect the discipline. Voranox Beacon serves the foundations, NGOs, and humanitarian organizations whose work compounds in lives changed rather than revenues recognized. Beacon is engineered for mission, with the rigor that mission deserves.",
      pillars: [
        {
          name: "Impact Measurement",
          body: "Outcomes, attribution, and learning intelligence engineered for the integrity that mission requires.",
        },
        {
          name: "Donor Intelligence",
          body: "Donor, prospect, and stewardship intelligence engineered for development organizations of every scale.",
        },
        {
          name: "Program Analytics",
          body: "Program, beneficiary, and capacity intelligence engineered for the operating teams running real programs.",
        },
        {
          name: "Field Operations",
          body: "Field, logistics, and partner intelligence engineered for the realities of operating in difficult contexts.",
        },
      ],
      useCases: [
        {
          title: "Outcomes and impact measurement",
          body: "Continuous outcomes and impact intelligence — engineered for the integrity that mission and accountability require.",
        },
        {
          title: "Donor and stewardship intelligence",
          body: "Donor, prospect, and stewardship intelligence engineered for development teams of every scale and tradition.",
        },
        {
          title: "Program and beneficiary analytics",
          body: "Program, beneficiary, and capacity intelligence engineered for operating teams running real programs in real communities.",
        },
        {
          title: "Field and logistics intelligence",
          body: "Field, logistics, and partner intelligence engineered for the realities of operating in challenging contexts.",
        },
      ],
      clients: [
        "Major Private Foundations",
        "International NGOs",
        "Community & Family Foundations",
        "Faith-Based Organizations",
        "University Advancement",
        "Public-Sector Grant Programs",
      ],
      metrics: [
        { value: "Mission-first", label: "Outcomes are the standard" },
        { value: "Beneficiary-aware", label: "Dignity, by design" },
        { value: "Multi-region", label: "Every operating context" },
        { value: "Auditable", label: "Every grant, every dollar" },
      ],
      doctrine: [
        "The dignity of beneficiaries is the floor.",
        "Outcomes are the only ground truth.",
        "Donor trust is patient and earned.",
        "Field staff carry the work. We empower them.",
      ],
    },
  },
  {
    slug: "humanitarian",
    name: "Humanitarian & Development",
    platform: "Voranox Compass",
    category: "Society",
    tagline: "Decision intelligence where it matters most.",
    description:
      "Crisis response, development, and resilience intelligence for the UN system, IFIs, and aid agencies.",
    capabilities: [
      "Crisis intelligence",
      "Development analytics",
      "Resilience modeling",
      "Field logistics AI",
    ],
    href: "https://compass.voranox.com",
    deep: {
      longTagline:
        "Compass is the crisis-response, development, and resilience intelligence engineered for the UN system, IFIs, and aid agencies.",
      manifesto:
        "Humanitarian and development work is the most consequential and most under-resourced public profession humans have built. Voranox Compass serves the UN system, international financial institutions, and bilateral agencies whose work is to respond to crises, build capability, and stand alongside the most vulnerable. Compass is engineered for the field, with the discipline that the work deserves.",
      pillars: [
        {
          name: "Crisis Intelligence",
          body: "Crisis, displacement, and humanitarian-response intelligence engineered for the field operations that matter most.",
        },
        {
          name: "Development Analytics",
          body: "Country, sector, and program intelligence engineered for the institutions building national capability.",
        },
        {
          name: "Resilience Modeling",
          body: "Climate, food-security, and resilience intelligence engineered for the multilateral system.",
        },
        {
          name: "Field Logistics",
          body: "Logistics, procurement, and field-operations intelligence engineered for the realities of operating in crisis.",
        },
      ],
      useCases: [
        {
          title: "Crisis and displacement intelligence",
          body: "Continuous crisis, displacement, and humanitarian-response intelligence engineered for the field operations that matter most.",
        },
        {
          title: "Country and program analytics",
          body: "Country, sector, and program intelligence engineered for the institutions building national capability over the long horizon.",
        },
        {
          title: "Resilience and food security",
          body: "Climate, food-security, and resilience intelligence engineered for the multilateral system and its partner governments.",
        },
        {
          title: "Field logistics and procurement",
          body: "Logistics, procurement, and field-operations intelligence engineered for the realities of operating in crisis at scale.",
        },
      ],
      clients: [
        "United Nations Agencies",
        "International Financial Institutions",
        "Bilateral Aid Agencies",
        "Humanitarian INGOs",
        "Climate & Resilience Funds",
        "Public Health Authorities",
      ],
      metrics: [
        { value: "Field-first", label: "Engineered for the operations" },
        { value: "Beneficiary-aware", label: "Dignity, by design" },
        { value: "Multi-region", label: "Every operating context" },
        { value: "Auditable", label: "Every dollar, every decision" },
      ],
      doctrine: [
        "Beneficiary dignity is the floor.",
        "Field staff are the institution. We empower them.",
        "Localization is real. We engineer accordingly.",
        "The work is consequential. The standard must match.",
      ],
    },
  },
  {
    slug: "religious",
    name: "Religious & Faith Institutions",
    platform: "Voranox Sanctum",
    category: "Society",
    tagline: "Stewardship, intelligently supported.",
    description:
      "Congregation, stewardship, and outreach intelligence for global faith communities and institutions.",
    capabilities: [
      "Congregation analytics",
      "Stewardship AI",
      "Outreach intelligence",
      "Heritage preservation",
    ],
    href: "https://sanctum.voranox.com",
    deep: {
      longTagline:
        "Sanctum is the congregation, stewardship, and outreach intelligence engineered for global faith communities and institutions.",
      manifesto:
        "Faith institutions are among the longest-running organizations on earth — and the ones whose mission most demands technology built with reverence for tradition. Voranox Sanctum serves the dioceses, denominations, congregations, and faith-based organizations whose work compounds across generations. Sanctum is engineered with the discretion the work requires and the rigor the institution deserves.",
      pillars: [
        {
          name: "Congregation Analytics",
          body: "Congregation, attendance, and engagement intelligence engineered for clergy and lay leaders.",
        },
        {
          name: "Stewardship",
          body: "Giving, stewardship, and development intelligence engineered for the ministries and institutions that depend on it.",
        },
        {
          name: "Outreach & Mission",
          body: "Outreach, mission, and program intelligence engineered for faith-based organizations serving real communities.",
        },
        {
          name: "Heritage Preservation",
          body: "Archive, heritage, and tradition-preservation intelligence engineered for the long memory of the faith.",
        },
      ],
      useCases: [
        {
          title: "Congregation and engagement",
          body: "Congregation, attendance, and engagement intelligence engineered for clergy and lay leaders serving real communities.",
        },
        {
          title: "Stewardship and giving",
          body: "Giving, stewardship, and development intelligence engineered for the ministries and institutions that depend on faithful generosity.",
        },
        {
          title: "Outreach and mission",
          body: "Outreach, mission, and program intelligence engineered for faith-based organizations serving real communities and partners.",
        },
        {
          title: "Heritage and archive preservation",
          body: "Archive, heritage, and tradition-preservation intelligence engineered for the long memory of the faith.",
        },
      ],
      clients: [
        "Denominational Authorities",
        "Dioceses & Conferences",
        "Local Congregations & Parishes",
        "Faith-Based NGOs",
        "Religious Educational Institutions",
        "Heritage & Archive Bodies",
      ],
      metrics: [
        { value: "Discreet", label: "Engagement by default" },
        { value: "Tradition-aware", label: "Built with reverence" },
        { value: "Multi-tradition", label: "Serving every faith well" },
        { value: "Long horizon", label: "Generations, not quarters" },
      ],
      doctrine: [
        "Tradition is sacred. We build with reverence.",
        "Privacy is sacred. Especially in matters of faith.",
        "The clergy and lay leader are the institution. We serve them.",
        "Faith communities outlast technologies. We engineer accordingly.",
      ],
    },
  },
  {
    slug: "arts-culture",
    name: "Arts, Culture & Heritage",
    platform: "Voranox Patrimony",
    category: "Society",
    tagline: "Preserving, curating, illuminating.",
    description:
      "Curation, preservation, and audience intelligence for museums, galleries, and cultural institutions.",
    capabilities: [
      "Collections intelligence",
      "Conservation AI",
      "Audience analytics",
      "Heritage digitization",
    ],
    href: "https://patrimony.voranox.com",
    deep: {
      longTagline:
        "Patrimony is the curation, preservation, and audience intelligence engineered for museums, galleries, and cultural institutions.",
      manifesto:
        "Cultural institutions are the long memory of civilizations. Voranox Patrimony serves the museums, galleries, archives, and cultural authorities whose work is to preserve, interpret, and share that memory with the public. Patrimony is engineered with reverence for the collections it serves and with the rigor that conservation demands.",
      pillars: [
        {
          name: "Collections Intelligence",
          body: "Collections, provenance, and curation intelligence engineered for curators and registrars of every tradition.",
        },
        {
          name: "Conservation",
          body: "Conservation, environmental, and preservation intelligence engineered for the conservators carrying the work.",
        },
        {
          name: "Audience Analytics",
          body: "Audience, exhibition, and education intelligence engineered for institutions serving real publics.",
        },
        {
          name: "Heritage Digitization",
          body: "Digitization, IIIF, and digital-access intelligence engineered for the public mission of the institution.",
        },
      ],
      useCases: [
        {
          title: "Collections and provenance",
          body: "Collections, provenance, and curation intelligence engineered for curators and registrars of every tradition and scale.",
        },
        {
          title: "Conservation and environmental",
          body: "Conservation, environmental, and preservation intelligence engineered for the conservators responsible for the work.",
        },
        {
          title: "Audience and exhibition analytics",
          body: "Audience, exhibition, and education intelligence engineered for institutions serving real and diverse publics.",
        },
        {
          title: "Digitization and digital access",
          body: "Digitization, IIIF, and digital-access intelligence engineered for the public mission of the cultural institution.",
        },
      ],
      clients: [
        "National & Encyclopedic Museums",
        "Galleries & Art Foundations",
        "National Archives & Libraries",
        "Heritage & Site Authorities",
        "University Museums & Collections",
        "Performing-Arts Institutions",
      ],
      metrics: [
        { value: "Conservation-first", label: "The work is the priority" },
        { value: "Public mission", label: "Access, by mandate" },
        { value: "Open standards", label: "IIIF, CIDOC-CRM aligned" },
        { value: "Multi-region", label: "Every cultural tradition" },
      ],
      doctrine: [
        "The work is the priority. Always.",
        "Provenance is sacred.",
        "Public access is the mission.",
        "We respect the curator and the conservator.",
      ],
    },
  },
  {
    slug: "environment",
    name: "Environment, Climate & Sustainability",
    platform: "Voranox Terra",
    category: "Society",
    tagline: "Intelligence for a livable planet.",
    description:
      "Climate, biodiversity, and sustainability intelligence for governments, corporates, and capital markets.",
    capabilities: [
      "Climate risk modeling",
      "Carbon intelligence",
      "Biodiversity AI",
      "Disclosure analytics",
    ],
    href: "https://terra.voranox.com",
    deep: {
      longTagline:
        "Terra is the climate, biodiversity, and sustainability intelligence engineered for governments, corporates, and capital markets.",
      manifesto:
        "Climate and environmental stewardship are the most consequential public-private undertakings of our time. Voranox Terra serves the governments, corporations, and capital allocators whose decisions compound across the time scales the climate is actually moving on. Terra is engineered for the rigor disclosure regimes now require — and the patience the natural world has always required.",
      pillars: [
        {
          name: "Climate Risk Modeling",
          body: "Physical and transition climate-risk intelligence engineered for fiduciary, regulatory, and operational use.",
        },
        {
          name: "Carbon Intelligence",
          body: "Scope 1/2/3, value-chain, and removals intelligence engineered for the integrity carbon accounting requires.",
        },
        {
          name: "Biodiversity & Nature",
          body: "Biodiversity, nature-related, and ecosystem-service intelligence engineered for TNFD and the next regulatory regime.",
        },
        {
          name: "Disclosure Analytics",
          body: "ISSB, ESRS, and global disclosure intelligence engineered for the integrity that disclosure now requires.",
        },
      ],
      useCases: [
        {
          title: "Physical and transition risk",
          body: "Continuous physical and transition climate-risk intelligence engineered for fiduciary, regulatory, and operational use.",
        },
        {
          title: "Carbon accounting and removals",
          body: "Scope 1/2/3, value-chain, and removals intelligence engineered for the integrity that carbon accounting requires.",
        },
        {
          title: "Biodiversity and nature-related",
          body: "Biodiversity, nature, and ecosystem-service intelligence engineered for TNFD and the regulatory regime now arriving.",
        },
        {
          title: "Disclosure and reporting",
          body: "ISSB, ESRS, and global disclosure intelligence engineered for the integrity that the next reporting cycle requires.",
        },
      ],
      clients: [
        "National Climate Authorities",
        "Central Banks & Financial Regulators",
        "Global Corporates & Industrial Operators",
        "Asset Owners & Managers",
        "Climate Funds & MDBs",
        "Disclosure & Standards Bodies",
      ],
      metrics: [
        { value: "ISSB · ESRS", label: "Aligned disclosure posture" },
        { value: "TNFD", label: "Nature-related, by design" },
        { value: "Multi-decade", label: "Climate's actual horizon" },
        { value: "Auditable", label: "Every figure, every disclosure" },
      ],
      doctrine: [
        "The natural world is the ground truth.",
        "Greenwashing is a failure of integrity. We will not enable it.",
        "Disclosure is a public good. We engineer accordingly.",
        "The horizon is multi-decade. So is our patience.",
      ],
    },
  },
  {
    slug: "water",
    name: "Water & Wastewater",
    platform: "Voranox Aquifer",
    category: "Infrastructure",
    tagline: "Every drop, intelligently managed.",
    description:
      "Water utility, watershed, and treatment intelligence for utilities and water authorities globally.",
    capabilities: [
      "Network optimization",
      "Watershed AI",
      "Treatment analytics",
      "Leak & loss intelligence",
    ],
    href: "https://aquifer.voranox.com",
    deep: {
      longTagline:
        "Aquifer is the water-utility, watershed, and treatment intelligence engineered for the utilities and water authorities of the world.",
      manifesto:
        "Water is the most fundamental and most underinvested infrastructure on earth. Voranox Aquifer serves the water and wastewater utilities, watershed authorities, and water ministries whose work is to deliver safe water and protect the systems that produce it. Aquifer is engineered for the cadence of utility operations and the patience of watershed stewardship.",
      pillars: [
        {
          name: "Network Optimization",
          body: "Distribution, pressure, and leak intelligence engineered for water utilities responsible for delivery integrity.",
        },
        {
          name: "Watershed Intelligence",
          body: "Source, watershed, and basin intelligence engineered for the authorities responsible for the resource itself.",
        },
        {
          name: "Treatment Analytics",
          body: "Treatment, quality, and process intelligence engineered for the operators of treatment and reuse facilities.",
        },
        {
          name: "Loss & Conservation",
          body: "Non-revenue water, loss, and conservation intelligence engineered for the realities of utility economics.",
        },
      ],
      useCases: [
        {
          title: "Distribution and leak intelligence",
          body: "Continuous distribution and leak intelligence engineered for water utilities responsible for both delivery and conservation.",
        },
        {
          title: "Watershed and source",
          body: "Continuous source, watershed, and basin intelligence engineered for the authorities responsible for the resource itself.",
        },
        {
          title: "Treatment and quality",
          body: "Treatment, quality, and process intelligence engineered for the operators of water and wastewater treatment.",
        },
        {
          title: "Non-revenue water reduction",
          body: "Non-revenue water and loss-reduction intelligence engineered for the realities of utility economics and customer trust.",
        },
      ],
      clients: [
        "Public Water & Wastewater Utilities",
        "Investor-Owned Water Utilities",
        "Watershed & Basin Authorities",
        "Industrial Water Operators",
        "Reuse & Desalination Authorities",
        "Public-Health & Water Ministries",
      ],
      metrics: [
        { value: "24/7/365", label: "The tap cannot go dry" },
        { value: "OT-grade", label: "SCADA-aware by design" },
        { value: "Sovereign", label: "Deployable in-jurisdiction" },
        { value: "Auditable", label: "Every measurement, every claim" },
      ],
      doctrine: [
        "Safe water is a human right.",
        "We respect the operator at the plant.",
        "Conservation is patient. We engineer accordingly.",
        "Watershed stewardship outlives any administration.",
      ],
    },
  },
  {
    slug: "smart-cities",
    name: "Smart Cities & Urban Systems",
    platform: "Voranox Polis",
    category: "Public Sector",
    tagline: "The intelligent city, by design.",
    description:
      "Urban operations, mobility, and citizen intelligence for cities and metropolitan authorities.",
    capabilities: [
      "Urban digital twins",
      "Mobility intelligence",
      "Citizen experience",
      "City finance AI",
    ],
    href: "https://polis.voranox.com",
    deep: {
      longTagline:
        "Polis is the urban-operations, mobility, and citizen intelligence platform engineered for cities and metropolitan authorities.",
      manifesto:
        "Cities are the most consequential public institutions of the century — and the ones whose intelligence systems most need to be built with public legitimacy as the design constraint. Voranox Polis serves the cities, metropolitan authorities, and urban-system operators whose work is to make the city work. Polis is engineered for the realities of municipal operation, with the public accountability cities demand.",
      pillars: [
        {
          name: "Urban Digital Twins",
          body: "Whole-of-city digital twins engineered for the planning, operations, and resilience teams of the modern city.",
        },
        {
          name: "Mobility Intelligence",
          body: "Multi-modal mobility intelligence — transit, micromobility, freight, and traffic — engineered for the operating reality of the city.",
        },
        {
          name: "Citizen Experience",
          body: "Citizen-services and 311 intelligence engineered with the dignity of the resident as the design constraint.",
        },
        {
          name: "City Finance & Procurement",
          body: "City finance, procurement, and capital-program intelligence engineered for the fiscal reality of the modern city.",
        },
      ],
      useCases: [
        {
          title: "City-scale digital twin",
          body: "Continuous, whole-of-city digital-twin intelligence engineered for planning, operations, and resilience teams.",
        },
        {
          title: "Multi-modal mobility",
          body: "Continuous multi-modal mobility intelligence — transit, micromobility, freight, and traffic — engineered for operating reality.",
        },
        {
          title: "311 and citizen services",
          body: "Citizen-services and 311 intelligence engineered with the dignity of the resident as the design constraint.",
        },
        {
          title: "City finance and procurement",
          body: "City finance, procurement, and capital-program intelligence engineered for the fiscal reality of the modern city.",
        },
      ],
      clients: [
        "Major Global Cities",
        "Metropolitan Transit Authorities",
        "Urban Planning & Resilience Offices",
        "Public Works & Utilities",
        "Civic-Tech Innovators",
        "Multilateral Urban Programs",
      ],
      metrics: [
        { value: "Citizen-first", label: "Dignity is the design constraint" },
        { value: "Open standards", label: "By policy, by principle" },
        { value: "Multi-region", label: "Every major urban form" },
        { value: "Auditable", label: "Every decision, defensible to the public" },
      ],
      doctrine: [
        "The resident is a constituent, not a user.",
        "Public legitimacy is the only durable authority.",
        "Open standards are non-negotiable.",
        "Cities outlive administrations. We engineer accordingly.",
      ],
    },
  },
  {
    slug: "space",
    name: "Space & Satellite",
    platform: "Voranox Stellar",
    category: "Infrastructure",
    tagline: "Intelligence beyond the horizon.",
    description:
      "Earth observation, constellation operations, and space economy intelligence.",
    capabilities: [
      "Earth observation AI",
      "Constellation ops",
      "Space situational awareness",
      "Geospatial intelligence",
    ],
    href: "https://stellar.voranox.com",
    deep: {
      longTagline:
        "Stellar is the intelligence platform for the operators and observers of the orbital domain — from earth observation to constellation operations to space situational awareness.",
      manifesto:
        "Space is no longer a frontier; it is an operating environment. Voranox Stellar exists to turn the firehose of orbital data — imagery, telemetry, signals, ephemeris — into the intelligence that civil, defense, and commercial space operators actually decide from. From flood maps to fleet operations to space domain awareness, Stellar serves the full spectrum of the orbital economy.",
      pillars: [
        {
          name: "Earth Observation",
          body: "Multi-sensor EO intelligence across optical, SAR, and hyperspectral — engineered for civil agencies, defense, climate, and commercial monitoring.",
        },
        {
          name: "Constellation Operations",
          body: "Mission planning, conjunction assessment, and fleet operations intelligence for satellite operators of every scale.",
        },
        {
          name: "Space Situational Awareness",
          body: "Tracking, characterization, and intent assessment for the orbital domain — engineered for SDA centers and defense space commands.",
        },
        {
          name: "Geospatial Intelligence",
          body: "Activity-based intelligence and pattern-of-life analytics across the surface of the earth — derived from orbital and aerial collection.",
        },
      ],
      useCases: [
        {
          title: "Disaster response imaging at speed",
          body: "Rapid tasking, fusion, and dissemination of EO imagery for civil-protection agencies — turning flood, fire, and quake response from days to hours.",
        },
        {
          title: "Fleet operations for constellations",
          body: "Continuous mission planning, conjunction screening, and ground-segment optimization for operators of LEO and GEO constellations.",
        },
        {
          title: "Space domain awareness",
          body: "Persistent track, characterization, and intent assessment of the orbital catalogue — engineered for SDA centers and defense space commands.",
        },
        {
          title: "Activity-based geospatial intelligence",
          body: "Continuous monitoring of ports, airfields, infrastructure, and industrial activity at planetary scale — with confidence and provenance on every observation.",
        },
      ],
      clients: [
        "Civil Space Agencies",
        "Defense Space Commands",
        "Constellation Operators",
        "Climate & Environmental Authorities",
        "Insurance & Reinsurance",
        "Geospatial Intelligence Agencies",
      ],
      metrics: [
        { value: "Planet-scale", label: "Continuous monitoring" },
        { value: "Multi-sensor", label: "Optical, SAR, hyperspectral" },
        { value: "Sub-hour", label: "Tasking-to-product latency" },
        { value: "Sovereign", label: "Deployable in-jurisdiction" },
      ],
      doctrine: [
        "The orbital domain is shared. Stellar is engineered for stewardship, not dominance.",
        "Every observation is provenanced to its sensor.",
        "Confidence is reported. Uncertainty is not hidden.",
        "Intelligence serves decision. Not the other way around.",
      ],
    },
  },
  {
    slug: "venture-private",
    name: "Venture, Private Markets & Family Offices",
    platform: "Voranox Heritage",
    category: "Financial",
    tagline: "Intelligence for stewards of capital.",
    description:
      "Sourcing, diligence, and portfolio intelligence for VC, PE, and multi-family offices.",
    capabilities: [
      "Deal sourcing AI",
      "Diligence intelligence",
      "Portfolio monitoring",
      "LP analytics",
    ],
    href: "https://heritage.voranox.com",
    deep: {
      longTagline:
        "Heritage is the sourcing, diligence, and portfolio intelligence platform for venture, private equity, and multi-family offices.",
      manifesto:
        "Private capital is the patient, discreet partner of the most consequential companies of every generation. Voranox Heritage serves the venture firms, private equity managers, and family offices whose work is to find, fund, and steward those companies. Heritage is engineered for the cadence of private markets and the discretion the relationships require.",
      pillars: [
        {
          name: "Deal Sourcing",
          body: "Sourcing, signal, and competitive-intelligence platforms engineered for venture and PE deal teams.",
        },
        {
          name: "Diligence Intelligence",
          body: "Diligence, market, and reference intelligence engineered for investment professionals making consequential decisions.",
        },
        {
          name: "Portfolio Monitoring",
          body: "Portfolio, KPI, and risk intelligence engineered for portfolio operators and value-creation teams.",
        },
        {
          name: "LP & Family-Office Analytics",
          body: "LP, allocator, and family-office intelligence engineered for the institutions managing patient capital.",
        },
      ],
      useCases: [
        {
          title: "Sourcing and signal",
          body: "Continuous sourcing and competitive-signal intelligence engineered for venture and growth deal teams operating at scale.",
        },
        {
          title: "Diligence and market intelligence",
          body: "Continuous diligence, market sizing, and reference intelligence engineered for investment professionals making consequential decisions.",
        },
        {
          title: "Portfolio monitoring and value creation",
          body: "Portfolio KPI, risk, and value-creation intelligence engineered for portfolio operators and operating partners.",
        },
        {
          title: "LP and family-office analytics",
          body: "LP, allocator, and family-office intelligence engineered for the institutions managing patient, multi-generational capital.",
        },
      ],
      clients: [
        "Venture Capital Firms",
        "Private Equity Managers",
        "Growth Equity & Credit Funds",
        "Multi-Family Offices",
        "Sovereign Wealth Allocators",
        "Endowment & Foundation CIOs",
      ],
      metrics: [
        { value: "Discreet", label: "Engagement by default" },
        { value: "Cross-stage", label: "Seed to growth to PE" },
        { value: "Multi-region", label: "Every major capital geography" },
        { value: "Auditable", label: "Every figure, every decision" },
      ],
      doctrine: [
        "Holdings are the client's. Always.",
        "Discretion is the standard, not the exception.",
        "Patient capital deserves patient intelligence.",
        "The founder relationship is sacred. We engineer accordingly.",
      ],
    },
  },
];

export const sectorsBySlug = (slug: string): Sector | undefined =>
  sectors.find((s) => s.slug === slug);

export const sectorCategories = Array.from(
  new Set(sectors.map((s) => s.category))
);
