"use client"
import { useEffect, useState } from 'react'
import { createClient, User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import { Sparkles, Zap } from 'lucide-react'
import { SocialLinks, Card, CardContent, CardHeader, CardTitle, Button } from '@/components/ui'
import { cn } from '@/lib/utils'

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
        window.location.href = 'https://app.flowdrop.xyz/'
      } else {
        setUser(user)
        setLoading(false)
      }
    })
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground-muted">Loading your workspace...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-8 glass">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Coming Soon</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            AI Building Magic Loading Soon ✨
          </h1>
          
          <p className="text-xl text-foreground-muted mb-12 max-w-2xl mx-auto text-balance">
            We're crafting something amazing for you. The Flowdrop app is being built with love and will be ready to help you create incredible AI workflows.
          </p>

          {/* Status Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card variant="glass" hover className="card-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <CardTitle className="text-lg mb-2">Account Ready</CardTitle>
                <p className="text-sm text-foreground-muted">Your account is set up and ready to go</p>
              </CardContent>
            </Card>
            
            <Card variant="glass" hover className="card-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Sparkles className="w-6 h-6 text-warning" />
                </div>
                <CardTitle className="text-lg mb-2">Building Magic</CardTitle>
                <p className="text-sm text-foreground-muted">Our team is crafting the perfect experience</p>
              </CardContent>
            </Card>
            
            <Card variant="glass" hover className="card-smooth">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg mb-2">AI Workflows</CardTitle>
                <p className="text-sm text-foreground-muted">Powerful automation tools coming soon</p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card variant="glass" className="card-hover-glow">
            <CardContent className="p-8">
              <CardTitle className="text-2xl font-bold mb-4">Stay in the Loop</CardTitle>
              <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
                We'll notify you as soon as the app is ready. In the meantime, check out our docs to learn more about what's coming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/docs'}
                  variant="primary"
                  size="lg"
                  className="card-smooth"
                >
                  Read the Docs
                </Button>
                <Button 
                  onClick={() => window.location.href = '/contact'}
                  variant="secondary"
                  size="lg"
                  className="card-smooth"
                >
                  Get in Touch
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-foreground-muted mb-4">Join our community while you wait</p>
                <SocialLinks size="sm" className="justify-center" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 