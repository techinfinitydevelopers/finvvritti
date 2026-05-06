"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { num: "15+", label: "Years Experience" },
  { num: "300+", label: "Businesses Scaled" },
  { num: "1.2K+", label: "Projects Completed" },
  { num: "20+", label: "Global Clients" },
];

export default function WhoWeAre() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[var(--color-tertiary)]">
      <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            Who We Are
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight"
          >
            Smarter Growth,{" "}
            <span className="italic text-[var(--color-secondary-dark)]">
              From Day One
            </span>
          </motion.h2>
          <a
            href="#services"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] group"
          >
            Learn More About Us
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-[var(--color-ink)]/80 text-base md:text-lg leading-relaxed"
          >
            <strong className="text-[var(--color-primary)]">FINVVRITTI</strong>{" "}
            is a one-stop solution provider for your financial and corporate
            requirements. We act as a catalyst to your financial growth and
            have been consistently adding value to various companies with a
            wide range of industry-oriented services. We combine the expertise
            of CA & CS to assist you in all things finance and compliance. We
            render our client-driven services across domains concerning
            Auditing, Accounting & Taxation, Debt Advisory, CFO Services,
            Valuation Advisory, and Company Secretary. Owing to our
            tailor-made financial advisory services, we continue to positively
            make a difference to SMEs and Start-ups.
          </motion.p>

          <div className="mt-10">
            <p className="text-xs tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
              We Are In Numbers
            </p>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-line)] rounded-2xl overflow-hidden">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-white p-5 md:p-6"
                >
                  <p className="font-display text-3xl md:text-4xl text-[var(--color-primary)]">
                    {s.num}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
