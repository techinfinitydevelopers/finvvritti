"use client";
import { useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    quote: "Pleased to have worked with Gagan and Finvvritti team. They are the go to persons for anything finance related under the sun. Think of them as a ready made finance team, and you can focus on solving the hard problems. Strongly recommend.",
    name: "Saurabh Goel",
    role: "Co-Founder & CEO, Amberstudent",
    color: "#0A2540",
  },
  {
    quote: "Finvvritti has been an invaluable partner in our corporate finance journey. Their team combines deep expertise with a highly approachable and collaborative approach. The comprehensive range of services offered under one roof has been particularly beneficial. Gagan and Finvvritti team is a complete delight to work with. I would recommend Finvvritti to all financial leaders who are looking to solve both strategic and operational problems faster, without compromising on quality.",
    name: "Eshika Lohani",
    role: "AVP-Finance, Osmos.ai",
    color: "#0369A1",
  },
  {
    quote: "The Finvvritti team's ownership mindset and proactive approach are every founder's dream. If someone is looking to offload financial headaches and bring real order to your books, Finvvritti is the partner you want by your side.",
    name: "Shivam Gupta",
    role: "Co-Founder, MySivi.ai",
    color: "#1E6B4F",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".testimonials-header", {
        immediateRender: false, opacity: 0, y: 22, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".testimonials-header", start: "top 85%", toggleActions: "play none none none" },
      });
    }, section);

    const grid = section.querySelector(".testimonials-grid");
    const cards = section.querySelectorAll(".testimonial-card");
    if (grid && cards.length) {
      gsap.set(cards, { opacity: 0, y: 28 });
      const st = ScrollTrigger.create({
        trigger: grid,
        start: "top 85%",
        once: true,
        onEnter: () => gsap.to(cards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }),
      });
      ScrollTrigger.refresh();
      return () => { ctx.revert(); st.kill(); };
    }

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[var(--color-tertiary)]">
      <div className="container-x">
        <div className="testimonials-header max-w-3xl">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            Testimonials
          </span>
          <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
            What Our{" "}
            <span className="italic text-[var(--color-secondary-dark)]">Clients Say</span>
          </h2>
        </div>

        <div className="testimonials-grid mt-12 grid md:grid-cols-3 gap-5 md:gap-6">
          {items.map((t) => (
            <figure
              key={t.name}
              className="testimonial-card relative rounded-2xl bg-white border border-[var(--color-line)] p-6 md:p-7 hover:shadow-elev-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <Quote size={28} className="text-[var(--color-secondary)]/70" />
              <blockquote className="mt-4 text-[var(--color-ink)] text-base md:text-lg leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div className="mt-5 flex items-center gap-1 text-[var(--color-secondary-dark)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
              <figcaption className="mt-4 pt-4 border-t border-[var(--color-line)] flex items-center gap-3">
                <div
                  className="h-11 w-11 rounded-full flex items-center justify-center shrink-0 ring-2 ring-white shadow-sm"
                  style={{ backgroundColor: t.color }}
                >
                  <span className="text-white font-bold text-base leading-none">
                    {t.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-primary)]">{t.name}</p>
                  <p className="text-xs text-[var(--color-muted)]">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
