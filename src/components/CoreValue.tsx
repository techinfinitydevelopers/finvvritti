"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Accurate financial reporting that you can act on",
  "Practical, plain-English advice — no jargon",
  "Audit-ready, compliant, transparent operations",
  "Always know exactly where your business stands",
];

export default function CoreValue() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6"
        >
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            Our Core Value
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
            Where Accuracy Meets{" "}
            <span className="italic text-[var(--color-secondary-dark)]">
              Financial Advisory
            </span>
          </h2>
          <p className="mt-5 text-[var(--color-ink)]/80 text-base md:text-lg leading-relaxed">
            At FINVVRITTI, we help businesses understand their numbers and use
            them to make better decisions. Our role goes beyond accounting — we
            provide accurate financial reporting and practical advice that
            brings clarity, control, and confidence. We work closely with our
            clients to ensure their finances are organized, compliant, and
            transparent, so they always know where their business stands.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2.5 text-sm text-[var(--color-ink)]/85"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 text-[var(--color-secondary-dark)] shrink-0"
                />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6"
        >
          <CoreVisual />
        </motion.div>
      </div>
    </section>
  );
}

function CoreVisual() {
  return (
    <div className="relative">
      <div className="rounded-3xl gradient-primary p-1">
        <div className="rounded-[calc(1.5rem-2px)] bg-white p-6 md:p-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-[var(--color-primary)]">
              Financial Health
            </p>
            <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)] font-semibold">
              Healthy
            </span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { k: "Compliance", v: 98 },
              { k: "Cash Flow", v: 86 },
              { k: "Reporting", v: 94 },
            ].map((m) => (
              <div key={m.k} className="rounded-xl bg-[var(--color-tertiary)] p-3">
                <p className="text-[11px] text-[var(--color-muted)]">{m.k}</p>
                <p className="font-display text-2xl text-[var(--color-primary)] mt-0.5">
                  {m.v}%
                </p>
                <div className="mt-2 h-1.5 rounded-full bg-white overflow-hidden">
                  <div
                    className="h-full gradient-gold"
                    style={{ width: `${m.v}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-[var(--color-line)] p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[var(--color-muted)]">Quarterly trend</p>
              <p className="text-xs font-semibold text-[var(--color-success)]">
                ↑ 12.4%
              </p>
            </div>
            <svg viewBox="0 0 240 60" className="mt-2 w-full h-14">
              <path
                d="M0 50 L40 38 L80 42 L120 28 L160 30 L200 18 L240 22"
                fill="none"
                stroke="#D4A24C"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M0 55 L40 48 L80 50 L120 40 L160 44 L200 36 L240 38"
                fill="none"
                stroke="#0A2540"
                strokeWidth="2"
                strokeOpacity="0.4"
                strokeDasharray="3 3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
