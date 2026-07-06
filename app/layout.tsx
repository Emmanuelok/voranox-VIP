import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Concierge } from "@/components/Concierge";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Voranox Inc. — Intelligence for Every Industry",
    template: "%s · Voranox Inc.",
  },
  description:
    "Voranox Inc. is the parent company building Voranox intelligent platforms across every industry, sector, and institution worldwide.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Voranox Inc. — Intelligence for Every Industry",
    description:
      "The parent company building Voranox intelligent platforms across every industry, sector, and institution worldwide.",
    type: "website",
  },
  alternates: {
    canonical: "https://voranox.com",
    languages: {
      en: "https://voranox.com",
      fr: "https://voranox.com/fr",
      es: "https://voranox.com/es",
      ar: "https://voranox.com/ar",
      zh: "https://voranox.com/zh",
    },
    types: {
      "application/rss+xml": [
        { url: "/insights/feed.xml", title: "Voranox Insights" },
      ],
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Voranox Inc.",
  legalName: "Voranox Incorporated",
  url: "https://voranox.com",
  logo: "https://voranox.com/icon.svg",
  description:
    "Voranox Inc. is the parent company architecting intelligent platforms across every industry, sector, and institution worldwide.",
  slogan: "Intelligence, refined.",
  foundingDate: "2025",
  sameAs: [],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "general inquiries",
      email: "briefings@voranox.com",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "press",
      email: "press@voranox.com",
    },
    {
      "@type": "ContactPoint",
      contactType: "talent",
      email: "talent@voranox.com",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Inline, executed before paint, so the theme is set on <html> before
  // the first frame and we never flash the wrong palette. Reads the user
  // preference from localStorage; supports 'light' | 'dark' | 'system'.
  const themeInit = `(function(){try{var s=localStorage.getItem('voranox-theme');var t='dark';if(s==='light')t='light';else if(s==='dark')t='dark';else if(s==='system')t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=t;}catch(e){}})();`;

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-screen flex flex-col bg-midnight text-ivory antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Concierge />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
