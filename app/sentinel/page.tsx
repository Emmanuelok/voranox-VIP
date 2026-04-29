import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voranox Sentinel — Mission Picture Preview",
  description:
    "A preview of the Voranox Sentinel mission picture — decision intelligence for allied defense.",
};

export default function SentinelPreviewPage() {
  return (
    <>
      {/* PREVIEW BANNER */}
      <div className="bg-gold/10 border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between text-xs tracking-[0.3em] uppercase">
          <span className="text-gold">Sentinel · Mission Picture Preview</span>
          <span className="text-ivory/60 hidden md:inline">
            Forthcoming at sentinel.voranox.com
          </span>
          <Link
            href="/platforms/defense"
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
            Voranox Sentinel
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            The mission picture for{" "}
            <span className="gold-text">decision dominance.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ivory/70">
            A preview of the operational surface a Sentinel watch officer uses
            — multi-INT fusion, track confidence, and the lawful guardrails the
            profession of arms requires.
          </p>
        </div>
      </section>

      {/* MISSION SURFACE */}
      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="border border-gold/20 bg-midnight-50/40">
            {/* App chrome */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-gold/15 bg-midnight-100/40">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-ivory/15" />
                <div className="w-2.5 h-2.5 rounded-full bg-ivory/15" />
                <div className="w-2.5 h-2.5 rounded-full bg-ivory/15" />
              </div>
              <div className="flex-1 mx-6 px-4 py-1 bg-midnight border border-gold/15 text-[11px] text-ivory/50 font-mono">
                sentinel.voranox.com / theater / north-atlantic
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold/60">
                IL5 · Allied
              </span>
            </div>

            <div className="grid grid-cols-12 min-h-[640px]">
              {/* Sidebar — modules */}
              <aside className="col-span-12 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-gold/15 p-5 space-y-1">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-3">
                  Sentinel
                </p>
                {[
                  ["Mission Picture", true],
                  ["Tracks", false],
                  ["Sensors", false],
                  ["Planning", false],
                  ["ISR Fusion", false],
                  ["Logistics", false],
                  ["Doctrine", false],
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
                    Watch Officer
                  </p>
                  <p className="text-[11px] text-ivory/55 mt-2">
                    Human on the loop.
                  </p>
                </div>
              </aside>

              {/* Main */}
              <div className="col-span-12 lg:col-span-10 p-6 lg:p-8 space-y-6">
                {/* Theater bar */}
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-gold/15 pb-5">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
                      Theater · North Atlantic
                    </p>
                    <p className="font-serif text-3xl text-ivory mt-1">
                      Mission Picture · 0842Z
                    </p>
                    <p className="text-sm text-ivory/55 mt-1">
                      Allied Joint Command · Watch shift 03
                    </p>
                  </div>
                  <div className="flex gap-2 text-[11px] tracking-[0.25em] uppercase">
                    <span className="px-3 py-1 border border-emerald-400/30 text-emerald-300/80">
                      Posture · Normal
                    </span>
                    <span className="px-3 py-1 border border-amber-300/30 text-amber-200/80">
                      Sector 4 · Watch
                    </span>
                  </div>
                </div>

                {/* Top KPI strip */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/15">
                  <KPI label="Active tracks" value="412" sub="Surface · 218 · Air · 194" />
                  <KPI label="High-confidence" value="389" sub="94.4%" tone="ok" />
                  <KPI label="Awaiting analyst" value="14" sub="Sector 4 priority" tone="warn" />
                  <KPI label="Sustainment readiness" value="92%" sub="Within band" tone="ok" />
                </div>

                {/* Two-up panels */}
                <div className="grid lg:grid-cols-3 gap-6">
                  <Panel title="Tracks · Recent" subtitle="Multi-INT fusion">
                    <TrackRow id="SUR-1148" type="Surface · Allied" conf="High" />
                    <TrackRow id="AIR-2204" type="Air · Allied" conf="High" />
                    <TrackRow id="SUR-1149" type="Surface · Unknown" conf="Medium" tone="warn" />
                    <TrackRow id="SUB-0312" type="Sub-surface · Unattributed" conf="Low" tone="watch" />
                    <TrackRow id="AIR-2207" type="Air · Civilian" conf="High" />
                    <TrackRow id="SUR-1150" type="Surface · Allied" conf="High" />
                  </Panel>

                  <Panel title="ISR · Sector 4" subtitle="GEOINT · SIGINT · OSINT">
                    <FusionLine
                      time="08:39Z"
                      source="GEOINT"
                      detail="Optical pass over CP-2 · vessel signature consistent with prior week"
                      tone="ok"
                    />
                    <FusionLine
                      time="08:36Z"
                      source="SIGINT"
                      detail="Anomalous emissions, NW quadrant · awaiting analyst"
                      tone="warn"
                    />
                    <FusionLine
                      time="08:33Z"
                      source="OSINT"
                      detail="Open press: scheduled exercise, allied; ROE confirmed"
                      tone="ok"
                    />
                    <FusionLine
                      time="08:29Z"
                      source="GEOINT"
                      detail="SAR pass · sea state 5; track continuity preserved"
                      tone="ok"
                    />
                    <FusionLine
                      time="08:25Z"
                      source="MASINT"
                      detail="Acoustic signature consistent with civilian shipping"
                      tone="ok"
                    />
                    <FusionLine
                      time="08:21Z"
                      source="SIGINT"
                      detail="Routine NOTAM-related comms · low priority"
                      tone="ok"
                    />
                  </Panel>

                  <Panel title="Sustainment" subtitle="Logistics readiness">
                    <SustainmentRow asset="Allied DDG-117" status="On station · 78% fuel" />
                    <SustainmentRow asset="Allied DDG-124" status="RTH · 42% fuel" tone="warn" />
                    <SustainmentRow asset="MPA Sqn 4" status="2 of 3 mission-capable" />
                    <SustainmentRow asset="Tanker · Atl-22" status="Available · CP-1" tone="ok" />
                    <SustainmentRow asset="ASW Sqn 11" status="Available · Forward" />
                    <SustainmentRow asset="Logistics Hub-A" status="Parts: T-pump backorder" tone="watch" />
                  </Panel>
                </div>

                {/* Doctrine bar */}
                <div className="border border-gold/15 bg-midnight-100/40 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs tracking-[0.3em] uppercase text-gold/80">
                    Doctrine in force
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ivory/70">
                    <span>· Human-on-loop: enabled</span>
                    <span>· ROE: theater standard</span>
                    <span>· Audit: complete</span>
                    <span>· Allied-only data sharing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs text-ivory/40 text-center">
            Illustrative preview. Tracks, sources, and sustainment data are non-operational, fictional examples.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative noise">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 py-32 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-8">
            Engage Sentinel
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-tight">
            For the agencies ready to{" "}
            <span className="gold-text">decide at the speed of the theater.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-ivory/65 leading-relaxed">
            Sentinel is reserved for the defense and intelligence agencies of
            allied democracies. Briefings are available to qualified
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

function TrackRow({
  id,
  type,
  conf,
  tone,
}: {
  id: string;
  type: string;
  conf: string;
  tone?: "warn" | "watch";
}) {
  const dot =
    tone === "watch"
      ? "bg-red-400"
      : tone === "warn"
        ? "bg-amber-400"
        : "bg-emerald-400";
  const confColor =
    tone === "watch"
      ? "text-red-300/80"
      : tone === "warn"
        ? "text-amber-300/80"
        : "text-emerald-300/70";
  return (
    <div className="grid grid-cols-12 gap-2 px-5 py-3 text-sm items-center">
      <span className="col-span-1 flex items-center">
        <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      </span>
      <span className="col-span-3 text-[11px] tracking-[0.2em] uppercase text-gold/70 font-mono">
        {id}
      </span>
      <span className="col-span-6 text-ivory/85 font-serif">{type}</span>
      <span
        className={`col-span-2 text-[11px] text-right font-mono ${confColor}`}
      >
        {conf}
      </span>
    </div>
  );
}

function FusionLine({
  time,
  source,
  detail,
  tone,
}: {
  time: string;
  source: string;
  detail: string;
  tone: "ok" | "warn";
}) {
  const dot = tone === "warn" ? "bg-amber-400" : "bg-emerald-400";
  return (
    <div className="grid grid-cols-12 gap-2 px-5 py-3 text-sm items-start">
      <span className="col-span-3 text-ivory/50 font-mono text-[11px] pt-0.5">
        {time}
      </span>
      <span className="col-span-2 flex items-center gap-2 pt-0.5">
        <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
        <span className="text-[11px] tracking-[0.2em] uppercase text-gold/70">
          {source}
        </span>
      </span>
      <span className="col-span-7 text-ivory/75 text-xs leading-relaxed">
        {detail}
      </span>
    </div>
  );
}

function SustainmentRow({
  asset,
  status,
  tone,
}: {
  asset: string;
  status: string;
  tone?: "ok" | "warn" | "watch";
}) {
  const dot =
    tone === "watch"
      ? "bg-amber-400"
      : tone === "warn"
        ? "bg-red-400"
        : "bg-emerald-400";
  return (
    <div className="grid grid-cols-12 gap-2 px-5 py-3 text-sm items-center">
      <span className="col-span-1 flex items-center">
        <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      </span>
      <span className="col-span-5 text-ivory/85 font-serif">{asset}</span>
      <span className="col-span-6 text-[11px] text-ivory/60 text-right">
        {status}
      </span>
    </div>
  );
}
