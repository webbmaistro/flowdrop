// app/api/subscriberList/route.js
export async function POST(request) {
    try {
      const { email } = await request.json()
      
      // Direct fetch to Supabase REST API
      const response = await fetch(
        'https://zocqlxonwsvhkamywijo.supabase.co/rest/v1/subscriberList',
        {
          method: 'POST',
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvY3FseG9ud3N2aGthbXl3aWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NTE2NDUsImV4cCI6MjA2NDIyNzY0NX0.sHKkSxqVa8WFvyaPj4z9WStGdDcR0tbaE6Ri1oasC9E',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvY3FseG9ud3N2aGthbXl3aWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NTE2NDUsImV4cCI6MjA2NDIyNzY0NX0.sHKkSxqVa8WFvyaPj4z9WStGdDcR0tbaE6Ri1oasC9E',
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({ email })
        }
      )
      
      if (!response.ok) {
        const error = await response.text()
        throw new Error(error)
      }
      
      return Response.json({ success: true })
      
    } catch (error) {
      console.error('SubscriberList error:', error)
      
      // Check for duplicate email
      if (error.message.includes('duplicate')) {
        return Response.json({ 
          error: 'Email already registered!' 
        }, { status: 400 })
      }
      
      return Response.json({ 
        error: 'Failed to add to subscriberList' 
      }, { status: 500 })
    }
  }