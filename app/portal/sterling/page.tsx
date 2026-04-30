import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifyToken } from "@/lib/portalToken";
import {
  fetchLatest,
  fetchHistorical,
  buildMovements,
  CCY_LABEL,
  formatRate,
  formatPct,
  type Movement,
} from "@/lib/markets";
import { Sparkline } from "@/components/Sparkline";

export const metadata: Metadata = {
  title: "Sterling · Live Command Center",
  description:
    "The Voranox Sterling Command Center, live — ECB FX reference rates with continuous revaluation.",
  robots: { index: false, follow: false },
};

// Revalidate the page itself on the same cadence as the underlying ECB data.
export const revalidate = 60;

export default async function SterlingLivePage() {
  // Gate: portal session required.
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  const session = token ? await verifyToken(token) : null;
  if (!session || session.kind !== "session") {
    redirect("/portal/login?next=/portal/sterling");
  }

  // Fetch live + history in parallel.
  const [latest, history] = await Promise.all([
    fetchLatest(),
    fetchHistorical(30),
  ]);

  if (!latest) {
    return <DataUnavailable email={session.email} />;
  }

  const movements = buildMovements(latest, history);
  const sorted = [...movements].sort(
    (a, b) => Math.abs(b.changePct) - Math.abs(a.changePct),
  );
  const gainers = [...movements]
    .filter((m) => m.changePct > 0)
    .sort((a, b) => b.changePct - a.changePct);
  const losers = [...movements]
    .filter((m) => m.changePct < 0)
    .sort((a, b) => a.changePct - b.changePct);
  const largest = sorted[0];
  const totalAbs = movements.reduce(
    (acc, m) => acc + Math.abs(m.changePct),
    0,
  );
  const dispersion = (totalAbs / movements.length).toFixed(2);

  const updated = new Date().toISOString().replace("T", " ").slice(0, 19);

  return (
    <>
      {/* PORTAL BANNER */}
      <div className="bg-gold/10 border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between text-xs tracking-[0.3em] uppercase">
          <span className="text-gold">
            Sterling · Live · {session.email}
          </span>
          <span className="hidden md:inline text-ivory/60">
            ECB · Frankfurter · revalidates every 60s
          </span>
          <form action="/api/portal/logout" method="POST">
            <button
              type="submit"
              className="text-ivory/60 hover:text-gold transition"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>

      {/* HEADER */}
      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-3">
                Voranox Sterling · Command Center
              </p>
              <h1 className="font-serif text-4xl md:text-6xl leading-[1.05]">
                FX Cross-Rates ·{" "}
                <span className="gold-text">USD as base.</span>
              </h1>
              <p className="mt-4 text-sm text-ivory/55">
                Source: European Central Bank reference rates · Published{" "}
                {latest.date} · Page revalidated {updated} UTC
              </p>
            </div>
            <Link
              href="/portal"
              className="text-xs tracking-[0.3em] uppercase text-ivory/60 hover:text-gold border border-gold/15 hover:border-gold/40 px-5 py-2.5 transition"
            >
              ← Portal home
            </Link>
          </div>
        </div>
      </section>

      {/* KPI STRIP */}
      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 border border-gold/15">
            <KPI
              label="Pairs tracked"
              value={`${movements.length}`}
              sub="vs. USD base"
            />
            <KPI
              label="Largest move (1d)"
              value={largest ? `${largest.code} ${formatPct(largest.changePct)}` : "—"}
              sub={
                largest
                  ? CCY_LABEL[largest.code]
                  : "Awaiting data"
              }
              tone={largest && largest.changePct >= 0 ? "ok" : "warn"}
            />
            <KPI
              label="Avg. dispersion"
              value={`${dispersion}%`}
              sub="across all pairs"
            />
            <KPI
              label="Liquidity window"
              value="Open"
              sub="ECB reference 14:15 CET"
              tone="ok"
            />
          </div>
        </div>
      </section>

      {/* CROSS RATES TABLE */}
      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-3">
                Live · Cross Rates
              </p>
              <h2 className="font-serif text-2xl md:text-4xl">
                Continuous revaluation against USD.
              </h2>
            </div>
            <p className="hidden md:block text-[10px] tracking-[0.3em] uppercase text-ivory/45">
              30-day trend · 1d change
            </p>
          </div>

          <div className="border border-gold/15">
            <div className="hidden md:grid grid-cols-12 px-5 py-3 border-b border-gold/15 bg-midnight-100/40 text-[10px] tracking-[0.3em] uppercase text-gold/70">
              <span className="col-span-2">Code</span>
              <span className="col-span-3">Currency</span>
              <span className="col-span-2 text-right">Mid · USD/ccy</span>
              <span className="col-span-3 text-center">30d trend</span>
              <span className="col-span-2 text-right">1d change</span>
            </div>
            {movements.map((m) => (
              <RateRow key={m.code} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* MOVERS */}
      <section className="border-b border-gold/15 bg-midnight-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 gap-6">
          <MoversPanel
            title="Gainers · 1d"
            tone="ok"
            list={gainers.slice(0, 3)}
            emptyLabel="No gainers in last session."
          />
          <MoversPanel
            title="Losers · 1d"
            tone="alert"
            list={losers.slice(0, 3)}
            emptyLabel="No losers in last session."
          />
        </div>
      </section>

      {/* DOCTRINE BAR */}
      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
          <div className="border border-gold/15 bg-midnight-100/40 px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs tracking-[0.3em] uppercase">
            <p className="text-gold/80">Doctrine in force</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-ivory/70 text-[11px]">
              <span>· Source: ECB reference</span>
              <span>· Cache TTL: 60s</span>
              <span>· Provenance: every figure</span>
              <span>· Session: {session.email.split("@")[1] ?? "session"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section>
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12 text-center text-xs text-ivory/45 leading-relaxed">
          <p>
            Rates shown are ECB daily reference rates as published via the
            Frankfurter open API. Reference rates are <em>indicative</em> and
            not executable; production engagements integrate the
            institution&rsquo;s own pricing feeds, internal desk quotes, and
            inventory.
          </p>
        </div>
      </section>
    </>
  );
}

// ---------- subcomponents ----------

function RateRow({ m }: { m: Movement }) {
  const positive = m.changePct >= 0;
  const trendColor = positive
    ? "text-emerald-300"
    : "text-red-300";
  return (
    <div className="grid grid-cols-12 gap-2 px-5 py-4 items-center border-t border-gold/10 first:border-t-0 hover:bg-midnight-100/40 transition">
      <span className="col-span-3 md:col-span-2 text-[11px] tracking-[0.25em] uppercase text-gold/80 font-mono">
        USD/{m.code}
      </span>
      <span className="col-span-9 md:col-span-3 font-serif text-ivory">
        {CCY_LABEL[m.code]}
      </span>
      <span className="col-span-6 md:col-span-2 font-mono text-base text-ivory text-right">
        {formatRate(m.rate)}
      </span>
      <span
        className={`col-span-3 md:col-span-3 flex justify-center ${trendColor}`}
      >
        <Sparkline
          values={m.series}
          width={120}
          height={28}
          ariaLabel={`30-day trend for USD/${m.code}`}
        />
      </span>
      <span
        className={`col-span-3 md:col-span-2 font-mono text-sm text-right ${positive ? "text-emerald-300/85" : "text-red-300/85"}`}
      >
        {formatPct(m.changePct)}
      </span>
    </div>
  );
}

function MoversPanel({
  title,
  tone,
  list,
  emptyLabel,
}: {
  title: string;
  tone: "ok" | "alert";
  list: Movement[];
  emptyLabel: string;
}) {
  const toneColor = tone === "ok" ? "text-emerald-300/90" : "text-red-300/90";
  return (
    <div className="border border-gold/15 bg-midnight-100/30">
      <div className="px-5 py-4 border-b border-gold/10 flex items-baseline justify-between">
        <p className="font-serif text-ivory text-base">{title}</p>
        <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60">
          Top 3
        </p>
      </div>
      <ul className="divide-y divide-gold/10">
        {list.length === 0 && (
          <li className="px-5 py-6 text-sm text-ivory/55">{emptyLabel}</li>
        )}
        {list.map((m) => (
          <li
            key={m.code}
            className="grid grid-cols-12 gap-2 px-5 py-3 items-center"
          >
            <span className="col-span-3 text-[11px] tracking-[0.25em] uppercase text-gold/80 font-mono">
              USD/{m.code}
            </span>
            <span className="col-span-5 text-sm text-ivory/85 font-serif">
              {CCY_LABEL[m.code]}
            </span>
            <span className="col-span-2 font-mono text-xs text-ivory/70 text-right">
              {formatRate(m.rate)}
            </span>
            <span
              className={`col-span-2 font-mono text-xs text-right ${toneColor}`}
            >
              {formatPct(m.changePct)}
            </span>
          </li>
        ))}
      </ul>
    </div>
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
    <div className="bg-midnight p-5">
      <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70">
        {label}
      </p>
      <p className="mt-2 font-serif text-2xl text-ivory">{value}</p>
      <p className={`mt-1 text-xs ${subColor}`}>{sub}</p>
    </div>
  );
}

function DataUnavailable({ email }: { email: string }) {
  return (
    <>
      <div className="bg-gold/10 border-b border-gold/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between text-xs tracking-[0.3em] uppercase">
          <span className="text-gold">
            Sterling · Live · {email}
          </span>
        </div>
      </div>
      <section className="relative noise">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 py-32 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-6">
            Markets data
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">
            Reference rates are temporarily{" "}
            <span className="gold-text">unavailable.</span>
          </h1>
          <p className="mt-6 text-ivory/65 leading-relaxed">
            The ECB reference feed did not respond. The page will revalidate
            and recover automatically; please refresh in a moment.
          </p>
          <Link
            href="/portal"
            className="mt-10 inline-flex items-center gap-3 px-8 py-3 border border-gold/40 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
          >
            ← Portal home
          </Link>
        </div>
      </section>
    </>
  );
}
