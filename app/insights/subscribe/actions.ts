"use server";

import {
  checkLimit,
  getClientIpFromHeaders,
  isHoneypotTripped,
} from "@/lib/rateLimit";
import { logEvent } from "@/lib/events";

export type SubscribeState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeToInsights(
  _prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  if (isHoneypotTripped(formData)) {
    logEvent("newsletter.honeypot");
    return {
      status: "success",
      message:
        "Subscribed. You will receive future Voranox Insights essays as they are published.",
    };
  }

  const email = String(formData.get("email") ?? "").trim();
  const institution = String(formData.get("institution") ?? "").trim();

  if (!email || !EMAIL_RE.test(email)) {
    return { status: "error", message: "Provide a valid email address." };
  }

  const ip = await getClientIpFromHeaders();
  const ipLimit = checkLimit({
    key: "newsletter:ip",
    windowMs: 60 * 60 * 1000,
    max: 5,
    subject: ip,
  });
  if (!ipLimit.allowed) {
    logEvent("newsletter.rate_limited", { resetAt: ipLimit.resetAt });
    return {
      status: "error",
      message: "Too many requests from this address. Please try again later.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.warn(
      "[Voranox] Insights subscription received without Resend Audiences configured:",
      { email, institution },
    );
    return {
      status: "success",
      message:
        "Subscribed. You will receive future Voranox Insights essays as they are published.",
    };
  }

  try {
    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          unsubscribed: false,
          first_name: institution || undefined,
        }),
      },
    );

    if (!res.ok && res.status !== 409) {
      const body = await res.text();
      console.error("[Voranox] Resend Audiences error:", res.status, body);
      logEvent("newsletter.delivery_failed", { status: res.status });
      return {
        status: "error",
        message: "Subscription failed. Please try again or write to insights@voranox.com.",
      };
    }
  } catch (err) {
    console.error("[Voranox] Subscription transport error:", err);
    logEvent("newsletter.delivery_failed", {
      error: err instanceof Error ? err.message : String(err),
    });
    return {
      status: "error",
      message: "Subscription failed. Please try again or write to insights@voranox.com.",
    };
  }

  logEvent("newsletter.subscribe", { email, institution });
  return {
    status: "success",
    message:
      "Subscribed. You will receive future Voranox Insights essays as they are published.",
  };
}
