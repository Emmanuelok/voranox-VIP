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
    description: sector.deep?.longTagline ?? sector.description,
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
  const deep = sector.deep;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: sector.platform,
    alternateName: `${sector.platform} — ${sector.name}`,
    description: deep?.longTagline ?? sector.description,
    provider: {
      "@type": "Organization",
      name: "Voranox Inc.",
      url: "https://voranox.com",
    },
    serviceType: sector.category,
    areaServed: "Worldwide",
    url: `https://voranox.com/platforms/${sector.slug}`,
    category: sector.name,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${sector.platform} capabilities`,
      itemListElement: sector.capabilities.map((c, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: c },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* HERO */}
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-32">
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
          {deep && (
            <p className="mt-8 max-w-3xl text-lg md:text-xl text-ivory/75 leading-relaxed">
              {deep.longTagline}
            </p>
          )}
          {!deep && (
            <p className="mt-8 max-w-2xl text-lg text-ivory/70 leading-relaxed">
              {sector.description}
            </p>
          )}

          {(() => {
            const previewMap: Record<string, { href: string; label: string }> = {
              "financial-services": { href: "/sterling", label: "Preview Command Center" },
              healthcare: { href: "/vitae", label: "Preview Clinical Co-Pilot" },
              defense: { href: "/sentinel", label: "Preview Mission Picture" },
              government: { href: "/civitas", label: "Preview Operations Center" },
            };
            const preview = previewMap[sector.slug];
            return (
              <div className="mt-12 flex flex-wrap gap-4">
                {preview ? (
                  <Link
                    href={preview.href}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
                  >
                    {preview.label} <span aria-hidden>→</span>
                  </Link>
                ) : (
                  <a
                    href={sector.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
                  >
                    Visit Platform <span aria-hidden>↗</span>
                  </a>
                )}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-ivory/20 text-ivory text-xs tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition"
                >
                  Request a Briefing
                </Link>
              </div>
            );
          })()}

          {deep && deep.metrics.length > 0 && (
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 max-w-4xl border-t border-gold/15 pt-12">
              {deep.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-serif text-3xl md:text-4xl gold-text">
                    {m.value}
                  </p>
                  <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-ivory/50">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MANIFESTO (deep only) */}
      {deep && (
        <section className="border-b border-gold/15 bg-midnight-50/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 py-24">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
              The {sector.platform.split(" ").pop()} Doctrine
            </p>
            <p className="font-serif text-2xl md:text-3xl leading-[1.5] text-ivory/90">
              {deep.manifesto}
            </p>
          </div>
        </section>
      )}

      {/* PILLARS */}
      {deep && deep.pillars.length > 0 && (
        <section className="border-b border-gold/15">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
              Pillars
            </p>
            <h2 className="font-serif text-3xl md:text-5xl mb-14 max-w-3xl">
              The architecture of {sector.platform.split(" ").pop()}.
            </h2>
            <div className="grid md:grid-cols-2 gap-px bg-gold/10 border border-gold/15">
              {deep.pillars.map((p, i) => (
                <div
                  key={p.name}
                  className="bg-midnight p-10 hover:bg-midnight-100 transition"
                >
                  <p className="font-serif text-gold text-xl mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-serif text-2xl text-ivory mb-4">
                    {p.name}
                  </h3>
                  <p className="text-ivory/70 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CAPABILITIES (always) */}
      <section className="border-b border-gold/15">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Capabilities
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-14 max-w-3xl">
            Engineered to the language of {sector.name.toLowerCase()}.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/15">
            {sector.capabilities.map((cap, i) => (
              <div
                key={cap}
                className="bg-midnight p-8 hover:bg-midnight-100 transition"
              >
                <p className="font-serif text-gold text-lg mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-serif text-xl text-ivory">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      {deep && deep.useCases.length > 0 && (
        <section className="border-b border-gold/15 bg-midnight-50/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
              In Practice
            </p>
            <h2 className="font-serif text-3xl md:text-5xl mb-14 max-w-3xl">
              Where {sector.platform.split(" ").pop()} earns its keep.
            </h2>
            <div className="space-y-px">
              {deep.useCases.map((u, i) => (
                <div
                  key={u.title}
                  className="grid md:grid-cols-12 gap-6 py-10 border-t border-gold/15 first:border-t-0"
                >
                  <div className="md:col-span-1">
                    <p className="font-serif text-gold text-2xl">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl text-ivory">
                      {u.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-ivory/70 leading-relaxed">{u.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DOCTRINE */}
      {deep && deep.doctrine.length > 0 && (
        <section className="border-b border-gold/15">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
              Doctrine
            </p>
            <h2 className="font-serif text-3xl md:text-5xl mb-14">
              The principles we will not compromise.
            </h2>
            <ul className="space-y-6">
              {deep.doctrine.map((d, i) => (
                <li key={i} className="flex gap-6 items-start">
                  <span className="font-serif text-gold text-xl mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-serif text-2xl md:text-3xl text-ivory/90 leading-snug">
                    {d}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CLIENTS */}
      {deep && deep.clients.length > 0 && (
        <section className="border-b border-gold/15 bg-midnight-50/30">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
              Engaged By
            </p>
            <h2 className="font-serif text-3xl md:text-5xl mb-14 max-w-3xl">
              Built for the institutions that operate at this scale.
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/15">
              {deep.clients.map((c) => (
                <li key={c} className="bg-midnight p-8">
                  <p className="font-serif text-xl text-ivory">{c}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* RELATED */}
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

      {/* CTA */}
      <section className="relative noise">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-32 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
            Engage {sector.platform}
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-tight">
            For institutions ready to{" "}
            <span className="gold-text">operate at this standard.</span>
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
