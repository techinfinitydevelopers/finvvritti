"use client";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-card", {
        immediateRender: false, opacity: 0, y: 22, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".cta-card", start: "top 85%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact-cta" className="py-20 md:py-28 bg-white">
      <div className="container-x">
        <div className="cta-card relative rounded-3xl overflow-hidden gradient-primary p-8 md:p-14 text-center">
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--color-secondary)]/25 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[var(--color-secondary)]/15 blur-3xl" />

          <div className="relative max-w-3xl mx-auto">
            <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary)] font-semibold uppercase">
              Get In Touch
            </span>
            <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Take Your Business to The{" "}
              <span className="text-gradient-gold">Next Financial Level</span>
            </h2>
            <p className="mt-5 text-white/80 text-base md:text-lg">
              Partner with Finvvritti for precise accounting and actionable
              financial insights that help your business grow.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-secondary-light)] transition-colors"
            >
              Book a Free Consultation
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
