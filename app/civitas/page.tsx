import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voranox Civitas — Sovereign Operations Center Preview",
  description:
    "A preview of the Voranox Civitas sovereign operations center — sovereign intelligence for nations and cities.",
};

export default function CivitasPreviewPage() {
  return (
    <>
      <div className="bg-gold/10 border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between text-xs tracking-[0.3em] uppercase">
          <span className="text-gold">
            Civitas · Sovereign Operations Center Preview
          </span>
          <span className="text-ivory/60 hidden md:inline">
            Forthcoming at civitas.voranox.com
          </span>
          <Link
            href="/platforms/government"
            className="text-ivory/70 hover:text-gold"
          >
            About the platform →
          </Link>
        </div>
      </div>

      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-6">
            Voranox Civitas
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Sovereign intelligence for{" "}
            <span className="gold-text">nations and cities.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ivory/70">
            A preview of the operations surface a permanent secretary or
            director-general uses to run citizen services, policy
            simulations, identity issuance, and public-finance signal across
            the institutions of the state.
          </p>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="border border-gold/20 bg-midnight-50/40">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-gold/15 bg-midnight-100/40">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-ivory/15" />
                <div className="w-2.5 h-2.5 rounded-full bg-ivory/15" />
                <div className="w-2.5 h-2.5 rounded-full bg-ivory/15" />
              </div>
              <div className="flex-1 mx-6 px-4 py-1 bg-midnight border border-gold/15 text-[11px] text-ivory/50 font-mono">
                civitas.voranox.com / ops-center
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold/60">
                In-jurisdiction · Audited
              </span>
            </div>

            <div className="grid grid-cols-12 min-h-[640px]">
              <aside className="col-span-12 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-gold/15 p-5 space-y-1">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-3">
                  Civitas
                </p>
                {[
                  ["Operations Center", true],
                  ["Citizen Services", false],
                  ["Policy Modeling", false],
                  ["Digital Identity", false],
                  ["Public Finance", false],
                  ["Procurement", false],
                  ["Disclosure", false],
                  ["Audit", false],
                ].map(([label, active]) => (
                  <div
                    key={String(label)}
                    className={`px-3 py-2 text-sm font-serif border-l-2 ${
                      active
                        ? "border-gold text-ivory bg-gold/5"
                        : "border-transparent text-ivory/50"
                    }`}
                  >
                    {String(label)}
                  </div>
                ))}
                <div className="mt-8 pt-6 border-t border-gold/10">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60">
                    Authority
                  </p>
                  <p className="text-sm font-serif text-ivory mt-1">
                    Permanent Secretary
                  </p>
                  <p className="text-[11px] text-ivory/55 mt-2">
                    Public legitimacy.
                  </p>
                </div>
              </aside>

              <div className="col-span-12 lg:col-span-10 p-6 lg:p-8 space-y-6">
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-gold/15 pb-5">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
                      State of the Service · 09:00 local
                    </p>
                    <p className="font-serif text-3xl text-ivory mt-1">
                      Operations Center
                    </p>
                    <p className="text-sm text-ivory/55 mt-1">
                      Ministry briefing · Working day 04
                    </p>
                  </div>
                  <div className="flex gap-2 text-[11px] tracking-[0.25em] uppercase">
                    <span className="px-3 py-1 border border-emerald-400/30 text-emerald-300/80">
                      Posture · Normal
                    </span>
                    <span className="px-3 py-1 border border-amber-300/30 text-amber-200/80">
                      Region 7 · Watch
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/15">
                  <KPI
                    label="Citizen requests · 24h"
                    value="142,318"
                    sub="+3.2% vs trend"
                    tone="ok"
                  />
                  <KPI
                    label="Resolved within SLA"
                    value="94.7%"
                    sub="Target: 92%"
                    tone="ok"
                  />
                  <KPI
                    label="Identity issuances"
                    value="8,402"
                    sub="Pending review · 41"
                    tone="warn"
                  />
                  <KPI
                    label="Revenue · MTD"
                    value="$2.18B"
                    sub="On forecast"
                    tone="ok"
                  />
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  <Panel
                    title="Citizen Services · Live"
                    subtitle="Multilingual queue"
                  >
                    <ServiceRow
                      lang="EN"
                      service="Tax — return correction"
                      sla="On track"
                    />
                    <ServiceRow
                      lang="FR"
                      service="Health — appointment rebook"
                      sla="On track"
                    />
                    <ServiceRow
                      lang="AR"
                      service="Identity — replacement card"
                      sla="Watch · 41m"
                      tone="warn"
                    />
                    <ServiceRow
                      lang="ES"
                      service="Pension — eligibility query"
                      sla="On track"
                    />
                    <ServiceRow
                      lang="ZH"
                      service="Visa — status enquiry"
                      sla="On track"
                    />
                    <ServiceRow
                      lang="SW"
                      service="Education — bursary query"
                      sla="On track"
                    />
                  </Panel>

                  <Panel
                    title="Policy Simulation"
                    subtitle="Fiscal · Distributional"
                  >
                    <ScenarioRow
                      name="Scenario A · Fuel duty +2c"
                      fiscal="+£1.2B"
                      distrib="Mildly regressive"
                      tone="warn"
                    />
                    <ScenarioRow
                      name="Scenario B · Childcare cap raise"
                      fiscal="−£0.9B"
                      distrib="Progressive"
                      tone="ok"
                    />
                    <ScenarioRow
                      name="Scenario C · SME relief"
                      fiscal="−£0.3B"
                      distrib="Neutral"
                    />
                    <ScenarioRow
                      name="Scenario D · Carbon levy"
                      fiscal="+£2.4B"
                      distrib="Regressive · before transfer"
                      tone="warn"
                    />
                    <ScenarioRow
                      name="Scenario E · Combined B+C"
                      fiscal="−£1.2B"
                      distrib="Progressive"
                      tone="ok"
                    />
                    <ScenarioRow
                      name="Scenario F · Combined B+D+transfer"
                      fiscal="+£0.5B"
                      distrib="Progressive"
                      tone="ok"
                    />
                  </Panel>

                  <Panel
                    title="Identity & Trust"
                    subtitle="Sovereign issuance"
                  >
                    <TrustRow
                      label="Issuance pipeline"
                      value="8,402"
                      sub="across 14 service centers"
                    />
                    <TrustRow
                      label="Pending biometric review"
                      value="41"
                      sub="oldest: 32 minutes"
                      tone="warn"
                    />
                    <TrustRow
                      label="Revoked · 24h"
                      value="6"
                      sub="within policy"
                    />
                    <TrustRow
                      label="Cross-border verifications"
                      value="11,204"
                      sub="eIDAS interoperable"
                    />
                    <TrustRow
                      label="Citizen disputes open"
                      value="9"
                      sub="ombuds review"
                    />
                    <TrustRow
                      label="Trust framework version"
                      value="2024.2"
                      sub="Aligned · current"
                    />
                  </Panel>
                </div>

                <div className="border border-gold/15 bg-midnight-100/40 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs tracking-[0.3em] uppercase text-gold/80">
                    Doctrine in force
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ivory/70">
                    <span>· State owns the data</span>
                    <span>· Open standards (eIDAS-aligned)</span>
                    <span>· Auditable to the public</span>
                    <span>· Multilingual by mandate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs text-ivory/40 text-center">
            Illustrative preview. Citizen volumes, fiscal scenarios, and identity figures are non-operational examples.
          </p>
        </div>
      </section>

      <section className="relative noise">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-32 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
            Engage Civitas
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-tight">
            For the institutions building{" "}
            <span className="gold-text">sovereign digital capability.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-ivory/65 leading-relaxed">
            Civitas is in private engagement with national governments,
            ministries, and metropolitan authorities. Briefings are available
            to qualified counterparts under NDA.
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

function KPI({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  tone?: "ok" | "warn";
}) {
  const subColor =
    tone === "warn"
      ? "text-amber-300/80"
      : tone === "ok"
        ? "text-emerald-300/80"
        : "text-ivory/50";
  return (
    <div className="bg-midnight p-6">
      <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
        {label}
      </p>
      <p className="mt-3 font-serif text-3xl text-ivory">{value}</p>
      <p className={`mt-1 text-xs ${subColor}`}>{sub}</p>
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

function ServiceRow({
  lang,
  service,
  sla,
  tone,
}: {
  lang: string;
  service: string;
  sla: string;
  tone?: "warn" | "alert";
}) {
  const slaColor =
    tone === "alert"
      ? "text-red-300/80"
      : tone === "warn"
        ? "text-amber-300/80"
        : "text-emerald-300/70";
  return (
    <div className="grid grid-cols-12 gap-2 px-5 py-3 text-sm items-center">
      <span className="col-span-2 text-[10px] tracking-[0.25em] uppercase text-gold/70 font-mono">
        {lang}
      </span>
      <span className="col-span-7 text-ivory/85 font-serif">{service}</span>
      <span className={`col-span-3 text-[11px] text-right ${slaColor}`}>
        {sla}
      </span>
    </div>
  );
}

function ScenarioRow({
  name,
  fiscal,
  distrib,
  tone,
}: {
  name: string;
  fiscal: string;
  distrib: string;
  tone?: "ok" | "warn";
}) {
  const dot =
    tone === "warn"
      ? "bg-amber-400"
      : tone === "ok"
        ? "bg-emerald-400"
        : "bg-ivory/40";
  return (
    <div className="px-5 py-3 text-sm">
      <div className="flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
        <span className="font-serif text-ivory/85">{name}</span>
      </div>
      <div className="mt-1 ml-3.5 flex items-center gap-3 text-[11px] text-ivory/55">
        <span className="text-gold/70 font-mono">{fiscal}</span>
        <span>·</span>
        <span>{distrib}</span>
      </div>
    </div>
  );
}

function TrustRow({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  tone?: "warn";
}) {
  const subColor = tone === "warn" ? "text-amber-300/80" : "text-ivory/50";
  return (
    <div className="grid grid-cols-12 gap-2 px-5 py-3 text-sm items-center">
      <span className="col-span-7 text-ivory/85 font-serif">{label}</span>
      <span className="col-span-2 font-mono text-xs text-ivory/85 text-right">
        {value}
      </span>
      <span className={`col-span-3 text-[11px] text-right ${subColor}`}>
        {sub}
      </span>
    </div>
  );
}
