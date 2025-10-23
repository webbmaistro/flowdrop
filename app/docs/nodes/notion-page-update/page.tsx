"use client"

import React from 'react';
import { Edit, Key, Lock, Settings, Database } from 'lucide-react';
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

export default function NotionPageUpdateNode() {
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
      description: "OAuth scopes needed for page updates",
      requirements: [
        "Notion Write: Access to update pages and content",
        "User Consent: User must grant permission for these scopes",
        "Page Access: Access to the target page for updates"
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
        icon={Edit}
        title="Notion Page Update"
        description="Update properties of an existing Notion page"
        nodeType="Action"
        category="Notion Integration"
        iconName="Edit"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Notion Page Update</strong> node is an action node that updates properties of existing Notion pages using the user's OAuth token. This powerful integration allows you to modify page properties, update metadata, and maintain dynamic content in your Notion workspace through automated workflows."
        keyFeatures={[
          "<strong>Property Updates:</strong> Update any page property using JSON format",
          "<strong>Dynamic Page Selection:</strong> Target specific pages by their unique ID",
          "<strong>Flexible Property Types:</strong> Support for all Notion property types (title, select, multi-select, etc.)",
          "<strong>Success Tracking:</strong> Returns page ID, URL, and operation status",
          "<strong>OAuth Security:</strong> Secure authentication through Notion OAuth",
          "<strong>Error Handling:</strong> Graceful handling of authentication and API errors"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Page ID",
              type: "text",
              required: true,
              valueType: "string",
              description: "ID of the Notion page to update. This is the unique identifier found in the page URL or through the Notion API."
            },
            {
              name: "Properties",
              type: "text_area",
              required: true,
              valueType: "JSON",
              description: "JSON object containing the property updates (e.g., {\"title\": {\"title\": [{\"text\": {\"content\": \"Updated Title\"}}]}}). This defines which properties to update and their new values."
            }
          ],
          optional: []
        }}
        outputFields={[
          {
            name: "Page ID",
            type: "string",
            required: false,
            valueType: "The ID of the updated page",
            description: "The unique identifier of the Notion page that was updated. This confirms the operation was performed on the correct page."
          },
          {
            name: "Page URL",
            type: "string",
            required: false,
            valueType: "The URL of the updated page",
            description: "The direct URL to access the updated Notion page. Useful for sharing or linking to the modified content."
          },
          {
            name: "Success",
            type: "boolean",
            required: false,
            valueType: "Whether the operation succeeded",
            description: "Boolean value indicating whether the page update operation was successful. Use this to implement error handling and retry logic in your workflows."
          }
        ]}
      />

      <TechnicalDetailsSection
        details={[
          {
            title: "Page Update Process",
            description: "How the node updates Notion pages",
            items: [
              {
                title: "Input Validation",
                description: "The node validates that both page ID and properties are provided. Returns failure if essential inputs are missing or invalid."
              },
              {
                title: "User Authentication",
                description: "Retrieves the user ID from the workflow service and obtains their Notion OAuth access token for secure API access to Notion."
              }
            ]
          },
          {
            title: "Notion API Integration",
            description: "How the node interfaces with Notion's page update services",
            items: [
              {
                title: "Page Update API Call",
                description: "Uses the Notion API to update the specified page with the provided properties. The API call includes the page ID and the properties object."
              },
              {
                title: "Property Format Validation",
                description: "Ensures the properties JSON follows Notion's API format requirements for different property types (title, select, multi-select, etc.)."
              },
              {
                title: "Response Processing",
                description: "Processes the API response to extract page ID, URL, and success status for output to the workflow."
              }
            ]
          },
          {
            title: "Error Handling",
            description: "How the node handles various error scenarios",
            items: [
              {
                title: "Authentication Errors",
                description: "Handles OAuth token issues and authentication failures by returning success: false with appropriate error information."
              },
              {
                title: "Page Access Errors",
                description: "Manages cases where the page doesn't exist or the user doesn't have permission to update it."
              },
              {
                title: "Property Validation Errors",
                description: "Handles invalid property formats or unsupported property types by returning detailed error information."
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
              <CardTitle>Basic Property Update</CardTitle>
              <CardDescription>
                Update simple properties on a Notion page
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "pageId": "12345678-1234-1234-1234-123456789abc",
  "properties": {
    "title": {
      "title": [{"text": {"content": "Updated Page Title"}}]
    },
    "Status": {
      "select": {"name": "Completed"}
    },
    "Priority": {
      "select": {"name": "High"}
    }
  }
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                This will update the page title and status/priority properties on the specified Notion page.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Advanced Property Updates</CardTitle>
              <CardDescription>
                Update various property types including dates, multi-select, and text
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "pageId": "87654321-4321-4321-4321-cba987654321",
  "properties": {
    "title": {
      "title": [{"text": {"content": "Project Update - Q1 2024"}}]
    },
    "Due Date": {
      "date": {"start": "2024-03-31"}
    },
    "Tags": {
      "multi_select": [
        {"name": "Q1"},
        {"name": "High Priority"},
        {"name": "Marketing"}
      ]
    },
    "Description": {
      "rich_text": [{"text": {"content": "Updated project description with latest information"}}]
    }
  }
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                This example shows updating multiple property types including date, multi-select tags, and rich text content.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Automated Status Updates</CardTitle>
              <CardDescription>
                Automatically update project status based on workflow completion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📧 Email Trigger → 🤖 AI Analysis → 📊 Data Processing → 📝 Notion Page Update → ✅ Status Log</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Trigger on new emails, analyze content with AI, process data, then update corresponding Notion pages with new status and information.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Bulk Content Management</CardTitle>
              <CardDescription>
                Update multiple pages with consistent information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Notion Query → 🔄 For Each → 📝 Page Update → 📈 Progress Tracking</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Query pages from a Notion database, then use a For Each loop to update each page with new information, tracking progress throughout the process.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use the exact property names as they appear in your Notion database",
          "Structure your properties JSON according to Notion's API format",
          "Handle the success status for proper error management",
          "Test your property updates in small batches first",
          "Use meaningful and descriptive property values",
          "Validate page IDs before attempting updates"
        ]}
        donts={[
          "Don't hardcode page IDs when they can be dynamically obtained",
          "Avoid updating pages without proper property validation",
          "Don't ignore authentication and scope requirements",
          "Avoid updating pages you don't have write access to",
          "Don't forget to handle empty or malformed property JSON",
          "Avoid making too many API calls in rapid succession"
        ]}
        proTip="When working with Notion page updates, remember that the properties JSON must match your database schema exactly. Use Notion's API documentation to understand the correct format for different property types. Always test your property structure with a single page before implementing in production workflows."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Authentication Errors",
            symptoms: "Node fails with OAuth or access token errors",
            solution: "Ensure the user has connected their Notion account and granted the required OAuth scopes (Notion write access). Reconnect the account if necessary."
          },
          {
            title: "Page Not Found",
            symptoms: "Node returns success: false or page not found error",
            solution: "Verify the page ID is correct and the page exists in your Notion workspace. Check that the page hasn't been deleted or moved to a different location."
          },
          {
            title: "Property Format Errors",
            symptoms: "Page update fails with property-related errors",
            solution: "Ensure your properties JSON matches the page schema exactly. Check property names, types, and values according to Notion's API documentation. Verify that the property exists on the page."
          },
          {
            title: "Permission Denied",
            symptoms: "Node fails with insufficient permissions error",
            solution: "Check that the user has write access to the target page. Verify that the page is not in a read-only database or workspace that restricts updates."
          },
          {
            title: "Invalid Property Values",
            symptoms: "Update fails with invalid value errors",
            solution: "Ensure that select/multi-select values match the exact options defined in your Notion database. Check that date formats are correct and text values don't exceed length limits."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/notion-page-create",
            title: "Notion Page Create Node",
            description: "Create new pages in Notion databases"
          },
          {
            href: "/docs/nodes/notion-database-query",
            title: "Notion Database Query Node",
            description: "Query existing Notion databases to find pages"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Update multiple pages in batches"
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
