import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Engage",
  description:
    "Request a confidential briefing with Voranox Inc. — the parent company building intelligent platforms for every industry.",
};

export default function ContactPage() {
  return (
    <section className="relative noise">
      <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
            Engage Voranox
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05]">
            Request a <span className="gold-text">confidential briefing.</span>
          </h1>
          <p className="mt-8 text-ivory/70 leading-relaxed">
            Voranox engagements are reserved for institutions operating at the
            scale of nations, markets, and global industries. Tell us where
            intelligence is required and we will arrange a private briefing.
          </p>

          <div className="mt-12 space-y-6 text-sm text-ivory/70">
            <Detail label="General" value="briefings@voranox.com" />
            <Detail label="Press" value="press@voranox.com" />
            <Detail label="Careers" value="talent@voranox.com" />
          </div>

          <div className="mt-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Offices
            </p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-ivory/60">
              <li>New York</li>
              <li>London</li>
              <li>Singapore</li>
              <li>Dubai</li>
              <li>Lagos</li>
              <li>Geneva</li>
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-1">
        {label}
      </p>
      <p className="font-serif text-lg text-ivory">{value}</p>
    </div>
  );
}
