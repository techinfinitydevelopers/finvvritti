"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { ArrowRight, Briefcase, GraduationCap, BarChart3, CheckCircle2, Upload } from "lucide-react";

const openings = [
  {
    Icon: BarChart3,
    title: "CFO Partner",
    location: "Mumbai",
    type: "Full-Time / Fractional",
    desc: "Lead financial strategy for SMEs and startups as a Virtual CFO Partner. Bring your CA/MBA expertise to help businesses grow, raise capital, and stay compliant.",
    requirements: [
      "CA / MBA Finance with 10+ years experience",
      "Strong background in financial planning & analysis",
      "Experience with SMEs, startups, or advisory firms",
      "Excellent client communication and leadership skills",
    ],
  },
  {
    Icon: GraduationCap,
    title: "Industrial Trainee",
    location: "Mumbai",
    type: "Internship / Articleship",
    desc: "Are you an aspiring CA looking for hands-on experience? Join our team, shape your future with real client work across tax, audit, compliance, and advisory.",
    requirements: [
      "CA Inter cleared or pursuing final",
      "Eagerness to learn and take ownership",
      "Good knowledge of accounting and tax basics",
      "Strong attention to detail",
    ],
  },
  {
    Icon: Briefcase,
    title: "Accounts Executive",
    location: "Mumbai",
    type: "Full-Time",
    desc: "Join our finance team and manage day-to-day bookkeeping, GST filings, TDS compliance, and client reporting. Grow your accounting career with us.",
    requirements: [
      "B.Com / M.Com or equivalent qualification",
      "1–3 years of accounting experience",
      "Proficiency in Tally, QuickBooks, or Zoho Books",
      "Familiarity with GST and TDS compliance",
    ],
  },
];

const culture = [
  { title: "Client-First Mindset", body: "Every decision we make is guided by what's best for our clients. You'll work on real problems that matter." },
  { title: "Learning & Growth", body: "Continuous upskilling through internal training, client exposure, and mentorship from senior CAs and CSs." },
  { title: "Ownership Culture", body: "We trust our people. You'll take on responsibility early and be rewarded for results, not just effort." },
  { title: "Collaborative Team", body: "A tight-knit, supportive team where everyone's voice matters and good ideas come from all levels." },
  { title: "Work-Life Balance", body: "Structured processes and clear boundaries so you can do your best work without burning out." },
  { title: "Impactful Work", body: "You'll directly contribute to the financial health and growth of 200+ businesses across India." },
];

