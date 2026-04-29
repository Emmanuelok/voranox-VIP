import type { Metadata } from "next";
import Link from "next/link";
import { essays } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives, research, and briefings from Voranox Inc. — long-form essays on doctrine, architecture, and the standards of sovereign-grade intelligence.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
            Insights
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            Long-form on{" "}
            <span className="gold-text">doctrine, architecture, and the standards</span>{" "}
            of intelligence.
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ivory/70 leading-relaxed">
            The Voranox Insights archive collects the firm&rsquo;s public
            essays on the practice of building intelligent platforms for
            consequential institutions. New pieces are added on a deliberate
            cadence.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
          <ul className="border-t border-gold/15">
            {essays.map((e) => (
              <li key={e.slug} className="border-b border-gold/15">
                <Link
                  href={`/insights/${e.slug}`}
                  className="block py-10 group grid md:grid-cols-12 gap-6"
                >
                  <div className="md:col-span-3 space-y-2">
                    <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70">
                      {e.category}
                    </p>
                    <p className="text-xs text-ivory/50">
                      {e.date} · {e.reading}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="font-serif text-3xl md:text-4xl text-ivory group-hover:gold-text leading-tight">
                      {e.title}
                    </h2>
                    <p className="mt-3 text-ivory/70 text-lg leading-relaxed">
                      {e.subtitle}
                    </p>
                    <p className="mt-4 text-xs tracking-[0.3em] uppercase text-gold/70">
                      Read essay →
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
