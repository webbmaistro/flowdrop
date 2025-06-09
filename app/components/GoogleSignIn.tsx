"use client"

import { createClient } from '@supabase/supabase-js'
import { FcGoogle } from 'react-icons/fc'
import { useEffect } from 'react'

const supabase = createClient(
  'https://zocqlxonwsvhkamywijo.supabase.com',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvY3FseG9ud3N2aGthbXl3aWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NTE2NDUsImV4cCI6MjA2NDIyNzY0NX0.sHKkSxqVa8WFvyaPj4z9WStGdDcR0tbaE6Ri1oasC9E'
)

export default function GoogleSignIn() {
  useEffect(() => {
    try {
      localStorage.getItem('test')
    } catch (e) {
      console.warn('Storage access denied, auth may not persist')
    }
  }, [])

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'https://flowdrop.xyz/dashboard'
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
    <button
      onClick={handleGoogleSignIn}
      className="w-full px-6 py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-medium flex items-center justify-center gap-2"
    >
      <FcGoogle className="w-5 h-5" />
      Continue with Google
    </button>
  )
} 