"use client"

import React, { useState } from 'react';
import { Zap, Cloud, Cpu, ArrowRight, Check } from 'lucide-react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      console.log('Waitlist signup:', email);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-purple-600 rounded-xl">
              <Zap className="w-8 h-8" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Deploy n8n workflows in seconds
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            AI-powered workflow builder meets instant cloud deployment. 
            Build, deploy, and scale your n8n automations without the complexity.
          </p>

          <div className="max-w-md mx-auto">
            {!submitted ? (
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium flex items-center gap-2"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="p-4 bg-green-900/20 border border-green-800 rounded-lg text-green-400">
                <Check className="w-5 h-5 inline mr-2" />
                Thanks! We'll notify you when we launch.
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <Cloud className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Deployment</h3>
            <p className="text-gray-400">
              One-click n8n instances with automatic scaling and backups
            </p>
          </div>
          
          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <Zap className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Workflow Builder</h3>
            <p className="text-gray-400">
              Describe what you want to automate and let AI build it
            </p>
          </div>
          
          <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
            <Cpu className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Managed Infrastructure</h3>
            <p className="text-gray-400">
              We handle the servers, updates, and security patches
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Simple, usage-based pricing</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-2">Hobby</h3>
              <p className="text-3xl font-bold mb-4">$0<span className="text-lg font-normal text-gray-400">/mo</span></p>
              <ul className="text-left text-gray-400 space-y-2">
                <li>• 1,000 workflow executions</li>
                <li>• 1 n8n instance</li>
                <li>• Community support</li>
              </ul>
            </div>
            
            <div className="p-6 bg-purple-900/20 rounded-xl border border-purple-800">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-3xl font-bold mb-4">$29<span className="text-lg font-normal text-gray-400">/mo</span></p>
              <ul className="text-left text-gray-400 space-y-2">
                <li>• Unlimited executions</li>
                <li>• Multiple instances</li>
                <li>• Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}