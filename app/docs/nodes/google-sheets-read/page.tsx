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

export default function GoogleSheetsReadNode() {
  const prerequisites = [
    {
      icon: Database,
      title: "Google Integration",
      description: "Must be connected to access Google Sheets API",
      requirements: [
        "Google account connected",
        "Google Sheets scope granted",
        "Access to target Google Sheets"
      ]
    },
    {
      icon: Settings,
      title: "Required Scopes",
      description: "The following OAuth scopes are required for this node to function properly",
      requirements: [
        "https://www.googleapis.com/auth/spreadsheets.readonly",
        "https://www.googleapis.com/auth/drive.readonly"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={FileSpreadsheet}
        title="Google Sheets Read"
        description="Read and analyze data from Google Sheets programmatically"
        nodeType="Action"
        category="Google Sheets Integration"
        iconName="Google Sheets"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Sheets Read</strong> node allows you to read, search, and analyze data from Google Sheets programmatically. This powerful automation tool integrates with Google Sheets API to provide intelligent data processing capabilities for your workflows."
        keyFeatures={[
          "<strong>Flexible Data Reading:</strong> Read entire sheets, specific ranges, or filtered data",
          "<strong>Advanced Filtering:</strong> Filter data by criteria, formulas, or conditions",
          "<strong>Batch Processing:</strong> Handle large datasets efficiently",
          "<strong>Real-time Updates:</strong> Always get the latest data from your sheets",
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
              description: "The A1 notation range to read (e.g., 'Sheet1!A1:D10', 'Data!A:Z')."
            }
          ],
          optional: [
            {
              name: "majorDimension",
              type: "dropdown",
              required: false,
              defaultValue: "ROWS",
              valueType: "ROWS or COLUMNS",
              description: "Determines how the data should be organized. ROWS (default) returns data row by row, COLUMNS returns data column by column."
            }
          ]
        }}
        outputFields={[
          {
            name: "values",
            type: "array",
            required: false,
            valueType: "2D array of cell values",
            description: "The data read from the spreadsheet as a 2D array. Each row is an array of cell values. Empty cells are represented as empty strings."
          },
          {
            name: "range",
            type: "string",
            required: false,
            valueType: "The range that was read",
            description: "The actual range that was read from the spreadsheet, which may differ slightly from the input range."
          },
          {
            name: "success",
            type: "boolean",
            required: false,
            valueType: "Operation success status",
            description: "Returns true if the data was successfully read, false otherwise."
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
              <CardTitle>Read Specific Range</CardTitle>
              <CardDescription>
                Read a specific range of cells from a sheet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "range": "Sheet1!A1:D10",
  "majorDimension": "ROWS"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Reads the first 10 rows and 4 columns (A-D) from Sheet1.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Read Entire Sheet</CardTitle>
              <CardDescription>
                Read all data from a specific sheet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "range": "Data!A:Z"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Reads all rows from columns A through Z in the "Data" sheet.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Processing Workflow</CardTitle>
              <CardDescription>
                Complete workflow for spreadsheet data analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Google Sheets Read → 🔄 For Each Row → 🤖 AI Analysis → 💾 Store Results</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read spreadsheet data, process each row with AI, and store analyzed results back to sheets or database.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use specific ranges to limit data and improve performance",
          "Check the success field before processing data",
          "Use sheet names in ranges for clarity (e.g., 'Sheet1!A:B')",
          "Handle empty cells and missing data gracefully",
          "Combine with For Each node to process rows individually",
          "Use the spreadsheet ID from the URL for accuracy"
        ]}
        donts={[
          "Don't read entire large spreadsheets at once",
          "Avoid hardcoding spreadsheet IDs (use template variables)",
          "Don't forget to handle the Error field",
          "Avoid reading sensitive data without proper security",
          "Don't assume all rows have the same number of columns",
          "Avoid making too many read requests in quick succession"
        ]}
        proTip="Use A1 notation ranges effectively: 'Sheet1!A:A' for entire column, 'Sheet1!1:1' for entire row, 'Sheet1!A1:Z' for all data starting from A1. Combine with For Each node to process data row by row."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Permission Errors",
            symptoms: "Node fails with insufficient permissions",
            solution: "Ensure your Google account connection has the required scopes and that you have read access to the spreadsheet. Check that the spreadsheet is shared with your account."
          },
          {
            title: "Invalid Range",
            symptoms: "Node fails with 'Invalid range' error",
            solution: "Verify your range uses proper A1 notation (e.g., 'Sheet1!A1:D10'). Check that the sheet name is correct and matches the actual sheet name in your spreadsheet."
          },
          {
            title: "Empty Data Returned",
            symptoms: "Node succeeds but returns empty values array",
            solution: "Check that the specified range contains data. Verify the sheet name and range are correct. Empty ranges will return success but with no values."
          },
          {
            title: "Spreadsheet Not Found",
            symptoms: "Node fails with 'Spreadsheet not found' error",
            solution: "Verify the spreadsheet ID is correct. Check that the spreadsheet hasn't been deleted and that you have access to it. Make sure it's not in the trash."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/google-sheets-write",
            title: "Google Sheets Write Node",
            description: "Write data back to Google Sheets"
          },
          {
            href: "/docs/nodes/google-sheets-update-row",
            title: "Google Sheets Update Row Node",
            description: "Update specific rows in sheets"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Process spreadsheet rows individually"
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
