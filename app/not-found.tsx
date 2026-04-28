import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative noise">
      <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-10 py-44 text-center">
        <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
          404
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
          The signal is <span className="gold-text">elsewhere.</span>
        </h1>
        <p className="mt-8 text-ivory/70">
          The page you sought is not at this address.
        </p>
        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
        >
          Return to Voranox <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
