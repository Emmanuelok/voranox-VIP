import Link from "next/link";
import type { Sector } from "@/lib/sectors";

export function SectorCard({ sector }: { sector: Sector }) {
  return (
    <Link
      href={`/platforms/${sector.slug}`}
      className="group relative block p-7 border border-gold/15 bg-midnight-50/40 hover:bg-midnight-100/60 hover:border-gold/40 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-gold/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="relative">
        <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-4">
          {sector.category}
        </p>
        <h3 className="font-serif text-2xl text-ivory mb-1 group-hover:gold-text transition-all">
          {sector.platform}
        </h3>
        <p className="text-sm text-ivory/50 mb-5">{sector.name}</p>
        <p className="text-sm text-ivory/70 leading-relaxed mb-6 italic font-serif">
          “{sector.tagline}”
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gold/10">
          <span className="text-xs tracking-[0.25em] uppercase text-ivory/50 group-hover:text-gold transition-colors">
            Explore
          </span>
          <span
            aria-hidden
            className="text-gold transition-transform duration-500 group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
