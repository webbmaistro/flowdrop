"use client"

import React from 'react';
import { FileText, Database, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink, Lock, Key } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function GoogleDocsReadNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <FileText className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Google Docs Read</h1>
            <p className="text-neutral-400">Reads content from a Google Doc using OAuth authentication</p>
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
              <p className="text-neutral-400">Google Integration</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">FileText</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Google Docs Read</strong> node is an action node that fetches document content from Google Docs 
          using the user's OAuth token. This powerful integration allows you to read and process Google Docs content 
          directly in your workflows, enabling document analysis, content extraction, and automated document processing.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>Google Docs Integration:</strong> Seamlessly reads content from Google Docs</li>
            <li>• <strong>OAuth Authentication:</strong> Secure access using user's Google account</li>
            <li>• <strong>Dynamic Document Selection:</strong> Browse and select from available documents</li>
            <li>• <strong>Content Extraction:</strong> Retrieves full document content and metadata</li>
            <li>• <strong>Success Tracking:</strong> Returns operation status and document information</li>
            <li>• <strong>Error Handling:</strong> Graceful handling of authentication and access issues</li>
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
                <Key className="w-5 h-5 text-blue-500" />
                Google Integration
              </CardTitle>
              <CardDescription>
                Must have Google integration properly configured
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Google integration enabled and configured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">User has authorized Google account access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Valid OAuth access token for Google</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-purple-500" />
                Required OAuth Scopes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>Google Docs Read-Only:</strong> Access to read document content
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Google Drive Metadata Read-Only:</strong> Access to list and browse documents
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>User Consent:</strong> User must grant permission for these scopes
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-green-500" />
                Technical Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>Google Docs Service:</strong> Access to Google Docs API for document operations
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>OAuth Service:</strong> Access to OAuth service for token management
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Workflow Service:</strong> Access to workflow service for user identification
                </div>
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
                    <h4 className="font-semibold mb-2">Document ID</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">dynamic_select</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-green-500">Yes</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Value Type:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The ID of the Google Doc to read from. This field provides dynamic selection options, 
                      allowing users to browse and select from their available Google Docs. The ID uniquely 
                      identifies the specific document in Google's system.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Output Fields" defaultOpen={false}>
          <div className="space-y-4">
            <Card className="border-neutral-700">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Document Content</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">JSON</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The full content of the document</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Contains the complete document content in JSON format, including all text, formatting, 
                      and structural elements. This represents the document's body content as returned by 
                      the Google Docs API.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Document Title</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The title of the document</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The human-readable title of the Google Doc as it appears in Google Docs. Useful for 
                      identifying and referencing the document in your workflows.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Document ID</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The ID of the document that was read</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The unique identifier of the document that was successfully read. This confirms which 
                      specific document was processed and can be used for logging or reference purposes.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Success</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">boolean</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">Whether the operation succeeded</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Boolean value indicating whether the Google Docs read operation was successful. 
                      Use this to implement error handling and retry logic in your workflows.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CollapsibleSection>
      </section>

      {/* Technical Details */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Document Reading Process</CardTitle>
              <CardDescription>
                How the node fetches and processes Google Docs content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Input Validation</h4>
                  <p className="text-neutral-400 text-sm mb-3">
                    The node first validates the document ID input:
                  </p>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• <strong>Required Check:</strong> Ensures document ID is provided</li>
                    <li>• <strong>Fallback Response:</strong> Returns null content and false success if missing</li>
                    <li>• <strong>Error Prevention:</strong> Prevents API calls with invalid inputs</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">User Authentication</h4>
                  <p className="text-neutral-400 text-sm">
                    Retrieves the user ID from the workflow service and obtains their Google OAuth access token 
                    for secure API access to Google Docs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Google Docs API Integration</CardTitle>
              <CardDescription>
                How the node interfaces with Google's document services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Document Retrieval</h4>
                  <p className="text-neutral-400 text-sm">
                    Uses the Google Docs API to fetch the specified document with the 'DEFAULT_FOR_CURRENT_ACCESS' 
                    format, which provides the most comprehensive content representation.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Content Extraction</h4>
                  <p className="text-neutral-400 text-sm">
                    Extracts the document body content and title from the API response, providing both the 
                    structured content and metadata for downstream processing.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Response Formatting</h4>
                  <p className="text-neutral-400 text-sm">
                    Returns the content in JSON format, preserving the document's structure and formatting 
                    information as provided by Google's API.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Document Selection</CardTitle>
              <CardDescription>
                How the node provides dynamic options for document selection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Document Listing</h4>
                  <p className="text-neutral-400 text-sm">
                    Implements the <code className="bg-neutral-700 px-1 rounded">getDynamicSelectOptions</code> method 
                    to fetch available Google Docs and provide them as selectable options in the UI.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">User-Specific Access</h4>
                  <p className="text-neutral-400 text-sm">
                    Only shows documents that the authenticated user has access to, ensuring proper 
                    security and access control.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Error Handling</h4>
                  <p className="text-neutral-400 text-sm">
                    Gracefully handles authentication failures and API errors, returning an empty 
                    options list when document fetching fails.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Basic Document Reading</CardTitle>
              <CardDescription>
                Read content from a specific Google Doc
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "documentId": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This will read the Google Doc with the specified ID and return its content, title, 
                and confirmation of successful reading.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Document Selection</CardTitle>
              <CardDescription>
                Use the dynamic select to choose from available documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "documentId": "{{userSelectedDocument}}"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                The dynamic select field will automatically populate with available Google Docs, 
                allowing users to browse and select the document they want to read.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Workflow Integration</CardTitle>
              <CardDescription>
                Use document content in subsequent workflow steps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "documentId": "{{previousNode.documentId}}",
  "content": "{{googleDocsReadNode.documentContent}}",
  "title": "{{googleDocsReadNode.documentTitle}}"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Integrate the Google Docs Read node with other workflow components, passing document 
                content and metadata to downstream nodes for further processing.
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
              <CardTitle>Document Content Analysis</CardTitle>
              <CardDescription>
                Analyze Google Docs content with AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📄 Google Docs Read → 🤖 AI Analysis → 📊 Content Summary → 📧 Email Report</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Google Docs Read Configuration</h4>
                  <CodeBlock
                    code={`{
  "documentId": "{{userSelectedDocument}}"
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation Steps</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>Google Docs Read:</strong> Fetches document content and metadata</li>
                    <li><strong>AI Analysis:</strong> Processes document content with LLM</li>
                    <li><strong>Content Summary:</strong> Generates analysis and insights</li>
                    <li><strong>Email Report:</strong> Sends analysis results to stakeholders</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Document Processing Pipeline</CardTitle>
              <CardDescription>
                Process multiple Google Docs automatically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically read and process multiple Google Docs, extracting key information 
                    and transforming content for various business purposes.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Google Docs Read Configuration</h4>
                  <CodeBlock
                    code={`{
  "documentId": "{{documentList.currentDocument}}"
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Processing Steps</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Document list provides array of document IDs to process</li>
                    <li>For Each iterates over each document ID</li>
                    <li>Google Docs Read fetches content for current document</li>
                    <li>Content is processed and transformed as needed</li>
                    <li>Results are collected and logged for each document</li>
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
                <li>• Use the dynamic select for easy document browsing</li>
                <li>• Handle the success status for proper error management</li>
                <li>• Consider document size and content complexity</li>
                <li>• Implement proper error handling for authentication failures</li>
                <li>• Use document title for user-friendly identification</li>
                <li>• Monitor OAuth token expiration and refresh</li>
                <li>• Validate document content before processing</li>
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
                <li>• Don't hardcode document IDs when dynamic selection is available</li>
                <li>• Avoid reading very large documents without content limits</li>
                <li>• Don't ignore authentication and scope requirements</li>
                <li>• Avoid processing sensitive documents without proper security</li>
                <li>• Don't forget to handle empty or malformed document content</li>
                <li>• Avoid making too many API calls in rapid succession</li>
                <li>• Don't assume all users have access to the same documents</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-blue-500">
            <strong>Pro Tip:</strong> When working with Google Docs content, remember that the document 
            content is returned in JSON format with Google's document structure. Consider using the 
            LLM Prompt node to extract and format the content in a more workflow-friendly format.
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
                  <h4 className="font-semibold mb-2">Authentication Errors</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with OAuth or access token errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Ensure the user has connected their Google account and granted 
                    the required OAuth scopes (Google Docs read-only and Drive metadata read-only).
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Document Not Found</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node returns success: false or empty content
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify the document ID is correct and the user has access to 
                    the specified document. Check that the document exists and is not deleted.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Dynamic Select Not Working</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Document selection dropdown is empty or shows errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check that the user has Google Docs and that the OAuth 
                    integration is working properly. Verify the required scopes are granted.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Content Processing Issues</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Document content is malformed or difficult to process
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Remember that Google Docs content is returned in JSON format. 
                    Use appropriate parsing logic or consider using the LLM Prompt node to extract 
                    readable text content.
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
          <Link href="/docs/nodes/llm-prompt">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">LLM Prompt Node</div>
                <div className="text-sm text-neutral-400">Process Google Docs content with AI</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/google-sheets-write">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Google Sheets Write Node</div>
                <div className="text-sm text-neutral-400">Log document analysis results</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/for-each">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">For Each Node</div>
                <div className="text-sm text-neutral-400">Process multiple documents</div>
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
