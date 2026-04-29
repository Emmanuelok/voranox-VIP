"use server";

export type SubscribeState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeToInsights(
  _prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const email = String(formData.get("email") ?? "").trim();
  const institution = String(formData.get("institution") ?? "").trim();

  if (!email || !EMAIL_RE.test(email)) {
    return { status: "error", message: "Provide a valid email address." };
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
      return {
        status: "error",
        message: "Subscription failed. Please try again or write to insights@voranox.com.",
      };
    }
  } catch (err) {
    console.error("[Voranox] Subscription transport error:", err);
    return {
      status: "error",
      message: "Subscription failed. Please try again or write to insights@voranox.com.",
    };
  }

  return {
    status: "success",
    message:
      "Subscribed. You will receive future Voranox Insights essays as they are published.",
  };
}
