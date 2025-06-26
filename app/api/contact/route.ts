import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  // Send confirmation to user
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/send-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to: email,
      subject: 'We received your message! – Flowdrop',
      html: `<div style="font-family: sans-serif; font-size: 1.1rem; color: #222;">
        <p>Hey${name ? ' ' + name : ''},</p>
        <p>We got your message and will get back to you soon.</p>
        <hr>
        <p><strong>Your message:</strong></p>
        <blockquote>${message}</blockquote>
        <p style="margin-top:2em; font-size:0.95em; color:#888;">- Webb, Flowdrop</p>
      </div>`
    })
  });

  // Send notification to admin
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/send-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to: 'webb@flowdrop.xyz',
      subject: 'New Contact Form Submission',
      html: `<div style="font-family: sans-serif; font-size: 1.1rem; color: #222;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <blockquote>${message}</blockquote>
      </div>`
    })
  });

  return Response.json({ success: true });
} 