"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  subscribeToInsights,
  type SubscribeState,
} from "@/app/insights/subscribe/actions";

const initialState: SubscribeState = { status: "idle" };

export function InsightsSubscribe() {
  const [state, action] = useActionState(subscribeToInsights, initialState);

  if (state.status === "success") {
    return (
      <div className="border border-gold/30 bg-midnight-50/40 p-8 max-w-2xl">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">
          Subscribed
        </p>
        <p className="font-serif text-2xl text-ivory leading-snug">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      className="border border-gold/15 bg-midnight-50/40 p-8 max-w-2xl"
    >
      <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">
        Subscribe
      </p>
      <h3 className="font-serif text-2xl md:text-3xl text-ivory leading-snug mb-6">
        Receive Voranox Insights as essays are published.
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          aria-label="Email address"
          className="bg-midnight border border-gold/20 px-4 py-3 text-ivory placeholder:text-ivory/40 focus:border-gold outline-none text-sm"
        />
        <input
          name="institution"
          type="text"
          placeholder="Institution (optional)"
          aria-label="Institution"
          className="bg-midnight border border-gold/20 px-4 py-3 text-ivory placeholder:text-ivory/40 focus:border-gold outline-none text-sm"
        />
      </div>
      {state.status === "error" && (
        <p
          role="alert"
          className="mt-4 text-xs text-red-300/80 border border-red-500/40 bg-red-500/10 px-3 py-2"
        >
          {state.message}
        </p>
      )}
      <SubmitButton />
      <p className="mt-4 text-[11px] text-ivory/40 leading-relaxed">
        We send essays only — never marketing. Unsubscribe at any time.
      </p>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-5 inline-flex items-center justify-center gap-3 px-6 py-3 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Submitting…" : "Subscribe"}
      {!pending && <span aria-hidden>→</span>}
    </button>
  );
}
