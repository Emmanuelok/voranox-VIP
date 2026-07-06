import Link from "next/link";
import { Logo } from "./Logo";
import { sectors } from "@/lib/sectors";

export function Footer() {
  const featured = sectors.slice(0, 12);

  return (
    <footer className="mt-32 border-t border-gold/15 bg-midnight-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-6">
          <Logo size="lg" />
          <p className="text-ivory/60 text-sm leading-relaxed max-w-sm">
            Voranox Inc. is the parent company architecting intelligent
            platforms for every industry, sector, and institution across the
            world.
          </p>
          <p className="text-xs tracking-[0.3em] uppercase text-gold/80">
            Intelligence, refined.
          </p>
        </div>

        <div className="lg:col-span-5">
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Featured Platforms
          </h4>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-ivory/70">
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
          </ul>
          <Link
            href="/platforms"
            className="inline-block mt-6 text-xs tracking-[0.3em] uppercase text-gold hover:text-gold-light"
          >
            View all platforms →
          </Link>
        </div>

        <div className="lg:col-span-3 space-y-8">
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Firm
            </h4>
            <ul className="space-y-2 text-sm text-ivory/70">
              <li><Link href="/about" className="hover:text-gold">About</Link></li>
              <li><Link href="/doctrine" className="hover:text-gold">Doctrine</Link></li>
              <li><Link href="/practices" className="hover:text-gold">Practices</Link></li>
              <li><Link href="/architecture" className="hover:text-gold">Architecture</Link></li>
              <li><Link href="/case-studies" className="hover:text-gold">Engagements</Link></li>
              <li><Link href="/trust" className="hover:text-gold">Trust</Link></li>
              <li><Link href="/insights" className="hover:text-gold">Insights</Link></li>
              <li><Link href="/press" className="hover:text-gold">Press</Link></li>
              <li><Link href="/engagement" className="hover:text-gold">Engagement</Link></li>
              <li><Link href="/careers" className="hover:text-gold">Careers</Link></li>
              <li><Link href="/legal" className="hover:text-gold">Legal</Link></li>
              <li><Link href="/status" className="hover:text-gold">Status</Link></li>
              <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Offices
            </h4>
            <ul className="space-y-1 text-sm text-ivory/60">
              <li>New York</li>
              <li>London</li>
              <li>Hong Kong</li>
              <li>Dubai</li>
              <li>Accra</li>
            </ul>
          </div>
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
          <p className="tracking-[0.3em] uppercase">
            The Intelligence Standard
          </p>
        </div>
      </div>
    </footer>
  );
}
