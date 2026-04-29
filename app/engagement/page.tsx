import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engagement · How We Work",
  description:
    "How a Voranox engagement actually proceeds — from initial briefing through diligence, deployment, and continuous partnership.",
};

const stages = [
  {
    title: "Initial Briefing",
    duration: "1 — 2 sessions",
    body: "A confidential first conversation between the firm and the institution&rsquo;s senior counterpart. We establish mutual fit, the strategic question the institution is trying to answer, and whether a Voranox platform is the right instrument. Most briefings end without an engagement; that is by design.",
  },
  {
    title: "Discovery & Scoping",
    duration: "2 — 6 weeks",
    body: "Working sessions with the institution&rsquo;s domain leaders and technical staff to understand the operating reality: regulatory regime, data architecture, jurisdictional constraints, the time budget at the point of decision, the failure modes that are tolerable and the ones that are not. Output: a Discovery Memorandum.",
  },
  {
    title: "Diligence & Trust Pack",
    duration: "2 — 4 weeks",
    body: "The institution&rsquo;s security, audit, procurement, and legal teams review the Voranox Trust Pack — security architecture, SOC 2 reports, model documentation, data-processing addendum, and sub-processor list. We answer questions in writing, on the record, with the seriousness institutional diligence requires.",
  },
  {
    title: "Engagement Memorandum",
    duration: "1 — 2 weeks",
    body: "The instrument that records the engagement: scope, deployment topology, governance, success measures, the doctrine commitments specific to this customer, and the long-horizon partnership the engagement implies. Negotiated by the institution&rsquo;s counsel and the firm&rsquo;s general counsel. Signed by senior officers on both sides.",
  },
  {
    title: "Deployment",
    duration: "8 — 24 weeks",
    body: "The platform is deployed in the topology the institution has chosen — on-premise, on the national cloud, in air-gapped environments, or in our own sovereign-grade infrastructure. The institution&rsquo;s engineers and ours work in joint working groups. Auditability, provenance, and human-on-loop are validated under operational pressure before sign-off.",
  },
  {
    title: "Continuous Partnership",
    duration: "Multi-year",
    body: "The engagement does not end at deployment. The platform is maintained, scrutinized, and extended across the time horizons institutional work actually requires. Quarterly Doctrine Briefings, joint engineering rituals, and a named partner accountable to the institution&rsquo;s senior leadership ensure that the relationship compounds rather than depreciates.",
  },
];

const askWeMake = [
  "Senior leadership is involved. We do not engage at the procurement layer alone.",
  "The institution names a single accountable counterpart for the engagement.",
  "Diligence is conducted in good faith and on the record.",
  "Confidentiality is preserved on both sides.",
  "Success is measured by outcomes, not by deliverables.",
];

const askThemMakes = [
  "A named senior partner is accountable to the institution&rsquo;s leadership.",
  "Diligence answers are provided in writing, with the same seriousness we receive them.",
  "The platform is engineered to the regulatory and operational realities of the institution.",
  "Auditability, provenance, and human-on-loop are first-class properties.",
  "The engagement is held, by both sides, to the standard each profession requires.",
];

export default function EngagementPage() {
  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
            Engagement · How We Work
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            A serious institutional process,{" "}
            <span className="gold-text">held to its standard.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ivory/70 leading-relaxed">
            Voranox engagements are conducted with the patience, discretion,
            and rigor the institutions we serve are entitled to. This page
            describes how an engagement actually proceeds — from the first
            briefing through to a multi-year partnership.
          </p>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Six Stages
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-14 max-w-3xl">
            How a Voranox engagement proceeds.
          </h2>
          <ol className="space-y-px bg-gold/10 border border-gold/15">
            {stages.map((s, i) => (
              <li
                key={s.title}
                className="bg-midnight grid md:grid-cols-12 gap-6 px-8 py-10"
              >
                <div className="md:col-span-2">
                  <p className="font-serif text-gold text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-gold/70">
                    {s.duration}
                  </p>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-serif text-2xl text-ivory mb-3">
                    {s.title}
                  </h3>
                  <p
                    className="text-ivory/70 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: s.body }}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-gold/15 bg-midnight-50/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
              What we ask of clients
            </p>
            <h2 className="font-serif text-2xl md:text-4xl mb-8">
              The conditions under which we engage.
            </h2>
            <ul className="space-y-4">
              {askWeMake.map((line, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="font-serif text-gold text-lg shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="text-ivory/80 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
              What clients ask of us
            </p>
            <h2 className="font-serif text-2xl md:text-4xl mb-8">
              The standard we hold ourselves to.
            </h2>
            <ul className="space-y-4">
              {askThemMakes.map((line, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="font-serif text-gold text-lg shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="text-ivory/80 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            On the standard
          </p>
          <p className="font-serif text-2xl md:text-3xl text-ivory/90 leading-[1.5]">
            Engagements that meet this standard are uncommon, by design. The
            firm runs a small number of them, deliberately, and serves them
            for as long as the institution requires the work to be done well.
            Where a relationship is not held to that standard — by either
            side — the engagement does not begin.
          </p>
        </div>
      </section>

      <section className="relative noise">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-32 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
            The first conversation
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-tight">
            The right place to begin{" "}
            <span className="gold-text">is the first briefing.</span>
          </h2>
          <Link
            href="/contact"
            className="mt-12 inline-flex items-center gap-3 px-10 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
          >
            Request a Confidential Briefing <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
