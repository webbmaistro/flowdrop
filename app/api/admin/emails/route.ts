import { NextRequest, NextResponse } from 'next/server';
import resend from '../../../../lib/resend';
import { emailTemplates } from '../../../../lib/emailTemplates';
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  // 1. Read env-vars at request time
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json(
      { success: false, error: 'Missing Supabase env vars' },
      { status: 500 }
    )
  }

  // 2. Initialize Supabase client inside handler
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

  // 3. Fetch subscriber emails
  const { data: subscribers, error } = await supabase
    .from('subscriber_list')    // or 'subscriberList' if that's your exact table name
    .select('email')

  if (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }

  // 4. Return JSON response
  return NextResponse.json({ success: true, subscribers })
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