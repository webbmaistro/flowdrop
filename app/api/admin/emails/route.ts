import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import resend from '../../../../lib/resend';
import { emailTemplates } from '../../../../lib/emailTemplates';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET() {
  try {
    const { data: emails, error } = await supabase
      .from('subscriber_list')
      .select('email, created_at')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    return NextResponse.json({ 
      success: true, 
      emails 
    });
    
  } catch (error) {
    console.error('Error fetching emails:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch emails' 
    }, { status: 500 });
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