import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json({ 
        success: false, 
        error: 'All fields are required' 
      }, { status: 400 });
    }

    // Send confirmation email to user
    const userEmail = await resend.emails.send({
      from: 'Flowdrop <noreply@flowdrop.xyz>',
      to: [email],
      subject: `Thank you for contacting Flowdrop - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">Thank you for contacting Flowdrop!</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Message:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>Best regards,<br>The Flowdrop Team</p>
        </div>
      `,
    });

    // Send notification email to admin
    const adminEmail = await resend.emails.send({
      from: 'Flowdrop Contact Form <noreply@flowdrop.xyz>',
      to: ['webb@flowdrop.xyz'],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return Response.json({ 
      success: true, 
      message: 'Message sent successfully! We\'ll get back to you soon.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ 
      success: false, 
      error: 'Failed to send message. Please try again later.' 
    }, { status: 500 });
  }
} 