import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal · Cookies",
  description:
    "What cookies voranox.com sets, why, and for how long.",
};

const cookies = [
  {
    name: "voranox_portal",
    purpose:
      "Authenticated session for the Voranox Client Portal. HMAC-signed, HTTP-only, secure in production, SameSite=Lax. Issued only on successful magic-link verification.",
    duration: "7 days, rolling",
    type: "Strictly necessary (authentication)",
    optional: false,
  },
  {
    name: "voranox-theme",
    purpose:
      "Records the visitor&rsquo;s preferred theme (light / dark / system) so the choice persists between visits. Stored in localStorage, not a cookie in the strict sense — listed here for completeness.",
    duration: "Until the visitor clears site data",
    type: "Functional (preference)",
    optional: true,
  },
];

export default function CookiesPage() {
  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
            Legal · Cookies
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            What we set,{" "}
            <span className="gold-text">why, and for how long.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ivory/70 leading-relaxed">
            voranox.com is engineered to use the smallest practical set of
            cookies. We do not set advertising or tracking cookies on this
            site. The full inventory follows.
          </p>
          <p className="mt-6 text-xs text-ivory/40">
            Last reviewed: April 2026.
          </p>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
          <div className="border border-gold/15">
            <div className="hidden md:grid grid-cols-12 px-5 py-3 border-b border-gold/15 bg-midnight-100/40 text-[10px] tracking-[0.3em] uppercase text-gold/70">
              <span className="col-span-3">Name</span>
              <span className="col-span-5">Purpose</span>
              <span className="col-span-2">Type</span>
              <span className="col-span-2">Duration</span>
            </div>
            {cookies.map((c, i) => (
              <div
                key={c.name}
                className={`grid md:grid-cols-12 gap-3 px-5 py-5 ${i > 0 ? "border-t border-gold/10" : ""}`}
              >
                <div className="md:col-span-3">
                  <p className="font-mono text-[12px] text-gold/90">
                    {c.name}
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.25em] uppercase text-ivory/45">
                    {c.optional ? "Optional" : "Strictly necessary"}
                  </p>
                </div>
                <div
                  className="md:col-span-5 text-sm text-ivory/75 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: c.purpose }}
                />
                <div className="md:col-span-2 text-sm text-ivory/65">
                  {c.type}
                </div>
                <div className="md:col-span-2 text-sm text-ivory/65">
                  {c.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gold/15 bg-midnight-50/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16 space-y-6 text-ivory/75 leading-[1.8]">
          <h2 className="font-serif text-3xl md:text-4xl text-ivory">
            Things we deliberately do not do
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We do not set advertising or behavioural-tracking cookies on
              voranox.com.
            </li>
            <li>
              We do not load third-party social-media trackers.
            </li>
            <li>
              We do not use Google Analytics or similar
              cookie-based analytics. Vercel Analytics, used for aggregate
              page-view and Web Vitals measurement, is engineered to be
              cookie-less.
            </li>
            <li>
              We do not share cookie data with brokers or aggregators.
            </li>
          </ul>
          <p>
            For the broader privacy posture, see the{" "}
            <Link href="/legal#privacy" className="text-gold hover:underline">
              Privacy Notice
            </Link>{" "}
            on our main legal page.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-6">
            Counsel
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-6">
            Questions about cookies or privacy.
          </h2>
          <a
            href="mailto:privacy@voranox.com"
            className="inline-flex items-center gap-3 px-8 py-3 border border-gold/40 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
          >
            privacy@voranox.com <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
