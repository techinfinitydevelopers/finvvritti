"use client";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, FileCheck2, Star } from "lucide-react";

const services = [
  { title: "Audit & Assurance", blurb: "Statutory, internal and tax audits with full regulatory compliance and zero tolerance for errors." },
  { title: "GST & Tax Advisory", blurb: "End-to-end GST filing, income tax planning, TDS management and departmental representation." },
  { title: "CFO Services", blurb: "On-demand CFO-level guidance on strategy, capital allocation, and sustainable growth." },
  { title: "Company Secretarial", blurb: "ROC filings, board governance, ESOP structuring and full statutory secretarial compliance." },
  { title: "Valuation Advisory", blurb: "Business, ESOP and intangible asset valuations for investors, funding rounds, and exits." },
  { title: "Debt Advisory", blurb: "Working capital optimisation, structured finance and debt restructuring for growth." },
];

const bullets = [
  "Accurate financial reporting",
  "Audit-ready books at all times",
  "Practical, plain-English advice",
  "GST & Income Tax compliance",
  "Monthly MIS & performance reviews",
  "100% on-time filings, zero penalties",
  "ESOP structuring & valuation",
  "Confidential, secure engagements",
];

const stats = [
  { num: "300+", label: "Businesses Scaled" },
  { num: "15+", label: "Years Experience" },
  { num: "1.2K+", label: "Projects Done" },
  { num: "100%", label: "On-Time Filing" },
];

const nav = ["Services", "About Us", "Case Studies", "FAQs", "Contact"];

