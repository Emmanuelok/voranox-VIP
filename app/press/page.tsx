import type { Metadata } from "next";
import Link from "next/link";
import { releases } from "@/lib/releases";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Voranox Inc. press kit, executive leadership, and media inquiries.",
};

const factSheet = [
  { label: "Legal name", value: "Voranox Incorporated" },
  { label: "Founded", value: "2025" },
  { label: "Headquarters", value: "New York · London · Singapore" },
  { label: "Sectors served", value: "46 industry platforms" },
  { label: "Domains", value: "Public Sector · Financial · Industry · Life Sciences · Society · Infrastructure · Knowledge · Commerce" },
  { label: "Tagline", value: "Intelligence, refined." },
];


const kit = [
  {
    label: "Wordmark · SVG",
    note: "Vector wordmark for editorial use",
    href: "/brand/voranox-wordmark.svg",
    download: true,
  },
  {
    label: "Monogram · SVG",
    note: "Voranox V monogram, gold on midnight",
    href: "/brand/voranox-monogram.svg",
    download: true,
  },
  {
    label: "Fact Sheet · On request",
    note: "One-page signed overview for press desks",
    href: "mailto:press@voranox.com",
    download: false,
  },
  {
    label: "Photography · On request",
    note: "Approved imagery available under embargo",
    href: "mailto:press@voranox.com",
    download: false,
  },
];

export default function PressPage() {
  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
            Press
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            For correspondents covering{" "}
            <span className="gold-text">the institutions of intelligence.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ivory/70 leading-relaxed">
            This page collects the materials press desks need to cover Voranox
            Inc.: a fact sheet, the press kit, executive leadership, and the
            firm&rsquo;s record of public statements.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:press@voranox.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
            >
              press@voranox.com <span aria-hidden>→</span>
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 border border-ivory/20 text-ivory text-xs tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition"
            >
              The Firm
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
              Fact Sheet
            </p>
            <h2 className="font-serif text-3xl md:text-5xl">
              The firm at a glance.
            </h2>
            <p className="mt-6 text-ivory/65 leading-relaxed">
              For verification and editorial reference. A signed PDF is
              available on request.
            </p>
          </div>
          <div className="md:col-span-8">
            <dl className="border border-gold/15 divide-y divide-gold/15">
              {factSheet.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-3 gap-4 px-6 py-5"
                >
                  <dt className="text-[10px] tracking-[0.35em] uppercase text-gold/70">
                    {row.label}
                  </dt>
                  <dd className="col-span-2 font-serif text-ivory/90">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-gold/15 bg-midnight-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Press Kit
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-14 max-w-3xl">
            Brand assets and editorial materials.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/15">
            {kit.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.download ? { download: true } : {})}
                className="bg-midnight p-8 block hover:bg-midnight-100 transition group"
              >
                <p className="font-serif text-gold text-xl mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-serif text-xl text-ivory mb-2 group-hover:gold-text">
                  {item.label}
                </p>
                <p className="text-sm text-ivory/55 mb-5">{item.note}</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60">
                  {item.download ? "Download →" : "Open →"}
                </p>
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs text-ivory/50">
            Press desks may request the full asset bundle from{" "}
            <a
              href="mailto:press@voranox.com"
              className="text-gold hover:text-gold-light underline-offset-4 hover:underline"
            >
              press@voranox.com
            </a>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Leadership
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-6 max-w-3xl">
            The Office of the Chief Executive.
          </h2>
          <p className="max-w-2xl text-ivory/65 leading-relaxed mb-12">
            The Voranox executive team will be introduced as the firm
            announces. Bios and editorial photography will be published here on
            embargo.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/15">
            {[
              "Chief Executive Officer",
              "Chief Technology Officer",
              "Chief Research Officer",
              "Chief Trust Officer",
              "President, Platforms",
              "General Counsel",
            ].map((role) => (
              <div
                key={role}
                className="bg-midnight p-8 flex flex-col gap-4"
              >
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold font-serif text-xl">
                  V
                </div>
                <div>
                  <p className="font-serif text-xl text-ivory">{role}</p>
                  <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mt-2">
                    To be announced
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gold/15 bg-midnight-50/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Public Record
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-14">
            Releases and statements.
          </h2>
          <ul className="border border-gold/15">
            {releases.map((r) => (
              <li key={r.slug} className="border-t border-gold/15 first:border-t-0">
                <Link
                  href={`/press/${r.slug}`}
                  className="grid md:grid-cols-12 gap-4 px-6 py-8 hover:bg-midnight-100/40 transition group"
                >
                  <div className="md:col-span-2">
                    <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70">
                      {r.date}
                    </p>
                    <p className="text-[10px] text-ivory/40 mt-1">
                      {r.dateline}
                    </p>
                  </div>
                  <div className="md:col-span-10">
                    <p className="font-serif text-2xl text-ivory group-hover:gold-text leading-snug">
                      {r.headline}
                    </p>
                    <p className="mt-3 text-ivory/65 text-sm leading-relaxed">
                      {r.summary}
                    </p>
                    <p className="mt-3 text-xs tracking-[0.3em] uppercase text-gold/70">
                      Read full release →
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-32 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
            Media Inquiries
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory">
            For correspondents on deadline.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-ivory/65 leading-relaxed">
            We respond to bona fide press inquiries within one business day.
            For urgent matters, please mark your subject line accordingly.
          </p>
          <a
            href="mailto:press@voranox.com"
            className="mt-12 inline-flex items-center gap-3 px-10 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
          >
            press@voranox.com <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
