export type Essay = {
  slug: string;
  title: string;
  subtitle: string;
  category: "Doctrine" | "Architecture" | "Standards" | "Practice";
  date: string;
  reading: string;
  byline: string;
  body: string[];
};

export const essays: Essay[] = [
  {
    slug: "the-voranox-doctrine",
    title: "The Voranox Doctrine",
    subtitle:
      "What we will and will not do, and why the line is drawn where it is.",
    category: "Doctrine",
    date: "Inaugural Essay",
    reading: "9 min read",
    byline: "Office of the Chief Executive",
    body: [
      "There is a familiar story about artificial intelligence in industry: a single, general-purpose model is retrofitted to every problem, and the institutions that adopt it tolerate the seams in exchange for the velocity. We do not believe this is the right shape for the next century.",
      "Voranox Inc. exists to build a different shape. We believe each industry — medicine, capital, statecraft, the grid, the operating theater, the global supply chain — has its own physics, its own language, and its own ethics. We believe intelligence engineered to those particulars compounds; intelligence retrofitted to them depreciates.",
      "Our doctrine is the consequence of that belief, expressed in the way we choose engagements, build platforms, and sustain relationships.",
      "First: one platform per industry. Each Voranox platform is engineered to a single industry's reality. Sterling is engineered for the cadence and discipline of capital markets. Vitae is engineered to clinical evidence and the sanctity of patient privacy. Sentinel is engineered to the lawful operating environment of allied defense. We do not collapse them into a single system. The seams between industries are precisely where the bad assumptions live.",
      "Second: sovereign-grade by default. We assume our customers will be ministries, central banks, hospitals, integrated industrial operators, and the senior institutions of every other industry. We assume their data must remain in their jurisdiction. We assume every model decision must be auditable, and every figure reproducible. We engineer to the high end of the institutional spectrum. We will not retrofit downward.",
      "Third: human authority is preserved. Voranox platforms are engineered with humans on the loop by default. Where automation is appropriate, it is bounded by policy, by jurisdiction, and by the discipline of the profession served. We are uninterested in replacing the banker, the doctor, the diplomat, the watch officer, or the engineer. We are interested in giving them more time and more memory.",
      "Fourth: long horizon. We engineer for decades. We expect to maintain, scrutinize, and extend our platforms across changes of administration, leadership, and technology. Quarterly relevance is not the standard.",
      "And fifth — perhaps most importantly — there is work we will not take. We will not build for adversarial regimes. We will not enable surveillance creep. We will not greenwash, sanctions-launder, or otherwise lend the firm's capacity to ends that the public would, on reflection, find indefensible. The line is drawn deliberately and held continuously.",
      "Doctrine of this kind only matters if it is held under pressure — and the pressures will come. There will be tempting engagements, ambiguous contracts, expedient shortcuts. The discipline is not in writing the doctrine; it is in keeping it. That discipline is what we are building Voranox to compound.",
      "This is the standard we set for ourselves, and the standard our customers should hold us to.",
    ],
  },
  {
    slug: "why-one-platform-per-industry",
    title: "Why One Platform Per Industry",
    subtitle:
      "The case against the universal AI platform, and the case for industry-native intelligence.",
    category: "Architecture",
    date: "Inaugural Essay",
    reading: "11 min read",
    byline: "Office of the Chief Research Officer",
    body: [
      "The dominant narrative of enterprise AI for the past several years has been platform consolidation: a single foundation model, with light fine-tuning, deployed across every industry. It is an elegant story, well-funded, and — in our view — incomplete in the place where it most matters.",
      "Each industry is a system of constraints, not a corpus of text. Medicine has a half-millennium of accreted clinical evidence, the discipline of consented care, regulatory regimes that distinguish software-as-medical-device from advisory tooling, and a moral architecture organized around the relationship between clinician and patient. Capital markets have actuarial mathematics, institutional risk discipline, regulatory regimes that distinguish suitability from advice, and a settlement plumbing measured in basis points. Defense has international humanitarian law, command-and-control doctrine, and a chain of authority that must remain in human hands. The list is long; the differences are not stylistic.",
      "A single, universal model retrofitted to all of these inherits none of the constraints natively. It can be told about them — through fine-tuning, through retrieval, through guardrails — but the constraints sit on top of the system, not inside it. When the pressure is moderate, the seams hold. When the pressure is severe, the seams are exactly where the failures appear.",
      "Industry-native platforms invert this. The constraints are not policy add-ons; they are the substrate of the system. The data model speaks the industry's language. The provenance and audit chains exist because the industry requires them. The deployment topology respects the industry's data sovereignty. The model evaluation is calibrated to the industry's standard of evidence. The resulting platform is harder to build and more durable to operate.",
      "There is a second-order argument for this, and it is the one that compounds. Platforms that respect an industry's constraints are extended by that industry. Clinicians contribute to Vitae because Vitae is built the way clinical work actually proceeds. Bankers contribute to Sterling because Sterling speaks the bank's language. Watch officers contribute to Sentinel because Sentinel respects the chain of command. Industry-native platforms gather institutional intelligence; universal platforms gather usage data.",
      "The case against industry-native platforms is, of course, that they are slower to build and more expensive to maintain. We believe that is true and that it is the price of doing the work properly. The savings of a universal approach accrue mostly to the vendor; the costs accrue mostly to the customer.",
      "Voranox is a long bet on the inverse. We believe that ten, twenty, fifty years from now, the institutions that operate at the standard of medicine, of capital, of statecraft will be served by intelligence engineered for those domains specifically — and that the universal approach will look, in retrospect, like an artifact of an early period.",
      "We are building accordingly.",
    ],
  },
  {
    slug: "sovereign-grade-ai",
    title: "Sovereign-Grade AI",
    subtitle:
      "What it actually means to build AI for the institutions of the state, the bank, and the hospital.",
    category: "Standards",
    date: "Inaugural Essay",
    reading: "8 min read",
    byline: "Office of the Chief Trust Officer",
    body: [
      "“Sovereign-grade” is the kind of phrase that begins as a serious commitment and ends as marketing copy. We use it deliberately, and we mean something specific by it.",
      "Sovereign-grade AI is built to be deployed in the jurisdiction that owns the data, on terms that the public the institution serves can defend. It is not a private cloud; it is not even necessarily an on-premise deployment. It is a posture about who controls what, recorded in code, and held over time.",
      "Five properties characterize that posture.",
      "Data sovereignty. The customer chooses the topology. On-premise, on the national cloud, in air-gapped environments, in our own sovereign-grade infrastructure — the choice belongs to the institution. The platform is engineered to be portable across these topologies, not bound to a single hyperscaler.",
      "Auditability by default. Every model decision, data access, and platform action produces a tamper-evident record. Auditability is not an enterprise add-on; it is the substrate of the system. The regulator, the inspector general, and the institution's own internal audit can replay any action, against the data and the model in force at the time.",
      "Provenance and evidence. Every figure, recommendation, and inference cites its source. The data layer, the model layer, and the decision layer all carry provenance forward. A clinician can trace a recommendation to the underlying study; a banker can trace a credit decision to the policy and the evidence; a watch officer can trace a track to the originating sensor.",
      "Cryptographic discipline. Encryption in transit, at rest, and — where mandate requires — in use. Hardware-backed keys. Confidential compute where appropriate. Key custody patterns that respect the institutional trust boundary. We engineer to the standard of the institutions we serve, which is generally higher than the industry default.",
      "Human authority. The platform is engineered with humans on the loop by default. Where automation is appropriate, it is bounded by policy, by jurisdiction, and by the discipline of the profession served. Authority is not delegated to the model; it is augmented by it.",
      "These properties are individually achievable. The discipline is to hold all five simultaneously, across the lifetime of the platform, under operational pressure. That is what sovereign-grade actually means: not a label on a deployment, but a posture maintained through every release, every customer, every decade.",
      "The institutions we serve recognize the difference. So do their auditors, regulators, and constituents. We engineer for the long version of that recognition.",
    ],
  },
];

export const essayBySlug = (slug: string): Essay | undefined =>
  essays.find((e) => e.slug === slug);
