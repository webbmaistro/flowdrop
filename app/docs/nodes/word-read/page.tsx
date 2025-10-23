"use client"

import React from 'react';
import { Eye, Shield, FileText, Settings } from 'lucide-react';
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

export default function WordReadNode() {
  const prerequisites = [
    {
      icon: Shield,
      title: "Microsoft Account Connection",
      description: "Must have a connected Microsoft account with appropriate permissions",
      requirements: [
        "Microsoft account connected via OAuth",
        "Files.Read.All scope permissions",
        "Access to Microsoft OneDrive"
      ]
    },
    {
      icon: FileText,
      title: "Document Requirements",
      description: "Understanding of document access and HTML content requirements",
      requirements: [
        "The target document must be accessible through your Microsoft OneDrive",
        "Document must be a valid Word document (.docx)",
        "Clear understanding of what content should be extracted"
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
        icon={Eye}
        title="Word Read"
        description="Reads content from a Word document as HTML (preserves formatting)"
        nodeType="Action"
        category="Microsoft Word"
        iconName="Eye"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Word Read</strong> node is an action node that reads content from a Microsoft Word document and returns it as formatted HTML. This powerful integration enables you to programmatically extract content from Word documents with preserved formatting, perfect for content analysis, document processing, and workflow-based document management."
        keyFeatures={[
          "<strong>HTML Output:</strong> Returns document content as HTML with formatting preserved",
          "<strong>Rich Formatting Support:</strong> Maintains headings, lists, bold/italic text, tables, and more",
          "<strong>Document Selection:</strong> Choose from your OneDrive documents with an integrated picker",
          "<strong>Content Extraction:</strong> Extracts the full document content for processing",
          "<strong>Microsoft Integration:</strong> Seamless integration with Microsoft OneDrive and Word Online",
          "<strong>OAuth Security:</strong> Secure authentication through Microsoft OAuth"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Document ID",
              type: "text",
              required: true,
              valueType: "string",
              description: "The ID of the Word document to read from OneDrive. You can select documents from your OneDrive using the integrated file picker."
            }
          ]
        }}
        outputFields={[
          {
            name: "Content HTML",
            type: "string",
            required: true,
            valueType: "HTML formatted document content",
            description: "The full content of the Word document as HTML. This preserves all formatting including headings, lists, tables, bold, italic, and other styles."
          },
          {
            name: "Document Name",
            type: "string",
            required: true,
            valueType: "Name of the document",
            description: "The filename of the Word document that was read."
          },
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Operation success status",
            description: "Returns true if the document was successfully read, false otherwise."
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
              <CardTitle>Content Analysis Workflow</CardTitle>
              <CardDescription>
                Extract and analyze document content with AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📄 Word Read → 🤖 LLM Analysis → 📊 Generate Summary → 📧 Email Report</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read Word document content, analyze with AI for key insights, generate a summary, and email to stakeholders.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Document Migration</CardTitle>
              <CardDescription>
                Convert Word documents to other formats
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📄 Word Read → 🔄 Process HTML → 📝 Write to Destination → ✅ Confirm</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read Word content as HTML, process and transform, then write to Google Docs, Notion, or other platforms.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use the OneDrive file picker for easy document selection",
          "Check the Success field before processing content",
          "Handle HTML content appropriately for your use case",
          "Store document IDs for repeated access",
          "Validate document permissions before reading",
          "Parse HTML carefully to extract needed information"
        ]}
        donts={[
          "Don't assume all formatting will convert perfectly",
          "Avoid reading very large documents without consideration",
          "Don't forget to handle authentication errors",
          "Avoid hardcoding document IDs when possible",
          "Don't process sensitive data without encryption",
          "Avoid exceeding API rate limits"
        ]}
        proTip="The HTML output preserves Word formatting, but complex layouts may not translate perfectly. For simple text extraction, consider parsing the HTML to remove tags. For rich content display, use the HTML directly in email bodies or web pages."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Document Not Found",
            symptoms: "Node fails with document not found error",
            solution: "Verify the document ID is correct and the document exists in OneDrive. Check that the user has access to the document and it hasn't been deleted."
          },
          {
            title: "Permission Errors",
            symptoms: "Node fails with insufficient permissions",
            solution: "Ensure the Microsoft account connection has Files.Read.All scope. Reconnect the Microsoft account if needed and verify OAuth permissions."
          },
          {
            title: "HTML Formatting Issues",
            symptoms: "Output HTML doesn't match expected formatting",
            solution: "Complex Word formatting may not convert perfectly to HTML. Simplify document formatting or post-process the HTML to fix formatting issues."
          },
          {
            title: "Large Document Timeouts",
            symptoms: "Node times out with very large documents",
            solution: "Large documents may take longer to process. Increase timeout settings or consider splitting large documents into smaller sections."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/word-write-contents",
            title: "Word Write Content Node",
            description: "Write HTML content to Word documents"
          },
          {
            href: "/docs/nodes/word-duplicate",
            title: "Word Duplicate Node",
            description: "Create copies of Word documents"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Analyze document content with AI"
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
