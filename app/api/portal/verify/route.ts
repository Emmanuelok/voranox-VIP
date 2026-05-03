import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  SESSION_TTL_SECONDS,
  signToken,
  verifyToken,
} from "@/lib/portalToken";
import { logEvent } from "@/lib/events";
import { getClientIpFromRequest } from "@/lib/rateLimit";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") ?? "";
  const claims = await verifyToken(token);
  const ip = getClientIpFromRequest(request);

  if (!claims || claims.kind !== "magic") {
    logEvent("login.verify_failed", { ip });
    const expiredUrl = new URL("/portal/login?error=invalid", request.url);
    return NextResponse.redirect(expiredUrl);
  }

  const now = Math.floor(Date.now() / 1000);
  const exp = now + SESSION_TTL_SECONDS;
  const session = await signToken({
    email: claims.email,
    exp,
    iat: now,
    kind: "session",
  });

  logEvent("login.verified", { email: claims.email, ip });

  const dest = new URL("/portal", request.url);
  const res = NextResponse.redirect(dest);
  res.cookies.set(SESSION_COOKIE, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
  return res;
}
