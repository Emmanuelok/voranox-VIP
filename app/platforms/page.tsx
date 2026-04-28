import type { Metadata } from "next";
import { sectors, sectorCategories } from "@/lib/sectors";
import { SectorCard } from "@/components/SectorCard";

export const metadata: Metadata = {
  title: "Platforms",
  description:
    "The full directory of Voranox intelligent platforms — one purpose-built platform for every industry, sector, and institution.",
};

export default function PlatformsIndexPage() {
  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-6">
            The Voranox Platform Directory
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            One platform for{" "}
            <span className="gold-text">every industry on earth.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ivory/70 leading-relaxed">
            Each Voranox platform is engineered to the language, physics, and
            ethics of its industry. Below is the complete directory across{" "}
            {sectorCategories.length} domains and {sectors.length} sectors.
          </p>
        </div>
      </section>

      {sectorCategories.map((category) => {
        const items = sectors.filter((s) => s.category === category);
        return (
          <section
            key={category}
            className="border-b border-gold/15"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
              <div className="flex items-baseline justify-between mb-10">
                <div>
                  <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-3">
                    Domain
                  </p>
                  <h2 className="font-serif text-3xl md:text-5xl text-ivory">
                    {category}
                  </h2>
                </div>
                <p className="text-xs tracking-[0.3em] uppercase text-ivory/40">
                  {items.length} platforms
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/15">
                {items.map((s) => (
                  <div key={s.slug} className="bg-midnight">
                    <SectorCard sector={s} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
