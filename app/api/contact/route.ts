import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  // TODO: Email functionality has been disabled
  // Previously sent confirmation to user and notification to admin
  // Contact form submissions are still being received and stored

  return Response.json({ 
    success: true, 
    message: 'Message received. Email functionality is currently disabled.' 
  });
} 