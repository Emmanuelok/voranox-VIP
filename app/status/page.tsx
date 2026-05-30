import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Status",
  description:
    "Live operational status of Voranox Inc. public surfaces and dependencies.",
};

// Render at request time. The page self-probes its own origin and an
// upstream dependency; baking a snapshot at build time (when no server is
// listening) would otherwise cache a false "outage". Probes are parallel
// with a 4s timeout, so response stays fast.
export const dynamic = "force-dynamic";

type Check = {
  name: string;
  scope: "Voranox" | "Upstream";
  description: string;
  url: string;
  status: "operational" | "degraded" | "outage";
  latencyMs: number | null;
  detail: string;
};

const TIMEOUT_MS = 4000;

async function probe(
  url: string,
  init?: RequestInit & { method?: "GET" | "HEAD" },
): Promise<{ ok: boolean; latencyMs: number; status: number }> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  const start = Date.now();
  try {
    const res = await fetch(url, {
      ...init,
      signal: ctrl.signal,
      cache: "no-store",
    });
    return {
      ok: res.ok,
      latencyMs: Date.now() - start,
      status: res.status,
    };
  } catch {
    return { ok: false, latencyMs: Date.now() - start, status: 0 };
  } finally {
    clearTimeout(t);
  }
}

async function runChecks(origin: string): Promise<Check[]> {
  const targets: Array<
    Omit<Check, "status" | "latencyMs" | "detail"> & {
      probe: () => Promise<{ ok: boolean; latencyMs: number; status: number }>;
    }
  > = [
    {
      name: "Public site",
      scope: "Voranox",
      description: "voranox.com home and routes",
      url: `${origin}/api/health`,
      probe: () => probe(`${origin}/api/health`, { method: "GET" }),
    },
    {
      name: "Platforms API",
      scope: "Voranox",
      description: "/api/platforms · directory JSON",
      url: `${origin}/api/platforms`,
      probe: () => probe(`${origin}/api/platforms`, { method: "GET" }),
    },
    {
      name: "MCP server",
      scope: "Voranox",
      description: "/api/mcp · Model Context Protocol",
      url: `${origin}/api/mcp`,
      probe: () => probe(`${origin}/api/mcp`, { method: "GET" }),
    },
    {
      name: "Insights RSS",
      scope: "Voranox",
      description: "/insights/feed.xml",
      url: `${origin}/insights/feed.xml`,
      probe: () => probe(`${origin}/insights/feed.xml`, { method: "GET" }),
    },
    {
      name: "ECB FX (Frankfurter)",
      scope: "Upstream",
      description: "Sterling Live · ECB reference rates",
      url: "https://api.frankfurter.dev/v1/latest?base=USD&symbols=EUR",
      probe: () =>
        probe(
          "https://api.frankfurter.dev/v1/latest?base=USD&symbols=EUR",
          { method: "GET" },
        ),
    },
  ];

  return Promise.all(
    targets.map(async (t) => {
      const r = await t.probe();
      const status: Check["status"] = !r.ok
        ? "outage"
        : r.latencyMs > 2000
          ? "degraded"
          : "operational";
      const detail = r.ok
        ? `HTTP ${r.status} · ${r.latencyMs}ms`
        : r.status === 0
          ? `Unreachable · ${r.latencyMs}ms timeout`
          : `HTTP ${r.status} · ${r.latencyMs}ms`;
      return {
        ...t,
        status,
        latencyMs: r.ok ? r.latencyMs : null,
        detail,
      };
    }),
  );
}

function originFromEnv(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL)
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export default async function StatusPage() {
  const origin = originFromEnv();
  const checks = await runChecks(origin);
  const overall: Check["status"] = checks.some((c) => c.status === "outage")
    ? "outage"
    : checks.some((c) => c.status === "degraded")
      ? "degraded"
      : "operational";
  const updated = new Date().toISOString().replace("T", " ").slice(0, 19);

  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
            Operational Status
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            <OverallHeadline status={overall} />
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ivory/70 leading-relaxed">
            Live status of Voranox public surfaces and the upstream
            dependencies they rely on. The page revalidates on a 60-second
            cadence; for continuous external monitoring, point an uptime
            service at <Link href="/api/health" className="text-gold hover:underline">/api/health</Link>.
          </p>
          <p className="mt-4 text-xs text-ivory/40">Updated {updated} UTC</p>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Systems
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-10">
            Surface-by-surface health.
          </h2>
          <div className="border border-gold/15">
            <div className="hidden md:grid grid-cols-12 px-5 py-3 border-b border-gold/15 bg-midnight-100/40 text-[10px] tracking-[0.3em] uppercase text-gold/70">
              <span className="col-span-3">System</span>
              <span className="col-span-2">Scope</span>
              <span className="col-span-4">Description</span>
              <span className="col-span-3 text-right">Status · Latency</span>
            </div>
            {checks.map((c, i) => (
              <Row key={c.name} c={c} first={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gold/15 bg-midnight-50/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16 space-y-5 text-ivory/70 leading-[1.8] text-sm">
          <p>
            <strong className="text-ivory/90">Operational</strong> means the
            check returned a successful response in under two seconds.{" "}
            <strong className="text-ivory/90">Degraded</strong> means it
            returned successfully but slowly. <strong className="text-ivory/90">Outage</strong> means the check failed or timed out.
          </p>
          <p>
            Upstream-scope items are services Voranox depends on but does not
            operate. An upstream outage may affect a specific feature (for
            example, Sterling Live FX rates) without affecting the rest of
            voranox.com.
          </p>
          <p>
            For incidents, briefings@voranox.com is monitored continuously.
            Security disclosures should follow{" "}
            <Link href="/.well-known/security.txt" className="text-gold hover:underline">
              security.txt
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

function OverallHeadline({ status }: { status: Check["status"] }) {
  if (status === "operational")
    return (
      <>
        All systems are{" "}
        <span className="gold-text">operational.</span>
      </>
    );
  if (status === "degraded")
    return (
      <>
        Some systems are{" "}
        <span className="gold-text">degraded.</span>
      </>
    );
  return (
    <>
      One or more systems are{" "}
      <span className="gold-text">currently unavailable.</span>
    </>
  );
}

function Row({ c, first }: { c: Check; first: boolean }) {
  const dot =
    c.status === "operational"
      ? "bg-emerald-400"
      : c.status === "degraded"
        ? "bg-amber-400"
        : "bg-red-400";
  const detailColor =
    c.status === "operational"
      ? "text-emerald-300/80"
      : c.status === "degraded"
        ? "text-amber-300/80"
        : "text-red-300/80";
  return (
    <div
      className={`grid md:grid-cols-12 gap-3 px-5 py-4 items-center ${first ? "" : "border-t border-gold/10"}`}
    >
      <div className="md:col-span-3 flex items-center gap-3">
        <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
        <span className="font-serif text-ivory">{c.name}</span>
      </div>
      <div className="md:col-span-2 text-[10px] tracking-[0.3em] uppercase text-gold/70">
        {c.scope}
      </div>
      <div className="md:col-span-4 text-sm text-ivory/65">
        {c.description}
      </div>
      <div className={`md:col-span-3 text-xs font-mono md:text-right ${detailColor}`}>
        {c.detail}
      </div>
    </div>
  );
}
