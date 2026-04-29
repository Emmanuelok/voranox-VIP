import type { Metadata } from "next";
import { LocalizedHome } from "@/components/LocalizedHome";
import { localeByCode } from "@/lib/locales";

const locale = localeByCode("ar")!;

export const metadata: Metadata = {
  title: "فورانوكس · ذكاء لكل صناعة",
  description: locale.lede,
  alternates: {
    canonical: "https://voranox.com/ar",
    languages: {
      en: "https://voranox.com",
      fr: "https://voranox.com/fr",
      es: "https://voranox.com/es",
      ar: "https://voranox.com/ar",
      zh: "https://voranox.com/zh",
    },
  },
};

export default function Page() {
  return <LocalizedHome locale={locale} />;
}
