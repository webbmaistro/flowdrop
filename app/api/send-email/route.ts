import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { to, subject, html } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Webb from Flowdrop <webb@flowdrop.xyz>',
      to,
      subject,
      html,
    });
    return Response.json({ success: true, data });
  } catch (error: any) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
} 