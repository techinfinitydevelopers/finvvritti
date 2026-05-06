"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle, Wrench, TrendingUp } from "lucide-react";

const blocks = [
  {
    Icon: AlertTriangle,
    label: "Challenges",
    text: "Businesses often struggle with complex regulatory requirements, frequent compliance changes, and time-consuming financial processes. Managing taxation, filings, and financial records without expert guidance leads to errors, penalties, and missed opportunities for growth. Many clients also lack clear visibility into their financial health, making it difficult to take informed business decisions.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
  },
  {
    Icon: Wrench,
    label: "Optimizations",
    text: "We streamline financial and compliance processes through structured, expert-driven solutions tailored to each business. From GST filings and income tax compliance to accounting and advisory, we ensure accuracy, transparency, and timely execution. Our approach focuses on simplifying complex regulations, improving financial clarity, and implementing efficient systems that reduce manual effort and risk.",
    img: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    Icon: TrendingUp,
    label: "Results",
    text: "Clients experience hassle-free compliance, improved financial control, and greater confidence in decision-making. With reduced errors and timely filings, businesses avoid penalties while optimizing their financial performance. The result is a more structured, compliant, and growth-ready business environment.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
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

        <div className="mt-12 grid md:grid-cols-3 gap-5 md:gap-6">
          {blocks.map((b, i) => (
            <motion.article
              key={b.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group rounded-2xl overflow-hidden border border-[var(--color-line)] bg-[var(--color-tertiary)] hover:shadow-elev-lg hover:bg-white transition-all duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={b.img}
                  alt={b.label}
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/65 via-[var(--color-primary)]/15 to-transparent" />
                <div className="absolute top-4 left-4 h-12 w-12 rounded-xl gradient-gold flex items-center justify-center shadow-elev">
                  <b.Icon size={22} className="text-[var(--color-primary)]" />
                </div>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-display text-2xl text-[var(--color-primary)]">
                  {b.label}
                </h3>
                <p className="mt-3 text-sm md:text-[15px] text-[var(--color-ink)]/75 leading-relaxed">
                  {b.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
