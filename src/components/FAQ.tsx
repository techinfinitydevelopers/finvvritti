"use client";
import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: "What services does Finvvritti provide?", a: "Finvvritti offers end-to-end CA & CS services, auditing, accounting & taxation, GST and income tax compliance, debt advisory, CFO services, valuation advisory, and company secretarial support. We provide one-stop financial and corporate solutions tailored for SMEs and startups." },
  { q: "Who do you work with?", a: "We work with SMEs, startups, and growing businesses across Infotech, Metals & Minerals, Food & Beverages, Real Estate, Textile, and Healthcare. Whether you're a founder, finance head, or owner-operator, we tailor our advisory to your stage and industry." },
  { q: "Do you work with startups and early-stage businesses?", a: "Yes. A large part of our practice supports founders from incorporation through funding and scale. We help with company setup, books, statutory compliance, valuations, ESOPs, and CFO-level guidance, without the cost of a full in-house team." },
  { q: "How do I get started with Finvvritti?", a: "Book a free consultation through the form on this page. We'll understand your business, identify priorities, and propose a clear scope and timeline before any engagement begins." },
  { q: "How do you ensure accuracy and confidentiality?", a: "Every engagement runs on documented checklists, four-eyes review, and secure data handling. Client information is shared on a strict need-to-know basis and protected under signed confidentiality agreements." },
  { q: "Can your services be customized?", a: "Absolutely. We design engagements around your size, sector, and goals, from one-off filings or valuations to ongoing CFO retainers. You only pay for what you need." },
  { q: "Do you handle tax filing and compliance?", a: "Yes, GST, income tax, TDS, ROC filings, statutory audits, and regulatory registrations are all in scope. We track due dates, prepare returns, and represent you in routine departmental queries." },
  { q: "How often will I receive financial reports?", a: "Standard engagements include monthly MIS, quarterly performance reviews, and an annual strategic close. Cadence is fully customizable based on your decision-making rhythm." },
  { q: "How quickly will you respond to inquiries?", a: "Routine queries are answered within one business day. Urgent compliance or filing issues are prioritized and addressed the same day." },
  { q: "What software do you use for bookkeeping?", a: "We work with QuickBooks, Tally, Xero, and Zoho Books. We recommend the best fit based on your business size, industry, and reporting needs, ensuring real-time access and seamless collaboration." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    faqs.forEach((_, i) => {
      const el = answerRefs.current[i];
      if (!el) return;
      if (open === i) {
        gsap.fromTo(el,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.25, ease: "power2.in" });
      }
    });
  }, [open]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-left", {
        immediateRender: false, opacity: 0, y: 22, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".faq-left", start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(".faq-list", {
        immediateRender: false, opacity: 0, y: 22, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".faq-list", start: "top 85%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faqs" className="py-20 md:py-28 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-10">
        <div className="faq-left lg:col-span-5">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            FAQs
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
            Your Questions,{" "}
            <span className="italic text-[var(--color-secondary-dark)]">Answered</span>
          </h2>
          <p className="mt-4 text-[var(--color-ink)]/75">
            Everything you need to know about working with Finvvritti, our
            services, and how we support your business.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
          >
            Still have a question? Talk to us
          </a>
        </div>

        <div className="faq-list lg:col-span-7">
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
                    <span className="font-semibold text-[var(--color-primary)] text-base md:text-lg">{f.q}</span>
                    <span className={`mt-0.5 h-7 w-7 shrink-0 rounded-full border border-[var(--color-line)] flex items-center justify-center transition-colors ${isOpen ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]" : "bg-white text-[var(--color-primary)]"}`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <div
                    ref={(el) => { answerRefs.current[i] = el; }}
                    className="overflow-hidden"
                    style={{ height: i === 0 ? "auto" : 0, opacity: i === 0 ? 1 : 0 }}
                  >
                    <p className="px-5 md:px-6 pb-5 text-[var(--color-ink)]/80 text-sm md:text-[15px] leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
