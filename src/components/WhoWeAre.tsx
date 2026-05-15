"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Award, Users, Briefcase, Globe2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { end: 15, suffix: "+", label: "Years Experience", Icon: Award },
  { end: 300, suffix: "+", label: "Businesses Scaled", Icon: Briefcase },
  { end: 1.2, suffix: "K+", label: "Projects Completed", Icon: Users },
  { end: 20, suffix: "+", label: "Global Clients", Icon: Globe2 },
];

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".whoweare-image", {
        immediateRender: false, opacity: 0, x: -40, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".whoweare-image", start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from([".whoweare-heading", ".whoweare-para", ".whoweare-link"], {
        immediateRender: false, opacity: 0, y: 22, duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".whoweare-heading", start: "top 85%", toggleActions: "play none none none" },
      });
    }, section);

    // Use direct DOM refs for stats — more reliable than string selectors
    const statsContainer = section.querySelector(".whoweare-stats");
    const statItems = section.querySelectorAll(".whoweare-stat");
    if (statsContainer && statItems.length) {
      gsap.set(statItems, { opacity: 0, y: 18 });
      const st = ScrollTrigger.create({
        trigger: statsContainer,
        start: "top 88%",
        once: true,
        onEnter: () => {
          gsap.to(statItems, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" });
          stats.forEach((s, i) => {
            const el = counterRefs.current[i];
            if (!el) return;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: s.end, duration: 1.6, delay: i * 0.1, ease: "power2.out",
              onUpdate: () => {
                el.textContent = s.suffix === "K+"
                  ? obj.val.toFixed(1) + "K+"
                  : Math.round(obj.val) + s.suffix;
              },
            });
          });
        },
      });
      ScrollTrigger.refresh();
      return () => { ctx.revert(); st.kill(); };
    }

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-28 bg-[var(--color-tertiary)] overflow-hidden">
      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="whoweare-image lg:col-span-5 relative">
          <div className="relative aspect-[16/9] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-elev-lg">
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
              <p className="font-semibold text-[var(--color-primary)]">300+ Businesses</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            Who We Are
          </span>
          <h2 className="whoweare-heading font-display mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
            Smarter Growth,{" "}
            <span className="italic text-[var(--color-secondary-dark)]">From Day One</span>
          </h2>

          <p className="whoweare-para mt-5 text-[var(--color-ink)]/80 text-base md:text-lg leading-relaxed">
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
          </p>

          <a href="/about" className="whoweare-link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] group">
            Learn More About Us
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-10">
            <p className="text-xs tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
              We Are In Numbers
            </p>
            <div className="whoweare-stats mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="whoweare-stat group bg-white p-4 md:p-5 rounded-2xl border border-[var(--color-line)] hover:shadow-elev hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-9 w-9 rounded-xl gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <s.Icon size={16} className="text-[var(--color-primary)]" />
                  </div>
                  <p className="font-display text-3xl md:text-4xl text-[var(--color-primary)] mt-3">
                    <span ref={(el) => { counterRefs.current[i] = el; }}>
                      0{s.suffix}
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-muted)]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
