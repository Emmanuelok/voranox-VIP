import Link from "next/link";
import type { LocaleCopy } from "@/lib/locales";
import { DocumentLang } from "./DocumentLang";

export function LocalizedHome({ locale }: { locale: LocaleCopy }) {
  const isRTL = locale.dir === "rtl";
  return (
    <div lang={locale.code} dir={locale.dir}>
      <DocumentLang lang={locale.code} dir={locale.dir} />
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-28 lg:py-44">
          <div className="flex items-center justify-between mb-10">
            <p className="text-xs tracking-[0.5em] uppercase text-gold/80">
              {locale.eyebrow}
            </p>
            <Link
              href="/"
              className="text-[10px] tracking-[0.3em] uppercase text-ivory/55 hover:text-gold transition"
            >
              {locale.navEnglish} {isRTL ? "←" : "→"}
            </Link>
          </div>
          <h1
            className={`font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl ${isRTL ? "text-right" : ""}`}
          >
            {locale.title.lead}{" "}
            <span className="gold-text shimmer bg-gold-shine">
              {locale.title.gold}
            </span>{" "}
            {locale.title.tail}
          </h1>
          <p
            className={`mt-12 max-w-3xl text-lg md:text-xl text-ivory/75 leading-relaxed ${isRTL ? "text-right" : ""}`}
          >
            {locale.lede}
          </p>
          <div
            className={`mt-12 flex flex-wrap gap-4 ${isRTL ? "justify-end flex-row-reverse" : ""}`}
          >
            <Link
              href="/platforms"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
            >
              {locale.ctaPrimary}{" "}
              <span aria-hidden>{isRTL ? "←" : "→"}</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-ivory/20 text-ivory text-xs tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition"
            >
              {locale.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-3 gap-12">
          {locale.pillars.map((p) => (
            <div key={p.title} className={isRTL ? "text-right" : ""}>
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                {p.title}
              </p>
              <p className="text-ivory/75 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-gold/15 bg-midnight-50/30">
        <div
          className={`max-w-4xl mx-auto px-6 lg:px-10 py-24 ${isRTL ? "text-right" : ""}`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
            {locale.doctrineEyebrow}
          </p>
          <ul className="space-y-6">
            {locale.doctrine.map((line, i) => (
              <li
                key={i}
                className={`flex gap-6 items-start ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <span className="font-serif text-gold text-xl mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-xl md:text-2xl text-ivory/90 leading-snug">
                  {line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-ivory leading-tight mb-10">
            {locale.closing}
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
          >
            {locale.ctaSecondary} <span aria-hidden>→</span>
          </Link>
          <p className="mt-10 text-xs tracking-[0.3em] uppercase text-ivory/40">
            voranox.com · {locale.endonym}
          </p>
        </div>
      </section>
    </div>
  );
}
