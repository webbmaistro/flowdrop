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

export default function GoogleSheetsAppendRowNode() {
  const prerequisites = [
    {
      icon: Database,
      title: "Google Integration",
      description: "Must be connected to access Google Sheets API",
      requirements: [
        "Google account connected",
        "Google Sheets write scope granted",
        "Write access to target Google Sheets"
      ]
    },
    {
      icon: Settings,
      title: "Required Scopes",
      description: "The following OAuth scopes are required for this node to function properly",
      requirements: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive.file"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={FileSpreadsheet}
        title="Google Sheets Append Row"
        description="Append a single row of data to a Google Sheet"
        nodeType="Action"
        category="Google Sheets Integration"
        iconName="Google Sheets"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Sheets Append Row</strong> node allows you to append a single row of data to a Google Sheet. This powerful automation tool integrates with Google Sheets API to provide intelligent data management capabilities for your workflows."
        keyFeatures={[
          "<strong>Single Row Appending:</strong> Add one row of data at a time to your sheets",
          "<strong>Flexible Range Support:</strong> Append to specific sheets or ranges",
          "<strong>Data Validation:</strong> Ensure data integrity before appending",
          "<strong>Real-time Updates:</strong> Changes appear instantly in your sheets",
          "<strong>Error Handling:</strong> Built-in success/failure tracking"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "spreadsheetId",
              type: "Google Drive Picker",
              required: true,
              valueType: "string",
              description: "ID of the spreadsheet to append to. Can be selected using the Google Drive picker or manually entered."
            },
            {
              name: "range",
              type: "text",
              required: true,
              valueType: "string",
              description: "Sheet name or A1 notation (e.g., 'Sheet1' or 'Sheet1!A:D'). For append operations, simple sheet names like 'Sheet1' are recommended."
            },
            {
              name: "rowData",
              type: "array",
              required: true,
              valueType: "JSON array",
              description: "Array of values for the new row (JSON array format). Each element can be a string, number, or formula."
            }
          ]
        }}
        outputFields={[
          {
            name: "result",
            type: "object",
            required: false,
            valueType: "JSON object",
            description: "The complete result of the append operation from Google Sheets API."
          },
          {
            name: "success",
            type: "boolean",
            required: false,
            valueType: "boolean",
            description: "Returns true if the row was successfully appended, false otherwise."
          },
          {
            name: "appendedRange",
            type: "string",
            required: false,
            valueType: "string",
            description: "The range where the row was appended (e.g., 'Sheet1!A2:D2')."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Append Simple Data Row</CardTitle>
              <CardDescription>
                Append a single row of data to a sheet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "range": "Sheet1",
  "rowData": ["John Doe", "john@example.com", "Engineer", "2024-01-15"]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Appends a single row with employee information to the end of Sheet1.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Append with Formulas</CardTitle>
              <CardDescription>
                Append a row containing formulas and calculated values
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "range": "Calculations!A:D",
  "rowData": ["Product A", 100, 15, "=B2*C2"]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Appends a row with product data including a formula to calculate total cost.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Log Workflow Results</CardTitle>
              <CardDescription>
                Append workflow execution data to a logging sheet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "{{workflowSettings.loggingSheetId}}",
  "range": "Logs!A:E",
  "rowData": [
    "{{workflow.timestamp}}",
    "{{workflow.id}}",
    "{{currentNode.status}}",
    "{{currentNode.output}}",
    "{{user.email}}"
  ]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Appends workflow execution data to a logging sheet using template variables.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Collection Workflow</CardTitle>
              <CardDescription>
                Collect form data and append to Google Sheets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📝 Form Submission → 🔄 Process Data → 📊 Google Sheets Append Row → ✅ Confirmation</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Collect form submissions, process the data, and append each submission as a new row in Google Sheets for data collection and analysis.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use simple sheet names (e.g., 'Sheet1') for the range parameter",
          "Ensure rowData is a valid JSON array format",
          "Check the success field before proceeding",
          "Validate data structure before appending",
          "Use specific sheet names for targeted appending",
          "Monitor appendedRange for confirmation"
        ]}
        donts={[
          "Don't append without checking write permissions",
          "Avoid appending very large data arrays",
          "Don't forget to handle the Error field",
          "Avoid appending to protected ranges",
          "Don't use complex A1 notation for ranges",
          "Avoid hardcoding spreadsheet IDs"
        ]}
        proTip="Use simple sheet names like 'Sheet1' for the range parameter. The node will automatically append to the end of the sheet. If you provide a range like 'Sheet1!A:D', the node will convert it to just 'Sheet1' for the append operation."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Permission Errors",
            symptoms: "Node fails with insufficient permissions",
            solution: "Ensure your Google account connection has write scope and that you have edit access to the spreadsheet. Check that the spreadsheet is shared with edit permissions."
          },
          {
            title: "Invalid Range Format",
            symptoms: "Node fails with range format errors",
            solution: "Use simple sheet names like 'Sheet1' for best results. If you use A1 notation like 'Sheet1!A:D', the node will automatically convert it to just the sheet name 'Sheet1' for the append operation."
          },
          {
            title: "Data Format Issues",
            symptoms: "Row data doesn't append correctly or appears malformed",
            solution: "Ensure rowData is a valid JSON array format. Each element should be a string, number, or formula. Check that your data structure matches the expected column layout."
          },
          {
            title: "Empty or Missing Data",
            symptoms: "Row appears empty or missing data",
            solution: "Verify that rowData contains the expected number of values and that none are null or undefined. Use template variables carefully to ensure they resolve to actual values."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/google-sheets-read",
            title: "Google Sheets Read Node",
            description: "Read data from Google Sheets"
          },
          {
            href: "/docs/nodes/google-sheets-write",
            title: "Google Sheets Write Node",
            description: "Write data to specific ranges in sheets"
          },
          {
            href: "/docs/nodes/google-sheets-update-row",
            title: "Google Sheets Update Row Node",
            description: "Update existing rows in sheets"
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
