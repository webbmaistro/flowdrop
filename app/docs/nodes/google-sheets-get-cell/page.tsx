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

export default function GoogleSheetsGetCellNode() {
  const prerequisites = [
    {
      icon: Database,
      title: "Google Integration",
      description: "Must be connected to access Google Sheets API",
      requirements: [
        "Google account connected",
        "Google Drive file scope granted",
        "Read access to target Google Sheets"
      ]
    },
    {
      icon: Settings,
      title: "Required Scopes",
      description: "OAuth scopes needed for reading cell values",
      requirements: [
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets.readonly"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={FileSpreadsheet}
        title="Google Sheets Get Cell"
        description="Retrieve a single cell value from Google Sheets"
        nodeType="Action"
        category="Google Sheets Integration"
        iconName="Google Sheets"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Sheets Get Cell</strong> node allows you to retrieve a single cell value from Google Sheets. This node is perfect for reading specific data points, checking cell values, or accessing individual pieces of information from your spreadsheets."
        keyFeatures={[
          "<strong>Single Cell Access:</strong> Retrieve individual cell values with precision",
          "<strong>Dynamic Selection:</strong> Browse and select spreadsheets from your Google Drive",
          "<strong>Flexible References:</strong> Use A1 notation to target specific cells",
          "<strong>Real-time Data:</strong> Get the most current cell values",
          "<strong>Success Tracking:</strong> Returns the cell value and operation status"
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
              description: "The ID of the Google Sheets spreadsheet you want to read from. You can select from your connected Google Drive files or enter the ID manually."
            },
            {
              name: "Cell Reference",
              type: "text",
              required: true,
              valueType: "string",
              description: "A1 notation of the cell to read (e.g., Sheet1!A1, B2, or Sheet2!C5). This specifies exactly which cell to retrieve the value from."
            }
          ]
        }}
        outputFields={[
          {
            name: "Value",
            type: "string",
            required: false,
            valueType: "The cell value",
            description: "The actual value stored in the specified cell. Can be text, number, or formula result."
          },
          {
            name: "Success",
            type: "boolean",
            required: false,
            valueType: "Operation success status",
            description: "Returns true if the cell was successfully read, false otherwise."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Read Status Cell</CardTitle>
              <CardDescription>
                Check the status of a specific task or item
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "cell": "Sheet1!C5"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Reads the value from cell C5 in Sheet1, which might contain a status like "Completed", "In Progress", or "Pending".
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Cell Reading</CardTitle>
              <CardDescription>
                Read cell values using dynamic references
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "{{config.dataSheetId}}",
  "cell": "{{sheetName}}!{{cellReference}}"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Uses template variables to dynamically construct the cell reference based on workflow context or previous node outputs.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Conditional Workflow Logic</CardTitle>
              <CardDescription>
                Use cell values to drive workflow decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Get Cell → 🤔 If-Else → 📧 Send Email / 📝 Update Sheet</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read a cell value, use it in conditional logic to determine the next action, then either send an email or update the spreadsheet based on the value.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Formula Result Reading</CardTitle>
              <CardDescription>
                Read calculated values from formula cells
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "cell": "Calculations!E10"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Reads the calculated result from a formula cell (e.g., =SUM(A1:A9) or =VLOOKUP(B1,Data!A:B,2,FALSE)). Returns the computed value, not the formula itself.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Validation Workflow</CardTitle>
              <CardDescription>
                Validate data before processing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Validation Flow</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Get Cell → 🔍 Check Value → ✅ Valid / ❌ Invalid → 📧 Notify</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read a cell value, validate it against expected criteria, then proceed with the workflow or send a notification based on the validation result.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use specific cell references for precise data access",
          "Validate cell values before using them in workflows",
          "Check the success field before proceeding",
          "Use dynamic variables for flexible cell references",
          "Handle empty cells gracefully in your workflow logic",
          "Test with sample data before production use",
          "Consider using sheet names in cell references for clarity"
        ]}
        donts={[
          "Don't assume cells contain specific data types",
          "Avoid hardcoding cell references when possible",
          "Don't forget to handle read failures",
          "Avoid accessing cells without proper permissions",
          "Don't assume cells are not empty",
          "Avoid reading very large ranges with this node",
          "Don't mix this with bulk operations unnecessarily"
        ]}
        proTip="When reading cell values for conditional logic, always validate the data type and content. Use the If-Else node to handle different cell value scenarios. For bulk data reading, consider using Google Sheets Read instead of multiple Get Cell operations."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Permission Errors",
            symptoms: "Node fails with insufficient permissions",
            solution: "Ensure your Google account connection has read scope and that you have view access to the spreadsheet. Verify the spreadsheet is shared with you or is in your Google Drive."
          },
          {
            title: "Invalid Cell Reference",
            symptoms: "Node fails with 'Invalid range' error",
            solution: "Check your cell reference uses proper A1 notation (e.g., 'A1', 'Sheet1!B5', or 'Sheet2!C10'). Ensure the sheet name is correct and the cell coordinates are valid."
          },
          {
            title: "Empty Cell Values",
            symptoms: "Node succeeds but returns empty or null values",
            solution: "Empty cells are normal in spreadsheets. Handle empty values in your workflow logic using conditional statements or default values."
          },
          {
            title: "Formula Not Calculating",
            symptoms: "Returns formula text instead of calculated result",
            solution: "This is expected behavior. The node returns the actual cell value, which for formula cells is the calculated result, not the formula itself."
          },
          {
            title: "Sheet Not Found",
            symptoms: "Node fails with 'Sheet not found' error",
            solution: "Verify the sheet name in your cell reference matches exactly (case-sensitive). Check that the sheet exists in the specified spreadsheet."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/google-sheets-read",
            title: "Google Sheets Read Node",
            description: "Read multiple cells or ranges"
          },
          {
            href: "/docs/nodes/google-sheets-write",
            title: "Google Sheets Write Node",
            description: "Write data to sheets"
          },
          {
            href: "/docs/nodes/google-sheets-update-column",
            title: "Google Sheets Update Column Node",
            description: "Update entire columns"
          },
          {
            href: "/docs/nodes/if-else",
            title: "If-Else Node",
            description: "Add conditional logic based on cell values"
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
