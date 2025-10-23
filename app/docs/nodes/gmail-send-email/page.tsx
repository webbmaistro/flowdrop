"use client"

import React from 'react';
import { Mail, Shield, Send, Settings } from 'lucide-react';
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

export default function GmailSendEmailNode() {
  const prerequisites = [
    {
      icon: Shield,
      title: "Google Account Connection",
      description: "Must have a connected Google account with appropriate permissions",
      requirements: [
        "Google account connected via OAuth",
        "Gmail Compose scope permissions",
        "Access to Gmail API"
      ]
    },
    {
      icon: Mail,
      title: "Email Requirements",
      description: "Understanding of email composition and delivery requirements",
      requirements: [
        "Valid recipient email addresses (comma-separated for multiple)",
        "Clear subject line and email body content",
        "Understanding of HTML email formatting (optional)",
        "Knowledge of CC and BCC fields usage"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "Technical setup and configuration requirements",
      requirements: [
        "Google OAuth service properly configured",
        "Internet connectivity for Gmail API communication",
        "Proper exception handling for API failures and authentication issues"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Send}
        title="Gmail Send Email"
        description="Send emails using your connected Gmail account via Gmail API"
        nodeType="Action"
        category="Gmail"
        iconName="Send"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Gmail Send Email</strong> node is an action node that sends emails using your connected Gmail account. This powerful integration enables you to programmatically send emails through Gmail API, perfect for automated notifications, workflow-based communications, and business process automation."
        keyFeatures={[
          "<strong>HTML Email Support:</strong> Send rich HTML formatted emails with full styling support",
          "<strong>Multiple Recipients:</strong> Support for To, CC, and BCC fields with comma-separated email lists",
          "<strong>Gmail Integration:</strong> Seamless integration with Gmail and Google Workspace",
          "<strong>OAuth Security:</strong> Secure authentication through Google OAuth",
          "<strong>Template Support:</strong> Use dynamic content and variables in email fields",
          "<strong>Error Handling:</strong> Comprehensive error handling and validation"
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
              description: "Recipient email address. Use comma-separated values for multiple recipients (e.g., 'user1@example.com, user2@example.com')."
            },
            {
              name: "Subject",
              type: "text",
              required: true,
              valueType: "string",
              description: "The subject line of the email."
            },
            {
              name: "Body (HTML allowed)",
              type: "textarea",
              required: true,
              valueType: "string",
              description: "The body content of the email. HTML formatting is supported for rich email content."
            }
          ],
          optional: [
            {
              name: "Cc",
              type: "text",
              required: false,
              valueType: "string",
              description: "Optional CC recipients. Use comma-separated values for multiple recipients."
            },
            {
              name: "Bcc",
              type: "text",
              required: false,
              valueType: "string",
              description: "Optional BCC recipients. Use comma-separated values for multiple recipients."
            }
          ]
        }}
        outputFields={[
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Operation success status",
            description: "Returns true if the email was successfully sent, false otherwise."
          },
          {
            name: "Message ID",
            type: "string",
            required: true,
            valueType: "Gmail message identifier",
            description: "The Gmail message ID of the sent email for tracking and reference."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Automated Notifications</CardTitle>
              <CardDescription>
                Send automated email notifications for workflow events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🔔 Webhook Trigger → 📊 Process Data → 📧 Gmail Send Email → ✅ Confirm</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Trigger on external events, process data, and send notification emails to stakeholders automatically.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Rich HTML Email Campaigns</CardTitle>
              <CardDescription>
                Send beautifully formatted HTML emails with dynamic content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Data Source → 🤖 AI Content Generation → 📧 Gmail Send Email → 📈 Analytics</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Generate personalized HTML email content with AI, then send to multiple recipients with rich formatting.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Business Process Automation</CardTitle>
              <CardDescription>
                Automate business communications and approvals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📝 Form Submission → 🔍 Data Validation → 📧 Approval Email → 📋 Update Records</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Process form submissions, validate data, send approval emails to managers, and update business records.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* HTML Email Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">HTML Email Example</h2>
        <Card className="border-neutral-700">
          <CardHeader>
            <CardTitle>Rich HTML Email Template</CardTitle>
            <CardDescription>
              Example of HTML content for the email body field
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              lang="html"
              code={`<!DOCTYPE html>
<html>
<head>
  <style>
    .email-container { max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f8f9fa; }
    .button { display: inline-block; background: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Welcome to Flowdrop!</h1>
    </div>
    <div class="content">
      <h2>Your workflow has been completed successfully</h2>
      <p>Hello {{user_name}},</p>
      <p>Your automated workflow has processed {{item_count}} items and completed successfully.</p>
      <a href="{{dashboard_url}}" class="button">View Results</a>
      <p>Best regards,<br>The Flowdrop Team</p>
    </div>
  </div>
</body>
</html>`}
            />
          </CardContent>
        </Card>
      </section>

      <BestPracticesSection
        dos={[
          "Use clear, descriptive subject lines for better email deliverability",
          "Test HTML email templates in different email clients",
          "Validate email addresses before sending to avoid bounces",
          "Use CC and BCC appropriately for different recipient types",
          "Include unsubscribe links for marketing emails",
          "Keep email content concise and actionable"
        ]}
        donts={[
          "Don't send emails without proper authentication setup",
          "Avoid using excessive HTML formatting that may not render properly",
          "Don't send to invalid or non-existent email addresses",
          "Avoid sending too many emails too quickly (rate limiting)",
          "Don't include sensitive information in email content",
          "Avoid using all caps in subject lines (spam filters)"
        ]}
        proTip="For best results, test your HTML email templates across different email clients (Gmail, Outlook, Apple Mail) to ensure consistent rendering. Use inline CSS styles for better compatibility."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Authentication Errors",
            symptoms: "Node fails with 'Google access token not found' error",
            solution: "Ensure your Google account is properly connected with Gmail Compose scope permissions. Reconnect your Google account if needed and verify OAuth permissions."
          },
          {
            title: "Invalid Email Addresses",
            symptoms: "Node fails with 'Invalid email address' error",
            solution: "Check that all email addresses in To, CC, and BCC fields are valid. Use comma-separated format for multiple recipients and ensure no extra spaces or invalid characters."
          },
          {
            title: "Missing Required Fields",
            symptoms: "Node fails with 'Missing required email fields' error",
            solution: "Ensure all required fields (To, Subject, Body) are provided and not empty. Check that template variables are properly resolved."
          },
          {
            title: "Rate Limiting",
            symptoms: "Node fails with rate limiting errors",
            solution: "Gmail API has rate limits. Implement delays between email sends or batch emails to avoid hitting rate limits."
          },
          {
            title: "HTML Rendering Issues",
            symptoms: "Email content doesn't display as expected",
            solution: "Use inline CSS styles instead of external stylesheets. Test HTML content in different email clients. Avoid complex CSS that may not be supported."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/gmail-read-emails",
            title: "Gmail Read Emails Node",
            description: "Read emails from Gmail"
          },
          {
            href: "/docs/nodes/outlook-send-email",
            title: "Outlook Send Email Node",
            description: "Send emails using Outlook"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate email content with AI"
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
