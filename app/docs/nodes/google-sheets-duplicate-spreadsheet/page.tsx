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

export default function GoogleSheetsDuplicateSpreadsheetNode() {
  const prerequisites = [
    {
      icon: Database,
      title: "Google Integration",
      description: "Must be connected to access Google Sheets and Drive APIs",
      requirements: [
        "Google account connected",
        "Google Sheets and Drive scopes granted",
        "Access to source and target Google Drive folders"
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
        title="Google Sheets Duplicate Spreadsheet"
        description="Create a complete copy of a Google Spreadsheet with all sheets and data"
        nodeType="Action"
        category="Google Sheets Integration"
        iconName="Google Sheets"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Sheets Duplicate Spreadsheet</strong> node allows you to create a complete copy of an existing Google Spreadsheet, including all sheets, data, formatting, and formulas. This powerful automation tool integrates with Google Sheets and Drive APIs to provide intelligent spreadsheet management capabilities for your workflows."
        keyFeatures={[
          "<strong>Complete Duplication:</strong> Copies all sheets, data, formatting, and formulas",
          "<strong>Custom Naming:</strong> Set a custom title for the duplicated spreadsheet",
          "<strong>Drive Integration:</strong> Automatically saves to your Google Drive",
          "<strong>URL Generation:</strong> Provides direct access URL to the new spreadsheet",
          "<strong>Error Handling:</strong> Built-in success/failure tracking with detailed results"
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
              description: "The unique identifier of the Google Spreadsheet to duplicate (found in the URL or selected via picker)."
            },
            {
              name: "newTitle",
              type: "text",
              required: true,
              valueType: "string",
              description: "The title/name for the newly created duplicated spreadsheet."
            }
          ],
          optional: []
        }}
        outputFields={[
          {
            name: "result",
            type: "json",
            required: false,
            valueType: "Complete API response",
            description: "The full result object from the Google Drive API containing all duplication details."
          },
          {
            name: "success",
            type: "boolean",
            required: false,
            valueType: "Operation success status",
            description: "Returns true if the spreadsheet was successfully duplicated, false otherwise."
          },
          {
            name: "newSpreadsheetId",
            type: "string",
            required: false,
            valueType: "New spreadsheet ID",
            description: "The unique identifier of the newly created duplicated spreadsheet."
          },
          {
            name: "newSpreadsheetUrl",
            type: "string",
            required: false,
            valueType: "Direct access URL",
            description: "The direct URL to access the newly created duplicated spreadsheet."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Basic Spreadsheet Duplication</CardTitle>
              <CardDescription>
                Create a copy of an existing spreadsheet with a new name
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "newTitle": "Q4 Sales Report - Copy"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates a complete copy of the source spreadsheet with the title "Q4 Sales Report - Copy".
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Template-Based Workflow</CardTitle>
              <CardDescription>
                Use a template spreadsheet to create new instances for each user
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "{{workflowSettings.templateSpreadsheetId}}",
  "newTitle": "{{user.name}} - Monthly Report - {{workflow.timestamp}}"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Uses template variables to create personalized spreadsheet copies for each user with timestamps.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Backup Creation Workflow</CardTitle>
              <CardDescription>
                Automatically create backups of important spreadsheets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📅 Schedule Trigger → 📊 Duplicate Spreadsheet → 📧 Email Notification → ✅ Log Result</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Automatically create daily/weekly backups of critical spreadsheets and notify stakeholders.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Multi-User Template Distribution</CardTitle>
              <CardDescription>
                Distribute template spreadsheets to multiple team members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>👥 User List → 🔄 For Each User → 📊 Duplicate Spreadsheet → 📧 Send Access Link</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Create personalized copies of a template spreadsheet for each team member and send them access links.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use descriptive titles that include timestamps or user identifiers",
          "Check the success field before proceeding with dependent operations",
          "Use the newSpreadsheetUrl for immediate access to the duplicated spreadsheet",
          "Store the newSpreadsheetId for future reference and operations",
          "Use template variables for dynamic naming based on workflow context",
          "Consider the source spreadsheet size when planning duplication workflows"
        ]}
        donts={[
          "Don't duplicate very large spreadsheets without considering performance",
          "Avoid hardcoding spreadsheet IDs (use template variables or picker)",
          "Don't forget to handle the Error field in case of failures",
          "Avoid creating duplicates with identical names (add timestamps or identifiers)",
          "Don't duplicate spreadsheets you don't have access to",
          "Avoid making too many duplication requests in quick succession"
        ]}
        proTip="Use meaningful titles that include context like user names, dates, or project identifiers. The newSpreadsheetUrl output provides immediate access to the duplicated spreadsheet, making it perfect for sharing with team members or embedding in notifications."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Permission Errors",
            symptoms: "Node fails with insufficient permissions",
            solution: "Ensure your Google account connection has the required scopes (spreadsheets and drive.file). Check that you have access to the source spreadsheet and that your account has permission to create files in Google Drive."
          },
          {
            title: "Spreadsheet Not Found",
            symptoms: "Node fails with 'Spreadsheet not found' error",
            solution: "Verify the spreadsheet ID is correct and that the spreadsheet hasn't been deleted or moved to trash. Ensure you have access to the source spreadsheet."
          },
          {
            title: "Duplicate Title Conflicts",
            symptoms: "Node succeeds but with unexpected naming",
            solution: "Google Drive automatically handles duplicate names by appending numbers. Use unique titles with timestamps or identifiers to avoid confusion."
          },
          {
            title: "Large Spreadsheet Performance",
            symptoms: "Node takes a long time or times out",
            solution: "Large spreadsheets with many sheets or complex formulas may take longer to duplicate. Consider the size of your source spreadsheet and plan accordingly for workflow execution time."
          },
          {
            title: "Empty Output Fields",
            symptoms: "Node succeeds but output fields are empty",
            solution: "Check that the Google Drive API response is properly formatted. Verify your Google integration is working correctly and that the duplication operation actually completed successfully."
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
            description: "Write data to Google Sheets"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Process multiple items in workflows"
          },
          {
            href: "/docs/nodes/schedule",
            title: "Schedule Node",
            description: "Create automated backup workflows"
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
