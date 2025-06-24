import { NextResponse } from 'next/server';
import resend from '../../../lib/resend';
import { emailTemplates } from '../../../lib/emailTemplates';

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send email to you (the business owner)
    const { data, error } = await resend.emails.send({
      from: 'Flowdrop Contact <contact@flowdrop.xyz>',
      to: ['webb@flowdrop.xyz'],
      subject: `New Contact Form Submission from ${name}`,
      html: emailTemplates.baseTemplate(`
        <h2 style="color: #8B5CF6;">New Contact Form Submission</h2>
        ${emailTemplates.contactNotification(name, email, company, message)}
        <p style="color: #666; font-size: 14px;">
          This message was sent from the Flowdrop contact form.
        </p>
      `),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Flowdrop <webb@flowdrop.xyz>',
      to: [email],
      subject: 'Thanks for reaching out to Flowdrop!',
      html: emailTemplates.baseTemplate(emailTemplates.contactConfirmation(name, message)),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 