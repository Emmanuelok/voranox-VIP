import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand · Standards & Assets",
  description:
    "The Voranox Inc. brand standards — wordmark, monogram, color, typography, and usage. Assets available for download.",
};

const colors = [
  {
    name: "Midnight",
    hex: "#050816",
    role: "Primary background — the substrate of the brand",
    cls: "bg-midnight border-gold/30",
  },
  {
    name: "Midnight 50",
    hex: "#0A0E27",
    role: "Secondary surfaces and elevated panels",
    cls: "bg-[#0A0E27] border-gold/30",
  },
  {
    name: "Gold",
    hex: "#C9A961",
    role: "Brand accent — used sparingly, with intent",
    cls: "bg-gold border-gold-dark",
  },
  {
    name: "Gold Light",
    hex: "#E0C887",
    role: "Hover and shimmer highlight",
    cls: "bg-gold-light border-gold",
  },
  {
    name: "Gold Dark",
    hex: "#9E823F",
    role: "Pressed states and gradient anchor",
    cls: "bg-gold-dark border-gold",
  },
  {
    name: "Ivory",
    hex: "#F5F1E8",
    role: "Primary text on midnight",
    cls: "bg-ivory border-ivory-muted",
  },
  {
    name: "Ivory Muted",
    hex: "#C9C3B5",
    role: "Secondary text and quiet labels",
    cls: "bg-ivory-muted border-ivory-dim",
  },
  {
    name: "Ivory Dim",
    hex: "#8A8576",
    role: "Tertiary and metadata text",
    cls: "bg-ivory-dim border-ivory-dim",
  },
];

const downloads = [
  {
    name: "Monogram · SVG",
    note: "Voranox V monogram, gold on midnight",
    href: "/brand/voranox-monogram.svg",
  },
  {
    name: "Wordmark · SVG",
    note: "Full wordmark for editorial use, gold on midnight",
    href: "/brand/voranox-wordmark.svg",
  },
  {
    name: "Wordmark Light · SVG",
    note: "Wordmark for light surfaces, midnight on ivory",
    href: "/brand/voranox-wordmark-light.svg",
  },
  {
    name: "Favicon · SVG",
    note: "Inline favicon used by the site itself",
    href: "/icon.svg",
  },
];

