"use client"

import { createClient } from '@supabase/supabase-js'
import { FcGoogle } from 'react-icons/fc'
import { useEffect } from 'react'
import { Button } from '@/components/ui'

const supabase = createClient(
  'https://zocqlxonwsvhkamywijo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvY3FseG9ud3N2aGthbXl3aWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NTE2NDUsImV4cCI6MjA2NDIyNzY0NX0.sHKkSxqVa8WFvyaPj4z9WStGdDcR0tbaE6Ri1oasC9E'
)

export default function GoogleSignIn() {
  useEffect(() => {
    try {
      localStorage.getItem('test')
    } catch (error) {
      console.error('Storage access denied:', error)
    }
  }, [])

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/dashboard'
        }
      })

      if (error) {
        console.error('Error signing in with Google:', error.message)
        alert('Failed to sign in with Google. Please try again.')
      }
    } catch (error) {
      console.error('Error signing in with Google:', error)
      alert('Failed to sign in with Google. Please try again.')
    }
  }

  return (
    <Button
      onClick={handleGoogleSignIn}
      variant="secondary"
      size="lg"
      icon={<FcGoogle className="w-5 h-5" />}
      className="w-full"
    >
      Continue with Google
    </Button>
  )
} 