"use client"

import React from 'react';
import { FileText, Mail, Brain, Send, Clock, ExternalLink, Twitter, FileSpreadsheet, Linkedin, Database, Plus, Settings, GitCommit, Calendar, Search } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import Link from 'next/link';

const nodeCategories = [
  {
    title: "Workflow Triggers",
    description: "Nodes that start your workflows",
    nodes: [
      { name: "Manual Trigger", href: "/docs/nodes/trigger", description: "Start workflows manually", icon: Clock, color: "text-primary-main" },
      { name: "Schedule", href: "/docs/nodes/schedule", description: "Trigger workflows on a schedule", icon: Clock, color: "text-green-500" },
      { name: "Email", href: "/docs/nodes/gmail-read-emails", description: "Trigger on new emails", icon: Mail, color: "text-purple-500" },
      { name: "Webhook", href: "/docs/nodes/webhook", description: "Trigger via HTTP requests", icon: ExternalLink, color: "text-orange-500" },
      { name: "GitHub New Commit", href: "/docs/nodes/github-new-commit", description: "Trigger on GitHub commits", icon: GitCommit, color: "text-gray-600" },
    ]
  },
  {
    title: "Action Nodes",
    description: "Nodes that perform actions in your workflows",
    nodes: [
      { name: "LLM Prompt", href: "/docs/nodes/llm-prompt", description: "Generate AI-powered content", icon: Brain, color: "text-purple-500" },
      { name: "LLM Structured Output", href: "/docs/nodes/llm-structured-output", description: "Generate structured JSON using LLM with schema validation", icon: Brain, color: "text-purple-600" },
      { name: "Google Search", href: "/docs/nodes/google-search", description: "Search Google and get structured results", icon: Search, color: "text-blue-500" },
      { name: "Gmail Read Emails", href: "/docs/nodes/gmail-read-emails", description: "Read Gmail messages", icon: Mail, color: "text-primary-main" },
      { name: "Gmail Send Email", href: "/docs/nodes/gmail-send-email", description: "Send emails using Gmail", icon: Send, color: "text-red-500" },
      { name: "Gmail Write Labels", href: "/docs/nodes/gmail-write-labels", description: "Manage Gmail labels", icon: Mail, color: "text-red-500" },
      { name: "Outlook Read Emails", href: "/docs/nodes/outlook-read-emails", description: "Read Outlook messages", icon: Mail, color: "text-blue-500" },
      { name: "Outlook Draft Email", href: "/docs/nodes/outlook-draft-email", description: "Create draft emails in Outlook", icon: Mail, color: "text-blue-500" },
      { name: "Outlook Send Email", href: "/docs/nodes/outlook-send-email", description: "Send emails using Outlook", icon: Send, color: "text-blue-600" },
      { name: "X Create Post", href: "/docs/nodes/x-create-post", description: "Create posts on X (Twitter)", icon: Twitter, color: "text-blue-500" },
      { name: "LinkedIn Post", href: "/docs/nodes/linkedin-post", description: "Create posts on LinkedIn", icon: Linkedin, color: "text-blue-600" },
      { name: "Slack Send Message", href: "/docs/nodes/slack-send-message", description: "Send messages to Slack channels", icon: Send, color: "text-purple-500" },
      { name: "PDF Read", href: "/docs/nodes/pdf-read", description: "Read and process PDF files", icon: FileText, color: "text-red-500" },
      { name: "Word Read", href: "/docs/nodes/word-read", description: "Read Word document content as HTML", icon: FileText, color: "text-blue-600" },
      { name: "Word Write Content", href: "/docs/nodes/word-write-contents", description: "Overwrite Word document contents", icon: FileText, color: "text-blue-600" },
      { name: "Word Duplicate", href: "/docs/nodes/word-duplicate", description: "Duplicate Word documents", icon: FileText, color: "text-blue-600" },
      { name: "Excel Read", href: "/docs/nodes/excel-read", description: "Read data from Excel workbooks", icon: FileSpreadsheet, color: "text-green-600" },
      { name: "Excel Write", href: "/docs/nodes/excel-write", description: "Write data to Excel workbooks", icon: FileSpreadsheet, color: "text-green-600" },
      { name: "Google Sheets Read", href: "/docs/nodes/google-sheets-read", description: "Read data from Google Sheets", icon: FileSpreadsheet, color: "text-green-500" },
      { name: "Google Sheets Write", href: "/docs/nodes/google-sheets-write", description: "Write data to Google Sheets", icon: FileSpreadsheet, color: "text-green-500" },
      { name: "Google Sheets Create Spreadsheet", href: "/docs/nodes/google-sheets-create-spreadsheet", description: "Create new Google Spreadsheets", icon: FileSpreadsheet, color: "text-green-500" },
      { name: "Google Sheets Create Sheet", href: "/docs/nodes/google-sheets-create-sheet", description: "Create new sheets within existing Google Spreadsheets", icon: FileSpreadsheet, color: "text-green-500" },
      { name: "Google Sheets Update Row", href: "/docs/nodes/google-sheets-update-row", description: "Update entire rows in Google Sheets", icon: FileSpreadsheet, color: "text-green-500" },
      { name: "Google Sheets Update Column", href: "/docs/nodes/google-sheets-update-column", description: "Update entire columns in Google Sheets", icon: FileSpreadsheet, color: "text-green-500" },
      { name: "Google Sheets Get Cell", href: "/docs/nodes/google-sheets-get-cell", description: "Get a single cell value from Google Sheets", icon: FileSpreadsheet, color: "text-green-500" },
      { name: "Google Sheets Append Row", href: "/docs/nodes/google-sheets-append-row", description: "Append a single row of data to Google Sheets", icon: FileSpreadsheet, color: "text-green-500" },
      { name: "Google Docs Create Document", href: "/docs/nodes/google-docs-create", description: "Create new Google Documents", icon: FileText, color: "text-blue-500" },
      { name: "Google Docs Read", href: "/docs/nodes/google-docs-read", description: "Read content from Google Documents", icon: FileText, color: "text-blue-500" },
      { name: "Google Docs Append", href: "/docs/nodes/google-docs-append", description: "Append text to Google Documents", icon: FileText, color: "text-blue-500" },
      { name: "Google Docs Duplicate Document", href: "/docs/nodes/google-docs-duplicate", description: "Duplicate Google Documents with all content and formatting", icon: FileText, color: "text-blue-500" },
      { name: "Notion Database Query", href: "/docs/nodes/notion-database-query", description: "Query entries from Notion databases", icon: Database, color: "text-neutral-500" },
      { name: "Notion Page Create", href: "/docs/nodes/notion-page-create", description: "Create new pages in Notion databases", icon: Plus, color: "text-neutral-500" },
      { name: "Notion Page Update", href: "/docs/nodes/notion-page-update", description: "Update properties of existing Notion pages", icon: FileText, color: "text-neutral-500" },
      { name: "GitHub Create Pull Request", href: "/docs/nodes/github-create-pull-request", description: "Create pull requests in GitHub repositories", icon: ExternalLink, color: "text-gray-600" },
      { name: "GitHub Read File", href: "/docs/nodes/github-read-file", description: "Read files from GitHub repositories", icon: FileText, color: "text-gray-600" },
      { name: "GitHub Read Commits", href: "/docs/nodes/github-read-commits", description: "Read recent commits from GitHub repositories", icon: GitCommit, color: "text-gray-600" },
      { name: "Google Calendar Create Event", href: "/docs/nodes/google-calendar-create-event", description: "Create calendar events in Google Calendar", icon: Calendar, color: "text-blue-500" },
    ]
  },
  {
    title: "Data Processing",
    description: "Nodes that process and transform data",
    nodes: [
      { name: "Randomize", href: "/docs/nodes/randomize", description: "Randomly select from a list", icon: Clock, color: "text-purple-500" },
      { name: "Set Value", href: "/docs/nodes/set-value", description: "Set constant values", icon: Settings, color: "text-blue-500" },
    ]
  },
  {
    title: "Flow Control",
    description: "Nodes that control workflow logic",
    nodes: [
      { name: "If Else", href: "/docs/nodes/if-else", description: "Conditional logic branching", icon: Clock, color: "text-yellow-500" },
      { name: "AI Switch", href: "/docs/nodes/ai-switch", description: "AI-powered decision making", icon: Brain, color: "text-purple-500" },
      { name: "For Each", href: "/docs/nodes/for-each", description: "Loop through data", icon: Clock, color: "text-primary-main" },
      { name: "Wait", href: "/docs/nodes/wait", description: "Pause workflow execution", icon: Clock, color: "text-blue-500" },
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
