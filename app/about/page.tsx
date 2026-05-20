import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Firm",
  description:
    "Voranox Inc. is the parent company architecting intelligent platforms across every industry, sector, and institution worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
            The Firm
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            An intelligence consultancy{" "}
            <span className="gold-text">for the institutions</span> shaping the
            century.
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ivory/70 leading-relaxed">
            Voranox Inc. is the parent company behind every Voranox intelligent
            platform. We are part research firm, part product house, part
            consultancy — built to serve sovereigns, institutions, and global
            industries with intelligence engineered to their reality.
          </p>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-3 gap-12">
          <Pillar
            title="Sovereign-grade"
            body="We build to the standards of the institutions we serve — central banks, defense ministries, global majors, supranationals."
          />
          <Pillar
            title="Industry-native"
            body="Each platform is architected for one industry's language, physics, and ethics. No retrofits. No generics."
          />
          <Pillar
            title="Quietly enduring"
            body="Voranox engagements are confidential by default. Our work is measured in decades of compounded intelligence."
          />
        </div>
      </section>

      <section className="border-b border-gold/15 bg-midnight-50/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
            Doctrine
          </p>
          <div className="space-y-8 text-ivory/80 text-lg leading-relaxed">
            <p>
              The world does not need another general-purpose model retrofitted
              to every industry. It needs <em>intelligence engineered for the
              specific physics</em> of medicine, of capital, of statecraft, of
              the grid, of the ocean, of the factory floor.
            </p>
            <p>
              Voranox Inc. exists to build that intelligence — one platform per
              industry, each one a peer of the institutions it serves. We treat
              the work as a craft and the relationships as long.
            </p>
            <p className="font-serif text-2xl gold-text">
              Intelligence, refined. Quietly. Permanently.
            </p>
            <p className="text-sm text-ivory/60">
              The firm&rsquo;s eight commitments are recorded in full on{" "}
              <Link href="/doctrine" className="text-gold hover:underline">
                the Doctrine page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Engage the firm.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
          >
            Request a Confidential Briefing <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
        {title}
      </p>
      <p className="text-ivory/75 leading-relaxed">{body}</p>
    </div>
  );
}
