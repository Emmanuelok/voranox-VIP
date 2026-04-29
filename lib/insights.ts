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

essays.push(
  {
    slug: "the-discipline-of-restraint",
    title: "The Discipline of Restraint",
    subtitle:
      "The work we will not take, and why a narrow scope is a feature of a serious firm.",
    category: "Practice",
    date: "Essay",
    reading: "7 min read",
    byline: "Office of the Chief Executive",
    body: [
      "Most firms that build intelligence systems begin with what they can do, and only later — usually under regulatory pressure — discover what they should not. Voranox is built the other way around. The discipline of restraint is the first decision; capability follows.",
      "Restraint, properly practiced, is not the absence of ambition. It is the presence of a clear answer to two questions that any consequential firm must face. Who will we serve? And what will we refuse?",
      "Who we serve is recorded openly. Voranox engineers for ministries, central banks, hospitals, integrated operators, and the senior institutions of every other industry — the kinds of customers whose work is consequential and whose tolerance for failure is low. We engineer to that standard. We do not retrofit downward to consumer-grade requirements.",
      "What we refuse is recorded with equal openness. We do not build for adversarial regimes. We do not enable surveillance creep, sanctions evasion, or the kind of automation that displaces lawful human authority. We do not lend the firm's capacity to ends that the public would, on reflection, find indefensible.",
      "These are not abstract commitments. They are operational. Engagements pass through a doctrine review before they pass through a contract. A small partner committee carries the weight of those decisions, and is empowered to refuse work the firm would otherwise be paid to do. The cost of refusal is real. The cost of having no refusal mechanism is, in the long run, larger.",
      "There is a familiar argument against this stance. The argument is that restraint is a luxury, available only to firms that have already grown; that early-stage organizations cannot afford it; that one must first survive the market before one can be selective in it. We believe this argument is precisely backward.",
      "Restraint is cheaper to install at the founding than to retrofit at scale. The reputation of a firm — among customers, employees, regulators, and counterparts — is established in its first decade and held, or not held, for the rest of its existence. Firms that learn restraint late spend the rest of their existence persuading the market it has changed. Firms that practice restraint from the founding spend that energy doing the work.",
      "The narrowness this produces is, in our view, a feature. A firm that is unwilling to take some forms of work tends to be more thoughtful about the work it does take. A firm that is reserved for some forms of customers tends to engineer to that standard. The aggregate effect — over time, across hundreds of engagements — is the kind of institutional reputation that cannot be purchased.",
      "We will be tested on this. The market is full of opportunities for firms with our capabilities to make rapid revenue against weakened doctrine. We have no illusions that the line will not be probed. The discipline is in holding the line — not in writing it. That is the standard we hold ourselves to, and the standard we expect our customers, our partners, and the public to hold us to.",
    ],
  },
  {
    slug: "industry-specific-evaluation",
    title: "The Case for Industry-Specific Evaluation",
    subtitle:
      "Why generic AI benchmarks do not measure what matters in regulated industries — and what should replace them.",
    category: "Standards",
    date: "Essay",
    reading: "10 min read",
    byline: "Office of the Chief Research Officer",
    body: [
      "Most discussion of AI evaluation today centers on a small number of generic benchmarks — multi-task language understanding, reading comprehension, code generation, reasoning chains. These are useful instruments for measuring general-purpose capability. They are not adequate instruments for measuring fitness for clinical, financial, or sovereign use. The mismatch is not a small one.",
      "Consider, for the sake of concreteness, a clinical decision-support system evaluated on a generic medical-question benchmark. The system performs well: high accuracy on USMLE-style questions, well-calibrated uncertainty, fluent rationales. By the standard the benchmark proposes, the system is excellent. By the standard the clinical bedside actually requires, that information is insufficient.",
      "Bedside use raises questions the benchmark does not. How does the system behave on the patient population this hospital actually serves, including the underrepresented subgroups its training data may not? How does it perform under the time pressure of an emergency department, where the question is rarely as cleanly stated as the benchmark assumes? How does it degrade when the electronic record is incomplete, contradictory, or compromised by upstream data-quality issues that no production system escapes? What is its calibration not on USMLE-style questions but on the specific, idiosyncratic phrasings the clinicians at this hospital actually use? And what is the regulatory pathway under which the system can be deployed at all?",
      "None of these are benchmark questions. All of them are deployment questions. The disconnect between the two is not a research gap; it is the gap that decides whether the system improves outcomes in the institution, or whether it produces a beautiful demo and a series of subtle failures.",
      "Industry-specific evaluation is the discipline of closing that gap. It begins from the realities of the institution served — the patient population, the regulatory regime, the upstream data quality, the time budget at the point of decision, the failure modes that are tolerable and the ones that are not — and constructs the evaluation regime that actually measures fitness for use.",
      "This is harder than benchmark evaluation. It cannot be done once and reused. It is industry-specific by construction, customer-specific in its details, and continuous in its operation. It requires the institution to participate. It produces less impressive marketing copy, because the numbers are not directly comparable across vendors or competitors. It produces, however, the only kind of confidence that can defensibly be acted on.",
      "At Voranox, every platform has its own evaluation regime, calibrated to the industry it serves. Sterling is evaluated against the standards of the regulated banking discipline — auditability, defensibility to the appointed actuary or auditor, performance on the portfolios and counterparties the customer actually carries. Vitae is evaluated against clinical evidence standards, with clinician governance and the patient population the institution actually serves. Sentinel is evaluated against operational doctrine, with the human-on-loop architecture intact, in the contexts and against the adversaries the agency actually anticipates. Civitas is evaluated against the public-legitimacy standard the constituent population deserves.",
      "The aggregate effect is institutional confidence — the kind that an audit committee, a clinical governance board, an inspector general, or a parliamentary committee can defensibly accept. Generic benchmarks cannot produce this. Industry-specific evaluation can.",
      "We expect the industry to move in this direction. The regulators are already there; the customers will follow; and the firms that have invested in industry-specific evaluation regimes will be ready when the rest of the market catches up.",
    ],
  },
  {
    slug: "what-sovereign-deployment-requires",
    title: "What Sovereign Deployment Actually Requires",
    subtitle:
      "Beyond the slogan: the technical, institutional, and contractual properties of deployment in the jurisdictions that own the data.",
    category: "Architecture",
    date: "Essay",
    reading: "12 min read",
    byline: "Office of the Chief Technology Officer",
    body: [
      "Sovereign deployment is the kind of phrase that begins as a serious technical commitment and ends as a marketing slogan. We use it in the first sense, and treat it as a discipline rather than a feature.",
      "At its core, sovereign deployment is a posture about who controls what — recorded in code, in contract, and in operational practice — and held continuously across the lifetime of the platform. It is not satisfied by any single technical property. It is satisfied by a coordinated set of properties, sustained over time, audited continuously, and engineered into the substrate of the system rather than bolted on as an afterthought.",
      "There are five properties that, taken together, constitute the posture. None of them is sufficient on its own.",
      "Topological sovereignty. The customer chooses where the platform runs. The choice is real — on-premise, on the national cloud, in air-gapped environments, in our own sovereign-grade infrastructure, or in a hybrid of these — and the platform is engineered to be portable across them. The choice cannot be foreclosed by tight coupling to a single hyperscaler's proprietary services. We engineer to the open-standards substrate of the cloud, not to the lock-in surface.",
      "Cryptographic sovereignty. Encryption in transit, at rest, and — where mandate requires — in use. Hardware-backed keys. Confidential compute environments where appropriate. Crucially, key custody patterns that respect the institutional trust boundary: the customer holds the keys to its own data, even when the platform is operated as a service. Bring-your-own-key, hold-your-own-key, and customer-managed encryption are not enterprise upsells; they are the default posture.",
      "Operational sovereignty. The customer's own staff — or the customer's chosen partners — can administer, audit, and operate the platform in deployment topologies that require it. This means well-documented operational interfaces, configurable observability, and explicit support for customer-side site reliability engineering. The platform is not an opaque black box that only the vendor can operate.",
      "Auditability sovereignty. Every model decision, data access, and platform action produces a tamper-evident record that is replayable by the customer's own internal audit, by the regulator with jurisdiction, and by the inspector general or oversight body where one exists. Auditability is not a logging feature; it is a property of the system architecture, supported by cryptographic chains of evidence and reproducible model artifacts.",
      "Contractual sovereignty. The legal substrate matches the technical substrate. The contract preserves the customer's rights over its data, its derived intelligence, and the reproducibility of any decision the platform contributed to. Sub-processor lists are visible and changeable only with notice. Data residency commitments are specific to jurisdiction and survive the contract. Exit and portability rights are real, not theoretical.",
      "These properties are individually achievable. The discipline is to hold all five simultaneously, across the lifetime of the platform, under operational pressure. The discipline is also to hold them across the long arc of a platform that the customer expects to operate for ten or twenty years — across changes in cloud infrastructure, in regulatory regime, in geopolitics, and in the technology of AI itself.",
      "The institutions we serve recognize this difference. So do their auditors, regulators, and constituents. We engineer for the long version of that recognition — and treat sovereign deployment not as a commercial differentiator but as the basic price of doing the kind of work we have chosen to do.",
    ],
  }
);

export const essayBySlug = (slug: string): Essay | undefined =>
  essays.find((e) => e.slug === slug);
