"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitInquiry, type InquiryState } from "@/app/contact/actions";

const initialState: InquiryState = { status: "idle" };

export function ContactForm() {
  const [state, action] = useActionState(submitInquiry, initialState);

  if (state.status === "success") {
    return <SuccessPanel message={state.message} />;
  }

  const fieldErrors =
    state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form
      action={action}
      className="lg:col-span-3 border border-gold/15 bg-midnight-50/40 p-10 space-y-6"
    >
      <Honeypot />
      <Field label="Full name" name="name" required error={fieldErrors.name} />
      <Field label="Title" name="title" />
      <Field
        label="Institution"
        name="institution"
        required
        error={fieldErrors.institution}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        error={fieldErrors.email}
      />
      <div>
        <label className="text-xs tracking-[0.3em] uppercase text-gold mb-3 block">
          Domain of interest
        </label>
        <select
          name="domain"
          defaultValue=""
          className="w-full bg-midnight border border-gold/20 px-4 py-3 text-ivory focus:border-gold outline-none"
        >
          <option value="">Select a domain</option>
          <option>Public Sector</option>
          <option>Financial</option>
          <option>Industry</option>
          <option>Life Sciences</option>
          <option>Society</option>
          <option>Infrastructure</option>
          <option>Knowledge</option>
          <option>Commerce</option>
        </select>
      </div>
      <div>
        <label className="text-xs tracking-[0.3em] uppercase text-gold mb-3 block">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full bg-midnight border border-gold/20 px-4 py-3 text-ivory focus:border-gold outline-none resize-none"
          placeholder="Where is intelligence required?"
        />
      </div>

      {state.status === "error" && (
        <div
          role="alert"
          className="border border-red-500/40 bg-red-500/10 text-red-200 px-4 py-3 text-sm"
        >
          {state.message}
        </div>
      )}

      <SubmitButton />

      <p className="text-[11px] text-ivory/40 leading-relaxed">
        All inquiries are received in confidence. A senior partner will respond
        within two business days.
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
      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold-shine shimmer text-midnight text-xs tracking-[0.3em] uppercase font-medium disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Submitting…" : "Submit Inquiry"}
      {!pending && <span aria-hidden>→</span>}
    </button>
  );
}

function Honeypot() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
    >
      <label htmlFor="hp-website">Website</label>
      <input
        id="hp-website"
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="text-xs tracking-[0.3em] uppercase text-gold mb-3 block">
        {label}
        {required && <span className="text-gold/60 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        aria-invalid={!!error}
        className={`w-full bg-midnight border px-4 py-3 text-ivory outline-none transition ${
          error ? "border-red-500/60" : "border-gold/20 focus:border-gold"
        }`}
      />
      {error && (
        <p className="mt-2 text-xs text-red-300/80">{error}</p>
      )}
    </div>
  );
}

function SuccessPanel({ message }: { message: string }) {
  return (
    <div className="lg:col-span-3 border border-gold/30 bg-midnight-50/40 p-12 flex flex-col items-start gap-6">
      <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center">
        <span className="text-gold text-2xl">✓</span>
      </div>
      <p className="text-xs tracking-[0.4em] uppercase text-gold">
        Inquiry received
      </p>
      <h2 className="font-serif text-3xl text-ivory leading-snug">
        {message}
      </h2>
      <p className="text-sm text-ivory/60">
        For urgent matters, you may also reach{" "}
        <a
          href="mailto:briefings@voranox.com"
          className="text-gold hover:text-gold-light underline-offset-4 hover:underline"
        >
          briefings@voranox.com
        </a>{" "}
        directly.
      </p>
    </div>
  );
}
