"use client";
import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-white border border-[var(--color-line)] p-6 md:p-8 shadow-elev"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full name" name="name" required placeholder="Jane Doe" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
        />
        <Field label="Phone" name="phone" placeholder="+1 (707) 892-0749" />
        <Field label="Company" name="company" placeholder="Your business" />
      </div>
      <div className="mt-4">
        <label className="block text-xs font-semibold tracking-wide text-[var(--color-muted)] uppercase mb-1.5">
          How can we help?
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your business and what you need..."
          className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-tertiary)] px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/40 focus:border-[var(--color-secondary)]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-light)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send size={16} />
          </>
        )}
      </button>

      {status === "success" && (
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--color-success)]">
          <CheckCircle2 size={16} /> Message sent — we'll get back within 1
          business day.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-red-600">
          <AlertCircle size={16} /> {error}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold tracking-wide text-[var(--color-muted)] uppercase mb-1.5">
        {label}
        {required && <span className="text-[var(--color-secondary-dark)]"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-tertiary)] px-4 py-3 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/40 focus:border-[var(--color-secondary)]"
      />
    </div>
  );
}
