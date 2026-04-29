"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {
  requestMagicLink,
  type LoginState,
} from "@/app/portal/login/actions";

const initial: LoginState = { status: "idle" };

export function LoginForm() {
  const [state, action] = useActionState(requestMagicLink, initial);

  if (state.status === "sent") {
    return (
      <div className="border border-gold/30 bg-midnight-50/40 p-10">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">
          Sign-in link sent
        </p>
        <h2 className="font-serif text-2xl text-ivory leading-snug mb-6">
          Check the inbox of <span className="gold-text">{state.email}</span>{" "}
          for your one-time sign-in link.
        </h2>
        <p className="text-sm text-ivory/60 leading-relaxed">
          The link expires in 15 minutes. You can close this tab.
        </p>
        {state.magicLinkForDev && (
          <p className="mt-6 text-xs text-amber-300/80 break-all border border-amber-300/30 bg-amber-500/5 p-3">
            <strong>Development mode</strong> — Resend not configured. Use this
            link directly:{" "}
            <a
              href={state.magicLinkForDev}
              className="underline underline-offset-2"
            >
              {state.magicLinkForDev}
            </a>
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      action={action}
      className="border border-gold/15 bg-midnight-50/40 p-10 space-y-5"
    >
      <div>
        <label className="text-xs tracking-[0.3em] uppercase text-gold mb-3 block">
          Institutional email
        </label>
        <input
          type="email"
          name="email"
          required
          autoFocus
          placeholder="you@institution.com"
          className="w-full bg-midnight border border-gold/20 px-4 py-3 text-ivory placeholder:text-ivory/40 focus:border-gold outline-none"
        />
      </div>

      {state.status === "error" && (
        <p
          role="alert"
          className="text-xs text-red-300/80 border border-red-500/40 bg-red-500/10 px-3 py-2"
        >
          {state.message}
        </p>
      )}

      <Submit />

      <p className="text-[11px] text-ivory/40 leading-relaxed">
        By signing in, you confirm that you are authorized to access materials
        prepared for your institution. Sessions are 7 days and revocable.
      </p>
    </form>
  );
}

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Sending sign-in link…" : "Send sign-in link"}
      {!pending && <span aria-hidden>→</span>}
    </button>
  );
}
