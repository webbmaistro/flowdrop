"use client"

import React from 'react';
import { Mail, Database, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, RelatedResourceCard } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function GmailReadEmailsNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary-main/20 rounded-lg">
            <Mail className="w-6 h-6 text-primary-main" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Gmail Read Emails</h1>
            <p className="text-neutral-400">Read and analyze Gmail messages programmatically</p>
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
              <p className="text-neutral-400">Gmail Integration</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">Gmail</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Gmail Read Emails</strong> node allows you to read, search, and analyze emails from your Gmail account 
          programmatically. This powerful automation tool integrates with Gmail's API to provide intelligent 
          email processing capabilities for your workflows.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
        <ul className="text-neutral-300 space-y-2">
            <li>• <strong>Flexible Email Reading:</strong> Read emails from specific labels or search queries</li>
            <li>• <strong>Advanced Search:</strong> Use Gmail's powerful search operators</li>
            <li>• <strong>Metadata Extraction:</strong> Access sender, subject, date, and content</li>
            <li>• <strong>Batch Processing:</strong> Handle multiple emails efficiently</li>
            <li>• <strong>Real-time Access:</strong> Always get the latest emails</li>
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
                Must be connected to access Gmail API
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
                  <span className="text-sm">Gmail read scope granted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Access to target Gmail account</span>
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
                  code="https://www.googleapis.com/auth/gmail.readonly"
                  lang="text"
                />
                <CodeBlock
                  code="https://www.googleapis.com/auth/gmail.metadata"
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
                    <h4 className="font-semibold mb-2">query</h4>
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
                        <span className="ml-2 text-neutral-200">"from:example@gmail.com"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Gmail search query to filter emails. Use Gmail's search operators for advanced filtering.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">maxResults</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">number</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-green-500">Yes</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Example:</span>
                        <span className="ml-2 text-neutral-200">100</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Maximum number of emails to return (1-500).
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
                    <h4 className="font-semibold mb-2">labelIds</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">array</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-red-500">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Example:</span>
                        <span className="ml-2 text-neutral-200">["INBOX", "IMPORTANT"]</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Specific label IDs to search within. Leave empty to search all labels.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">includeSpamTrash</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">boolean</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-red-500">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Default:</span>
                        <span className="ml-2 text-neutral-200">false</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Whether to include emails from spam and trash folders.
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
                  <h4 className="font-semibold mb-2">emails</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">array</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">Array of email objects with metadata and content</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">totalResults</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">number</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">Total number of emails matching the query</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">nextPageToken</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">string</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">Token for pagination to get more results</span>
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
              <CardTitle>Basic Email Reading</CardTitle>
              <CardDescription>
                Read recent emails from a specific sender
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "query": "from:example@gmail.com",
  "maxResults": 50,
  "includeSpamTrash": false
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Reads the 50 most recent emails from example@gmail.com, excluding spam and trash.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Advanced Search Query</CardTitle>
              <CardDescription>
                Use Gmail search operators for complex filtering
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "query": "subject:meeting has:attachment after:2024/01/01",
  "maxResults": 100,
  "labelIds": ["INBOX", "WORK"]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Searches for emails with "meeting" in subject, containing attachments, after Jan 1, 2024, in INBOX and WORK labels.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Label-Specific Search</CardTitle>
              <CardDescription>
                Search within specific Gmail labels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "query": "is:unread",
  "maxResults": 25,
  "labelIds": ["IMPORTANT"],
  "includeSpamTrash": false
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Finds unread emails in the IMPORTANT label, returning up to 25 results.
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
              <CardTitle>Email Monitoring Pipeline</CardTitle>
              <CardDescription>
                Complete workflow for monitoring and processing emails
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📧 Gmail Read Emails → 🤖 AI Analysis → 📊 Data Processing → 📱 Alert Generation</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Step-by-Step Configuration</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>Gmail Read Emails:</strong> Monitor specific email criteria</li>
                    <li><strong>AI Analysis:</strong> Analyze email content for insights</li>
                    <li><strong>Data Processing:</strong> Extract and structure relevant information</li>
                    <li><strong>Alert Generation:</strong> Send notifications based on findings</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Customer Support Automation</CardTitle>
              <CardDescription>
                Automate customer support email processing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically read support emails, categorize them by urgency, and route them to appropriate 
                    support teams or generate automated responses.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Monitor support email addresses and labels</li>
                    <li>Analyze email content for urgency indicators</li>
                    <li>Categorize emails by type and priority</li>
                    <li>Route to appropriate support channels</li>
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
                <li>• Use specific search queries to limit results</li>
                <li>• Implement pagination for large result sets</li>
                <li>• Cache results when appropriate</li>
                <li>• Handle rate limits gracefully</li>
                <li>• Always check the success output field</li>
                <li>• Use label IDs for targeted searches</li>
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
                <li>• Don't request too many results at once</li>
                <li>• Avoid searching all emails without filters</li>
                <li>• Don't ignore API rate limits</li>
                <li>• Avoid processing sensitive content without encryption</li>
                <li>• Don't assume all emails have the same structure</li>
                <li>• Avoid hardcoding email addresses</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-blue-500">
            <strong>Pro Tip:</strong> Use Gmail's powerful search operators like "from:", "subject:", "has:attachment", 
            "after:", "before:", and "label:" to create precise queries that return only the emails you need.
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
                    <strong>Solution:</strong> Ensure Google integration is properly connected and Gmail read scope is granted
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Invalid Query</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with query syntax errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify Gmail search query syntax and use valid search operators
                  </p>
      </div>

                <div>
                  <h4 className="font-semibold mb-2">Rate Limiting</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails intermittently with quota exceeded errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Implement delays between requests and monitor API usage
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
          <Link href="/docs/nodes/gmail-write-labels">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Gmail Write Labels Node</div>
                <div className="text-sm text-neutral-400">Create and manage Gmail labels</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/llm-prompt">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">LLM Prompt Node</div>
                <div className="text-sm text-neutral-400">Analyze email content with AI</div>
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
