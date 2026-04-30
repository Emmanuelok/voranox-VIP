// FX market data via the Frankfurter open API (ECB-sourced reference rates,
// no API key required, no rate-limit concerns at our scale).
//
// Frankfurter publishes the ECB's daily reference rates, which means the
// data is the same standard a treasury function would use for marking
// books to market — institutionally credible, no commercial license
// entanglement.

const ENDPOINT = "https://api.frankfurter.dev/v1";

export const TRACKED = [
  "EUR",
  "GBP",
  "JPY",
  "CHF",
  "CAD",
  "AUD",
  "CNY",
  "SGD",
  "MXN",
  "BRL",
] as const;

export type CurrencyCode = (typeof TRACKED)[number];

export type LatestRates = {
  base: string;
  date: string; // ISO date of ECB publication
  rates: Record<string, number>;
};

export type HistoricalRates = {
  base: string;
  startDate: string;
  endDate: string;
  // Map of ISO date -> { CCY: rate }
  rates: Record<string, Record<string, number>>;
};

export type Movement = {
  code: CurrencyCode;
  rate: number;
  prior: number;
  changePct: number; // e.g. 0.42 for +0.42%
  series: number[]; // ascending time-ordered values for sparkline
};

function isoDaysAgo(days: number): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}

function isoToday(): string {
  return new Date().toISOString().slice(0, 10);
}

export async function fetchLatest(): Promise<LatestRates | null> {
  try {
    const res = await fetch(
      `${ENDPOINT}/latest?base=USD&symbols=${TRACKED.join(",")}`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) return null;
    const j = await res.json();
    return { base: j.base, date: j.date, rates: j.rates };
  } catch {
    return null;
  }
}

export async function fetchHistorical(
  days = 30,
): Promise<HistoricalRates | null> {
  try {
    const start = isoDaysAgo(days);
    const end = isoToday();
    const res = await fetch(
      `${ENDPOINT}/${start}..${end}?base=USD&symbols=${TRACKED.join(",")}`,
      { next: { revalidate: 60 * 60 } },
    );
    if (!res.ok) return null;
    const j = await res.json();
    return {
      base: j.base,
      startDate: j.start_date ?? start,
      endDate: j.end_date ?? end,
      rates: j.rates,
    };
  } catch {
    return null;
  }
}

export function buildMovements(
  latest: LatestRates,
  history: HistoricalRates | null,
): Movement[] {
  const dates = history ? Object.keys(history.rates).sort() : [];
  return TRACKED.map((code) => {
    const rate = latest.rates[code];
    const series = dates
      .map((d) => history!.rates[d]?.[code])
      .filter((v): v is number => typeof v === "number");
    if (series.length > 0 && rate !== undefined) {
      // Append today's published rate so the sparkline ends at "now".
      if (series[series.length - 1] !== rate) series.push(rate);
    }
    const prior = series.length >= 2 ? series[series.length - 2] : rate;
    const changePct = prior ? ((rate - prior) / prior) * 100 : 0;
    return { code, rate, prior, changePct, series };
  });
}

export const CCY_LABEL: Record<CurrencyCode, string> = {
  EUR: "Euro",
  GBP: "Pound Sterling",
  JPY: "Japanese Yen",
  CHF: "Swiss Franc",
  CAD: "Canadian Dollar",
  AUD: "Australian Dollar",
  CNY: "Chinese Yuan",
  SGD: "Singapore Dollar",
  MXN: "Mexican Peso",
  BRL: "Brazilian Real",
};

export function formatRate(rate: number): string {
  if (rate >= 100) return rate.toFixed(2);
  if (rate >= 10) return rate.toFixed(3);
  return rate.toFixed(4);
}

export function formatPct(pct: number): string {
  const sign = pct > 0 ? "+" : "";
  return `${sign}${pct.toFixed(2)}%`;
}
