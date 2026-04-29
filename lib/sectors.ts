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
  },
  {
    slug: "legal",
    name: "Legal & Professional Services",
    platform: "Voranox Counsel",
    category: "Knowledge",
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
  },
];

export const sectorsBySlug = (slug: string): Sector | undefined =>
  sectors.find((s) => s.slug === slug);

export const sectorCategories = Array.from(
  new Set(sectors.map((s) => s.category))
);
