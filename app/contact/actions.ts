"use server";

import {
  checkLimit,
  getClientIpFromHeaders,
  isHoneypotTripped,
} from "@/lib/rateLimit";
import { logEvent } from "@/lib/events";

export type InquiryState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  // Silent honeypot: bots that fill hidden fields get a generic-looking
  // success response without delivery so they can't iterate against signal.
  if (isHoneypotTripped(formData)) {
    logEvent("contact.honeypot");
    return {
      status: "success",
      message:
        "Inquiry received. A senior partner will respond within two business days.",
    };
  }

  const ip = await getClientIpFromHeaders();
  const limit = checkLimit({
    key: "contact",
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5,
    subject: ip,
  });
  if (!limit.allowed) {
    logEvent("contact.rate_limited", { resetAt: limit.resetAt });
    return {
      status: "error",
      message:
        "Too many submissions from this address. Please try again later or write to briefings@voranox.com directly.",
    };
  }

  const data = {
    name: String(formData.get("name") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim(),
    institution: String(formData.get("institution") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    domain: String(formData.get("domain") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const fieldErrors: Record<string, string> = {};
  if (!data.name) fieldErrors.name = "Required.";
  if (!data.institution) fieldErrors.institution = "Required.";
  if (!data.email) fieldErrors.email = "Required.";
  else if (!EMAIL_RE.test(data.email))
    fieldErrors.email = "Provide a valid email.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please complete the required fields.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.VORANOX_TO_EMAIL ?? "briefings@voranox.com";
  const from =
    process.env.VORANOX_FROM_EMAIL ??
    "Voranox Inc. <onboarding@resend.dev>";

  const subject = `New Inquiry — ${data.institution} (${data.domain || "Unspecified"})`;
  const html = `
    <div style="font-family: Georgia, serif; background:#050816; color:#F5F1E8; padding:32px;">
      <p style="letter-spacing:4px; text-transform:uppercase; color:#C9A961; font-size:12px;">Voranox Inc. — New Inquiry</p>
      <h1 style="font-size:28px; margin:16px 0 24px;">${escapeHtml(data.institution)}</h1>
      <table style="border-collapse:collapse; width:100%; font-family:Helvetica, Arial, sans-serif; color:#F5F1E8;">
        ${row("Name", data.name)}
        ${row("Title", data.title || "—")}
        ${row("Email", data.email)}
        ${row("Domain", data.domain || "—")}
      </table>
      <p style="margin-top:32px; font-size:12px; letter-spacing:3px; text-transform:uppercase; color:#C9A961;">Message</p>
      <p style="white-space:pre-wrap; line-height:1.6;">${escapeHtml(data.message || "(no message)")}</p>
    </div>
  `;

  if (!apiKey) {
    console.warn(
      "[Voranox] RESEND_API_KEY not set — inquiry logged but not emailed:",
      data
    );
    return {
      status: "success",
      message:
        "Inquiry received. A senior partner will respond within two business days.",
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
        to: [to],
        reply_to: data.email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("[Voranox] Resend error:", res.status, body);
      logEvent("contact.delivery_failed", { status: res.status });
      return {
        status: "error",
        message:
          "Submission failed. Please email briefings@voranox.com directly.",
      };
    }
  } catch (err) {
    console.error("[Voranox] Inquiry transport error:", err);
    logEvent("contact.delivery_failed", {
      error: err instanceof Error ? err.message : String(err),
    });
    return {
      status: "error",
      message:
        "Submission failed. Please email briefings@voranox.com directly.",
    };
  }

  logEvent("contact.submit", {
    institution: data.institution,
    domain: data.domain,
    email: data.email,
  });
  return {
    status: "success",
    message:
      "Inquiry received. A senior partner will respond within two business days.",
  };
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:8px 16px 8px 0; color:#C9A961; font-size:11px; letter-spacing:3px; text-transform:uppercase; vertical-align:top; width:120px;">${label}</td>
    <td style="padding:8px 0; font-size:15px;">${escapeHtml(value)}</td>
  </tr>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