export default function CareersPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", city: "",
    experience: "", prevTitle: "", prevEmployer: "",
    role: "", linkedin: "", cover: "",
  });
  const [resumeName, setResumeName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.prevEmployer || "N/A",
          message: `Career Application\n\nRole: ${form.role}\nCity: ${form.city}\nExperience: ${form.experience} years\nPrevious Title: ${form.prevTitle}\nPrevious Employer: ${form.prevEmployer}\nLinkedIn: ${form.linkedin}\n\nCover Letter:\n${form.cover}`,
          source: "Careers Page",
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Careers"
          title="Evolve Your"
          highlight="Career With Us"
          description="At Finvvritti, people come first. Join a team of CAs, CSs, and finance professionals building India's most trusted advisory practice."
          image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Finvvritti team working together"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Careers" },
          ]}
        />

        {/* Culture Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-x">
            <div className="max-w-3xl">
              <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                Why Finvvritti
              </span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
                Think out of the box.{" "}
                <span className="italic text-[var(--color-secondary-dark)]">Grow with purpose.</span>
              </h2>
              <p className="mt-4 text-[var(--color-ink)]/75 text-base md:text-lg max-w-2xl">
                Our CAs, CSs, and advisors are the backbone of everything we do. We invest in our people because their growth directly drives our clients' success.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {culture.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl bg-[var(--color-tertiary)] border border-[var(--color-line)] p-6 md:p-7 hover:shadow-elev-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-10 w-10 rounded-lg gradient-gold flex items-center justify-center">
                    <CheckCircle2 size={18} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-[var(--color-primary)] leading-snug">{c.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-ink)]/75 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-16 md:py-24 bg-[var(--color-tertiary)]">
          <div className="container-x">
            <div className="max-w-3xl mb-12">
              <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                Current Openings
              </span>
              <h2 className="font-display mt-3 text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] leading-tight">
                Open{" "}
                <span className="italic text-[var(--color-secondary-dark)]">Positions</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {openings.map((job) => (
                <div
                  key={job.title}
                  className="rounded-2xl bg-white border border-[var(--color-line)] p-6 md:p-7 hover:shadow-elev-lg hover:-translate-y-0.5 transition-all flex flex-col"
                >
                  <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center">
                    <job.Icon size={22} className="text-[var(--color-secondary)]" />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-[var(--color-primary)]">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-tertiary)] border border-[var(--color-line)] text-[var(--color-ink)]/70">{job.location}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-tertiary)] border border-[var(--color-line)] text-[var(--color-ink)]/70">{job.type}</span>
                  </div>
                  <p className="mt-4 text-sm text-[var(--color-ink)]/75 leading-relaxed flex-1">{job.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {job.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-xs text-[var(--color-ink)]/70">
                        <CheckCircle2 size={13} className="mt-0.5 text-[var(--color-secondary-dark)] shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#apply"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary-dark)] transition-colors"
                  >
                    Apply Now <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-16 md:py-24 bg-white">
          <div className="container-x">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase">
                  Apply Now
                </span>
                <h2 className="font-display mt-3 text-3xl md:text-4xl text-[var(--color-primary)] leading-tight">
                  Ready to take on a{" "}
                  <span className="italic text-[var(--color-secondary-dark)]">new role?</span>
                </h2>
                <p className="mt-3 text-[var(--color-ink)]/70">
                  Fill in the form below and our team will reach out within 2 business days.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-3xl bg-[var(--color-tertiary)] border border-[var(--color-line)] p-10 text-center">
                  <CheckCircle2 size={48} className="mx-auto text-[var(--color-secondary-dark)] mb-4" />
                  <h3 className="font-display text-2xl text-[var(--color-primary)]">Application Submitted!</h3>
                  <p className="mt-3 text-[var(--color-ink)]/70">Thank you for your interest. We&apos;ll review your application and get back to you within 2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-3xl bg-[var(--color-tertiary)] border border-[var(--color-line)] p-6 md:p-10 space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Full Name *" value={form.name} onChange={v => setForm({...form, name: v})} placeholder="Your full name" required />
                    <Field label="Email Address *" type="email" value={form.email} onChange={v => setForm({...form, email: v})} placeholder="you@example.com" required />
                    <Field label="Phone Number *" type="tel" value={form.phone} onChange={v => setForm({...form, phone: v})} placeholder="+91 98765 43210" required />
                    <Field label="City" value={form.city} onChange={v => setForm({...form, city: v})} placeholder="Mumbai, Pune, etc." />
                    <Field label="Years of Experience" type="number" value={form.experience} onChange={v => setForm({...form, experience: v})} placeholder="e.g. 3" />
                    <Field label="Previous Job Title" value={form.prevTitle} onChange={v => setForm({...form, prevTitle: v})} placeholder="e.g. Senior Accountant" />
                    <Field label="Previous Employer" value={form.prevEmployer} onChange={v => setForm({...form, prevEmployer: v})} placeholder="Company name" />
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                        Role of Interest
                      </label>
                      <select
                        value={form.role}
                        onChange={e => setForm({...form, role: e.target.value})}
                        className="w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
                      >
                        <option value="">Select a role</option>
                        <option>CFO Partner</option>
                        <option>Industrial Trainee</option>
                        <option>Accounts Executive</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <Field label="LinkedIn Profile" value={form.linkedin} onChange={v => setForm({...form, linkedin: v})} placeholder="https://linkedin.com/in/yourprofile" />

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                      Resume / CV
                    </label>
                    <label className="flex items-center gap-3 w-full rounded-xl border border-dashed border-[var(--color-line)] bg-white px-4 py-4 cursor-pointer hover:border-[var(--color-primary)]/40 transition-colors">
                      <Upload size={18} className="text-[var(--color-secondary-dark)] shrink-0" />
                      <span className="text-sm text-[var(--color-ink)]/60">{resumeName || "Upload your resume (PDF, DOC)"}</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={e => setResumeName(e.target.files?.[0]?.name || "")}
                      />
                    </label>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      value={form.cover}
                      onChange={e => setForm({...form, cover: e.target.value})}
                      rows={5}
                      placeholder="Tell us why you want to join Finvvritti and what you bring to the team..."
                      className="w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-light)] transition-colors"
                  >
                    Submit Application <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-14 md:py-20 bg-[var(--color-tertiary)] border-t border-[var(--color-line)]">
          <div className="container-x text-center">
            <p className="text-xs md:text-sm tracking-[0.2em] text-[var(--color-secondary-dark)] font-semibold uppercase mb-3">
              Blueprint Your Financial Future
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-[var(--color-primary)]">
              Trusted by <span className="text-[var(--color-secondary-dark)]">200+</span> organisations across India
            </h2>
            <p className="mt-3 text-[var(--color-ink)]/70 max-w-xl mx-auto">
              Be part of a team that makes a real difference to businesses every day.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text", required = false,
}: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
      />
    </div>
  );
}
