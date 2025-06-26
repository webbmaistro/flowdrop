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
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1emRrb2R1anFtYnRvbm5odnFlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDE4OTg3NCwiZXhwIjoyMDY1NzY1ODc0fQ.eXqKY3iAD8NxyNAI9vmNyn0eusRiMPIGNANsffjqFys',
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
      
      // Send confirmation email via Resend
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: email,
          subject: 'Thanks for subscribing to Flowdrop!',
          html: `<div style="font-family: sans-serif; font-size: 1.1rem; color: #222;">
            <p>Thanks for subscribing to Flowdrop! We are looking forward to seeing what you build with &lt;3.</p>
            <p>-Webb, CEO founder</p>
            <p style="margin-top:2em; font-size:0.95em; color:#888;">For a question email anytime, <a href="mailto:webb@flowdrop.xyz">webb@flowdrop.xyz</a></p>
          </div>`
        })
      });
      
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