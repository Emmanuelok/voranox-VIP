import { NextResponse } from "next/server";
import { SESSION_COOKIE } from "@/lib/portalToken";

export async function POST(request: Request) {
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
