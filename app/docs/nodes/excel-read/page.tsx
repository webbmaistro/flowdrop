"use client"

import React from 'react';
import { FileSpreadsheet, Shield, Database, Settings } from 'lucide-react';
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

export default function ExcelReadNode() {
  const prerequisites = [
    {
      icon: Shield,
      title: "Microsoft Account Connection",
      description: "Must have a connected Microsoft account with appropriate permissions",
      requirements: [
        "Microsoft account connected via OAuth",
        "Files.Read.All scope permissions",
        "Access to Microsoft OneDrive"
      ]
    },
    {
      icon: Database,
      title: "Excel Workbook Access",
      description: "Understanding of Excel workbook access and range requirements",
      requirements: [
        "The target workbook must be accessible through your Microsoft OneDrive",
        "Workbook must be a valid Excel file (.xlsx, .xls)",
        "Clear understanding of A1 notation for range specification"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "Technical setup and configuration requirements",
      requirements: [
        "Microsoft OAuth service properly configured",
        "Internet connectivity for Microsoft Graph API communication",
        "Proper exception handling for API failures and authentication issues"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={FileSpreadsheet}
        title="Excel Read"
        description="Read values from an Excel workbook range"
        nodeType="Action"
        category="Microsoft Excel Integration"
        iconName="Microsoft Excel"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Excel Read</strong> node allows you to read values from Excel workbooks programmatically. This powerful automation tool integrates with Microsoft Graph API to provide intelligent spreadsheet reading capabilities for your workflows."
        keyFeatures={[
          "<strong>Range Reading:</strong> Read specific cell ranges using A1 notation",
          "<strong>Dynamic Workbook Selection:</strong> Choose from your OneDrive workbooks",
          "<strong>Structured Data Output:</strong> Returns 2D array of cell values",
          "<strong>Seamless Integration:</strong> Works with other Microsoft Office nodes",
          "<strong>Error Handling:</strong> Built-in success/failure tracking"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "workbookId",
              type: "microsoft-one-drive-picker",
              required: true,
              valueType: "string",
              description: "ID of the Excel workbook to read from. Use the picker to select from your OneDrive files."
            },
            {
              name: "range",
              type: "text",
              required: true,
              valueType: "string",
              description: "A1 notation of the range to read (e.g., Sheet1!A1:D10). Defaults to Sheet1!A1:Z10 if not specified."
            }
          ],
          optional: []
        }}
        outputFields={[
          {
            name: "values",
            type: "json",
            required: false,
            valueType: "2D array of cell values",
            description: "2-D array of cell values from the specified range. Each row is an array of cell values."
          },
          {
            name: "success",
            type: "boolean",
            required: false,
            valueType: "Operation success status",
            description: "Returns true if the operation succeeded, false otherwise."
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
                Read a specific range of cells from an Excel workbook
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "workbookId": "01ABC123DEF456",
  "range": "Sheet1!A1:C10"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Reads cells A1 through C10 from Sheet1 of the specified workbook.
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
  "workbookId": "01ABC123DEF456",
  "range": "Data!A:Z"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Reads all data from columns A to Z in the "Data" sheet.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Processing Workflow</CardTitle>
              <CardDescription>
                Complete workflow for automated data processing from Excel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Excel Read → 🔄 For Each Row → 🤖 AI Process → 📝 Write Results → ✅ Send Notification</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read data from Excel, process each row with AI, and write results back to another system.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Range Reading</CardTitle>
              <CardDescription>
                Use template variables for dynamic range specification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "workbookId": "{{workflow.workbookId}}",
  "range": "{{workflow.sheetName}}!A1:{{workflow.endColumn}}10"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Uses template variables to dynamically specify workbook, sheet, and range based on workflow context.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use descriptive range notation (e.g., 'Sheet1!A1:D10' instead of 'A1:D10')",
          "Check the success field before processing the values",
          "Handle empty cells appropriately in your downstream processing",
          "Use specific ranges rather than entire columns when possible for better performance",
          "Store workbook IDs for reuse across multiple operations",
          "Consider the data structure when processing the 2D array output"
        ]}
        donts={[
          "Don't read entire workbooks without specific need",
          "Avoid using ranges that include empty rows/columns unnecessarily",
          "Don't forget to handle authentication errors",
          "Avoid hardcoding workbook IDs when dynamic selection is available",
          "Don't assume all cells contain data - handle null/empty values",
          "Avoid reading the same data multiple times in a workflow"
        ]}
        proTip="Use the workbook picker to easily select from your OneDrive files. Combine with other Microsoft Office nodes (Word, Outlook) for comprehensive document automation workflows."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Authentication Errors",
            symptoms: "Node fails with 'User has not connected their Microsoft account' error",
            solution: "Ensure your Microsoft account is properly connected via OAuth. Check that you have the Files.Read.All scope permission. Reconnect your Microsoft account if necessary."
          },
          {
            title: "Workbook Not Found",
            symptoms: "Node fails with workbook not found error",
            solution: "Verify the workbook ID is correct and the file exists in your OneDrive. Use the workbook picker to ensure you're selecting a valid file. Check that the file hasn't been moved or deleted."
          },
          {
            title: "Invalid Range Format",
            symptoms: "Node fails with range format errors",
            solution: "Ensure your range follows A1 notation format (e.g., 'Sheet1!A1:D10'). Include the sheet name if reading from a specific sheet. Avoid special characters in range notation."
          },
          {
            title: "Empty Results",
            symptoms: "Node succeeds but returns empty values array",
            solution: "Check that the specified range contains data. Verify the sheet name is correct. Consider expanding the range to include more cells. Check if the workbook is protected or has restricted access."
          },
          {
            title: "Permission Denied",
            symptoms: "Node fails with insufficient permissions",
            solution: "Ensure you have read access to the workbook. Check that the file isn't shared with restricted permissions. Verify your Microsoft account has the necessary OneDrive access."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/word-write-contents",
            title: "Microsoft Word Write Content Node",
            description: "Write the Excel data to a Word document"
          },
          {
            href: "/docs/nodes/outlook-send-email",
            title: "Microsoft Outlook Send Email Node",
            description: "Send Excel data via email"
          },
          {
            href: "/docs/nodes/google-sheets-write",
            title: "Google Sheets Write Node",
            description: "Transfer Excel data to Google Sheets"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Process Excel data with AI"
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
