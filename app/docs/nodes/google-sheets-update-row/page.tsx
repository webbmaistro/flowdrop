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

export default function GoogleSheetsUpdateRowNode() {
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
      description: "OAuth scopes needed for updating rows",
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
        title="Google Sheets Update Row"
        description="Update entire rows in Google Sheets programmatically"
        nodeType="Action"
        category="Google Sheets Integration"
        iconName="Google Sheets"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Sheets Update Row</strong> node allows you to update entire rows in Google Sheets. This node is perfect for modifying existing data, updating records, or maintaining data consistency across your spreadsheets."
        keyFeatures={[
          "<strong>Row-Level Updates:</strong> Update entire rows with a single operation",
          "<strong>Dynamic Selection:</strong> Browse and select spreadsheets from your Google Drive",
          "<strong>Flexible Ranges:</strong> Use A1 notation to target specific rows and columns",
          "<strong>Batch Updates:</strong> Update multiple cells in a row efficiently",
          "<strong>Success Tracking:</strong> Returns detailed update statistics and confirmation"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Spreadsheet ID",
              type: "Google Drive Picker",
              required: true,
              valueType: "string",
              description: "The ID of the Google Sheets spreadsheet you want to update. You can select from your connected Google Drive files or enter the ID manually."
            },
            {
              name: "Range",
              type: "text",
              required: true,
              valueType: "string",
              example: `"Sheet1!A1:D1" or "Sheet1!1:1"`,
              description: "A1 notation of the row to update (e.g., Sheet1!A1:D1 or Sheet1!1:1). This specifies which row and columns to update."
            },
            {
              name: "Row Data",
              type: "JSON Array",
              required: true,
              valueType: "array",
              example: `["John", "Doe", "john@example.com", 30]`,
              description: "Array of values for the row as a JSON array. Each element in the array corresponds to a cell in the row."
            }
          ]
        }}
        outputFields={[
          {
            name: "Result",
            type: "object",
            valueType: "Update result object",
            description: "Contains the result of the update operation, including the updated range, number of cells updated, and success status."
          },
          {
            name: "Updated Range",
            type: "string",
            valueType: "The range that was updated",
            description: "The actual range that was updated in the spreadsheet."
          },
          {
            name: "Updated Cells",
            type: "number",
            valueType: "Number of cells updated",
            description: "The total number of cells that were updated."
          },
          {
            name: "Success",
            type: "boolean",
            valueType: "Operation success status",
            description: "Returns true if the row was successfully updated, false otherwise."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Update User Record</CardTitle>
              <CardDescription>
                Update a specific row with user information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "range": "Users!A2:D2",
  "rowData": ["John Doe", "john@example.com", "Active", "2024-01-15"]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Updates row 2 with user information across columns A through D.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Row Update</CardTitle>
              <CardDescription>
                Update row based on workflow data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "{{config.dataSheetId}}",
  "range": "Sheet1!A{{rowNumber}}:E{{rowNumber}}",
  "rowData": [
    "{{user.name}}",
    "{{user.email}}",
    "{{status}}",
    "{{timestamp}}",
    "{{notes}}"
  ]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Uses template variables to dynamically construct the range and populate row data from workflow context.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Status Update Workflow</CardTitle>
              <CardDescription>
                Automated workflow for updating record statuses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Read Sheets → ✅ Validate Data → 🔄 Update Row → 📧 Send Notification</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read existing data, validate conditions, update the row with new status, and notify stakeholders.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use specific ranges to target exact rows",
          "Validate row data before updating",
          "Check the success field before proceeding",
          "Use dynamic variables for flexible workflows",
          "Match array length to the number of columns in range",
          "Test with sample data before production use"
        ]}
        donts={[
          "Don't update without verifying write permissions",
          "Avoid hardcoding ranges when possible",
          "Don't forget to handle update failures",
          "Avoid updating critical data without backups",
          "Don't assume row data length matches range",
          "Avoid updating very large ranges frequently"
        ]}
        proTip="When updating rows dynamically, use row numbers from previous nodes (like Google Sheets Read) to target specific records. Combine with conditional logic to update only rows that meet certain criteria."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Permission Errors",
            symptoms: "Node fails with insufficient permissions",
            solution: "Ensure your Google account connection has write scope and that you have edit access to the spreadsheet. Verify the spreadsheet is shared with edit permissions."
          },
          {
            title: "Invalid Range Format",
            symptoms: "Node fails with 'Invalid range' error",
            solution: "Check your range uses proper A1 notation (e.g., 'Sheet1!A2:D2'). Ensure the sheet name is correct and the range coordinates are valid."
          },
          {
            title: "Row Data Mismatch",
            symptoms: "Update succeeds but data is incomplete or truncated",
            solution: "Ensure your row data array length matches the number of columns in your range. If range is A1:D1, provide exactly 4 values in the array."
          },
          {
            title: "Update Not Reflecting",
            symptoms: "Node succeeds but changes don't appear in spreadsheet",
            solution: "Refresh your spreadsheet view. Check that you're viewing the correct sheet and range. Verify the spreadsheet ID is correct."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/google-sheets-read",
            title: "Google Sheets Read Node",
            description: "Read data to find rows to update"
          },
          {
            href: "/docs/nodes/google-sheets-write",
            title: "Google Sheets Write Node",
            description: "Write new data to sheets"
          },
          {
            href: "/docs/nodes/if-else",
            title: "If-Else Node",
            description: "Add conditional update logic"
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
