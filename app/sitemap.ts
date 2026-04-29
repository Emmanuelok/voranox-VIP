import type { MetadataRoute } from "next";
import { sectors } from "@/lib/sectors";
import { essays } from "@/lib/insights";
import { releases } from "@/lib/releases";

const SITE = "https://voranox.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/platforms",
    "/about",
    "/practices",
    "/trust",
    "/insights",
    "/press",
    "/brand",
    "/careers",
    "/contact",
    "/announce",
    "/sterling",
    "/vitae",
    "/sentinel",
    "/civitas",
    "/fr",
    "/es",
    "/ar",
    "/zh",
  ].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.7,
  }));

  const platformRoutes: MetadataRoute.Sitemap = sectors.map((s) => ({
    url: `${SITE}/platforms/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const essayRoutes: MetadataRoute.Sitemap = essays.map((e) => ({
    url: `${SITE}/insights/${e.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const releaseRoutes: MetadataRoute.Sitemap = releases.map((r) => ({
    url: `${SITE}/press/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...platformRoutes, ...essayRoutes, ...releaseRoutes];
}
