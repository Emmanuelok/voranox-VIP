import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sectors, sectorsBySlug } from "@/lib/sectors";

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectorsBySlug(slug);
  if (!sector) return { title: "Platform" };
  return {
    title: `${sector.platform} — ${sector.name}`,
    description: sector.description,
  };
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = sectorsBySlug(slug);
  if (!sector) notFound();

  const related = sectors
    .filter((s) => s.category === sector.category && s.slug !== sector.slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <Link
            href="/platforms"
            className="text-xs tracking-[0.3em] uppercase text-ivory/50 hover:text-gold"
          >
            ← All Platforms
          </Link>
          <p className="mt-10 text-xs tracking-[0.5em] uppercase text-gold/80">
            {sector.category} · {sector.name}
          </p>
          <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[1.02]">
            <span className="gold-text shimmer bg-gold-shine">
              {sector.platform}
            </span>
          </h1>
          <p className="mt-10 max-w-3xl font-serif text-2xl md:text-3xl italic text-ivory/85 leading-snug">
            “{sector.tagline}”
          </p>
          <p className="mt-8 max-w-2xl text-lg text-ivory/70 leading-relaxed">
            {sector.description}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={sector.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
            >
              Visit Platform <span aria-hidden>↗</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-ivory/20 text-ivory text-xs tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition"
            >
              Request a Briefing
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Capabilities
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-14 max-w-3xl">
            Engineered to the language of {sector.name.toLowerCase()}.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-gold/10 border border-gold/15">
            {sector.capabilities.map((cap, i) => (
              <div
                key={cap}
                className="bg-midnight p-10 hover:bg-midnight-100 transition"
              >
                <p className="font-serif text-gold text-2xl mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-serif text-2xl text-ivory">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-b border-gold/15">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
              Adjacent in {sector.category}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-12">
              Related platforms
            </h2>
            <div className="grid md:grid-cols-3 gap-px bg-gold/10 border border-gold/15">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/platforms/${r.slug}`}
                  className="bg-midnight p-8 hover:bg-midnight-100 transition group"
                >
                  <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-3">
                    {r.category}
                  </p>
                  <p className="font-serif text-2xl text-ivory group-hover:gold-text">
                    {r.platform}
                  </p>
                  <p className="text-sm text-ivory/50 mt-2">{r.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
