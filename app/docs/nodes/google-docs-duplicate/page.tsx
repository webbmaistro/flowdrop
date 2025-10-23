"use client"

import React from 'react';
import { FileText, Key, Lock, Settings, Copy } from 'lucide-react';
import {
  NodeLayout,
  NodeHeader,
  OverviewSection,
  PrerequisitesSection,
  NodeConfigurationSection,
  BestPracticesSection,
  TroubleshootingSection,
  TechnicalDetailsSection,
  RelatedResourcesSection,
} from '@/components/docs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import CodeBlock from "@/components/ui/CodeBlock";

export default function GoogleDocsDuplicateNode() {
  const prerequisites = [
    {
      icon: Key,
      title: "Google Integration",
      description: "Must have Google integration properly configured",
      requirements: [
        "Google integration enabled and configured",
        "User has authorized Google account access",
        "Valid OAuth access token for Google"
      ]
    },
    {
      icon: Lock,
      title: "Required OAuth Scopes",
      description: "OAuth scopes needed for document duplication",
      requirements: [
        "Google Drive File: Access to create and manage files in Google Drive",
        "Google Docs: Access to read and duplicate document content",
        "User Consent: User must grant permission for these scopes"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "Services needed for operation",
      requirements: [
        "Google Docs Service: Access to Google Docs API for document operations",
        "Google Drive Service: Access to Google Drive API for file creation",
        "OAuth Service: Access to OAuth service for token management",
        "Workflow Service: Access to workflow service for user identification"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Copy}
        title="Google Docs Duplicate Document"
        description="Duplicates an entire Google Document with all content and formatting"
        nodeType="Action"
        category="Google Integration"
        iconName="Copy"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Docs Duplicate Document</strong> node is an action node that creates a complete copy of a Google Document, preserving all content, formatting, and structure. This powerful integration allows you to duplicate documents directly in your workflows, enabling document templating, backup creation, and automated document management."
        keyFeatures={[
          "<strong>Complete Document Duplication:</strong> Creates an exact copy with all content and formatting",
          "<strong>OAuth Authentication:</strong> Secure access using user's Google account",
          "<strong>Dynamic Document Selection:</strong> Browse and select from available documents",
          "<strong>Custom Naming:</strong> Specify a new title for the duplicated document",
          "<strong>Success Tracking:</strong> Returns operation status and new document information",
          "<strong>Error Handling:</strong> Graceful handling of authentication and access issues"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Document ID",
              type: "dynamic_select",
              required: true,
              valueType: "string",
              description: "The ID of the Google Doc to duplicate. This field provides dynamic selection options, allowing users to browse and select from their available Google Docs. The ID uniquely identifies the specific document in Google's system."
            },
            {
              name: "New Document Title",
              type: "text",
              required: true,
              valueType: "string",
              description: "The title for the newly created duplicated document. This will be the name of the copy as it appears in Google Drive and Google Docs."
            }
          ]
        }}
        outputFields={[
          {
            name: "Result",
            type: "JSON",
            required: false,
            valueType: "The full result of the duplicate operation",
            description: "Contains the complete response from the Google Drive API, including metadata about the newly created document. This includes all the details about the duplicated file."
          },
          {
            name: "Success",
            type: "boolean",
            required: false,
            valueType: "Whether the operation succeeded",
            description: "Boolean value indicating whether the Google Docs duplicate operation was successful. Use this to implement error handling and retry logic in your workflows."
          },
          {
            name: "New Document ID",
            type: "string",
            required: false,
            valueType: "The ID of the newly created document",
            description: "The unique identifier of the newly created duplicated document. This can be used to reference the new document in subsequent workflow steps."
          },
          {
            name: "New Document URL",
            type: "string",
            required: false,
            valueType: "The URL to access the new document",
            description: "The direct URL to open and edit the newly created duplicated document in Google Docs. Useful for sharing or linking to the new document."
          }
        ]}
      />

      <TechnicalDetailsSection
        details={[
          {
            title: "Document Duplication Process",
            description: "How the node creates a complete copy of a Google Document",
            items: [
              {
                title: "Input Validation",
                description: "The node first validates the document ID and new title inputs. Ensures both are provided, returns error if missing, and prevents API calls with invalid inputs."
              },
              {
                title: "User Authentication",
                description: "Retrieves the user ID from the workflow service and obtains their Google OAuth access token for secure API access to Google Drive and Docs."
              }
            ]
          },
          {
            title: "Google Drive API Integration",
            description: "How the node interfaces with Google's file services",
            items: [
              {
                title: "Document Duplication",
                description: "Uses the Google Drive API to create a complete copy of the specified document, preserving all content, formatting, and metadata."
              },
              {
                title: "File Naming",
                description: "Sets the new document title as specified in the input, ensuring the duplicated document has a clear, user-defined name."
              },
              {
                title: "Response Processing",
                description: "Extracts the new document ID and constructs the document URL for easy access to the duplicated document."
              }
            ]
          },
          {
            title: "Dynamic Document Selection",
            description: "How the node provides dynamic options for document selection",
            items: [
              {
                title: "Document Listing",
                description: "Implements the getDynamicSelectOptions method to fetch available Google Docs and provide them as selectable options in the UI."
              },
              {
                title: "User-Specific Access",
                description: "Only shows documents that the authenticated user has access to, ensuring proper security and access control."
              },
              {
                title: "Error Handling",
                description: "Gracefully handles authentication failures and API errors, returning an empty options list when document fetching fails."
              }
            ]
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Basic Document Duplication</CardTitle>
              <CardDescription>
                Duplicate a Google Doc with a new title
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "documentId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "newTitle": "Copy of Project Proposal - 2024"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                This will create a complete copy of the specified Google Doc with the new title and return the new document ID and URL.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Document Template Workflow</CardTitle>
              <CardDescription>
                Create document templates from existing documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📄 Google Docs Duplicate → ✏️ Customize Content → 📧 Share Document → 📊 Log Activity</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Duplicate a template document, customize it with specific content, share with team members, and log the activity for tracking.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Document Backup Workflow</CardTitle>
              <CardDescription>
                Create automated backups of important documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>⏰ Schedule Trigger → 📄 Google Docs Duplicate → 📁 Organize in Drive → 📧 Notification</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Automatically create backups of important documents on a schedule, organize them in a backup folder, and notify stakeholders of the backup completion.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use the dynamic select for easy document browsing",
          "Handle the success status for proper error management",
          "Use descriptive titles for duplicated documents",
          "Implement proper error handling for authentication failures",
          "Consider document size and complexity when duplicating",
          "Monitor OAuth token expiration and refresh",
          "Use the new document URL for sharing and collaboration"
        ]}
        donts={[
          "Don't hardcode document IDs when dynamic selection is available",
          "Avoid duplicating very large documents without considering performance",
          "Don't ignore authentication and scope requirements",
          "Avoid duplicating sensitive documents without proper security",
          "Don't forget to handle empty or malformed document content",
          "Avoid making too many API calls in rapid succession",
          "Don't use generic titles that make documents hard to identify"
        ]}
        proTip="When duplicating documents, consider using the LLM Prompt node to generate dynamic titles based on the original document content or current date/time. This makes your duplicated documents more organized and easier to manage."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Authentication Errors",
            symptoms: "Node fails with OAuth or access token errors",
            solution: "Ensure the user has connected their Google account and granted the required OAuth scopes (Google Drive file access and Google Docs access)."
          },
          {
            title: "Document Not Found",
            symptoms: "Node returns success: false or empty result",
            solution: "Verify the document ID is correct and the user has access to the specified document. Check that the document exists and is not deleted."
          },
          {
            title: "Dynamic Select Not Working",
            symptoms: "Document selection dropdown is empty or shows errors",
            solution: "Check that the user has Google Docs and that the OAuth integration is working properly. Verify the required scopes are granted."
          },
          {
            title: "Duplication Fails",
            symptoms: "Document duplication returns error or fails silently",
            solution: "Check that the user has sufficient Google Drive storage space and that the document is not corrupted. Verify that the new title doesn't conflict with existing documents."
          },
          {
            title: "Permission Issues",
            symptoms: "Node fails with permission or access denied errors",
            solution: "Ensure the user has the necessary permissions to create files in Google Drive and that the source document is accessible. Check Google Drive storage limits."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/google-docs-read",
            title: "Google Docs Read Node",
            description: "Read content from Google Docs before duplication"
          },
          {
            href: "/docs/nodes/google-sheets-create-spreadsheet",
            title: "Google Sheets Create Spreadsheet Node",
            description: "Create new spreadsheets alongside document duplication"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate dynamic titles for duplicated documents"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Duplicate multiple documents in batch"
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
