import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { essays, essayBySlug } from "@/lib/insights";

export function generateStaticParams() {
  return essays.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = essayBySlug(slug);
  if (!essay) return { title: "Essay" };
  return {
    title: essay.title,
    description: essay.subtitle,
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = essayBySlug(slug);
  if (!essay) notFound();

  const others = essays.filter((e) => e.slug !== essay.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: essay.title,
    description: essay.subtitle,
    author: { "@type": "Organization", name: essay.byline },
    publisher: {
      "@type": "Organization",
      name: "Voranox Inc.",
      logo: {
        "@type": "ImageObject",
        url: "https://voranox.com/icon.svg",
      },
    },
    inLanguage: "en",
    isPartOf: {
      "@type": "Periodical",
      name: "Voranox Insights",
      url: "https://voranox.com/insights",
    },
    url: `https://voranox.com/insights/${essay.slug}`,
    keywords: [essay.category, "Voranox", "Voranox Inc."],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <Link
            href="/insights"
            className="text-xs tracking-[0.3em] uppercase text-ivory/50 hover:text-gold"
          >
            ← Insights
          </Link>
          <p className="mt-10 text-xs tracking-[0.5em] uppercase text-gold/80">
            {essay.category} · {essay.date} · {essay.reading}
          </p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05]">
            {essay.title}
          </h1>
          <p className="mt-8 font-serif text-xl md:text-2xl italic text-ivory/80 leading-snug">
            {essay.subtitle}
          </p>
          <p className="mt-10 text-xs tracking-[0.3em] uppercase text-gold/70">
            {essay.byline}
          </p>
        </div>
      </section>

      <article>
        <div className="max-w-2xl mx-auto px-6 lg:px-10 py-20 prose-essay">
          {essay.body.map((para, i) => (
            <p
              key={i}
              className="font-serif text-lg md:text-xl leading-[1.75] text-ivory/85 mb-7"
            >
              {para}
            </p>
          ))}

          <hr className="border-gold/15 my-16" />

          <p className="text-xs tracking-[0.3em] uppercase text-gold/70 mb-3">
            End of essay
          </p>
          <p className="text-sm text-ivory/55 leading-relaxed">
            Voranox Insights is published deliberately. To be notified of
            forthcoming essays, write to{" "}
            <a
              href="mailto:insights@voranox.com"
              className="text-gold hover:text-gold-light underline-offset-4 hover:underline"
            >
              insights@voranox.com
            </a>
            .
          </p>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-gold/15 bg-midnight-50/30">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
              From the archive
            </p>
            <div className="grid md:grid-cols-2 gap-px bg-gold/10 border border-gold/15">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/insights/${o.slug}`}
                  className="bg-midnight p-8 hover:bg-midnight-100 transition group"
                >
                  <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-3">
                    {o.category}
                  </p>
                  <p className="font-serif text-2xl text-ivory group-hover:gold-text">
                    {o.title}
                  </p>
                  <p className="mt-2 text-sm text-ivory/55 leading-relaxed">
                    {o.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
