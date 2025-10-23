"use client"

import React from 'react';
import { FileText, Key, Lock, Settings, Plus } from 'lucide-react';
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

export default function GoogleDocsCreateNode() {
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
      description: "OAuth scopes needed for document creation",
      requirements: [
        "Google Drive File: Access to create and manage files in Google Drive",
        "User Consent: User must grant permission for these scopes",
        "Document Creation: Permission to create new Google Docs"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "Services needed for operation",
      requirements: [
        "Google Docs Service: Access to Google Docs API for document operations",
        "OAuth Service: Access to OAuth service for token management",
        "Workflow Service: Access to workflow service for user identification"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        logo="/logos/google-docs.svg"
        title="Google Docs Create Document"
        description="Creates a new Google Document using OAuth authentication"
        nodeType="Action"
        category="Google Integration"
        iconName="Google Docs"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Docs Create Document</strong> node is an action node that creates new Google Documents using the user's OAuth token. This powerful integration allows you to create documents directly in your workflows, enabling automated document generation, content creation, and collaborative document management."
        keyFeatures={[
          "<strong>Google Docs Integration:</strong> Seamlessly creates new Google Documents",
          "<strong>OAuth Authentication:</strong> Secure access using user's Google account",
          "<strong>Document Creation:</strong> Creates new documents with specified titles",
          "<strong>URL Generation:</strong> Returns direct links to created documents",
          "<strong>Success Tracking:</strong> Returns operation status and document information",
          "<strong>Error Handling:</strong> Graceful handling of authentication and creation issues"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Document Title",
              type: "text",
              required: true,
              valueType: "string",
              description: "The title for the new Google Document. This will be the name of the document as it appears in Google Docs and Google Drive. The title should be descriptive and meaningful for easy identification."
            }
          ]
        }}
        outputFields={[
          {
            name: "Result",
            type: "JSON",
            required: false,
            valueType: "Full result of the create document operation",
            description: "Contains the complete result object from the Google Docs API, including all metadata and creation details. This provides comprehensive information about the document creation process."
          },
          {
            name: "Success",
            type: "boolean",
            required: false,
            valueType: "Whether the operation succeeded",
            description: "Boolean value indicating whether the Google Docs creation operation was successful. Use this to implement error handling and retry logic in your workflows."
          },
          {
            name: "Document ID",
            type: "string",
            required: false,
            valueType: "The ID of the newly created document",
            description: "The unique identifier of the newly created Google Document. This ID can be used for future operations on the document, such as reading, updating, or sharing."
          },
          {
            name: "Document URL",
            type: "string",
            required: false,
            valueType: "The URL of the created document",
            description: "The direct URL to access the newly created Google Document. This URL can be shared with others or used to open the document directly in a browser."
          },
          {
            name: "Document Title",
            type: "string",
            required: false,
            valueType: "The title of the created document",
            description: "The title of the newly created document as it appears in Google Docs. This confirms the document was created with the specified title."
          }
        ]}
      />

      <TechnicalDetailsSection
        details={[
          {
            title: "Document Creation Process",
            description: "How the node creates new Google Documents",
            items: [
              {
                title: "Input Validation",
                description: "The node validates that a document title is provided. Returns an error if the title is missing or empty, preventing API calls with invalid inputs."
              },
              {
                title: "User Authentication",
                description: "Retrieves the user ID from the workflow service and obtains their Google OAuth access token for secure API access to Google Docs."
              }
            ]
          },
          {
            title: "Google Docs API Integration",
            description: "How the node interfaces with Google's document creation services",
            items: [
              {
                title: "Document Creation",
                description: "Uses the Google Docs API to create a new document with the specified title. The document is created in the user's Google Drive with appropriate permissions."
              },
              {
                title: "URL Generation",
                description: "Automatically generates a shareable URL for the newly created document using the standard Google Docs URL format."
              },
              {
                title: "Response Processing",
                description: "Extracts the document ID, title, and other metadata from the API response to provide comprehensive information about the created document."
              }
            ]
          },
          {
            title: "Error Handling and Security",
            description: "How the node handles errors and ensures secure operations",
            items: [
              {
                title: "Authentication Validation",
                description: "Verifies that the user has a valid Google OAuth token before attempting document creation. Returns appropriate error messages for authentication failures."
              },
              {
                title: "Permission Checking",
                description: "Ensures the user has the necessary permissions to create documents in their Google Drive account."
              },
              {
                title: "API Error Handling",
                description: "Gracefully handles Google API errors, network issues, and rate limiting, providing meaningful error messages for troubleshooting."
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
              <CardTitle>Basic Document Creation</CardTitle>
              <CardDescription>
                Create a new Google Document with a simple title
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "title": "Meeting Notes - Project Alpha"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                This will create a new Google Document titled "Meeting Notes - Project Alpha" and return the document ID, URL, and confirmation of successful creation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Automated Report Generation</CardTitle>
              <CardDescription>
                Create documents for automated reporting workflows
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Data Analysis → 📄 Google Docs Create → 🤖 AI Content → 📧 Email Report</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Analyze data, create a new Google Doc, generate AI-powered content, and email the report to stakeholders.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Collaborative Document Workflow</CardTitle>
              <CardDescription>
                Create documents for team collaboration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📧 Email Trigger → 📄 Google Docs Create → 🔗 Share Link → 📱 Slack Notification</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Trigger on new emails, create a collaborative document, generate shareable link, and notify team members via Slack.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Template-Based Document Creation</CardTitle>
              <CardDescription>
                Create documents with dynamic titles based on data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "title": "Weekly Report - {{date}} - {{project_name}}"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Use template variables to create documents with dynamic titles based on workflow data, such as dates, project names, or other variables.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use descriptive and meaningful document titles",
          "Handle the success status for proper error management",
          "Store document IDs for future operations on the same document",
          "Use document URLs for sharing and collaboration",
          "Implement proper error handling for authentication failures",
          "Consider document organization and folder structure in Google Drive"
        ]}
        donts={[
          "Don't create documents without meaningful titles",
          "Avoid creating too many documents in rapid succession",
          "Don't ignore authentication and scope requirements",
          "Avoid creating documents without proper error handling",
          "Don't forget to handle empty or invalid title inputs",
          "Avoid making too many API calls in rapid succession"
        ]}
        proTip="When working with Google Docs creation, remember that the document will be created in the user's Google Drive root folder by default. Consider using the Google Drive API to organize documents into specific folders for better document management."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Authentication Errors",
            symptoms: "Node fails with OAuth or access token errors",
            solution: "Ensure the user has connected their Google account and granted the required OAuth scopes (Google Drive file access)."
          },
          {
            title: "Document Creation Fails",
            symptoms: "Node returns success: false or creation errors",
            solution: "Verify the user has proper permissions to create documents in their Google Drive. Check that the Google Docs API is enabled and accessible."
          },
          {
            title: "Missing Document ID",
            symptoms: "Document is created but ID is not returned",
            solution: "Check the Google Docs API response format and ensure the document creation was successful. Verify that the API is returning the expected response structure."
          },
          {
            title: "Invalid Document Title",
            symptoms: "Document creation fails with title-related errors",
            solution: "Ensure the document title is not empty and follows Google's naming conventions. Avoid special characters that might cause issues."
          },
          {
            title: "Rate Limiting Issues",
            symptoms: "Document creation fails with rate limit errors",
            solution: "Implement proper rate limiting and retry logic. Consider spacing out document creation requests to avoid hitting Google's API limits."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/google-docs-read",
            title: "Google Docs Read Node",
            description: "Read content from existing Google Docs"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate content for new documents"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Create multiple documents in batches"
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
