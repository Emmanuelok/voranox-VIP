// Structured event logger.
//
// Writes JSON-Lines to stdout — Vercel runtime logs ingest these directly,
// and any log drain (Datadog, Logtail, Better Stack) can be wired through
// the Vercel dashboard without code changes.
//
// If LOG_WEBHOOK_URL is set, also POSTs each event to that URL as JSON.
// This is a fire-and-forget channel suitable for Slack/Discord webhooks
// or generic ingestion endpoints. Failures never block the originating
// request — they are caught and logged.

export type EventName =
  | "contact.submit"
  | "contact.honeypot"
  | "contact.rate_limited"
  | "contact.delivery_failed"
  | "newsletter.subscribe"
  | "newsletter.honeypot"
  | "newsletter.rate_limited"
  | "newsletter.delivery_failed"
  | "login.request"
  | "login.honeypot"
  | "login.rate_limited"
  | "login.turnstile_failed"
  | "login.delivery_failed"
  | "login.verified"
  | "login.verify_failed"
  | "login.signed_out"
  | "mcp.call"
  | "mcp.rate_limited"
  | "portal.access"
  | "concierge.message"
  | "concierge.error";

type Payload = Record<string, unknown>;

function redactEmail(email: string | undefined | null): string | null {
  if (!email || typeof email !== "string") return null;
  const at = email.indexOf("@");
  if (at < 1) return "[redacted]";
  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  const head = local.slice(0, Math.min(2, local.length));
  return `${head}***@${domain}`;
}

export function logEvent(event: EventName, data: Payload = {}): void {
  const record: Payload = {
    event,
    ts: new Date().toISOString(),
    env: process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "development",
    region: process.env.VERCEL_REGION,
    commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7),
    ...data,
  };

  // Soft-redact any email-shaped fields by convention.
  if (typeof record.email === "string") {
    record.email = redactEmail(record.email);
  }
  if (typeof record.subject === "string" && record.subject.includes("@")) {
    record.subject = redactEmail(record.subject);
  }

  // JSON-Lines: a single line of JSON per event for log-aggregator parsers.
  // eslint-disable-next-line no-console
  console.log(`[event] ${JSON.stringify(record)}`);

  const url = process.env.LOG_WEBHOOK_URL;
  if (url) {
    // Fire-and-forget. Errors are caught and logged so the request path
    // never depends on the drain being reachable.
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.error("[event] webhook delivery failed:", err);
    });
  }
}
