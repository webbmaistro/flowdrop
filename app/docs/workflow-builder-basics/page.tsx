"use client"

import React from 'react';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { Workflow, MousePointer, Layers, Zap, Play, Bug, CheckCircle, ArrowRight, Puzzle, Link2, Settings, TestTube, Sparkles, Clock, GitBranch, Database, Code } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";

export default function WorkflowBuilderBasics() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Workflow Builder Basics: Complete Guide to Building Your First AI Workflow in 2024",
    "description": "Master the fundamentals of visual workflow building with this comprehensive guide. Learn how to create, test, and deploy automated workflows using drag-and-drop nodes, triggers, and actions.",
    "image": "https://flowdrop.xyz/website-preview.png",
    "author": {
      "@type": "Organization",
      "name": "Flowdrop",
      "url": "https://flowdrop.xyz"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Flowdrop",
      "logo": {
        "@type": "ImageObject",
        "url": "https://flowdrop.xyz/website-preview.png"
      }
    },
    "datePublished": "2024-12-01",
    "dateModified": "2024-12-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://flowdrop.xyz/docs/workflow-builder-basics"
    },
    "keywords": [
      "workflow builder tutorial",
      "visual workflow builder",
      "drag and drop automation",
      "workflow nodes",
      "workflow connections",
      "automation triggers",
      "workflow testing",
      "no-code workflow",
      "workflow debugging",
      "automation builder guide"
    ],
    "articleSection": "Technology",
    "inLanguage": "en-US",
    "wordCount": 2800,
    "timeRequired": "PT10M",
    "about": [
      {
        "@type": "Thing",
        "name": "Visual Workflow Builder",
        "description": "A drag-and-drop interface for creating automated workflows without code",
        "url": "https://flowdrop.xyz/docs/workflow-builder-basics"
      },
      {
        "@type": "Thing", 
        "name": "Workflow Nodes",
        "description": "Individual building blocks that perform specific actions in an automated workflow",
        "url": "https://flowdrop.xyz/docs/workflow-builder-basics"
      },
      {
        "@type": "Thing",
        "name": "Workflow Testing",
        "description": "The process of validating and debugging automated workflows before deployment",
        "url": "https://flowdrop.xyz/docs/workflow-builder-basics"
      }
    ],
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a workflow node?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A workflow node is a single building block in your automation that performs a specific action. Nodes can be triggers (starting points), actions (tasks to perform), or control flow nodes (decision points). They're connected together to form a complete automated workflow."
          }
        },
        {
          "@type": "Question", 
          "name": "How do I connect nodes in a workflow builder?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To connect nodes, click and drag from the output port of one node to the input port of another node. This creates a connection that passes data between nodes. You can create multiple connections from a single node to create branching workflows."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between triggers and actions in workflow builders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Triggers are the starting points of your workflow - they define when the workflow should run (e.g., on schedule, webhook, or manual start). Actions are the tasks performed after the trigger fires (e.g., send email, update database, call API). Every workflow needs at least one trigger and one action."
          }
        },
        {
          "@type": "Question",
          "name": "How do I test my workflow before deploying it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the built-in test mode to execute your workflow with sample data. Check each node's output to verify it's producing the expected results. Use debugging tools to inspect data flow, and test edge cases to ensure your workflow handles errors gracefully."
          }
        },
        {
          "@type": "Question",
          "name": "What are best practices for building workflows?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start simple and iterate, use descriptive node names, add error handling for critical paths, test thoroughly before deploying, document complex logic, and use variables to avoid hardcoding values. Also, break large workflows into smaller, reusable components."
          }
        }
      ]
    }
  };

  const builderFeatures = [
    {
      icon: MousePointer,
      title: "Drag & Drop Interface",
      description: "Build workflows visually by dragging nodes onto the canvas. No coding required - just point and click.",
      color: "text-blue-400"
    },
    {
      icon: Layers,
      title: "100+ Pre-built Nodes",
      description: "Access a library of ready-to-use nodes for popular services like Gmail, Slack, Google Sheets, and more.",
      color: "text-purple-400"
    },
    {
      icon: GitBranch,
      title: "Smart Connections",
      description: "Connect nodes with intelligent data mapping. The builder suggests the right connections automatically.",
      color: "text-green-400"
    },
    {
      icon: TestTube,
      title: "Real-time Testing",
      description: "Test your workflow as you build. See live results from each node without deploying.",
      color: "text-orange-400"
    }
  ];

  const nodeTypes = [
    {
      type: "Triggers",
      icon: Play,
      description: "Start your workflow automatically or manually",
      examples: ["Manual Trigger", "Schedule", "Webhook", "Email Received"],
      color: "from-blue-500/20 to-blue-600/20 border-blue-500/30"
    },
    {
      type: "Actions",
      icon: Zap,
      description: "Perform tasks like sending emails or updating databases",
      examples: ["LLM Prompt", "HTTP Request", "Send Email", "Update Sheet"],
      color: "from-purple-500/20 to-purple-600/20 border-purple-500/30"
    },
    {
      type: "Flow Control",
      icon: GitBranch,
      description: "Add logic, loops, and conditions to your workflow",
      examples: ["If/Else", "For Each", "AI Switch", "Wait"],
      color: "from-green-500/20 to-green-600/20 border-green-500/30"
    },
    {
      type: "Data Processing",
      icon: Database,
      description: "Transform and manipulate data between nodes",
      examples: ["Set Value", "Randomize", "Transform", "Filter"],
      color: "from-orange-500/20 to-orange-600/20 border-orange-500/30"
    }
  ];

  const buildingSteps = [
    {
      step: 1,
      title: "Choose Your Trigger",
      description: "Start by selecting how your workflow will be initiated. Popular choices include manual triggers for on-demand execution, scheduled triggers for recurring tasks, or webhook triggers for external events.",
      icon: Play,
      tips: [
        "Manual triggers are great for testing and occasional tasks",
        "Schedules work best for regular reporting and maintenance",
        "Webhooks connect external systems in real-time"
      ]
    },
    {
      step: 2,
      title: "Add Action Nodes",
      description: "Drag action nodes onto the canvas and connect them to your trigger. Each node performs a specific task like fetching data, processing information, or sending notifications.",
      icon: Layers,
      tips: [
        "Use descriptive names for each node",
        "Group related nodes together visually",
        "Add notes to document complex logic"
      ]
    },
    {
      step: 3,
      title: "Configure Connections",
      description: "Connect nodes by dragging from output ports to input ports. Data flows through these connections, and you can map fields between nodes to transform information as it moves through your workflow.",
      icon: Link2,
      tips: [
        "Use the data mapper to transform field names",
        "Test connections as you create them",
        "Watch for circular dependencies"
      ]
    },
    {
      step: 4,
      title: "Test Your Workflow",
      description: "Use the test panel to run your workflow with sample data. Check each node's output to verify it's working correctly. Make adjustments and retest until everything works perfectly.",
      icon: TestTube,
      tips: [
        "Test with realistic data samples",
        "Check error handling scenarios",
        "Verify all branches and conditions"
      ]
    },
    {
      step: 5,
      title: "Deploy & Monitor",
      description: "Once tested, activate your workflow to run automatically. Monitor execution logs to ensure it's performing as expected and make refinements based on real-world usage.",
      icon: CheckCircle,
      tips: [
        "Start with a dry-run mode if available",
        "Set up alerts for failures",
        "Review logs regularly for optimization opportunities"
      ]
    }
  ];

  const testingBestPractices = [
    {
      title: "Use Test Mode",
      description: "Run workflows in test mode before deploying to production",
      icon: TestTube
    },
    {
      title: "Check Each Node",
      description: "Verify output data at every step of your workflow",
      icon: CheckCircle
    },
    {
      title: "Test Edge Cases",
      description: "Try empty inputs, large datasets, and error scenarios",
      icon: Bug
    },
    {
      title: "Monitor Execution",
      description: "Review logs and execution history after deployment",
      icon: Clock
    }
  ];

  const advancedTips = [
    {
      title: "Use Variables",
      description: "Store reusable values in variables instead of hardcoding them. This makes workflows easier to maintain and update.",
      category: "Data Management"
    },
    {
      title: "Add Error Handling",
      description: "Include If/Else nodes to handle errors gracefully. Send notifications when something fails so you can respond quickly.",
      category: "Reliability"
    },
    {
      title: "Break Into Modules",
      description: "Split large workflows into smaller, reusable components. This improves performance and makes debugging easier.",
      category: "Architecture"
    },
    {
      title: "Optimize API Calls",
      description: "Batch requests when possible and cache frequently accessed data to reduce API usage and improve speed.",
      category: "Performance"
    },
    {
      title: "Document Your Logic",
      description: "Add notes and descriptions to complex nodes. Your future self (and teammates) will thank you.",
      category: "Maintenance"
    },
    {
      title: "Version Control",
      description: "Save versions of your workflow before making major changes. This lets you roll back if something breaks.",
      category: "Safety"
    }
  ];

  return (
    <>
      <Script
        id="workflow-builder-basics-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto">
        {/* SEO-Rich Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold mb-2">
            Workflow Builder Basics: Your Complete Guide
          </h1>
          <p className="mb-6 text-neutral-300">
            Master the fundamentals of visual workflow building. Learn how to create, connect, test, and deploy automated workflows using drag-and-drop nodes, triggers, and actions.
          </p>
          <div className="flex items-center gap-4 text-sm text-neutral-400 mb-6">
            <span>📅 Updated: December 2024</span>
            <span>⏱️ 10 min read</span>
            <span>🏷️ Tutorial, Workflow Builder, Getting Started</span>
          </div>
        </header>

        {/* Quick Navigation */}
        <nav className="mb-12 p-6 bg-neutral-900/50 rounded-xl border border-neutral-800">
          <p className="text-sm font-semibold text-neutral-400 mb-3">ON THIS PAGE</p>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <a href="#visual-builder" className="text-primary-main hover:underline">Visual Builder Interface</a>
            <a href="#nodes-connections" className="text-primary-main hover:underline">Nodes & Connections</a>
            <a href="#building-steps" className="text-primary-main hover:underline">Step-by-Step Guide</a>
            <a href="#testing" className="text-primary-main hover:underline">Testing & Debugging</a>
            <a href="#best-practices" className="text-primary-main hover:underline">Best Practices</a>
            <a href="#advanced-tips" className="text-primary-main hover:underline">Advanced Tips</a>
          </div>
        </nav>

        {/* Main Content */}
        <article className="prose prose-invert max-w-none">
          
          {/* Visual Builder Interface */}
          <section id="visual-builder" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Workflow className="text-primary-main" />
              The Visual Workflow Builder
            </h2>
            
            <p className="text-lg text-neutral-300 mb-6">
              Flowdrop's visual workflow builder is a <strong>drag-and-drop interface</strong> that lets you create sophisticated automation without writing a single line of code. Think of it as a digital canvas where you connect building blocks (nodes) to create powerful automated processes.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {builderFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-800/50 rounded-xl p-6 border border-white/10"
                >
                  <feature.icon className={cn("w-8 h-8 mb-3", feature.color)} />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <Callout emoji="💡" color="border-blue-500">
              <strong>Pro Tip:</strong> Use the zoom and pan controls to navigate large workflows. Hold Space to drag the canvas, and use Ctrl/Cmd + Scroll to zoom in and out.
            </Callout>
          </section>

          {/* Understanding Nodes and Connections */}
          <section id="nodes-connections" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Puzzle className="text-primary-main" />
              Understanding Nodes & Connections
            </h2>
            
            <p className="text-lg text-neutral-300 mb-8">
              Workflows are built from <strong>nodes</strong> — individual components that each perform a specific task. When you connect nodes together, data flows from one to the next, creating an automated sequence of actions.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Types of Nodes</h3>
            
            <div className="grid gap-6 mb-8">
              {nodeTypes.map((nodeType, index) => (
                <motion.div
                  key={nodeType.type}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "bg-gradient-to-br rounded-xl p-6 border",
                    nodeType.color
                  )}
                >
                  <div className="flex items-start gap-4">
                    <nodeType.icon className="w-8 h-8 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{nodeType.type}</h4>
                      <p className="text-neutral-300 mb-3">{nodeType.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {nodeType.examples.map((example) => (
                          <span key={example} className="text-xs px-3 py-1 bg-black/30 rounded-full border border-white/10">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-4">How Connections Work</h3>
            
            <div className="bg-neutral-800/50 rounded-xl p-6 border border-white/10 mb-6">
              <p className="text-neutral-300 mb-4">
                Connections define the <strong>flow of data</strong> between nodes. When you connect Node A to Node B, the output from Node A becomes available as input to Node B.
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-green-400">Output Ports:</strong> Located on the right side of nodes, these send data to the next node
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-blue-400">Input Ports:</strong> Located on the left side of nodes, these receive data from previous nodes
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-purple-400">Data Mapping:</strong> Transform field names and structures as data moves between nodes
                  </div>
                </div>
              </div>
            </div>

            <Callout emoji="⚡" color="border-purple-500">
              <strong>Quick Tip:</strong> You can create multiple connections from a single node to build branching workflows. This is useful for parallel processing or conditional logic.
            </Callout>
          </section>

          {/* Building Your First Workflow */}
          <section id="building-steps" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Settings className="text-primary-main" />
              Building Your First Workflow: Step by Step
            </h2>
            
            <p className="text-lg text-neutral-300 mb-8">
              Let's walk through the complete process of building a workflow from scratch. We'll cover each step in detail so you can create your first automation with confidence.
            </p>

            <div className="space-y-8">
              {buildingSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-main to-purple-500 flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1 bg-neutral-800/50 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="w-6 h-6 text-primary-main" />
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-neutral-300 mb-4">{step.description}</p>
                      <div className="space-y-2">
                        {step.tips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-start gap-2 text-sm text-neutral-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index < buildingSteps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Testing and Debugging */}
          <section id="testing" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Bug className="text-primary-main" />
              Testing & Debugging Your Workflows
            </h2>
            
            <p className="text-lg text-neutral-300 mb-6">
              Testing is crucial for reliable workflows. Before deploying to production, you need to verify that every node works correctly and handles edge cases gracefully.
            </p>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl p-8 border border-orange-500/30 mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TestTube className="w-6 h-6" />
                Testing Best Practices
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {testingBestPractices.map((practice) => (
                  <div key={practice.title} className="flex items-start gap-3 bg-black/20 rounded-lg p-4">
                    <practice.icon className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{practice.title}</h4>
                      <p className="text-xs text-neutral-400">{practice.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Common Issues & Solutions</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-neutral-800/50 rounded-lg p-5 border border-white/10">
                <h4 className="font-semibold mb-2 text-red-400">❌ Node Failing with "Undefined" Error</h4>
                <p className="text-sm text-neutral-300 mb-2">
                  <strong>Cause:</strong> The previous node isn't providing the expected data field
                </p>
                <p className="text-sm text-neutral-400">
                  <strong>Solution:</strong> Check the previous node's output in test mode. Verify field names match exactly (case-sensitive).
                </p>
              </div>

              <div className="bg-neutral-800/50 rounded-lg p-5 border border-white/10">
                <h4 className="font-semibold mb-2 text-red-400">❌ Workflow Timeout</h4>
                <p className="text-sm text-neutral-300 mb-2">
                  <strong>Cause:</strong> A node is taking too long to execute or waiting for a response that never comes
                </p>
                <p className="text-sm text-neutral-400">
                  <strong>Solution:</strong> Add timeout settings to HTTP requests. Use Wait nodes strategically. Check for infinite loops.
                </p>
              </div>

              <div className="bg-neutral-800/50 rounded-lg p-5 border border-white/10">
                <h4 className="font-semibold mb-2 text-red-400">❌ Data Not Flowing Between Nodes</h4>
                <p className="text-sm text-neutral-300 mb-2">
                  <strong>Cause:</strong> Connections aren't properly configured or nodes aren't executed in the right order
                </p>
                <p className="text-sm text-neutral-400">
                  <strong>Solution:</strong> Verify all connections are complete (no loose ends). Check execution order in the logs.
                </p>
              </div>
            </div>

            <Callout emoji="🔍" color="border-blue-500">
              <strong>Debug Mode:</strong> Enable detailed logging to see exactly what data is passing through each node. This makes troubleshooting much faster.
            </Callout>
          </section>

          {/* Best Practices */}
          <section id="best-practices" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Sparkles className="text-primary-main" />
              Workflow Design Best Practices
            </h2>
            
            <p className="text-lg text-neutral-300 mb-6">
              Building workflows is easy, but building <strong>maintainable, reliable workflows</strong> requires following proven best practices. Here's what the experts do:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Start Simple
                </h3>
                <p className="text-sm text-neutral-300">
                  Begin with a minimal workflow that does one thing well. Test it thoroughly, then gradually add complexity. This makes debugging infinitely easier.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  Name Everything Clearly
                </h3>
                <p className="text-sm text-neutral-300">
                  Use descriptive names like "Fetch Customer Data" instead of "HTTP Request 1". Future you will appreciate the clarity.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  Handle Errors Gracefully
                </h3>
                <p className="text-sm text-neutral-300">
                  Add error handling for critical paths. Send yourself notifications when things fail so you can respond quickly.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl p-6 border border-orange-500/30">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  Test with Real Data
                </h3>
                <p className="text-sm text-neutral-300">
                  Don't just test with perfect inputs. Try edge cases, empty values, and large datasets to ensure robustness.
                </p>
              </div>
            </div>
          </section>

          {/* Advanced Tips */}
          <section id="advanced-tips" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Zap className="text-primary-main" />
              Advanced Tips & Techniques
            </h2>
            
            <p className="text-lg text-neutral-300 mb-8">
              Ready to level up? These advanced techniques will help you build more efficient, maintainable, and powerful workflows.
            </p>

            <div className="space-y-4">
              {advancedTips.map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-neutral-800/50 rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold">{tip.title}</h3>
                    <span className="text-xs px-3 py-1 bg-primary-main/20 text-primary-main rounded-full border border-primary-main/30 whitespace-nowrap">
                      {tip.category}
                    </span>
                  </div>
                  <p className="text-neutral-300">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-primary-main/20 to-purple-500/20 rounded-xl p-8 border border-primary-main/30">
              <h2 className="text-2xl font-bold mb-4">Ready to Build Your First Workflow?</h2>
              <p className="text-neutral-300 mb-6">
                You now have all the fundamentals you need to create powerful automated workflows. Start with something simple, test thoroughly, and iterate based on what you learn.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <a href="/docs/getting-started/first-workflow" className="flex items-center gap-2">
                    Your First Workflow Tutorial
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/docs/nodes" className="flex items-center gap-2">
                    Browse Node Library
                    <Layers className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/docs/ai-workflows-explained" className="block p-5 bg-neutral-800/50 rounded-xl border border-white/10 hover:border-primary-main/50 transition-colors">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary-main" />
                  AI Workflows Explained
                </h3>
                <p className="text-sm text-neutral-400">Learn how AI transforms traditional workflows</p>
              </a>
              <a href="/docs/getting-started/understanding-node-types" className="block p-5 bg-neutral-800/50 rounded-xl border border-white/10 hover:border-primary-main/50 transition-colors">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Puzzle className="w-5 h-5 text-primary-main" />
                  Node Types Explained
                </h3>
                <p className="text-sm text-neutral-400">Deep dive into different node categories</p>
              </a>
              <a href="/docs/javascript-expressions" className="block p-5 bg-neutral-800/50 rounded-xl border border-white/10 hover:border-primary-main/50 transition-colors">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary-main" />
                  JavaScript Expressions
                </h3>
                <p className="text-sm text-neutral-400">Add custom logic with JavaScript</p>
              </a>
            </div>
          </section>

        </article>
      </div>
    </>
  );
}
