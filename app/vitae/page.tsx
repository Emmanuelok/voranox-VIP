import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voranox Vitae — Clinical Co-Pilot Preview",
  description:
    "A preview of the Voranox Vitae clinical co-pilot — clinical intelligence for the next century of medicine.",
};

export default function VitaePreviewPage() {
  return (
    <>
      {/* PREVIEW BANNER */}
      <div className="bg-gold/10 border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between text-xs tracking-[0.3em] uppercase">
          <span className="text-gold">Vitae · Clinical Co-Pilot Preview</span>
          <span className="text-ivory/60 hidden md:inline">
            Forthcoming at vitae.voranox.com
          </span>
          <Link
            href="/platforms/healthcare"
            className="text-ivory/70 hover:text-gold"
          >
            About the platform →
          </Link>
        </div>
      </div>

      {/* HERO */}
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-6">
            Voranox Vitae
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            The clinical co-pilot for{" "}
            <span className="gold-text">the next century of medicine.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ivory/70">
            A preview of the bedside surface a Vitae clinician uses — patient
            synthesis, evidence, and the artifact a tumor board actually
            convenes around.
          </p>
        </div>
      </section>

      {/* CLINICAL SURFACE */}
      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="border border-gold/20 bg-midnight-50/40">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-gold/15 bg-midnight-100/40">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-ivory/15" />
                <div className="w-2.5 h-2.5 rounded-full bg-ivory/15" />
                <div className="w-2.5 h-2.5 rounded-full bg-ivory/15" />
              </div>
              <div className="flex-1 mx-6 px-4 py-1 bg-midnight border border-gold/15 text-[11px] text-ivory/50 font-mono">
                vitae.voranox.com / patient / 2418-EH
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold/60">
                HIPAA · Audited
              </span>
            </div>

            <div className="grid grid-cols-12 min-h-[640px]">
              {/* Sidebar — patient roster */}
              <aside className="col-span-12 lg:col-span-3 border-b lg:border-b-0 lg:border-r border-gold/15 p-5 space-y-1">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-3">
                  My Service · Ward 7
                </p>
                <div className="space-y-px">
                  <PatientRow id="2418-EH" name="Patient · 67F" condition="Post-op day 2 · CABG" active />
                  <PatientRow id="2419-RM" name="Patient · 54M" condition="Sepsis · responding" tone="watch" />
                  <PatientRow id="2420-SK" name="Patient · 81F" condition="CHF exacerbation" />
                  <PatientRow id="2421-JT" name="Patient · 72M" condition="Pneumonia · day 4" />
                  <PatientRow id="2422-AB" name="Patient · 45F" condition="DKA · stable" tone="watch" />
                  <PatientRow id="2423-LK" name="Patient · 33M" condition="Trauma · monitoring" />
                </div>
                <div className="mt-8 pt-6 border-t border-gold/10">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60">
                    Governance
                  </p>
                  <p className="text-sm font-serif text-ivory mt-1">
                    Clinician-led
                  </p>
                  <p className="text-[11px] text-ivory/55 mt-2">
                    Every recommendation reviewable.
                  </p>
                </div>
              </aside>

              {/* Main */}
              <div className="col-span-12 lg:col-span-9 p-6 lg:p-8 space-y-6">
                {/* Patient header */}
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-gold/15 pb-5">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
                      Patient · 2418-EH
                    </p>
                    <p className="font-serif text-3xl text-ivory mt-1">
                      67F · Post-op day 2 · CABG ×3
                    </p>
                    <p className="text-sm text-ivory/55 mt-1">
                      Cardiothoracic ICU · admitted 2 days ago
                    </p>
                  </div>
                  <div className="flex gap-2 text-[11px] tracking-[0.25em] uppercase">
                    <span className="px-3 py-1 border border-gold/30 text-gold">
                      Stable
                    </span>
                    <span className="px-3 py-1 border border-amber-300/30 text-amber-200/80">
                      Watch · K+
                    </span>
                  </div>
                </div>

                {/* Vitals row */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/15">
                  <Vital label="HR" value="78" unit="bpm" trend="—" />
                  <Vital label="BP" value="118 / 72" unit="mmHg" trend="↘ 4" />
                  <Vital label="SpO₂" value="97%" unit="" trend="—" />
                  <Vital label="Temp" value="37.4" unit="°C" trend="↗ 0.3" tone="watch" />
                </div>

                {/* Two-up: synthesis + evidence */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Panel title="Synthesis · Last 24 hours" subtitle="Co-pilot summary">
                    <SynthesisLine
                      label="Hemodynamics"
                      body="Stable on minimal inotropic support; weaned to dobutamine 2.5 mcg/kg/min overnight."
                    />
                    <SynthesisLine
                      label="Renal"
                      body="UO 0.8 mL/kg/hr × 6h; Cr 1.4 (↑0.2 from baseline). Consider fluid balance review."
                      tone="watch"
                    />
                    <SynthesisLine
                      label="Electrolytes"
                      body="K+ 5.4 (↑); recheck after 1 dose K-binder. Mg 1.9. Repeat panel in 4h."
                      tone="watch"
                    />
                    <SynthesisLine
                      label="Pulmonary"
                      body="Extubated POD 1; on 2L NC; SpO₂ 97%. CXR clear, no effusion."
                    />
                    <SynthesisLine
                      label="Pain & Mobility"
                      body="Pain 3/10 on PCA morphine. Up to chair this morning. PT consult requested."
                    />
                  </Panel>

                  <Panel title="Evidence · Cited" subtitle="Source provenance">
                    <EvidenceRow
                      claim="K+ binder appropriate for K+ 5.4 in post-op CABG"
                      source="UpToDate · Hyperkalemia in cardiac surgery"
                      level="Level B"
                    />
                    <EvidenceRow
                      claim="Wean dobutamine prior to extubation if MAP &gt; 65"
                      source="Institutional protocol · CTICU.4.2"
                      level="Local"
                    />
                    <EvidenceRow
                      claim="UO &lt; 0.5 mL/kg/hr × 6h: AKI stage 1 trigger"
                      source="KDIGO 2024 · Acute kidney injury"
                      level="Level A"
                    />
                    <EvidenceRow
                      claim="Early mobilization within 48h reduces POD"
                      source="JAMA Surg · 2023 meta-analysis"
                      level="Level A"
                    />
                    <EvidenceRow
                      claim="PCA morphine appropriate; consider taper from POD 3"
                      source="ERAS Cardiac · 2024 guidelines"
                      level="Level B"
                    />
                  </Panel>
                </div>

                {/* Recommendations */}
                <Panel title="Recommendations · Pending Clinician Review" subtitle="Awaiting attending">
                  <RecommendationRow
                    title="Recheck BMP in 4 hours"
                    rationale="K+ trending up; verify response to K-binder and inform repeat dose decision."
                  />
                  <RecommendationRow
                    title="Initiate fluid balance review"
                    rationale="UO marginal × 6h; Cr trending. Stage 1 AKI risk."
                    tone="watch"
                  />
                  <RecommendationRow
                    title="PT consult — early mobilization"
                    rationale="POD 2; ERAS protocol supports activity progression."
                  />
                  <RecommendationRow
                    title="Begin opioid taper plan POD 3"
                    rationale="Pain controlled; multi-modal analgesia per ERAS Cardiac."
                  />
                </Panel>

                {/* Doctrine bar */}
                <div className="border border-gold/15 bg-midnight-100/40 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs tracking-[0.3em] uppercase text-gold/80">
                    Governance in force
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ivory/70">
                    <span>· Clinician approval required</span>
                    <span>· Every claim cited</span>
                    <span>· HIPAA-compliant</span>
                    <span>· Decision auditable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs text-ivory/40 text-center">
            Illustrative preview. Patient data is synthetic; clinical content is non-operational example.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative noise">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-32 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
            Engage Vitae
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-tight">
            For the institutions ready to{" "}
            <span className="gold-text">give clinicians more time.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-ivory/65 leading-relaxed">
            Vitae is in private engagement with academic medical centers and
            integrated delivery networks. Briefings are available to qualified
            clinical leadership under NDA.
          </p>
          <Link
            href="/contact"
            className="mt-12 inline-flex items-center gap-3 px-10 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium"
          >
            Request a Confidential Briefing <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function PatientRow({
  id,
  name,
  condition,
  active,
  tone,
}: {
  id: string;
  name: string;
  condition: string;
  active?: boolean;
  tone?: "watch";
}) {
  const dot = tone === "watch" ? "bg-amber-400" : "bg-emerald-400";
  return (
    <div
      className={`px-3 py-3 border-l-2 ${
        active ? "border-gold bg-gold/5" : "border-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
        <span className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
          {id}
        </span>
      </div>
      <p className="mt-1 font-serif text-sm text-ivory">{name}</p>
      <p className="text-[11px] text-ivory/55 mt-0.5">{condition}</p>
    </div>
  );
}

function Vital({
  label,
  value,
  unit,
  trend,
  tone,
}: {
  label: string;
  value: string;
  unit: string;
  trend: string;
  tone?: "watch";
}) {
  const trendColor =
    tone === "watch" ? "text-amber-300/80" : "text-ivory/50";
  return (
    <div className="bg-midnight p-5">
      <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
        {label}
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="font-serif text-2xl text-ivory">{value}</p>
        <p className="text-[11px] text-ivory/50">{unit}</p>
      </div>
      <p className={`mt-1 text-[11px] ${trendColor}`}>{trend}</p>
    </div>
  );
}

function Panel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-gold/15 bg-midnight-100/30">
      <div className="px-5 py-4 border-b border-gold/10 flex items-baseline justify-between">
        <p className="font-serif text-ivory text-base">{title}</p>
        <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60">
          {subtitle}
        </p>
      </div>
      <div className="divide-y divide-gold/10">{children}</div>
    </div>
  );
}

function SynthesisLine({
  label,
  body,
  tone,
}: {
  label: string;
  body: string;
  tone?: "watch";
}) {
  const labelColor = tone === "watch" ? "text-amber-300/80" : "text-gold/80";
  return (
    <div className="px-5 py-4">
      <p
        className={`text-[10px] tracking-[0.3em] uppercase ${labelColor} mb-1`}
      >
        {label}
      </p>
      <p className="text-sm text-ivory/85 leading-relaxed">{body}</p>
    </div>
  );
}

function EvidenceRow({
  claim,
  source,
  level,
}: {
  claim: string;
  source: string;
  level: string;
}) {
  return (
    <div className="px-5 py-4">
      <p
        className="text-sm text-ivory/85 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: claim }}
      />
      <div className="mt-2 flex items-center gap-3 text-[11px]">
        <span className="text-ivory/50 italic">{source}</span>
        <span className="text-gold/70 tracking-[0.2em] uppercase">{level}</span>
      </div>
    </div>
  );
}

function RecommendationRow({
  title,
  rationale,
  tone,
}: {
  title: string;
  rationale: string;
  tone?: "watch";
}) {
  const dot = tone === "watch" ? "bg-amber-400" : "bg-gold";
  return (
    <div className="px-5 py-4 grid grid-cols-12 gap-4">
      <div className="col-span-1 pt-1">
        <span className={`block w-2 h-2 rounded-full ${dot}`} />
      </div>
      <div className="col-span-11">
        <p className="font-serif text-ivory text-base">{title}</p>
        <p className="text-[12px] text-ivory/60 mt-1 leading-relaxed">
          {rationale}
        </p>
      </div>
    </div>
  );
}
