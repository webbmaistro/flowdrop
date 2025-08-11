"use client"

import { createClient } from '@supabase/supabase-js'
import { FcGoogle } from 'react-icons/fc'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

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
        // Replace alert with a user-friendly notification method
      }
    } catch (error) {
      console.error('Error signing in with Google:', error)
      // Replace alert with a user-friendly notification method
    }
  }

  return (
    <motion.button
      onClick={handleGoogleSignIn}
      className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl hover:bg-gray-700/60 hover:border-gray-500/50 transition-all duration-300 flex items-center justify-center gap-3 text-white font-medium shadow-sm hover:shadow-md"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <FcGoogle className="w-5 h-5" />
      <span>Continue with Google</span>
    </motion.button>
  )
} 