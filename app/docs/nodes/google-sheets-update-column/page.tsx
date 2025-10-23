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

export default function GoogleSheetsUpdateColumnNode() {
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
      description: "OAuth scopes needed for updating columns",
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
        title="Google Sheets Update Column"
        description="Update entire columns in Google Sheets programmatically"
        nodeType="Action"
        category="Google Sheets Integration"
        iconName="Google Sheets"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Sheets Update Column</strong> node allows you to update entire columns in Google Sheets. This node is perfect for modifying column data, updating records vertically, or maintaining data consistency across your spreadsheets."
        keyFeatures={[
          "<strong>Column-Level Updates:</strong> Update entire columns with a single operation",
          "<strong>Dynamic Selection:</strong> Browse and select spreadsheets from your Google Drive",
          "<strong>Flexible Ranges:</strong> Use A1 notation to target specific columns and rows",
          "<strong>Batch Updates:</strong> Update multiple cells in a column efficiently",
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
              description: "A1 notation of the column to update (e.g., Sheet1!A:A or Sheet1!A1:A10). This specifies which column and rows to update."
            },
            {
              name: "Column Data",
              type: "JSON Array",
              required: true,
              valueType: "array",
              description: "Array of values for the column as a JSON array. Each element in the array corresponds to a cell in the column."
            }
          ]
        }}
        outputFields={[
          {
            name: "Result",
            type: "object",
            required: false,
            valueType: "Update result object",
            description: "Contains the result of the update operation, including the updated range, number of cells updated, and success status."
          },
          {
            name: "Updated Range",
            type: "string",
            required: false,
            valueType: "The range that was updated",
            description: "The actual range that was updated in the spreadsheet."
          },
          {
            name: "Success",
            type: "boolean",
            required: false,
            valueType: "Operation success status",
            description: "Returns true if the column was successfully updated, false otherwise."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Update Status Column</CardTitle>
              <CardDescription>
                Update a status column with new values
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "range": "Sheet1!C:C",
  "columnData": ["Active", "Inactive", "Pending", "Completed", "Cancelled"]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Updates the entire C column with status values for all rows.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Column Update</CardTitle>
              <CardDescription>
                Update column based on workflow data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "{{config.dataSheetId}}",
  "range": "Sheet1!{{columnLetter}}:{{columnLetter}}",
  "columnData": [
    "{{user1.name}}",
    "{{user2.name}}",
    "{{user3.name}}",
    "{{user4.name}}"
  ]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Uses template variables to dynamically construct the range and populate column data from workflow context.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Bulk Data Processing Workflow</CardTitle>
              <CardDescription>
                Automated workflow for processing and updating column data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Read Sheets → 🔄 Process Data → 📝 Update Column → 📧 Send Report</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read existing data, process it through AI or business logic, update the column with processed results, and send a summary report.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Formula Column Update</CardTitle>
              <CardDescription>
                Update a column with calculated values
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "range": "Calculations!E:E",
  "columnData": [
    "=A2*B2",
    "=A3*B3", 
    "=A4*B4",
    "=A5*B5"
  ]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Updates column E with formulas that calculate values based on other columns.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use specific ranges to target exact columns",
          "Validate column data before updating",
          "Check the success field before proceeding",
          "Use dynamic variables for flexible workflows",
          "Match array length to the number of rows in range",
          "Test with sample data before production use",
          "Consider using formulas for calculated columns"
        ]}
        donts={[
          "Don't update without verifying write permissions",
          "Avoid hardcoding ranges when possible",
          "Don't forget to handle update failures",
          "Avoid updating critical data without backups",
          "Don't assume column data length matches range",
          "Avoid updating very large ranges frequently",
          "Don't mix data types in the same column update"
        ]}
        proTip="When updating columns dynamically, use column letters from previous nodes (like Google Sheets Read) to target specific columns. Combine with conditional logic to update only columns that meet certain criteria. For calculated values, consider using formulas instead of static values."
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
            solution: "Check your range uses proper A1 notation (e.g., 'Sheet1!A:A' or 'Sheet1!A1:A10'). Ensure the sheet name is correct and the range coordinates are valid."
          },
          {
            title: "Column Data Mismatch",
            symptoms: "Update succeeds but data is incomplete or truncated",
            solution: "Ensure your column data array length matches the number of rows in your range. If range is A1:A10, provide exactly 10 values in the array."
          },
          {
            title: "Update Not Reflecting",
            symptoms: "Node succeeds but changes don't appear in spreadsheet",
            solution: "Refresh your spreadsheet view. Check that you're viewing the correct sheet and range. Verify the spreadsheet ID is correct."
          },
          {
            title: "Formula Not Calculating",
            symptoms: "Formulas are inserted as text instead of being calculated",
            solution: "Ensure formulas start with '=' and use proper Google Sheets formula syntax. Check that the formulas reference valid cells in your spreadsheet."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/google-sheets-read",
            title: "Google Sheets Read Node",
            description: "Read data to find columns to update"
          },
          {
            href: "/docs/nodes/google-sheets-write",
            title: "Google Sheets Write Node",
            description: "Write new data to sheets"
          },
          {
            href: "/docs/nodes/google-sheets-update-row",
            title: "Google Sheets Update Row Node",
            description: "Update entire rows instead of columns"
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
