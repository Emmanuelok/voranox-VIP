"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Item = {
  kind: "Platform" | "Essay" | "Release" | "Page" | "Preview" | "API";
  title: string;
  subtitle?: string;
  href: string;
  haystack: string;
};

type Props = { items: Item[] };

export function CommandPalette({ items }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const isMod = e.metaKey || e.ctrlKey;
      if (isMod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items.slice(0, 12);
    return items
      .filter((it) => it.haystack.toLowerCase().includes(q))
      .slice(0, 30);
  }, [items, query]);

  useEffect(() => setActive(0), [query]);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  function onListKey(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = results[active];
      if (item) go(item.href);
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden md:inline-flex items-center gap-3 px-3 py-1.5 border border-gold/15 text-[11px] tracking-[0.25em] uppercase text-ivory/60 hover:border-gold/40 hover:text-ivory transition"
        aria-label="Open command palette"
      >
        <span>⌕ Search</span>
        <kbd className="text-[10px] text-gold/70 border border-gold/20 px-1.5 py-0.5">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4"
      onKeyDown={onListKey}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-midnight/85 backdrop-blur-md"
      />
      <div className="relative w-full max-w-2xl border border-gold/30 bg-midnight shadow-2xl">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gold/15">
          <span className="text-gold">⌕</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search platforms, essays, releases, pages…"
            className="flex-1 bg-transparent outline-none text-ivory placeholder:text-ivory/40 text-sm"
            aria-label="Search"
          />
          <kbd className="text-[10px] text-gold/70 border border-gold/20 px-1.5 py-0.5">
            ESC
          </kbd>
        </div>
        <ul
          ref={listRef}
          className="max-h-[60vh] overflow-y-auto divide-y divide-gold/10"
        >
          {results.length === 0 && (
            <li className="px-5 py-10 text-center text-sm text-ivory/55">
              No matches for <em>“{query}”</em>.
            </li>
          )}
          {results.map((it, i) => (
            <li key={`${it.kind}-${it.href}`}>
              <button
                type="button"
                onClick={() => go(it.href)}
                onMouseEnter={() => setActive(i)}
                className={`w-full text-left px-5 py-3 flex items-center gap-4 transition ${
                  i === active
                    ? "bg-gold/10 border-l-2 border-gold"
                    : "border-l-2 border-transparent"
                }`}
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold/70 w-20 shrink-0">
                  {it.kind}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-serif text-ivory truncate">
                    {it.title}
                  </span>
                  {it.subtitle && (
                    <span className="block text-xs text-ivory/55 truncate mt-0.5">
                      {it.subtitle}
                    </span>
                  )}
                </span>
                <span className="text-gold/40 text-xs">↵</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="border-t border-gold/15 px-5 py-3 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-ivory/50">
          <span>{results.length} result{results.length === 1 ? "" : "s"}</span>
          <span className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Open</span>
          </span>
        </div>
      </div>
    </div>
  );
}
