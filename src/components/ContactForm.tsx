"use client";

import { useState, type FormEvent } from "react";

const fieldClass =
  "w-full rounded-lg border border-line bg-cream px-4 py-3 text-sm text-ink placeholder:text-subtle focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-xl shadow-brand/5 md:p-10">
      <h3 className="font-display text-xl font-bold text-ink">Contact us</h3>
      <p className="mt-2 text-sm text-muted">Fill out the fields and we will get in touch.</p>

      <form onSubmit={handleSubmit} onChange={() => setSent(false)} className="mt-6 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold text-ink">
            Full name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="youremail@example.com"
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="question" className="text-sm font-bold text-ink">
            Your question
          </label>
          <textarea
            id="question"
            name="question"
            required
            rows={4}
            placeholder="Tell us how we can help..."
            className={`${fieldClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer rounded-lg bg-brand px-6 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90">
          Send message
        </button>

        {sent && (
          <p role="status" className="text-center text-sm font-medium text-brand">
            Thanks! Your message was sent. We will reply within 24 hours.
          </p>
        )}
      </form>
    </div>
  );
}
