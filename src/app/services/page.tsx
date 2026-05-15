import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";

const serviceTestimonials = [
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

export const metadata: Metadata = {
  title: "Services | Finvvritti | CA & CS Advisory",
  description:
    "Endowed with a substantial array of abilities and unwavering dedication to excellence - Finvvritti is your strategic partner across compliance, accounting, advisory, and capital services.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Services"
          title="Services"
          highlight="for Every Stage"
          description="Endowed with a substantial array of abilities and unwavering dedication to excellence, Finvvritti is not merely a counselor; we embody your strategic partner in your financial journey."
          image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Finvvritti CA reviewing financial newspaper and reports"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
        />

        <WhatWeProvideIntro />

        <ServicesGrid />

        <Testimonials items={serviceTestimonials} />

        <CTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function WhatWeProvideIntro() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
            What We Provide
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
            One firm.{" "}
            <span className="italic text-[var(--color-secondary-dark)]">
              Every financial discipline.
            </span>
          </h2>
          <p className="mt-4 text-[var(--color-ink)]/75 text-base md:text-lg max-w-2xl">
            From incorporation and compliance to valuations, audits, and capital
            advisory, our team of CAs and CSs supports every stage of your
            business, in India and abroad.
          </p>
        </div>
        <div className="lg:col-span-5 flex flex-wrap gap-2">
          {[
            "Setup",
            "Compliance",
            "Advisory",
            "Global",
            "Capital",
          ].map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-tertiary)] border border-[var(--color-line)] text-xs font-medium text-[var(--color-primary)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
