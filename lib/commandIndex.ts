import { sectors } from "./sectors";
import { essays } from "./insights";
import { releases } from "./releases";

type Item = {
  kind: "Platform" | "Essay" | "Release" | "Page" | "Preview" | "API";
  title: string;
  subtitle?: string;
  href: string;
  haystack: string;
};

const PAGES: Item[] = (
  [
    { kind: "Page", title: "Home", href: "/" },
    { kind: "Page", title: "The Firm · About", href: "/about" },
    { kind: "Page", title: "Platforms · Directory", href: "/platforms" },
    { kind: "Page", title: "Practices", href: "/practices" },
    { kind: "Page", title: "Trust & Standards", href: "/trust" },
    { kind: "Page", title: "Insights", href: "/insights" },
    { kind: "Page", title: "Press", href: "/press" },
    { kind: "Page", title: "Brand · Standards & Assets", href: "/brand" },
    { kind: "Page", title: "Careers", href: "/careers" },
    { kind: "Page", title: "Engage · Contact", href: "/contact" },
    { kind: "Page", title: "Announcement · The Firm", href: "/announce" },
  ] as const
).map((p) => ({ ...p, haystack: `${p.kind} ${p.title}` }));

const PREVIEWS: Item[] = (
  [
    {
      kind: "Preview",
      title: "Voranox Sterling — Command Center",
      subtitle: "Banking & Financial Services",
      href: "/sterling",
    },
    {
      kind: "Preview",
      title: "Voranox Vitae — Clinical Co-Pilot",
      subtitle: "Healthcare & Life Sciences",
      href: "/vitae",
    },
    {
      kind: "Preview",
      title: "Voranox Sentinel — Mission Picture",
      subtitle: "Defense & National Security",
      href: "/sentinel",
    },
    {
      kind: "Preview",
      title: "Voranox Civitas — Operations Center",
      subtitle: "Government & Public Sector",
      href: "/civitas",
    },
  ] as const
).map((p) => ({
  ...p,
  haystack: `${p.kind} ${p.title} ${p.subtitle ?? ""}`,
}));

const APIS: Item[] = (
  [
    { kind: "API", title: "API · Index", href: "/api" },
    { kind: "API", title: "API · Platforms (JSON)", href: "/api/platforms" },
    { kind: "API", title: "API · Insights (JSON)", href: "/api/insights" },
    { kind: "API", title: "API · Releases (JSON)", href: "/api/releases" },
    { kind: "API", title: "Insights · RSS feed", href: "/insights/feed.xml" },
  ] as const
).map((p) => ({ ...p, haystack: `${p.kind} ${p.title}` }));

const PLATFORMS: Item[] = sectors.map((s) => ({
  kind: "Platform",
  title: `${s.platform}`,
  subtitle: `${s.name} — ${s.tagline}`,
  href: `/platforms/${s.slug}`,
  haystack: `${s.platform} ${s.name} ${s.category} ${s.tagline} ${s.description} ${s.capabilities.join(" ")}`,
}));

const ESSAYS: Item[] = essays.map((e) => ({
  kind: "Essay",
  title: e.title,
  subtitle: e.subtitle,
  href: `/insights/${e.slug}`,
  haystack: `${e.title} ${e.subtitle} ${e.category} ${e.byline}`,
}));

const RELEASES: Item[] = releases.map((r) => ({
  kind: "Release",
  title: r.headline,
  subtitle: r.dateline,
  href: `/press/${r.slug}`,
  haystack: `${r.headline} ${r.summary} ${r.dateline}`,
}));

export const commandIndex: Item[] = [
  ...PAGES,
  ...PREVIEWS,
  ...PLATFORMS,
  ...ESSAYS,
  ...RELEASES,
  ...APIS,
];
