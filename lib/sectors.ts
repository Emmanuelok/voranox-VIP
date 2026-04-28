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
