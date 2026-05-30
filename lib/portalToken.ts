// Portal magic-link token helpers.
//
// Uses Web Crypto HMAC-SHA-256 (works in Edge and Node). Token format:
//   base64url(JSON({email, exp, iat, kind})).base64url(HMAC(payload))
//
// Security posture:
//  - In production, PORTAL_SECRET MUST be set. If it is missing the module
//    fails closed — signing throws and verification denies — rather than
//    silently using a known default that would make every token forgeable.
//  - In development only, a fixed default secret is used so the portal works
//    locally without configuration.
//  - Signature comparison is constant-time to avoid a timing side-channel.

const DEFAULT_DEV_SECRET = "voranox-portal-dev-secret-do-not-use-in-production";

/** Returns the signing secret, or null when production is misconfigured. */
function getSecret(): string | null {
  const s = process.env.PORTAL_SECRET;
  if (s) return s;
  if (process.env.NODE_ENV === "production") {
    console.error(
      "[Voranox] PORTAL_SECRET is not set in production. Portal tokens are disabled (fail-closed).",
    );
    return null;
  }
  return DEFAULT_DEV_SECRET;
}

/** Constant-time string comparison for fixed-length signatures. */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

function base64UrlEncode(input: ArrayBuffer | string): string {
  let bytes: Uint8Array;
  if (typeof input === "string") {
    bytes = new TextEncoder().encode(input);
  } else {
    bytes = new Uint8Array(input);
  }
  let str = "";
  for (let i = 0; i < bytes.length; i++) {
    str += String.fromCharCode(bytes[i]);
  }
  return btoa(str)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function base64UrlDecode(s: string): Uint8Array {
  const pad = (4 - (s.length % 4)) % 4;
  const b64 = (s + "=".repeat(pad)).replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(b64);
  const out = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    out[i] = binary.charCodeAt(i);
  }
  return out;
}

async function hmac(payload: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payload),
  );
  return base64UrlEncode(sig);
}

export type PortalClaims = {
  email: string;
  exp: number; // unix seconds
  iat?: number; // unix seconds (issued at)
  kind: "magic" | "session";
};

export async function signToken(claims: PortalClaims): Promise<string> {
  const secret = getSecret();
  if (!secret) {
    throw new Error("PORTAL_SECRET is not configured; refusing to sign token.");
  }
  // Spread first, then force iat to a concrete number so an explicit
  // `iat: undefined` from a caller can never clobber the default.
  const payloadObj: PortalClaims = {
    ...claims,
    iat: claims.iat ?? Math.floor(Date.now() / 1000),
  };
  const payload = base64UrlEncode(JSON.stringify(payloadObj));
  const sig = await hmac(payload, secret);
  return `${payload}.${sig}`;
}

export async function verifyToken(token: string): Promise<PortalClaims | null> {
  const secret = getSecret();
  if (!secret) return null; // fail closed in misconfigured production
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payload, sig] = parts;
  const expected = await hmac(payload, secret);
  if (!timingSafeEqual(sig, expected)) return null;
  let claims: PortalClaims;
  try {
    claims = JSON.parse(new TextDecoder().decode(base64UrlDecode(payload)));
  } catch {
    return null;
  }
  if (typeof claims.email !== "string" || typeof claims.exp !== "number") {
    return null;
  }
  if (claims.exp * 1000 < Date.now()) return null;
  return claims;
}

export const MAGIC_TTL_SECONDS = 15 * 60;
export const SESSION_TTL_SECONDS = 7 * 24 * 60 * 60;
export const SESSION_COOKIE = "voranox_portal";