export default function BrandPage() {
  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
            Brand · Standards & Assets
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            Restraint, refinement,{" "}
            <span className="gold-text">and the long horizon.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ivory/70 leading-relaxed">
            The Voranox brand is engineered for the institutions we serve —
            restrained in expression, classical in form, and built to age well
            across decades. This page collects the firm&rsquo;s wordmark,
            color, and typography standards, with assets available for
            download.
          </p>
        </div>
      </section>

      {/* WORDMARK */}
      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Wordmark
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-12">
            The Voranox wordmark.
          </h2>
          <div className="space-y-px bg-gold/10 border border-gold/15">
            <div className="bg-midnight px-10 py-16 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/voranox-wordmark.svg"
                alt="Voranox Inc. wordmark on midnight"
                className="max-w-[600px] w-full"
              />
            </div>
            <div className="bg-ivory px-10 py-16 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/voranox-wordmark-light.svg"
                alt="Voranox Inc. wordmark on ivory"
                className="max-w-[600px] w-full"
              />
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-sm text-ivory/70">
            <Note title="Clear space">
              Maintain at least the height of the V monogram of clear space on
              all sides of the wordmark.
            </Note>
            <Note title="Minimum size">
              Wordmark is legible from 120px wide on screen and 18mm wide in
              print. Below that, use the monogram alone.
            </Note>
            <Note title="Color">
              Use the gold-on-midnight wordmark by default. Use the
              midnight-on-ivory variant on light surfaces. Do not recolor the
              wordmark.
            </Note>
          </div>
        </div>
      </section>

      {/* MONOGRAM */}
      <section className="border-b border-gold/15 bg-midnight-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
              Monogram
            </p>
            <h2 className="font-serif text-3xl md:text-5xl">
              The Voranox V.
            </h2>
            <p className="mt-6 text-ivory/65 leading-relaxed">
              The monogram is a circle and a V — two of the oldest and most
              durable marks humans draw. Used as a favicon, an avatar, and a
              short-form mark when the wordmark cannot fit. Always reproduced
              in the gold-on-midnight palette.
            </p>
          </div>
          <div className="md:col-span-7 bg-midnight border border-gold/15 p-12 flex justify-center items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/voranox-monogram.svg"
              alt="Voranox monogram"
              className="w-48 h-48"
            />
          </div>
        </div>
      </section>

      {/* COLOR */}
      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Color
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-12">
            Midnight, gold, ivory.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/15">
            {colors.map((c) => (
              <div key={c.name} className="bg-midnight">
                <div className={`h-32 border-b ${c.cls}`} />
                <div className="p-5">
                  <p className="font-serif text-xl text-ivory">{c.name}</p>
                  <p className="text-xs tracking-[0.25em] uppercase text-gold/70 mt-1 font-mono">
                    {c.hex}
                  </p>
                  <p className="text-xs text-ivory/55 mt-3 leading-relaxed">
                    {c.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className="border-b border-gold/15 bg-midnight-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-px bg-gold/10 border border-gold/15">
          <div className="bg-midnight p-10">
            <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-4">
              Display & Headings
            </p>
            <p className="font-serif text-7xl text-ivory leading-none mb-6">
              Aa
            </p>
            <p className="font-serif text-2xl text-ivory mb-2">
              Playfair Display
            </p>
            <p className="text-sm text-ivory/55 leading-relaxed">
              Used for all headings, taglines, and editorial display. Italics
              are used purposefully — for emphasis, for proverb, and never for
              decoration.
            </p>
          </div>
          <div className="bg-midnight p-10">
            <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-4">
              Body & Interface
            </p>
            <p className="text-7xl text-ivory leading-none mb-6 font-sans">
              Aa
            </p>
            <p className="font-serif text-2xl text-ivory mb-2">Inter</p>
            <p className="text-sm text-ivory/55 leading-relaxed">
              Used for all body copy, interface elements, and dense
              informational surfaces. Tabular numerals are used in financial
              and analytical contexts.
            </p>
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="border-b border-gold/15">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Downloads
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-12">
            Brand assets for editorial and partner use.
          </h2>
          <ul className="grid sm:grid-cols-2 gap-px bg-gold/10 border border-gold/15">
            {downloads.map((d) => (
              <li key={d.name}>
                <a
                  href={d.href}
                  download
                  className="bg-midnight p-8 flex items-center justify-between gap-4 hover:bg-midnight-100 transition group"
                >
                  <div>
                    <p className="font-serif text-xl text-ivory group-hover:gold-text">
                      {d.name}
                    </p>
                    <p className="text-sm text-ivory/55 mt-1">{d.note}</p>
                  </div>
                  <span
                    aria-hidden
                    className="text-gold text-2xl transition-transform group-hover:translate-y-1"
                  >
                    ↓
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-ivory/50 leading-relaxed">
            Use of Voranox brand assets is permitted in editorial and partner
            contexts. Modification of the wordmark or monogram is not
            permitted. For commercial or co-branded use, write to{" "}
            <a
              href="mailto:brand@voranox.com"
              className="text-gold hover:text-gold-light underline-offset-4 hover:underline"
            >
              brand@voranox.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* USAGE */}
      <section>
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Usage Standards
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-12">
            What we ask of those who use the brand.
          </h2>
          <ul className="space-y-6 max-w-3xl">
            {[
              "Do not modify the wordmark or monogram. The proportions, gradient, and clear space are part of the mark.",
              "Do not recolor the brand. Gold-on-midnight is the primary expression. Midnight-on-ivory is the only sanctioned alternative.",
              "Do not place the wordmark on photographic backgrounds. Use a solid midnight or ivory plane.",
              "Do not use the monogram and the wordmark together. The wordmark already includes the monogram.",
              "Do not abbreviate the company name. It is Voranox Inc., always.",
            ].map((rule, i) => (
              <li key={i} className="flex gap-6 items-start">
                <span className="font-serif text-gold text-xl mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-xl md:text-2xl text-ivory/90 leading-snug">
                  {rule}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-gold/15">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-ivory">
            Questions about brand usage?
          </h2>
          <Link
            href="mailto:brand@voranox.com"
            className="mt-10 inline-flex items-center gap-3 px-10 py-4 border border-gold/40 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
          >
            brand@voranox.com <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function Note({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3">
        {title}
      </p>
      <p className="leading-relaxed">{children}</p>
    </div>
  );
}
