import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, caseStudyBySlug } from "@/lib/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudyBySlug(slug);
  if (!c) return { title: "Illustrative Engagement" };
  return {
    title: `${c.platform} · ${c.industry}`,
    description: c.headline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = caseStudyBySlug(slug);
  if (!c) notFound();

  const others = caseStudies.filter((x) => x.slug !== c.slug);

  return (
    <>
      {/* ILLUSTRATIVE BANNER */}
      <div className="bg-gold/10 border-b border-gold/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between text-xs tracking-[0.3em] uppercase">
          <span className="text-gold">Illustrative engagement</span>
          <span className="text-ivory/55 hidden md:inline">
            No real counterpart is named.
          </span>
          <Link
            href="/case-studies"
            className="text-ivory/70 hover:text-gold"
          >
            ← All sketches
          </Link>
        </div>
      </div>

      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-4">
            {c.platform} · {c.industry}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            {c.headline}
          </h1>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10 max-w-3xl border-t border-gold/15 pt-8">
            <Fact label="Counterpart" value={c.client} />
            <Fact label="Region" value={c.region} />
            <Fact label="Engagement duration" value={c.duration} />
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <Section eyebrow="Challenge" title="What the institution brought to the first briefing.">
        {c.challenge.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      {/* APPROACH */}
      <Section
        eyebrow="Approach"
        title="The Voranox engagement model in practice."
        tone="elevated"
      >
        {c.approach.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="text-sm text-ivory/55 mt-6">
          The same six-stage process governs every engagement —{" "}
          <Link href="/engagement" className="text-gold hover:underline">
            see how engagements proceed
          </Link>
          .
        </p>
      </Section>

      {/* ARCHITECTURE */}
      <Section eyebrow="Architecture" title="How the platform deployed.">
        {c.architecture.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="text-sm text-ivory/55 mt-6">
          For the firm&rsquo;s standing architectural posture, see{" "}
          <Link href="/architecture" className="text-gold hover:underline">
            architecture
          </Link>{" "}
          and{" "}
          <Link href="/trust" className="text-gold hover:underline">
            trust &amp; standards
          </Link>
          .
        </p>
      </Section>

      {/* OUTCOME */}
      <section className="border-b border-gold/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Outcome
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-12">
            What changed in the institution.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/15">
            {c.outcome.map((o) => (
              <div key={o.metric} className="bg-midnight p-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
                  {o.metric}
                </p>
                <p className="mt-3 font-serif text-2xl text-ivory leading-snug">
                  {o.value}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-ivory/75 leading-[1.8]">
            {c.outcomeNarrative}
          </p>
        </div>
      </section>

      {/* OTHERS */}
      {others.length > 0 && (
        <section className="border-b border-gold/15 bg-midnight-50/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
              Other sketches
            </p>
            <h2 className="font-serif text-2xl md:text-4xl mb-10">
              Across the firm.
            </h2>
            <ul className="grid md:grid-cols-3 gap-px bg-gold/10 border border-gold/15">
              {others.map((o) => (
                <li key={o.slug} className="bg-midnight">
                  <Link
                    href={`/case-studies/${o.slug}`}
                    className="block p-7 hover:bg-midnight-100 transition group"
                  >
                    <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-3">
                      {o.platform}
                    </p>
                    <p className="font-serif text-lg text-ivory group-hover:gold-text leading-snug">
                      {o.headline.slice(0, 110)}…
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative noise">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-28 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-ivory leading-tight">
            For your own engagement of this shape.
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

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
        {label}
      </p>
      <p className="mt-2 text-sm text-ivory/80">{value}</p>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  tone,
  children,
}: {
  eyebrow: string;
  title: string;
  tone?: "elevated";
  children: React.ReactNode;
}) {
  return (
    <section
      className={`border-b border-gold/15 ${tone === "elevated" ? "bg-midnight-50/30" : ""}`}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20">
        <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
          {eyebrow}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mb-10">{title}</h2>
        <div className="space-y-6 text-ivory/80 leading-[1.85] text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}
