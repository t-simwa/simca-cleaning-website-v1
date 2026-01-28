import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend lazily to avoid build-time errors
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  return new Resend(apiKey)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, location, preferredDate, referralSource, message } = body

    // Validate required fields
    if (!name || !email || !phone || !service || !location || !preferredDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format the preferred date
    const formattedDate = new Date(preferredDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    // Create email HTML with IBM Plex Sans font
    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Your Request</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f5f5f5;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .email-header {
      background: linear-gradient(135deg, #add8e6 0%, #87ceeb 100%);
      padding: 40px 30px;
      text-align: center;
      color: #ffffff;
    }
    .email-header h1 {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    .email-body {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 20px;
    }
    .message {
      font-size: 16px;
      color: #4a4a4a;
      margin-bottom: 30px;
      line-height: 1.8;
    }
    .details-section {
      background-color: #f8f9fa;
      border-left: 4px solid #add8e6;
      padding: 25px;
      margin-bottom: 30px;
      border-radius: 4px;
    }
    .details-section h2 {
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 20px;
    }
    .detail-row {
      display: flex;
      margin-bottom: 15px;
      font-size: 15px;
    }
    .detail-label {
      font-weight: 600;
      color: #4a4a4a;
      min-width: 140px;
    }
    .detail-value {
      color: #1a1a1a;
      flex: 1;
    }
    .next-steps {
      background-color: #e8f4f8;
      padding: 25px;
      border-radius: 4px;
      margin-bottom: 30px;
    }
    .next-steps h2 {
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 15px;
    }
    .next-steps p {
      font-size: 15px;
      color: #4a4a4a;
      line-height: 1.8;
    }
    .whatsapp-button {
      display: inline-block;
      background-color: #25D366;
      color: #ffffff;
      text-decoration: none;
      padding: 14px 28px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      margin: 20px 0;
      transition: background-color 0.3s;
    }
    .whatsapp-button:hover {
      background-color: #20ba5a;
    }
    .contact-info {
      background-color: #f8f9fa;
      padding: 25px;
      border-radius: 4px;
      margin-top: 30px;
    }
    .contact-info h2 {
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 15px;
    }
    .contact-info p {
      font-size: 15px;
      color: #4a4a4a;
      margin-bottom: 8px;
    }
    .contact-info a {
      color: #add8e6;
      text-decoration: none;
    }
    .contact-info a:hover {
      text-decoration: underline;
    }
    .email-footer {
      background-color: #1a1a1a;
      color: #ffffff;
      padding: 30px;
      text-align: center;
      font-size: 14px;
    }
    .email-footer p {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>Thank You, ${name}!</h1>
    </div>
    <div class="email-body">
      <div class="greeting">We've received your request for ${service}</div>
      
      <div class="message">
        Our team will contact you within 2 hours to finalize your booking. We're excited to help you with your cleaning needs!
      </div>

      <div class="details-section">
        <h2>Request Summary</h2>
        <div class="detail-row">
          <span class="detail-label">Service Type:</span>
          <span class="detail-value">${service}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Preferred Date:</span>
          <span class="detail-value">${formattedDate}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Location:</span>
          <span class="detail-value">${location}</span>
        </div>
        ${message ? `
        <div class="detail-row">
          <span class="detail-label">Message:</span>
          <span class="detail-value">${message}</span>
        </div>
        ` : ''}
      </div>

      <div class="next-steps">
        <h2>What Happens Next?</h2>
        <p>
          A representative from our team will contact you via phone or WhatsApp within 2 hours to discuss your requirements and confirm your booking details.
        </p>
      </div>

      <div style="text-align: center;">
        <a href="https://wa.me/254721525901?text=Hello%20Simca%20Cleaning%20Company,%20I%20need%20to%20make%20changes%20to%20my%20booking%20request." class="whatsapp-button">
          Click to WhatsApp Us
        </a>
      </div>

      <div class="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> <a href="tel:+254721525901">+254 721525901</a></p>
        <p><strong>Email:</strong> <a href="mailto:Info@simcaagencies.co.ke">Info@simcaagencies.co.ke</a></p>
        <p style="margin-top: 15px; font-size: 14px; color: #6a6a6a;">
          If you need to make any changes to your request, please contact us using the WhatsApp button above or call us directly.
        </p>
      </div>
    </div>
    <div class="email-footer">
      <p><strong>Simca Cleaning Agencies</strong></p>
      <p>Professional Cleaning Services in Kenya</p>
      <p style="margin-top: 15px; font-size: 12px; color: #999;">
        This is an automated confirmation email. Please do not reply directly to this email.
      </p>
    </div>
  </div>
</body>
</html>
    `

    // Use verified domain: simca-agencies.com
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'info@simca-agencies.com'

    // Format phone number for links (remove spaces, ensure +254 format)
    const formatPhoneForLink = (phone: string) => {
      const cleaned = phone.replace(/\s+/g, '').replace(/^0/, '254')
      return cleaned.startsWith('254') ? cleaned : `254${cleaned}`
    }
    const formattedPhone = formatPhoneForLink(phone)
    const customerWhatsAppMessage = encodeURIComponent(`Hello ${name}, this is Simca Cleaning. We received your booking request for ${service} in ${location}. We'll contact you soon to confirm the details.`)

    // Prepare owner notification email HTML with actionable buttons
    const ownerNotificationHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Booking Request</title>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'IBM Plex Sans', sans-serif; line-height: 1.6; color: #333; background-color: #f5f5f5; }
    .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .email-header { background: linear-gradient(135deg, #add8e6 0%, #87ceeb 100%); padding: 30px; text-align: center; color: #ffffff; }
    .email-header h1 { font-size: 24px; font-weight: 700; margin-bottom: 5px; }
    .email-header p { font-size: 14px; opacity: 0.95; }
    .email-body { padding: 30px; }
    .alert-badge { display: inline-block; background-color: #ff4444; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; margin-bottom: 20px; }
    .details-section { background-color: #f8f9fa; border-left: 4px solid #add8e6; padding: 20px; margin-bottom: 25px; border-radius: 4px; }
    .details-section h2 { font-size: 18px; font-weight: 600; color: #1a1a1a; margin-bottom: 15px; }
    .detail-row { display: flex; margin-bottom: 12px; font-size: 14px; }
    .detail-label { font-weight: 600; color: #4a4a4a; min-width: 120px; }
    .detail-value { color: #1a1a1a; flex: 1; }
    .action-buttons { margin: 25px 0; text-align: center; }
    .action-button { display: inline-block; padding: 12px 24px; margin: 8px; border-radius: 6px; font-weight: 600; font-size: 14px; text-decoration: none; transition: all 0.3s; }
    .call-button { background-color: #add8e6; color: #ffffff; }
    .call-button:hover { background-color: #87ceeb; }
    .whatsapp-button { background-color: #25D366; color: #ffffff; }
    .whatsapp-button:hover { background-color: #20ba5a; }
    .footer { margin-top: 25px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>🔔 New Booking Request</h1>
      <p>Action Required</p>
    </div>
    <div class="email-body">
      <div class="alert-badge">NEW BOOKING</div>
      
      <div class="details-section">
        <h2>Booking Details</h2>
        <div class="detail-row">
          <span class="detail-label">Client Name:</span>
          <span class="detail-value">${name}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Service:</span>
          <span class="detail-value">${service}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Location:</span>
          <span class="detail-value">${location}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Preferred Date:</span>
          <span class="detail-value">${formattedDate}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Phone:</span>
          <span class="detail-value">${phone}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Email:</span>
          <span class="detail-value">${email}</span>
        </div>
        ${referralSource ? `
        <div class="detail-row">
          <span class="detail-label">Referral Source:</span>
          <span class="detail-value">${referralSource}</span>
        </div>
        ` : ''}
        ${message ? `
        <div class="detail-row">
          <span class="detail-label">Message:</span>
          <span class="detail-value">${message}</span>
        </div>
        ` : ''}
      </div>

      <div class="action-buttons">
        <a href="tel:+${formattedPhone}" class="action-button call-button">📞 Click to Call</a>
        <a href="https://wa.me/${formattedPhone}?text=${customerWhatsAppMessage}" class="action-button whatsapp-button">💬 Click to WhatsApp</a>
      </div>

      <div class="footer">
        <p>This is an automated notification. Please contact the client within 2 hours.</p>
      </div>
    </div>
  </div>
</body>
</html>
    `

    // Send email to customer (critical - wait for this)
    const resend = getResend()
    const { data, error } = await resend.emails.send({
      from: `Simca Cleaning <${fromEmail}>`,
      to: [email],
      subject: `Thank You for Your Request - ${service}`,
      html: emailHtml,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: `Failed to send email: ${error.message || 'Unknown error'}` },
        { status: 500 }
      )
    }

    // Send owner notification email asynchronously (non-blocking)
    getResend().emails.send({
      from: `Simca Cleaning <${fromEmail}>`,
      to: ['simwated@gmail.com'],
      subject: `[NEW BOOKING] - ${service} - ${location}`,
      html: ownerNotificationHtml,
    }).catch((notificationError) => {
      console.error('Failed to send owner notification email:', notificationError)
    })

    // Send WhatsApp notification asynchronously (non-blocking)
    // Using webhook URL from env, or direct API if available
    const whatsappWebhookUrl = process.env.WHATSAPP_WEBHOOK_URL
    const ownerWhatsAppNumber = '254723356800'
    
    if (whatsappWebhookUrl) {
      // Send via webhook (for n8n or other automation)
      fetch(whatsappWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: ownerWhatsAppNumber,
          message: `🔔 NEW BOOKING REQUEST\n\n👤 Name: ${name}\n📋 Service: ${service}\n📍 Location: ${location}\n📅 Date: ${formattedDate}\n📞 Phone: ${phone}\n📧 Email: ${email}${message ? `\n💬 Message: ${message}` : ''}\n\nClick to call: tel:+${formattedPhone}\nClick to WhatsApp: https://wa.me/${formattedPhone}`,
        }),
      }).catch((whatsappError) => {
        console.error('Failed to send WhatsApp notification:', whatsappError)
      })
    } else {
      // Fallback: Try using WhatsApp API directly (if you have Twilio or similar)
      // For now, log that webhook URL is not configured
      console.log('WhatsApp webhook URL not configured. Set WHATSAPP_WEBHOOK_URL in .env.local')
    }

    // Return immediately after customer email is sent (don't wait for notifications)
    return NextResponse.json({ success: true, messageId: data?.id })
  } catch (error) {
    console.error('API error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json(
      { error: `Internal server error: ${errorMessage}` },
      { status: 500 }
    )
  }
}
