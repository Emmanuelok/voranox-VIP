// In-memory sliding-window rate limiter.
//
// Sufficient for the realistic threat: a bot loop hammering an
// unauthenticated endpoint. Limits are enforced per warmed serverless
// instance, so a determined attacker spreading across cold starts could
// exceed the configured rate. The clean upgrade path is Vercel KV /
// Upstash; until then, this is a meaningful first line of defence.

import { headers } from "next/headers";

type Bucket = number[]; // timestamps in ms

const buckets = new Map<string, Bucket>();
const MAX_BUCKETS = 5000;

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  resetAt: number; // ms epoch when the oldest hit expires
};

export type RateLimitOpts = {
  /** Bucket key, e.g. "contact" or "login". */
  key: string;
  /** Window length in milliseconds. */
  windowMs: number;
  /** Max hits permitted within the window. */
  max: number;
  /** Stable identifier (IP, email, etc.). */
  subject: string;
};

export function checkLimit(opts: RateLimitOpts): RateLimitResult {
  const id = `${opts.key}:${opts.subject}`;
  const now = Date.now();
  const cutoff = now - opts.windowMs;
  const arr = (buckets.get(id) ?? []).filter((t) => t > cutoff);

  if (arr.length >= opts.max) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: arr[0] + opts.windowMs,
    };
  }

  arr.push(now);
  buckets.set(id, arr);

  // Bound memory — evict oldest entries when the map grows too large.
  if (buckets.size > MAX_BUCKETS) {
    const overflow = buckets.size - MAX_BUCKETS + 500;
    let i = 0;
    for (const k of buckets.keys()) {
      buckets.delete(k);
      if (++i >= overflow) break;
    }
  }

  return {
    allowed: true,
    remaining: opts.max - arr.length,
    resetAt: now + opts.windowMs,
  };
}

/** Read the originating IP from forwarding headers; falls back to a stable token. */
export async function getClientIpFromHeaders(): Promise<string> {
  const h = await headers();
  const xff = h.get("x-forwarded-for") ?? "";
  const first = xff.split(",")[0].trim();
  if (first) return first;
  return h.get("x-real-ip") ?? h.get("x-vercel-forwarded-for") ?? "unknown";
}

/** Same as above but reads from a `Request` object (route handlers). */
export function getClientIpFromRequest(request: Request): string {
  const xff = request.headers.get("x-forwarded-for") ?? "";
  const first = xff.split(",")[0].trim();
  if (first) return first;
  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("x-vercel-forwarded-for") ??
    "unknown"
  );
}

/** Detect honeypot field — silently reject when filled. */
export function isHoneypotTripped(formData: FormData): boolean {
  const trap = formData.get("website");
  return typeof trap === "string" && trap.trim().length > 0;
}

export const HONEYPOT_FIELD_NAME = "website";
