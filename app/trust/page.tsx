import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trust & Standards",
  description:
    "Voranox Inc. — security, governance, and engineering standards engineered for sovereign-grade institutions.",
};

const principles = [
  {
    name: "Sovereign Deployment",
    body: "Every Voranox platform is designed to be deployed in the jurisdiction that owns the data — on-premise, on national clouds, in air-gapped environments, or in our own sovereign-grade infrastructure. The customer chooses the topology.",
  },
  {
    name: "Auditability by Default",
    body: "Every model decision, data access, and platform action produces a tamper-evident audit record. Auditability is not an enterprise add-on; it is the substrate of the system.",
  },
  {
    name: "Human Authority",
    body: "Voranox platforms are engineered with humans on the loop by default. Where automation is appropriate, it is bounded by policy, by jurisdiction, and by the discipline of the profession served.",
  },
  {
    name: "Provenance & Evidence",
    body: "Every figure, recommendation, and inference cites its source. We treat provenance as a first-class engineering property — at the data layer, the model layer, and the decision layer.",
  },
  {
    name: "Cryptographic Discipline",
    body: "Encryption in transit, at rest, and in use. Hardware-backed keys. Confidential compute where mandate requires. The standard is the highest standard of the institutions we serve.",
  },
  {
    name: "Long Horizon",
    body: "We engineer for decades, not quarters. Voranox platforms are built to be maintained, scrutinized, and trusted across changes of administration, leadership, and technology.",
  },
];

const standards = [
  "ISO/IEC 27001 — Information Security",
  "ISO/IEC 27017 — Cloud Security",
  "ISO/IEC 27018 — Cloud Privacy",
  "ISO/IEC 42001 — AI Management",
  "SOC 2 Type II",
  "NIST AI RMF",
  "EU AI Act — High-Risk Compliance Pathway",
  "GDPR · UK GDPR · CCPA",
  "HIPAA (Vitae) · PCI-DSS (Sterling)",
  "FedRAMP / IL5 deployment pathway (Sentinel, Civitas)",
];

export default function TrustPage() {
  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
            Trust & Standards
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            Engineered to the standard of the{" "}
            <span className="gold-text">institutions we serve.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ivory/70 leading-relaxed">
            Voranox builds for ministries, central banks, hospitals, and global
            enterprises whose work is consequential and whose tolerance for
            failure is low. Trust is not a feature of our platforms. It is the
            premise.
          </p>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Principles
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-14 max-w-3xl">
            Six commitments that shape every Voranox platform.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/15">
            {principles.map((p, i) => (
              <div key={p.name} className="bg-midnight p-10">
                <p className="font-serif text-gold text-xl mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-2xl text-ivory mb-3">
                  {p.name}
                </h3>
                <p className="text-sm text-ivory/65 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gold/15 bg-midnight-50/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
              Compliance Posture
            </p>
            <h2 className="font-serif text-3xl md:text-5xl">
              Aligned to the regimes that govern our customers.
            </h2>
            <p className="mt-6 text-ivory/65 leading-relaxed">
              Each Voranox platform is mapped to the regulatory and standards
              regimes that apply to the industry it serves. This is not generic
              compliance theater — it is industry-specific posture.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-px bg-gold/10 border border-gold/15">
              {standards.map((s) => (
                <li
                  key={s}
                  className="bg-midnight p-5 font-serif text-ivory/85 text-sm"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-32 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
            Due Diligence
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory">
            For technical, security, or procurement teams.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-ivory/65 leading-relaxed">
            Detailed security architecture, SOC 2 reports, model documentation,
            and data-processing addenda are available under NDA to evaluating
            institutions.
          </p>
          <Link
            href="/contact"
            className="mt-12 inline-flex items-center gap-3 px-10 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
          >
            Request the Trust Pack <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
