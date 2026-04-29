const SITE = "https://voranox.com";

export function GET() {
  return Response.json(
    {
      organization: "Voranox Inc.",
      site: SITE,
      doctrine: "Intelligence, refined.",
      api_version: "0",
      endpoints: {
        platforms: `${SITE}/api/platforms`,
        insights: `${SITE}/api/insights`,
        releases: `${SITE}/api/releases`,
      },
      feeds: {
        rss: `${SITE}/insights/feed.xml`,
        sitemap: `${SITE}/sitemap.xml`,
      },
      contact: {
        general: "briefings@voranox.com",
        press: "press@voranox.com",
        talent: "talent@voranox.com",
        brand: "brand@voranox.com",
      },
      notes:
        "This is a public, read-only directory API. Engagements are conducted under confidentiality at https://voranox.com/contact.",
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=300",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
