"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-left", {
        immediateRender: false, opacity: 0, x: -28, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(".contact-right", {
        immediateRender: false, opacity: 0, x: 28, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(".contact-detail", {
        immediateRender: false, opacity: 0, y: 14, duration: 0.5, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-details", start: "top 88%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-28 bg-[var(--color-tertiary)] relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[var(--color-secondary)]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[var(--color-primary)]/5 blur-3xl pointer-events-none" />

      <div className="container-x grid lg:grid-cols-12 gap-10 items-start relative">
        <div className="contact-left lg:col-span-5">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            Contact
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
            Let&apos;s talk about your{" "}
            <span className="italic text-[var(--color-secondary-dark)]">
              numbers
            </span>
          </h2>
          <p className="mt-4 text-[var(--color-ink)]/75 max-w-md">
            Fill the form and our team will reach out with a clear plan, scope,
            and timeline. Or contact us directly using the details below.
          </p>

          {/* Office image */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-[var(--color-line)] shadow-elev h-48 md:h-52 relative">
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
              alt="Finvvritti Office – Professional financial advisory team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-[var(--color-primary)]/20" />
          </div>

          <div className="contact-details mt-6 space-y-3">
            <ContactRow Icon={Phone} label="Call Us" value="+91 80803 86506" href="tel:+918080386506" />
            <ContactRow Icon={Mail} label="Email Us" value="gagan@finvvritti.com" href="mailto:gagan@finvvritti.com" />
            <ContactRow
              Icon={MapPin}
              label="Our Office"
              value="Office No 504, D Wing, 5th Floor, Shreepati Jewels, Khattar Galli, Charni Road, Mumbai, Maharashtra 400004"
            />
            <ContactRow
              Icon={Clock}
              label="Business Hours"
              value="10:30 AM to 7 PM, Monday to Saturday"
            />
          </div>
        </div>

        <div className="contact-right lg:col-span-7">
          <div className="rounded-3xl bg-white border border-[var(--color-line)] shadow-elev-lg p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  Icon,
  label,
  value,
  href,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="contact-detail flex items-start gap-3 rounded-2xl bg-white border border-[var(--color-line)] p-4 hover:shadow-elev transition-all">
      <div className="h-10 w-10 rounded-xl gradient-gold flex items-center justify-center shrink-0">
        <Icon size={17} className="text-[var(--color-primary)]" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-wider text-[var(--color-muted)] font-semibold">
          {label}
        </p>
        <p className="text-[var(--color-primary)] font-medium text-sm mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
