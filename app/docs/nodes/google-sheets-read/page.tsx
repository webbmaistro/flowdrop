"use client"

import React from 'react';
import { FileSpreadsheet, Database, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, RelatedResourceCard } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function GoogleSheetsReadNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <FileSpreadsheet className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Google Sheets Read</h1>
            <p className="text-neutral-400">Read and analyze data from Google Sheets programmatically</p>
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
          The <strong>Google Sheets Read</strong> node allows you to read, search, and analyze data from Google Sheets 
          programmatically. This powerful automation tool integrates with Google Sheets API to provide intelligent 
          data processing capabilities for your workflows.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>Flexible Data Reading:</strong> Read entire sheets, specific ranges, or filtered data</li>
            <li>• <strong>Advanced Filtering:</strong> Filter data by criteria, formulas, or conditions</li>
            <li>• <strong>Batch Processing:</strong> Handle large datasets efficiently</li>
            <li>• <strong>Real-time Updates:</strong> Always get the latest data from your sheets</li>
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
                <Database className="w-5 h-5 text-primary-main" />
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
                  <span className="text-sm">Google Sheets scope granted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Access to target Google Sheets</span>
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
                  code="https://www.googleapis.com/auth/spreadsheets.readonly"
                  lang="text"
                />
                <CodeBlock
                  code="https://www.googleapis.com/auth/drive.readonly"
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
                        <span className="ml-2 text-neutral-200">"Sheet1!A1:D100"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The range to read (e.g., "Sheet1!A1:D100" or just "Sheet1" for entire sheet).
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
                    <h4 className="font-semibold mb-2">majorDimension</h4>
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
                        <span className="ml-2 text-neutral-200">"ROWS", "COLUMNS"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Whether to return data as rows or columns. Defaults to "ROWS".
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">valueRenderOption</h4>
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
                        <span className="ml-2 text-neutral-200">"FORMATTED_VALUE", "UNFORMATTED_VALUE", "FORMULA"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      How to render values. "FORMATTED_VALUE" includes formatting, "UNFORMATTED_VALUE" is raw data.
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
                  <h4 className="font-semibold mb-2">data</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">array</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">The actual data from the spreadsheet</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">range</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">string</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">The range that was read</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">majorDimension</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">string</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">Whether data is returned as rows or columns</span>
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
              <CardTitle>Basic Data Reading</CardTitle>
              <CardDescription>
                Read a simple range of data from a spreadsheet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  "range": "Sheet1!A1:D100",
  "majorDimension": "ROWS",
  "valueRenderOption": "FORMATTED_VALUE"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Reads the first 100 rows and 4 columns from Sheet1, returning formatted values as rows.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Entire Sheet Reading</CardTitle>
              <CardDescription>
                Read all data from a specific sheet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "{{workflowData.sheetId}}",
  "range": "DataSheet",
  "majorDimension": "ROWS"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Reads the entire "DataSheet" tab, using a dynamic spreadsheet ID from workflow data.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Column-based Data</CardTitle>
              <CardDescription>
                Read data organized by columns instead of rows
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "spreadsheetId": "{{config.sheetId}}",
  "range": "Config!A1:Z1",
  "majorDimension": "COLUMNS",
  "valueRenderOption": "UNFORMATTED_VALUE"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Reads the first row as columns, useful for configuration data or headers.
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
              <CardTitle>Data Analysis Pipeline</CardTitle>
              <CardDescription>
                Complete workflow for analyzing spreadsheet data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Google Sheets Read → 🤖 AI Analysis → 📈 Data Processing → 📱 Report Generation</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Step-by-Step Configuration</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>Google Sheets Read:</strong> Read data from your spreadsheet</li>
                    <li><strong>AI Analysis:</strong> Analyze the data for insights and patterns</li>
                    <li><strong>Data Processing:</strong> Transform and aggregate the data</li>
                    <li><strong>Report Generation:</strong> Create automated reports or dashboards</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Customer Data Processing</CardTitle>
              <CardDescription>
                Process customer information from spreadsheets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically read customer data from Google Sheets, validate information, 
                    and process it for CRM systems or marketing campaigns.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Read customer data from designated sheets</li>
                    <li>Validate email addresses and phone numbers</li>
                    <li>Filter out duplicate or invalid entries</li>
                    <li>Process data for different business systems</li>
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
                <li>• Use specific ranges instead of entire sheets when possible</li>
                <li>• Implement error handling for missing or invalid data</li>
                <li>• Consider data size and API rate limits</li>
                <li>• Use meaningful sheet and range names</li>
                <li>• Always check the success output field</li>
                <li>• Cache data when appropriate to reduce API calls</li>
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
                <li>• Don't read entire large sheets unnecessarily</li>
                <li>• Avoid hardcoding spreadsheet IDs</li>
                <li>• Don't ignore API rate limits</li>
                <li>• Avoid reading data too frequently</li>
                <li>• Don't assume data structure remains constant</li>
                <li>• Avoid processing sensitive data without encryption</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-blue-500">
            <strong>Pro Tip:</strong> Use named ranges in your Google Sheets to make your workflows more maintainable. 
            Instead of "Sheet1!A1:D100", use a named range like "CustomerData" that you can adjust without changing your workflow.
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
                    <strong>Solution:</strong> Ensure Google integration is properly connected and has access to the target spreadsheet
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Invalid Range</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with range not found errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify the sheet name and range format (e.g., "Sheet1!A1:D100")
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Large Data Sets</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node times out or fails with large ranges
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Break large reads into smaller chunks or use more specific ranges
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
          <Link href="/docs/nodes/google-sheets-write">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Google Sheets Write Node</div>
                <div className="text-sm text-neutral-400">Write data back to Google Sheets</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/llm-prompt">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">LLM Prompt Node</div>
                <div className="text-sm text-neutral-400">Analyze spreadsheet data with AI</div>
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
