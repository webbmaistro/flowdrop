"use client"

import React from 'react';
import { FileText, Key, Lock, Settings, Database, Plus } from 'lucide-react';
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

export default function NotionPageCreateNode() {
  const prerequisites = [
    {
      icon: Key,
      title: "Notion Integration",
      description: "Must have Notion integration properly configured",
      requirements: [
        "Notion integration enabled and configured",
        "User has authorized Notion account access",
        "Valid OAuth access token for Notion"
      ]
    },
    {
      icon: Lock,
      title: "Required OAuth Scopes",
      description: "OAuth scopes needed for page creation",
      requirements: [
        "Notion Write: Access to create pages and content",
        "User Consent: User must grant permission for these scopes",
        "Database Access: Access to target databases or parent pages"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "Services needed for operation",
      requirements: [
        "Notion Service: Access to Notion API for page operations",
        "OAuth Service: Access to OAuth service for token management",
        "Workflow Service: Access to workflow service for user identification"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Plus}
        title="Notion Page Create"
        description="Create a new Notion page in a database or under a parent page"
        nodeType="Action"
        category="Notion Integration"
        iconName="Plus"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Notion Page Create</strong> node is an action node that creates new pages in Notion using the user's OAuth token. This powerful integration allows you to create pages in databases or under parent pages, enabling automated content creation, data logging, and workflow documentation directly in Notion."
        keyFeatures={[
          "<strong>Database Page Creation:</strong> Create pages within Notion databases with properties",
          "<strong>Parent Page Creation:</strong> Create pages under existing parent pages",
          "<strong>Dynamic Database Selection:</strong> Browse and select from available databases",
          "<strong>Property Configuration:</strong> Set page properties using JSON format",
          "<strong>Content Blocks:</strong> Add rich content blocks to new pages",
          "<strong>Success Tracking:</strong> Returns page ID, URL, and operation status"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Properties",
              type: "text_area",
              required: true,
              valueType: "JSON",
              description: "JSON object containing the page properties (e.g., {\"Title\": {\"title\": [{\"text\": {\"content\": \"My Page\"}}]}}). This defines the page's properties and metadata."
            }
          ],
          optional: [
            {
              name: "Database",
              type: "dynamic_select",
              required: false,
              valueType: "string",
              description: "Optional: Notion database to create the page in. This field provides dynamic selection options, allowing users to browse and select from their available Notion databases."
            },
            {
              name: "Parent Page ID",
              type: "text",
              required: false,
              valueType: "string",
              description: "Optional: Parent page ID to create the page under when not using a database. Use this when creating pages under existing pages rather than in databases."
            },
            {
              name: "Content Blocks",
              type: "text_area",
              required: false,
              valueType: "JSON Array",
              description: "Optional: JSON array of block objects to add as page content. This allows you to add rich content like text, headings, lists, and more to the new page."
            }
          ]
        }}
        outputFields={[
          {
            name: "Page ID",
            type: "string",
            required: false,
            valueType: "The ID of the created page",
            description: "The unique identifier of the newly created Notion page. This can be used for future references or operations on the page."
          },
          {
            name: "Page URL",
            type: "string",
            required: false,
            valueType: "The URL of the created page",
            description: "The direct URL to access the newly created Notion page. Useful for sharing or linking to the created content."
          },
          {
            name: "Success",
            type: "boolean",
            required: false,
            valueType: "Whether the operation succeeded",
            description: "Boolean value indicating whether the page creation operation was successful. Use this to implement error handling and retry logic in your workflows."
          }
        ]}
      />

      <TechnicalDetailsSection
        details={[
          {
            title: "Page Creation Process",
            description: "How the node creates new Notion pages",
            items: [
              {
                title: "Input Validation",
                description: "The node validates that either a database ID or parent page ID is provided, along with required properties. Returns failure if essential inputs are missing."
              },
              {
                title: "User Authentication",
                description: "Retrieves the user ID from the workflow service and obtains their Notion OAuth access token for secure API access to Notion."
              }
            ]
          },
          {
            title: "Notion API Integration",
            description: "How the node interfaces with Notion's page creation services",
            items: [
              {
                title: "Database Page Creation",
                description: "When a database ID is provided, uses the Notion API to create a new page within the specified database with the given properties."
              },
              {
                title: "Parent Page Creation",
                description: "When a parent page ID is provided, creates a new page under the specified parent page with the given properties."
              },
              {
                title: "Content Block Addition",
                description: "If content blocks are provided, adds them as children to the newly created page, enabling rich content creation."
              }
            ]
          },
          {
            title: "Dynamic Database Selection",
            description: "How the node provides dynamic options for database selection",
            items: [
              {
                title: "Database Listing",
                description: "Implements the getDynamicSelectOptions method to fetch available Notion databases and provide them as selectable options in the UI."
              },
              {
                title: "User-Specific Access",
                description: "Only shows databases that the authenticated user has access to, ensuring proper security and access control."
              },
              {
                title: "Error Handling",
                description: "Gracefully handles authentication failures and API errors, returning an empty options list when database fetching fails."
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
              <CardTitle>Basic Database Page Creation</CardTitle>
              <CardDescription>
                Create a new page in a Notion database
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "databaseId": "12345678-1234-1234-1234-123456789abc",
  "properties": {
    "Title": {
      "title": [{"text": {"content": "New Project Page"}}]
    },
    "Status": {
      "select": {"name": "In Progress"}
    },
    "Priority": {
      "select": {"name": "High"}
    }
  }
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                This will create a new page in the specified Notion database with the given properties.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Page with Content Blocks</CardTitle>
              <CardDescription>
                Create a page with rich content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "parentPageId": "87654321-4321-4321-4321-cba987654321",
  "properties": {
    "Title": {
      "title": [{"text": {"content": "Meeting Notes"}}]
    }
  },
  "content": [
    {
      "type": "heading_1",
      "heading_1": {
        "rich_text": [{"text": {"content": "Meeting Agenda"}}]
      }
    },
    {
      "type": "bulleted_list_item",
      "bulleted_list_item": {
        "rich_text": [{"text": {"content": "Review project status"}}]
      }
    },
    {
      "type": "bulleted_list_item",
      "bulleted_list_item": {
        "rich_text": [{"text": {"content": "Discuss next steps"}}]
      }
    }
  ]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                This creates a page under a parent page with structured content including headings and bullet points.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Automated Documentation Workflow</CardTitle>
              <CardDescription>
                Create documentation pages automatically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📧 Email Trigger → 🤖 AI Analysis → 📄 Notion Page Create → 📊 Database Log</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Trigger on new emails, analyze content with AI, create structured Notion pages, and log the process in a database.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use the dynamic select for easy database browsing",
          "Structure your properties JSON according to Notion's API format",
          "Handle the success status for proper error management",
          "Consider using content blocks for rich page content",
          "Use meaningful page titles and properties",
          "Test your property structure with Notion's API documentation"
        ]}
        donts={[
          "Don't hardcode database IDs when dynamic selection is available",
          "Avoid creating pages without proper property validation",
          "Don't ignore authentication and scope requirements",
          "Avoid creating pages in databases you don't have write access to",
          "Don't forget to handle empty or malformed property JSON",
          "Avoid making too many API calls in rapid succession"
        ]}
        proTip="When working with Notion page creation, remember that the properties JSON must match your database schema exactly. Use Notion's API documentation to understand the correct format for different property types (title, select, multi-select, etc.)."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Authentication Errors",
            symptoms: "Node fails with OAuth or access token errors",
            solution: "Ensure the user has connected their Notion account and granted the required OAuth scopes (Notion write access)."
          },
          {
            title: "Database Not Found",
            symptoms: "Node returns success: false or database selection fails",
            solution: "Verify the database ID is correct and the user has write access to the specified database. Check that the database exists and is not archived."
          },
          {
            title: "Property Format Errors",
            symptoms: "Page creation fails with property-related errors",
            solution: "Ensure your properties JSON matches the database schema exactly. Check property names, types, and values according to Notion's API documentation."
          },
          {
            title: "Dynamic Select Not Working",
            symptoms: "Database selection dropdown is empty or shows errors",
            solution: "Check that the user has access to Notion databases and that the OAuth integration is working properly. Verify the required scopes are granted."
          },
          {
            title: "Content Block Issues",
            symptoms: "Content blocks are not added to the page",
            solution: "Ensure your content blocks JSON follows Notion's block structure format. Use the Notion API documentation to verify block types and properties."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/notion-database-query",
            title: "Notion Database Query Node",
            description: "Query existing Notion databases"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate content for Notion pages"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Create multiple pages in batches"
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
