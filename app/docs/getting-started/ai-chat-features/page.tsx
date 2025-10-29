"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, Zap, Settings, Wrench, CheckCircle, ArrowRight, Play, Sparkles, Code, AlertTriangle } from 'lucide-react';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import Callout from "@/components/ui/Callout";

export default function AIChatFeaturesPage() {
  const placeholderVideoId = "PLACEHOLDER_VIDEO_ID"; // Replace with actual YouTube video ID when ready
  
  const aiAssistantFeatures = [
    {
      title: "One-Shot Workflow Generation",
      description: "Describe your automation needs in natural language and get a complete workflow instantly",
      icon: Zap,
      examples: [
        "Create a workflow that saves Gmail attachments to Google Drive",
        "Build an automation that posts Discord messages to Slack",
        "Generate a workflow that processes form submissions and sends confirmation emails"
      ]
    },
    {
      title: "Context-Aware Creation",
      description: "Upload files, share URLs, or provide examples to give the AI more context",
      icon: MessageSquare,
      examples: [
        "Upload a sample email to understand the format",
        "Share a Google Sheet template for data structure",
        "Provide example API responses for better integration"
      ]
    },
    {
      title: "Smart Integration Detection",
      description: "Automatically suggests the best integrations and connections for your workflow",
      icon: Settings,
      examples: [
        "Detects Gmail triggers for email-based workflows",
        "Suggests Google Sheets for data storage needs",
        "Recommends Discord for team communication workflows"
      ]
    }
  ];

  const copilotFeatures = [
    {
      title: "Workflow Enhancement",
      description: "Add layers of personalization and complexity to existing workflows",
      icon: Sparkles,
      capabilities: [
        "Add conditional logic and branching",
        "Implement error handling and retry mechanisms",
        "Create custom data transformations",
        "Add user authentication and permissions"
      ]
    },
    {
      title: "Granular Node Editing",
      description: "Make precise changes to specific nodes with context selection",
      icon: Wrench,
      capabilities: [
        "Select specific nodes for targeted modifications",
        "Update node configurations and parameters",
        "Modify data mapping and transformations",
        "Adjust timing and scheduling settings"
      ]
    },
    {
      title: "Troubleshooting & Debugging",
      description: "Solve execution failures and optimize workflow performance",
      icon: AlertTriangle,
      capabilities: [
        "Analyze error messages and suggest fixes",
        "Identify performance bottlenecks",
        "Debug data flow issues",
        "Optimize node configurations"
      ]
    }
  ];

  const useCases = [
    {
      title: "Simple Automation",
      description: "Perfect for beginners - describe what you want and get a working workflow",
      example: "When I receive an email with 'invoice' in the subject, save the attachment to my Google Drive folder called 'Invoices'"
    },
    {
      title: "Complex Workflow Enhancement",
      description: "Start with a basic workflow and add sophisticated features",
      example: "Take a simple email-to-sheet workflow and add AI-powered categorization, duplicate detection, and automated follow-up emails"
    },
    {
      title: "Node-Specific Optimization",
      description: "Fine-tune individual components without rebuilding everything",
      example: "Optimize the Gmail trigger to only process emails from specific senders, or modify the Google Sheets node to format data differently"
    },
    {
      title: "Error Resolution",
      description: "Fix issues and improve reliability",
      example: "Resolve 'authentication failed' errors, fix data mapping issues, or optimize API rate limits"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className={cn(typography.h1, "mb-4")}>
          AI Chat Features
        </h1>
        <p className={cn(typography.bodyLarge, "text-text-secondary mb-8")}>
          Discover how Flowdrop's AI Assistant and Webby AI Chat Copilot can help you build, enhance, and troubleshoot your automation workflows with natural language conversations.
        </p>
      </div>

      {/* Placeholder Video Section */}
      <div className="mb-16">
        <h2 className={cn(typography.h2, "mb-6")}>
          AI Chat in Action
        </h2>
        
        <div className="relative group">
          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary-main/10 to-purple-700/10 border border-primary-main/20">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
              <div className="text-center">
                <Play className="w-16 h-16 text-primary-main mx-auto mb-4" />
                <h3 className={cn(typography.h3, "text-text-primary mb-2")}>
                  AI Chat Features Demo
                </h3>
                <p className={cn(typography.body, "text-text-secondary")}>
                  Video coming soon - watch how AI transforms your automation workflow creation
                </p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-main/20 rounded-full blur-sm group-hover:bg-primary-main/30 transition-colors duration-300" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500/20 rounded-full blur-sm group-hover:bg-purple-500/30 transition-colors duration-300" />
        </div>
      </div>

      {/* AI Assistant Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-primary-main/20 rounded-xl">
            <Bot className="w-6 h-6 text-primary-main" />
          </div>
          <h2 className={cn(typography.h2, "text-text-primary")}>
            AI Assistant
          </h2>
        </div>
        
        <p className={cn(typography.bodyLarge, "text-text-secondary mb-8")}>
          Your agent for generating out-of-the-box workflows in one shot. Simply describe what you want to automate, 
          and the AI Assistant will create a complete, working workflow for you.
        </p>

        <div className="grid md:grid-cols-1 gap-6 mb-8">
          {aiAssistantFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-main/20 rounded-lg">
                  <feature.icon className="w-5 h-5 text-primary-main" />
                </div>
                <h3 className={cn(typography.h3, "text-text-primary")}>
                  {feature.title}
                </h3>
              </div>
              
              <p className={cn(typography.body, "text-text-secondary mb-4")}>
                {feature.description}
              </p>
              
              <div className="space-y-2">
                <h4 className={cn(typography.bodySmall, "font-medium text-text-primary")}>
                  Examples:
                </h4>
                <ul className="space-y-1">
                  {feature.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-main rounded-full mt-2 flex-shrink-0" />
                      <span className={cn(typography.bodySmall, "text-text-secondary")}>
                        {example}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Webby AI Chat Copilot Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-purple-500/20 rounded-xl">
            <MessageSquare className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className={cn(typography.h2, "text-text-primary")}>
            Webby AI Chat Copilot
          </h2>
        </div>
        
        <p className={cn(typography.bodyLarge, "text-text-secondary mb-8")}>
          Your intelligent companion for upgrading and personalizing workflows. The Copilot helps you add layers of complexity, 
          make granular changes to specific nodes, and solve execution problems with contextual understanding.
        </p>

        <div className="grid md:grid-cols-1 gap-6 mb-8">
          {copilotFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <feature.icon className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className={cn(typography.h3, "text-text-primary")}>
                  {feature.title}
                </h3>
              </div>
              
              <p className={cn(typography.body, "text-text-secondary mb-4")}>
                {feature.description}
              </p>
              
              <div className="space-y-2">
                <h4 className={cn(typography.bodySmall, "font-medium text-text-primary")}>
                  Capabilities:
                </h4>
                <ul className="space-y-1">
                  {feature.capabilities.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <span className={cn(typography.bodySmall, "text-text-secondary")}>
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="mb-16">
        <h2 className={cn(typography.h2, "mb-8")}>
          Common Use Cases
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700"
            >
              <h3 className={cn(typography.h3, "text-text-primary mb-3")}>
                {useCase.title}
              </h3>
              
              <p className={cn(typography.body, "text-text-secondary mb-4")}>
                {useCase.description}
              </p>
              
              <div className="bg-neutral-700/50 rounded-lg p-4">
                <h4 className={cn(typography.bodySmall, "font-medium text-text-primary mb-2")}>
                  Example:
                </h4>
                <p className={cn(typography.bodySmall, "text-text-secondary italic")}>
                  "{useCase.example}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tips and Best Practices */}
      <div className="mb-16">
        <h2 className={cn(typography.h2, "mb-8")}>
          Tips for Better Results
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Callout emoji="💡" color="border-primary-main">
            <strong>Be Specific:</strong> The more details you provide about your automation needs, the better the AI can understand and create exactly what you want.
          </Callout>
          
          <Callout emoji="🔧" color="border-purple-500">
            <strong>Iterate and Improve:</strong> Start with the AI Assistant for initial creation, then use the Copilot to refine and enhance your workflows over time.
          </Callout>
          
          <Callout emoji="📁" color="border-blue-500">
            <strong>Provide Context:</strong> Upload sample files, share URLs, or describe your data structure to help the AI understand your specific requirements.
          </Callout>
          
          <Callout emoji="🚀" color="border-green-500">
            <strong>Test and Validate:</strong> Always test your workflows with sample data before deploying to production, and use the Copilot to fix any issues that arise.
          </Callout>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-primary-main/10 to-purple-700/10 rounded-2xl p-8 border border-primary-main/20"
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-primary-main" />
            <h3 className={cn(typography.h3, "text-primary-main")}>
              Ready to Chat with AI?
            </h3>
          </div>
          
          <p className={cn(typography.body, "text-text-secondary mb-6 max-w-2xl mx-auto")}>
            Start building smarter automations with AI-powered chat. Describe your needs in natural language 
            and watch as Flowdrop creates, enhances, and optimizes your workflows.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-primary-main">
            <span className={cn(typography.body, "font-medium")}>
              Try the AI Assistant today
            </span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

