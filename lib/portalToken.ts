// Portal magic-link token helpers.
//
// Uses Web Crypto HMAC-SHA-256 (works in Edge and Node). Token format:
//   base64url(JSON({email, exp, kind})).base64url(HMAC(payload))
//
// `PORTAL_SECRET` should be set to a long random string in production.
// Without it the module logs a loud warning and uses a fixed default so
// the portal works in dev — those tokens are clearly not production-safe.

const DEFAULT_SECRET = "voranox-portal-dev-secret-do-not-use-in-production";

function getSecret(): string {
  const s = process.env.PORTAL_SECRET;
  if (!s) {
    if (process.env.NODE_ENV === "production") {
      console.warn(
        "[Voranox] PORTAL_SECRET not set in production — using default. Tokens are not secure.",
      );
    }
    return DEFAULT_SECRET;
  }
  return s;
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

async function hmac(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
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
  kind: "magic" | "session";
};

export async function signToken(claims: PortalClaims): Promise<string> {
  const payload = base64UrlEncode(JSON.stringify(claims));
  const sig = await hmac(payload);
  return `${payload}.${sig}`;
}

export async function verifyToken(token: string): Promise<PortalClaims | null> {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payload, sig] = parts;
  const expected = await hmac(payload);
  if (sig !== expected) return null;
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
