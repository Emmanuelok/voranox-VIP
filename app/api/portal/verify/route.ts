import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  SESSION_TTL_SECONDS,
  signToken,
  verifyToken,
} from "@/lib/portalToken";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") ?? "";
  const claims = await verifyToken(token);

  if (!claims || claims.kind !== "magic") {
    const expiredUrl = new URL("/portal/login?error=invalid", request.url);
    return NextResponse.redirect(expiredUrl);
  }

  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const session = await signToken({
    email: claims.email,
    exp,
    kind: "session",
  });

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
