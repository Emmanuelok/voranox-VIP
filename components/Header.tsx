import Link from "next/link";
import { Logo } from "./Logo";

const nav = [
  { href: "/platforms", label: "Platforms" },
  { href: "/about", label: "The Firm" },
  { href: "/practices", label: "Practices" },
  { href: "/trust", label: "Trust" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Engage" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-midnight/70 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-[0.2em] uppercase text-ivory/70 hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 border border-gold/40 text-gold text-xs tracking-[0.25em] uppercase hover:bg-gold hover:text-midnight transition-all"
        >
          Request Briefing
          <span aria-hidden>→</span>
        </Link>
        <Link
          href="/platforms"
          className="lg:hidden text-sm tracking-[0.2em] uppercase text-gold"
        >
          Menu
        </Link>
      </div>
    </header>
  );
}
