"use client";
import { useEffect, useRef } from "react";
import { CheckCircle2, AlertTriangle, Wrench, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CaseStudyContent } from "@/lib/case-study-content";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyDetail({
  content,
}: {
  content: CaseStudyContent;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".csd-overview", {
        immediateRender: false, opacity: 0, y: 18, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".csd-overview", start: "top 85%", toggleActions: "play none none none" },
      });
    }, wrapRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef}>
      {/* Overview */}
      {content.overview && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                Overview
              </span>
            </div>
            <div className="csd-overview lg:col-span-8">
              <p className="text-[var(--color-ink)]/80 text-base md:text-lg leading-relaxed">
                {content.overview}
              </p>
            </div>
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
    </div>
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
  const blockRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".csd-block-content", {
        immediateRender: false, opacity: 0, y: 18, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: blockRef.current, start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(".csd-bullet", {
        immediateRender: false, opacity: 0, x: -8, duration: 0.4, stagger: 0.04, ease: "power2.out",
        scrollTrigger: { trigger: ".csd-bullets", start: "top 85%", toggleActions: "play none none none" },
      });
    }, blockRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={blockRef} className={`py-16 md:py-24 ${accent}`}>
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

        <div className="csd-block-content lg:col-span-8 space-y-5">
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
            <ul className={`csd-bullets grid sm:grid-cols-2 gap-3 ${text ? "mt-4" : ""}`}>
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className={`csd-bullet flex items-start gap-3 rounded-xl border p-4 transition-all ${
                    highlight
                      ? "bg-white border-[var(--color-secondary)]/40 shadow-elev"
                      : "border-[var(--color-line)] bg-white hover:shadow-elev"
                  }`}
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[var(--color-secondary-dark)]"
                  />
                  <span className="text-sm md:text-[15px] text-[var(--color-ink)]/85 leading-relaxed">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
