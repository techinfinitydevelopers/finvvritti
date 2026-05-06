"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, FileCheck2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 gradient-primary" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-40 -right-32 -z-10 h-[420px] w-[420px] rounded-full bg-[var(--color-secondary)]/25 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-[var(--color-secondary)]/15 blur-3xl" />

      <div className="container-x grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-white">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs md:text-sm tracking-wide"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
            Accounting & Financial Advisory
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight"
          >
            Your Finance,{" "}
            <span className="text-gradient-gold">Our Responsibility</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-base md:text-lg text-white/80 max-w-xl"
          >
            One-stop solution for finance, compliance & growth. We combine CA &
            CS expertise across auditing, accounting, taxation, debt advisory,
            CFO services, and valuation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-secondary-light)] transition-colors"
            >
              Book Free Consultation
              <ArrowRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/25 text-white font-medium hover:bg-white/5 transition-colors"
            >
              Learn More About Us
            </a>
          </motion.div>

          {/* Quick value props */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-lg"
          >
            {[
              { Icon: ShieldCheck, label: "Compliance" },
              { Icon: FileCheck2, label: "Accuracy" },
              { Icon: TrendingUp, label: "Growth" },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-white/85 text-sm"
              >
                <Icon size={18} className="text-[var(--color-secondary)]" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative mx-auto max-w-md">
      {/* Card stack */}
      <div className="relative rounded-2xl bg-white shadow-elev-lg p-5 md:p-6 border border-white/40">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-[var(--color-muted)]">
              Q3 Revenue
            </p>
            <p className="font-display text-2xl md:text-3xl text-[var(--color-primary)] mt-1">
              ₹ 4.82 Cr
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)] text-xs font-semibold">
            +18.4%
          </span>
        </div>
        {/* Mini chart */}
        <svg viewBox="0 0 240 80" className="mt-4 w-full h-20">
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0A2540" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0A2540" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 60 L30 50 L60 55 L90 38 L120 42 L150 28 L180 32 L210 18 L240 22 L240 80 L0 80 Z"
            fill="url(#g1)"
          />
          <path
            d="M0 60 L30 50 L60 55 L90 38 L120 42 L150 28 L180 32 L210 18 L240 22"
            fill="none"
            stroke="#0A2540"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="grid grid-cols-3 gap-3 mt-3 pt-4 border-t border-[var(--color-line)]">
          {[
            { k: "GST", v: "Filed" },
            { k: "Audit", v: "On track" },
            { k: "Reports", v: "Live" },
          ].map((s) => (
            <div key={s.k}>
              <p className="text-[11px] text-[var(--color-muted)]">{s.k}</p>
              <p className="text-sm font-semibold text-[var(--color-primary)]">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating gold badge */}
      <div className="absolute -left-6 -bottom-6 hidden md:flex items-center gap-3 rounded-xl bg-white p-3 shadow-elev-lg border border-white/40">
        <div className="h-10 w-10 rounded-lg gradient-gold flex items-center justify-center">
          <ShieldCheck size={20} className="text-[var(--color-primary)]" />
        </div>
        <div>
          <p className="text-xs text-[var(--color-muted)]">Compliance</p>
          <p className="text-sm font-semibold text-[var(--color-primary)]">
            100% On-time
          </p>
        </div>
      </div>

      <div className="absolute -right-4 -top-4 hidden md:flex items-center gap-3 rounded-xl bg-white p-3 shadow-elev-lg border border-white/40">
        <div className="h-10 w-10 rounded-lg bg-[var(--color-tertiary)] flex items-center justify-center">
          <TrendingUp size={20} className="text-[var(--color-primary)]" />
        </div>
        <div>
          <p className="text-xs text-[var(--color-muted)]">Growth</p>
          <p className="text-sm font-semibold text-[var(--color-primary)]">
            QoQ +12%
          </p>
        </div>
      </div>
    </div>
  );
}
