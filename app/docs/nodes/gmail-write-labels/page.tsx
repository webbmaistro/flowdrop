"use client"

import React from 'react';
import { Mail, Settings } from 'lucide-react';
import {
  NodeLayout,
  NodeHeader,
  OverviewSection,
  PrerequisitesSection,
  NodeConfigurationSection,
  BestPracticesSection,
  TroubleshootingSection,
} from '@/components/docs';
import { Button } from '@/components/ui';
import { ExternalLink } from 'lucide-react';
import CodeBlock from "@/components/ui/CodeBlock";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import Link from 'next/link';

export default function GmailWriteLabelsNode() {
  // Define prerequisites data
  const prerequisites = [
    {
      icon: Mail,
      title: "Google Integration",
      description: "Must be connected to access Gmail API",
      requirements: [
        "Google account connected",
        "Gmail labels scope granted",
        "Gmail modify scope (if applying labels to emails)"
      ]
    },
    {
      icon: Settings,
      title: "Required Scopes",
      description: "API scopes needed for label management",
      requirements: [
        "https://www.googleapis.com/auth/gmail.labels",
        "https://www.googleapis.com/auth/gmail.modify"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        logo="/logos/gmail.svg"
        title="Gmail Write Labels"
        description="Create, modify, and manage Gmail labels programmatically"
        nodeType="Action"
        category="Gmail Integration"
        iconName="Gmail"
        iconColor="primary"
      />

      <OverviewSection
        description="The Gmail Write Labels node allows you to create, update, and manage Gmail labels programmatically. This powerful automation tool integrates with Gmail's API to provide intelligent email organization capabilities."
        keyFeatures={[
          "<strong>Dynamic Label Creation:</strong> Create labels based on workflow logic",
          "<strong>Custom Styling:</strong> Set background and text colors for visual organization",
          "<strong>Smart Visibility:</strong> Control how labels appear in Gmail interface",
          "<strong>Error Handling:</strong> Built-in success/failure tracking",
          "<strong>Real-time Updates:</strong> Labels are created instantly in your Gmail account"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "labelName",
              type: "text",
              required: true,
              valueType: "string",
              description: "Name of the label to create or modify. Use descriptive names for better organization."
            },
            {
              name: "labelType",
              type: "dropdown",
              required: true,
              valueType: "user, system",
              description: "Type of label to create. User labels are customizable, system labels are predefined."
            }
          ],
          optional: [
            {
              name: "backgroundColor",
              type: "text",
              required: false,
              valueType: "hex color code",
              description: "Hex color code for the label background (e.g., \"#4285f4\" for Google Blue)."
            },
            {
              name: "textColor",
              type: "text",
              required: false,
              valueType: "hex color code",
              description: "Hex color code for the label text (e.g., \"#ffffff\" for white)."
            },
            {
              name: "messageListVisibility",
              type: "dropdown",
              required: false,
              valueType: "show, hide",
              description: "Controls whether the label is visible in the message list."
            },
            {
              name: "labelListVisibility",
              type: "dropdown",
              required: false,
              valueType: "labelShow, labelHide",
              description: "Controls whether the label appears in the label list sidebar."
            }
          ]
        }}
        outputFields={[
          {
            name: "labelId",
            type: "string",
            required: false,
            valueType: "Unique identifier of the created/modified label",
            description: "The unique ID assigned by Gmail to this label. Use this for applying the label to emails."
          },
          {
            name: "labelName",
            type: "string",
            required: false,
            valueType: "Name of the label",
            description: "The name of the label that was created or modified."
          },
          {
            name: "success",
            type: "boolean",
            required: false,
            valueType: "Whether the operation was successful",
            description: "Returns true if the label was successfully created or modified, false otherwise."
          },
          {
            name: "error",
            type: "string",
            required: false,
            valueType: "Error message if operation failed",
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
              <CardTitle>Basic Label Creation</CardTitle>
              <CardDescription>
                Create a simple label with default settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "labelName": "Work",
  "labelType": "user",
  "backgroundColor": "#4285f4",
  "textColor": "#ffffff"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates a blue "Work" label that will be visible in both the message list and label sidebar.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Label Based on Email Content</CardTitle>
              <CardDescription>
                Create labels based on AI analysis of email content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "labelName": "{{aiAnalysis.isImportant ? 'Important' : 'Regular'}}",
  "labelType": "user",
  "backgroundColor": "{{aiAnalysis.isImportant ? '#ea4335' : '#34a853'}}",
  "textColor": "#ffffff",
  "messageListVisibility": "show",
  "labelListVisibility": "labelShow"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates either an "Important" (red) or "Regular" (green) label based on AI analysis results.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Domain-Based Labeling</CardTitle>
              <CardDescription>
                Create labels based on email sender domain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "labelName": "{{emailTrigger.senderDomain}}",
  "labelType": "user",
  "backgroundColor": "#9c27b0",
  "textColor": "#ffffff"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates a label named after the sender's domain (e.g., "gmail.com", "company.com").
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Workflow Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Workflow Examples</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Auto-label Important Emails</CardTitle>
              <CardDescription>
                Complete workflow for intelligent email organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📧 Email Trigger → 🤖 AI Analysis → 🏷️ Gmail Write Labels → 📱 Notification</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Step-by-Step Configuration</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>Email Trigger:</strong> Configure to trigger on new email arrival</li>
                    <li><strong>AI Analysis:</strong> Analyze email content for importance indicators</li>
                    <li><strong>Gmail Write Labels:</strong> Create appropriate label based on analysis</li>
                    <li><strong>Conditional Logic:</strong> Handle success/failure scenarios</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Project-Based Email Organization</CardTitle>
              <CardDescription>
                Organize emails by project or client automatically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically create and apply project-specific labels based on email content, 
                    sender information, or keywords in the subject line.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Extract project keywords from email content</li>
                    <li>Create dynamic label names (e.g., "Project-ProjectName")</li>
                    <li>Use consistent color coding for project categories</li>
                    <li>Apply labels to organize related emails</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use consistent naming conventions",
          "Implement a logical color scheme",
          "Always check the success output field",
          "Handle errors gracefully",
          "Use descriptive label names",
          "Consider label hierarchy and organization"
        ]}
        donts={[
          "Don't create labels in rapid succession",
          "Avoid overly long label names",
          "Don't ignore API rate limits",
          "Avoid creating duplicate labels",
          "Don't use special characters in names",
          "Avoid creating too many labels"
        ]}
        proTip="Create a label naming convention document for your team to ensure consistency across all automated workflows. This makes it easier to find and manage labels later."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Authentication Errors",
            symptoms: "Node fails with permission denied errors",
            solution: "Ensure Google integration is properly connected and Gmail labels scope is granted"
          },
          {
            title: "Label Already Exists",
            symptoms: "Node succeeds but label isn't created",
            solution: "Check if label exists before creating, or handle gracefully in your workflow"
          },
          {
            title: "API Rate Limits",
            symptoms: "Node fails intermittently with quota exceeded errors",
            solution: "Implement delays between label creation operations and monitor API usage"
          }
        ]}
      />

      {/* Related Resources - keeping custom Link/Button structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/docs/nodes/gmail-read-emails">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Gmail Read Emails Node</div>
                <div className="text-sm text-neutral-400">Read and analyze email content</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/ai-workflows-explained">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">AI Workflows Guide</div>
                <div className="text-sm text-neutral-400">Learn about AI-powered automation</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/workflow-builder-basics">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Workflow Builder Basics</div>
                <div className="text-sm text-neutral-400">Learn how to build workflows</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Node Library</div>
                <div className="text-sm text-neutral-400">Explore all available nodes</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
        </div>
      </section>
    </NodeLayout>
  );
}

