import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifyToken } from "@/lib/portalToken";
import { logEvent } from "@/lib/events";

export const metadata: Metadata = {
  title: "Client Portal",
  description: "The Voranox Inc. Client Portal.",
  robots: { index: false, follow: false },
};

const fmtUTC = (s: number) =>
  new Date(s * 1000).toLocaleString("en-GB", {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

export default async function PortalPage() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  const session = token ? await verifyToken(token) : null;

  if (!session || session.kind !== "session") {
    redirect("/portal/login");
  }

  logEvent("portal.access", { email: session.email });

  const expDate = fmtUTC(session.exp);
  const signedInAt = session.iat ? fmtUTC(session.iat) : null;

  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-4">
                Client Portal
              </p>
              <h1 className="font-serif text-4xl md:text-6xl leading-[1.05]">
                Welcome,{" "}
                <span className="gold-text">{session.email}.</span>
              </h1>
              <p className="mt-4 text-sm text-ivory/55">
                {signedInAt && (
                  <>
                    Signed in {signedInAt} UTC ·{" "}
                  </>
                )}
                Session valid through {expDate} UTC · 7-day rolling window
              </p>
            </div>
            <form action="/api/portal/logout" method="POST">
              <button
                type="submit"
                className="text-xs tracking-[0.3em] uppercase text-ivory/60 hover:text-gold transition border border-gold/15 px-5 py-2.5 hover:border-gold/40"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-4">
            Your dossiers
          </p>
          <h2 className="font-serif text-2xl md:text-4xl mb-10 max-w-3xl">
            Materials prepared for your institution.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/15">
            <Link
              href="/portal/sterling"
              className="bg-midnight p-8 hover:bg-midnight-100 transition group"
            >
              <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-3">
                Live · Sterling
              </p>
              <p className="font-serif text-xl text-ivory mb-3 group-hover:gold-text">
                Command Center
              </p>
              <p className="text-sm text-ivory/55 leading-relaxed">
                Live FX cross-rates against USD, sourced from the European
                Central Bank reference feed. Continuously revalued.
              </p>
              <p className="mt-5 text-[10px] tracking-[0.3em] uppercase text-gold/80">
                Open live →
              </p>
            </Link>
            <DossierCard
              kind="Briefing"
              title="Engagement Memorandum"
              note="The current memorandum prepared for your institution."
            />
            <DossierCard
              kind="Trust Pack"
              title="Security Architecture"
              note="Full security architecture, SOC 2 reports, and DPA."
            />
            <DossierCard
              kind="Trust Pack"
              title="Model Documentation"
              note="Model cards, evaluation regime, and governance posture."
            />
            <DossierCard
              kind="Briefing"
              title="Quarterly Doctrine Briefing"
              note="The firm's most recent quarterly briefing for clients."
            />
            <DossierCard
              kind="Roadmap"
              title="Engagement Roadmap"
              note="Forward-looking roadmap for the platforms in your engagement."
            />
            <DossierCard
              kind="Notice"
              title="Sub-processors"
              note="Current sub-processor list with material change notice."
            />
          </div>
          <p className="mt-8 text-xs text-ivory/50 leading-relaxed">
            The portal is in private beta. Materials specific to your
            engagement will be published here as they are prepared. For
            anything urgent, write to{" "}
            <a
              href="mailto:portal@voranox.com"
              className="text-gold hover:text-gold-light underline-offset-4 hover:underline"
            >
              portal@voranox.com
            </a>
            .
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-6">
            Continue
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/insights"
              className="inline-flex items-center gap-3 px-6 py-3 border border-gold/30 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
            >
              Voranox Insights
            </Link>
            <Link
              href="/trust"
              className="inline-flex items-center gap-3 px-6 py-3 border border-gold/30 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
            >
              Trust & Standards
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 border border-gold/30 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
            >
              Engage the Firm
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function DossierCard({
  kind,
  title,
  note,
}: {
  kind: string;
  title: string;
  note: string;
}) {
  return (
    <div className="bg-midnight p-8 hover:bg-midnight-100 transition group">
      <p className="text-[10px] tracking-[0.35em] uppercase text-gold/70 mb-3">
        {kind}
      </p>
      <p className="font-serif text-xl text-ivory mb-3 group-hover:gold-text">
        {title}
      </p>
      <p className="text-sm text-ivory/55 leading-relaxed">{note}</p>
      <p className="mt-5 text-[10px] tracking-[0.3em] uppercase text-gold/60">
        Available on engagement
      </p>
    </div>
  );
}
