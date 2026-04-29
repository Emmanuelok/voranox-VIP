"use client";

import { useMemo, useState } from "react";
import { sectorCategories, type Sector } from "@/lib/sectors";
import { SectorCard } from "@/components/SectorCard";

export function PlatformDirectory({ sectors }: { sectors: Sector[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sectors.filter((s) => {
      if (category && s.category !== category) return false;
      if (!q) return true;
      const haystack = [
        s.name,
        s.platform,
        s.tagline,
        s.description,
        s.category,
        ...s.capabilities,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [sectors, query, category]);

  const grouped = useMemo(() => {
    const m = new Map<string, Sector[]>();
    for (const s of filtered) {
      if (!m.has(s.category)) m.set(s.category, []);
      m.get(s.category)!.push(s);
    }
    return m;
  }, [filtered]);

  return (
    <>
      <section className="border-b border-gold/15 sticky top-20 z-40 bg-midnight/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <div className="relative flex-1 max-w-xl">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search platforms · capabilities · industries"
              aria-label="Search platforms"
              className="w-full bg-midnight-50/40 border border-gold/20 px-5 py-3 pl-11 text-ivory placeholder:text-ivory/40 focus:border-gold outline-none text-sm"
            />
            <span
              aria-hidden
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60"
            >
              ⌕
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <FilterChip
              active={category === null}
              onClick={() => setCategory(null)}
            >
              All · {sectors.length}
            </FilterChip>
            {sectorCategories.map((c) => {
              const count = sectors.filter((s) => s.category === c).length;
              return (
                <FilterChip
                  key={c}
                  active={category === c}
                  onClick={() => setCategory(category === c ? null : c)}
                >
                  {c} · {count}
                </FilterChip>
              );
            })}
          </div>
        </div>
      </section>

      {filtered.length === 0 && (
        <section className="border-b border-gold/15">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 py-32 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-6">
              No matches
            </p>
            <h3 className="font-serif text-3xl text-ivory">
              Nothing in the directory matches{" "}
              {query ? <em>“{query}”</em> : "those filters"}.
            </h3>
            <p className="mt-4 text-ivory/60">
              Try a different term, clear the category filter, or{" "}
              <button
                onClick={() => {
                  setQuery("");
                  setCategory(null);
                }}
                className="text-gold hover:text-gold-light underline-offset-4 hover:underline"
              >
                reset all filters
              </button>
              .
            </p>
          </div>
        </section>
      )}

      {Array.from(grouped.entries()).map(([cat, items]) => (
        <section key={cat} className="border-b border-gold/15">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="flex items-baseline justify-between mb-10">
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-3">
                  Domain
                </p>
                <h2 className="font-serif text-3xl md:text-5xl text-ivory">
                  {cat}
                </h2>
              </div>
              <p className="text-xs tracking-[0.3em] uppercase text-ivory/40">
                {items.length} platform{items.length === 1 ? "" : "s"}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/15">
              {items.map((s) => (
                <div key={s.slug} className="bg-midnight">
                  <SectorCard sector={s} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 text-[10px] tracking-[0.3em] uppercase border transition ${
        active
          ? "border-gold bg-gold/10 text-gold"
          : "border-gold/15 text-ivory/55 hover:border-gold/40 hover:text-ivory"
      }`}
    >
      {children}
    </button>
  );
}
