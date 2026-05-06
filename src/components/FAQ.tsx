"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What services does Finvvritti provide?",
    a: "Finvvritti offers end-to-end CA & CS services — auditing, accounting & taxation, GST and income tax compliance, debt advisory, CFO services, valuation advisory, and company secretarial support. We provide one-stop financial and corporate solutions tailored for SMEs and startups.",
  },
  {
    q: "Who do you work with?",
    a: "We work with SMEs, startups, and growing businesses across Healthcare, Communications, Infotech, Real Estate, Food & Beverages, and Entertainment. Whether you're a founder, finance head, or owner-operator, we tailor our advisory to your stage and industry.",
  },
  {
    q: "Do you work with startups and early-stage businesses?",
    a: "Yes. A large part of our practice supports founders from incorporation through funding and scale. We help with company setup, books, statutory compliance, valuations, ESOPs, and CFO-level guidance — without the cost of a full in-house team.",
  },
  {
    q: "How do I get started with Finvvritti?",
    a: "Book a free consultation through the form on this page. We'll understand your business, identify priorities, and propose a clear scope and timeline before any engagement begins.",
  },
  {
    q: "How do you ensure accuracy and confidentiality?",
    a: "Every engagement runs on documented checklists, four-eyes review, and secure data handling. Client information is shared on a strict need-to-know basis and protected under signed confidentiality agreements.",
  },
  {
    q: "Can your services be customized?",
    a: "Absolutely. We design engagements around your size, sector, and goals — from one-off filings or valuations to ongoing CFO retainers. You only pay for what you need.",
  },
  {
    q: "Do you handle tax filing and compliance?",
    a: "Yes — GST, income tax, TDS, ROC filings, statutory audits, and regulatory registrations are all in scope. We track due dates, prepare returns, and represent you in routine departmental queries.",
  },
  {
    q: "How often will I receive financial reports?",
    a: "Standard engagements include monthly MIS, quarterly performance reviews, and an annual strategic close. Cadence is fully customizable based on your decision-making rhythm.",
  },
  {
    q: "How quickly will you respond to inquiries?",
    a: "Routine queries are answered within one business day. Urgent compliance or filing issues are prioritized and addressed the same day.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="py-20 md:py-28 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            FAQs
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
            Your Questions,{" "}
            <span className="italic text-[var(--color-secondary-dark)]">
              Answered
            </span>
          </h2>
          <p className="mt-4 text-[var(--color-ink)]/75">
            Everything you need to know about working with Finvvritti, our
            services, and how we support your business.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
          >
            Still have a question? Talk to us
          </a>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-[var(--color-line)] rounded-2xl border border-[var(--color-line)] bg-[var(--color-tertiary)]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 text-left px-5 md:px-6 py-5 group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-[var(--color-primary)] text-base md:text-lg">
                      {f.q}
                    </span>
                    <span
                      className={`mt-0.5 h-7 w-7 shrink-0 rounded-full border border-[var(--color-line)] flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                          : "bg-white text-[var(--color-primary)]"
                      }`}
                    >
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 md:px-6 pb-5 text-[var(--color-ink)]/80 text-sm md:text-[15px] leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
