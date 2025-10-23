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

export default function GoogleSheetsWriteNode() {
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
        logo="/logos/google-sheets.svg"
        title="Google Sheets Write"
        description="Write and update data in Google Sheets programmatically"
        nodeType="Action"
        category="Google Sheets Integration"
        iconName="Google Sheets"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Sheets Write</strong> node allows you to write, update, and append data to Google Sheets programmatically. This powerful automation tool integrates with Google Sheets API to provide intelligent data management capabilities for your workflows."
        keyFeatures={[
          "<strong>Flexible Data Writing:</strong> Write to specific ranges, append rows, or update cells",
          "<strong>Batch Operations:</strong> Handle multiple updates efficiently",
          "<strong>Data Validation:</strong> Ensure data integrity before writing",
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
              type: "text",
              required: true,
              valueType: "string",
              description: "The unique identifier of the Google Spreadsheet (found in the URL)."
            },
            {
              name: "range",
              type: "text",
              required: true,
              valueType: "string",
              description: "The A1 notation range to write to (e.g., 'Sheet1!A1:D10', 'Data!A1')."
            },
            {
              name: "values",
              type: "array",
              required: true,
              valueType: "2D array",
              description: "The data to write as a 2D array. Each inner array represents a row of data."
            }
          ],
          optional: [
            {
              name: "valueInputOption",
              type: "dropdown",
              required: false,
              defaultValue: "RAW",
              valueType: "RAW or USER_ENTERED",
              description: "How values should be interpreted. RAW: Values are stored as-is. USER_ENTERED: Values are parsed as if typed by user (formulas, dates, etc.)."
            }
          ]
        }}
        outputFields={[
          {
            name: "updatedRange",
            type: "string",
            required: false,
            valueType: "The range that was updated",
            description: "The actual range that was updated in the spreadsheet."
          },
          {
            name: "updatedRows",
            type: "number",
            required: false,
            valueType: "Number of rows updated",
            description: "The total number of rows that were updated."
          },
          {
            name: "updatedColumns",
            type: "number",
            required: false,
            valueType: "Number of columns updated",
            description: "The total number of columns that were updated."
          },
          {
            name: "updatedCells",
            type: "number",
            required: false,
            valueType: "Number of cells updated",
            description: "The total number of cells that were updated."
          },
          {
            name: "success",
            type: "boolean",
            required: false,
            valueType: "Operation success status",
            description: "Returns true if the data was successfully written, false otherwise."
          },
          {
            name: "error",
            type: "string",
            required: false,
            valueType: "Error message if failed",
            description: "Contains the error message if the operation failed, null if successful."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Write Simple Data</CardTitle>
              <CardDescription>
                Write data to a specific range
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "range": "Sheet1!A1:B3",
  "values": [
    ["Name", "Age"],
    ["John", 30],
    ["Jane", 25]
  ],
  "valueInputOption": "RAW"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Writes a simple table with headers and two data rows.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Write Formulas</CardTitle>
              <CardDescription>
                Write data including formulas and dates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "range": "Calculations!A1:C2",
  "values": [
    ["Value 1", "Value 2", "Sum"],
    [10, 20, "=A2+B2"]
  ],
  "valueInputOption": "USER_ENTERED"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Uses USER_ENTERED to allow formulas to be interpreted. The SUM formula will calculate automatically.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Append Workflow Data</CardTitle>
              <CardDescription>
                Log workflow results to a spreadsheet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "{{workflowSettings.loggingSheetId}}",
  "range": "Logs!A:E",
  "values": [
    [
      "{{workflow.timestamp}}",
      "{{workflow.id}}",
      "{{currentNode.status}}",
      "{{currentNode.output}}",
      "{{user.email}}"
    ]
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
              <CardTitle>Data Export Workflow</CardTitle>
              <CardDescription>
                Export processed data to Google Sheets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Data Source → 🔄 Process Data → 📈 Google Sheets Write → ✅ Confirmation</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read data from API, process/transform it, write to Google Sheets for reporting and analysis.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use USER_ENTERED for formulas and dates",
          "Use RAW for literal text values",
          "Check the success field before proceeding",
          "Validate data structure before writing",
          "Use specific ranges for targeted updates",
          "Monitor updatedCells for confirmation"
        ]}
        donts={[
          "Don't write without checking write permissions",
          "Avoid writing very large datasets at once",
          "Don't forget to handle the Error field",
          "Avoid overwriting important data without backups",
          "Don't use RAW when you need formulas interpreted",
          "Avoid hardcoding spreadsheet IDs"
        ]}
        proTip="Use USER_ENTERED when writing formulas (e.g., '=SUM(A1:A10)') or dates (e.g., '2024-01-01') so Google Sheets interprets them correctly. Use RAW when you want exact literal values without any interpretation."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Permission Errors",
            symptoms: "Node fails with insufficient permissions",
            solution: "Ensure your Google account connection has write scope and that you have edit access to the spreadsheet. Check that the spreadsheet is shared with edit permissions."
          },
          {
            title: "Range Too Small",
            symptoms: "Data doesn't fit in specified range or truncated",
            solution: "Ensure your range is large enough for the data array. The number of rows/columns in values should match the range dimensions. Consider using an open-ended range like 'Sheet1!A1'."
          },
          {
            title: "Formulas Not Working",
            symptoms: "Formulas appear as text instead of calculating",
            solution: "Use valueInputOption: 'USER_ENTERED' to have formulas interpreted and calculated. RAW mode will treat formulas as literal text."
          },
          {
            title: "Data Format Issues",
            symptoms: "Dates or numbers appear incorrectly formatted",
            solution: "Use USER_ENTERED mode for proper type interpretation. Check that your data array structure is valid (2D array with consistent row lengths)."
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
            href: "/docs/nodes/google-sheets-update-row",
            title: "Google Sheets Update Row Node",
            description: "Update specific rows in sheets"
          },
          {
            href: "/docs/nodes/http-request",
            title: "HTTP Request Node",
            description: "Fetch data from APIs to write to sheets"
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
