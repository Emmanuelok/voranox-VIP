import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Voranox technical architecture — substrate model, data sovereignty, model lifecycle, deployment topology, integration, observability, and resilience.",
};

const sections = [
  { id: "substrate", label: "Substrate" },
  { id: "data", label: "Data Sovereignty" },
  { id: "model", label: "Model Lifecycle" },
  { id: "topology", label: "Deployment Topology" },
  { id: "integration", label: "Integration" },
  { id: "observability", label: "Observability & Audit" },
  { id: "resilience", label: "Resilience" },
];

export default function ArchitecturePage() {
  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
            Architecture
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            For the CTO,{" "}
            <span className="gold-text">the CISO, the appointed actuary.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ivory/70 leading-relaxed">
            This page is the standing technical posture every Voranox platform
            adheres to. The policy view lives at{" "}
            <Link href="/trust" className="text-gold hover:underline">
              /trust
            </Link>
            ; what follows is the engineering substrate that makes the policy
            enforceable in code, in deployment, and in operation.
          </p>
          <p className="mt-6 text-sm text-ivory/55">
            Last reviewed: April 2026. Engagement-specific deviations are
            recorded in each Engagement Memorandum.
          </p>
        </div>
      </section>

      {/* TOC */}
      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] tracking-[0.3em] uppercase text-gold/70">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-gold">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <article>
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 space-y-20">
          <Section id="substrate" eyebrow="01" title="Substrate · One platform per industry">
            <p>
              Each Voranox platform is a discrete, independently deployable
              system. Sterling and Vitae do not share data planes, model
              registries, or deployment topologies. They share the firm&rsquo;s
              engineering standards and the Voranox doctrine — nothing else.
            </p>
            <p>
              This is a deliberate architectural choice. Cross-industry data
              flow is precisely where regulated industries are least able to
              accept consolidation. Keeping platforms separate at the substrate
              level means the bank&rsquo;s data never sees the hospital&rsquo;s,
              and the ministry&rsquo;s never sees the defense agency&rsquo;s,
              by construction rather than by access policy.
            </p>
          </Section>

          <Section id="data" eyebrow="02" title="Data sovereignty · The customer owns the substrate">
            <p>
              The customer chooses the deployment topology. Voranox platforms
              are engineered to be portable across on-premise, sovereign-cloud,
              hyperscaler, and air-gapped environments. We engineer to the
              open-standards substrate of the cloud, not to the lock-in surface
              of any single hyperscaler.
            </p>
            <p>
              Customer data never leaves the customer&rsquo;s chosen
              jurisdiction. Cryptographic key custody respects the
              institutional trust boundary — bring-your-own-key,
              hold-your-own-key, and customer-managed encryption are the
              default posture, not enterprise upsells. Where mandate requires,
              confidential compute environments are supported.
            </p>
          </Section>

          <Section id="model" eyebrow="03" title="Model lifecycle · Evaluation, governance, and replacement">
            <p>
              Every model in a Voranox platform is evaluated against the
              industry it serves — not against a generic benchmark. The
              evaluation regime is constructed jointly with the customer&rsquo;s
              domain experts and is rerun continuously in production.
            </p>
            <p>
              Models are versioned, signed, and immutable. Every model decision
              produces an audit record carrying the model artifact hash, the
              input data hash, the policy in force, and the resulting output —
              so that any past decision can be reproduced with cryptographic
              certainty against the model and data in force at the time.
            </p>
            <p>
              Model replacement is an institutional event, not a vendor event.
              The customer&rsquo;s governance body approves promotion to
              production; rollback is one operation.
            </p>
          </Section>

          <Section id="topology" eyebrow="04" title="Deployment topology · Where the platform actually runs">
            <p>
              Voranox platforms support four standing deployment topologies and
              hybrids of them:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ivory/80">
              <li>
                <strong className="text-ivory">On-premise</strong> — inside the
                customer&rsquo;s data centre, operated by the customer or
                jointly by the customer and the firm under a Managed
                Deployment Agreement.
              </li>
              <li>
                <strong className="text-ivory">Sovereign cloud</strong> —
                national-cloud or regulated-cloud topologies (e.g. AWS GovCloud,
                Azure for Government, BleuKub, GAIA-X-aligned providers).
              </li>
              <li>
                <strong className="text-ivory">Hyperscaler</strong> — the
                customer&rsquo;s account on AWS, Azure, or GCP, in the
                customer&rsquo;s chosen region.
              </li>
              <li>
                <strong className="text-ivory">Air-gapped</strong> — for the
                defense and intelligence engagements where the platform must
                operate without external network connectivity.
              </li>
            </ul>
            <p>
              Topology choice is recorded in the Engagement Memorandum. The
              firm engineers the platform to be portable across topologies;
              moving between them is a planned migration, not a rewrite.
            </p>
          </Section>

          <Section id="integration" eyebrow="05" title="Integration · Standards over proprietary surfaces">
            <p>
              Voranox platforms integrate via the standards the customer
              already runs — OAuth 2.0 / OIDC for identity, SAML 2.0 for SSO,
              SCIM for provisioning, FHIR for clinical data, FIX for trade
              traffic, ISO 20022 for payments, eIDAS for sovereign identity,
              IIIF for cultural collections. Industry-native integrations,
              not generic webhooks.
            </p>
            <p>
              Every platform exposes a documented, versioned API. The MCP
              interface published at{" "}
              <Link href="/api/mcp" className="text-gold hover:underline">
                /api/mcp
              </Link>{" "}
              for the directory is the same pattern that engagement-specific
              platforms expose privately to authorized agents inside the
              institution.
            </p>
          </Section>

          <Section id="observability" eyebrow="06" title="Observability & audit · Auditability is a property of the substrate">
            <p>
              Every model decision, data access, and platform action produces
              a tamper-evident record. Records are cryptographically chained so
              that retroactive modification is detectable by the
              customer&rsquo;s own internal audit, the regulator with
              jurisdiction, or any oversight body the institution recognises.
            </p>
            <p>
              The audit substrate is independent of operational logging. An
              outage in operational telemetry does not affect the integrity of
              the audit chain.
            </p>
            <p>
              Engagement-specific observability stacks integrate with the
              customer&rsquo;s standing tooling — Datadog, Splunk, Elastic, or
              the customer&rsquo;s own SIEM — rather than imposing a Voranox-
              proprietary surface.
            </p>
          </Section>

          <Section id="resilience" eyebrow="07" title="Resilience · The platform survives the bad day">
            <p>
              Voranox platforms are engineered to graceful degradation: a
              failure in any single component reduces capability gracefully
              rather than failing the whole. The bedside co-pilot must still
              support the clinician when the cited-evidence service is
              unreachable; the trading desk must still see exposures when the
              market-data feed is degraded.
            </p>
            <p>
              Recovery posture is engineered to the customer&rsquo;s
              institutional standards — Recovery Time Objective and Recovery
              Point Objective are negotiated in the Engagement Memorandum and
              tested under the customer&rsquo;s standing disaster-recovery
              programme.
            </p>
            <p>
              The firm holds itself to a Tier-1 operational resilience standard
              for the platforms it operates directly, including continuous
              backups, region-redundant restore drills, and quarterly tabletop
              exercises against the engagement&rsquo;s threat model.
            </p>
          </Section>
        </div>
      </article>

      <section className="border-b border-gold/15 bg-midnight-50/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-6">
            For diligence
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory">
            Detailed engineering documentation under NDA.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-ivory/65 leading-relaxed">
            Full architecture diagrams, threat models, SOC 2 reports, model
            documentation, and data-processing addenda are available to
            evaluating institutions under NDA.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
          >
            Request the Trust Pack <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="flex items-baseline gap-4 mb-5">
        <span className="font-serif text-gold text-lg">{eyebrow}</span>
        <h2 className="font-serif text-2xl md:text-3xl text-ivory">{title}</h2>
      </div>
      <div className="text-ivory/75 leading-[1.85] space-y-5 text-base md:text-[17px]">
        {children}
      </div>
    </section>
  );
}
