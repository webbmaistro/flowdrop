"use client"

import React from 'react';
import { Globe, Database, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, RelatedResourceCard } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function FetchWebpageNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary-main/20 rounded-lg">
            <Globe className="w-6 h-6 text-primary-main" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Fetch Webpage</h1>
            <p className="text-neutral-400">Extract content from any webpage with automatic HTML cleaning</p>
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
              <p className="text-neutral-400">Web Integration</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">Web</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Fetch Webpage</strong> node allows you to extract content from any webpage by making HTTP requests 
          to specified URLs. This powerful automation tool automatically cleans the HTML by removing scripts and styles 
          to provide clean, readable content for further processing in your workflows.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>Universal Web Access:</strong> Fetch content from any publicly accessible webpage</li>
            <li>• <strong>Automatic HTML Cleaning:</strong> Remove scripts, styles, and unnecessary markup</li>
            <li>• <strong>Clean Content Output:</strong> Get readable text content for processing</li>
            <li>• <strong>Simple Configuration:</strong> Just provide a URL to get started</li>
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
                <Globe className="w-5 h-5 text-primary-main" />
                Web Access
              </CardTitle>
              <CardDescription>
                Must have access to the target webpages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Internet connectivity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Target webpage is publicly accessible</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">No authentication required for target page</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-purple-500" />
                Technical Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>HTTP Support:</strong> The node uses the fetch API to make HTTP requests
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>HTML Processing:</strong> Automatically strips script and style tags
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Content Extraction:</strong> Returns clean, readable text content
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
                    <h4 className="font-semibold mb-2">URL</h4>
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
                        <span className="ml-2 text-neutral-200">"https://example.com"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The complete URL of the webpage to fetch. Must include the protocol (http:// or https://).
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
                  <h4 className="font-semibold mb-2">Content</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">string</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">The cleaned HTML content of the webpage</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CollapsibleSection>
      </section>

      {/* Technical Details */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>HTML Cleaning Process</CardTitle>
              <CardDescription>
                How the node processes and cleans webpage content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Automatic Removal</h4>
                  <p className="text-neutral-400 text-sm mb-3">
                    The node automatically strips out the following HTML elements to provide clean content:
                  </p>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• <code className="bg-neutral-700 px-1 rounded">&lt;script&gt;</code> tags and their content</li>
                    <li>• <code className="bg-neutral-700 px-1 rounded">&lt;style&gt;</code> tags and their content</li>
                    <li>• All JavaScript code and CSS styles</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Content Processing</h4>
                  <p className="text-neutral-400 text-sm">
                    The remaining HTML content is preserved, maintaining the structure and readability of the webpage 
                    while removing unnecessary technical elements that could interfere with content analysis.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>HTTP Request Handling</CardTitle>
              <CardDescription>
                How the node makes requests to webpages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Request Method</h4>
                  <p className="text-neutral-400 text-sm">
                    Uses HTTP GET requests to fetch webpage content. The node respects standard HTTP status codes 
                    and will handle errors appropriately.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Response Processing</h4>
                  <p className="text-neutral-400 text-sm">
                    Converts the HTTP response to text format, then applies HTML cleaning before returning the 
                    processed content to your workflow.
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
              <CardTitle>Basic Webpage Fetching</CardTitle>
              <CardDescription>
                Fetch content from a simple webpage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "url": "https://example.com"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Fetches the content from example.com and returns cleaned HTML without scripts or styles.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>News Article Extraction</CardTitle>
              <CardDescription>
                Extract article content from news websites
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "url": "https://news-site.com/article/123"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Fetches a specific news article and returns clean content for further processing or analysis.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic URL with Workflow Data</CardTitle>
              <CardDescription>
                Use workflow variables for dynamic webpage fetching
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "url": "{{workflowData.targetUrl}}"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Uses a URL from workflow data to dynamically fetch different webpages based on your workflow logic.
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
              <CardTitle>Content Monitoring Pipeline</CardTitle>
              <CardDescription>
                Monitor webpage content for changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>⏰ Schedule Trigger → 🌐 Fetch Webpage → 🤖 AI Analysis → 📊 Content Comparison → 📱 Alert</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Step-by-Step Configuration</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>Schedule Trigger:</strong> Run the workflow at regular intervals</li>
                    <li><strong>Fetch Webpage:</strong> Get current content from the monitored page</li>
                    <li><strong>AI Analysis:</strong> Analyze the content for important changes</li>
                    <li><strong>Content Comparison:</strong> Compare with previous versions</li>
                    <li><strong>Alert:</strong> Send notifications about significant changes</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Collection from Multiple Sources</CardTitle>
              <CardDescription>
                Collect data from various websites for analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically fetch content from multiple websites, extract relevant information, 
                    and compile it into a comprehensive report or database.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Use multiple Fetch Webpage nodes for different sources</li>
                    <li>Process each webpage's content with AI analysis</li>
                    <li>Extract structured data from the cleaned content</li>
                    <li>Combine and format the collected information</li>
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
                <li>• Use HTTPS URLs when possible for security</li>
                <li>• Implement rate limiting between requests</li>
                <li>• Handle errors gracefully in your workflows</li>
                <li>• Respect robots.txt and website terms of service</li>
                <li>• Cache results when appropriate</li>
                <li>• Use specific URLs rather than homepage URLs</li>
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
                <li>• Don't make requests too frequently</li>
                <li>• Avoid scraping private or password-protected pages</li>
                <li>• Don't ignore HTTP error responses</li>
                <li>• Avoid making requests to the same page repeatedly</li>
                <li>• Don't assume all websites allow scraping</li>
                <li>• Avoid processing sensitive content without verification</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-blue-500">
            <strong>Pro Tip:</strong> When building workflows that fetch multiple webpages, implement delays between 
            requests to be respectful to the target websites and avoid being blocked for excessive requests.
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
                  <h4 className="font-semibold mb-2">Access Denied (403 Forbidden)</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with access denied errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> The website may be blocking automated requests. Check if the page requires authentication or has anti-bot measures.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Page Not Found (404 Error)</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with page not found errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify the URL is correct and the webpage still exists. URLs can change or pages can be removed.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Timeout Errors</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with timeout errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> The target website may be slow or experiencing issues. Try again later or check the website's status.
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
                <div className="text-sm text-neutral-400">Analyze webpage content with AI</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/google-sheets-write">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Google Sheets Write Node</div>
                <div className="text-sm text-neutral-400">Store extracted data in spreadsheets</div>
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
