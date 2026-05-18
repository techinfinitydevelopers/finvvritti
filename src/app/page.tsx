import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Process from "@/components/Process";
import CoreValue from "@/components/CoreValue";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import OurServices from "@/components/OurServices";
import TrustedBy from "@/components/TrustedBy";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import YoutubeShorts from "@/components/YoutubeShorts";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Process />
        <CoreValue />
        <WhyChooseUsSection />
        <OurServices />
        <TrustedBy />
        <YoutubeShorts />
        <CaseStudy />
        <Testimonials />
        <FAQ />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
