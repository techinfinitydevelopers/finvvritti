"use client";
import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Wrench, TrendingUp } from "lucide-react";
import type { CaseStudyContent } from "@/lib/case-study-content";

export default function CaseStudyDetail({
  content,
}: {
  content: CaseStudyContent;
}) {
  return (
    <>
      {/* Overview */}
      {content.overview && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                Overview
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <p className="text-[var(--color-ink)]/80 text-base md:text-lg leading-relaxed">
                {content.overview}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Challenge */}
      {(content.challenge.text || content.challenge.bullets.length > 0) && (
        <Block
          accent="bg-[var(--color-tertiary)]"
          eyebrow="Challenge"
          Icon={AlertTriangle}
          text={content.challenge.text}
          bullets={content.challenge.bullets}
        />
      )}

      {/* Solution */}
      {(content.solution.text || content.solution.bullets.length > 0) && (
        <Block
          accent="bg-white"
          eyebrow="Solution"
          Icon={Wrench}
          text={content.solution.text}
          bullets={content.solution.bullets}
        />
      )}

      {/* Result */}
      {content.result.bullets.length > 0 && (
        <Block
          accent="bg-[var(--color-tertiary)]"
          eyebrow="Result"
          Icon={TrendingUp}
          bullets={content.result.bullets}
          highlight
        />
      )}
    </>
  );
}

function Block({
  accent,
  eyebrow,
  Icon,
  text,
  bullets,
  highlight,
}: {
  accent: string;
  eyebrow: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  text?: string;
  bullets?: string[];
  highlight?: boolean;
}) {
  return (
    <section className={`py-16 md:py-24 ${accent}`}>
      <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl gradient-gold flex items-center justify-center">
              <Icon size={22} className="text-[var(--color-primary)]" />
            </div>
            <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
              {eyebrow}
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 space-y-5"
        >
          {text &&
            text.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-[var(--color-ink)]/80 text-base md:text-lg leading-relaxed"
              >
                {para}
              </p>
            ))}

          {bullets && bullets.length > 0 && (
            <ul
              className={`grid sm:grid-cols-2 gap-3 ${
                text ? "mt-4" : ""
              }`}
            >
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                  className={`flex items-start gap-3 rounded-xl border p-4 transition-all ${
                    highlight
                      ? "bg-white border-[var(--color-secondary)]/40 shadow-elev"
                      : "border-[var(--color-line)] bg-white hover:shadow-elev"
                  }`}
                >
                  <CheckCircle2
                    size={18}
                    className={`mt-0.5 shrink-0 ${
                      highlight
                        ? "text-[var(--color-secondary-dark)]"
                        : "text-[var(--color-secondary-dark)]"
                    }`}
                  />
                  <span className="text-sm md:text-[15px] text-[var(--color-ink)]/85 leading-relaxed">
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}
