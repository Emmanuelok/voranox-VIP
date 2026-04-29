import type { Metadata } from "next";
import { LocalizedHome } from "@/components/LocalizedHome";
import { localeByCode } from "@/lib/locales";

const locale = localeByCode("zh")!;

export const metadata: Metadata = {
  title: "Voranox 公司 · 为每一个行业打造的智能",
  description: locale.lede,
  alternates: {
    canonical: "https://voranox.com/zh",
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
