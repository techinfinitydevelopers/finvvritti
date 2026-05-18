import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Finvvritti | Let's Talk About Your Numbers",
  description:
    "Reach out to Finvvritti for expert CA & CS services, compliance, valuation, and CFO advisory. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Let's Talk About"
          highlight="Your Numbers"
          description="Fill the form and our team will reach out with a clear plan, scope, and timeline. Or contact us directly."
          image="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Contact Finvvritti"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Contact Us" },
          ]}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