export function FontPreviewTemplate({
  fontName,
  optionNum,
  totalOptions = 10,
}: {
  fontName: string;
  optionNum: number;
  totalOptions?: number;
}) {
  const fd = "var(--fd)";
  const fb = "var(--fb)";

  return (
    <div style={{ fontFamily: `${fb}, system-ui, sans-serif`, color: "#0F172A", background: "#fff", minHeight: "100vh" }}>

      {/* Top bar */}
      <div style={{ background: "#0A2540", color: "#D4A24C", textAlign: "center", padding: "9px 24px", fontFamily: fb, fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em" }}>
        OPTION {optionNum} / {totalOptions} &nbsp;—&nbsp; {fontName.toUpperCase()}
      </div>

      {/* Nav */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px", position: "sticky", top: 0, zIndex: 50 }}>
        <span style={{ fontFamily: fd, fontSize: "26px", fontWeight: 700, color: "#0A2540", letterSpacing: "-0.02em" }}>Finvvritti</span>
        <div style={{ display: "flex", gap: "28px" }}>
          {nav.map(n => (
            <span key={n} style={{ fontFamily: fb, fontSize: "13px", fontWeight: 500, color: "#0A2540", cursor: "pointer", letterSpacing: "0.01em" }}>{n}</span>
          ))}
        </div>
        <a href="#" style={{ background: "#0A2540", color: "#D4A24C", padding: "10px 22px", borderRadius: "8px", fontFamily: fb, fontWeight: 700, fontSize: "13px", textDecoration: "none", letterSpacing: "0.02em" }}>
          Book Consultation
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: "#0A2540", padding: "100px 32px 96px", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: -120, right: -100, width: "500px", height: "500px", borderRadius: "50%", background: "rgba(212,162,76,0.06)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -60, width: "360px", height: "360px", borderRadius: "50%", background: "rgba(212,162,76,0.04)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1140px", margin: "0 auto", display: "grid", gridTemplateColumns: "58fr 42fr", gap: "72px", alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(212,162,76,0.35)", borderRadius: "6px", padding: "7px 16px", marginBottom: "32px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4A24C", display: "inline-block" }} />
              <span style={{ fontFamily: fb, fontSize: "11px", color: "#D4A24C", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                CA &amp; CS Financial Advisory
              </span>
            </div>

            <h1 style={{ fontFamily: fd, fontSize: "clamp(54px, 7vw, 92px)", fontWeight: 900, lineHeight: 0.97, color: "#fff", letterSpacing: "-0.025em", margin: 0 }}>
              Your Finance,
              <br />
              <em style={{ fontStyle: "italic", color: "#D4A24C" }}>Our Responsibility</em>
            </h1>

            <p style={{ fontFamily: fb, fontSize: "17px", color: "rgba(255,255,255,0.65)", marginTop: "28px", lineHeight: 1.8, maxWidth: "520px", fontWeight: 400 }}>
              One-stop solution for finance, compliance &amp; growth. CA &amp; CS expertise across auditing, taxation, debt advisory, CFO services, and valuation advisory.
            </p>

            <div style={{ display: "flex", gap: "14px", marginTop: "44px", flexWrap: "wrap" }}>
              <a href="#" style={{ background: "#D4A24C", color: "#0A2540", padding: "16px 34px", borderRadius: "8px", fontFamily: fb, fontWeight: 700, fontSize: "14px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "9px", letterSpacing: "0.02em" }}>
                Book Free Consultation <ArrowRight size={16} />
              </a>
              <a href="#" style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.85)", padding: "16px 34px", borderRadius: "8px", fontFamily: fb, fontWeight: 500, fontSize: "14px", textDecoration: "none" }}>
                Learn More
              </a>
            </div>

            <div style={{ display: "flex", gap: "40px", marginTop: "56px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {[{ Icon: ShieldCheck, label: "Compliance" }, { Icon: FileCheck2, label: "Accuracy" }, { Icon: TrendingUp, label: "Growth" }].map(({ Icon, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "9px", color: "rgba(255,255,255,0.6)", fontFamily: fb, fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em" }}>
                  <Icon size={16} color="#D4A24C" /> {label}
                </div>
              ))}
            </div>
          </div>

          {/* Metrics panel */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "40px 36px", display: "flex", flexDirection: "column", gap: "0" }}>
            <div style={{ marginBottom: "32px" }}>
              <p style={{ fontFamily: fb, fontSize: "11px", color: "rgba(255,255,255,0.4)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>Client Compliance Score</p>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", marginTop: "8px" }}>
                <span style={{ fontFamily: fd, fontSize: "80px", fontWeight: 900, color: "#D4A24C", lineHeight: 0.9, letterSpacing: "-0.03em" }}>98</span>
                <span style={{ fontFamily: fd, fontSize: "36px", fontWeight: 700, color: "rgba(212,162,76,0.45)", marginBottom: "6px" }}>%</span>
              </div>
              <p style={{ fontFamily: fb, fontSize: "12px", color: "rgba(255,255,255,0.3)", marginTop: "6px" }}>Average across all active engagements</p>
            </div>

            {[["GST & Tax Filings", 100], ["Financial Reporting", 96], ["Audit Readiness", 98]].map(([k, v]) => (
              <div key={k} style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "16px", paddingBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontFamily: fb, fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{k}</span>
                  <span style={{ fontFamily: fd, fontSize: "18px", fontWeight: 700, color: "#D4A24C" }}>{v}%</span>
                </div>
                <div style={{ height: "3px", background: "rgba(255,255,255,0.06)", borderRadius: "999px" }}>
                  <div style={{ height: "100%", width: `${v}%`, background: "linear-gradient(90deg, #D4A24C, #B0832F)", borderRadius: "999px" }} />
                </div>
              </div>
            ))}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "16px" }}>
              {stats.map(s => (
                <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", borderRadius: "10px", padding: "14px 16px", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <p style={{ fontFamily: fd, fontSize: "26px", fontWeight: 900, color: "#D4A24C", letterSpacing: "-0.02em" }}>{s.num}</p>
                  <p style={{ fontFamily: fb, fontSize: "11px", color: "rgba(255,255,255,0.38)", marginTop: "4px", fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: "#F8F5EE", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px" }}>
            <div>
              <span style={{ fontFamily: fb, fontSize: "11px", color: "#B0832F", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Our Services</span>
              <h2 style={{ fontFamily: fd, fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, color: "#0A2540", marginTop: "10px", lineHeight: 0.97, letterSpacing: "-0.025em" }}>
                End-to-End <em style={{ fontStyle: "italic", color: "#B0832F" }}>Advisory</em>
              </h2>
            </div>
            <a href="#" style={{ fontFamily: fb, fontSize: "13px", fontWeight: 700, color: "#0A2540", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", borderBottom: "2px solid #0A2540", paddingBottom: "2px" }}>
              All Services <ArrowRight size={14} />
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {services.map((s, i) => (
              <div key={s.title} style={{ background: "#fff", borderRadius: "16px", border: "1px solid #E5E7EB", padding: "36px 30px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: i < 3 ? "linear-gradient(90deg, #D4A24C, #B0832F)" : "transparent" }} />
                <div style={{ width: "42px", height: "42px", background: "#0A2540", borderRadius: "10px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: fd, fontSize: "18px", fontWeight: 900, color: "#D4A24C" }}>{i + 1}</span>
                </div>
                <h3 style={{ fontFamily: fd, fontSize: "22px", fontWeight: 800, color: "#0A2540", lineHeight: 1.15, letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p style={{ fontFamily: fb, fontSize: "14px", color: "#64748B", marginTop: "10px", lineHeight: 1.72, fontWeight: 400 }}>{s.blurb}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: fb, fontSize: "13px", fontWeight: 700, color: "#B0832F", marginTop: "20px" }}>
                  Learn more <ArrowRight size={13} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUE + TESTIMONIAL ── */}
      <section style={{ background: "#fff", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "start" }}>
          <div>
            <span style={{ fontFamily: fb, fontSize: "11px", color: "#B0832F", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>Our Core Value</span>
            <h2 style={{ fontFamily: fd, fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, color: "#0A2540", marginTop: "12px", lineHeight: 1.0, letterSpacing: "-0.025em" }}>
              Where Accuracy <br /><em style={{ fontStyle: "italic", color: "#B0832F" }}>Meets Advisory</em>
            </h2>
            <p style={{ fontFamily: fb, fontSize: "15px", color: "rgba(15,23,42,0.65)", marginTop: "20px", lineHeight: 1.85, fontWeight: 400 }}>
              At FINVVRITTI, we help businesses understand their numbers and use them to make better decisions. Beyond accounting — accurate financial reporting and practical advice that brings clarity, control, and confidence.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "30px" }}>
              {bullets.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontFamily: fb, fontSize: "13px", color: "rgba(15,23,42,0.75)", fontWeight: 500 }}>
                  <CheckCircle2 size={15} color="#B0832F" style={{ marginTop: "1px", flexShrink: 0 }} /> {b}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ background: "#0A2540", borderRadius: "20px", padding: "48px", marginBottom: "20px" }}>
              <div style={{ display: "flex", gap: "3px", marginBottom: "20px" }}>
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} color="#D4A24C" fill="#D4A24C" />)}
              </div>
              <p style={{ fontFamily: fd, fontSize: "22px", fontWeight: 700, color: "rgba(255,255,255,0.88)", fontStyle: "italic", lineHeight: 1.6, letterSpacing: "-0.01em" }}>
                &ldquo;Exceptional service, great value and surprising insights — they completely transformed how we manage our finances.&rdquo;
              </p>
              <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "linear-gradient(135deg, #D4A24C, #8B5E20)", flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: fd, fontSize: "20px", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>Rajat Mehta</p>
                  <p style={{ fontFamily: fb, fontSize: "12px", color: "rgba(255,255,255,0.42)", marginTop: "3px", fontWeight: 500 }}>CEO, Zedcom Global</p>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[{ q: "Kamal K. Advani", r: "CEO, KK & Co", t: "Great learning experience working with Finvvritti." },
                { q: "A. Raghuvanshi", r: "CEO, VivaLife Pharma", t: "Service oriented, responsive, terrific value." }].map(card => (
                <div key={card.q} style={{ background: "#F8F5EE", borderRadius: "14px", border: "1px solid #E5E7EB", padding: "22px 20px" }}>
                  <p style={{ fontFamily: fb, fontSize: "13px", color: "rgba(15,23,42,0.7)", lineHeight: 1.65, fontWeight: 400 }}>&ldquo;{card.t}&rdquo;</p>
                  <p style={{ fontFamily: fd, fontSize: "15px", fontWeight: 800, color: "#0A2540", marginTop: "14px" }}>{card.q}</p>
                  <p style={{ fontFamily: fb, fontSize: "11px", color: "#64748B", marginTop: "2px" }}>{card.r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#0A2540", padding: "100px 32px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "60px", alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: fb, fontSize: "11px", color: "#D4A24C", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", display: "block", marginBottom: "16px" }}>Get In Touch</span>
            <h2 style={{ fontFamily: fd, fontSize: "clamp(38px, 5vw, 68px)", fontWeight: 900, color: "#fff", lineHeight: 0.97, letterSpacing: "-0.025em" }}>
              Take Your Business <br />to The <em style={{ fontStyle: "italic", color: "#D4A24C" }}>Next Level</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", flexShrink: 0 }}>
            <a href="#" style={{ background: "#D4A24C", color: "#0A2540", padding: "18px 38px", borderRadius: "10px", fontFamily: fb, fontWeight: 700, fontSize: "14px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", letterSpacing: "0.02em" }}>
              Book Free Consultation <ArrowRight size={16} />
            </a>
            <a href="#" style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", padding: "16px 38px", borderRadius: "10px", fontFamily: fb, fontWeight: 500, fontSize: "14px", textDecoration: "none", textAlign: "center" }}>
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ── Font nav ── */}
      <div style={{ background: "#F8F5EE", padding: "28px 32px", borderTop: "1px solid #E5E7EB" }}>
        <p style={{ fontFamily: fb, fontSize: "12px", color: "#64748B", textAlign: "center", marginBottom: "14px" }}>
          <strong style={{ color: "#0A2540" }}>Option {optionNum}:</strong> &nbsp;{fontName}
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
          {Array.from({ length: totalOptions }, (_, i) => i + 1).map(n => (
            <a key={n} href={`/font-preview/option-${n}`}
              style={{ fontFamily: fb, fontSize: "12px", color: n === optionNum ? "#fff" : "#0A2540", fontWeight: 600, textDecoration: "none", padding: "5px 12px", borderRadius: "6px", background: n === optionNum ? "#0A2540" : "transparent", border: "1px solid #E5E7EB" }}>
              {n}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
