"use client"

import React from 'react';
import { Database, Shield, Settings, Search } from 'lucide-react';
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

export default function NotionDatabaseQueryNode() {
  const prerequisites = [
    {
      icon: Shield,
      title: "Notion Account Connection",
      description: "Must have a connected Notion account with appropriate permissions",
      requirements: [
        "Notion account connected via OAuth",
        "Notion read scope permissions",
        "Access to the target Notion workspace"
      ]
    },
    {
      icon: Database,
      title: "Database Requirements",
      description: "Understanding of Notion database structure and query capabilities",
      requirements: [
        "The target database must be accessible through your Notion workspace",
        "Database must be a valid Notion database (not a page)",
        "Clear understanding of database properties and structure"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "Technical setup and configuration requirements",
      requirements: [
        "Notion OAuth service properly configured",
        "Internet connectivity for Notion API communication",
        "Proper exception handling for API failures and authentication issues"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        logo="/logos/notion.svg"
        title="Notion Database Query"
        description="Query entries from a Notion database with optional filtering and sorting"
        nodeType="Action"
        category="Notion"
        iconName="Database"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Notion Database Query</strong> node is an action node that retrieves entries from a Notion database with powerful filtering and sorting capabilities. This integration enables you to programmatically access and process data from your Notion databases, perfect for data analysis, content management, and workflow-based database operations."
        keyFeatures={[
          "<strong>Database Selection:</strong> Choose from your Notion databases with an integrated picker",
          "<strong>Advanced Filtering:</strong> Apply complex filters using Notion's query syntax",
          "<strong>Flexible Sorting:</strong> Sort results by any database property",
          "<strong>Pagination Support:</strong> Handle large datasets with built-in pagination",
          "<strong>Rich Data Access:</strong> Retrieve all database properties and metadata",
          "<strong>OAuth Security:</strong> Secure authentication through Notion OAuth"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Database",
              type: "dynamic_select",
              required: true,
              valueType: "string",
              description: "The Notion database to query. You can select databases from your Notion workspace using the integrated database picker."
            }
          ],
          optional: [
            {
              name: "Filter",
              type: "text_area",
              required: false,
              valueType: "JSON",
              description: "JSON filter object to apply to the query. Use Notion's query syntax to filter results by property values, dates, text content, and more."
            },
            {
              name: "Sorts",
              type: "text_area",
              required: false,
              valueType: "JSON",
              description: "JSON array of sort objects to order the results. Each sort object should specify the property to sort by and the direction (ascending or descending)."
            },
            {
              name: "Page Size",
              type: "number",
              required: false,
              valueType: "number",
              description: "Maximum number of results to return (1-100). Defaults to 100 if not specified."
            }
          ]
        }}
        outputFields={[
          {
            name: "Results",
            type: "JSON",
            required: true,
            valueType: "Array of database entries",
            description: "Array of database entries matching the query. Each entry contains all properties and metadata from the Notion database."
          },
          {
            name: "Has More",
            type: "boolean",
            required: true,
            valueType: "Boolean indicating more results available",
            description: "Whether there are more results available beyond the current page. Use this with Next Cursor for pagination."
          },
          {
            name: "Next Cursor",
            type: "string",
            required: true,
            valueType: "Cursor for pagination",
            description: "Cursor for pagination to get the next page of results. Use this value in subsequent queries to continue pagination."
          },
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Operation success status",
            description: "Returns true if the query was successful, false otherwise."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Content Management Workflow</CardTitle>
              <CardDescription>
                Automatically process and organize content from Notion databases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Notion Query → 🤖 AI Analysis → 📝 Content Processing → 📧 Distribution</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Query content from Notion databases, analyze with AI for insights, process and format content, then distribute via email or other channels.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Synchronization</CardTitle>
              <CardDescription>
                Sync Notion database data with other platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Notion Query → 🔄 Data Transform → 📈 Google Sheets Write → ✅ Confirm</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Query data from Notion databases, transform the data format, then write to Google Sheets or other platforms for analysis and reporting.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Filter Examples</CardTitle>
              <CardDescription>
                Common filtering patterns for Notion database queries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Filter by Status</h4>
                  <CodeBlock 
                    lang="json"
                    code={`{
  "property": "Status",
  "select": {
    "equals": "Published"
  }
}`}
                  />
                </div>
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Filter by Date Range</h4>
                  <CodeBlock 
                    lang="json"
                    code={`{
  "property": "Created",
  "date": {
    "after": "2024-01-01"
  }
}`}
                  />
                </div>
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Complex Filter</h4>
                  <CodeBlock 
                    lang="json"
                    code={`{
  "and": [
    {
      "property": "Status",
      "select": {
        "equals": "Draft"
      }
    },
    {
      "property": "Priority",
      "select": {
        "equals": "High"
      }
    }
  ]
}`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use the database picker for easy database selection",
          "Test filter syntax in Notion's interface before using in workflows",
          "Handle pagination properly for large datasets",
          "Validate database permissions before querying",
          "Use appropriate page sizes to balance performance and data needs",
          "Store database IDs for repeated access to avoid re-selection"
        ]}
        donts={[
          "Don't assume all database properties are available",
          "Avoid querying very large databases without pagination",
          "Don't forget to handle authentication errors",
          "Avoid hardcoding database IDs when possible",
          "Don't process sensitive data without proper security measures",
          "Avoid exceeding Notion API rate limits"
        ]}
        proTip="Notion's query syntax is powerful but can be complex. Start with simple filters and gradually add complexity. Use Notion's interface to test your filter syntax before implementing in workflows. For large datasets, always implement pagination using the Next Cursor output."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Database Not Found",
            symptoms: "Node fails with database not found error",
            solution: "Verify the database ID is correct and the database exists in your Notion workspace. Check that the user has access to the database and it hasn't been deleted or moved."
          },
          {
            title: "Permission Errors",
            symptoms: "Node fails with insufficient permissions",
            solution: "Ensure the Notion account connection has read scope permissions. Reconnect the Notion account if needed and verify OAuth permissions in your workspace settings."
          },
          {
            title: "Invalid Filter Syntax",
            symptoms: "Node fails with invalid filter error",
            solution: "Check your filter JSON syntax. Ensure property names match exactly and use the correct filter operators. Test your filter in Notion's interface first."
          },
          {
            title: "Empty Results",
            symptoms: "Query returns no results when data exists",
            solution: "Check your filter criteria - they might be too restrictive. Verify that the database contains data matching your filter conditions. Try querying without filters first."
          },
          {
            title: "Rate Limit Exceeded",
            symptoms: "Node fails with rate limit error",
            solution: "Notion has API rate limits. Implement delays between requests or reduce the frequency of queries. Consider caching results for repeated access."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/google-sheets-read",
            title: "Google Sheets Read Node",
            description: "Read data from Google Sheets for cross-platform data access"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Analyze and process Notion data with AI"
          },
          {
            href: "/docs/nodes/if-else",
            title: "If Else Node",
            description: "Add conditional logic based on query results"
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
