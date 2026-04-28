import type { MetadataRoute } from "next";
import { sectors } from "@/lib/sectors";

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
    "/careers",
    "/contact",
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

  return [...staticRoutes, ...platformRoutes];
}
