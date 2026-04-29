import { essays } from "@/lib/insights";

const SITE = "https://voranox.com";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = essays
    .map((e) => {
      const url = `${SITE}/insights/${e.slug}`;
      const description = escapeXml(e.subtitle);
      const content = escapeXml(e.body.join("\n\n"));
      return `    <item>
      <title>${escapeXml(e.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <author>${escapeXml(e.byline)}</author>
      <category>${escapeXml(e.category)}</category>
      <description>${description}</description>
      <content:encoded><![CDATA[${e.body.join("\n\n")}]]></content:encoded>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Voranox Insights</title>
    <link>${SITE}/insights</link>
    <atom:link href="${SITE}/insights/feed.xml" rel="self" type="application/rss+xml" />
    <description>Long-form essays from Voranox Inc. on doctrine, architecture, and the standards of sovereign-grade intelligence.</description>
    <language>en</language>
    <copyright>© Voranox Inc.</copyright>
    <generator>Voranox Insights</generator>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
