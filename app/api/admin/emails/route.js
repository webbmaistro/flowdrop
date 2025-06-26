import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://tuzdkodujqmbtonnhvqe.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1emRrb2R1anFtYnRvbm5odnFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODk4NzQsImV4cCI6MjA2NTc2NTg3NH0.rQCx_cHa7oiJ9RU33bBnxmioZlz7loCf7rUUsEUWCrI'
)

export async function GET() {
  try {
    const { data: emails, error } = await supabase
      .from('subscriberList')
      .select('email, created_at')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    
    return Response.json({ 
      success: true, 
      emails 
    })
    
  } catch (error) {
    console.error('Error fetching emails:', error)
    return Response.json({ 
      success: false, 
      error: 'Failed to fetch emails' 
    }, { status: 500 })
  }
} 