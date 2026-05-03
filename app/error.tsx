"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error in Vercel runtime logs with the digest so support
    // can correlate. The user-facing copy stays generic.
    console.error("[Voranox] runtime error:", error);
  }, [error]);

  return (
    <section className="relative noise">
      <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-10 py-32 text-center">
        <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
          Unexpected condition
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
          Something on this page{" "}
          <span className="gold-text">did not behave as expected.</span>
        </h1>
        <p className="mt-8 text-ivory/70 leading-relaxed">
          The condition has been recorded and the firm&rsquo;s engineers will
          investigate. You may try the page again, return to the homepage, or
          contact the firm directly.
        </p>

        {error.digest && (
          <p className="mt-6 text-[11px] tracking-[0.3em] uppercase text-ivory/45">
            Reference · <span className="font-mono normal-case">{error.digest}</span>
          </p>
        )}

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
          >
            Try again <span aria-hidden>↻</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 border border-ivory/20 text-ivory text-xs tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition"
          >
            Return to Voranox
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-ivory/20 text-ivory text-xs tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition"
          >
            Contact the firm
          </Link>
        </div>
      </div>
    </section>
  );
}
