"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    n: 1,
    title: "Understand your business",
    text: "We analyze your financial structure, operations, and goals to identify key challenges.",
  },
  {
    n: 2,
    title: "Diagnose & plan",
    text: "We map gaps in compliance, accounting, and reporting, then design a tailored roadmap with clear priorities.",
  },
  {
    n: 3,
    title: "Implement systems",
    text: "We set up clean books, structured filings, and decision-grade dashboards, so your data works for you.",
  },
  {
    n: 4,
    title: "Advise and optimise",
    text: "Ongoing CFO-level guidance on **financial planning**, tax, debt, valuation, and capital, turning numbers into next moves.",
  },
  {
    n: 5,
    title: "Scale with confidence",
    text: "With audit-ready records and forward-looking insights, you grow with control and zero compliance surprises.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-header", {
        immediateRender: false, opacity: 0, y: 22, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".process-header", start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(".process-step", {
        immediateRender: false, opacity: 0, y: 28, duration: 0.55, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".process-grid", start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(".process-connector", {
        immediateRender: false, scaleX: 0, duration: 0.5, stagger: 0.1, ease: "power3.out", transformOrigin: "left center",
        scrollTrigger: { trigger: ".process-grid", start: "top 85%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[var(--color-primary)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[var(--color-secondary)]/15 blur-3xl" />
      <div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />

      <div className="container-x relative">
        <div className="process-header max-w-2xl">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary)] font-semibold uppercase">
            Our Process
          </span>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            From clarity to{" "}
            <span className="text-gradient-gold">confident growth</span>
          </h2>
        </div>

        {/* Desktop: horizontal steps with connectors */}
        <div className="process-grid mt-12 hidden lg:flex items-start gap-0">
          {steps.map((s, i) => (
            <React.Fragment key={s.n}>
              <div className="process-step flex-1 min-w-0 group relative rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-sm p-6 hover:bg-white/[0.1] transition-colors">
                {/* Step number circle */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="h-8 w-8 rounded-full border border-[var(--color-secondary)]/50 bg-[var(--color-secondary)]/10 flex items-center justify-center shrink-0">
                    <span className="font-display text-sm font-bold text-[var(--color-secondary)]">
                      {s.n}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--color-secondary)]/60">
                    Step {s.n}
                  </span>
                </div>
                <h3 className="font-semibold text-white text-base leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {s.text.split(/\*\*(.+?)\*\*/).map((part, i) =>
                    i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                  )}
                </p>
              </div>

              {/* Arrow connector between steps */}
              {i < steps.length - 1 && (
                <div className="process-connector shrink-0 flex items-center mt-[1.75rem] px-1">
                  <div className="flex items-center gap-0">
                    <div className="w-4 h-px bg-gradient-to-r from-[var(--color-secondary)]/50 to-[var(--color-secondary)]/20" />
                    <svg width="10" height="10" viewBox="0 0 10 10" className="text-[var(--color-secondary)]/40">
                      <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="process-grid mt-10 flex flex-col gap-4 lg:hidden">
          {steps.map((s) => (
            <div
              key={s.n}
              className="process-step flex gap-4 rounded-2xl bg-white/[0.06] border border-white/10 p-5"
            >
              <div className="h-9 w-9 rounded-full border border-[var(--color-secondary)]/50 bg-[var(--color-secondary)]/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="font-display text-sm font-bold text-[var(--color-secondary)]">
                  {s.n}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-base">{s.title}</h3>
                <p className="mt-1.5 text-sm text-white/65 leading-relaxed">
                  {s.text.split(/\*\*(.+?)\*\*/).map((part, i) =>
                    i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
