"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageSquare, Play, CheckCircle, ArrowRight, Bot, FileText, Database } from 'lucide-react';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";

const workflowExamples = [
  {
    title: "Email to Spreadsheet Automation",
    description: "Automatically save customer inquiries to a Google Sheet",
    icon: FileText,
    difficulty: "Beginner",
    time: "5 minutes",
    steps: [
      "Set up Gmail trigger for new emails",
      "Add Google Sheets node to save data",
      "Configure data mapping",
      "Test and activate workflow"
    ]
  },
  {
    title: "Discord Message Processing",
    description: "Process and respond to Discord messages automatically",
    icon: MessageSquare,
    difficulty: "Beginner", 
    time: "10 minutes",
    steps: [
      "Connect Discord integration",
      "Set up message trigger",
      "Add AI processing node",
      "Configure response logic"
    ]
  },
  {
    title: "Data Analysis Workflow",
    description: "Analyze data from multiple sources and generate reports",
    icon: Database,
    difficulty: "Intermediate",
    time: "15 minutes", 
    steps: [
      "Connect data sources",
      "Set up data processing nodes",
      "Add AI analysis capabilities",
      "Configure report generation"
    ]
  }
];

const workflowComponents = [
  {
    title: "Triggers",
    description: "Start your workflow when something happens",
    examples: ["New email arrives", "File uploaded", "Scheduled time", "Webhook received"]
  },
  {
    title: "Actions", 
    description: "What your workflow does",
    examples: ["Send email", "Update spreadsheet", "Post to Discord", "Generate report"]
  },
  {
    title: "AI Processing",
    description: "Smart decision making and content generation",
    examples: ["Analyze text", "Generate responses", "Classify data", "Extract insights"]
  }
];

export default function FirstWorkflowPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className={cn(typography.h1, "mb-4")}>
          Your First Workflow
        </h1>
        <p className={cn(typography.bodyLarge, "text-text-secondary mb-8")}>
          Learn how to create your first automation workflow with Flowdrop. We'll walk through 
          building a simple but powerful automation from start to finish.
        </p>
      </div>

      {/* What is a Workflow */}
      <div className="mb-12">
        <h2 className={cn(typography.h2, "mb-6")}>
          What is a Workflow?
        </h2>
        
        <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 mb-6">
          <p className={cn(typography.body, "text-text-secondary mb-4")}>
            A workflow is a series of connected steps that automate a process. Think of it as a recipe 
            for your computer - you define what should happen when certain conditions are met.
          </p>
          <p className={cn(typography.body, "text-text-secondary")}>
            <strong>Example:</strong> "When I receive an email from a customer, automatically save their 
            information to a spreadsheet and send them a confirmation."
          </p>
        </div>

        <Callout emoji="🤖" color="border-primary-main">
          <strong>AI-Powered:</strong> Flowdrop workflows can include AI nodes that make smart decisions, 
          analyze content, and generate responses automatically. This makes your automations much more 
          intelligent than simple if-then rules.
        </Callout>
      </div>

      {/* Workflow Components */}
      <div className="mb-12">
        <h2 className={cn(typography.h2, "mb-8")}>
          Workflow Building Blocks
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {workflowComponents.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700"
            >
              <h3 className={cn(typography.h3, "mb-3 text-primary-main")}>
                {component.title}
              </h3>
              <p className={cn(typography.body, "text-text-secondary mb-4")}>
                {component.description}
              </p>
              <ul className="space-y-1">
                {component.examples.map((example, exampleIndex) => (
                  <li key={exampleIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-main rounded-full" />
                    <span className={cn(typography.bodySmall, "text-text-secondary")}>
                      {example}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Example Workflows */}
      <div className="mb-12">
        <h2 className={cn(typography.h2, "mb-8")}>
          Example Workflows to Try
        </h2>
        
        <div className="space-y-6">
          {workflowExamples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-main/20 rounded-xl flex items-center justify-center">
                    <example.icon className="w-6 h-6 text-primary-main" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className={cn(typography.h3, "text-text-primary")}>
                      {example.title}
                    </h3>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-primary-main/20 text-primary-main text-xs rounded-full">
                        {example.difficulty}
                      </span>
                      <span className="px-2 py-1 bg-neutral-700 text-neutral-300 text-xs rounded-full">
                        {example.time}
                      </span>
                    </div>
                  </div>
                  
                  <p className={cn(typography.body, "text-text-secondary mb-4")}>
                    {example.description}
                  </p>
                  
                  <div>
                    <h4 className={cn(typography.bodyLarge, "font-semibold mb-2 text-text-primary")}>
                      Steps:
                    </h4>
                    <ol className="space-y-1">
                      {example.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2">
                          <span className="w-5 h-5 bg-primary-main/20 text-primary-main rounded-full flex items-center justify-center text-xs font-semibold mt-0.5">
                            {stepIndex + 1}
                          </span>
                          <span className={cn(typography.bodySmall, "text-text-secondary")}>
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Chat Integration */}
      <div className="mb-12">
        <h2 className={cn(typography.h2, "mb-6")}>
          Using AI Chat to Build Workflows
        </h2>
        
        <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="flex items-center gap-3 mb-4">
            <Bot className="w-6 h-6 text-primary-main" />
            <h3 className={cn(typography.h3, "text-primary-main")}>
              AI Assistant
            </h3>
          </div>
          
          <p className={cn(typography.body, "text-text-secondary mb-4")}>
            Flowdrop's AI assistant can help you build workflows by simply describing what you want to achieve. 
            Just tell it what you need, and it will create the workflow for you.
          </p>
          
          <div className="bg-neutral-900/50 rounded-lg p-4 mb-4">
            <h4 className={cn(typography.bodyLarge, "font-semibold mb-2 text-text-primary")}>
              Example AI Prompts:
            </h4>
            <ul className="space-y-2 text-neutral-300">
              <li>• "When I get an email from a customer, save their info to a Google Sheet"</li>
              <li>• "Every Monday, send a weekly report to my team"</li>
              <li>• "When someone posts in Discord, analyze their message and respond appropriately"</li>
            </ul>
          </div>
          
          <Callout emoji="💬" color="border-primary-main">
            <strong>Pro Tip:</strong> The more specific you are in your description, the better the AI can 
            understand and build exactly what you need. Include details about triggers, actions, and any 
            special conditions.
          </Callout>
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
            Ready to Build?
          </h3>
          <p className={cn(typography.body, "text-text-secondary mb-6 max-w-2xl mx-auto")}>
            You now understand the basics of workflows! Head to the Flowdrop app and try creating 
            your first automation. Start simple and gradually build more complex workflows.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-primary-main">
            <span className={cn(typography.body, "font-medium")}>
              Start building your first workflow
            </span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
