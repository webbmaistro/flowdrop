"use client"
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';
import { Zap, Cloud, Cpu, ArrowRight, Check } from 'lucide-react';
import GoogleSignIn from './components/GoogleSignIn';
import Section from './components/ui/Section';
import Card from './components/ui/Card';
import Button from './components/ui/Button';

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
      const response = await fetch(`${window.location.origin}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        setError(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch {
      setError('Failed to subscribe. Please try again.');
    }
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-accent text-white px-4 py-2 rounded focus:ring-2 focus:ring-accent">Skip to content</a>
      <main id="main-content">
        <Section className="pt-20 pb-12">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-accent rounded-2xl">
              <Zap className="w-8 h-8" />
            </div>
          </div>
          <h1 className="heading mb-6">Deploy n8n workflows in seconds</h1>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            AI-powered workflow builder with instant cloud deployment. Build, deploy, and scale your n8n automations without the complexity.
          </p>
          <div className="max-w-md mx-auto mb-12">
            <div className="flex flex-col gap-4">
              <GoogleSignIn />
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-bg-primary text-text-secondary">or</span>
                </div>
              </div>
              <Button
                aria-label="Start Free Trial"
                className="w-full"
                onClick={() => window.location.href = '/signin'}
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                aria-label="View Demo"
                className="w-full bg-bg-secondary hover:bg-bg-footer text-text-secondary"
                onClick={() => alert('Demo video coming soon!')}
              >
                View Demo
              </Button>
            </div>
          </div>
          <div className="max-w-md mx-auto border-t border-border pt-8">
            <p className="sub mb-4">Get notified about new features and updates:</p>
            {!submitted ? (
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 bg-bg-secondary border border-border rounded-2xl focus:outline-none focus:border-accent"
                    aria-label="Email address"
                  />
                  <Button
                    aria-label="Subscribe"
                    onClick={handleSubmit}
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                {error && (
                  <p className="text-error text-sm">{error}</p>
                )}
              </div>
            ) : (
              <div className="p-4 bg-success/10 border border-success rounded-2xl text-success">
                <Check className="w-5 h-5 inline mr-2" />
                Thanks! We'll keep you updated.
              </div>
            )}
          </div>
        </Section>
        <Section>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <Cloud className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Deployment</h3>
              <p className="text-text-secondary">One-click n8n instances with automatic scaling and backups</p>
            </Card>
            <Card>
              <Zap className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Workflow Builder</h3>
              <p className="text-text-secondary">Describe what you want to automate and let AI build it</p>
            </Card>
            <Card>
              <Cpu className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Managed Infrastructure</h3>
              <p className="text-text-secondary">We handle the servers, updates, and security patches</p>
            </Card>
          </div>
        </Section>
        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Simple, usage-based pricing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3 className="text-xl font-semibold mb-2">Hobby</h3>
                <p className="text-3xl font-bold mb-4">$0<span className="text-lg font-normal text-text-secondary">/mo</span></p>
                <ul className="text-left text-text-secondary space-y-2">
                  <li>• 1,000 workflow executions</li>
                  <li>• 1 n8n instance</li>
                  <li>• Community support</li>
                </ul>
              </Card>
              <Card className="bg-accent/10 border-accent">
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <p className="text-3xl font-bold mb-4">$29<span className="text-lg font-normal text-text-secondary">/mo</span></p>
                <ul className="text-left text-text-secondary space-y-2">
                  <li>• Unlimited executions</li>
                  <li>• Multiple instances</li>
                  <li>• Priority support</li>
                </ul>
              </Card>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}