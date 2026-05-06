"use client";
import Image from "next/image";
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
        <div className="lg:col-span-6 text-white">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs md:text-sm tracking-wide"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
            Accounting and Financial Advisory
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

        {/* Visual: photo + floating dashboard cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-xl lg:max-w-none">
      {/* Main photo */}
      <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-elev-lg">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
          alt="Finvvritti advisor reviewing financial reports with a client"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/40 via-transparent to-transparent" />
      </div>

      {/* Floating revenue card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -left-3 sm:-left-6 top-6 sm:top-10 w-[220px] sm:w-[260px] rounded-2xl bg-white/95 backdrop-blur shadow-elev-lg p-4 sm:p-5 border border-white/40"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[var(--color-muted)]">
              Q3 Revenue
            </p>
            <p className="font-display text-xl sm:text-2xl text-[var(--color-primary)] mt-0.5">
              ₹ 4.82 Cr
            </p>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)] text-[10px] sm:text-xs font-semibold">
            +18.4%
          </span>
        </div>
        <svg viewBox="0 0 240 60" className="mt-3 w-full h-12">
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0A2540" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0A2540" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 45 L30 38 L60 42 L90 28 L120 32 L150 20 L180 24 L210 12 L240 16 L240 60 L0 60 Z"
            fill="url(#g1)"
          />
          <path
            d="M0 45 L30 38 L60 42 L90 28 L120 32 L150 20 L180 24 L210 12 L240 16"
            fill="none"
            stroke="#0A2540"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Floating compliance card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="absolute -right-2 sm:-right-4 bottom-6 sm:bottom-10 flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur shadow-elev-lg p-3 sm:p-4 border border-white/40"
      >
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl gradient-gold flex items-center justify-center">
          <ShieldCheck size={20} className="text-[var(--color-primary)]" />
        </div>
        <div>
          <p className="text-[10px] sm:text-xs text-[var(--color-muted)]">Compliance</p>
          <p className="text-sm font-semibold text-[var(--color-primary)]">
            100% On-time
          </p>
        </div>
      </motion.div>
    </div>
  );
}
