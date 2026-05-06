"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudiesGrid() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-tertiary)]">
      <div className="container-x">
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {caseStudies.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
            >
              <Link
                href={`/case-studies/${c.slug}`}
                className="group block h-full rounded-3xl overflow-hidden border border-[var(--color-line)] bg-white hover:shadow-elev-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/65 via-[var(--color-primary)]/15 to-transparent" />
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                    {c.category}
                  </span>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-display text-xl md:text-2xl text-[var(--color-primary)] leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-[15px] text-[var(--color-ink)]/75 leading-relaxed">
                    {c.subtitle}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-secondary-dark)] transition-colors">
                    Read case study
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
