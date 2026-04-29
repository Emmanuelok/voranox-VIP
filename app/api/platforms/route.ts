import { sectors } from "@/lib/sectors";

const SITE = "https://voranox.com";

export function GET() {
  const payload = {
    organization: "Voranox Inc.",
    site: SITE,
    generated: new Date().toISOString(),
    count: sectors.length,
    platforms: sectors.map((s) => ({
      slug: s.slug,
      industry: s.name,
      platform: s.platform,
      category: s.category,
      tagline: s.tagline,
      description: s.description,
      capabilities: s.capabilities,
      url: `${SITE}/platforms/${s.slug}`,
      external: s.href,
      hasDeepContent: Boolean(s.deep),
    })),
  };

  return Response.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=300",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  });
}

export function OPTIONS() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  });
}
