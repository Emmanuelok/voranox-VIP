"use server";

import { headers } from "next/headers";
import { MAGIC_TTL_SECONDS, signToken } from "@/lib/portalToken";

export type LoginState =
  | { status: "idle" }
  | { status: "sent"; email: string; magicLinkForDev?: string }
  | { status: "error"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function requestMagicLink(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return { status: "error", message: "Provide a valid email address." };
  }

  const exp = Math.floor(Date.now() / 1000) + MAGIC_TTL_SECONDS;
  const token = await signToken({ email, exp, kind: "magic" });

  const h = await headers();
  const host = h.get("host") ?? "voranox.com";
  const proto = h.get("x-forwarded-proto") ?? "https";
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? `${proto}://${host}`;
  const magicLink = `${base}/api/portal/verify?token=${encodeURIComponent(token)}`;

  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.VORANOX_FROM_EMAIL ??
    "Voranox Inc. <onboarding@resend.dev>";

  const subject = "Your Voranox Client Portal sign-in link";
  const html = `
    <div style="font-family: Georgia, serif; background:#050816; color:#F5F1E8; padding:32px; border:1px solid rgba(201,169,97,0.3);">
      <p style="letter-spacing:4px; text-transform:uppercase; color:#C9A961; font-size:11px;">Voranox Inc. · Client Portal</p>
      <h1 style="font-size:26px; margin:18px 0 8px;">Your sign-in link</h1>
      <p style="color:rgba(245,241,232,0.75); font-size:15px; line-height:1.6;">
        Click the link below to sign in to the Voranox Client Portal. The link is
        valid for the next 15 minutes and may only be used once.
      </p>
      <p style="margin:32px 0;">
        <a href="${magicLink}" style="display:inline-block; padding:14px 28px; background:linear-gradient(135deg,#9E823F,#E0C887,#9E823F); color:#050816; text-decoration:none; letter-spacing:3px; text-transform:uppercase; font-size:11px; font-weight:600;">
          Sign in to the Portal →
        </a>
      </p>
      <p style="color:rgba(245,241,232,0.5); font-size:12px; line-height:1.6;">
        If you did not request this email, you can disregard it. The link expires
        automatically.
      </p>
      <p style="color:rgba(201,169,97,0.6); font-size:10px; letter-spacing:2px; text-transform:uppercase; margin-top:32px;">
        Voranox Inc.
      </p>
    </div>
  `;

  if (!apiKey) {
    console.warn(
      "[Voranox] Portal magic link generated without RESEND_API_KEY:",
      { email, magicLink },
    );
    return {
      status: "sent",
      email,
      magicLinkForDev:
        process.env.NODE_ENV === "production" ? undefined : magicLink,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [email],
        subject,
        html,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error("[Voranox] Magic-link delivery failed:", res.status, body);
      return {
        status: "error",
        message:
          "We could not deliver the sign-in email. Please try again or write to portal@voranox.com.",
      };
    }
  } catch (e) {
    console.error("[Voranox] Magic-link transport error:", e);
    return {
      status: "error",
      message:
        "We could not deliver the sign-in email. Please try again or write to portal@voranox.com.",
    };
  }

  return { status: "sent", email };
}
