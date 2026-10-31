import { NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/auth';

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

    // When the webhook is unavailable, do not falsely claim successful delivery
    if (!webhookUrl) {
      console.warn('[Contact API] DISCORD_WEBHOOK_URL is not configured.');
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
        message: 'Inquiry recorded in local development mode (external webhook unconfigured).',
        delivered: false,
        devMode: true
      });
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
        delivered: true 
      });
    } else {
      console.error('Discord webhook dispatch returned status:', discordResponse.status);
      return NextResponse.json(
        { 
          message: 'Unable to deliver inquiry to notification webhook. Please email us directly at contact@integralgroups.in.',
          delivered: false
        }, 
        { status: 502 }
      );
    }
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}


