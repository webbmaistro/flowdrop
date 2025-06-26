// app/api/subscriberList/route.js
export async function POST(request) {
    try {
      const { email } = await request.json()
      
      // Direct fetch to Supabase REST API
      const response = await fetch(
        'https://tuzdkodujqmbtonnhvqe.supabase.co/rest/v1/subscriberList',
        {
          method: 'POST',
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1emRrb2R1anFtYnRvbm5odnFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODk4NzQsImV4cCI6MjA2NTc2NTg3NH0.rQCx_cHa7oiJ9RU33bBnxmioZlz7loCf7rUUsEUWCrI',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1emRrb2R1anFtYnRvbm5odnFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODk4NzQsImV4cCI6MjA2NTc2NTg3NH0.rQCx_cHa7oiJ9RU33bBnxmioZlz7loCf7rUUsEUWCrI',
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

export async function GET() {
  try {
    // Get count of subscribers
    const response = await fetch(
      'https://tuzdkodujqmbtonnhvqe.supabase.co/rest/v1/subscriberList?select=count',
      {
        method: 'GET',
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1emRrb2R1anFtYnRvbm5odnFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODk4NzQsImV4cCI6MjA2NTc2NTg3NH0.rQCx_cHa7oiJ9RU33bBnxmioZlz7loCf7rUUsEUWCrI',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1emRrb2R1anFtYnRvbm5odnFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODk4NzQsImV4cCI6MjA2NTc2NTg3NH0.rQCx_cHa7oiJ9RU33bBnxmioZlz7loCf7rUUsEUWCrI',
          'Content-Type': 'application/json',
          'Prefer': 'count=exact'
        }
      }
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch count')
    }
    
    const count = response.headers.get('content-range')?.split('/')[1] || '0'
    
    return Response.json({ 
      success: true, 
      count: parseInt(count) 
    })
    
  } catch (error) {
    console.error('Error fetching count:', error)
    return Response.json({ 
      success: false, 
      error: 'Failed to fetch count' 
    }, { status: 500 })
  }
}