"use client";
import { motion } from "framer-motion";
import { AlertTriangle, Wrench, TrendingUp } from "lucide-react";

const blocks = [
  {
    Icon: AlertTriangle,
    label: "Challenges",
    text: "Businesses often struggle with complex regulatory requirements, frequent compliance changes, and time-consuming financial processes. Managing taxation, filings, and financial records without expert guidance leads to errors, penalties, and missed opportunities for growth. Many clients also lack clear visibility into their financial health, making it difficult to take informed business decisions.",
  },
  {
    Icon: Wrench,
    label: "Optimizations",
    text: "We streamline financial and compliance processes through structured, expert-driven solutions tailored to each business. From GST filings and income tax compliance to accounting and advisory, we ensure accuracy, transparency, and timely execution. Our approach focuses on simplifying complex regulations, improving financial clarity, and implementing efficient systems that reduce manual effort and risk.",
  },
  {
    Icon: TrendingUp,
    label: "Results",
    text: "Clients experience hassle-free compliance, improved financial control, and greater confidence in decision-making. With reduced errors and timely filings, businesses avoid penalties while optimizing their financial performance. The result is a more structured, compliant, and growth-ready business environment.",
  },
];

export default function CaseStudy() {
  return (
    <section id="case-studies" className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            Case Studies
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
            Proven Financial Results for{" "}
            <span className="italic text-[var(--color-secondary-dark)]">
              Growing Businesses
            </span>
          </h2>
          <p className="mt-4 text-[var(--color-ink)]/75 text-base md:text-lg">
            See how Finvvritti helps businesses across industries gain control,
            stay compliant, and make confident financial decisions.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {blocks.map((b, i) => (
            <motion.article
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-tertiary)] p-6 md:p-7 hover:shadow-elev hover:bg-white transition-all"
            >
              <div className="h-12 w-12 rounded-xl gradient-gold flex items-center justify-center">
                <b.Icon size={22} className="text-[var(--color-primary)]" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-[var(--color-primary)]">
                {b.label}
              </h3>
              <p className="mt-3 text-sm md:text-[15px] text-[var(--color-ink)]/75 leading-relaxed">
                {b.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
