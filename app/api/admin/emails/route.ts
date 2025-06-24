import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import resend from '../../../../lib/resend';
import { emailTemplates } from '../../../../lib/emailTemplates';

export async function GET() {
  // Step 1: Read env vars inside the handler
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  // Step 2: Gracefully handle missing env vars
  if (!url || !key) {
    // You can tune this error response later
    return new Response(
      JSON.stringify({ success: false, error: 'Missing supabase env vars' }),
      { status: 500 }
    );
  }

  // Step 3: Create the Supabase client only if vars are present
  const supabase = createClient(url, key);

  try {
    // Step 4: Use the client for your query
    const { count, error } = await supabase
      .from('subscriberList')
      .select('*', { head: true, count: 'exact' });
    if (error) throw error;
    return NextResponse.json({ success: true, count });
  } catch (error) {
    // You can tune this error response later
    console.error('Error fetching subscriber count:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch subscriber count' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { subject, message, testMode = false } = await request.json();

    if (!subject || !message) {
      return NextResponse.json({ 
        error: 'Subject and message are required' 
      }, { status: 400 });
    }

    // Get all subscribers
    const { data: subscribers, error } = await supabase
      .from('subscriber_list')
      .select('email');

    if (error) throw error;

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({ 
        error: 'No subscribers found' 
      }, { status: 404 });
    }

    // Limit to 10 emails in test mode
    const emailsToSend = testMode ? subscribers.slice(0, 10) : subscribers;

    // Send emails using Resend
    const emailPromises = emailsToSend.map(subscriber => 
      resend.emails.send({
        from: 'Flowdrop <webb@flowdrop.xyz>',
        to: [subscriber.email],
        subject: subject,
        html: emailTemplates.baseTemplate(emailTemplates.newsletterEmail(message)),
      })
    );

    const results = await Promise.allSettled(emailPromises);
    const successful = results.filter(result => result.status === 'fulfilled').length;
    const failed = results.filter(result => result.status === 'rejected').length;

    return NextResponse.json({ 
      success: true, 
      message: `Sent ${successful} emails successfully${failed > 0 ? `, ${failed} failed` : ''}`,
      total: emailsToSend.length,
      successful,
      failed
    });
    
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to send emails' 
    }, { status: 500 });
  }
} 