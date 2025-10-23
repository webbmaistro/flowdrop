"use client"

import React from 'react';
import { FileSpreadsheet, Shield, Settings } from 'lucide-react';
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
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";

export default function ExcelWriteNode() {
  const prerequisites = [
    {
      icon: Shield,
      title: "Microsoft Account Connection",
      description: "Must have a connected Microsoft account with appropriate permissions",
      requirements: [
        "Microsoft account connected via OAuth",
        "Files.ReadWrite.All scope permissions",
        "Access to Microsoft OneDrive"
      ]
    },
    {
      icon: FileSpreadsheet,
      title: "Excel Workbook Requirements",
      description: "Understanding of Excel workbook access and range notation",
      requirements: [
        "The target workbook must be accessible through your Microsoft OneDrive",
        "Workbook must be a valid Excel file (.xlsx)",
        "Understanding of A1 notation for cell ranges (e.g., 'Sheet1!A1:D10')",
        "Clear understanding of what data should be written to which cells"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "Technical setup and configuration requirements",
      requirements: [
        "Microsoft OAuth service properly configured",
        "Internet connectivity for Microsoft Graph API communication",
        "Proper exception handling for API failures and authentication issues",
        "JSON array format for values input"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={FileSpreadsheet}
        title="Excel Write"
        description="Overwrites cells in an Excel workbook with provided values"
        nodeType="Action"
        category="Microsoft Excel"
        iconName="FileSpreadsheet"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Excel Write</strong> node is an action node that overwrites specified cells in a Microsoft Excel workbook with provided values. This powerful integration enables you to programmatically update Excel spreadsheets with data from your workflows, perfect for automated reporting, data updates, and spreadsheet management."
        keyFeatures={[
          "<strong>Range-based Writing:</strong> Write data to specific cell ranges using A1 notation",
          "<strong>2D Array Support:</strong> Write structured data as 2-dimensional arrays",
          "<strong>Automatic Padding:</strong> Automatically adjusts array dimensions to match the specified range",
          "<strong>Workbook Selection:</strong> Choose from your OneDrive workbooks with an integrated picker",
          "<strong>Microsoft Integration:</strong> Seamless integration with Microsoft OneDrive and Excel Online",
          "<strong>OAuth Security:</strong> Secure authentication through Microsoft OAuth"
        ]}
      />

      <Callout emoji="⚠️" color="border-yellow-500">
        <strong>Warning:</strong> This node will overwrite existing data in the specified range. The original data in those cells will be lost. Consider backing up important data before writing.
      </Callout>

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Workbook ID",
              type: "Microsoft OneDrive Picker",
              required: true,
              valueType: "string",
              description: "ID of the Excel workbook to write to. You can select workbooks from your OneDrive using the integrated file picker."
            },
            {
              name: "Range",
              type: "text",
              required: true,
              valueType: "string",
              description: "A1 notation of cells to overwrite (e.g., 'Sheet1!A1:D10'). Only cells with provided data will be updated."
            },
            {
              name: "Values",
              type: "text",
              required: true,
              valueType: "JSON",
              description: "2-D array of values to write (JSON). Array will be automatically padded with empty cells or trimmed to match the specified range dimensions."
            }
          ]
        }}
        outputFields={[
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Operation success status",
            description: "Returns true if the data was successfully written, false otherwise."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Export to Excel</CardTitle>
              <CardDescription>
                Export workflow data to Excel spreadsheets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Data Source → 🔄 Process Data → 📈 Excel Write → 📧 Share Report</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "workbookId": "{{workbookId}}",
  "range": "Sheet1!A1:D10",
  "values": [
    ["Name", "Email", "Department", "Score"],
    ["John Doe", "john@example.com", "Engineering", 95],
    ["Jane Smith", "jane@example.com", "Marketing", 87],
    ["Bob Johnson", "bob@example.com", "Sales", 92]
  ]
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Export processed data from your workflow directly to Excel for reporting and analysis.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>AI-Generated Reports</CardTitle>
              <CardDescription>
                Generate and populate Excel reports with AI content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🤖 LLM Generate → 📊 Process Data → 📈 Excel Write → 📧 Email Report</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "workbookId": "{{reportTemplateId}}",
  "range": "Summary!A1:F20",
  "values": "{{aiGeneratedReportData}}"
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Use AI to generate structured data and populate Excel reports automatically.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Data Updates</CardTitle>
              <CardDescription>
                Update Excel sheets with real-time data from APIs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🌐 API Call → 🔄 Process Response → 📈 Excel Write → ⏰ Schedule</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "workbookId": "{{dashboardId}}",
  "range": "Data!A1:Z100",
  "values": "{{processedApiData}}"
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Automatically update Excel dashboards with fresh data from external APIs on a schedule.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Form Data Collection</CardTitle>
              <CardDescription>
                Collect form submissions and write to Excel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📝 Webhook → 🔄 Process Form → 📈 Excel Write → ✅ Confirmation</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "workbookId": "{{submissionsId}}",
  "range": "Responses!A1:E1",
  "values": [
    ["{{formData.name}}", "{{formData.email}}", "{{formData.message}}", "{{currentDate}}", "{{formData.source}}"]
  ]
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Automatically log form submissions to Excel for tracking and analysis.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use proper A1 notation for ranges (e.g., 'Sheet1!A1:D10')",
          "Test with small data sets before large-scale operations",
          "Validate JSON array format before writing",
          "Use meaningful range names and sheet references",
          "Check Success field before assuming completion",
          "Consider data types when writing values (strings, numbers, dates)"
        ]}
        donts={[
          "Don't write to ranges without understanding the impact",
          "Avoid very large arrays that may cause timeouts",
          "Don't forget to handle write failures gracefully",
          "Avoid hardcoding workbook IDs when possible",
          "Don't use invalid A1 notation formats",
          "Avoid writing sensitive data without proper security measures"
        ]}
        proTip="Excel Write automatically adjusts your data array to match the specified range dimensions. If your array is smaller than the range, it will be padded with empty strings. If larger, it will be trimmed to fit. This ensures your data always fits perfectly in the target range."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Range Not Found",
            symptoms: "Node fails with range not found error",
            solution: "Verify the range notation is correct (e.g., 'Sheet1!A1:D10'). Check that the sheet name exists and the range is valid. Use the format 'SheetName!StartCell:EndCell'."
          },
          {
            title: "Workbook Not Found",
            symptoms: "Node fails with workbook not found error",
            solution: "Verify the workbook ID is correct and the workbook exists in OneDrive. Check that the user has access and write permissions to the workbook."
          },
          {
            title: "Invalid JSON Format",
            symptoms: "Node fails with JSON parsing error",
            solution: "Ensure the Values field contains valid JSON array format. Use double quotes for strings and proper array syntax: [['row1col1', 'row1col2'], ['row2col1', 'row2col2']]."
          },
          {
            title: "Permission Errors",
            symptoms: "Node fails with insufficient permissions",
            solution: "Ensure the Microsoft account connection has Files.ReadWrite.All scope. Reconnect the Microsoft account if needed and verify the workbook is not read-only."
          },
          {
            title: "Data Not Appearing",
            symptoms: "Success returns true but data doesn't appear in Excel",
            solution: "Check that the range notation is correct and the sheet exists. Verify the workbook is not being edited by another user. Try refreshing the Excel file."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/google-sheets-write",
            title: "Google Sheets Write Node",
            description: "Write data to Google Sheets"
          },
          {
            href: "/docs/nodes/word-write-contents",
            title: "Word Write Content Node",
            description: "Write content to Word documents"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate data with AI for Excel"
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
