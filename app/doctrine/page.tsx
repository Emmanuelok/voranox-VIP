import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Voranox Doctrine",
  description:
    "The firm's eight commitments — the standards Voranox holds itself to across every platform, every engagement, and every decade.",
};

const planks = [
  {
    n: "01",
    title: "One platform per industry.",
    body: "Each industry has its own physics, its own language, and its own ethics. Voranox builds one purpose-engineered platform for each — Sterling for banking, Vitae for medicine, Sentinel for allied defense, Civitas for the state, Counsel for the law, and forty-three more. We do not collapse them into a single system. The seams between industries are precisely where the bad assumptions live.",
  },
  {
    n: "02",
    title: "Sovereign-grade by default.",
    body: "Every platform is engineered to be deployed in the jurisdiction that owns the data — on-premise, on the national cloud, in air-gapped environments, or in our own sovereign-grade infrastructure. Sovereignty is not an enterprise upsell; it is the substrate of the system.",
  },
  {
    n: "03",
    title: "Auditability is a property of the system.",
    body: "Every model decision, data access, and platform action produces a tamper-evident record. Auditability is not a logging feature; it is engineered into the substrate so that regulators, inspectors general, and the institution's own internal audit can replay any action against the data and the model in force at the time.",
  },
  {
    n: "04",
    title: "Human authority is preserved.",
    body: "Voranox platforms run with humans on the loop by default. Where automation is appropriate, it is bounded by policy, by jurisdiction, and by the discipline of the profession served. The decision belongs to the banker, the doctor, the diplomat, the watch officer, the engineer.",
  },
  {
    n: "05",
    title: "Provenance is first-class.",
    body: "Every figure, recommendation, and inference cites its source. A clinician can trace a recommendation to the underlying study; a banker can trace a credit decision to the policy and the evidence; a watch officer can trace a track to the originating sensor. Unsourced inference is not intelligence.",
  },
  {
    n: "06",
    title: "Long horizon.",
    body: "We engineer for decades. Voranox platforms are built to be maintained, scrutinized, and extended across changes of administration, leadership, and technology. Quarterly relevance is not the standard. The institutions we serve operate at the time scale that statecraft, capital, and medicine actually move on.",
  },
  {
    n: "07",
    title: "Restraint is a feature.",
    body: "There is work the firm will not take. We do not build for adversarial regimes. We do not enable surveillance creep. We do not greenwash, sanctions-launder, or otherwise lend the firm's capacity to ends that the public would, on reflection, find indefensible. The line is drawn deliberately and held continuously.",
  },
  {
    n: "08",
    title: "Discretion is the standard, not the exception.",
    body: "Voranox engagements are confidential by default. We work in the institutional tradition: quietly, by relationship, and on the record only when the institution chooses. The firm's reputation is built through the work; the work is rarely visible.",
  },
];

const refusals = [
  "We do not build for regimes that target their own populations or allied nations.",
  "We do not enable surveillance of lawfully assembled citizens, journalists, or political opposition.",
  "We do not provide intelligence systems that displace lawful human authority over consequential decisions.",
  "We do not undertake engagements whose stated or evident purpose is to evade legitimate regulation, sanctions, or disclosure.",
  "We do not bulk-license our content corpus, models, or institutional intelligence for training third-party foundation models without a separate written agreement.",
];

export default function DoctrinePage() {
  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-36">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
            The Voranox Doctrine
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            Eight commitments,{" "}
            <span className="gold-text">held continuously.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ivory/75 leading-relaxed">
            This page is the canonical statement of the standards the firm
            holds itself to. The same commitments appear, in their domain
            specifics, on every platform page and in every engagement
            memorandum.
          </p>
          <p className="mt-6 text-sm text-ivory/55">
            Doctrine is the kind of thing that only matters under pressure.
            The discipline is not in writing it; it is in keeping it.
          </p>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
          <ol className="space-y-px bg-gold/10 border border-gold/15">
            {planks.map((p) => (
              <li
                key={p.n}
                className="bg-midnight grid md:grid-cols-12 gap-6 px-8 py-12"
              >
                <div className="md:col-span-2">
                  <p className="font-serif text-gold text-4xl">{p.n}</p>
                </div>
                <div className="md:col-span-10">
                  <h2 className="font-serif text-2xl md:text-3xl text-ivory mb-4">
                    {p.title}
                  </h2>
                  <p className="text-ivory/75 leading-[1.8]">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-gold/15 bg-midnight-50/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            What we refuse
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-12">
            Doctrine matters most where the line is drawn.
          </h2>
          <ul className="space-y-6">
            {refusals.map((r, i) => (
              <li key={i} className="flex gap-6 items-start">
                <span className="font-serif text-gold text-xl mt-1 shrink-0">
                  ·
                </span>
                <p className="font-serif text-xl md:text-2xl text-ivory/90 leading-snug">
                  {r}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-ivory/65 leading-[1.8] max-w-3xl">
            Engagements pass through a doctrine review before they pass
            through a contract. A small partner committee carries the weight
            of those decisions and is empowered to refuse work the firm would
            otherwise be paid to do.
          </p>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-6">
            Read further
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/insights/the-voranox-doctrine"
              className="inline-flex items-center gap-3 px-6 py-3 border border-gold/30 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
            >
              The Doctrine · long-form essay
            </Link>
            <Link
              href="/insights/the-discipline-of-restraint"
              className="inline-flex items-center gap-3 px-6 py-3 border border-gold/30 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
            >
              The Discipline of Restraint
            </Link>
            <Link
              href="/trust"
              className="inline-flex items-center gap-3 px-6 py-3 border border-gold/30 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
            >
              Trust & Standards
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-ivory leading-tight">
            Held to this standard,{" "}
            <span className="gold-text">by you, by us, by the public.</span>
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 px-10 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
          >
            Request a Confidential Briefing <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
