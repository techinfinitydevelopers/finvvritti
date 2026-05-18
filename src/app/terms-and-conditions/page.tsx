import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Finvvritti Advisors",
  description: "Terms and conditions governing the use of Finvvritti's website and professional advisory services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the Finvvritti website (finvvritti.com) or engaging our professional services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of our website and services immediately.",
  },
  {
    title: "2. Services",
    body: "Finvvritti provides Chartered Accountancy, Company Secretarial, and financial advisory services including but not limited to accounting, bookkeeping, taxation, compliance management, virtual CFO services, business valuation, debt advisory, and business incorporation services. All services are subject to a separate engagement letter or service agreement.",
  },
  {
    title: "3. Professional Advice Disclaimer",
    body: "The information provided on this website is for general informational purposes only and does not constitute professional financial, legal, or tax advice. For advice specific to your situation, please contact our team directly. Finvvritti accepts no liability for actions taken based solely on website content without a formal engagement.",
  },
  {
    title: "4. Confidentiality",
    body: "All information shared with Finvvritti in the course of an engagement is treated as strictly confidential. We do not disclose client information to third parties without prior written consent, except as required by law or regulatory authorities.",
  },
  {
    title: "5. Intellectual Property",
    body: "All content on this website including text, graphics, logos, and service descriptions is the intellectual property of Finvvritti Advisors. Reproduction, distribution, or use of any content without prior written permission is strictly prohibited.",
  },
  {
    title: "6. Limitation of Liability",
    body: "Finvvritti shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or our services beyond what is covered under the specific engagement agreement. Our liability in any case shall not exceed the fees paid by the client for the specific service in question.",
  },
  {
    title: "7. Third-Party Links",
    body: "This website may contain links to third-party websites for reference purposes. Finvvritti does not endorse or take responsibility for the content, privacy practices, or services of any third-party websites.",
  },
  {
    title: "8. Governing Law",
    body: "These Terms and Conditions are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.",
  },
  {
    title: "9. Changes to Terms",
    body: "Finvvritti reserves the right to update these Terms and Conditions at any time without prior notice. Continued use of the website after changes are posted constitutes your acceptance of the revised terms.",
  },
  {
    title: "10. Contact Us",
    body: "For any questions regarding these Terms and Conditions, please contact us at gagan@finvvritti.com or call +91 80803 86506. Our office is located at Office No 504, D Wing, 5th Floor, Shreepati Jewels, Khattar Galli, Charni Road, Mumbai, Maharashtra 400004.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[var(--color-primary)]">
          <div className="container-x max-w-3xl">
            <span className="text-xs tracking-[0.2em] text-[var(--color-secondary)] font-semibold uppercase">
              Legal
            </span>
            <h1 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Terms &{" "}
              <span className="italic text-[var(--color-secondary)]">Conditions</span>
            </h1>
            <p className="mt-4 text-white/70 text-base md:text-lg">
              Last updated: May 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-x max-w-3xl">
            <p className="text-[var(--color-ink)]/75 leading-relaxed mb-10">
              Please read these Terms and Conditions carefully before using the Finvvritti website or engaging our professional services. These terms outline the rules and regulations governing your use of our services.
            </p>

            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="font-display text-xl md:text-2xl text-[var(--color-primary)] mb-3">
                    {s.title}
                  </h2>
                  <p className="text-[var(--color-ink)]/75 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
