import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import AboutAnimated from "@/components/AboutAnimated";
import TeamSection from "@/components/TeamSection";
import Industries from "@/components/Industries";
import {
  CheckCircle2,
  Award,
  BarChart3,
  Target,
  Hammer,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Finvvritti | Driving Smarter Business Growth",
  description:
    "Finvvritti helps businesses scale with clear strategy, data-driven insights, and expert execution.",
};

const values = [
  {
    h3: "Secret to Your Business Growth!",
    body: "With our standardized reporting and well-organized system, witness your company flourishing / thriving with our financial advisory services.",
  },
  {
    h3: "Integrity",
    body: "We collaborate closely with our clients, acting as an extension of their team to support long-term success.",
  },
  {
    h3: "Do Away with your Financial Worries!",
    body: "We provide structured & tech-enabled financial solutions ensuring building blocks of the team are set right.",
  },
  {
    h3: "Your Finance, Our Responsibility!",
    body: "Our role goes beyond accounting — we provide accurate financial reporting and practical advice that brings clarity, control, and confidence.",
  },
  {
    h3: "Collaboration",
    body: "We work closely with clients to ensure strategies are practical and effective.",
  },
  {
    h3: "Compliance Made Simple!",
    body: "We make taxation, accounting, and compliance easy to manage through timely guidance, practical solutions, and proactive support for your business.",
  },
];

