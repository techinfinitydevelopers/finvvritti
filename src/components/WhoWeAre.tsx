"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Briefcase, Globe2 } from "lucide-react";

const stats = [
  { num: "15+", label: "Years Experience", Icon: Award },
  { num: "300+", label: "Businesses Scaled", Icon: Briefcase },
  { num: "1.2K+", label: "Projects Completed", Icon: Users },
  { num: "20+", label: "Global Clients", Icon: Globe2 },
];

export default function WhoWeAre() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[var(--color-tertiary)] overflow-hidden">
      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elev-lg">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80"
              alt="Finvvritti CA & CS team meeting on financial advisory"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="hidden md:flex absolute -bottom-6 -right-6 items-center gap-3 rounded-2xl bg-white p-4 shadow-elev-lg border border-[var(--color-line)]">
            <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center">
              <Award size={22} className="text-[var(--color-secondary)]" />
            </div>
            <div>
              <p className="text-xs text-[var(--color-muted)]">Trusted by</p>
              <p className="font-semibold text-[var(--color-primary)]">
                300+ Businesses
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="lg:col-span-7">
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

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-[var(--color-ink)]/80 text-base md:text-lg leading-relaxed"
          >
            <strong className="text-[var(--color-primary)]">FINVVRITTI</strong>{" "}
            is a one-stop solution provider for your financial and corporate
            requirements. We act as a catalyst to your financial growth and
            have been consistently adding value to various companies with a
            wide range of industry-oriented services. We combine expertise of
            CA & CS to assist you in all things finance and compliance. We
            render our client-driven services across domains concerning
            Auditing, Accounting & Taxation, debt advisory, CFO services,
            valuation advisory and Company Secretary. Owing to our tailor-made
            financial advisory services, we continue to positively make a
            difference to SMEs and Start-ups.
          </motion.p>

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

          <div className="mt-10">
            <p className="text-xs tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
              We Are In Numbers
            </p>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white p-4 md:p-5 rounded-2xl border border-[var(--color-line)] hover:shadow-elev hover:-translate-y-0.5 transition-all"
                >
                  <s.Icon
                    size={18}
                    className="text-[var(--color-secondary-dark)]"
                  />
                  <p className="font-display text-3xl md:text-4xl text-[var(--color-primary)] mt-2">
                    {s.num}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-muted)]">
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
