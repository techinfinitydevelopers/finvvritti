import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL || "gagan@finvvritti.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "Finvvritti <onboarding@resend.dev>";
const SHEET_URL = "https://script.google.com/macros/s/AKfycbxl_S7cI2Tk8tn-_laIprSUooA437KDeuisI-UYdtqf7seADveJqpSiRcMPhf09ySRV/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message, source } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // Send to Google Sheet — get redirect URL first, then POST to it
    (async () => {
      try {
        const payload = JSON.stringify({ name, email, phone, message, source: source || "Unknown" });
        const headers = { "Content-Type": "application/json", "Content-Length": String(Buffer.byteLength(payload)) };

        // Step 1: get the redirect location
        const r1 = await fetch(SHEET_URL, { method: "POST", redirect: "manual", headers, body: payload });
        const location = r1.headers.get("location");

        if (location) {
          // Step 2: POST to the actual script endpoint
          await fetch(location, { method: "POST", headers, body: payload });
        }
      } catch (err) {
        console.warn("[sheet] failed:", err);
      }
    })();

    if (!resendApiKey) {
      console.warn("[contact] RESEND_API_KEY not set — message:", body);
      return NextResponse.json({
        ok: true,
        warning: "Email not configured. Submission logged on server.",
      });
    }

    const resend = new Resend(resendApiKey);

    // 1. Notify admin
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New consultation request - ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:auto;color:#0F172A">
          <h2 style="color:#0A2540;margin:0 0 12px">New consultation request</h2>
          <p style="margin:0 0 16px;color:#64748B">Submitted via finvvritti.com - <strong>${escape(source || "Unknown")}</strong></p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#64748B">Name</td><td style="padding:8px 0">${escape(name)}</td></tr>
            <tr><td style="padding:8px 0;color:#64748B">Email</td><td style="padding:8px 0">${escape(email)}</td></tr>
            <tr><td style="padding:8px 0;color:#64748B">Phone</td><td style="padding:8px 0">${escape(phone || "N/A")}</td></tr>
            <tr><td style="padding:8px 0;color:#64748B">Company</td><td style="padding:8px 0">${escape(company || "N/A")}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#F8F5EE;border-radius:12px">
            <p style="margin:0 0 8px;color:#64748B;font-size:12px;text-transform:uppercase;letter-spacing:1px">Message</p>
            <p style="margin:0;white-space:pre-wrap">${escape(message)}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 2. Send confirmation to user
    await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: `We received your enquiry - Finvvritti`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:auto;color:#0F172A">
          <div style="background:#0A2540;padding:32px 32px 24px;border-radius:16px 16px 0 0;text-align:center">
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px">Finvvritti</h1>
            <p style="margin:6px 0 0;color:#C69B3A;font-size:12px;letter-spacing:2px;text-transform:uppercase">CA & CS Advisory</p>
          </div>
          <div style="background:#ffffff;padding:32px;border:1px solid #E8E4D9;border-top:none;border-radius:0 0 16px 16px">
            <h2 style="margin:0 0 12px;color:#0A2540;font-size:20px">Hi ${escape(name)},</h2>
            <p style="margin:0 0 16px;color:#475569;line-height:1.6">Thank you for reaching out to Finvvritti. We have received your enquiry and our team will get back to you within <strong>1 business day</strong>.</p>
            <div style="background:#F8F5EE;border-radius:12px;padding:16px;margin:20px 0">
              <p style="margin:0 0 8px;color:#64748B;font-size:11px;text-transform:uppercase;letter-spacing:1px">Your submission</p>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:6px 0;color:#64748B;font-size:13px;width:40%">Name</td><td style="padding:6px 0;font-size:13px;color:#0F172A">${escape(name)}</td></tr>
                <tr><td style="padding:6px 0;color:#64748B;font-size:13px">Phone</td><td style="padding:6px 0;font-size:13px;color:#0F172A">${escape(phone || "N/A")}</td></tr>
                <tr><td style="padding:6px 0;color:#64748B;font-size:13px">Source</td><td style="padding:6px 0;font-size:13px;color:#0F172A">${escape(source || "Website")}</td></tr>
              </table>
            </div>
            <p style="margin:16px 0 0;color:#475569;line-height:1.6">If you have any urgent queries, feel free to call us directly at <strong>+91 80803 86506</strong> or reply to this email.</p>
            <div style="margin-top:28px;padding-top:20px;border-top:1px solid #E8E4D9;text-align:center">
              <p style="margin:0;color:#94A3B8;font-size:12px">Finvvritti Advisors &nbsp;|&nbsp; Charni Road, Mumbai 400004</p>
              <p style="margin:4px 0 0;color:#94A3B8;font-size:12px">gagan@finvvritti.com &nbsp;|&nbsp; +91 80803 86506</p>
            </div>
          </div>
        </div>
      `,
    }).catch(() => {}); // don't fail if auto-reply errors

    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

function escape(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