const reasons = [
  {
    Icon: Award,
    h4: "Proven Track Record",
    body: "Over 200 businesses successfully scaled with our guidance.",
  },
  {
    Icon: BarChart3,
    h4: "Data-Driven Decisions",
    body: "Every strategy is backed by analytics and insights.",
  },
  {
    Icon: Target,
    h4: "Tailored Strategies",
    body: "Solutions customized to each client's unique goals.",
  },
  {
    Icon: Hammer,
    h4: "Hands-On Execution",
    body: "We don't just advise; we help implement and optimize.",
  },
  {
    Icon: TrendingUp,
    h4: "Sustainable Growth Focus",
    body: "Strategies are designed for long-term success, not short-term wins.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About Us"
          title="Driving Smarter"
          highlight="Business Growth"
          description="Finvvritti helps businesses scale with clear strategy, data-driven insights, and expert execution."
          image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Finvvritti team driving smarter business growth"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-x">
            <div className="max-w-3xl">
              <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                Our Purpose
              </span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
                Our Purpose, Mission &{" "}
                <span className="italic text-[var(--color-secondary-dark)]">
                  Vision
                </span>
              </h2>
            </div>

            <AboutAnimated>
              <div className="mt-12 grid md:grid-cols-2 gap-5 md:gap-6">
                <div className="rounded-3xl bg-[var(--color-tertiary)] border border-[var(--color-line)] p-7 md:p-9 hover:shadow-elev-lg transition-all">
                  <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-secondary-dark)] font-semibold">
                    Our Mission
                  </span>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl text-[var(--color-primary)] leading-snug">
                    A catalyst for client growth
                  </h3>
                  <p className="mt-4 text-[var(--color-ink)]/80 leading-relaxed">
                    To act as a catalyst for our clients' financial growth by
                    delivering client-driven, tailored solutions across
                    auditing, accounting, taxation, debt advisory, CFO services,
                    valuation advisory, and company secretarial services.
                  </p>
                </div>
                <div className="rounded-3xl gradient-primary text-white p-7 md:p-9 relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[var(--color-secondary)]/25 blur-3xl" />
                  <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] font-semibold relative">
                    Our Vision
                  </span>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl text-white leading-snug relative">
                    A trusted partner in your journey
                  </h3>
                  <p className="mt-4 text-white/85 leading-relaxed relative">
                    To consistently add value to businesses by becoming a
                    trusted partner in their financial journey, empowering SMEs
                    and startups to achieve sustainable growth and long-term
                    success through innovative and reliable advisory services.
                  </p>
                </div>
              </div>
            </AboutAnimated>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-[var(--color-tertiary)]">
          <div className="container-x">
            <div className="max-w-3xl">
              <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                Our Values
              </span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
                What We{" "}
                <span className="italic text-[var(--color-secondary-dark)]">
                  Stand For
                </span>
              </h2>
            </div>
            <AboutAnimated>
              <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {values.map((v) => (
                  <div
                    key={v.h3}
                    className="rounded-2xl bg-white border border-[var(--color-line)] p-6 md:p-7 hover:shadow-elev-lg hover:-translate-y-0.5 transition-all"
                  >
                    <div className="h-10 w-10 rounded-lg gradient-gold flex items-center justify-center">
                      <CheckCircle2
                        size={18}
                        className="text-[var(--color-primary)]"
                      />
                    </div>
                    <h3 className="mt-4 font-display text-xl text-[var(--color-primary)] leading-snug">
                      {v.h3}
                    </h3>
                    <p className="mt-3 text-sm text-[var(--color-ink)]/75 leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                ))}
              </div>
            </AboutAnimated>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-x grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                Why Choose Us
              </span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
                Why Businesses{" "}
                <span className="italic text-[var(--color-secondary-dark)]">
                  Partner With Us
                </span>
              </h2>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-3xl gradient-primary text-white p-6 relative overflow-hidden">
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[var(--color-secondary)]/25 blur-3xl" />
                  <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] font-semibold relative">
                    Businesses Scaled
                  </p>
                  <p className="mt-3 font-display text-4xl relative">200+</p>
                  <p className="mt-2 text-white/80 text-sm relative">
                    Over 200 businesses successfully scaled with our guidance.
                  </p>
                </div>
                <div className="rounded-3xl bg-[var(--color-tertiary)] border border-[var(--color-line)] p-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-secondary-dark)] font-semibold">
                    Analytics-Backed
                  </p>
                  <p className="mt-3 font-display text-2xl text-[var(--color-primary)] leading-snug">
                    Every strategy is backed by analytics and insights.
                  </p>
                </div>
              </div>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-light)] transition-colors"
              >
                Contact us
              </a>
            </div>
            <AboutAnimated className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                {reasons.map((r) => (
                  <div
                    key={r.h4}
                    className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-tertiary)] p-5 md:p-6 hover:bg-white hover:shadow-elev transition-all"
                  >
                    <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
                      <r.Icon size={18} className="text-[var(--color-secondary)]" />
                    </div>
                    <h4 className="mt-4 font-semibold text-[var(--color-primary)]">
                      {r.h4}
                    </h4>
                    <p className="mt-1 text-sm text-[var(--color-ink)]/75 leading-relaxed">
                      {r.body}
                    </p>
                  </div>
                ))}
              </div>
            </AboutAnimated>
          </div>
        </section>

        {/* Industries We Serve */}
        <Industries />

        {/* Team */}
        <section className="py-16 md:py-24 bg-[var(--color-tertiary)]">
          <div className="container-x">
            <div className="max-w-3xl">
              <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                Our Team
              </span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
                The Experts Behind{" "}
                <span className="italic text-[var(--color-secondary-dark)]">
                  Finvvritti
                </span>
              </h2>
            </div>
            <TeamSection />
            <div className="mt-10 text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-light)] transition-colors text-sm"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Let's Work Together */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-x">
            <div className="rounded-3xl gradient-primary p-8 md:p-14 text-center text-white relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--color-secondary)]/25 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[var(--color-secondary)]/15 blur-3xl" />
              <div className="relative max-w-3xl mx-auto">
                <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary)] font-semibold uppercase">
                  Get In Touch
                </span>
                <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Let's{" "}
                  <span className="text-gradient-gold">Work Together</span>
                </h2>
                <p className="mt-5 text-white/85 text-base md:text-lg">
                  Ready to gain clarity over your finances and plan your next
                  steps with confidence?
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-secondary-light)] transition-colors"
                >
                  Talk to an Advisor
                </a>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
