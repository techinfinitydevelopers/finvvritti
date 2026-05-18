"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TestimonialItem = { quote: string; name: string; role: string; color: string };

const defaultItems: TestimonialItem[] = [
  {
    quote: "I'm impressed with Finvvritti's tax expertise, which aligns well with my business needs. Despite diverse operations, the team provides holistic advice that keeps everything on track.",
    name: "Ronak Parikh",
    role: "Managing Partner, GFXBandits IT Solutions",
    color: "#0A2540",
  },
  {
    quote: "Service has been excellent and faultless. The team ensures compliance and responds brilliantly to all queries. A reliable partner for all our financial and compliance needs.",
    name: "Kalpesh Jain",
    role: "Director, Stancor Alloys Private Limited",
    color: "#0369A1",
  },
  {
    quote: "Finvvritti offers fantastic services and helped set up accounting processes for streamlined operations. Their proactive approach has made a real difference to our business.",
    name: "Lloyd Mendes",
    role: "Managing Partner, LLM Foods",
    color: "#1E6B4F",
  },
  {
    quote: "Pleased to have worked with Gagan and Finvvritti team. They are the go to persons for anything finance related under the sun. Think of them as a ready made finance team, and you can focus on solving the hard problems. Strongly recommend.",
    name: "Saurabh Goel",
    role: "Co-Founder & CEO, Amberstudent",
    color: "#7C3AED",
  },
  {
    quote: "Finvvritti has been an invaluable partner in our corporate finance journey. Their team combines deep expertise with a highly approachable and collaborative approach. The comprehensive range of services under one roof has been particularly beneficial.",
    name: "Eshika Lohani",
    role: "AVP-Finance, Osmos.ai",
    color: "#B45309",
  },
  {
    quote: "The Finvvritti team's ownership mindset and proactive approach are every founder's dream. If someone is looking to offload financial headaches and bring real order to your books, Finvvritti is the partner you want by your side.",
    name: "Shivam Gupta",
    role: "Co-Founder, MySivi.ai",
    color: "#1E6B4F",
  },
];

export default function Testimonials({ items = defaultItems }: { items?: TestimonialItem[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const perPage = 3;
  const totalPages = Math.ceil(items.length / perPage);
  const isSlider = items.length > perPage;

  const currentItems = items.slice(page * perPage, page * perPage + perPage);

  const goTo = useCallback(
    (next: number) => {
      if (!isSlider) return;
      setVisible(false);
      setTimeout(() => {
        setPage((next + totalPages) % totalPages);
        setVisible(true);
      }, 280);
    },
    [isSlider, totalPages]
  );

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isSlider) return;
    intervalRef.current = setInterval(() => goTo(page + 1), 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [page, isSlider, goTo]);

  // Reset interval on manual nav
  const manualGoTo = (next: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    goTo(next);
  };

  // Scroll-in animation for header
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.from(".testimonials-header", {
        immediateRender: false, opacity: 0, y: 22, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".testimonials-header", start: "top 85%", toggleActions: "play none none none" },
      });
    }, section);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  // Animate cards on page change
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || !visible) return;
    const cards = grid.querySelectorAll(".testimonial-card");
    gsap.fromTo(cards, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "power3.out" });
  }, [visible, page]);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[var(--color-tertiary)]">
      <div className="container-x">
        <div className="testimonials-header flex flex-col md:flex-row md:items-end md:justify-between gap-4 max-w-full mb-12">
          <div className="max-w-3xl">
            <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
              Testimonials
            </span>
            <h2 className="font-display mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
              What Our{" "}
              <span className="italic text-[var(--color-secondary-dark)]">Clients Say</span>
            </h2>
          </div>

          {/* Arrows — only show when slider */}
          {isSlider && (
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => manualGoTo(page - 1)}
                aria-label="Previous"
                className="h-10 w-10 rounded-full border border-[var(--color-line)] bg-white flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => manualGoTo(page + 1)}
                aria-label="Next"
                className="h-10 w-10 rounded-full border border-[var(--color-line)] bg-white flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-colors"
              >
                <ChevronRight size={18} />
              </button>
              {/* Dots */}
              <div className="flex gap-1.5 ml-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => manualGoTo(i)}
                    aria-label={`Page ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === page
                        ? "w-6 bg-[var(--color-primary)]"
                        : "w-2 bg-[var(--color-line)] hover:bg-[var(--color-muted)]"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div
          ref={gridRef}
          className={`grid md:grid-cols-3 gap-5 md:gap-6 transition-opacity duration-280 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          {currentItems.map((t) => (
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
