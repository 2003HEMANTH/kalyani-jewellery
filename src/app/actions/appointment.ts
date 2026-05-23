'use server';

import { Resend } from 'resend';

interface AppointmentData {
  name: string;
  phone: string;
  email?: string;
  date?: string;
  interest?: string;
  message?: string;
}

export async function sendAppointmentEmail(data: AppointmentData) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.NOTIFICATION_EMAIL_TO || 'harshadc699@gmail.com';

  if (!apiKey || apiKey === 'your_resend_api_key_here') {
    console.error('Resend API key is not configured.');
    return { success: false, error: 'Resend API key is not configured in .env.local' };
  }

  const resend = new Resend(apiKey);
  const { name, phone, email, date, interest, message } = data;

  if (!name || !phone) {
    return { success: false, error: 'Name and Phone Number are required fields.' };
  }

  // Format the date beautifully for the email
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Flexible / To Arrange';

  // Luxe HTML email design matching the brand's aesthetic
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Atelier Appointment Request</title>
        <style>
          body {
            font-family: 'Playfair Display', 'Georgia', serif;
            background-color: #121212;
            color: #f5f5f7;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: #1a1a1a;
            border: 1px solid #c5a880;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          }
          .header {
            background: linear-gradient(135deg, #1f1c18, #3e3224);
            padding: 40px;
            text-align: center;
            border-bottom: 1px solid #c5a880;
          }
          .logo {
            font-size: 24px;
            letter-spacing: 0.3em;
            color: #d4af37;
            text-transform: uppercase;
            margin-bottom: 8px;
            font-weight: 300;
          }
          .subtitle {
            font-size: 10px;
            letter-spacing: 0.25em;
            color: #a3907a;
            text-transform: uppercase;
          }
          .content {
            padding: 40px;
          }
          .title {
            font-size: 20px;
            color: #d4af37;
            margin-bottom: 24px;
            font-weight: 400;
            text-align: center;
            letter-spacing: 0.05em;
          }
          .detail-row {
            margin-bottom: 20px;
            border-bottom: 1px solid #2a2a2a;
            padding-bottom: 15px;
          }
          .label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            color: #a3907a;
            margin-bottom: 6px;
          }
          .value {
            font-size: 16px;
            color: #e5e5e7;
            font-weight: 400;
          }
          .message-box {
            background-color: #222222;
            border-left: 3px solid #d4af37;
            padding: 15px;
            margin-top: 8px;
            border-radius: 8px;
            font-style: italic;
            font-family: 'Georgia', serif;
            color: #d1d1d6;
            line-height: 1.6;
          }
          .footer {
            background: #151515;
            padding: 30px;
            text-align: center;
            font-size: 11px;
            letter-spacing: 0.15em;
            color: #636366;
            border-top: 1px solid #2a2a2a;
          }
          .footer-logo {
            color: #a3907a;
            margin-bottom: 10px;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">Kalyani Jewellery</div>
            <div class="subtitle">Atelier Bengaluru</div>
          </div>
          <div class="content">
            <div class="title">✦ Private Consultation Request ✦</div>
            
            <div class="detail-row">
              <div class="label">Guest of Honour</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="detail-row">
              <div class="label">Phone Contact</div>
              <div class="value"><a href="tel:${phone}" style="color: #d4af37; text-decoration: none;">${phone}</a></div>
            </div>
            
            <div class="detail-row">
              <div class="label">Email Address</div>
              <div class="value">${email ? `<a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a>` : 'Not Provided'}</div>
            </div>
            
            <div class="detail-row">
              <div class="label">Preferred Date</div>
              <div class="value">${formattedDate}</div>
            </div>
            
            <div class="detail-row">
              <div class="label">Bespoke Interest</div>
              <div class="value">${interest || 'Fine Jewellery'}</div>
            </div>
            
            ${
              message
                ? `
            <div class="detail-row" style="border-bottom: none; margin-bottom: 0; padding-bottom: 0;">
              <div class="label">Patron Message</div>
              <div class="message-box">"${message}"</div>
            </div>
            `
                : ''
            }
          </div>
          <div class="footer">
            <div class="footer-logo">KALYANI JEWELLERY</div>
            <div>This is an automated notification from your website atelier.</div>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const { data: responseData, error } = await resend.emails.send({
      from: 'Kalyani Atelier <onboarding@resend.dev>',
      to: toEmail,
      subject: `✦ VIP Appointment Request - ${name} ✦`,
      html: htmlContent,
      replyTo: email || undefined,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data: responseData };
  } catch (err: any) {
    console.error('Email send exception:', err);
    return { success: false, error: err.message || 'An unexpected error occurred.' };
  }
}
