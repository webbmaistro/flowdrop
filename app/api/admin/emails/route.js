import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://zocqlxonwsvhkamywijo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvY3FseG9ud3N2aGthbXl3aWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NTE2NDUsImV4cCI6MjA2NDIyNzY0NX0.sHKkSxqVa8WFvyaPj4z9WStGdDcR0tbaE6Ri1oasC9E'
)

export async function GET() {
  try {
    const { data: emails, error } = await supabase
      .from('waitlist')
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