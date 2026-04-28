import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives, research, and briefings from Voranox Inc. — forthcoming.",
};

export default function InsightsPage() {
  return (
    <section className="relative noise">
      <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-32 lg:py-44">
        <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
          Insights
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
          Perspectives, <span className="gold-text">forthcoming.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-ivory/70 leading-relaxed">
          The Voranox Insights archive will publish the firm&rsquo;s research,
          briefings, and long-form perspectives on intelligence in industry,
          government, and global enterprise.
        </p>
        <p className="mt-12 text-xs tracking-[0.3em] uppercase text-gold/60">
          To be inaugurated.
        </p>
      </div>
    </section>
  );
}
