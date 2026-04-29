import { releases } from "@/lib/releases";

const SITE = "https://voranox.com";

export function GET() {
  return Response.json(
    {
      organization: "Voranox Inc.",
      site: SITE,
      generated: new Date().toISOString(),
      count: releases.length,
      releases: releases.map((r) => ({
        slug: r.slug,
        date: r.date,
        dateline: r.dateline,
        headline: r.headline,
        summary: r.summary,
        url: `${SITE}/press/${r.slug}`,
      })),
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=300",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
