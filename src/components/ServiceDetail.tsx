"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import type { ServiceContent } from "@/lib/service-content";

export default function ServiceDetail({
  content,
  serviceTitle,
}: {
  content: ServiceContent;
  serviceTitle: string;
}) {
  const overview = content.overview;
  const sections = content.sections;
  const bullets = content.bullets;

  return (
    <>
      {overview.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase"
              >
                Overview
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display mt-3 text-3xl md:text-4xl text-[var(--color-primary)] leading-tight"
              >
                {serviceTitle}
              </motion.h2>
            </div>
            <div className="lg:col-span-8 space-y-5">
              {overview.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="text-[var(--color-ink)]/80 text-base md:text-lg leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </section>
      )}

      {sections.length > 0 && (
        <section className="py-16 md:py-20 bg-[var(--color-tertiary)]">
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                What We Cover
              </span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl text-[var(--color-primary)] leading-tight">
                Key areas of{" "}
                <span className="italic text-[var(--color-secondary-dark)]">
                  engagement
                </span>
              </h2>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {sections.map((s, i) => (
                <motion.div
                  key={s + i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group rounded-2xl bg-white border border-[var(--color-line)] p-5 md:p-6 hover:shadow-elev hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-11 w-11 rounded-xl gradient-gold flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Sparkles size={18} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-[var(--color-primary)] leading-snug">
                    {s}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {bullets.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                Inclusions
              </span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl text-[var(--color-primary)] leading-tight">
                Everything that's{" "}
                <span className="italic text-[var(--color-secondary-dark)]">
                  in the box
                </span>
              </h2>
            </div>
            <ul className="mt-10 grid md:grid-cols-2 gap-x-8 gap-y-4">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                  className="flex items-start gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-tertiary)] p-4 hover:bg-white hover:shadow-elev transition-all"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 text-[var(--color-secondary-dark)] shrink-0"
                  />
                  <span className="text-sm md:text-[15px] text-[var(--color-ink)]/85 leading-relaxed">
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
