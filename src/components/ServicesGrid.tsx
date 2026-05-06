"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-tertiary)]">
      <div className="container-x">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group block h-full rounded-2xl overflow-hidden border border-[var(--color-line)] bg-white hover:shadow-elev-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/70 via-[var(--color-primary)]/15 to-transparent" />
                  <div className="absolute top-4 left-4 h-11 w-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-elev">
                    <s.Icon size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                    {s.category}
                  </span>
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="font-display text-lg md:text-xl text-[var(--color-primary)] leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-ink)]/70 leading-relaxed">
                    {s.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-secondary-dark)] transition-colors">
                    Learn more
                    <ArrowUpRight
                      size={14}
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
