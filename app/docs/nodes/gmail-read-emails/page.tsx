"use client"

import React from 'react';
import { Mail, Database, Settings } from 'lucide-react';
import {
  NodeLayout,
  NodeHeader,
  OverviewSection,
  PrerequisitesSection,
  NodeConfigurationSection,
  BestPracticesSection,
  TroubleshootingSection,
  RelatedResourcesSection,
} from '@/components/docs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import CodeBlock from "@/components/ui/CodeBlock";

export default function GmailReadEmailsNode() {
  const prerequisites = [
    {
      icon: Database,
      title: "Google Integration",
      description: "Must be connected to access Gmail API",
      requirements: [
        "Google account connected",
        "Gmail read scope granted",
        "Access to target Gmail account"
      ]
    },
    {
      icon: Settings,
      title: "Required Scopes",
      description: "API scopes needed for reading emails",
      requirements: [
        "https://www.googleapis.com/auth/gmail.readonly",
        "Or https://www.googleapis.com/auth/gmail.modify for full access"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Mail}
        title="Gmail Read Emails"
        description="Read and analyze Gmail messages programmatically"
        nodeType="Action"
        category="Gmail Integration"
        iconName="Gmail"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Gmail Read Emails</strong> node allows you to read, search, and analyze emails from your Gmail account programmatically. This powerful automation tool integrates with Gmail's API to provide intelligent email processing capabilities for your workflows."
        keyFeatures={[
          "<strong>Flexible Email Reading:</strong> Read emails from specific labels or search queries",
          "<strong>Advanced Search:</strong> Use Gmail's powerful search operators",
          "<strong>Metadata Extraction:</strong> Access sender, subject, date, and content",
          "<strong>Batch Processing:</strong> Handle multiple emails efficiently",
          "<strong>Real-time Access:</strong> Always get the latest emails"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          optional: [
            {
              name: "Label",
              type: "text",
              required: false,
              valueType: "string",
              description: "The Gmail label to read emails from (e.g., 'INBOX', 'SENT', 'IMPORTANT'). Leave empty to search all emails."
            },
            {
              name: "Search Query",
              type: "text",
              required: false,
              valueType: "string",
              description: "Gmail search query to filter emails. Supports all Gmail search operators (e.g., 'from:user@example.com', 'subject:invoice', 'is:unread')."
            },
            {
              name: "Max Results",
              type: "number",
              required: false,
              defaultValue: "10",
              valueType: "number",
              description: "Maximum number of emails to retrieve. Default is 10. Higher values may increase processing time."
            }
          ]
        }}
        outputFields={[
          {
            name: "Emails",
            type: "array",
            valueType: "Array of email objects",
            description: "Array of email objects, each containing id, subject, from, to, date, body (plain text), htmlBody, and snippet. Use For Each node to process individual emails."
          },
          {
            name: "Count",
            type: "number",
            valueType: "Number of emails retrieved",
            description: "The total number of emails retrieved. Useful for conditional logic and tracking."
          },
          {
            name: "Success",
            type: "boolean",
            valueType: "Operation success status",
            description: "Returns true if emails were successfully retrieved, false otherwise."
          },
          {
            name: "Error",
            type: "string",
            valueType: "Error message if failed",
            description: "Contains the error message if the operation failed, null if successful."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Read Unread Emails</CardTitle>
              <CardDescription>
                Process all unread emails from inbox
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "label": "INBOX",
  "searchQuery": "is:unread",
  "maxResults": 50
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Retrieves up to 50 unread emails from the inbox for processing.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Search by Sender</CardTitle>
              <CardDescription>
                Find emails from specific sender
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "searchQuery": "from:notifications@github.com",
  "maxResults": 20
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Retrieves recent emails from GitHub notifications.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Advanced Search Query</CardTitle>
              <CardDescription>
                Complex search with multiple criteria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "searchQuery": "subject:invoice after:2024/01/01 has:attachment",
  "maxResults": 100
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Finds invoices with attachments sent after January 1, 2024.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>AI-Powered Email Analysis</CardTitle>
              <CardDescription>
                Workflow combining email reading with AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📧 Gmail Read Emails → 🔄 For Each → 🤖 LLM Analysis → 💾 Store Results</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read emails, analyze each with AI for sentiment/topics, and store insights.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use specific labels and search queries to limit results",
          "Set appropriate maxResults to avoid processing too many emails",
          "Combine with For Each node to process emails individually",
          "Use Gmail search operators for precise filtering",
          "Check the Success field before processing emails",
          "Store processed email IDs to avoid duplicate processing"
        ]}
        donts={[
          "Don't retrieve thousands of emails at once",
          "Avoid running this node too frequently (respect rate limits)",
          "Don't forget to handle the Error field",
          "Avoid searching without any filters (retrieves too many emails)",
          "Don't process sensitive data without proper security measures",
          "Avoid hardcoding search queries (use template variables)"
        ]}
        proTip="Use Gmail's advanced search operators like 'is:unread', 'after:YYYY/MM/DD', 'has:attachment', 'from:', 'subject:' to precisely filter emails. Combine multiple operators with spaces for powerful queries."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "No Emails Returned",
            symptoms: "Node succeeds but returns empty array",
            solution: "Check that your search query or label actually has matching emails. Test your search query in Gmail's web interface first to verify it returns results."
          },
          {
            title: "Permission Errors",
            symptoms: "Node fails with insufficient permissions",
            solution: "Ensure the Gmail read scope is granted in your Google account connection. You may need to reconnect your Google account with the proper scopes."
          },
          {
            title: "Rate Limit Errors",
            symptoms: "Node fails intermittently with quota exceeded errors",
            solution: "Reduce the frequency of email checking or lower maxResults. Implement delays between runs and consider caching results."
          },
          {
            title: "Incomplete Email Content",
            symptoms: "Email bodies are truncated or missing",
            solution: "This is normal for very long emails. Gmail API may limit content length. For full content, consider using the Gmail web interface or increasing API quotas."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/gmail-write-labels",
            title: "Gmail Write Labels Node",
            description: "Create and manage Gmail labels"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Process multiple emails individually"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Analyze email content with AI"
          },
          {
            href: "/docs/nodes",
            title: "Node Library",
            description: "Explore all available nodes"
          }
        ]}
      />
    </NodeLayout>
  );
}
