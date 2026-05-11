import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Finvvritti",
  description:
    "Learn how Finvvritti collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "When you contact us through our website, we collect information you voluntarily provide — such as your name, email address, phone number, company name, and the message you submit via our contact form.",
      "We may also collect non-personal information automatically, including your browser type, IP address, referring URL, and pages visited on our site. This data is used solely to improve website performance and user experience.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use the information you provide to respond to your enquiries, schedule consultations, and deliver the accounting, taxation, compliance, and advisory services you request.",
      "With your consent, we may also send you relevant updates about regulatory changes, new services, or firm news. You may opt out of such communications at any time by writing to us at gagan@finvvritti.com.",
      "We do not use your data for automated decision-making or profiling.",
    ],
  },
  {
    title: "Data Sharing & Disclosure",
    body: [
      "Finvvritti does not sell, rent, or trade your personal information to third parties.",
      "We may share data with trusted service providers (such as email delivery platforms or cloud storage providers) solely to operate our business. These parties are contractually obligated to keep your information confidential.",
      "We may disclose information if required by law, a court order, or regulatory authority — including obligations under the Income Tax Act, Companies Act, or SEBI regulations applicable to our CA & CS practice.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We implement industry-standard technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.",
      "All data transmitted through our website contact form is encrypted in transit. Client financial documents shared during engagements are handled under strict confidentiality obligations consistent with ICAI and ICSI professional standards.",
      "While we take every reasonable precaution, no method of electronic transmission or storage is 100% secure. We encourage you to share sensitive documents only through our secure, agreed communication channels.",
    ],
  },
  {
    title: "Cookies & Tracking",
    body: [
      "Our website may use essential cookies to ensure proper functionality. We do not use advertising or cross-site tracking cookies.",
      "Analytics tools may collect anonymised usage data (such as page views and session duration) to help us improve the website. This data does not identify you personally.",
      "You can control or disable cookies through your browser settings at any time.",
    ],
  },
  {
    title: "Retention of Data",
    body: [
      "We retain personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable laws — including statutory retention periods for financial and tax records.",
      "Enquiry data submitted via the contact form is retained for up to 24 months unless you request deletion earlier.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You have the right to access, correct, or request deletion of your personal information held by us. To exercise any of these rights, please write to us at gagan@finvvritti.com.",
      "We will respond to all legitimate requests within 30 days. In certain cases, we may need to verify your identity before fulfilling a request.",
    ],
  },
  {
    title: "Third-Party Links",
    body: [
      "Our website may contain links to external websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies independently.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The updated policy will be posted on this page with a revised effective date.",
      "We encourage you to review this page periodically. Continued use of our website after any changes constitutes your acceptance of the revised policy.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us:",
      "Email: gagan@finvvritti.com\nPhone: +91 80803 86506\nAddress: Office No 504, D Wing, 5th Floor, Shreepati Jewels, Khattar Galli, Mumbai, Maharashtra 400004",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 gradient-primary overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="container-x relative text-white">
            <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary)] font-semibold uppercase">
              Legal
            </span>
            <h1 className="font-display mt-3 text-[26px] md:text-[38px] leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">
              Effective date: 1 May 2025. This policy explains how Finvvritti
              collects, uses, and safeguards your personal information.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-[var(--color-tertiary)]">
          <div className="container-x max-w-4xl">
            <div className="bg-white rounded-3xl border border-[var(--color-line)] shadow-elev p-8 md:p-12 space-y-10">
              {sections.map((s, i) => (
                <div key={i}>
                  <h2 className="font-display text-xl md:text-2xl text-[var(--color-primary)] mb-3">
                    {i + 1}. {s.title}
                  </h2>
                  <div className="space-y-3">
                    {s.body.map((para, j) => (
                      <p
                        key={j}
                        className="text-[var(--color-ink)]/75 leading-relaxed text-sm md:text-base whitespace-pre-line"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                  {i < sections.length - 1 && (
                    <div className="mt-10 border-b border-[var(--color-line)]" />
                  )}
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
