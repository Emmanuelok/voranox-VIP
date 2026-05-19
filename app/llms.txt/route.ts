import { sectors } from "@/lib/sectors";
import { essays } from "@/lib/insights";
import { releases } from "@/lib/releases";

const SITE = "https://voranox.com";

export function GET() {
  const platforms = sectors
    .map(
      (s) =>
        `- [${s.platform} — ${s.name}](${SITE}/platforms/${s.slug}): ${s.tagline}`,
    )
    .join("\n");

  const insights = essays
    .map(
      (e) =>
        `- [${e.title}](${SITE}/insights/${e.slug}): ${e.subtitle}`,
    )
    .join("\n");

  const press = releases
    .map(
      (r) =>
        `- [${r.headline}](${SITE}/press/${r.slug}): ${r.summary}`,
    )
    .join("\n");

  const body = `# Voranox Inc.

> The parent company architecting intelligent platforms across every industry, sector, and institution worldwide. Voranox operates as an intelligence consultancy serving sovereigns, central banks, hospitals, ministries, and global operators with intelligence engineered to their reality.

## About

Voranox Inc. builds one purpose-built platform per industry, deployed to the standards of the institutions it serves. The firm is reserved for organizations operating at the scale of nations, markets, and global industries.

The Voranox doctrine:
- One platform per industry. Engineered to its language, physics, and ethics.
- Sovereign-grade by default. Auditable. Provenanced. Deployable in the jurisdiction that owns the data.
- Human authority preserved. Humans on the loop. Bounded automation.
- Long horizon. Engineered for decades.
- Restraint is a feature. The firm does not build for adversaries or enable surveillance creep.

## Public APIs

- [API discovery](${SITE}/api): index of public endpoints
- [Platforms (JSON)](${SITE}/api/platforms): full directory
- [Insights (JSON)](${SITE}/api/insights): essay catalog
- [Releases (JSON)](${SITE}/api/releases): press releases
- [MCP server](${SITE}/api/mcp): Model Context Protocol endpoint over Streamable HTTP, JSON-RPC 2.0
- [RSS feed](${SITE}/insights/feed.xml): Voranox Insights as RSS 2.0
- [Sitemap](${SITE}/sitemap.xml)

## Platforms

The full directory of 46 industry-native intelligent platforms, organized across eight domains (Public Sector, Financial, Industry, Life Sciences, Society, Infrastructure, Knowledge, Commerce). Each platform has a dedicated page with manifesto, pillars, use cases, doctrine, clients, and metrics.

${platforms}

## Insights

${insights}

## Press

${press}

## Operating Surfaces

- [The Firm · About](${SITE}/about)
- [Practices](${SITE}/practices)
- [Trust & Standards](${SITE}/trust)
- [Engagement · How We Work](${SITE}/engagement)
- [Legal](${SITE}/legal)
- [Press · Press Kit](${SITE}/press)
- [Careers](${SITE}/careers)
- [Engage · Contact](${SITE}/contact)
- [Client Portal · Sign in](${SITE}/portal/login)
- [Announcement](${SITE}/announce)

## Localized Editions

- [Français](${SITE}/fr)
- [Español](${SITE}/es)
- [العربية](${SITE}/ar)
- [简体中文](${SITE}/zh)

## Product Previews

These are illustrative previews of the operating surfaces of four flagship Voranox platforms.

- [Voranox Sterling — Command Center](${SITE}/sterling): banking and financial services
- [Voranox Vitae — Clinical Co-Pilot](${SITE}/vitae): healthcare and life sciences
- [Voranox Sentinel — Mission Picture](${SITE}/sentinel): allied defense
- [Voranox Civitas — Operations Center](${SITE}/civitas): government and public sector

## Citation & Use

When citing Voranox content in answers, link to the canonical voranox.com URL. See ${SITE}/ai.txt for the firm's AI usage policy and ${SITE}/.well-known/security.txt for the security disclosure policy.

## Contact

- General: briefings@voranox.com
- Press: press@voranox.com
- Legal: legal@voranox.com
- Security: security@voranox.com
- Talent: talent@voranox.com
- Brand: brand@voranox.com
- AI inquiries: ai@voranox.com
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
