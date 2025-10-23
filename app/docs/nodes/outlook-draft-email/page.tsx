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

export default function OutlookDraftEmailNode() {
  const prerequisites = [
    {
      icon: Database,
      title: "Microsoft Integration",
      description: "Must be connected to access Microsoft Graph API",
      requirements: [
        "Microsoft account connected",
        "Microsoft Graph API access granted",
        "Mail send scope permissions"
      ]
    },
    {
      icon: Settings,
      title: "Required Scopes",
      description: "API scopes needed for creating draft emails",
      requirements: [
        "https://graph.microsoft.com/Mail.Send scope",
        "OAuth access token for Microsoft Graph API",
        "Valid Microsoft account with Outlook access"
      ]
    },
    {
      icon: Users,
      title: "Email Configuration",
      description: "Understanding of email requirements and validation",
      requirements: [
        "Valid recipient email addresses",
        "Proper email format validation",
        "HTML content support for rich formatting"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        logo="/logos/microsoft-outlook.svg"
        title="Outlook Draft Email"
        description="Create draft emails using your connected Microsoft Outlook account"
        nodeType="Action"
        category="Microsoft Integration"
        iconName="Mail"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Outlook Draft Email</strong> node allows you to create draft emails in your Microsoft Outlook account programmatically. This powerful automation tool integrates with Microsoft Graph API to provide intelligent email drafting capabilities for your workflows, supporting HTML content and multiple recipients."
        keyFeatures={[
          "<strong>Microsoft Graph Integration:</strong> Seamlessly creates draft emails using Microsoft Graph API",
          "<strong>HTML Support:</strong> Create rich, formatted emails with HTML content",
          "<strong>Multiple Recipients:</strong> Support for To, CC, and BCC recipients",
          "<strong>Email Validation:</strong> Automatic validation of email addresses",
          "<strong>Draft Management:</strong> Returns draft ID for future reference and editing",
          "<strong>OAuth Security:</strong> Secure authentication using Microsoft OAuth"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "To",
              type: "text",
              required: true,
              valueType: "string",
              description: "Recipient email address(es). Use comma-separated values for multiple recipients (e.g., 'user1@example.com, user2@example.com')."
            },
            {
              name: "Subject",
              type: "text",
              required: true,
              valueType: "string",
              description: "The subject line of the email. Keep it clear and descriptive for better email deliverability."
            },
            {
              name: "Body (HTML allowed)",
              type: "textarea",
              required: true,
              valueType: "string",
              description: "The body content of the email. Supports HTML formatting for rich text emails. Use HTML tags for formatting, links, and styling."
            }
          ],
          optional: [
            {
              name: "Cc",
              type: "text",
              required: false,
              valueType: "string",
              description: "Optional CC recipients. Use comma-separated values for multiple CC recipients (e.g., 'cc1@example.com, cc2@example.com')."
            },
            {
              name: "Bcc",
              type: "text",
              required: false,
              valueType: "string",
              description: "Optional BCC recipients. Use comma-separated values for multiple BCC recipients (e.g., 'bcc1@example.com, bcc2@example.com')."
            }
          ]
        }}
        outputFields={[
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Operation success status",
            description: "Returns true if the draft email was successfully created, false otherwise."
          },
          {
            name: "Draft ID",
            type: "string",
            required: true,
            valueType: "Unique draft identifier",
            description: "The unique ID of the created draft email. Use this to reference, edit, or send the draft in future operations."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Simple Text Email</CardTitle>
              <CardDescription>
                Create a basic text email draft
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "to": "recipient@example.com",
  "subject": "Meeting Reminder",
  "body": "Hi there,\n\nThis is a reminder about our meeting tomorrow at 2 PM.\n\nBest regards,\nYour Team"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates a simple text email draft with basic formatting.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Rich HTML Email</CardTitle>
              <CardDescription>
                Create a formatted HTML email with styling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "to": "customer@example.com",
  "subject": "Welcome to Our Service!",
  "body": "<h2>Welcome!</h2><p>Thank you for joining us. Here's what you can do next:</p><ul><li>Complete your profile</li><li>Explore our features</li><li>Join our community</li></ul><p><a href='https://example.com/dashboard'>Get Started</a></p>",
  "cc": "support@example.com"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates a rich HTML email with formatting, lists, and links.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>AI-Generated Email Campaign</CardTitle>
              <CardDescription>
                Workflow combining AI with email drafting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Data Source → 🤖 LLM Generate → 📧 Outlook Draft → 👤 Human Review → 📤 Send Email</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "to": "{{customerEmail}}",
  "subject": "{{aiGeneratedSubject}}",
  "body": "{{aiGeneratedEmailBody}}",
  "cc": "{{managerEmail}}"
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Generate personalized emails with AI, create drafts for review, then send to customers.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Bulk Email Notifications</CardTitle>
              <CardDescription>
                Send notifications to multiple recipients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📋 Contact List → 🔄 For Each → 📧 Outlook Draft → 📤 Send Email</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "to": "{{recipientEmail}}",
  "subject": "Important Update: {{updateTitle}}",
  "body": "<h3>Update Notification</h3><p>Dear {{recipientName}},</p><p>{{updateContent}}</p><p>Best regards,<br>The Team</p>",
  "bcc": "admin@example.com"
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Process a list of contacts and create personalized draft emails for each recipient.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use clear, descriptive subject lines",
          "Validate email addresses before sending",
          "Use HTML formatting for professional emails",
          "Test email content before going live",
          "Check the Success field before proceeding",
          "Use template variables for dynamic content",
          "Include proper email signatures"
        ]}
        donts={[
          "Don't use spammy subject lines",
          "Avoid sending to invalid email addresses",
          "Don't forget to handle the Success field",
          "Avoid hardcoding email content when possible",
          "Don't send sensitive information without encryption",
          "Avoid excessive HTML that might trigger spam filters",
          "Don't ignore email deliverability best practices"
        ]}
        proTip="Use HTML formatting strategically - include proper email structure with headers, body, and footers. Test your HTML emails in different email clients. For bulk operations, use the For Each node to process recipients individually and avoid rate limits."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Invalid Email Addresses",
            symptoms: "Node fails with email validation errors",
            solution: "Ensure all email addresses are properly formatted. Check for typos, missing @ symbols, or invalid domains. Use comma-separated values for multiple recipients."
          },
          {
            title: "OAuth Authentication Errors",
            symptoms: "Node fails with authentication or permission errors",
            solution: "Verify the Microsoft account is connected and has granted the Mail.Send scope. Reconnect the Microsoft account if needed and ensure proper OAuth permissions."
          },
          {
            title: "HTML Rendering Issues",
            symptoms: "HTML content doesn't display properly in the draft",
            solution: "Use proper HTML structure with DOCTYPE, html, head, and body tags. Test your HTML in different email clients. Avoid complex CSS that might not be supported."
          },
          {
            title: "Rate Limiting",
            symptoms: "Node fails with rate limit exceeded errors",
            solution: "Microsoft Graph API has rate limits. Reduce the frequency of draft creation and implement delays between operations. Consider batching operations when possible."
          },
          {
            title: "Draft Not Found",
            symptoms: "Draft ID is returned but draft cannot be found in Outlook",
            solution: "Ensure you're checking the correct Outlook account and folder. Drafts might take a moment to appear. Verify the user has proper permissions to create drafts."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/gmail-read-emails",
            title: "Gmail Read Emails Node",
            description: "Read emails from Gmail accounts"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate email content with AI"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Process multiple recipients individually"
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
