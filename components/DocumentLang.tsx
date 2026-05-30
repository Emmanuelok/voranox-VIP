"use client";

import { useEffect } from "react";

// The root layout renders <html lang="en">. On the standalone localized
// homepages we correct the document language and direction on the client
// so assistive technology and RTL layout behave correctly, then restore on
// unmount. (A fully SSR-correct solution would use per-locale route groups;
// hreflang alternates already carry the SEO relationship.)
export function DocumentLang({
  lang,
  dir,
}: {
  lang: string;
  dir: "ltr" | "rtl";
}) {
  useEffect(() => {
    const el = document.documentElement;
    const prevLang = el.lang;
    const prevDir = el.getAttribute("dir");
    el.lang = lang;
    el.setAttribute("dir", dir);
    return () => {
      el.lang = prevLang || "en";
      if (prevDir) el.setAttribute("dir", prevDir);
      else el.removeAttribute("dir");
    };
  }, [lang, dir]);

  return null;
}
