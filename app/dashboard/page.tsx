"use client"
import { useEffect, useState } from 'react'
import { createClient, User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

const supabase = createClient(
  'https://zocqlxonwsvhkamywijo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvY3FseG9ud3N2aGthbXl3aWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NTE2NDUsImV4cCI6MjA2NDIyNzY0NX0.sHKkSxqVa8WFvyaPj4z9WStGdDcR0tbaE6Ri1oasC9E'
)

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Handle OAuth callback
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')

    if (code) {
      supabase.auth.exchangeCodeForSession(code).then(() => {
        window.history.replaceState({}, '', '/dashboard')
      })
    }

    // Check if user is logged in
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push('/signin')
      } else {
        setUser(user)
        setLoading(false)
      }
    })
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const handleUpgrade = async (priceId: string) => {
    const response = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        priceId,
        userId: user?.id
      })
    });
    
    const { url } = await response.json();
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Workflows</h1>
          <button 
            onClick={handleSignOut}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
        
        <p className="text-gray-400 mb-4">Welcome, {user?.email}!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Starter</h3>
            <p className="text-gray-400 mb-4">Perfect for getting started</p>
            <button 
              onClick={() => handleUpgrade('price_1RXx3jFzNR6a9wq2grkZXFY3')}
              className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
            >
              Upgrade to Starter
            </button>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border-2 border-purple-500">
            <h3 className="text-xl font-bold mb-4">Pro</h3>
            <p className="text-gray-400 mb-4">For professional users</p>
            <button 
              onClick={() => handleUpgrade('price_1RXx4EFzNR6a9wq2JQlwLFqm')}
              className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
            >
              Upgrade to Pro
            </button>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Business</h3>
            <p className="text-gray-400 mb-4">For teams and businesses</p>
            <button 
              onClick={() => handleUpgrade('price_1RXx4zFzNR6a9wq2WBJlo1sI')}
              className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
            >
              Upgrade to Business
            </button>
          </div>
        </div>
        
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg">
          Create New Workflow
        </button>
      </div>
    </div>
  )
} 