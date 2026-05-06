"use client";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Understand your business",
    text: "We analyze your financial structure, operations, and goals to identify key challenges and growth opportunities.",
  },
  {
    n: "02",
    title: "Diagnose & plan",
    text: "We map gaps in compliance, accounting, and reporting, then design a tailored roadmap with clear priorities.",
  },
  {
    n: "03",
    title: "Implement systems",
    text: "We set up clean books, structured filings, and decision-grade dashboards — so your data works for you.",
  },
  {
    n: "04",
    title: "Advise & optimize",
    text: "Ongoing CFO-level guidance on tax, debt, valuation, and capital — turning numbers into next moves.",
  },
  {
    n: "05",
    title: "Scale with confidence",
    text: "With audit-ready records and forward-looking insights, you grow with control and zero compliance surprises.",
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-primary)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[var(--color-secondary)]/15 blur-3xl" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary)] font-semibold uppercase">
            Our 5-Step Process
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            From clarity to <span className="text-gradient-gold">confident growth</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-sm p-6 hover:bg-white/[0.1] transition-colors"
            >
              <span className="font-display text-3xl text-[var(--color-secondary)]">
                {s.n}
              </span>
              <h3 className="mt-3 font-semibold text-white text-base md:text-lg">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
