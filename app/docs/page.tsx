"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Book, FileText, Code, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import ComingSoon from "@/components/ui/ComingSoon";

const docCategories = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and tutorials',
    icon: Zap,
    color: 'text-primary-main',
    bgColor: 'bg-primary-main/20',
    items: [
      { title: 'Quick Start Guide', href: '#', description: 'Get up and running in 5 minutes' },
      { title: 'Installation', href: '#', description: 'Install and configure FlowDrop' },
      { title: 'First Workflow', href: '#', description: 'Create your first automation' },
      { title: 'Best Practices', href: '#', description: 'Learn the recommended patterns' },
    ]
  },
  {
    title: 'Core Concepts',
    description: 'Understanding the fundamentals',
    icon: Book,
    color: 'text-success-500',
    bgColor: 'bg-success-500/20',
    items: [
      { title: 'Workflows', href: '#', description: 'Understanding workflow structure' },
      { title: 'Nodes & Connections', href: '#', description: 'Building blocks of automation' },
      { title: 'Data Flow', href: '#', description: 'How data moves through your workflows' },
      { title: 'Error Handling', href: '#', description: 'Managing failures gracefully' },
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation',
    icon: Code,
    color: 'text-warning-500',
    bgColor: 'bg-warning-500/20',
    items: [
      { title: 'REST API', href: '#', description: 'Complete API reference' },
      { title: 'Webhooks', href: '#', description: 'Real-time event notifications' },
      { title: 'Authentication', href: '#', description: 'API keys and security' },
      { title: 'Rate Limits', href: '#', description: 'Understanding usage limits' },
    ]
  },
  {
    title: 'Guides & Tutorials',
    description: 'Step-by-step tutorials',
    icon: FileText,
    color: 'text-error-500',
    bgColor: 'bg-error-500/20',
    items: [
      { title: 'Email Automation', href: '#', description: 'Automate email workflows' },
      { title: 'Database Integration', href: '#', description: 'Connect to your databases' },
      { title: 'Third-party APIs', href: '#', description: 'Integrate external services' },
      { title: 'Advanced Workflows', href: '#', description: 'Complex automation patterns' },
    ]
  }
];

const quickLinks = [
  { title: 'API Reference', href: '#', icon: ExternalLink },
  { title: 'Community Forum', href: '#', icon: ExternalLink },
  { title: 'GitHub Repository', href: '#', icon: ExternalLink },
  { title: 'Support Center', href: '#', icon: ExternalLink },
];

export default function DocsHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Flowdrop Docs — Build AI-first workflows in minutes.</h1>
      <p className="mb-6 text-neutral-300">Get started fast. More magic landing soon ✨</p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What is Flowdrop?</h2>
        <p className="text-neutral-300 mb-6">
          Flowdrop is a no-code platform that lets you build AI-powered workflows without writing a single line of code. 
          Think of it as your personal AI assistant that can automate complex tasks across all your favorite apps.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 mb-6">
          <h3 className="font-semibold mb-3">🤖 What is an AI Workflow?</h3>
          <p className="text-neutral-300 mb-4">
            An AI workflow is like a recipe for your computer. Instead of manually doing the same tasks over and over, 
            you create a "workflow" that tells AI exactly what to do, when to do it, and how to handle different situations.
          </p>
          <p className="text-neutral-300">
            <strong>Example:</strong> "When I get an email from a customer, automatically analyze their message, 
            create a response, and schedule a follow-up task in my calendar" — all without you lifting a finger.
          </p>
        </div>

        <div className="bg-neutral-800 rounded-xl p-6 mb-6">
          <h3 className="font-semibold mb-3">🎯 What Problem Are We Solving?</h3>
          <p className="text-neutral-300 mb-4">
            <strong>The Problem:</strong> You're drowning in repetitive tasks. Emails, data entry, scheduling, 
            customer support — it's all eating up your time and energy. You know AI could help, but coding is hard 
            and existing tools are either too complex or too limited.
          </p>
          <p className="text-neutral-300">
            <strong>Our Solution:</strong> Flowdrop makes AI automation accessible to everyone. No coding required. 
            Just drag, drop, and describe what you want. We handle the complex AI integration behind the scenes.
          </p>
        </div>

        <div className="bg-neutral-800 rounded-xl p-6">
          <h3 className="font-semibold mb-3">✨ Why Flowdrop?</h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>No Code Required:</strong> Visual builder anyone can use</li>
            <li>• <strong>AI-First:</strong> Built specifically for AI workflows, not retrofitted</li>
            <li>• <strong>Connect Everything:</strong> Works with 100+ apps out of the box</li>
            <li>• <strong>Smart & Adaptable:</strong> AI learns and improves over time</li>
            <li>• <strong>Enterprise Ready:</strong> Security, compliance, and team collaboration</li>
          </ul>
        </div>
      </section>

      <Callout emoji="✅">Core concepts ready. More sections coming soon.</Callout>
      
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-2">What's in Alpha?</h2>
        <ul className="list-disc pl-6 text-neutral-300 space-y-1">
          <li>✅ Getting Started</li>
          <li>✅ Workflow Builder Basics</li>
          <li>🚧 AI Blocks & Nodes</li>
          <li>🕒 Roadmap</li>
        </ul>
      </section>
      
      <ComingSoon />
    </div>
  );
} 