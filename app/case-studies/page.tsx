import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Illustrative Engagements",
  description:
    "Four illustrative engagement sketches across Voranox Sterling, Vitae, Sentinel, and Civitas — the shape of how the firm actually works.",
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
            Illustrative Engagements
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            The shape of how the firm{" "}
            <span className="gold-text">actually works.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ivory/75 leading-relaxed">
            Voranox engagements are conducted under confidentiality. The
            sketches below are illustrative — drawn from the kinds of
            challenges institutional counterparts bring to the firm, the
            engagement model we hold ourselves to, and the architectural
            posture each platform takes in practice.
          </p>
          <p className="mt-6 text-sm text-ivory/55">
            All four are clearly marked as illustrative. None names a real
            counterpart; none discloses a real engagement.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
          <ul className="space-y-px bg-gold/10 border border-gold/15">
            {caseStudies.map((c) => (
              <li key={c.slug} className="bg-midnight">
                <Link
                  href={`/case-studies/${c.slug}`}
                  className="group grid md:grid-cols-12 gap-6 px-8 py-12 hover:bg-midnight-100/40 transition"
                >
                  <div className="md:col-span-3">
                    <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-3">
                      {c.platform}
                    </p>
                    <p className="text-xs text-ivory/55">{c.industry}</p>
                    <p className="mt-4 text-[10px] tracking-[0.3em] uppercase text-ivory/45">
                      {c.region}
                    </p>
                    <p className="text-[10px] text-ivory/45 mt-1">
                      {c.duration}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="font-serif text-2xl md:text-3xl text-ivory group-hover:gold-text leading-snug">
                      {c.headline}
                    </h2>
                    <p className="mt-4 text-sm text-ivory/55 italic">
                      {c.client}
                    </p>
                    <p className="mt-6 text-xs tracking-[0.3em] uppercase text-gold/70">
                      Read engagement →
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative noise border-t border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-24 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
            For your own engagement
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ivory leading-tight">
            The first briefing is the right place to begin.
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
