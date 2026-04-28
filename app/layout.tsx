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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-midnight text-ivory antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
