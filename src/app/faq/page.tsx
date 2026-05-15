import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "FAQs | Finvvritti | Your Questions Answered",
  description:
    "Frequently asked questions about Finvvritti's CA & CS services, compliance, valuation, CFO advisory, and how we work.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="FAQs"
          title="Your Questions,"
          highlight="Answered"
          description="Everything you need to know about working with Finvvritti, our services, and how we support your business."
          image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Finvvritti FAQs"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "FAQs" },
          ]}
        />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
