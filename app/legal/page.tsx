import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal · Notices & Standards",
  description:
    "Voranox Inc. legal notices — privacy, terms, sub-processors, DPA, acceptable use, and intellectual property.",
};

const sections = [
  { id: "identity", label: "Notice & Identity" },
  { id: "privacy", label: "Privacy Notice" },
  { id: "cookies", label: "Cookies" },
  { id: "terms", label: "Terms of Use" },
  { id: "subprocessors", label: "Sub-processors" },
  { id: "dpa", label: "Data Processing Addendum" },
  { id: "aup", label: "Acceptable Use" },
  { id: "ip", label: "Intellectual Property" },
  { id: "law", label: "Governing Law" },
];

const subprocessors = [
  {
    name: "Vercel Inc.",
    purpose: "Hosting and content delivery for voranox.com (this site)",
    region: "Global edge",
  },
  {
    name: "Resend",
    purpose: "Transactional email delivery (contact form, magic-link, briefings)",
    region: "United States",
  },
  {
    name: "Customer-elected cloud (per engagement)",
    purpose:
      "Customer-elected hyperscaler, sovereign cloud, or on-premise deployment for each platform engagement",
    region: "Customer-jurisdiction",
  },
  {
    name: "Customer-elected identity provider",
    purpose: "Authentication and SSO when used by an engaged institution",
    region: "Customer-jurisdiction",
  },
];

