import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Voranox Inc. — building intelligent platforms for the institutions shaping the century.",
};

export default function CareersPage() {
  return (
    <section className="relative noise">
      <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-32 lg:py-44">
        <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
          Careers
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
          For the few who build{" "}
          <span className="gold-text">what others cannot.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-ivory/70 leading-relaxed">
          Voranox Inc. recruits researchers, engineers, designers, and
          operators with the rare combination of depth and judgment required to
          build intelligence for the world&rsquo;s most consequential institutions.
        </p>
        <Link
          href="mailto:talent@voranox.com"
          className="mt-12 inline-flex items-center gap-3 px-10 py-4 border border-gold/40 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
        >
          Submit Candidacy <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
