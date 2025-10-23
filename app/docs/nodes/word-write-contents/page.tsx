"use client"

import React from 'react';
import { FileText, Shield, Settings } from 'lucide-react';
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

export default function WordWriteContentsNode() {
  const prerequisites = [
    {
      icon: Shield,
      title: "Microsoft Account Connection",
      description: "Must have a connected Microsoft account with appropriate permissions",
      requirements: [
        "Microsoft account connected via OAuth",
        "Files.ReadWrite.All scope permissions",
        "Access to Microsoft OneDrive"
      ]
    },
    {
      icon: FileText,
      title: "Document Requirements",
      description: "Understanding of document access and HTML content requirements",
      requirements: [
        "The target document must be accessible through your Microsoft OneDrive",
        "Well-formed HTML content for proper Word conversion",
        "Clear understanding of what content should replace the existing document"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "Technical setup and configuration requirements",
      requirements: [
        "Microsoft OAuth service properly configured",
        "Internet connectivity for Microsoft Graph API communication",
        "Proper exception handling for API failures and authentication issues"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={FileText}
        title="Word Write Content"
        description="Overwrite the entire contents of a Word document with formatted HTML"
        nodeType="Action"
        category="Microsoft Word"
        iconName="FileText"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Word Write Content</strong> node is an action node that overwrites the entire contents of a Microsoft Word document with formatted HTML content. This powerful integration enables you to programmatically update Word documents with rich formatting, perfect for automated document generation, content updates, and workflow-based document management."
        keyFeatures={[
          "<strong>HTML to Word Conversion:</strong> Converts HTML content to properly formatted Word documents",
          "<strong>Rich Formatting Support:</strong> Supports headings, lists, bold/italic text, tables, and more",
          "<strong>Document Selection:</strong> Choose from your OneDrive documents with an integrated picker",
          "<strong>Complete Overwrite:</strong> Replaces all existing content with new HTML content",
          "<strong>Microsoft Integration:</strong> Seamless integration with Microsoft OneDrive and Word Online",
          "<strong>OAuth Security:</strong> Secure authentication through Microsoft OAuth"
        ]}
      />

      <Callout emoji="⚠️" color="border-yellow-500">
        <strong>Warning:</strong> This node will completely replace all existing content in the target document. The original content will be lost. Consider using Word Duplicate first to create a backup.
      </Callout>

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Document ID",
              type: "text",
              required: true,
              valueType: "string",
              description: "The ID of the Word document to write to. You can select documents from your OneDrive using the integrated file picker."
            },
            {
              name: "HTML Content",
              type: "text",
              required: true,
              valueType: "HTML string",
              example: '"<h1>Title</h1><p>Content here...</p>"',
              description: "The HTML content to write to the document. Supports standard HTML tags including headings (h1-h6), paragraphs (p), lists (ul, ol), tables, bold (b, strong), italic (i, em), and more."
            }
          ]
        }}
        outputFields={[
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Operation success status",
            description: "Returns true if the content was successfully written, false otherwise."
          },
          {
            name: "Document Name",
            type: "string",
            required: true,
            valueType: "Name of the document",
            description: "The filename of the Word document that was updated."
          },
          {
            name: "Error",
            type: "string",
            required: false,
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
              <CardTitle>AI-Generated Report</CardTitle>
              <CardDescription>
                Create reports from AI-generated content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🤖 LLM Generate → 📄 Word Duplicate → 📝 Word Write Content → 📧 Share</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "documentId": "{{duplicatedDocId}}",
  "htmlContent": "{{aiGeneratedHTML}}"
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Use LLM to generate HTML content, duplicate a template, then write the AI content to the new document.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Document Population</CardTitle>
              <CardDescription>
                Populate Word documents with workflow data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "documentId": "{{contractDocId}}",
  "htmlContent": "<h1>Contract Agreement</h1><p>Between: {{party1}} and {{party2}}</p><p>Date: {{currentDate}}</p><p>{{contractTerms}}</p>"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Dynamically populate a contract document with data from your workflow using template variables.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Formatted Email to Document</CardTitle>
              <CardDescription>
                Convert email content to Word documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📧 Gmail Read → 🔄 Process HTML → 📄 Word Write → 💾 Archive</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read email HTML content, format it, and write to a Word document for archival purposes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use well-formed HTML for best conversion results",
          "Test HTML formatting before large-scale deployment",
          "Create backups before overwriting important documents",
          "Use Word Duplicate to preserve originals",
          "Include proper HTML structure (headings, paragraphs)",
          "Check Success field before assuming completion"
        ]}
        donts={[
          "Don't use complex CSS that won't convert to Word",
          "Avoid overwriting documents without backups",
          "Don't forget to handle write failures",
          "Avoid very large HTML content that may timeout",
          "Don't use unsupported HTML tags",
          "Avoid hardcoding document IDs when possible"
        ]}
        proTip="Word supports standard HTML formatting but not all CSS. Stick to basic HTML tags: h1-h6 for headings, p for paragraphs, ul/ol for lists, table for tables, b/strong for bold, i/em for italic. For best results, generate HTML specifically formatted for Word conversion."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Formatting Not Preserved",
            symptoms: "HTML doesn't convert to Word formatting correctly",
            solution: "Use simple, standard HTML tags. Avoid complex CSS, inline styles, or JavaScript. Test with basic HTML first, then add complexity gradually."
          },
          {
            title: "Document Not Found",
            symptoms: "Node fails with document not found error",
            solution: "Verify the document ID is correct and the document exists in OneDrive. Check that the user has access and write permissions."
          },
          {
            title: "Content Truncated",
            symptoms: "Only part of the HTML content appears in the document",
            solution: "Very large HTML content may exceed limits. Break content into smaller chunks or simplify the HTML structure."
          },
          {
            title: "Permission Errors",
            symptoms: "Node fails with insufficient permissions",
            solution: "Ensure the Microsoft account connection has Files.ReadWrite.All scope. Reconnect the Microsoft account if needed."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/word-read",
            title: "Word Read Node",
            description: "Read content from Word documents"
          },
          {
            href: "/docs/nodes/word-duplicate",
            title: "Word Duplicate Node",
            description: "Create backups before writing"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate HTML content with AI"
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
