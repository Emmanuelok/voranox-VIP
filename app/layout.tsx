import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
  metadataBase: new URL("https://voranox.com"),
  openGraph: {
    title: "Voranox Inc. — Intelligence for Every Industry",
    description:
      "The parent company building Voranox intelligent platforms across every industry, sector, and institution worldwide.",
    type: "website",
  },
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/insights/feed.xml", title: "Voranox Insights" },
      ],
    },
  },
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
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-midnight text-ivory antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
