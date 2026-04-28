import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Practices",
  description:
    "Voranox Inc. practices — the disciplines that underpin every Voranox intelligent platform.",
};

const practices = [
  {
    name: "Strategy & Foresight",
    body: "Long-horizon strategic intelligence for boards, sovereigns, and global institutions.",
  },
  {
    name: "Applied AI Research",
    body: "Frontier model research, evaluation, and domain adaptation for sovereign-grade deployments.",
  },
  {
    name: "Platform Engineering",
    body: "Architecture and engineering of the Voranox platforms — secure, scalable, deployed at scale.",
  },
  {
    name: "Data & Knowledge",
    body: "Knowledge graphs, ontologies, and data products engineered to each industry's reality.",
  },
  {
    name: "Risk, Trust & Governance",
    body: "Model assurance, AI governance, and institutional trust frameworks for regulated environments.",
  },
  {
    name: "Transformation & Adoption",
    body: "Change leadership, capability building, and adoption programs for the institutions we serve.",
  },
];

export default function PracticesPage() {
  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
            Practices
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            The disciplines that{" "}
            <span className="gold-text">underpin every platform.</span>
          </h1>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/15">
            {practices.map((p, i) => (
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

      <section>
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
          >
            Engage the Firm <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
