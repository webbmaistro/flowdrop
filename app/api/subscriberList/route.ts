import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import resend from '../../../lib/resend';
import { emailTemplates } from '../../../lib/emailTemplates';
import { env } from 'process';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Insert email into subscriber list
    const { error } = await supabase
      .from('subscriber_list')
      .insert([{ email }])
      .select();

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        return NextResponse.json({ error: 'Email already subscribed' }, { status: 409 });
      }
      throw error;
    }

    // Send welcome email
    try {
      await resend.emails.send({
        from: 'Flowdrop <webb@flowdrop.xyz>',
        to: [email],
        subject: 'Welcome to Flowdrop! 🚀',
        html: emailTemplates.baseTemplate(emailTemplates.welcomeEmail()),
      });
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail the subscription if email fails
    }

    return NextResponse.json({ success: true, message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Error adding subscriber:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('subscriber_list')
      .select('email, created_at')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ subscribers: data });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 