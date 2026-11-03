import { NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/auth';
import { sendContactEmails, isResendConfigured } from '@/lib/notifications';

export async function POST(request: Request) {
  try {
    // Rate limit contact submissions: 5 requests per 10 minutes per IP
    const forwarded = request.headers.get('x-forwarded-for');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';
    const rateLimitKey = `contact_${clientIp}`;

    const rateLimit = checkRateLimit(rateLimitKey, 5, 10 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { message: 'Too many inquiries submitted from this connection. Please wait a few minutes before trying again.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, company, projectType, phone, hp_field } = body;

    // Honeypot spam protection: bots fill hidden fields, humans do not
    if (hp_field) {
      return NextResponse.json({ message: 'Inquiry processed successfully' });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
    }

    // Sanitize and limit lengths to prevent Discord embed rejection
    const safeName = String(name).trim().slice(0, 100);
    const safeEmail = String(email).trim().slice(0, 100);
    const safeMessage = String(message).trim().slice(0, 1000);
    const safeCompany = company ? String(company).trim().slice(0, 100) : undefined;
    const safePhone = phone ? String(phone).trim().slice(0, 30) : undefined;
    const safeProjectType = projectType ? String(projectType).trim().slice(0, 100) : undefined;

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    const resendConfigured = isResendConfigured();

    // When no notification channel is configured at all, do not falsely
    // claim successful delivery.
    if (!webhookUrl && !resendConfigured) {
      console.warn('[Contact API] DISCORD_WEBHOOK_URL and RESEND_API_KEY are both unconfigured.');
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json(
          { 
            message: 'Inquiry dispatch service is temporarily unconfigured. Please email us directly at contact@integralgroups.in.',
            delivered: false
          }, 
          { status: 503 }
        );
      }

      console.info('[Contact Inquiry Captured (Dev Local Mode)]', {
        name: safeName,
        email: safeEmail,
        company: safeCompany,
        projectType: safeProjectType,
        phone: safePhone,
      });

      return NextResponse.json({ 
        message: 'Inquiry recorded in local development mode (external delivery unconfigured).',
        delivered: false,
        devMode: true
      });
    }

    // Fire every configured channel; deliver the request as long as at
    // least one succeeds. Email failures never fail the request.
    const emailDelivery = resendConfigured
      ? await sendContactEmails({
          name: safeName,
          email: safeEmail,
          phone: safePhone,
          company: safeCompany,
          projectType: safeProjectType,
          message: safeMessage,
        })
      : { ownerSent: false, replySent: false };

    console.info('[Contact API channel status]', {
      emailOwner: emailDelivery.ownerSent,
      emailReply: emailDelivery.replySent,
    });

    if (!webhookUrl) {
      // Email-only mode
      if (emailDelivery.ownerSent || emailDelivery.replySent) {
        return NextResponse.json({ 
          message: 'Inquiry received successfully. Our team will contact you shortly.',
          delivered: true 
        });
      }

      console.error('[Contact API] Resend delivery failed.');
      return NextResponse.json(
        { 
          message: 'Unable to deliver inquiry to notification service. Please email us directly at contact@integralgroups.in.',
          delivered: false
        }, 
        { status: 502 }
      );
    }

    // Build fields array for the embed
    const fields = [
      { name: '👤 Name', value: safeName, inline: true },
      { name: '✉️ Email', value: safeEmail, inline: true },
    ];

    if (safePhone) {
      fields.push({ name: '📞 Phone', value: safePhone, inline: true });
    }
    if (safeCompany) {
      fields.push({ name: '🏢 Company', value: safeCompany, inline: true });
    }
    if (safeProjectType) {
      fields.push({ name: '🛠️ Project Type', value: safeProjectType, inline: true });
    }

    fields.push({ name: '📝 Message', value: safeMessage, inline: false });

    // Send payload to Discord Webhook
    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [
          {
            title: '✨ New Contact Form Submission',
            color: 8421504,
            fields: fields,
            timestamp: new Date().toISOString(),
            footer: {
              text: 'Integral Labs Inquiry System',
            },
          },
        ],
      }),
    });

    if (discordResponse.ok) {
      return NextResponse.json({ 
        message: 'Inquiry received successfully. Our team will contact you shortly.',
        delivered: true,
        email: {
          owner: emailDelivery.ownerSent,
          reply: emailDelivery.replySent,
        },
      });
    } 

    // Discord failed — succeed if the email channel delivered anything.
    if (emailDelivery.ownerSent || emailDelivery.replySent) {
      return NextResponse.json({ 
        message: 'Inquiry received successfully. Our team will contact you shortly.',
        delivered: true,
        email: {
          owner: emailDelivery.ownerSent,
          reply: emailDelivery.replySent,
        },
      });
    }

    console.error('Discord webhook dispatch returned status:', discordResponse.status);
    return NextResponse.json(
      { 
        message: 'Unable to deliver inquiry to notification service. Please email us directly at contact@integralgroups.in.',
        delivered: false
      }, 
      { status: 502 }
    );
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}


