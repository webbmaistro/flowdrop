"use client"

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://zocqlxonwsvhkamywijo.supabase.com',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvY3FseG9ud3N2aGthbXl3aWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NTE2NDUsImV4cCI6MjA2NDIyNzY0NX0.sHKkSxqVa8WFvyaPj4z9WStGdDcR0tbaE6Ri1oasC9E'
)

export async function POST(request) {
  try {
    const { email } = await request.json()
    
    const { error } = await supabase
      .from('waitlist')
      .insert([{ email }])
      .select()
    
    if (error) {
      if (error.code === '23505') {
        return Response.json({ 
          success: false, 
          error: 'Email already registered!' 
        }, { status: 400 })
      }
      throw error
    }
    
    return Response.json({ 
      success: true, 
      message: 'Successfully added to waitlist!' 
    })
    
  } catch (error) {
    console.error('Waitlist error:', error)
    return Response.json({ 
      success: false, 
      error: 'Failed to add to waitlist' 
    }, { status: 500 })
  }
} 