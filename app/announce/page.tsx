import type { Metadata } from "next";
import Link from "next/link";
import { sectors, sectorCategories } from "@/lib/sectors";
import { releases } from "@/lib/releases";

export const metadata: Metadata = {
  title: "Voranox Inc. — Announcement",
  description:
    "The public introduction of Voranox Inc., the parent company architecting intelligent platforms across every industry, sector, and institution worldwide.",
};

export default function AnnouncePage() {
  const inaugural = releases[0];

  return (
    <>
      {/* HERO */}
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-28 lg:py-44">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-10">
            For Immediate Release · The Firm is Announced
          </p>
          <h1 className="font-serif text-5xl md:text-8xl leading-[1.02] max-w-5xl">
            Voranox Inc. is now{" "}
            <span className="gold-text shimmer bg-gold-shine">in operation.</span>
          </h1>
          <p className="mt-12 max-w-3xl text-lg md:text-xl text-ivory/75 leading-relaxed">
            The parent company architecting intelligent platforms for every
            industry, sector, and institution on earth — engineered to the
            standard of the central banks, ministries, hospitals, and global
            operators it serves.
          </p>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link
              href="/platforms"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
            >
              See the directory <span aria-hidden>→</span>
            </Link>
            <Link
              href={`/press/${inaugural.slug}`}
              className="inline-flex items-center gap-3 px-8 py-4 border border-ivory/20 text-ivory text-xs tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition"
            >
              Read the release
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-ivory/20 text-ivory text-xs tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition"
            >
              Engage the firm
            </Link>
          </div>

          {/* Signature */}
          <div className="mt-24 max-w-3xl border-t border-gold/15 pt-10 italic font-serif text-2xl md:text-3xl text-ivory/85 leading-snug">
            “Each industry has its own physics, its own language, and its own
            ethics. Intelligence engineered to those particulars compounds.
            Intelligence retrofitted to them depreciates. Voranox is a long
            bet on the inverse of consolidation.”
            <p className="mt-6 text-xs tracking-[0.35em] uppercase text-gold/70 not-italic">
              — From The Voranox Doctrine
            </p>
          </div>
        </div>
      </section>

      {/* THE NUMBERS */}
      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            At Inauguration
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-14 max-w-3xl">
            Voranox launches with breadth that is unusual — and depth that is
            deliberate.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 border border-gold/15">
            <BigStat value={`${sectors.length}`} label="Industry-native platforms" />
            <BigStat
              value={`${sectorCategories.length}`}
              label="Domains of human enterprise"
            />
            <BigStat value="6" label="Continental presence" />
            <BigStat value="40+" label="Languages supported" />
          </div>
        </div>
      </section>

      {/* THE DOCTRINE */}
      <section className="border-b border-gold/15 bg-midnight-50/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            The Doctrine
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-14">
            What we will, and will not, do.
          </h2>
          <ul className="space-y-8">
            {[
              "One platform per industry. Engineered to its language, physics, and ethics. No retrofits. No generics.",
              "Sovereign-grade by default. Auditable. Provenanced. Deployable in the jurisdiction that owns the data.",
              "Human authority preserved. Humans on the loop. Bounded automation. The decision belongs to the professional.",
              "Long horizon. We engineer for decades. Quarterly relevance is not the standard.",
              "Restraint is a feature. We do not build for adversaries. We do not enable surveillance creep. We refuse the work that does not belong to a serious firm.",
            ].map((line, i) => (
              <li key={i} className="flex gap-6 items-start">
                <span className="font-serif text-gold text-xl mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-2xl md:text-3xl text-ivory/90 leading-snug">
                  {line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHERE TO LOOK NEXT */}
      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Where to look
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-14 max-w-3xl">
            For the curious, the institutional, and the press.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/15">
            <Card
              eyebrow="Directory"
              title={`The ${sectors.length} platforms`}
              body="The full catalog, organized across nine domains and forty-eight industries."
              href="/platforms"
            />
            <Card
              eyebrow="Doctrine"
              title="Why one platform per industry"
              body="The case for industry-native intelligence and the long bet against consolidation."
              href="/insights"
            />
            <Card
              eyebrow="Standards"
              title="Trust & sovereign-grade"
              body="The six commitments and the compliance posture that govern every Voranox platform."
              href="/trust"
            />
            <Card
              eyebrow="Preview"
              title="Voranox Sterling"
              body="The Command Center for institutional capital — risk, compliance, markets, wealth."
              href="/sterling"
            />
            <Card
              eyebrow="Preview"
              title="Voranox Vitae"
              body="The clinical co-pilot — bedside synthesis, cited evidence, clinician-led governance."
              href="/vitae"
            />
            <Card
              eyebrow="Preview"
              title="Voranox Sentinel"
              body="The mission picture for allied defense — multi-INT fusion with human-on-loop authority."
              href="/sentinel"
            />
            <Card
              eyebrow="Preview"
              title="Voranox Civitas"
              body="The sovereign operations center — citizen services, policy simulation, identity, public finance."
              href="/civitas"
            />
            <Card
              eyebrow="Press"
              title="The inaugural release"
              body="The full text of the firm's first public statement, available for syndication."
              href={`/press/${inaugural.slug}`}
            />
            <Card
              eyebrow="Engage"
              title="Request a briefing"
              body="Confidential briefings are available to qualified institutional counterparts."
              href="/contact"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative noise">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-32 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
            Voranox Inc.
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-tight">
            Intelligence,{" "}
            <span className="gold-text">refined.</span>{" "}
            Quietly. Permanently.
          </h2>
          <Link
            href="/about"
            className="mt-12 inline-flex items-center gap-3 px-10 py-4 border border-gold/40 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
          >
            About the firm <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function BigStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-midnight p-8">
      <p className="font-serif text-5xl md:text-6xl gold-text">{value}</p>
      <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-ivory/55">
        {label}
      </p>
    </div>
  );
}

function Card({
  eyebrow,
  title,
  body,
  href,
}: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="bg-midnight p-8 hover:bg-midnight-100 transition group block"
    >
      <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-3">
        {eyebrow}
      </p>
      <p className="font-serif text-2xl text-ivory mb-3 group-hover:gold-text">
        {title}
      </p>
      <p className="text-sm text-ivory/65 leading-relaxed">{body}</p>
      <p className="mt-5 text-[10px] tracking-[0.3em] uppercase text-gold/60">
        Open →
      </p>
    </Link>
  );
}
