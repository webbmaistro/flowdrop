"use client"

import React from 'react';
import { Mail, Database, Settings, Users } from 'lucide-react';
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

export default function OutlookReadEmailsNode() {
  const prerequisites = [
    {
      icon: Database,
      title: "Microsoft Integration",
      description: "Must be connected to access Microsoft Graph API",
      requirements: [
        "Microsoft account connected",
        "Microsoft Graph API access granted",
        "Mail read scope permissions"
      ]
    },
    {
      icon: Settings,
      title: "Required Scopes",
      description: "API scopes needed for reading emails",
      requirements: [
        "https://graph.microsoft.com/Mail.Read scope",
        "OAuth access token for Microsoft Graph API",
        "Valid Microsoft account with Outlook access"
      ]
    },
    {
      icon: Users,
      title: "Email Access",
      description: "Understanding of Outlook folder structure and permissions",
      requirements: [
        "Access to target Outlook folders",
        "Proper permissions to read emails",
        "Understanding of Outlook folder hierarchy"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Mail}
        title="Outlook Read Emails"
        description="Read and analyze emails from your Microsoft Outlook account"
        nodeType="Action"
        category="Microsoft Integration"
        iconName="Mail"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Outlook Read Emails</strong> node allows you to read, search, and analyze emails from your Microsoft Outlook account programmatically. This powerful automation tool integrates with Microsoft Graph API to provide intelligent email processing capabilities for your workflows, supporting folder filtering and batch processing."
        keyFeatures={[
          "<strong>Microsoft Graph Integration:</strong> Seamlessly reads emails using Microsoft Graph API",
          "<strong>Folder Filtering:</strong> Read emails from specific Outlook folders (Inbox, Sent, etc.)",
          "<strong>Batch Processing:</strong> Handle multiple emails efficiently with configurable limits",
          "<strong>Rich Metadata:</strong> Access email subjects, bodies, message IDs, and more",
          "<strong>OAuth Security:</strong> Secure authentication using Microsoft OAuth",
          "<strong>Flexible Configuration:</strong> Customize folder selection and result limits"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          optional: [
            {
              name: "Folder",
              type: "dropdown",
              required: false,
              valueType: "string",
              description: "Outlook folder to filter emails by. Options include Inbox, Sent Items, Drafts, etc. Defaults to Inbox if not specified.",
              options: ["Inbox", "Sent Items", "Drafts", "Deleted Items", "Junk Email"]
            },
            {
              name: "Max Results",
              type: "number",
              required: false,
              defaultValue: "10",
              valueType: "number",
              description: "Maximum number of emails to retrieve. Default is 10. Higher values may increase processing time and API usage."
            }
          ]
        }}
        outputFields={[
          {
            name: "Email Bodies",
            type: "array",
            required: true,
            valueType: "Array of email body content",
            description: "Array of email body content (text or HTML). Use For Each node to process individual email bodies."
          },
          {
            name: "Email Subjects",
            type: "array",
            required: true,
            valueType: "Array of email subject lines",
            description: "Array of email subject lines. Each subject corresponds to the email at the same index in other arrays."
          },
          {
            name: "Message IDs",
            type: "array",
            required: true,
            valueType: "Array of Outlook message IDs",
            description: "Array of unique Outlook message IDs. Use these to reference specific emails for future operations."
          },
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Operation success status",
            description: "Returns true if emails were successfully retrieved, false otherwise."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Read Inbox Emails</CardTitle>
              <CardDescription>
                Process recent emails from the inbox
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "folder": "Inbox",
  "maxResults": 20
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Retrieves the 20 most recent emails from the Outlook inbox.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Read Sent Items</CardTitle>
              <CardDescription>
                Process emails from sent items folder
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "folder": "Sent Items",
  "maxResults": 50
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Retrieves the 50 most recent sent emails for analysis or tracking.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>AI-Powered Email Analysis</CardTitle>
              <CardDescription>
                Workflow combining email reading with AI analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📧 Outlook Read Emails → 🔄 For Each → 🤖 LLM Analysis → 💾 Store Results</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "folder": "Inbox",
  "maxResults": 25
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Read recent inbox emails, analyze each with AI for sentiment/topics, and store insights for reporting.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Email Monitoring Dashboard</CardTitle>
              <CardDescription>
                Create a monitoring system for email activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📧 Outlook Read Emails → 📊 Data Processing → 📈 Dashboard Update</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "folder": "Inbox",
  "maxResults": 100
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Monitor email activity by reading recent emails and processing them for dashboard metrics and insights.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Email Content Extraction</CardTitle>
              <CardDescription>
                Extract and process email content for data analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📧 Outlook Read Emails → 🔄 For Each → 📝 Content Extraction → 💾 Database Storage</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "folder": "Inbox",
  "maxResults": 200
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Extract email content, subjects, and metadata for comprehensive data analysis and reporting.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use specific folders to limit results and improve performance",
          "Set appropriate maxResults to avoid processing too many emails",
          "Combine with For Each node to process emails individually",
          "Check the Success field before processing email data",
          "Use Message IDs to track processed emails and avoid duplicates",
          "Store email metadata for future reference and analysis"
        ]}
        donts={[
          "Don't retrieve thousands of emails at once (respect API limits)",
          "Avoid running this node too frequently (respect rate limits)",
          "Don't forget to handle the Success field",
          "Avoid processing sensitive data without proper security measures",
          "Don't ignore folder permissions and access restrictions",
          "Avoid hardcoding folder names (use template variables when possible)"
        ]}
        proTip="Use folder filtering strategically - Inbox for incoming emails, Sent Items for outgoing emails, and Drafts for pending emails. Combine with other nodes to create powerful email processing workflows. For large-scale operations, consider implementing pagination and caching strategies."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "No Emails Returned",
            symptoms: "Node succeeds but returns empty arrays",
            solution: "Check that the specified folder actually contains emails. Verify folder permissions and ensure the Microsoft account has access to the target folder."
          },
          {
            title: "OAuth Authentication Errors",
            symptoms: "Node fails with authentication or permission errors",
            solution: "Verify the Microsoft account is connected and has granted the Mail.Read scope. Reconnect the Microsoft account if needed and ensure proper OAuth permissions."
          },
          {
            title: "Folder Access Errors",
            symptoms: "Node fails with folder not found or access denied errors",
            solution: "Ensure the folder name is correct and the user has permissions to access it. Use standard folder names like 'Inbox', 'Sent Items', etc."
          },
          {
            title: "Rate Limiting",
            symptoms: "Node fails with rate limit exceeded errors",
            solution: "Microsoft Graph API has rate limits. Reduce the frequency of email reading and implement delays between operations. Consider reducing maxResults for large operations."
          },
          {
            title: "Incomplete Email Content",
            symptoms: "Email bodies are truncated or missing content",
            solution: "This is normal for very long emails. Microsoft Graph API may limit content length. For full content, consider using the Outlook web interface or implementing content streaming."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/outlook-draft-email",
            title: "Outlook Draft Email Node",
            description: "Create draft emails in Outlook"
          },
          {
            href: "/docs/nodes/gmail-read-emails",
            title: "Gmail Read Emails Node",
            description: "Read emails from Gmail accounts"
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
