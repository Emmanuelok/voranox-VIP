import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { releases, releaseBySlug } from "@/lib/releases";

export function generateStaticParams() {
  return releases.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const release = releaseBySlug(slug);
  if (!release) return { title: "Release" };
  return {
    title: release.headline,
    description: release.summary,
  };
}

export default async function ReleasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const release = releaseBySlug(slug);
  if (!release) notFound();

  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <Link
            href="/press"
            className="text-xs tracking-[0.3em] uppercase text-ivory/50 hover:text-gold"
          >
            ← Press
          </Link>
          <p className="mt-10 text-xs tracking-[0.5em] uppercase text-gold/80">
            For Immediate Release · {release.date}
          </p>
          <p className="mt-4 text-[10px] tracking-[0.35em] uppercase text-gold/60">
            {release.dateline}
          </p>
          <h1 className="mt-8 font-serif text-4xl md:text-5xl leading-[1.15]">
            {release.headline}
          </h1>
        </div>
      </section>

      <article>
        <div className="max-w-2xl mx-auto px-6 lg:px-10 py-20">
          {release.body.map((para, i) => (
            <p
              key={i}
              className="font-serif text-lg md:text-xl leading-[1.75] text-ivory/85 mb-7"
            >
              {para}
            </p>
          ))}

          <hr className="border-gold/15 my-16" />

          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            About Voranox Inc.
          </p>
          <p className="font-serif text-base text-ivory/75 leading-[1.8] mb-12">
            {release.about}
          </p>

          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Press Contact
          </p>
          <p className="font-serif text-base text-ivory/75 leading-[1.8]">
            {release.contact}
          </p>

          <hr className="border-gold/15 my-16" />

          <p className="text-center text-xs tracking-[0.4em] uppercase text-gold/60">
            — End of Release —
          </p>
        </div>
      </article>

      <section className="border-t border-gold/15 bg-midnight-50/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-6">
            Press desks
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory">
            For correspondents on deadline.
          </h2>
          <a
            href="mailto:press@voranox.com"
            className="mt-10 inline-flex items-center gap-3 px-10 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
          >
            press@voranox.com <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
