// Canonical site origin.
//
// Production resolves to https://voranox.com. Preview/branch deploys set
// VERCEL_URL automatically, so absolute URLs (OG images, canonicals,
// sitemap, RSS) resolve correctly there too instead of pointing at a
// not-yet-live apex domain. An explicit NEXT_PUBLIC_SITE_URL always wins.

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_ENV === "production") return "https://voranox.com";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://voranox.com";
}

export const SITE_URL = resolveSiteUrl();
