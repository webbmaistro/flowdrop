"use client"

import React from 'react';
import { FileText, Mail, Brain, Send, Clock, ExternalLink } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import Link from 'next/link';

const nodeCategories = [
  {
    title: "Workflow Triggers",
    description: "Nodes that start your workflows",
    nodes: [
      { name: "Manual Trigger", href: "/docs/nodes/manual-trigger", description: "Start workflows manually", icon: Clock, color: "text-blue-500" },
      { name: "Schedule", href: "/docs/nodes/schedule", description: "Trigger workflows on a schedule", icon: Clock, color: "text-green-500" },
      { name: "Email", href: "/docs/nodes/email", description: "Trigger on new emails", icon: Mail, color: "text-purple-500" },
      { name: "Webhook", href: "/docs/nodes/webhook", description: "Trigger via HTTP requests", icon: ExternalLink, color: "text-orange-500" },
    ]
  },
  {
    title: "Action Nodes",
    description: "Nodes that perform actions in your workflows",
    nodes: [
      { name: "LLM Prompt", href: "/docs/nodes/llm-prompt", description: "Generate AI-powered content", icon: Brain, color: "text-purple-500" },
      { name: "Send Email", href: "/docs/nodes/send-email", description: "Send automated emails", icon: Send, color: "text-green-500" },
      { name: "Gmail Read Emails", href: "/docs/nodes/gmail-read-emails", description: "Read Gmail messages", icon: Mail, color: "text-blue-500" },
      { name: "Gmail Write Labels", href: "/docs/nodes/gmail-write-labels", description: "Manage Gmail labels", icon: FileText, color: "text-red-500" },
    ]
  },
  {
    title: "Flow Control",
    description: "Nodes that control workflow logic",
    nodes: [
      { name: "If Else", href: "/docs/nodes/if-else", description: "Conditional logic branching", icon: Clock, color: "text-yellow-500" },
      { name: "AI Switch", href: "/docs/nodes/ai-switch", description: "AI-powered decision making", icon: Brain, color: "text-purple-500" },
      { name: "For Each", href: "/docs/nodes/for-each", description: "Loop through data", icon: Clock, color: "text-blue-500" },
    ]
  }
];

export default function NodesIndex() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Node Library</h1>
        <p className="text-neutral-400">Explore all available nodes to build powerful AI workflows</p>
      </div>

      <div className="space-y-8">
        {nodeCategories.map((category) => (
          <div key={category.title}>
            <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
            <p className="text-neutral-400 mb-4">{category.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.nodes.map((node) => (
                <Card key={node.name} className="border-neutral-700 hover:border-neutral-600 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${node.color.replace('text-', 'bg-')}/20`}>
                        <node.icon className={`w-5 h-5 ${node.color}`} />
                      </div>
                      <CardTitle className="text-lg">{node.name}</CardTitle>
                    </div>
                    <CardDescription>{node.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={node.href}>
                      <Button variant="outline" className="w-full">
                        View Documentation
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-neutral-800 rounded-xl p-6 border border-neutral-700">
        <h3 className="text-xl font-semibold mb-3">Getting Started with Nodes</h3>
        <p className="text-neutral-300 mb-4">
          Nodes are the building blocks of your workflows. Each node performs a specific function, 
          from triggering workflows to processing data and performing actions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-neutral-400">
          <div>
            <strong>1. Choose a Trigger:</strong> Start with a trigger node that activates your workflow
          </div>
          <div>
            <strong>2. Add Actions:</strong> Connect action nodes to perform tasks and operations
          </div>
          <div>
            <strong>3. Control Flow:</strong> Use flow control nodes to add logic and decision-making
          </div>
        </div>
      </div>
    </div>
  );
}
