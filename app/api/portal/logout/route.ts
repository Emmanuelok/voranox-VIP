import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifyToken } from "@/lib/portalToken";
import { logEvent } from "@/lib/events";

export async function POST(request: Request) {
  // Best-effort capture of who's signing out, for the audit trail.
  try {
    const store = await cookies();
    const tok = store.get(SESSION_COOKIE)?.value;
    if (tok) {
      const claims = await verifyToken(tok);
      if (claims) logEvent("login.signed_out", { email: claims.email });
    }
  } catch {
    // Silent — sign-out should always succeed.
  }

  const dest = new URL("/portal/login", request.url);
  const res = NextResponse.redirect(dest);
  res.cookies.set(SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}
