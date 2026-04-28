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

## Brand Notes

- **Voice:** restrained, classical, sovereign-grade. Avoid hype words.
- **Color:** `#050816` midnight, `#C9A961` gold, `#F5F1E8` ivory.
- **Type:** Playfair Display for headings only. Inter for everything else.
- **Wordmark:** "VORANOX" + "INC." — never abbreviate.
