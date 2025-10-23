"use client"

import React from 'react';
import { FileSpreadsheet, Database, Settings } from 'lucide-react';
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

export default function GoogleSheetsCreateSpreadsheetNode() {
  const prerequisites = [
    {
      icon: Database,
      title: "Google Integration",
      description: "Must be connected to access Google Sheets API",
      requirements: [
        "Google account connected",
        "Google Drive file scope granted",
        "Permission to create new spreadsheets"
      ]
    },
    {
      icon: Settings,
      title: "Required Scopes",
      description: "The following OAuth scopes are required for this node to function properly",
      requirements: [
        "https://www.googleapis.com/auth/drive.file"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        logo="/logos/google-sheets.svg"
        title="Google Sheets Create Spreadsheet"
        description="Create new Google Spreadsheets programmatically"
        nodeType="Action"
        category="Google Sheets Integration"
        iconName="Google Sheets"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Sheets Create Spreadsheet</strong> node allows you to create new Google Spreadsheets programmatically. This powerful automation tool integrates with Google Sheets API to provide intelligent spreadsheet creation capabilities for your workflows."
        keyFeatures={[
          "<strong>Automatic Creation:</strong> Create new spreadsheets with custom titles",
          "<strong>Default Configuration:</strong> Uses en_US locale and America/New_York timezone",
          "<strong>Instant Access:</strong> Get spreadsheet ID and URL immediately",
          "<strong>Seamless Integration:</strong> Works with other Google Sheets nodes",
          "<strong>Error Handling:</strong> Built-in success/failure tracking"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "title",
              type: "text",
              required: true,
              valueType: "string",
              description: "Title for the new spreadsheet. This will be the name displayed in Google Drive and the spreadsheet header."
            }
          ],
          optional: []
        }}
        outputFields={[
          {
            name: "result",
            type: "object",
            required: false,
            valueType: "Full API response",
            description: "Complete result object from the Google Sheets API containing all spreadsheet metadata."
          },
          {
            name: "success",
            type: "boolean",
            required: false,
            valueType: "Operation success status",
            description: "Returns true if the spreadsheet was successfully created, false otherwise."
          },
          {
            name: "spreadsheetId",
            type: "string",
            required: false,
            valueType: "Unique spreadsheet identifier",
            description: "The unique ID of the newly created spreadsheet. Use this ID with other Google Sheets nodes."
          },
          {
            name: "spreadsheetUrl",
            type: "string",
            required: false,
            valueType: "Direct access URL",
            description: "Direct URL to access the newly created spreadsheet in Google Sheets."
          },
          {
            name: "spreadsheetTitle",
            type: "string",
            required: false,
            valueType: "Spreadsheet title",
            description: "The title of the newly created spreadsheet (may differ from input if Google modifies it)."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Create Simple Spreadsheet</CardTitle>
              <CardDescription>
                Create a new spreadsheet with a basic title
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "title": "My New Spreadsheet"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates a new spreadsheet titled "My New Spreadsheet" with default settings.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Spreadsheet Creation</CardTitle>
              <CardDescription>
                Create spreadsheets with dynamic titles using template variables
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "title": "{{workflow.timestamp}} - {{user.email}} Report"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates a spreadsheet with a timestamp and user email in the title for automated reporting.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Collection Workflow</CardTitle>
              <CardDescription>
                Complete workflow for automated data collection and storage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Create Spreadsheet → 📝 Write Headers → 🔄 For Each Data → 📈 Write Data → ✅ Send Notification</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Create a new spreadsheet, set up headers, collect data from various sources, and populate the sheet automatically.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Template-Based Spreadsheet Creation</CardTitle>
              <CardDescription>
                Create spreadsheets for different purposes with standardized naming
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "title": "{{workflow.name}} - {{date.today}} - {{workflow.id}}"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates spreadsheets with workflow name, current date, and workflow ID for easy organization and tracking.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use descriptive titles that include timestamps or identifiers",
          "Store the spreadsheetId for use with other Google Sheets nodes",
          "Check the success field before proceeding to next steps",
          "Use template variables for dynamic naming",
          "Consider including workflow or user context in titles",
          "Use the spreadsheetUrl to provide direct access links"
        ]}
        donts={[
          "Don't create spreadsheets without a clear purpose",
          "Avoid using special characters that might cause issues",
          "Don't forget to handle the Error field",
          "Avoid creating too many spreadsheets in quick succession",
          "Don't hardcode titles when dynamic naming is better",
          "Avoid creating spreadsheets without proper organization"
        ]}
        proTip="Use the spreadsheetId output with other Google Sheets nodes (Read, Write, Update Row) to immediately start working with your newly created spreadsheet. Combine with template variables for automated naming conventions."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Permission Errors",
            symptoms: "Node fails with insufficient permissions",
            solution: "Ensure your Google account connection has the drive.file scope. Check that you have permission to create files in your Google Drive. Verify the OAuth connection is properly configured."
          },
          {
            title: "Title Already Exists",
            symptoms: "Node succeeds but creates duplicate spreadsheets",
            solution: "Google Sheets allows duplicate titles. Use unique identifiers (timestamps, IDs) in titles to avoid confusion. Consider checking existing spreadsheets before creating new ones."
          },
          {
            title: "Empty Title Error",
            symptoms: "Node fails with 'title is required' error",
            solution: "Ensure the title field is not empty. Use a default value or template variable that always provides a non-empty string."
          },
          {
            title: "API Rate Limits",
            symptoms: "Node fails with rate limit errors",
            solution: "Google Sheets API has rate limits. Avoid creating many spreadsheets in quick succession. Consider adding delays between creation requests or batching operations."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/google-sheets-read",
            title: "Google Sheets Read Node",
            description: "Read data from the newly created spreadsheet"
          },
          {
            href: "/docs/nodes/google-sheets-write",
            title: "Google Sheets Write Node",
            description: "Write data to the newly created spreadsheet"
          },
          {
            href: "/docs/nodes/google-sheets-update-row",
            title: "Google Sheets Update Row Node",
            description: "Update specific rows in the new spreadsheet"
          },
          {
            href: "/docs/nodes/set-value",
            title: "Set Value Node",
            description: "Set constant values for spreadsheet titles"
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
