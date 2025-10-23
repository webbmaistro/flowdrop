"use client"

import React from 'react';
import { Copy, Shield, FileText, Settings } from 'lucide-react';
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

export default function WordDuplicateNode() {
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
      description: "Understanding of document access requirements",
      requirements: [
        "The source document must be accessible through your Microsoft OneDrive",
        "Document must be a valid Word document (.docx)",
        "Sufficient OneDrive storage space for the duplicate"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "Technical setup and configuration requirements",
      requirements: [
        "Microsoft OAuth service properly configured",
        "Internet connectivity for Microsoft Graph API communication",
        "Proper exception handling for API failures"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Copy}
        title="Word Duplicate"
        description="Create a copy of a Word document using the user's OAuth token"
        nodeType="Action"
        category="Microsoft Word"
        iconName="Copy"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Word Duplicate</strong> node is an action node that creates a copy of a Microsoft Word document using the user's OAuth token. This powerful integration enables you to programmatically duplicate Word documents, perfect for creating documents from templates, backing up important files, and workflow-based document management."
        keyFeatures={[
          "<strong>Document Duplication:</strong> Creates exact copies of Word documents with new names",
          "<strong>Template Workflow:</strong> Perfect for creating documents from templates",
          "<strong>Document Selection:</strong> Choose from your OneDrive documents with an integrated picker",
          "<strong>Custom Naming:</strong> Specify custom names for duplicated documents",
          "<strong>Microsoft Integration:</strong> Seamless integration with Microsoft OneDrive and Word Online",
          "<strong>OAuth Security:</strong> Secure authentication through Microsoft OAuth"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Source Document ID",
              type: "text",
              required: true,
              valueType: "string",
              description: "The ID of the Word document to duplicate. You can select documents from your OneDrive using the integrated file picker."
            },
            {
              name: "New Document Name",
              type: "text",
              required: true,
              valueType: "string",
              description: "The name for the duplicated document. Include the .docx extension or it will be added automatically."
            }
          ]
        }}
        outputFields={[
          {
            name: "New Document ID",
            type: "string",
            required: true,
            valueType: "ID of the duplicated document",
            description: "The unique ID of the newly created document copy. Use this to reference the new document in subsequent nodes."
          },
          {
            name: "New Document Name",
            type: "string",
            required: true,
            valueType: "Name of the duplicated document",
            description: "The filename of the newly created document."
          },
          {
            name: "Web URL",
            type: "string",
            required: true,
            valueType: "URL to open the document",
            description: "Direct link to open the duplicated document in Word Online."
          },
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Operation success status",
            description: "Returns true if the document was successfully duplicated, false otherwise."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Template-Based Document Creation</CardTitle>
              <CardDescription>
                Create documents from a template for each new project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "sourceDocumentId": "{{templateDocId}}",
  "newDocumentName": "{{projectName}} - Project Plan.docx"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Duplicates a project plan template with a dynamic name based on the project. Follow with Word Write Content to populate with project-specific data.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Document Versioning Workflow</CardTitle>
              <CardDescription>
                Create versioned copies before making changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📄 Word Duplicate → 📝 Word Write Content → ✅ Confirm Changes</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "sourceDocumentId": "{{originalDocId}}",
  "newDocumentName": "{{originalName}} - Version {{version}}.docx"
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Creates a versioned copy before modifying the document, preserving the original.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Batch Document Creation</CardTitle>
              <CardDescription>
                Create multiple personalized documents from one template
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📋 List of Names → 🔄 For Each → 📄 Word Duplicate → 📝 Personalize → 📧 Send</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Use For Each to create personalized documents for multiple recipients, customizing each one.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use descriptive names for duplicated documents",
          "Include .docx extension in document name",
          "Store the new document ID for future operations",
          "Use templates for consistent document creation",
          "Verify source document exists before duplicating",
          "Check Success field before proceeding"
        ]}
        donts={[
          "Don't forget to handle duplication failures",
          "Avoid duplicate names in the same folder",
          "Don't assume unlimited OneDrive storage",
          "Avoid duplicating very large documents repeatedly",
          "Don't hardcode document IDs when possible",
          "Avoid exceeding API rate limits"
        ]}
        proTip="Combine Word Duplicate with Word Write Content to create a powerful template system. Duplicate a formatted template document, then use Word Write Content to populate it with dynamic data from your workflow."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Source Document Not Found",
            symptoms: "Node fails with document not found error",
            solution: "Verify the source document ID is correct and exists in OneDrive. Check that the user has access to the document."
          },
          {
            title: "Name Conflict",
            symptoms: "Duplicate fails with name already exists error",
            solution: "A document with the same name already exists in the destination folder. Use unique names or add timestamps/version numbers to document names."
          },
          {
            title: "Storage Quota Exceeded",
            symptoms: "Node fails with storage quota error",
            solution: "The user's OneDrive storage is full. Free up space or use a different account with available storage."
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
            href: "/docs/nodes/word-write-contents",
            title: "Word Write Content Node",
            description: "Write content to duplicated documents"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Create multiple documents in batch"
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
