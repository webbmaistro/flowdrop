"use client"
import { useEffect, useState } from 'react'
import { createClient, User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { LogOut, Sparkles, Zap } from 'lucide-react'

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
      <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-neutral-300">Loading your workspace...</p>
        </div>
      </div>
    )
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <h1 className="text-xl font-bold">Flowdrop</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-neutral-400">
                Welcome, {user?.email}
              </span>
              <button 
                onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Coming Soon</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Building Magic Loading Soon ✨
          </h1>
          
          <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            We're crafting something amazing for you. The Flowdrop app is being built with love and will be ready to help you create incredible AI workflows.
          </p>

          {/* Status Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <h3 className="font-semibold mb-2">Account Ready</h3>
              <p className="text-sm text-neutral-400">Your account is set up and ready to go</p>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-semibold mb-2">Building Magic</h3>
              <p className="text-sm text-neutral-400">Our team is crafting the perfect experience</p>
            </div>
            
            <div className="bg-neutral-800/50 border border-neutral-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">AI Workflows</h3>
              <p className="text-sm text-neutral-400">Powerful automation tools coming soon</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-neutral-300 mb-6">
              We'll notify you as soon as the app is ready. In the meantime, check out our docs to learn more about what's coming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/docs'}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
              >
                Read the Docs
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="px-6 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-lg font-medium transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 