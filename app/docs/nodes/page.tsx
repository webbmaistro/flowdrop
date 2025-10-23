"use client"

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { FileText, Mail, Brain, Send, Clock, ExternalLink, Twitter, FileSpreadsheet, Linkedin, Database, Plus, Settings, GitCommit, Calendar, Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import Link from 'next/link';

const nodeCategories = [
  {
    title: "Workflow Triggers",
    description: "Nodes that start your workflows",
    nodes: [
      { name: "Manual Trigger", href: "/docs/nodes/trigger", description: "Start workflows manually", icon: Clock, color: "text-white" },
      { name: "Schedule", href: "/docs/nodes/schedule", description: "Trigger workflows on a schedule", icon: Clock, color: "text-white" },
      { name: "Email", href: "/docs/nodes/gmail-read-emails", description: "Trigger on new emails", logo: "/logos/gmail.svg", color: "text-[#EA4335]" },
      { name: "Webhook", href: "/docs/nodes/webhook", description: "Trigger via HTTP requests", icon: ExternalLink, color: "text-white" },
      { name: "GitHub New Commit", href: "/docs/nodes/github-new-commit", description: "Trigger on GitHub commits", logo: "/logos/github.svg", color: "text-white" },
    ]
  },
  {
    title: "Action Nodes",
    description: "Nodes that perform actions in your workflows",
    nodes: [
      { name: "LLM Prompt", href: "/docs/nodes/llm-prompt", description: "Generate AI-powered content", icon: Brain, color: "text-white" },
      { name: "LLM Structured Output", href: "/docs/nodes/llm-structured-output", description: "Generate structured JSON using LLM with schema validation", icon: Brain, color: "text-white" },
      { name: "Google Search", href: "/docs/nodes/google-search", description: "Search Google and get structured results", icon: Search, color: "text-[#4285F4]" },
      { name: "Gmail Read Emails", href: "/docs/nodes/gmail-read-emails", description: "Read Gmail messages", logo: "/logos/gmail.svg", color: "text-[#EA4335]" },
      { name: "Gmail Send Email", href: "/docs/nodes/gmail-send-email", description: "Send emails using Gmail", logo: "/logos/gmail.svg", color: "text-[#EA4335]" },
      { name: "Gmail Write Labels", href: "/docs/nodes/gmail-write-labels", description: "Manage Gmail labels", logo: "/logos/gmail.svg", color: "text-[#EA4335]" },
      { name: "Outlook Read Emails", href: "/docs/nodes/outlook-read-emails", description: "Read Outlook messages", logo: "/logos/microsoft-outlook.svg", color: "text-[#0078D4]" },
      { name: "Outlook Draft Email", href: "/docs/nodes/outlook-draft-email", description: "Create draft emails in Outlook", logo: "/logos/microsoft-outlook.svg", color: "text-[#0078D4]" },
      { name: "Outlook Send Email", href: "/docs/nodes/outlook-send-email", description: "Send emails using Outlook", logo: "/logos/microsoft-outlook.svg", color: "text-[#0078D4]" },
      { name: "X Create Post", href: "/docs/nodes/x-create-post", description: "Create posts on X (Twitter)", icon: Twitter, color: "text-white" },
      { name: "LinkedIn Post", href: "/docs/nodes/linkedin-post", description: "Create posts on LinkedIn", icon: Linkedin, color: "text-[#0A66C2]" },
      { name: "Slack Send Message", href: "/docs/nodes/slack-send-message", description: "Send messages to Slack channels", logo: "/logos/slack.svg", color: "text-[#4A154B]" },
      { name: "PDF Read", href: "/docs/nodes/pdf-read", description: "Read and process PDF files", icon: FileText, color: "text-white" },
      { name: "Word Read", href: "/docs/nodes/word-read", description: "Read Word document content as HTML", logo: "/logos/microsoft-word.svg", color: "text-[#2B579A]" },
      { name: "Word Write Content", href: "/docs/nodes/word-write-contents", description: "Overwrite Word document contents", logo: "/logos/microsoft-word.svg", color: "text-[#2B579A]" },
      { name: "Word Duplicate", href: "/docs/nodes/word-duplicate", description: "Duplicate Word documents", logo: "/logos/microsoft-word.svg", color: "text-[#2B579A]" },
      { name: "Excel Read", href: "/docs/nodes/excel-read", description: "Read data from Excel workbooks", logo: "/logos/microsoft-excel.svg", color: "text-[#217346]" },
      { name: "Excel Write", href: "/docs/nodes/excel-write", description: "Write data to Excel workbooks", logo: "/logos/microsoft-excel.svg", color: "text-[#217346]" },
      { name: "Google Sheets Read", href: "/docs/nodes/google-sheets-read", description: "Read data from Google Sheets", logo: "/logos/google-sheets.svg", color: "text-[#34A853]" },
      { name: "Google Sheets Write", href: "/docs/nodes/google-sheets-write", description: "Write data to Google Sheets", logo: "/logos/google-sheets.svg", color: "text-[#34A853]" },
      { name: "Google Sheets Create Spreadsheet", href: "/docs/nodes/google-sheets-create-spreadsheet", description: "Create new Google Spreadsheets", logo: "/logos/google-sheets.svg", color: "text-[#34A853]" },
      { name: "Google Sheets Create Sheet", href: "/docs/nodes/google-sheets-create-sheet", description: "Create new sheets within existing Google Spreadsheets", logo: "/logos/google-sheets.svg", color: "text-[#34A853]" },
      { name: "Google Sheets Update Row", href: "/docs/nodes/google-sheets-update-row", description: "Update entire rows in Google Sheets", logo: "/logos/google-sheets.svg", color: "text-[#34A853]" },
      { name: "Google Sheets Update Column", href: "/docs/nodes/google-sheets-update-column", description: "Update entire columns in Google Sheets", logo: "/logos/google-sheets.svg", color: "text-[#34A853]" },
      { name: "Google Sheets Get Cell", href: "/docs/nodes/google-sheets-get-cell", description: "Get a single cell value from Google Sheets", logo: "/logos/google-sheets.svg", color: "text-[#34A853]" },
      { name: "Google Sheets Append Row", href: "/docs/nodes/google-sheets-append-row", description: "Append a single row of data to Google Sheets", logo: "/logos/google-sheets.svg", color: "text-[#34A853]" },
      { name: "Google Docs Create Document", href: "/docs/nodes/google-docs-create", description: "Create new Google Documents", logo: "/logos/google-docs.svg", color: "text-[#4285F4]" },
      { name: "Google Docs Read", href: "/docs/nodes/google-docs-read", description: "Read content from Google Documents", logo: "/logos/google-docs.svg", color: "text-[#4285F4]" },
      { name: "Google Docs Append", href: "/docs/nodes/google-docs-append", description: "Append text to Google Documents", logo: "/logos/google-docs.svg", color: "text-[#4285F4]" },
      { name: "Google Docs Duplicate Document", href: "/docs/nodes/google-docs-duplicate", description: "Duplicate Google Documents with all content and formatting", logo: "/logos/google-docs.svg", color: "text-[#4285F4]" },
      { name: "Notion Database Query", href: "/docs/nodes/notion-database-query", description: "Query entries from Notion databases", logo: "/logos/notion.svg", color: "text-white" },
      { name: "Notion Page Create", href: "/docs/nodes/notion-page-create", description: "Create new pages in Notion databases", logo: "/logos/notion.svg", color: "text-white" },
      { name: "Notion Page Update", href: "/docs/nodes/notion-page-update", description: "Update properties of existing Notion pages", logo: "/logos/notion.svg", color: "text-white" },
      { name: "GitHub Create Pull Request", href: "/docs/nodes/github-create-pull-request", description: "Create pull requests in GitHub repositories", logo: "/logos/github.svg", color: "text-white" },
      { name: "GitHub Read File", href: "/docs/nodes/github-read-file", description: "Read files from GitHub repositories", logo: "/logos/github.svg", color: "text-white" },
      { name: "GitHub Read Commits", href: "/docs/nodes/github-read-commits", description: "Read recent commits from GitHub repositories", logo: "/logos/github.svg", color: "text-white" },
      { name: "Google Calendar Create Event", href: "/docs/nodes/google-calendar-create-event", description: "Create calendar events in Google Calendar", logo: "/logos/google-calendar.svg", color: "text-[#4285F4]" },
    ]
  },
  {
    title: "Data Processing",
    description: "Nodes that process and transform data",
    nodes: [
      { name: "Randomize", href: "/docs/nodes/randomize", description: "Randomly select from a list", icon: Clock, color: "text-white" },
      { name: "Set Value", href: "/docs/nodes/set-value", description: "Set constant values", icon: Settings, color: "text-white" },
    ]
  },
  {
    title: "Flow Control",
    description: "Nodes that control workflow logic",
    nodes: [
      { name: "If Else", href: "/docs/nodes/if-else", description: "Conditional logic branching", icon: Clock, color: "text-white" },
      { name: "AI Switch", href: "/docs/nodes/ai-switch", description: "AI-powered decision making", icon: Brain, color: "text-white" },
      { name: "For Each", href: "/docs/nodes/for-each", description: "Loop through data", icon: Clock, color: "text-white" },
      { name: "Wait", href: "/docs/nodes/wait", description: "Pause workflow execution", icon: Clock, color: "text-white" },
    ]
  }
];

export default function NodesIndex() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter nodes based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return nodeCategories;
    }

    const query = searchQuery.toLowerCase();
    return nodeCategories
      .map(category => ({
        ...category,
        nodes: category.nodes.filter(node => 
          node.name.toLowerCase().includes(query) ||
          node.description.toLowerCase().includes(query)
        )
      }))
      .filter(category => category.nodes.length > 0);
  }, [searchQuery]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Node Library</h1>
        <p className="text-neutral-400 mb-4">Explore all available nodes to build powerful AI workflows</p>
        
        {/* Search Bar */}
        <div className="relative mt-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-neutral-400" />
          </div>
          <input
            type="text"
            placeholder="Search nodes by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-neutral-800/60 border border-neutral-700 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-main/50 focus:border-primary-main transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              <span className="text-sm">Clear</span>
            </button>
          )}
        </div>
      </div>

      {filteredCategories.length === 0 ? (
        <div className="text-center py-12">
          <Search className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-neutral-300 mb-2">No nodes found</h3>
          <p className="text-neutral-500">Try adjusting your search query</p>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <div key={category.title}>
              <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
              <p className="text-neutral-400 mb-4">{category.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.nodes.map((node: any) => (
                <Card key={node.name} className="border-neutral-700 hover:border-neutral-600 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${node.color.replace('text-', 'bg-')}/20 flex items-center justify-center`}>
                        {node.logo ? (
                          <Image 
                            src={node.logo} 
                            alt={node.name} 
                            width={20} 
                            height={20}
                            className="w-5 h-5"
                          />
                        ) : (
                          <node.icon className={`w-5 h-5 ${node.color}`} />
                        )}
                      </div>
                      <CardTitle className="text-lg">{node.name}</CardTitle>
                    </div>
                    <CardDescription>{node.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link 
                      href={node.href}
                      className="group relative block bg-neutral-800/40 hover:bg-neutral-800/60 border border-neutral-700/50 hover:border-neutral-600 rounded-lg p-3 transition-all duration-200 hover:scale-[1.02]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-neutral-100 group-hover:text-primary-main transition-colors">
                          View Documentation
                        </span>
                        <div className="w-6 h-6 rounded-full bg-neutral-700/50 group-hover:bg-primary-main/20 flex items-center justify-center transition-all duration-200">
                          <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-primary-main group-hover:translate-x-0.5 transition-all duration-200" />
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
              </div>
            </div>
          ))}
        </div>
      )}

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
