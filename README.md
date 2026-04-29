# Voranox Inc.

Parent company website for **Voranox Inc.** — the firm architecting Voranox intelligent platforms across every industry, sector, and institution worldwide.

This site is a premium marketing presence and platform directory. Each Voranox industry platform has its own page here that links out to its dedicated subdomain (e.g. `vitae.voranox.com`).

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Playfair Display** (serif headings) + **Inter** (sans body)
- Deep midnight + gold palette — classic intelligence-consultancy aesthetic

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Structure

```
app/
  page.tsx                     Home — hero, doctrine, domains, featured platforms, CTA
  about/page.tsx               The Firm
  practices/page.tsx           Practices (Strategy, Applied AI, Platform Eng, etc.)
  insights/page.tsx            Insights (placeholder)
  careers/page.tsx             Careers
  contact/page.tsx             Engage / briefing form
  platforms/page.tsx           Full platform directory grouped by domain
  platforms/[slug]/page.tsx    Individual platform page
  not-found.tsx                404
  icon.svg                     Favicon (gold V on midnight)
  opengraph-image.tsx          Dynamic OG image for the site root
  platforms/[slug]/opengraph-image.tsx
                               Dynamic OG image for each platform page
  contact/actions.ts           Server Action — validates and sends inquiry
components/
  Header.tsx
  Footer.tsx
  Logo.tsx
  SectorCard.tsx
  ContactForm.tsx              Client form with useActionState
lib/
  sectors.ts                   Source of truth for every Voranox platform
```

## Environment

Copy `.env.example` → `.env.local` and fill in:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key — required to deliver inquiries from the contact form. Without it, inquiries are accepted and logged server-side only. |
| `VORANOX_TO_EMAIL` | Inbox to receive inquiries. Default: `briefings@voranox.com`. |
| `VORANOX_FROM_EMAIL` | "From" address. Must be a domain verified in Resend, or use the sandbox `onboarding@resend.dev`. |

In production, set the same three variables in **Vercel → Project → Settings → Environment Variables**.

## Adding a Platform

Edit `lib/sectors.ts` and add a `Sector` entry. The directory, home page, and individual platform page are all driven from this list.

```ts
{
  slug: "your-industry",
  name: "Your Industry",
  platform: "Voranox Codename",
  category: "Industry",
  tagline: "One-line poetic promise.",
  description: "What the platform does, in two sentences.",
  capabilities: ["Cap 1", "Cap 2", "Cap 3", "Cap 4"],
  href: "https://codename.voranox.com",
}
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm start` | Run production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

## Production Setup (Vercel)

The site is deployed on Vercel. After your initial import, two manual steps remain to take it from "online" to "operational."

### 1. Wire the contact form to email (Resend)

The contact form's Server Action is already written. Without an API key it accepts inquiries and logs them to Vercel's runtime logs; with a key it delivers email.

1. Sign up at **https://resend.com** (free tier covers 100 emails/day, 3k/month).
2. Create an API key.
3. Add a sending domain. Until your domain is verified, you can send `From: onboarding@resend.dev` for testing.
4. In **Vercel → voranox-VIP → Settings → Environment Variables**, add the following for **Production** and **Preview**:

| Name | Example value |
| --- | --- |
| `RESEND_API_KEY` | `re_...` (from Resend dashboard) |
| `VORANOX_TO_EMAIL` | `briefings@voranox.com` |
| `VORANOX_FROM_EMAIL` | `Voranox Inc. <briefings@voranox.com>` (after domain verification) or `Voranox Inc. <onboarding@resend.dev>` (sandbox) |

5. Trigger a redeploy (Settings → Deployments → ⋯ → Redeploy, or just push a commit).

### 2. Custom domain

1. In **Vercel → voranox-VIP → Settings → Domains**, add `voranox.com` and `www.voranox.com`.
2. Vercel will display the DNS records you need to set at your registrar:
   - `A` record for `voranox.com` → `76.76.21.21`
   - `CNAME` record for `www` → `cname.vercel-dns.com`
3. Wait for propagation (typically minutes; up to a few hours).
4. Once verified, set `voranox.com` as the **Primary Domain** in Vercel.
5. The `metadataBase` in `app/layout.tsx` and the `SITE` constant in `app/sitemap.ts` and `app/robots.ts` are already configured for `https://voranox.com` — no code change needed.

### 3. (Future) Sub-platform domains

When a platform is ready to ship as its own surface, point its subdomain to the appropriate Vercel project:
- `sterling.voranox.com` → Sterling project
- `vitae.voranox.com` → Vitae project
- etc.

The `href` on each `Sector` in `lib/sectors.ts` already uses these subdomain conventions.

## Public Surfaces

The site exposes several non-page surfaces useful for press, partners, and AI agents:

| Surface | URL | Purpose |
| --- | --- | --- |
| API index | `/api` | Discovery endpoint listing all public APIs |
| Platforms API | `/api/platforms` | JSON of all 46 platforms |
| Insights API | `/api/insights` | JSON list of essays |
| Releases API | `/api/releases` | JSON list of press releases |
| Insights RSS | `/insights/feed.xml` | RSS 2.0 feed of all essays |
| Sitemap | `/sitemap.xml` | All routes |
| Robots | `/robots.txt` | Crawl policy |
| Security policy | `/.well-known/security.txt` | RFC 9116 |
| AI policy | `/ai.txt` | Public AI / training-data policy |

A sitewide command palette (⌘K / Ctrl+K) searches platforms, essays, releases, and pages.

For the contact-form Resend setup, see "Production Setup (Vercel)" above. To enable the Insights newsletter, additionally set `RESEND_AUDIENCE_ID` (the audience UUID from your Resend dashboard) in environment variables.

## Brand Notes

- **Voice:** restrained, classical, sovereign-grade. Avoid hype words.
- **Color:** `#050816` midnight, `#C9A961` gold, `#F5F1E8` ivory.
- **Type:** Playfair Display for headings only. Inter for everything else.
- **Wordmark:** "VORANOX" + "INC." — never abbreviate.
