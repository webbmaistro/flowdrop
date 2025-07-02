"use client"

import { useState } from 'react'
import GoogleSignIn from '../components/GoogleSignIn'
import { createClient } from '@supabase/supabase-js'
import { Card, CardContent } from '@/components/ui/card'

const supabase = createClient(
  'https://zocqlxonwsvhkamywijo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvY3FseG9ud3N2aGthbXl3aWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NTE2NDUsImV4cCI6MjA2NDIyNzY0NX0.sHKkSxqVa8WFvyaPj4z9WStGdDcR0tbaE6Ri1oasC9E'
)

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleEmailAuth = async () => {
    setLoading(true)
    
    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      })
      if (error) {
        alert(error.message)
      } else {
        alert('Check your email to confirm your account!')
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        alert(error.message)
      } else {
        window.location.href = '/dashboard'
      }
    }
    
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-background text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Card variant="glass" className="shadow-xl">
          <CardContent className="p-8">
            {/* Welcome Section */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome to FlowDrop</h1>
              <p className="text-gray-400">
                {isSignUp ? 'Create your account' : 'Sign in to your account'}
              </p>
            </div>

            {/* Google Sign In as Feature Card */}
            <Card variant="glass" hover className="mb-6">
              <CardContent className="p-0">
                <GoogleSignIn />
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-gray-800"></div>
              <span className="text-sm text-gray-500">or</span>
              <div className="flex-1 h-px bg-gray-800"></div>
            </div>

            {/* Email/Password Form */}
            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-3 bg-background-glass border border-border-primary rounded-xl focus:outline-none focus:border-primary-main text-white placeholder:text-text-muted"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                onKeyPress={(e) => e.key === 'Enter' && handleEmailAuth()}
                className="w-full px-4 py-3 bg-background-glass border border-border-primary rounded-xl focus:outline-none focus:border-primary-main text-white placeholder:text-text-muted"
              />
              
              <button
                onClick={handleEmailAuth}
                disabled={loading}
                className="w-full px-6 py-3 btn-liquid rounded-full text-white font-semibold shadow-lg shadow-primary-main/25 ring-2 ring-primary-main/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Loading...' : (isSignUp ? 'Create Account' : 'Sign In')}
              </button>
            </div>

            {/* Toggle Sign Up / Sign In */}
            <p className="text-center mt-6 text-gray-400">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-primary-main hover:text-primary-hover"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 