// Liveness / readiness probe for uptime monitoring.
//
// Intentionally minimal — does not depend on external services so that an
// upstream outage (Frankfurter, Resend) does not flag voranox.com itself
// as down. For dependency-aware monitoring use endpoint-specific probes.

const SITE = "https://voranox.com";

export const dynamic = "force-dynamic";

export function GET() {
  const now = new Date();
  return Response.json(
    {
      status: "ok",
      service: "voranox-inc",
      site: SITE,
      time: now.toISOString(),
      region: process.env.VERCEL_REGION ?? "local",
      env: process.env.VERCEL_ENV ?? "development",
      commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "dev",
      uptime_seconds: Math.round(process.uptime()),
    },
    {
      headers: {
        "Cache-Control": "no-store",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}

export function HEAD() {
  return new Response(null, {
    status: 200,
    headers: { "Cache-Control": "no-store" },
  });
}
