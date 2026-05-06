import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL || "info@finvvritti.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "Finvvritti <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (!resendApiKey) {
      console.warn("[contact] RESEND_API_KEY not set — message:", body);
      return NextResponse.json({
        ok: true,
        warning: "Email not configured. Submission logged on server.",
      });
    }

    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New consultation request — ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:auto;color:#0F172A">
          <h2 style="color:#0A2540;margin:0 0 12px">New consultation request</h2>
          <p style="margin:0 0 16px;color:#64748B">Submitted via finvvritti.com contact form</p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#64748B">Name</td><td style="padding:8px 0">${escape(name)}</td></tr>
            <tr><td style="padding:8px 0;color:#64748B">Email</td><td style="padding:8px 0">${escape(email)}</td></tr>
            <tr><td style="padding:8px 0;color:#64748B">Phone</td><td style="padding:8px 0">${escape(phone || "—")}</td></tr>
            <tr><td style="padding:8px 0;color:#64748B">Company</td><td style="padding:8px 0">${escape(company || "—")}</td></tr>
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