export default function LegalPage() {
  return (
    <>
      <section className="relative noise border-b border-gold/15">
        <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
            Legal · Notices & Standards
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            For procurement, legal,{" "}
            <span className="gold-text">and security teams.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-ivory/70 leading-relaxed">
            This page collects the firm&rsquo;s public legal notices in one
            place: privacy posture, terms governing use of voranox.com,
            current sub-processors, the Data Processing Addendum, acceptable
            use, intellectual property, and governing law.
          </p>
          <p className="mt-6 text-sm text-ivory/55">
            For executed counterparts of any of these documents, write to{" "}
            <a
              href="mailto:legal@voranox.com"
              className="text-gold hover:text-gold-light underline-offset-4 hover:underline"
            >
              legal@voranox.com
            </a>
            .
          </p>
          <p className="mt-2 text-xs text-ivory/40">
            Last reviewed: April 2026.
          </p>
        </div>
      </section>

      <section className="border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] tracking-[0.3em] uppercase text-gold/70">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-gold">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <article className="border-b border-gold/15">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 space-y-20">
          <Section id="identity" title="01 · Notice & Identity">
            <p>
              This site, <strong>voranox.com</strong>, is operated by{" "}
              <strong>Voranox Incorporated</strong> (&ldquo;Voranox&rdquo;,
              &ldquo;the firm&rdquo;, &ldquo;we&rdquo;), a corporation. The
              firm operates as an intelligence consultancy serving institutional
              counterparts globally. The site itself is a public-facing
              presence; engagement-specific work is conducted under separate
              executed agreements.
            </p>
            <p>
              Notices required to be in writing should be sent to{" "}
              <a href="mailto:legal@voranox.com" className="text-gold hover:underline">
                legal@voranox.com
              </a>
              . Press inquiries to{" "}
              <a href="mailto:press@voranox.com" className="text-gold hover:underline">
                press@voranox.com
              </a>
              . Security disclosures to{" "}
              <a href="mailto:security@voranox.com" className="text-gold hover:underline">
                security@voranox.com
              </a>{" "}
              (see also{" "}
              <a href="/.well-known/security.txt" className="text-gold hover:underline">
                /.well-known/security.txt
              </a>
              ).
            </p>
          </Section>

          <Section id="privacy" title="02 · Privacy Notice">
            <p>
              This privacy notice describes how Voranox processes personal
              data submitted to <strong>voranox.com</strong> through public
              forms (contact, newsletter, client portal). It does{" "}
              <em>not</em> govern the data processed by individual Voranox
              platforms operated under engagement agreements with our
              institutional customers — those are governed by separate
              instruments.
            </p>
            <h3 className="font-serif text-xl text-ivory mt-6 mb-2">
              What we collect
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contact form submissions: name, title, institution, email, message.</li>
              <li>Newsletter subscriptions: email and (optionally) institution.</li>
              <li>Client Portal sign-ins: email and a session cookie for the duration of a 7-day session.</li>
              <li>Aggregated, privacy-preserving page-view and Web Vitals telemetry.</li>
            </ul>
            <h3 className="font-serif text-xl text-ivory mt-6 mb-2">
              Lawful basis
            </h3>
            <p>
              Legitimate interest for institutional outreach and consent for
              newsletter subscription. EU/UK residents may withdraw consent or
              request access, rectification, deletion, or restriction at any
              time by writing to{" "}
              <a href="mailto:privacy@voranox.com" className="text-gold hover:underline">
                privacy@voranox.com
              </a>
              .
            </p>
            <h3 className="font-serif text-xl text-ivory mt-6 mb-2">
              Retention
            </h3>
            <p>
              Inquiries are retained for the duration of the relationship and
              thereafter as required by applicable law. Newsletter
              subscriptions are retained until the subscriber unsubscribes.
              Portal sessions expire on a 7-day rolling basis and are
              revocable at any time.
            </p>
          </Section>

          <Section id="cookies" title="03 · Cookies">
            <p>
              voranox.com uses the smallest practical set of cookies. The
              Client Portal sets one HTTP-only session cookie
              (<code className="text-gold/80">voranox_portal</code>) on
              successful sign-in; the cookie is signed, secure in production,
              and expires after 7 days or on sign-out. Vercel Analytics is
              configured for privacy-preserving aggregate measurement and does
              not set tracking cookies on the site. Visitors with cookies
              disabled may use the public surfaces normally; only the Client
              Portal requires the session cookie.
            </p>
            <p>
              For the full inventory and our deliberate exclusions, see the{" "}
              <Link href="/legal/cookies" className="text-gold hover:underline">
                cookies notice
              </Link>
              .
            </p>
          </Section>

          <Section id="terms" title="04 · Terms of Use">
            <p>
              By accessing voranox.com you agree to the following. Voranox
              provides this site and its public APIs (
              <a href="/api" className="text-gold hover:underline">
                /api
              </a>
              ,{" "}
              <a href="/api/mcp" className="text-gold hover:underline">
                /api/mcp
              </a>
              , RSS) on an &ldquo;as is&rdquo; basis. Materials are provided
              for institutional and editorial reference and do not constitute
              an offer to provide services, legal or financial advice, or a
              representation of any specific engagement outcome.
            </p>
            <p>
              You may not use voranox.com or its APIs to harass, scrape with
              the intent to impersonate, evade rate limits, attempt to
              circumvent the Client Portal, or otherwise interfere with the
              firm&rsquo;s operations. Read-only retrieval, indexing, and
              citation are expressly permitted; bulk training of foundation
              models requires a separate written agreement (see{" "}
              <a href="/ai.txt" className="text-gold hover:underline">
                /ai.txt
              </a>
              ).
            </p>
          </Section>

          <Section id="subprocessors" title="05 · Sub-processors">
            <p>
              Voranox uses the following sub-processors in operating the
              public site and its outreach functions. Engagement-specific
              sub-processors are governed under each engagement&rsquo;s data
              processing instruments; the customer is informed in advance of
              any addition or change.
            </p>
            <div className="mt-6 border border-gold/15">
              {subprocessors.map((sp, i) => (
                <div
                  key={sp.name}
                  className={`grid md:grid-cols-12 gap-3 px-5 py-4 ${i > 0 ? "border-t border-gold/10" : ""}`}
                >
                  <div className="md:col-span-3">
                    <p className="font-serif text-ivory">{sp.name}</p>
                  </div>
                  <div className="md:col-span-7 text-sm text-ivory/65">
                    {sp.purpose}
                  </div>
                  <div className="md:col-span-2 text-[10px] tracking-[0.25em] uppercase text-gold/70 md:text-right">
                    {sp.region}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="dpa" title="06 · Data Processing Addendum">
            <p>
              Voranox makes a Data Processing Addendum (DPA) available for
              institutional engagements where personal data is processed on
              behalf of the customer. The DPA incorporates the European
              Commission&rsquo;s Standard Contractual Clauses, where
              applicable, and the UK Information Commissioner&rsquo;s
              International Data Transfer Addendum.
            </p>
            <p>
              To execute the DPA in connection with an engagement, write to{" "}
              <a
                href="mailto:legal@voranox.com"
                className="text-gold hover:underline"
              >
                legal@voranox.com
              </a>{" "}
              from a corporate domain, citing the relevant institutional
              counterpart and engagement reference.
            </p>
          </Section>

          <Section id="aup" title="07 · Acceptable Use">
            <p>The Voranox APIs and Client Portal may not be used to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Train foundation models on bulk-scraped voranox.com content without a separate written agreement.</li>
              <li>Impersonate Voranox or any institutional counterpart.</li>
              <li>Probe or attempt to bypass authentication or rate limits.</li>
              <li>Mirror or republish copyrighted material without attribution and a link to the canonical voranox.com URL.</li>
              <li>Engage in the activities the firm itself refuses (see <Link href="/insights/the-discipline-of-restraint" className="text-gold hover:underline">The Discipline of Restraint</Link>).</li>
            </ul>
          </Section>

          <Section id="ip" title="08 · Intellectual Property">
            <p>
              All site content, including platform descriptions, Insights
              essays, press releases, the Voranox wordmark and monogram, and
              the gold-on-midnight visual system, is the intellectual property
              of Voranox Inc. unless attributed otherwise.
            </p>
            <p>
              Editorial use of brand assets is permitted under the standards
              published at{" "}
              <Link href="/brand" className="text-gold hover:underline">
                /brand
              </Link>
              . Commercial or co-branded use requires advance written
              permission from{" "}
              <a href="mailto:brand@voranox.com" className="text-gold hover:underline">
                brand@voranox.com
              </a>
              .
            </p>
          </Section>

          <Section id="law" title="09 · Governing Law">
            <p>
              These terms are governed by the laws of the State of New York,
              without regard to conflict-of-laws principles, with the
              exception of mandatory provisions of consumer or data-protection
              law in the customer&rsquo;s jurisdiction. Any dispute arising
              out of these terms shall be brought in the state or federal
              courts located in New York County, New York.
            </p>
            <p>
              Engagement-specific agreements may, by negotiation, select an
              alternative governing law and forum appropriate to the
              counterpart&rsquo;s jurisdiction.
            </p>
          </Section>
        </div>
      </article>

      <section>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-24 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold/80 mb-6">
            Counsel
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-ivory mb-8">
            For executed instruments and bespoke counterparts.
          </h2>
          <a
            href="mailto:legal@voranox.com"
            className="inline-flex items-center gap-3 px-10 py-4 border border-gold/40 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition"
          >
            legal@voranox.com <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-6">
        {title}
      </h2>
      <div className="text-ivory/75 leading-[1.8] space-y-5">{children}</div>
    </section>
  );
}
