"use client";
import { Award, BarChart3, Target, Hammer, TrendingUp, ShieldCheck } from "lucide-react";
import AboutAnimated from "@/components/AboutAnimated";

const reasons = [
  { Icon: Award,       h4: "Proven Track Record",        body: "Over 200 businesses successfully scaled with our guidance." },
  { Icon: BarChart3,   h4: "Data-Driven Decisions",      body: "Every strategy is backed by analytics and insights." },
  { Icon: Target,      h4: "Tailored Strategies",        body: "Solutions customized to each client's unique goals." },
  { Icon: Hammer,      h4: "Hands-On Execution",         body: "We don't just advise; we help implement and optimize." },
  { Icon: TrendingUp,  h4: "Sustainable Growth Focus",   body: "Strategies are designed for long-term success, not short-term wins." },
  { Icon: ShieldCheck, h4: "Proactive Compliance Support", body: "We don't wait for problems to arise; we help you stay ahead with timely compliance, regular reviews, and practical guidance." },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
            Why Businesses{" "}
            <span className="italic text-[var(--color-secondary-dark)]">
              Partner With Us
            </span>
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-3xl gradient-primary text-white p-6 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[var(--color-secondary)]/25 blur-3xl" />
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] font-semibold relative">
                Businesses Scaled
              </p>
              <p className="mt-3 font-display text-4xl relative">200+</p>
              <p className="mt-2 text-white/80 text-sm relative">
                Over 200 businesses successfully scaled with our guidance.
              </p>
            </div>
            <div className="rounded-3xl bg-[var(--color-tertiary)] border border-[var(--color-line)] p-6">
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-secondary-dark)] font-semibold">
                Analytics-Backed
              </p>
              <p className="mt-3 font-display text-2xl text-[var(--color-primary)] leading-snug">
                Every strategy is backed by analytics and insights.
              </p>
            </div>
          </div>
          <a
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-light)] transition-colors"
          >
            Contact us
          </a>
        </div>
        <AboutAnimated className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {reasons.map((r) => (
              <div
                key={r.h4}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-tertiary)] p-5 md:p-6 hover:bg-white hover:shadow-elev transition-all"
              >
                <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
                  <r.Icon size={18} className="text-[var(--color-secondary)]" />
                </div>
                <h4 className="mt-4 font-semibold text-[var(--color-primary)]">{r.h4}</h4>
                <p className="mt-1 text-sm text-[var(--color-ink)]/75 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </AboutAnimated>
      </div>
    </section>
  );
}
