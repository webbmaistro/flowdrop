"use client"

import React from 'react';
import { FileSpreadsheet, Database, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function GoogleSheetsWriteNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <FileSpreadsheet className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Google Sheets Write</h1>
            <p className="text-neutral-400">Write and update data in Google Sheets programmatically</p>
          </div>
        </div>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Node Type</h3>
              <p className="text-neutral-400">Action</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Category</h3>
              <p className="text-neutral-400">Google Sheets Integration</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">Google Sheets</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Google Sheets Write</strong> node allows you to write, update, and append data to Google Sheets 
          programmatically. This powerful automation tool integrates with Google Sheets API to provide intelligent 
          data management capabilities for your workflows.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>Flexible Data Writing:</strong> Write to specific ranges, append rows, or update cells</li>
            <li>• <strong>Batch Operations:</strong> Handle multiple updates efficiently</li>
            <li>• <strong>Data Validation:</strong> Ensure data integrity before writing</li>
            <li>• <strong>Real-time Updates:</strong> Changes appear instantly in your sheets</li>
            <li>• <strong>Error Handling:</strong> Built-in success/failure tracking</li>
          </ul>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
        
        <div className="space-y-4">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-500" />
                Google Integration
              </CardTitle>
              <CardDescription>
                Must be connected to access Google Sheets API
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Google account connected</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Google Sheets write scope granted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Write access to target Google Sheets</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-purple-500" />
                Required Scopes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <CodeBlock
                  code="https://www.googleapis.com/auth/spreadsheets"
                  lang="text"
                />
                <CodeBlock
                  code="https://www.googleapis.com/auth/drive.file"
                  lang="text"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Node Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Node Configuration</h2>
        
        <CollapsibleSection title="Input Fields" defaultOpen={true}>
          <div className="space-y-4">
            <Card className="border-neutral-700">
              <CardHeader>
                <CardTitle>Required Fields</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">spreadsheetId</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">text</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-green-500">Yes</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Example:</span>
                        <span className="ml-2 text-neutral-200">"1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The unique identifier of the Google Spreadsheet (found in the URL).
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">range</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">text</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-green-500">Yes</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Example:</span>
                        <span className="ml-2 text-neutral-200">"Sheet1!A1"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The range to write to (e.g., "Sheet1!A1" for a single cell or "Sheet1!A1:D10" for a range).
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">values</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">array</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-green-500">Yes</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Example:</span>
                        <span className="ml-2 text-neutral-200">[["John", "Doe", "john@example.com"]]</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The data to write. Use 2D array format: [[row1], [row2], ...] for multiple rows.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-neutral-700">
              <CardHeader>
                <CardTitle>Optional Fields</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">valueInputOption</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">dropdown</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-red-500">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Options:</span>
                        <span className="ml-2 text-neutral-200">"RAW", "USER_ENTERED"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      How to interpret the input data. "RAW" writes as-is, "USER_ENTERED" processes formulas and formatting.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">insertDataOption</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">dropdown</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-red-500">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Options:</span>
                        <span className="ml-2 text-neutral-200">"INSERT_ROWS", "OVERWRITE"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Whether to insert new rows or overwrite existing data. Defaults to "OVERWRITE".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Output Fields" defaultOpen={false}>
          <Card className="border-neutral-700">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">updatedRange</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">string</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">The range that was updated</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">updatedRows</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">number</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">Number of rows that were updated</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">updatedColumns</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">number</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">Number of columns that were updated</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">success</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">boolean</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">Whether the operation was successful</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">error</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">string</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">Error message if operation failed</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CollapsibleSection>
      </section>

      {/* Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Basic Data Writing</CardTitle>
              <CardDescription>
                Write a single row of data to a spreadsheet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "range": "Sheet1!A1",
  "values": [["John Doe", "john@example.com", "Active"]],
  "valueInputOption": "USER_ENTERED"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Writes a single row with name, email, and status to the first row of Sheet1.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Appending Multiple Rows</CardTitle>
              <CardDescription>
                Add multiple rows of data to the end of a sheet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "{{workflowData.sheetId}}",
  "range": "DataSheet!A:A",
  "values": [
    ["Alice", "alice@example.com", "Premium"],
    ["Bob", "bob@example.com", "Standard"],
    ["Charlie", "charlie@example.com", "Premium"]
  ],
  "insertDataOption": "INSERT_ROWS"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Appends three new rows to the DataSheet, inserting them as new rows.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Updating Specific Range</CardTitle>
              <CardDescription>
                Update a specific range of cells with new data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "{{config.sheetId}}",
  "range": "Config!B2:D5",
  "values": [
    ["Value1", "Value2", "Value3"],
    ["Value4", "Value5", "Value6"],
    ["Value7", "Value8", "Value9"],
    ["Value10", "Value11", "Value12"]
  ],
  "valueInputOption": "RAW"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Updates a 3x4 range starting at B2 with new values, writing raw data without processing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Workflow Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Workflow Examples</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Collection Pipeline</CardTitle>
              <CardDescription>
                Complete workflow for collecting and storing data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📝 Form Submission → 🔍 Data Validation → 📊 Google Sheets Write → 📱 Confirmation</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Step-by-Step Configuration</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>Form Submission:</strong> Collect data from users or systems</li>
                    <li><strong>Data Validation:</strong> Validate and clean the input data</li>
                    <li><strong>Google Sheets Write:</strong> Store the validated data</li>
                    <li><strong>Confirmation:</strong> Send confirmation to users</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Report Generation</CardTitle>
              <CardDescription>
                Generate and store automated reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically generate reports from various data sources, process them with AI, 
                    and store the results in Google Sheets for team access.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Collect data from multiple sources (APIs, databases, etc.)</li>
                    <li>Process and analyze data with AI or business logic</li>
                    <li>Format results into structured reports</li>
                    <li>Write reports to designated Google Sheets</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Do's
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Validate data before writing to sheets</li>
                <li>• Use meaningful range names and sheet references</li>
                <li>• Implement error handling for write failures</li>
                <li>• Consider data size and API rate limits</li>
                <li>• Always check the success output field</li>
                <li>• Use appropriate value input options for your data</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Don'ts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Don't write to sheets without proper permissions</li>
                <li>• Avoid overwriting important data without backup</li>
                <li>• Don't ignore API rate limits</li>
                <li>• Avoid writing large datasets in single operations</li>
                <li>• Don't assume write operations always succeed</li>
                <li>• Avoid writing sensitive data without encryption</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-blue-500">
            <strong>Pro Tip:</strong> Use the "INSERT_ROWS" option when you want to add new data without overwriting existing information. 
            This is especially useful for maintaining historical data in your sheets.
          </Callout>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
        
        <div className="space-y-4">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Common Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Permission Denied</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with access denied errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Ensure Google integration has write access to the target spreadsheet
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Invalid Range</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with range not found errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify the sheet name and range format (e.g., "Sheet1!A1")
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Data Format Issues</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Data appears incorrectly in sheets
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check the values array format and use appropriate valueInputOption
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/docs/nodes/google-sheets-read">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Google Sheets Read Node</div>
                <div className="text-sm text-neutral-400">Read data from Google Sheets</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/llm-prompt">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">LLM Prompt Node</div>
                <div className="text-sm text-neutral-400">Process data with AI before writing</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/ai-workflows-explained">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">AI Workflows Guide</div>
                <div className="text-sm text-neutral-400">Learn about AI-powered automation</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Node Library</div>
                <div className="text-sm text-neutral-400">Explore all available nodes</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
