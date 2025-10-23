"use client"

import React from 'react';
import { Mail, User, Clock, MessageSquare, AlertTriangle } from 'lucide-react';
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
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";

export default function HILEmailNode() {
  const prerequisites = [
    {
      icon: Mail,
      title: "Email Service",
      description: "Requires email service for sending approval requests",
      requirements: [
        "Email service configured and accessible",
        "Valid sender email address",
        "Email delivery permissions and credentials"
      ]
    },
    {
      icon: User,
      title: "Approval Process",
      description: "Understanding of approval workflow requirements",
      requirements: [
        "Clear approval criteria and decision points",
        "Designated approvers with email access",
        "Understanding of workflow pause and resume behavior"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Mail}
        title="Human Approval (Email)"
        description="Pause workflow and email a human for approval before continuing"
        nodeType="Human in the Loop"
        category="Human in the Loop"
        iconName="Mail"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Human Approval (Email)</strong> node is a Human in the Loop node that pauses your workflow and sends an email to a human for approval before continuing. This is essential for workflows that require human oversight, decision-making, or validation at critical steps."
        keyFeatures={[
          "<strong>Workflow Pause:</strong> Automatically pauses execution until approval is received",
          "<strong>Email Notification:</strong> Sends approval request with context to designated recipient",
          "<strong>Approval Link:</strong> Includes one-click approval link in email",
          "<strong>Context Sharing:</strong> Passes workflow data to approver for informed decisions",
          "<strong>Resume on Approval:</strong> Workflow continues automatically after approval",
          "<strong>Audit Trail:</strong> Tracks approval status and decision-maker"
        ]}
      />

      <Callout emoji="⚠️" color="border-yellow-500">
        <strong>Important:</strong> This node will pause your workflow execution until a human approves the request. The workflow will not continue until the approval link in the email is clicked.
      </Callout>

      <PrerequisitesSection items={prerequisites} />

      {/* Use Cases Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-neutral-800 border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary-main" />
                Content Approval
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300 text-sm">
                Send generated content to a manager for review before publishing to social media or sending to customers.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-800 border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Risk Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300 text-sm">
                Require human approval for high-value transactions, sensitive data processing, or compliance-critical operations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-800 border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary-main" />
                Customer Communication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300 text-sm">
                Get approval before sending important emails to customers, especially for sensitive or high-value communications.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-800 border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500" />
                Quality Control
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300 text-sm">
                Have humans review AI-generated content, data analysis results, or automated decisions before they're finalized.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Recipient Email",
              type: "text",
              required: true,
              valueType: "string",
              description: "The email address of the person who will receive the approval request. They will receive an email with context and an approval link."
            },
            {
              name: "Subject",
              type: "text",
              required: true,
              valueType: "string",
              description: "The subject line of the approval email. Should clearly indicate what needs approval."
            },
            {
              name: "Message",
              type: "text",
              required: true,
              valueType: "string",
              description: "The message body of the approval email. Include context, details, and any relevant information for the approver."
            }
          ],
          optional: [
            {
              name: "Context Data",
              type: "JSON",
              required: false,
              valueType: "object",
              description: "Additional data to include in the approval email. This can contain workflow variables, generated content, or any information the approver needs."
            }
          ]
        }}
        outputFields={[
          {
            name: "Approved",
            type: "boolean",
            required: true,
            valueType: "Approval status",
            description: "Returns true if the request was approved, false otherwise. Use this to control subsequent workflow steps."
          },
          {
            name: "Approver Email",
            type: "string",
            required: true,
            valueType: "Email of the person who approved",
            description: "The email address of the person who clicked the approval link."
          },
          {
            name: "Approval Time",
            type: "string",
            required: true,
            valueType: "Timestamp of approval",
            description: "ISO 8601 timestamp of when the approval was granted."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Content Publishing Approval</CardTitle>
              <CardDescription>
                Get approval before publishing AI-generated content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "recipientEmail": "editor@company.com",
  "subject": "Approval Required: Blog Post Draft",
  "message": "Please review the AI-generated blog post below before publishing.",
  "contextData": {
    "title": "{{blogPost.title}}",
    "content": "{{blogPost.content}}",
    "targetDate": "{{publishDate}}"
  }
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Sends blog post draft to editor for approval before publishing.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Transaction Approval Workflow</CardTitle>
              <CardDescription>
                Require approval for high-value transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>💳 Transaction Trigger → ✅ Human Approval → 💸 Process Payment → 📧 Confirmation</div>
                  </div>
                </div>
                <CodeBlock
                  code={'{\n  "recipientEmail": "finance@company.com",\n  "subject": "High-Value Transaction Approval Required",\n  "message": "Amount: ${{transaction.amount}}. Approve to proceed with payment.",\n  "contextData": {\n    "amount": "{{transaction.amount}}",\n    "vendor": "{{transaction.vendor}}",\n    "invoiceId": "{{transaction.id}}"\n  }\n}'}
                  lang="json"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Include clear context and relevant data in the message",
          "Use descriptive subject lines that indicate urgency",
          "Add workflow variables to show what needs approval",
          "Set appropriate timeout policies for approvals",
          "Log approval decisions for audit trails",
          "Test approval emails before production use"
        ]}
        donts={[
          "Don't use for time-critical workflows without fallbacks",
          "Avoid vague messages without context",
          "Don't forget to handle rejection scenarios",
          "Avoid sending approvals to wrong email addresses",
          "Don't include sensitive data in plain text emails",
          "Avoid creating bottlenecks with too many approval steps"
        ]}
        proTip="Use template variables in your message to show the approver exactly what they're approving. Include key details like amounts, content previews, or affected users directly in the email body."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Email Not Received",
            symptoms: "Approver doesn't receive the approval email",
            solution: "Check spam folders and verify the recipient email address is correct. Ensure your email service is properly configured and has sending permissions."
          },
          {
            title: "Workflow Stuck",
            symptoms: "Workflow remains paused indefinitely",
            solution: "This is expected behavior - the workflow waits for approval. Implement timeout logic or send reminder emails. Check that the approval link in the email is working."
          },
          {
            title: "Approval Link Broken",
            symptoms: "Clicking approval link doesn't work",
            solution: "Verify your workflow service URL is accessible and properly configured. Check that the approval token hasn't expired."
          },
          {
            title: "Wrong Person Approved",
            symptoms: "Approval came from unexpected email",
            solution: "Anyone with access to the approval link can click it. Consider implementing additional verification or using role-based approval systems."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/if-else",
            title: "If-Else Node",
            description: "Add conditional logic based on approval"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate content that needs approval"
          },
          {
            href: "/docs/workflow-builder-basics",
            title: "Workflow Builder Basics",
            description: "Learn about workflow design"
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
