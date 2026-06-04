import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message, company, projectType, phone } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.warn('DISCORD_WEBHOOK_URL is not defined in environment variables. Simulating success.');
      return NextResponse.json({ 
        message: 'Inquiry received successfully (simulation mode - DISCORD_WEBHOOK_URL is not set).' 
      });
    }

    // Build fields array for the embed
    const fields = [
      { name: '👤 Name', value: name, inline: true },
      { name: '✉️ Email', value: email, inline: true },
    ];

    if (phone) {
      fields.push({ name: '📞 Phone', value: phone, inline: true });
    }
    if (company) {
      fields.push({ name: '🏢 Company', value: company, inline: true });
    }
    if (projectType) {
      fields.push({ name: '🛠️ Project Type', value: projectType, inline: true });
    }

    fields.push({ name: '📝 Message', value: message, inline: false });

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
            color: 8421504, // Modern sleek gray/purple hybrid: #808080 (can customize)
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
      return NextResponse.json({ message: 'Inquiry sent successfully to Discord' });
    } else {
      const errorText = await discordResponse.text();
      console.error('Discord webhook error response:', errorText);
      return NextResponse.json({ message: 'Failed to send to Discord' }, { status: 502 });
    }
  } catch (error: any) {
    console.error('Contact api error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
