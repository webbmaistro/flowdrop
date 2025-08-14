"use client"

import React from 'react';
import { Globe, Database, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink, Network, Server } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function HttpRequestNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Globe className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">HTTP Request</h1>
            <p className="text-neutral-400">Make HTTP requests to external APIs and services</p>
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
              <p className="text-neutral-400">Globe</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>HTTP Request</strong> node is an action node that makes HTTP requests to specified URLs 
          and returns the response. This powerful integration allows you to interact with external APIs, 
          web services, and HTTP endpoints directly from your workflows, enabling data fetching, service 
          integration, and external communication.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>HTTP Methods:</strong> Supports GET, POST, PUT, DELETE, and PATCH requests</li>
            <li>• <strong>Flexible Headers:</strong> Customizable request headers for authentication and content type</li>
            <li>• <strong>Request Body:</strong> Send JSON data with POST, PUT, and PATCH requests</li>
            <li>• <strong>Response Handling:</strong> Automatic JSON parsing with fallback to text</li>
            <li>• <strong>Status Tracking:</strong> Returns HTTP status codes and response headers</li>
            <li>• <strong>Error Handling:</strong> Graceful handling of network failures and invalid responses</li>
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
                <Network className="w-5 h-5 text-blue-500" />
                Network Access
              </CardTitle>
              <CardDescription>
                Must have network access to external services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Network connectivity to target URLs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Valid and accessible target endpoints</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Proper firewall and security configurations</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="w-5 h-5 text-purple-500" />
                Target Service Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>API Endpoints:</strong> Valid HTTP endpoints that accept the specified methods
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Authentication:</strong> Proper API keys, tokens, or credentials if required
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Rate Limits:</strong> Awareness of API rate limiting and usage policies
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
                  <strong>HTTP Utils:</strong> Access to safeFetch utility for secure HTTP requests
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Error Handling:</strong> Proper exception handling for network failures
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Response Processing:</strong> JSON parsing with text fallback capabilities
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
                        <span className="text-neutral-400">Value Type:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The URL to make the HTTP request to. Must be a valid HTTP/HTTPS endpoint that 
                      accepts the specified HTTP method. Supports both absolute URLs and relative paths.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Method</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">dropdown</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-green-500">Yes</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Default:</span>
                        <span className="ml-2 text-neutral-200">GET</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The HTTP method to use for the request. Available options include GET, POST, PUT, 
                      DELETE, and PATCH. Choose the method that matches your target API's requirements.
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
                    <h4 className="font-semibold mb-2">Headers</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">key_value</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-neutral-200">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Value Type:</span>
                        <span className="ml-2 text-neutral-200">JSON</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Custom HTTP headers to send with the request. Common uses include Authorization 
                      tokens, Content-Type specifications, and API keys. Use key-value pairs for easy configuration.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Body</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">text</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-neutral-200">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Value Type:</span>
                        <span className="ml-2 text-neutral-200">JSON</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The request body to send with POST, PUT, or PATCH requests. Should be valid JSON 
                      data that matches the API's expected format. GET and DELETE requests typically don't use a body.
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
                    <h4 className="font-semibold mb-2">Response Body</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">JSON</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The body of the response</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Contains the response data from the HTTP request. The node automatically attempts 
                      to parse JSON responses, falling back to text if JSON parsing fails. This ensures 
                      you get structured data when possible.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Status Code</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">number</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The HTTP status code of the response</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The HTTP status code returned by the target server. Use this to determine if the 
                      request was successful (2xx), had client errors (4xx), or server errors (5xx). 
                      Essential for implementing proper error handling in your workflows.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Headers</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">JSON</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The headers of the response</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The response headers returned by the target server. Includes important metadata 
                      like Content-Type, Content-Length, caching directives, and any custom headers 
                      set by the API or service.
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
              <CardTitle>Request Execution Process</CardTitle>
              <CardDescription>
                How the node processes inputs and executes HTTP requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Input Validation</h4>
                  <p className="text-neutral-400 text-sm mb-3">
                    The node validates required inputs before making the request:
                  </p>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• <strong>URL Check:</strong> Ensures URL is provided and valid</li>
                    <li>• <strong>Method Validation:</strong> Verifies HTTP method is specified</li>
                    <li>• <strong>Error Prevention:</strong> Throws BadRequestException for missing inputs</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Request Preparation</h4>
                  <p className="text-neutral-400 text-sm">
                    Prepares the HTTP request with parsed inputs, converting the body to JSON string 
                    if provided and setting up headers for the request.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>HTTP Request Execution</CardTitle>
              <CardDescription>
                How the node makes the actual HTTP request using safeFetch
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Safe Fetch Utility</h4>
                  <p className="text-neutral-400 text-sm">
                    Uses the <code className="bg-neutral-700 px-1 rounded">safeFetch</code> utility for 
                    secure HTTP requests, which provides additional security and error handling beyond 
                    standard fetch.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Request Configuration</h4>
                  <p className="text-neutral-400 text-sm">
                    Configures the request with the specified method, headers, and body. Headers are 
                    cast to Record<string, string> for proper TypeScript typing, and the body is 
                    JSON-stringified if provided.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Response Handling</h4>
                  <p className="text-neutral-400 text-sm">
                    Handles the response by first attempting to parse JSON, then falling back to text 
                    if JSON parsing fails. This ensures maximum compatibility with different API response formats.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Response Processing</CardTitle>
              <CardDescription>
                How the node processes and formats the HTTP response
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">JSON Parsing</h4>
                  <p className="text-neutral-400 text-sm">
                    Attempts to parse the response as JSON first, which is the most common format 
                    for API responses and provides structured data for downstream processing.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Text Fallback</h4>
                  <p className="text-neutral-400 text-sm">
                    If JSON parsing fails, falls back to text format. This handles cases where APIs 
                    return plain text, HTML, or other non-JSON formats.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Header Extraction</h4>
                  <p className="text-neutral-400 text-sm">
                    Extracts response headers using <code className="bg-neutral-700 px-1 rounded">Object.fromEntries(response.headers.entries())</code>, 
                    converting the Headers object to a plain JavaScript object for easy access.
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
              <CardTitle>Basic GET Request</CardTitle>
              <CardDescription>
                Fetch data from a public API
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "url": "https://api.example.com/users",
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This will make a GET request to fetch user data from the API, setting the Accept header 
                to prefer JSON responses. No body is needed for GET requests.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>POST Request with Body</CardTitle>
              <CardDescription>
                Send data to create a new resource
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "url": "https://api.example.com/users",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer {{apiToken}}"
  },
  "body": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This POST request creates a new user by sending JSON data in the request body. 
                Includes authentication via Bearer token and proper Content-Type header.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>PUT Request for Updates</CardTitle>
              <CardDescription>
                Update an existing resource
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "url": "https://api.example.com/users/123",
  "method": "PUT",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer {{apiToken}}"
  },
  "body": {
    "name": "John Smith",
    "email": "johnsmith@example.com"
  }
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This PUT request updates user 123 with new information. The URL includes the resource ID, 
                and the body contains the updated data fields.
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
              <CardTitle>API Data Integration</CardTitle>
              <CardDescription>
                Fetch data from external APIs and process it in workflows
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🌐 HTTP Request → 🤖 AI Analysis → 📊 Data Processing → 📧 Report Generation</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">HTTP Request Configuration</h4>
                  <CodeBlock
                    code={`{
  "url": "{{apiEndpoint}}",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer {{apiKey}}",
    "Accept": "application/json"
  }
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation Steps</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>HTTP Request:</strong> Fetches data from external API</li>
                    <li><strong>AI Analysis:</strong> Processes API response with LLM</li>
                    <li><strong>Data Processing:</strong> Transforms and analyzes the data</li>
                    <li><strong>Report Generation:</strong> Creates insights and reports</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Webhook Integration</CardTitle>
              <CardDescription>
                Send data to external webhooks and services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically send workflow results, notifications, or data updates to external 
                    services via webhooks, enabling real-time integration with third-party systems.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">HTTP Request Configuration</h4>
                  <CodeBlock
                    code={`{
  "url": "{{webhookUrl}}",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "X-Webhook-Secret": "{{webhookSecret}}"
  },
  "body": {
    "event": "workflow_completed",
    "data": "{{workflowResults}}",
    "timestamp": "{{currentTimestamp}}"
  }
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Processing Steps</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Workflow generates results and data</li>
                    <li>HTTP Request sends POST to webhook URL</li>
                    <li>Webhook receives data and processes it</li>
                    <li>External service takes action based on webhook</li>
                    <li>Response status confirms successful delivery</li>
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
                <li>• Use appropriate HTTP methods for your use case (GET for reading, POST for creating)</li>
                <li>• Set proper Content-Type headers for POST/PUT requests</li>
                <li>• Include authentication headers when required by the API</li>
                <li>• Handle different response status codes appropriately</li>
                <li>• Use template variables for dynamic URLs and credentials</li>
                <li>• Implement proper error handling for failed requests</li>
                <li>• Consider rate limiting and API quotas</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Don&apos;ts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Don't send sensitive data in URL parameters (use POST with body instead)</li>
                <li>• Avoid hardcoding API keys and secrets in workflows</li>
                <li>• Don't ignore HTTP status codes in your error handling</li>
                <li>• Avoid making requests to untrusted or unverified endpoints</li>
                <li>• Don't forget to handle network timeouts and connection errors</li>
                <li>• Avoid sending unnecessarily large request bodies</li>
                <li>• Don't assume all APIs return JSON responses</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-blue-500">
            <strong>Pro Tip:</strong> When working with external APIs, always check the response status 
            code before processing the response body. Use conditional logic to handle different status 
            codes (2xx for success, 4xx for client errors, 5xx for server errors) appropriately in your workflows.
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
                  <h4 className="font-semibold mb-2">Network Connection Errors</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with network or connection errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check network connectivity, firewall settings, and ensure 
                    the target URL is accessible. Verify DNS resolution and network configuration.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Authentication Failures</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Requests return 401 Unauthorized or 403 Forbidden status codes
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify API keys, tokens, and authentication headers are correct. 
                    Check if credentials have expired or if additional scopes are required.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Invalid Request Format</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Requests return 400 Bad Request or 422 Unprocessable Entity
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify the request body format matches the API's expected schema. 
                    Check Content-Type headers and ensure JSON data is properly formatted.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Response Parsing Issues</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Response body is empty or contains unexpected data
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check the response Content-Type header to understand the format. 
                    The node automatically handles JSON vs text responses, but verify the API is returning 
                    the expected data structure.
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
          <Link href="/docs/nodes/fetch-webpage">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Fetch Webpage Node</div>
                <div className="text-sm text-neutral-400">Extract content from web pages</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/llm-prompt">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">LLM Prompt Node</div>
                <div className="text-sm text-neutral-400">Process API responses with AI</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/google-sheets-write">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Google Sheets Write Node</div>
                <div className="text-sm text-neutral-400">Log API responses and data</div>
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
