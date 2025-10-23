"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, CheckCircle, BookOpen, Zap, Users, Settings, Clock, Brain, Mail, Database, GitBranch, User, PlayCircle, Cog, GitMerge } from 'lucide-react';

import { cn } from '@/lib/utils';

export default function UnderstandingNodeTypesPage() {
  const videoId = "KNMYNKhnT1U"; // YouTube video ID

  const nodeCategories = [
    {
      title: "Workflow Triggers",
      description: "Nodes that start your workflows and determine when they should run",
      icon: PlayCircle,
      color: "text-primary-main",
      bgColor: "bg-primary-main/20",
      examples: ["Manual Trigger", "Schedule", "Email", "Webhook"],
      howItWorks: "These nodes are the entry points of your workflows. They listen for specific events or conditions and initiate the workflow execution when triggered.",
      useCases: [
        "Start workflows manually when needed",
        "Run workflows on a schedule (daily, weekly, etc.)",
        "Trigger workflows when new emails arrive",
        "Start workflows via HTTP requests from external systems"
      ]
    },
    {
      title: "Action Nodes",
      description: "Nodes that perform specific tasks and operations within your workflows",
      icon: Zap,
      color: "text-primary-main",
      bgColor: "bg-primary-main/20",
      examples: ["LLM Prompt", "HTTP Request", "Gmail Actions", "Google Sheets"],
      howItWorks: "Action nodes do the actual work in your workflows. They process data, make API calls, generate content, and perform various operations based on the inputs they receive.",
      useCases: [
        "Generate AI-powered content with LLM prompts",
        "Send HTTP requests to external APIs",
        "Read and write to Gmail messages",
        "Update Google Sheets with data",
        "Generate images and process files"
      ]
    },
    {
      title: "Data Processing",
      description: "Nodes that transform, analyze, and manipulate data as it flows through your workflow",
      icon: Cog,
      color: "text-primary-main",
      bgColor: "bg-primary-main/20",
      examples: ["Randomize", "Data Transform", "Filter", "Sort"],
      howItWorks: "These nodes take input data and process it in various ways - transforming formats, filtering results, randomizing selections, or performing calculations to prepare data for the next steps.",
      useCases: [
        "Randomly select items from a list",
        "Filter data based on specific criteria",
        "Transform data formats (JSON to CSV, etc.)",
        "Sort and organize data",
        "Perform calculations and aggregations"
      ]
    },
    {
      title: "Flow Control",
      description: "Nodes that control the logic and flow of your workflow execution",
      icon: GitMerge,
      color: "text-primary-main",
      bgColor: "bg-primary-main/20",
      examples: ["If Else", "AI Switch", "For Each", "Loop"],
      howItWorks: "Flow control nodes determine which path your workflow should take based on conditions, loop through data sets, or make intelligent decisions about the next steps.",
      useCases: [
        "Create conditional logic (if this, then that)",
        "Use AI to make smart decisions about workflow paths",
        "Loop through lists of data (emails, files, etc.)",
        "Create complex branching logic",
        "Handle different scenarios based on data"
      ]
    },
    {
      title: "Human in the Loop",
      description: "Nodes that pause workflows to get human input, approval, or decision-making",
      icon: User,
      color: "text-primary-main",
      bgColor: "bg-primary-main/20",
      examples: ["Email Approval", "Manual Review", "Human Decision"],
      howItWorks: "These nodes pause your workflow and wait for human input before continuing. They're essential for workflows that require human oversight, approval, or decision-making at critical steps.",
      useCases: [
        "Get human approval for important decisions",
        "Pause workflows for manual review",
        "Require human input for sensitive operations",
        "Get approval before sending important communications",
        "Allow humans to make complex decisions that AI can't handle"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className={cn("text-4xl font-bold mb-4")}>
          Node Types Explained
        </h1>
        <p className={cn("text-lg text-neutral-400 mb-8")}>
          Learn about the different types of nodes in Flowdrop and how they work together to create powerful automations.
        </p>
      </div>

      {/* Video Section */}
      <div className="mb-16">
        <div className="relative group">
          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary-main/10 to-purple-700/10 border border-primary-main/20">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Node Types Guide"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-main/20 rounded-full blur-sm group-hover:bg-primary-main/30 transition-colors duration-300" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500/20 rounded-full blur-sm group-hover:bg-purple-500/30 transition-colors duration-300" />
        </div>
      </div>

      {/* Node Categories Overview */}
      <div className="mb-16">
        <h2 className={cn("text-3xl font-bold mb-8")}>
          The 5 Types of Nodes
        </h2>
        <p className={cn("text-lg text-neutral-300 mb-12")}>
          Every workflow in Flowdrop is built using these five fundamental types of nodes. 
          Understanding how each type works will help you design more effective automations.
        </p>

        <div className="space-y-8">
          {nodeCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 ${category.bgColor} rounded-xl flex-shrink-0`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className={cn("text-2xl font-bold mb-3")}>
                    {category.title}
                  </h3>
                  <p className={cn("text-lg text-neutral-300 mb-4")}>
                    {category.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className={cn("font-semibold mb-3 flex items-center gap-2")}>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        How It Works
                      </h4>
                      <p className="text-neutral-400">
                        {category.howItWorks}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className={cn("font-semibold mb-3 flex items-center gap-2")}>
                        <Zap className="w-4 h-4 text-purple-500" />
                        Common Examples
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.examples.map((example) => (
                          <span
                            key={example}
                            className="px-3 py-1 bg-neutral-700 rounded-full text-sm text-neutral-300"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className={cn("font-semibold mb-3 flex items-center gap-2")}>
                      <BookOpen className="w-4 h-4 text-purple-500" />
                      Use Cases
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {category.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-start gap-2 text-neutral-400">
                          <ArrowRight className="w-4 h-4 text-neutral-500 mt-0.5 flex-shrink-0" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How Nodes Work Together */}
      <div className="mb-16">
        <h2 className={cn("text-3xl font-bold mb-8")}>
          How Nodes Work Together
        </h2>
        
        <div className="bg-gradient-to-r from-primary-main/10 to-purple-700/10 rounded-2xl p-8 border border-primary-main/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className={cn("text-xl font-semibold mb-4")}>
                The Flow of Data
              </h3>
              <p className="text-neutral-300 mb-4">
                Nodes are connected in a sequence, and data flows from one node to the next. 
                Each node receives input from the previous node, processes it, and passes the 
                result to the next node in the chain.
              </p>
              <div className="space-y-2 text-neutral-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Trigger starts the workflow</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Actions process the data</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Data processing transforms results</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Flow control determines next steps</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Human input when needed</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className={cn("text-xl font-semibold mb-4")}>
                Building Effective Workflows
              </h3>
              <p className="text-neutral-300 mb-4">
                The key to powerful workflows is understanding how to combine different node 
                types effectively. Start with a trigger, add actions to do the work, use data 
                processing to prepare information, apply flow control for logic, and include 
                human input when decisions are needed.
              </p>
              <div className="bg-neutral-800 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-200 mb-2">Example Flow:</h4>
                <div className="text-sm text-neutral-400 space-y-1">
                  <div>1. Schedule Trigger → 2. Gmail Read → 3. AI Analysis → 4. If/Else Logic → 5. Human Approval → 6. Send Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="mb-16">
        <h2 className={cn("text-3xl font-bold mb-8")}>
          Next Steps
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h3 className={cn("text-xl font-semibold mb-4 flex items-center gap-2")}>
              <BookOpen className="w-5 h-5 text-blue-500" />
              Explore the Node Library
            </h3>
            <p className="text-neutral-300 mb-4">
              Dive deeper into specific nodes and learn their capabilities, configuration options, and use cases.
            </p>
            <a 
              href="/docs/nodes" 
              className="inline-flex items-center gap-2 text-primary-main hover:text-primary-main/80 transition-colors"
            >
              Browse Node Library
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h3 className={cn("text-xl font-semibold mb-4 flex items-center gap-2")}>
              <Zap className="w-5 h-5 text-green-500" />
              Build Your First Workflow
            </h3>
            <p className="text-neutral-300 mb-4">
              Put your knowledge to practice by creating a real workflow using different node types.
            </p>
            <a 
              href="/docs/getting-started/first-workflow" 
              className="inline-flex items-center gap-2 text-primary-main hover:text-primary-main/80 transition-colors"
            >
              Start Building
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
