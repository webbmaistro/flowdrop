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

export default function GoogleSheetsCreateSheetNode() {
  const prerequisites = [
    {
      icon: Database,
      title: "Google Integration",
      description: "Must be connected to access Google Sheets API",
      requirements: [
        "Google account connected",
        "Google Drive file scope granted",
        "Permission to modify existing spreadsheets"
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
        icon={FileSpreadsheet}
        title="Google Sheets Create Sheet"
        description="Create new sheets within existing Google Spreadsheets"
        nodeType="Action"
        category="Google Sheets Integration"
        iconName="Google Sheets"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Sheets Create Sheet</strong> node allows you to add new sheets to existing Google Spreadsheets programmatically. This powerful automation tool integrates with Google Sheets API to provide intelligent sheet creation capabilities for your workflows."
        keyFeatures={[
          "<strong>Sheet Creation:</strong> Add new sheets to existing spreadsheets",
          "<strong>Custom Positioning:</strong> Specify where to insert the new sheet",
          "<strong>Dynamic Naming:</strong> Use template variables for sheet names",
          "<strong>Seamless Integration:</strong> Works with other Google Sheets nodes",
          "<strong>Error Handling:</strong> Built-in success/failure tracking"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "spreadsheetId",
              type: "google_drive_picker",
              required: true,
              valueType: "string",
              description: "ID of the spreadsheet to add the sheet to. Use the Google Drive picker to select an existing spreadsheet."
            },
            {
              name: "sheetName",
              type: "text",
              required: true,
              valueType: "string",
              description: "Name for the new sheet. This will be displayed as the sheet tab name."
            }
          ],
          optional: [
            {
              name: "sheetIndex",
              type: "text",
              required: false,
              valueType: "string",
              description: "Position where the sheet should be inserted (0-based). Leave empty for first position. Use 0 for the first sheet, 1 for the second, etc."
            }
          ]
        }}
        outputFields={[
          {
            name: "result",
            type: "object",
            required: false,
            valueType: "Full API response",
            description: "Complete result object from the Google Sheets API containing all sheet metadata."
          },
          {
            name: "success",
            type: "boolean",
            required: false,
            valueType: "Operation success status",
            description: "Returns true if the sheet was successfully created, false otherwise."
          },
          {
            name: "sheetId",
            type: "number",
            required: false,
            valueType: "Unique sheet identifier",
            description: "The unique ID of the newly created sheet. Use this ID with other Google Sheets nodes for sheet-specific operations."
          },
          {
            name: "sheetName",
            type: "string",
            required: false,
            valueType: "Sheet name",
            description: "The name of the newly created sheet (may differ from input if Google modifies it)."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Create Simple Sheet</CardTitle>
              <CardDescription>
                Add a new sheet to an existing spreadsheet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "sheetName": "New Data"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates a new sheet named "New Data" in the specified spreadsheet at the first position.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Create Sheet at Specific Position</CardTitle>
              <CardDescription>
                Add a new sheet at a specific position in the spreadsheet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "sheetName": "Analysis",
  "sheetIndex": "2"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates a new sheet named "Analysis" at position 2 (third sheet) in the spreadsheet.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Sheet Creation</CardTitle>
              <CardDescription>
                Create sheets with dynamic names using template variables
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "{{previousNode.spreadsheetId}}",
  "sheetName": "{{date.today}} - {{user.name}} Report"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates a sheet with a timestamp and user name in the title for automated reporting.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Processing Workflow</CardTitle>
              <CardDescription>
                Complete workflow for automated data processing with new sheets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Create Spreadsheet → 📝 Create Sheet → 📈 Write Headers → 🔄 Process Data → ✅ Send Notification</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Create a new spreadsheet, add a dedicated sheet for data processing, set up headers, and populate with processed data.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Multi-Sheet Organization</CardTitle>
              <CardDescription>
                Create multiple sheets for different data categories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Sheet Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Overview (index 0)</div>
                    <div>📈 Raw Data (index 1)</div>
                    <div>📋 Processed Data (index 2)</div>
                    <div>📊 Summary (index 3)</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Create a well-organized spreadsheet with multiple sheets for different purposes, each at specific positions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use descriptive sheet names that indicate their purpose",
          "Store the sheetId for use with other Google Sheets nodes",
          "Check the success field before proceeding to next steps",
          "Use template variables for dynamic sheet naming",
          "Consider the sheetIndex for proper organization",
          "Use meaningful names that help users understand the sheet content"
        ]}
        donts={[
          "Don't create sheets without a clear purpose",
          "Avoid using special characters that might cause issues",
          "Don't forget to handle the Error field",
          "Avoid creating too many sheets in quick succession",
          "Don't hardcode sheet names when dynamic naming is better",
          "Avoid creating sheets without proper organization"
        ]}
        proTip="Use the sheetId output with other Google Sheets nodes (Read, Write, Update Row) to immediately start working with your newly created sheet. Combine with template variables for automated naming conventions and proper sheet organization."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Permission Errors",
            symptoms: "Node fails with insufficient permissions",
            solution: "Ensure your Google account connection has the drive.file scope. Check that you have permission to modify the target spreadsheet. Verify the OAuth connection is properly configured."
          },
          {
            title: "Invalid Spreadsheet ID",
            symptoms: "Node fails with 'spreadsheet not found' error",
            solution: "Verify the spreadsheetId is correct and the spreadsheet exists. Use the Google Drive picker to ensure you're selecting a valid spreadsheet. Check that the spreadsheet hasn't been deleted or moved."
          },
          {
            title: "Sheet Name Already Exists",
            symptoms: "Node fails with 'sheet name already exists' error",
            solution: "Google Sheets allows duplicate sheet names, but it's better to use unique names. Add timestamps or identifiers to make sheet names unique. Consider checking existing sheet names before creating new ones."
          },
          {
            title: "Invalid Sheet Index",
            symptoms: "Node fails with 'invalid sheet index' error",
            solution: "Ensure the sheetIndex is a valid number (0 or greater). If the spreadsheet has 3 sheets, valid indices are 0, 1, 2, and 3. Use 0 for the first position."
          },
          {
            title: "Empty Sheet Name Error",
            symptoms: "Node fails with 'sheet name is required' error",
            solution: "Ensure the sheetName field is not empty. Use a default value or template variable that always provides a non-empty string."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/google-sheets-create-spreadsheet",
            title: "Google Sheets Create Spreadsheet Node",
            description: "Create new spreadsheets before adding sheets"
          },
          {
            href: "/docs/nodes/google-sheets-read",
            title: "Google Sheets Read Node",
            description: "Read data from the newly created sheet"
          },
          {
            href: "/docs/nodes/google-sheets-write",
            title: "Google Sheets Write Node",
            description: "Write data to the newly created sheet"
          },
          {
            href: "/docs/nodes/google-sheets-update-row",
            title: "Google Sheets Update Row Node",
            description: "Update specific rows in the new sheet"
          },
          {
            href: "/docs/nodes/set-value",
            title: "Set Value Node",
            description: "Set constant values for sheet names"
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
