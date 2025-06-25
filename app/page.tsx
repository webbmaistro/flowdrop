"use client"
/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from 'react';
import { Zap, Cloud, Cpu, ArrowRight, Check, Play, Menu, X } from 'lucide-react';
import GoogleSignIn from './components/GoogleSignIn';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Scroll-Activated Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl pointer-events-auto opacity-100' 
          : 'bg-transparent pointer-events-none opacity-0'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                FlowDrop
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300">
                Pricing
              </a>
              <a href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-300">
                Plans
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => window.location.href = '/signin'}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                Sign In
              </button>
              <button
                onClick={() => window.location.href = '/signin'}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/25"
              >
                Start Free Trial
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-4 border-t border-white/10">
              <a 
                href="#features" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="/pricing" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Plans
              </a>
              <a 
                href="#contact" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    window.location.href = '/signin';
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/signin';
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-medium transition-all duration-300"
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">Now in Beta</span>
          </div>
          
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Deploy n8n workflows
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                in seconds
              </span>
          </h1>
          
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered workflow builder with instant cloud deployment. 
            Build, deploy, and scale your n8n automations without the complexity.
          </p>

            {/* CTA Buttons */}
            <div className="max-w-md mx-auto mb-16">
            <div className="flex flex-col gap-4">
              <GoogleSignIn />
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-gradient-to-br from-black via-gray-900 to-black text-gray-400">or</span>
                  </div>
              </div>
              <button
                onClick={() => window.location.href = '/signin'}
                  className="group w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] shadow-2xl shadow-purple-500/25"
              >
                Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => alert('Demo video coming soon!')}
                  className="group w-full px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300"
              >
                  <Play className="w-5 h-5" />
                  Watch Demo
              </button>
            </div>
          </div>

            {/* Newsletter Signup */}
            <div className="max-w-lg mx-auto">
              <p className="text-sm text-gray-400 mb-6">
                Get notified about new features and updates
            </p>
            {!submitted ? (
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 placeholder-gray-500"
                  />
                  <button
                    onClick={handleSubmit}
                      className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-[1.02] shadow-xl shadow-purple-500/25"
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}
              </div>
            ) : (
                <div className="p-6 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl text-green-400 flex items-center justify-center gap-3">
                  <Check className="w-5 h-5" />
                Thanks! We'll keep you updated.
              </div>
            )}
          </div>
        </div>
      </div>

        {/* Features Section */}
        <div id="features" className="container mx-auto px-6 py-32">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Instant Deployment</h3>
              <p className="text-gray-400 leading-relaxed">
                One-click n8n instances with automatic scaling and backups. Deploy in seconds, not hours.
            </p>
          </div>
          
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">AI Workflow Builder</h3>
              <p className="text-gray-400 leading-relaxed">
                Describe what you want to automate and let AI build it. No more complex node configurations.
            </p>
          </div>
          
            <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Managed Infrastructure</h3>
              <p className="text-gray-400 leading-relaxed">
                We handle the servers, updates, and security patches. Focus on your workflows, not infrastructure.
            </p>
          </div>
        </div>
      </div>

        {/* Pricing Preview Section */}
        <div id="pricing" className="container mx-auto px-6 py-32">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Simple, usage-based pricing
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
            
            {/* Vertical Pricing Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {/* Spark — Free */}
              <div className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-700 transform hover:scale-[1.05] hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Spark</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">$0</span>
                      <span className="text-gray-400 ml-1">/month</span>
                    </div>
                    <p className="text-gray-400 text-sm">Test-drive Flowdrop</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8 text-left">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">1,000 actions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">1 seat</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">Community support</span>
                    </li>
                  </ul>
                  
                  <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                    Get Started Free
                  </button>
                </div>
              </div>

              {/* Solo */}
              <div className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-700 transform hover:scale-[1.05] hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Solo</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">$19</span>
                      <span className="text-gray-400 ml-1">/month</span>
                    </div>
                    <p className="text-gray-400 text-sm">Side-hustle builders</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8 text-left">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">10,000 actions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">1 seat</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">Core AI tools</span>
                    </li>
                  </ul>
                  
                  <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-2xl font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 shadow-lg shadow-purple-500/25">
                    Start Solo Trial
                  </button>
                </div>
              </div>

              {/* Builder */}
              <div className="group relative p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-700 transform hover:scale-[1.05] hover:-translate-y-2">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-xs font-semibold shadow-lg">
                  Most Popular
                </div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Builder</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">$49</span>
                      <span className="text-gray-400 ml-1">/month</span>
                    </div>
                    <p className="text-gray-400 text-sm">Indie SaaS teams</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8 text-left">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">25,000 actions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">3 seats</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">AI Copilot</span>
                    </li>
                  </ul>
                  
                  <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-2xl font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 shadow-lg shadow-purple-500/25">
                    Start Builder Trial
                  </button>
                </div>
              </div>

              {/* Scale */}
              <div className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-700 transform hover:scale-[1.05] hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Scale</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">$149</span>
                      <span className="text-gray-400 ml-1">/month</span>
                    </div>
                    <p className="text-gray-400 text-sm">Start-ups scaling fast</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8 text-left">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">100,000 actions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">10 seats</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">GPU minutes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">Priority chat</span>
                    </li>
              </ul>
                  
                  <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-2xl font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 shadow-lg shadow-purple-500/25">
                    Start Scale Trial
                  </button>
                </div>
              </div>

              {/* Growth */}
              <div className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-700 transform hover:scale-[1.05] hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
                    <div className="mb-4">
                      <span className="text-lg font-semibold text-purple-400">Custom</span>
                    </div>
                    <p className="text-gray-400 text-sm">Agencies & high-volume ops</p>
            </div>
            
                  <ul className="space-y-4 mb-8 text-left">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">Unlimited actions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">SLA</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">White-glove onboarding</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">Rev-share option</span>
                    </li>
              </ul>
                  
                  <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-2xl font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 shadow-lg shadow-purple-500/25">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}