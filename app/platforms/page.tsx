import type { Metadata } from "next";
import { sectors, sectorCategories } from "@/lib/sectors";
import { PlatformDirectory } from "@/components/PlatformDirectory";

export const metadata: Metadata = {
  title: "Platforms",
  description:
    "The full directory of Voranox intelligent platforms — one purpose-built platform for every industry, sector, and institution.",
};

export default function PlatformsIndexPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Voranox Platform Directory",
    description:
      "The complete directory of Voranox intelligent platforms across every industry.",
    numberOfItems: sectors.length,
    itemListElement: sectors.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://voranox.com/platforms/${s.slug}`,
      name: `${s.platform} — ${s.name}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
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

      <PlatformDirectory sectors={sectors} />
    </>
  );
}
