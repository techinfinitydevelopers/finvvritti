"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[var(--color-tertiary)]">
      <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            Contact
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
            Let's talk about your{" "}
            <span className="italic text-[var(--color-secondary-dark)]">
              numbers
            </span>
          </h2>
          <p className="mt-4 text-[var(--color-ink)]/75 max-w-md">
            Fill the form and our team will reach out with a clear plan, scope,
            and timeline. Or contact us directly using the details below.
          </p>

          <div className="mt-8 space-y-4">
            <ContactRow Icon={Phone} label="Call" value="+1 (707) 892-0749" href="tel:+17078920749" />
            <ContactRow Icon={Mail} label="Email" value="info@finvvritti.com" href="mailto:info@finvvritti.com" />
            <ContactRow
              Icon={MapPin}
              label="Office"
              value="120 Financial Park, Suite 405, New York, NY 10005, USA"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
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
    <div className="flex items-start gap-3">
      <div className="h-10 w-10 rounded-xl bg-white border border-[var(--color-line)] flex items-center justify-center shrink-0">
        <Icon size={18} className="text-[var(--color-primary)]" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-[var(--color-muted)]">
          {label}
        </p>
        <p className="text-[var(--color-primary)] font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : (
    content
  );
}
