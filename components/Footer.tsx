import Link from "next/link";
import { Logo } from "./Logo";
import { sectors } from "@/lib/sectors";

const firmLinks: Array<[string, string]> = [
  ["About", "/about"],
  ["Doctrine", "/doctrine"],
  ["Practices", "/practices"],
  ["Architecture", "/architecture"],
  ["Engagements", "/case-studies"],
  ["Trust", "/trust"],
  ["Insights", "/insights"],
  ["Press", "/press"],
  ["Engagement", "/engagement"],
  ["Careers", "/careers"],
  ["Legal", "/legal"],
  ["Status", "/status"],
  ["Contact", "/contact"],
];

const offices = ["New York", "London", "Hong Kong", "Dubai", "Accra", "Geneva"];

export function Footer() {
  const featured = sectors.slice(0, 6);

  return (
    <footer className="mt-32 border-t border-gold/15 bg-midnight-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-x-10 gap-y-12 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4 space-y-5">
          <Logo size="lg" />
          <p className="text-ivory/60 text-sm leading-relaxed max-w-xs">
            The parent company architecting intelligent platforms for every
            industry, sector, and institution across the world.
          </p>
          <p className="text-xs tracking-[0.3em] uppercase text-gold/80">
            Intelligence, refined.
          </p>
        </div>

        {/* Platforms */}
        <div className="lg:col-span-3">
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">
            Platforms
          </h4>
          <ul className="space-y-2.5 text-sm text-ivory/70">
            {featured.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/platforms/${s.slug}`}
                  className="hover:text-gold transition-colors"
                >
                  {s.platform}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/platforms"
                className="text-xs tracking-[0.25em] uppercase text-gold/80 hover:text-gold"
              >
                View all →
              </Link>
            </li>
          </ul>
        </div>

        {/* Firm — two columns to keep it short */}
        <div className="lg:col-span-3">
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">
            Firm
          </h4>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-ivory/70">
            {firmLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Offices */}
        <div className="lg:col-span-2">
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">
            Offices
          </h4>
          <ul className="space-y-2.5 text-sm text-ivory/60">
            {offices.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/40">
          <p>© {new Date().getFullYear()} Voranox Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-gold">EN</Link>
            <Link href="/fr" className="hover:text-gold">FR</Link>
            <Link href="/es" className="hover:text-gold">ES</Link>
            <Link href="/ar" className="hover:text-gold">العربية</Link>
            <Link href="/zh" className="hover:text-gold">中文</Link>
          </div>
          <p className="tracking-[0.3em] uppercase">The Intelligence Standard</p>
        </div>
      </div>
    </footer>
  );
}
