"use client"
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';
import { Zap, Cloud, Cpu, ArrowRight, Check, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import GoogleSignIn from './components/GoogleSignIn';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    try {
      const response = await fetch(`${window.location.origin}/api/subscriberList`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        setError(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setError('Failed to subscribe. Please try again.');
    }
  };

  // Animation variants for staggered animations
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

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1D] text-white">
      {/* Hero Section */}
      <section id="home" className="px-6 py-12 max-w-4xl mx-auto">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo/Brand Icon */}
          <motion.div 
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <div className="p-4 bg-[#8B5CF6] rounded-2xl shadow-lg">
              <Zap className="w-10 h-10" />
            </div>
          </motion.div>
          
          {/* Main Headline - Responsive sizing */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Deploy n8n workflows in seconds
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            AI-powered workflow builder with instant cloud deployment. 
            Build, deploy, and scale your n8n automations without the complexity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="max-w-md mx-auto mb-16"
            variants={itemVariants}
          >
            <div className="flex flex-col gap-4">
              <GoogleSignIn />
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#1A1A1D] text-gray-400">or</span>
                </div>
              </div>
              
              {/* Get Started CTA with hover effects */}
              <motion.button
                onClick={() => window.location.href = '/signin'}
                className="w-full px-6 py-4 bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Start free trial"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div 
            className="max-w-md mx-auto border-t border-gray-700 pt-8"
            variants={itemVariants}
          >
            <p className="text-sm text-gray-400 mb-4">
              Get notified about new features and updates:
            </p>
            {!submitted ? (
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors"
                    aria-label="Email address for newsletter"
                  />
                  <motion.button
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg font-medium flex items-center gap-2 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}
              </div>
            ) : (
              <motion.div 
                className="p-4 bg-green-900/20 border border-green-800 rounded-lg text-green-400"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Check className="w-5 h-5 inline mr-2" />
                Thanks! We'll keep you updated.
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Grid Section */}
      <section id="features" className="px-6 py-12 max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to automate
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powerful features designed to make workflow automation simple and scalable
          </p>
        </motion.div>

        {/* Feature Cards - Responsive grid with hover effects */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Feature Card 1 */}
          <motion.div 
            className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#8B5CF6]/50 transition-all duration-300 group"
            variants={featureVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)" 
            }}
            aria-label="Instant deployment feature"
          >
            <Cloud className="w-12 h-12 text-[#8B5CF6] mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-3">Instant Deployment</h3>
            <p className="text-gray-400 leading-relaxed">
              One-click n8n instances with automatic scaling and backups. 
              Deploy your workflows in seconds, not hours.
            </p>
          </motion.div>
          
          {/* Feature Card 2 */}
          <motion.div 
            className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#8B5CF6]/50 transition-all duration-300 group"
            variants={featureVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)" 
            }}
            aria-label="AI workflow builder feature"
          >
            <Zap className="w-12 h-12 text-[#8B5CF6] mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-3">AI Workflow Builder</h3>
            <p className="text-gray-400 leading-relaxed">
              Describe what you want to automate and let AI build it. 
              Natural language to powerful workflows instantly.
            </p>
          </motion.div>
          
          {/* Feature Card 3 */}
          <motion.div 
            className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#8B5CF6]/50 transition-all duration-300 group"
            variants={featureVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)" 
            }}
            aria-label="Managed infrastructure feature"
          >
            <Cpu className="w-12 h-12 text-[#8B5CF6] mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-3">Managed Infrastructure</h3>
            <p className="text-gray-400 leading-relaxed">
              We handle the servers, updates, and security patches. 
              Focus on building, not maintaining.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-12 max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Step 1 */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                1
          </div>
              {/* Minimalist SVG placeholder */}
              <svg className="w-24 h-24 mx-auto mt-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
        </div>
            <h3 className="text-xl font-semibold mb-3">Describe Your Workflow</h3>
            <p className="text-gray-400">
              Tell us what you want to automate using natural language
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              {/* Minimalist SVG placeholder */}
              <svg className="w-24 h-24 mx-auto mt-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
          </div>
            <h3 className="text-xl font-semibold mb-3">AI Builds It</h3>
            <p className="text-gray-400">
              Our AI creates the n8n workflow automatically
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              {/* Minimalist SVG placeholder */}
              <svg className="w-24 h-24 mx-auto mt-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
          </div>
            <h3 className="text-xl font-semibold mb-3">Deploy & Scale</h3>
            <p className="text-gray-400">
              One-click deployment with automatic scaling
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Choose your automation tier
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Scale from side hustle to enterprise with transparent, usage-based pricing
          </p>
        </motion.div>
        
        {/* Pricing Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Spark — Free */}
          <motion.div 
            className="relative group"
            variants={featureVariants}
          >
            <div className="h-full bg-gradient-to-b from-gray-800/30 to-gray-800/10 border border-gray-700/50 rounded-2xl p-8 transition-all duration-500 group-hover:border-[#8B5CF6]/50 group-hover:bg-gradient-to-b group-hover:from-gray-800/40 group-hover:to-gray-800/20">
              {/* Plan Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gray-500 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  <h3 className="text-lg font-semibold text-white">Spark</h3>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">$0</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Perfect for testing and small projects
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">1,000 actions/month</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">1 user seat</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">5 AI workflow builds</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
          </div>
                  <span className="text-sm text-gray-300">Community support</span>
        </div>
      </div>

              {/* Button */}
              <motion.button 
                className="w-full py-4 px-6 bg-gray-700/50 hover:bg-[#8B5CF6] text-white font-medium rounded-xl transition-all duration-300 group-hover:bg-[#8B5CF6]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Free
              </motion.button>
            </div>
          </motion.div>

          {/* Solo */}
          <motion.div 
            className="relative group"
            variants={featureVariants}
          >
            <div className="h-full bg-gradient-to-b from-gray-800/30 to-gray-800/10 border border-gray-700/50 rounded-2xl p-8 transition-all duration-500 group-hover:border-[#8B5CF6]/50 group-hover:bg-gradient-to-b group-hover:from-gray-800/40 group-hover:to-gray-800/20">
              {/* Plan Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gray-500 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  <h3 className="text-lg font-semibold text-white">Solo</h3>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">$19</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Build faster with AI-powered tools
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">10,000 actions/month</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">1 user seat</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">25 AI workflow builds</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">Priority AI processing</span>
                </div>
              </div>

              {/* Button */}
              <motion.button 
                className="w-full py-4 px-6 bg-gray-700/50 hover:bg-[#8B5CF6] text-white font-medium rounded-xl transition-all duration-300 group-hover:bg-[#8B5CF6]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Solo Trial
              </motion.button>
            </div>
          </motion.div>

          {/* Builder - Featured */}
          <motion.div 
            className="relative group lg:scale-[1.02]"
            variants={featureVariants}
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Most Popular
              </div>
            </div>

            <div className="h-full bg-gradient-to-b from-[#8B5CF6]/20 to-[#8B5CF6]/5 border border-[#8B5CF6]/30 rounded-2xl p-8 transition-all duration-500 group-hover:border-[#8B5CF6]/50 group-hover:bg-gradient-to-b group-hover:from-[#8B5CF6]/30 group-hover:to-[#8B5CF6]/10">
              {/* Plan Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#8B5CF6] rounded-full"></div>
                  <h3 className="text-lg font-semibold text-white">Builder</h3>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">$49</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Scale your automation with advanced features
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-300">25,000 actions/month</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-300">3 user seats</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-300">Unlimited AI workflow builds</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-300">Advanced AI features</span>
                </div>
              </div>

              {/* Button */}
              <motion.button 
                className="w-full py-4 px-6 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium rounded-xl transition-all duration-300 shadow-lg group-hover:shadow-[#8B5CF6]/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Builder Trial
              </motion.button>
            </div>
          </motion.div>

          {/* Scale */}
          <motion.div 
            className="relative group"
            variants={featureVariants}
          >
            <div className="h-full bg-gradient-to-b from-gray-800/30 to-gray-800/10 border border-gray-700/50 rounded-2xl p-8 transition-all duration-500 group-hover:border-[#8B5CF6]/50 group-hover:bg-gradient-to-b group-hover:from-gray-800/40 group-hover:to-gray-800/20">
              {/* Plan Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gray-500 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  <h3 className="text-lg font-semibold text-white">Scale</h3>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">$149</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Enterprise-grade power for growing teams
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">100,000 actions/month</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">10 user seats</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">GPU-powered AI processing</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">Priority support</span>
                </div>
              </div>

              {/* Button */}
              <motion.button 
                className="w-full py-4 px-6 bg-gray-700/50 hover:bg-[#8B5CF6] text-white font-medium rounded-xl transition-all duration-300 group-hover:bg-[#8B5CF6]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Scale Trial
              </motion.button>
            </div>
          </motion.div>

          {/* Growth */}
          <motion.div 
            className="relative group"
            variants={featureVariants}
          >
            <div className="h-full bg-gradient-to-b from-gray-800/30 to-gray-800/10 border border-gray-700/50 rounded-2xl p-8 transition-all duration-500 group-hover:border-[#8B5CF6]/50 group-hover:bg-gradient-to-b group-hover:from-gray-800/40 group-hover:to-gray-800/20">
              {/* Plan Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gray-500 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  <h3 className="text-lg font-semibold text-white">Growth</h3>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">Custom</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Unlimited possibilities for enterprise
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">Unlimited actions</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">Unlimited user seats</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">Custom AI infrastructure</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-[#8B5CF6] transition-colors duration-300"></div>
                  </div>
                  <span className="text-sm text-gray-300">Dedicated support team</span>
                </div>
              </div>

              {/* Button */}
              <motion.button 
                className="w-full py-4 px-6 bg-gray-700/50 hover:bg-[#8B5CF6] text-white font-medium rounded-xl transition-all duration-300 group-hover:bg-[#8B5CF6]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-6 py-12 mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="p-2 bg-[#8B5CF6] rounded-lg">
                <Zap className="w-6 h-6" />
              </div>
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="About us">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Documentation">
                Docs
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Support">
                Support
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Privacy policy">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Terms of service">
                Terms
              </a>
            </div>
            
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2024 FlowDrop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}