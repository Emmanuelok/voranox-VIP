import type { Metadata } from "next";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Client Portal · Sign in",
  description:
    "Sign in to the Voranox Inc. Client Portal with a magic link sent to your institutional email.",
};

export default function PortalLoginPage() {
  return (
    <section className="relative noise">
      <div className="absolute inset-0 bg-midnight-glow pointer-events-none" />
      <div className="relative max-w-2xl mx-auto px-6 lg:px-10 py-32 lg:py-40">
        <p className="text-xs tracking-[0.5em] uppercase text-gold/80 mb-8">
          Client Portal
        </p>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] mb-8">
          Sign in with a{" "}
          <span className="gold-text">magic link.</span>
        </h1>
        <p className="text-ivory/70 leading-relaxed mb-12">
          The Voranox Client Portal is reserved for engaged institutional
          counterparts. Provide the email associated with your engagement; a
          one-time sign-in link will be delivered to your inbox and is valid
          for 15 minutes.
        </p>
        <LoginForm />
      </div>
    </section>
  );
}
