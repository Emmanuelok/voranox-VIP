import { essays } from "@/lib/insights";

const SITE = "https://voranox.com";

export function GET() {
  return Response.json(
    {
      organization: "Voranox Inc.",
      site: SITE,
      generated: new Date().toISOString(),
      count: essays.length,
      feed: `${SITE}/insights/feed.xml`,
      essays: essays.map((e) => ({
        slug: e.slug,
        title: e.title,
        subtitle: e.subtitle,
        category: e.category,
        date: e.date,
        reading: e.reading,
        byline: e.byline,
        url: `${SITE}/insights/${e.slug}`,
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
