/**
 * Resend email delivery for contact enquiries.
 *
 * Provides two complementary channels on top of the Discord webhook:
 *  1. Owner notification to CONTACT_EMAIL_TO (or the site contact email).
 *  2. Auto-reply confirmation to the visitor.
 *
 * Strictly env-gated: when RESEND_API_KEY is absent everything becomes a
 * no-op returning `sent: false` — the contact API then falls back to the
 * legacy Discord behaviour. Emails are sent via plain fetch (no SDK).
 */

const RESEND_API = "https://api.resend.com/emails";

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  message: string;
}

interface EmailResult {
  id?: string;
}

async function sendResendEmail(
  from: string,
  to: string,
  subject: string,
  html: string,
  apiKey: string,
  replyTo?: string
): Promise<EmailResult | null> {
  try {
    const res = await fetch(RESEND_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
      // Don't hang the response on slow email delivery
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error("[Resend] send failed:", res.status, await res.text().catch(() => ""));
      return null;
    }

    const data = (await res.json()) as EmailResult;
    return data;
  } catch (error) {
    console.error("[Resend] dispatch error:", error);
    return null;
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function isResendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

/**
 * Sends the owner notification + visitor auto-reply.
 * Returns per-channel success flags; failures never throw.
 */
export async function sendContactEmails(payload: ContactPayload): Promise<{
  ownerSent: boolean;
  replySent: boolean;
}> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { ownerSent: false, replySent: false };
  }

  const ownerTo = process.env.CONTACT_EMAIL_TO || "contact@integralgroups.in";
  const from =
    process.env.EMAIL_FROM || "Integral Labs <onboarding@resend.dev>";

  const safe = {
    name: escapeHtml(payload.name),
    email: escapeHtml(payload.email),
    phone: payload.phone ? escapeHtml(payload.phone) : "—",
    company: payload.company ? escapeHtml(payload.company) : "—",
    projectType: payload.projectType ? escapeHtml(payload.projectType) : "—",
    message: escapeHtml(payload.message).replace(/\n/g, "<br/>"),
  };

  /* Owner notification */
  const ownerHtml = `
    <div style="font-family: system-ui, sans-serif; max-width: 640px;">
      <h2 style="color:#0b1120;">New enquiry via integrallabs</h2>
      <table style="border-collapse:collapse;font-size:14px;color:#334155;">
        <tr><td style="padding:6px 12px 6px 0;font-weight:700;">Name</td><td>${safe.name}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:700;">Email</td><td>${safe.email}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:700;">Phone</td><td>${safe.phone}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:700;">Company</td><td>${safe.company}</td></tr>
        <tr><td style="padding:6px 12px 6px 0;font-weight:700;">Project Type</td><td>${safe.projectType}</td></tr>
      </table>
      <div style="margin-top:20px;padding:16px;border-left:3px solid #3b82f6;background:#f8fafc;">
        <strong>Message</strong>
        <p style="margin:8px 0 0;">${safe.message}</p>
      </div>
    </div>`;

  /* Visitor auto-reply */
  const replyHtml = `
    <div style="font-family: system-ui, sans-serif; max-width: 640px; color:#334155;">
      <h2 style="color:#0b1120;">Thanks — your message reached us.</h2>
      <p>Hi ${safe.name},</p>
      <p>The Integral Labs engineering team has received your enquiry and will review it shortly. Expect a response <strong>within 24 hours</strong> with initial architectural feedback and an estimate.</p>
      <p style="margin-top:24px;">Integral Labs<br/>
      <a href="https://labs.integralgroups.in">labs.integralgroups.in</a><br/>
      <span style="color:#64748b;">contact@integralgroups.in</span></p>
    </div>`;

  const [owner, reply] = await Promise.all([
    sendResendEmail(
      from,
      ownerTo,
      `New enquiry: ${payload.name} (${payload.projectType || "General"})`,
      ownerHtml,
      apiKey,
      payload.email
    ),
    sendResendEmail(
      from,
      payload.email,
      "Integral Labs — we received your enquiry",
      replyHtml,
      apiKey
    ),
  ]);

  return { ownerSent: Boolean(owner), replySent: Boolean(reply) };
}
