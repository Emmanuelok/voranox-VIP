// Playfair Display font loader for next/og ImageResponse.
// Fetches the live TTF binary from Google Fonts on first call and caches
// it for subsequent renders. Returns null if the network fetch fails so
// the OG image still renders (with system serif fallback).

let cache: ArrayBuffer | null = null;
let pending: Promise<ArrayBuffer | null> | null = null;

async function fetchOnce(): Promise<ArrayBuffer | null> {
  try {
    const cssRes = await fetch(
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap",
      {
        headers: {
          // Mimic a modern browser so Google returns woff2/ttf URLs we can use.
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        },
      },
    );
    if (!cssRes.ok) return null;
    const css = await cssRes.text();
    const match = css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.ttf)\)/);
    if (!match) return null;
    const fontRes = await fetch(match[1]);
    if (!fontRes.ok) return null;
    return await fontRes.arrayBuffer();
  } catch {
    return null;
  }
}

export async function loadPlayfair(): Promise<ArrayBuffer | null> {
  if (cache) return cache;
  if (pending) return pending;
  pending = fetchOnce().then((buf) => {
    cache = buf;
    pending = null;
    return buf;
  });
  return pending;
}
