import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voranox Sterling — Command Center Preview",
  description:
    "A preview of the Voranox Sterling command center — the institutional standard for financial intelligence.",
};

export default function SterlingPreviewPage() {
  return (
    <>
      {/* PREVIEW BANNER */}
      <div className="bg-gold/10 border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between text-xs tracking-[0.3em] uppercase">
          <span className="text-gold">
            Sterling · Command Center Preview
          </span>
          <span className="text-ivory/60 hidden md:inline">
            Forthcoming at sterling.voranox.com
          </span>
          <Link
            href="/platforms/financial-services"
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
            Voranox Sterling
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            The command center for{" "}
            <span className="gold-text">institutional capital.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ivory/70">
            A preview of the operating surface a Sterling client uses to run
            risk, compliance, markets, and wealth across a global balance
            sheet.
          </p>
        </div>
      </section>

      {/* COMMAND CENTER MOCK */}
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
                sterling.voranox.com / command-center
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold/60">
                Production
              </span>
            </div>

            {/* App body */}
            <div className="grid grid-cols-12 min-h-[640px]">
              {/* Sidebar */}
              <aside className="col-span-12 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-gold/15 p-6 space-y-1">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-4">
                  Sterling
                </p>
                {[
                  ["Command Center", true],
                  ["Risk", false],
                  ["Compliance", false],
                  ["Markets", false],
                  ["Wealth", false],
                  ["Counterparties", false],
                  ["Reports", false],
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
                <div className="mt-10 pt-6 border-t border-gold/10">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60">
                    Tier
                  </p>
                  <p className="text-sm font-serif text-ivory mt-1">
                    Sovereign · IL5
                  </p>
                </div>
              </aside>

              {/* Main */}
              <div className="col-span-12 lg:col-span-10 p-6 lg:p-8 space-y-6">
                {/* Top KPI row */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/15">
                  <KPI label="Balance Sheet" value="$2.41T" delta="+0.18%" />
                  <KPI label="VaR (1d, 99%)" value="$118M" delta="-3.2%" />
                  <KPI label="AML Alerts (24h)" value="42" delta="+6" tone="warn" />
                  <KPI label="Capital Ratio" value="14.7%" delta="+0.04 pp" />
                </div>

                {/* Two-up panels */}
                <div className="grid lg:grid-cols-3 gap-6">
                  <Panel title="Risk · Continuous Revaluation" subtitle="Counterparty exposures">
                    <CounterpartyRow name="Sovereign · DE" pd="0.04%" change="-2 bp" />
                    <CounterpartyRow name="Sovereign · BR" pd="1.12%" change="+8 bp" tone="warn" />
                    <CounterpartyRow name="G-SIB · APAC" pd="0.31%" change="+1 bp" />
                    <CounterpartyRow name="Energy Major · EU" pd="0.78%" change="-4 bp" />
                    <CounterpartyRow name="REIT · NA" pd="2.15%" change="+22 bp" tone="alert" />
                    <CounterpartyRow name="Tech Conglomerate · US" pd="0.22%" change="+0 bp" />
                  </Panel>

                  <Panel title="Compliance · Live Screening" subtitle="Sanctions & AML">
                    <ComplianceRow time="08:42:19" code="OFAC" detail="False positive · auto-cleared" tone="ok" />
                    <ComplianceRow time="08:41:55" code="UN-1267" detail="Awaiting analyst review" tone="warn" />
                    <ComplianceRow time="08:41:12" code="EU CFSP" detail="Cleared with rationale" tone="ok" />
                    <ComplianceRow time="08:40:48" code="HMRC AML" detail="Escalated to Tier 2" tone="alert" />
                    <ComplianceRow time="08:40:22" code="OFAC" detail="False positive · auto-cleared" tone="ok" />
                    <ComplianceRow time="08:40:01" code="MAS" detail="False positive · auto-cleared" tone="ok" />
                  </Panel>

                  <Panel title="Markets · Desk Health" subtitle="P&amp;L · Exposure · Behavior">
                    <DeskRow desk="Rates · NY" pnl="+$12.4M" risk="Within band" />
                    <DeskRow desk="FX · LON" pnl="-$2.1M" risk="Within band" />
                    <DeskRow desk="Credit · NY" pnl="+$5.6M" risk="Within band" />
                    <DeskRow desk="Equities · APAC" pnl="+$0.8M" risk="Watch" tone="warn" />
                    <DeskRow desk="Commod · LON" pnl="+$3.2M" risk="Within band" />
                    <DeskRow desk="Structured · LON" pnl="-$0.4M" risk="Within band" />
                  </Panel>
                </div>

                {/* Doctrine bar */}
                <div className="border border-gold/15 bg-midnight-100/40 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs tracking-[0.3em] uppercase text-gold/80">
                    Doctrine in force
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ivory/70">
                    <span>· Auditability: enabled</span>
                    <span>· Human-on-loop: enabled</span>
                    <span>· Provenance: complete</span>
                    <span>· Jurisdiction: in-region</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs text-ivory/40 text-center">
            Illustrative preview. Figures are non-operational examples.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative noise">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-32 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
            Engage Sterling
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-tight">
            For institutions ready to{" "}
            <span className="gold-text">operate at this standard.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-ivory/65 leading-relaxed">
            Sterling is currently in private engagement with a small number of
            tier-1 institutions. Briefings are available to qualified
            counterparts under NDA.
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
  delta,
  tone,
}: {
  label: string;
  value: string;
  delta: string;
  tone?: "ok" | "warn" | "alert";
}) {
  const deltaColor =
    tone === "warn"
      ? "text-amber-300/80"
      : tone === "alert"
        ? "text-red-300/80"
        : "text-emerald-300/80";
  return (
    <div className="bg-midnight p-6">
      <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
        {label}
      </p>
      <p className="mt-3 font-serif text-3xl text-ivory">{value}</p>
      <p className={`mt-1 text-xs ${deltaColor}`}>{delta}</p>
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

function CounterpartyRow({
  name,
  pd,
  change,
  tone,
}: {
  name: string;
  pd: string;
  change: string;
  tone?: "warn" | "alert";
}) {
  const color =
    tone === "alert"
      ? "text-red-300/80"
      : tone === "warn"
        ? "text-amber-300/80"
        : "text-emerald-300/70";
  return (
    <div className="grid grid-cols-12 gap-2 px-5 py-3 text-sm">
      <span className="col-span-7 text-ivory/85 font-serif">{name}</span>
      <span className="col-span-2 text-ivory/60 font-mono text-xs self-center">
        {pd}
      </span>
      <span className={`col-span-3 font-mono text-xs self-center text-right ${color}`}>
        {change}
      </span>
    </div>
  );
}

function ComplianceRow({
  time,
  code,
  detail,
  tone,
}: {
  time: string;
  code: string;
  detail: string;
  tone: "ok" | "warn" | "alert";
}) {
  const dot =
    tone === "alert"
      ? "bg-red-400"
      : tone === "warn"
        ? "bg-amber-400"
        : "bg-emerald-400";
  return (
    <div className="grid grid-cols-12 gap-2 px-5 py-3 text-sm items-center">
      <span className="col-span-3 text-ivory/50 font-mono text-[11px]">
        {time}
      </span>
      <span className="col-span-2 flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
        <span className="text-[11px] tracking-[0.2em] uppercase text-gold/70">
          {code}
        </span>
      </span>
      <span className="col-span-7 text-ivory/75 text-xs">{detail}</span>
    </div>
  );
}

function DeskRow({
  desk,
  pnl,
  risk,
  tone,
}: {
  desk: string;
  pnl: string;
  risk: string;
  tone?: "warn" | "alert";
}) {
  const negative = pnl.startsWith("-");
  const pnlColor = negative ? "text-red-300/80" : "text-emerald-300/80";
  const riskColor =
    tone === "alert"
      ? "text-red-300/80"
      : tone === "warn"
        ? "text-amber-300/80"
        : "text-ivory/55";
  return (
    <div className="grid grid-cols-12 gap-2 px-5 py-3 text-sm">
      <span className="col-span-6 text-ivory/85 font-serif">{desk}</span>
      <span className={`col-span-3 font-mono text-xs self-center ${pnlColor}`}>
        {pnl}
      </span>
      <span className={`col-span-3 text-xs self-center text-right ${riskColor}`}>
        {risk}
      </span>
    </div>
  );
}
