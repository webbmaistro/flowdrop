"use client"

import React from 'react';
import { FileText, Key, Lock, Settings } from 'lucide-react';
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

export default function GoogleDocsReadNode() {
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
      description: "OAuth scopes needed for document access",
      requirements: [
        "Google Docs Read-Only: Access to read document content",
        "Google Drive Metadata Read-Only: Access to list and browse documents",
        "User Consent: User must grant permission for these scopes"
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
        icon={FileText}
        title="Google Docs Read"
        description="Reads content from a Google Doc using OAuth authentication"
        nodeType="Action"
        category="Google Integration"
        iconName="FileText"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Docs Read</strong> node is an action node that fetches document content from Google Docs using the user's OAuth token. This powerful integration allows you to read and process Google Docs content directly in your workflows, enabling document analysis, content extraction, and automated document processing."
        keyFeatures={[
          "<strong>Google Docs Integration:</strong> Seamlessly reads content from Google Docs",
          "<strong>OAuth Authentication:</strong> Secure access using user's Google account",
          "<strong>Dynamic Document Selection:</strong> Browse and select from available documents",
          "<strong>Content Extraction:</strong> Retrieves full document content and metadata",
          "<strong>Success Tracking:</strong> Returns operation status and document information",
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
              description: "The ID of the Google Doc to read from. This field provides dynamic selection options, allowing users to browse and select from their available Google Docs. The ID uniquely identifies the specific document in Google's system."
            }
          ]
        }}
        outputFields={[
          {
            name: "Document Content",
            type: "JSON",
            valueType: "The full content of the document",
            description: "Contains the complete document content in JSON format, including all text, formatting, and structural elements. This represents the document's body content as returned by the Google Docs API."
          },
          {
            name: "Document Title",
            type: "string",
            valueType: "The title of the document",
            description: "The human-readable title of the Google Doc as it appears in Google Docs. Useful for identifying and referencing the document in your workflows."
          },
          {
            name: "Document ID",
            type: "string",
            valueType: "The ID of the document that was read",
            description: "The unique identifier of the document that was successfully read. This confirms which specific document was processed and can be used for logging or reference purposes."
          },
          {
            name: "Success",
            type: "boolean",
            valueType: "Whether the operation succeeded",
            description: "Boolean value indicating whether the Google Docs read operation was successful. Use this to implement error handling and retry logic in your workflows."
          }
        ]}
      />

      <TechnicalDetailsSection
        sections={[
          {
            title: "Document Reading Process",
            description: "How the node fetches and processes Google Docs content",
            details: [
              {
                subtitle: "Input Validation",
                content: "The node first validates the document ID input. Ensures document ID is provided, returns null content and false success if missing, and prevents API calls with invalid inputs."
              },
              {
                subtitle: "User Authentication",
                content: "Retrieves the user ID from the workflow service and obtains their Google OAuth access token for secure API access to Google Docs."
              }
            ]
          },
          {
            title: "Google Docs API Integration",
            description: "How the node interfaces with Google's document services",
            details: [
              {
                subtitle: "Document Retrieval",
                content: "Uses the Google Docs API to fetch the specified document with the 'DEFAULT_FOR_CURRENT_ACCESS' format, which provides the most comprehensive content representation."
              },
              {
                subtitle: "Content Extraction",
                content: "Extracts the document body content and title from the API response, providing both the structured content and metadata for downstream processing."
              },
              {
                subtitle: "Response Formatting",
                content: "Returns the content in JSON format, preserving the document's structure and formatting information as provided by Google's API."
              }
            ]
          },
          {
            title: "Dynamic Document Selection",
            description: "How the node provides dynamic options for document selection",
            details: [
              {
                subtitle: "Document Listing",
                content: "Implements the getDynamicSelectOptions method to fetch available Google Docs and provide them as selectable options in the UI."
              },
              {
                subtitle: "User-Specific Access",
                content: "Only shows documents that the authenticated user has access to, ensuring proper security and access control."
              },
              {
                subtitle: "Error Handling",
                content: "Gracefully handles authentication failures and API errors, returning an empty options list when document fetching fails."
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
              <CardTitle>Basic Document Reading</CardTitle>
              <CardDescription>
                Read content from a specific Google Doc
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "documentId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                This will read the Google Doc with the specified ID and return its content, title, and confirmation of successful reading.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Document Content Analysis Workflow</CardTitle>
              <CardDescription>
                Analyze Google Docs content with AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📄 Google Docs Read → 🤖 AI Analysis → 📊 Content Summary → 📧 Email Report</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read document content, analyze with AI for insights, generate summary, and email results to stakeholders.
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
          "Consider document size and content complexity",
          "Implement proper error handling for authentication failures",
          "Use document title for user-friendly identification",
          "Monitor OAuth token expiration and refresh"
        ]}
        donts={[
          "Don't hardcode document IDs when dynamic selection is available",
          "Avoid reading very large documents without content limits",
          "Don't ignore authentication and scope requirements",
          "Avoid processing sensitive documents without proper security",
          "Don't forget to handle empty or malformed document content",
          "Avoid making too many API calls in rapid succession"
        ]}
        proTip="When working with Google Docs content, remember that the document content is returned in JSON format with Google's document structure. Consider using the LLM Prompt node to extract and format the content in a more workflow-friendly format."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Authentication Errors",
            symptoms: "Node fails with OAuth or access token errors",
            solution: "Ensure the user has connected their Google account and granted the required OAuth scopes (Google Docs read-only and Drive metadata read-only)."
          },
          {
            title: "Document Not Found",
            symptoms: "Node returns success: false or empty content",
            solution: "Verify the document ID is correct and the user has access to the specified document. Check that the document exists and is not deleted."
          },
          {
            title: "Dynamic Select Not Working",
            symptoms: "Document selection dropdown is empty or shows errors",
            solution: "Check that the user has Google Docs and that the OAuth integration is working properly. Verify the required scopes are granted."
          },
          {
            title: "Content Processing Issues",
            symptoms: "Document content is malformed or difficult to process",
            solution: "Remember that Google Docs content is returned in JSON format. Use appropriate parsing logic or consider using the LLM Prompt node to extract readable text content."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Process Google Docs content with AI"
          },
          {
            href: "/docs/nodes/google-sheets-write",
            title: "Google Sheets Write Node",
            description: "Log document analysis results"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Process multiple documents"
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
