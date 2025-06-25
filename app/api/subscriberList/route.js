// app/api/subscriberList/route.js
import { createClient } from '@supabase/supabase-js'

// Create Supabase client with proper error handling
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return Response.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Check if email already exists
    const { data: existingEmail } = await supabase
      .from('subscriberList')
      .select('email')
      .eq('email', email)
      .single()

    if (existingEmail) {
      return Response.json({ 
        error: 'Email already registered!' 
      }, { status: 400 })
    }

    // Insert new email
    const { data, error } = await supabase
      .from('subscriberList')
      .insert([{ email }])
      .select()

    if (error) {
      console.error('SubscriberList error:', error)
      return Response.json({ error: 'Failed to add email' }, { status: 500 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    console.error('SubscriberList error:', error)
    return Response.json(
      { error: 'Failed to add to subscriberList' },
      { status: 500 }
    )
  }
}