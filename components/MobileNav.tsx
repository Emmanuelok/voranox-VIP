"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = { href: string; label: string };

const LOCALES = [
  { href: "/", code: "EN" },
  { href: "/fr", code: "FR" },
  { href: "/es", code: "ES" },
  { href: "/ar", code: "العربية" },
  { href: "/zh", code: "中文" },
];

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Body scroll lock + Escape to close + focus management.
  useEffect(() => {
    if (!open) return;
    // Capture the trigger node now so cleanup restores focus to the same
    // element even if the ref changes by the time cleanup runs.
    const trigger = buttonRef.current;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    // Move focus into the panel.
    requestAnimationFrame(() => {
      const firstFocusable = panelRef.current?.querySelector<HTMLElement>(
        "a, button, [tabindex]:not([tabindex='-1'])",
      );
      firstFocusable?.focus();
    });

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      // Return focus to the trigger.
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-gold/20 text-gold hover:border-gold/50 transition"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 7h18M3 12h18M3 17h18"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open && (
        <div
          className="lg:hidden fixed inset-0 z-[120]"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-midnight/85 backdrop-blur-md"
          />
          <div
            ref={panelRef}
            id="mobile-nav-panel"
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-midnight border-l border-gold/20 flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gold/15">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold/70">
                Voranox Inc.
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex items-center justify-center w-9 h-9 border border-gold/20 text-ivory/70 hover:text-gold hover:border-gold/50 transition"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex-1 px-6 py-8" aria-label="Primary">
              <ul className="space-y-1">
                {items.map((item) => {
                  const active =
                    pathname === item.href ||
                    pathname?.startsWith(`${item.href}/`);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block py-4 border-b border-gold/10 font-serif text-2xl transition ${
                          active
                            ? "text-gold"
                            : "text-ivory/85 hover:text-gold"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-10 text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-3">
                Operations
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/portal/login" className="text-ivory/75 hover:text-gold">
                    Client Portal · Sign in
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-ivory/75 hover:text-gold">
                    Engagements
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="text-ivory/75 hover:text-gold">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="text-ivory/75 hover:text-gold">
                    Legal
                  </Link>
                </li>
              </ul>

              <p className="mt-10 text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-3">
                Languages
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {LOCALES.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-ivory/75 hover:text-gold">
                      {l.code}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="px-6 py-6 border-t border-gold/15 space-y-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] tracking-[0.35em] uppercase text-gold/70">
                  Theme
                </span>
                <ThemeToggle alwaysVisible />
              </div>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
              >
                Request Briefing <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
