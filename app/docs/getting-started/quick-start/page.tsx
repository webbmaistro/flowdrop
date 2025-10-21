"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Play, ArrowRight, CheckCircle, Clock, Users, Settings } from 'lucide-react';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import Callout from "@/components/ui/Callout";

const steps = [
  {
    title: "Sign Up & Access",
    description: "Create your Flowdrop account and access the dashboard",
    icon: Users,
    details: [
      "Visit flowdrop.xyz and click 'Get Started'",
      "Sign up with Google or email",
      "Verify your email address",
      "Access your personal workspace"
    ]
  },
  {
    title: "Connect Your First Integration", 
    description: "Link your favorite apps to start building automations",
    icon: Settings,
    details: [
      "Go to the Integrations page",
      "Connect Gmail, Google Sheets, or Discord",
      "Authorize permissions for each service",
      "Test the connection to ensure it works"
    ]
  },
  {
    title: "Create Your First Workflow",
    description: "Use the AI assistant to build a simple automation",
    icon: Zap,
    details: [
      "Click 'New Workflow' on the dashboard",
      "Describe what you want to automate in chat",
      "Let AI generate the workflow for you",
      "Review and test the automation"
    ]
  },
  {
    title: "Activate & Monitor",
    description: "Turn on your workflow and watch it work",
    icon: Play,
    details: [
      "Click the power button to activate",
      "Monitor executions in real-time",
      "Check the executions page for results",
      "Make adjustments as needed"
    ]
  }
];

export default function QuickStartPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className={cn(typography.h1, "mb-4")}>
          Quick Start Guide
        </h1>
        <p className={cn(typography.bodyLarge, "text-text-secondary mb-8")}>
          Get up and running with Flowdrop in under 5 minutes. This guide will walk you through 
          creating your first automation workflow.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="mb-12">
        <h2 className={cn(typography.h2, "mb-6")}>
          Before You Start
        </h2>
        
        <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-6">
          <h3 className={cn(typography.h3, "mb-4 flex items-center gap-2")}>
            <CheckCircle className="w-5 h-5 text-success-500" />
            What You'll Need
          </h3>
          <ul className="space-y-2 text-neutral-300">
            <li>• A Google account (for Gmail, Google Sheets, Google Docs integration)</li>
            <li>• Access to the apps you want to automate (Discord, Slack, etc.)</li>
            <li>• A clear idea of a repetitive task you'd like to automate</li>
          </ul>
        </div>

        <Callout emoji="💡" color="border-primary-main">
          <strong>Pro Tip:</strong> Start with something simple like "When I get an email from a customer, 
          automatically add their information to a Google Sheet." This gives you a feel for how Flowdrop works 
          before tackling more complex automations.
        </Callout>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mb-12">
        <h2 className={cn(typography.h2, "mb-8")}>
          Step-by-Step Setup
        </h2>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-main/20 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-main" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-primary-main text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <h3 className={cn(typography.h3, "text-text-primary")}>
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className={cn(typography.body, "text-text-secondary mb-4")}>
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-main rounded-full mt-2 flex-shrink-0" />
                        <span className={cn(typography.bodySmall, "text-text-secondary")}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-primary-main/10 to-purple-700/10 rounded-2xl p-8 border border-primary-main/20"
      >
        <div className="text-center">
          <h3 className={cn(typography.h3, "mb-4 text-primary-main")}>
            🎉 Congratulations!
          </h3>
          <p className={cn(typography.body, "text-text-secondary mb-6 max-w-2xl mx-auto")}>
            You've successfully created your first automation! Now you can explore more advanced features, 
            create complex workflows, and join our community for tips and inspiration.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-primary-main">
            <span className={cn(typography.body, "font-medium")}>
              Ready for your first workflow?
            </span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
