"use client"

import { createClient } from '@supabase/supabase-js'
import { FcGoogle } from 'react-icons/fc'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleGoogleSignIn}
      className="w-full px-6 py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
    >
      <FcGoogle className="w-5 h-5" />
      Continue with Google
    </motion.button>
  )
} 