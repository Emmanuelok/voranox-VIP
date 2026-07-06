import Link from "next/link";
import { sectors, sectorCategories } from "@/lib/sectors";
import { SectorCard } from "@/components/SectorCard";
import { HeroCanvas } from "@/components/HeroCanvas";
import { Counter } from "@/components/Counter";

export default function HomePage() {
  const featured = sectors.slice(0, 9);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden noise">
        <HeroCanvas />
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px hairline border-t" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-44">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8 fade-up">
            Voranox Inc. — Est. The Intelligence Standard
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl fade-up">
            Intelligence,{" "}
            <span className="gold-text shimmer bg-gold-shine">refined</span>{" "}
            for every industry.
          </h1>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-ivory/70 leading-relaxed fade-up">
            Voranox Inc. is the parent company architecting Voranox intelligent
            platforms across every sector, institution, and discipline of human
            enterprise — from sovereign capitals to the global trading floor,
            from the operating theater to deep space.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 fade-up">
            <Link
              href="/platforms"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium hover:opacity-90 transition"
            >
              Explore Platforms <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-ivory/20 text-ivory text-xs tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition"
            >
              Request a Briefing
            </Link>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 max-w-4xl border-t border-gold/15 pt-12">
            <StatNum value={sectors.length} suffix="+" label="Industries served" />
            <StatNum value={6} label="Continents" />
            <StatNum value={40} suffix="+" label="Languages" />
            <Stat label="Sovereign-grade" value="Yes" />
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-t border-gold/15 bg-midnight-50/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
            The Voranox Doctrine
          </p>
          <p className="font-serif text-2xl md:text-4xl leading-[1.4] text-ivory/90">
            Every industry deserves intelligence engineered to its <em>own</em>{" "}
            language, its own physics, its own ethics — not a generic model
            retrofitted to fit. We build a dedicated{" "}
            <span className="gold-text">Voranox platform</span> for each.
          </p>
        </div>
      </section>

      {/* CATEGORIES STRIP */}
      <section className="border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
                Eight Domains. One Standard.
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-ivory max-w-2xl">
                Architected across the breadth of global enterprise.
              </h2>
            </div>
            <Link
              href="/platforms"
              className="text-xs tracking-[0.3em] uppercase text-gold hover:text-gold-light"
            >
              All platforms →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 border border-gold/15">
            {sectorCategories.map((cat) => {
              const count = sectors.filter((s) => s.category === cat).length;
              return (
                <div
                  key={cat}
                  className="bg-midnight p-7 hover:bg-midnight-100 transition"
                >
                  <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
                    {cat}
                  </p>
                  <p className="font-serif text-3xl text-ivory">{count}</p>
                  <p className="text-xs text-ivory/50 mt-1">platforms</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PLATFORMS */}
      <section className="border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
                Featured Platforms
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-ivory max-w-2xl">
                Intelligence, deployed where it matters.
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/15">
            {featured.map((s) => (
              <div key={s.slug} className="bg-midnight">
                <SectorCard sector={s} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/platforms"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
            >
              View all {sectors.length} platforms <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gold/15 relative noise">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-32 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
            Engage Voranox
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-tight">
            For the institutions{" "}
            <span className="gold-text">building what comes next.</span>
          </h2>
          <p className="mt-8 text-lg text-ivory/70 max-w-2xl mx-auto">
            Voranox engagements are reserved for organizations operating at the
            scale of nations, markets, and global industries. We build to that
            standard.
          </p>
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-serif text-3xl md:text-4xl gold-text">{value}</p>
      <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-ivory/50">
        {label}
      </p>
    </div>
  );
}

function StatNum({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div>
      <Counter
        value={value}
        suffix={suffix}
        className="font-serif text-3xl md:text-4xl gold-text"
      />
      <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-ivory/50">
        {label}
      </p>
    </div>
  );
}
