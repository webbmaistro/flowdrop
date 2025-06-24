"use client"

import { useState } from 'react'
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'
import GoogleSignIn from '../components/GoogleSignIn'
import { createClient } from '@supabase/supabase-js'
import { motion } from 'framer-motion'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

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

  // Animation variants matching landing page
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1D] text-white">
      {/* Main content */}
      <div className="min-h-screen flex items-center justify-center p-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md"
        >
          {/* Card matching landing page styling */}
          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
            {/* Logo section */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex justify-center mb-6"
              >
                <div className="p-4 bg-[#8B5CF6] rounded-2xl shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              >
                Welcome to Flowdrop
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-gray-400"
              >
                {isSignUp ? 'Create your account' : 'Sign in to your account'}
              </motion.p>
            </motion.div>

            {/* Google Sign In */}
            <motion.div variants={itemVariants}>
              <GoogleSignIn />
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="relative my-8"
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-800/50 text-gray-400">or</span>
              </div>
            </motion.div>

            {/* Email/Password Form */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              {/* Email input */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors text-white placeholder-gray-400"
                />
              </div>

              {/* Password input */}
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  onKeyPress={(e) => e.key === 'Enter' && handleEmailAuth()}
                  className="w-full pl-12 pr-12 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors text-white placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEmailAuth}
                disabled={loading}
                className="w-full px-6 py-4 bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  <>
                    {isSignUp ? 'Create Account' : 'Sign In'}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Toggle Sign Up / Sign In */}
            <motion.p
              variants={itemVariants}
              className="text-center mt-8 text-gray-400"
            >
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-[#8B5CF6] hover:text-[#7C3AED] font-medium transition-colors"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </motion.button>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 