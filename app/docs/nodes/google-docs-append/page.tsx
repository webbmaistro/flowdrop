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

export default function GoogleDocsAppendNode() {
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
      description: "OAuth scopes needed for document modification",
      requirements: [
        "Google Drive File: Access to modify document files",
        "Google Docs: Access to edit document content",
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
        title="Google Docs Append"
        description="Appends text to the end of a Google Document using OAuth authentication"
        nodeType="Action"
        category="Google Integration"
        iconName="FileText"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Docs Append</strong> node is an action node that appends text to the end of a Google Document using the user's OAuth token. This powerful integration allows you to add content to existing Google Docs directly in your workflows, enabling automated document updates, content logging, and collaborative document building."
        keyFeatures={[
          "<strong>Google Docs Integration:</strong> Seamlessly appends content to Google Docs",
          "<strong>OAuth Authentication:</strong> Secure access using user's Google account",
          "<strong>Dynamic Document Selection:</strong> Browse and select from available documents",
          "<strong>Text Appending:</strong> Adds text to the end of the document content",
          "<strong>Success Tracking:</strong> Returns operation status and result information",
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
              description: "The ID of the Google Doc to append text to. This field provides dynamic selection options, allowing users to browse and select from their available Google Docs. The ID uniquely identifies the specific document in Google's system."
            },
            {
              name: "Text",
              type: "text_area",
              required: true,
              valueType: "string",
              description: "The text content to append to the end of the document. This can be plain text, formatted content, or any text that should be added to the document."
            }
          ]
        }}
        outputFields={[
          {
            name: "Result",
            type: "JSON",
            required: false,
            valueType: "The result of the append operation",
            description: "Contains the result of the append operation in JSON format, including details about the operation and any metadata returned by the Google Docs API."
          },
          {
            name: "Success",
            type: "boolean",
            required: false,
            valueType: "Whether the operation succeeded",
            description: "Boolean value indicating whether the Google Docs append operation was successful. Use this to implement error handling and retry logic in your workflows."
          }
        ]}
      />

      <TechnicalDetailsSection
        details={[
          {
            title: "Document Appending Process",
            description: "How the node appends text to Google Docs",
            items: [
              {
                title: "Input Validation",
                description: "The node first validates the document ID and text inputs. Ensures both fields are provided, throws an error if either is missing, and prevents API calls with invalid inputs."
              },
              {
                title: "User Authentication",
                description: "Retrieves the user ID from the workflow service and obtains their Google OAuth access token for secure API access to Google Docs."
              }
            ]
          },
          {
            title: "Google Docs API Integration",
            description: "How the node interfaces with Google's document services",
            items: [
              {
                title: "Text Appending",
                description: "Uses the Google Docs API to append the specified text to the end of the document. The text is inserted at the end of the document's current content."
              },
              {
                title: "Operation Result",
                description: "Returns the result of the append operation, including any metadata or confirmation details provided by the Google Docs API."
              },
              {
                title: "Success Confirmation",
                description: "Sets the success flag to true upon successful completion of the append operation, providing clear feedback about the operation status."
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
              <CardTitle>Basic Text Appending</CardTitle>
              <CardDescription>
                Append simple text to a Google Doc
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "documentId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "text": "This text was added via workflow automation."
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                This will append the specified text to the end of the Google Doc with the given ID.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Automated Content Logging</CardTitle>
              <CardDescription>
                Log workflow results to a Google Doc
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Data Processing → 📝 Google Docs Append → 📧 Email Notification</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Process data, append results to a shared Google Doc, and notify team members of updates.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Collaborative Document Building</CardTitle>
              <CardDescription>
                Build documents collaboratively with multiple workflow runs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🤖 AI Content Generation → 📝 Google Docs Append → 🔄 Repeat for Multiple Sections</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Generate content with AI, append each section to a Google Doc, and build comprehensive documents over multiple workflow executions.
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
          "Consider document size and content complexity when appending large amounts of text",
          "Implement proper error handling for authentication failures",
          "Use meaningful text content that adds value to the document",
          "Monitor OAuth token expiration and refresh",
          "Consider formatting when appending structured content"
        ]}
        donts={[
          "Don't hardcode document IDs when dynamic selection is available",
          "Avoid appending very large amounts of text in a single operation",
          "Don't ignore authentication and scope requirements",
          "Avoid appending sensitive information without proper security",
          "Don't forget to handle empty or malformed text inputs",
          "Avoid making too many API calls in rapid succession",
          "Don't append content without considering document structure and formatting"
        ]}
        proTip="When appending content to Google Docs, consider the document's existing structure and formatting. For structured content, you might want to use line breaks or formatting markers to maintain readability. The Google Docs API preserves the document's formatting, so appended text will follow the document's current style."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Authentication Errors",
            symptoms: "Node fails with OAuth or access token errors",
            solution: "Ensure the user has connected their Google account and granted the required OAuth scopes (Google Drive File and Google Docs)."
          },
          {
            title: "Document Not Found",
            symptoms: "Node returns success: false or operation fails",
            solution: "Verify the document ID is correct and the user has access to the specified document. Check that the document exists and is not deleted."
          },
          {
            title: "Dynamic Select Not Working",
            symptoms: "Document selection dropdown is empty or shows errors",
            solution: "Check that the user has Google Docs and that the OAuth integration is working properly. Verify the required scopes are granted."
          },
          {
            title: "Text Not Appearing",
            symptoms: "Operation succeeds but text doesn't appear in the document",
            solution: "Check that the text input is not empty and contains valid content. Verify the document is not in a read-only state or shared with view-only permissions."
          },
          {
            title: "Permission Denied",
            symptoms: "Node fails with permission or access denied errors",
            solution: "Ensure the user has edit permissions on the target document. Check that the document is not protected or in a read-only state."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/google-docs-read",
            title: "Google Docs Read Node",
            description: "Read content from Google Docs before appending"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate content to append to documents"
          },
          {
            href: "/docs/nodes/google-sheets-write",
            title: "Google Sheets Write Node",
            description: "Log append operations to spreadsheets"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Append content to multiple documents"
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
