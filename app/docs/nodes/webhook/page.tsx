"use client"

import React from 'react';
import { Webhook, Database, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink, Server, Shield } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function WebhookNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <Webhook className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Webhook</h1>
            <p className="text-neutral-400">Receives HTTP requests and triggers workflows</p>
          </div>
        </div>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Node Type</h3>
              <p className="text-neutral-400">Trigger</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Category</h3>
              <p className="text-neutral-400">Integration</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">Webhook</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Webhook</strong> node is a trigger node that receives HTTP requests and automatically 
          starts workflow execution. This powerful integration enables external services, applications, and 
          systems to trigger your workflows by sending HTTP requests to custom endpoints, creating seamless 
          automation and real-time integration capabilities.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>HTTP Trigger:</strong> Receives GET and POST requests to trigger workflows</li>
            <li>• <strong>Custom Endpoints:</strong> Create unique webhook URLs for different integrations</li>
            <li>• <strong>Authentication Options:</strong> Support for secret-based authentication</li>
            <li>• <strong>Request Data Access:</strong> Provides request body and headers to workflows</li>
            <li>• <strong>Dynamic Documentation:</strong> Generates endpoint URLs for easy integration</li>
            <li>• <strong>Header Management:</strong> Configure and merge custom request headers</li>
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
                <Server className="w-5 h-5 text-blue-500" />
                Infrastructure Requirements
              </CardTitle>
              <CardDescription>
                Must have accessible webhook endpoints and proper network configuration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Publicly accessible webhook endpoint</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Proper firewall and security configurations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">HTTPS support for secure webhook communication</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-500" />
                Security Considerations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>Authentication:</strong> Understanding of webhook security best practices
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Endpoint Security:</strong> Protection against unauthorized access and abuse
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Data Validation:</strong> Proper handling of incoming webhook data
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
                  <strong>Webhook Framework:</strong> Access to webhook trigger infrastructure
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>HTTP Handling:</strong> Support for processing incoming HTTP requests
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Error Handling:</strong> Proper exception handling for webhook failures
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
                    <h4 className="font-semibold mb-2">Request Method</h4>
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
                        <span className="ml-2 text-neutral-200">POST</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The HTTP method this webhook will accept. Available options are GET and POST. 
                      Choose the method that matches your integration requirements and security policies.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Path</h4>
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
                      The custom path for the webhook endpoint. This will be appended to the base webhook URL 
                      to create a unique endpoint for this webhook. Use descriptive paths like &quot;github-push&quot; 
                      or &quot;stripe-payment&quot;.
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
                    <h4 className="font-semibold mb-2">Authentication</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">dropdown</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-neutral-200">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Default:</span>
                        <span className="ml-2 text-neutral-200">none</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The authentication method for the webhook. Available options are &quot;none&quot; for public 
                      endpoints and &quot;secret&quot; for authenticated endpoints. Choose based on your security requirements.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Request Headers</h4>
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
                      Custom headers to include in the webhook request. These headers will be merged with 
                      incoming request headers, with incoming headers taking precedence. Useful for adding 
                      metadata or authentication tokens.
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
                    <h4 className="font-semibold mb-2">Request Body</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">JSON</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The body of the incoming request</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Contains the request body data sent to the webhook. This is typically JSON data but 
                      can handle any format. Use this to access the payload sent by the external service 
                      that triggered the webhook.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Request Headers</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">JSON</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The headers of the incoming request</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Contains the HTTP headers from the incoming request, merged with any configured custom 
                      headers. Incoming headers take precedence over configured headers. Useful for accessing 
                      authentication tokens, content types, and other request metadata.
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
              <CardTitle>Webhook Trigger Process</CardTitle>
              <CardDescription>
                How the node receives HTTP requests and triggers workflow execution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Request Reception</h4>
                  <p className="text-neutral-400 text-sm mb-3">
                    The webhook node receives HTTP requests through the webhook trigger infrastructure:
                  </p>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• <strong>Endpoint Creation:</strong> Generates unique webhook URLs based on path configuration</li>
                    <li>• <strong>Request Validation:</strong> Validates HTTP method and authentication if configured</li>
                    <li>• <strong>Data Extraction:</strong> Extracts request body and headers for workflow processing</li>
                    <li>• <strong>Workflow Trigger:</strong> Automatically starts workflow execution with webhook data</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Trigger Execution</h4>
                  <p className="text-neutral-400 text-sm">
                    Uses the <code className="bg-neutral-700 px-1 rounded">_trigger</code> method to process incoming webhook data 
                    and provide it to the workflow. The node cannot be executed as part of a workflow graph 
                    since it&apos;s a trigger node.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Processing</CardTitle>
              <CardDescription>
                How the node processes and merges webhook request data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Header Merging</h4>
                  <p className="text-neutral-400 text-sm">
                    The node merges configured custom headers with incoming request headers using the logic: 
                    <code className="bg-neutral-700 px-1 rounded">{`{ ...configuredHeaders, ...headers }`}</code>. 
                    This ensures incoming headers take precedence while preserving configured defaults.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Error Handling</h4>
                  <p className="text-neutral-400 text-sm">
                    If an error occurs during webhook processing, the node returns an error message in the 
                    request body output, allowing workflows to handle failures gracefully and provide 
                    appropriate error responses.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Data Validation</h4>
                  <p className="text-neutral-400 text-sm">
                    The node validates that trigger data exists and contains the expected body and headers 
                    structure before processing. This ensures robust handling of malformed webhook requests.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Documentation</CardTitle>
              <CardDescription>
                How the node generates webhook endpoint URLs for integration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">URL Generation</h4>
                  <p className="text-neutral-400 text-sm">
                    The <code className="bg-neutral-700 px-1 rounded">getDynamicDocumentation</code> method generates the complete 
                    webhook endpoint URL by combining the base API URL, webhook trigger path, node ID, and 
                    configured path. This provides users with the exact URL to use for integrations.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Path Cleaning</h4>
                  <p className="text-neutral-400 text-sm">
                    Automatically removes leading slashes from the configured path to ensure proper URL 
                    construction. This prevents double slashes and ensures clean, valid webhook endpoints.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Method Display</h4>
                  <p className="text-neutral-400 text-sm">
                    Includes the configured HTTP method in the generated documentation, making it clear 
                    what type of request should be sent to the webhook endpoint.
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
              <CardTitle>GitHub Integration</CardTitle>
              <CardDescription>
                Trigger workflows on code pushes and pull requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "requestMethod": "POST",
  "path": "github-webhook",
  "authentication": "secret",
  "requestHeaders": {
    "X-GitHub-Event": "push",
    "User-Agent": "GitHub-Hookshot"
  }
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This configuration creates a webhook endpoint for GitHub integration that accepts POST requests 
                and includes GitHub-specific headers. The webhook will trigger workflows when GitHub sends 
                push event notifications.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Stripe Payment Webhook</CardTitle>
              <CardDescription>
                Process payment events and trigger business workflows
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "requestMethod": "POST",
  "path": "stripe-payments",
  "authentication": "secret",
  "requestHeaders": {
    "Stripe-Signature": "{{stripeSignature}}",
    "Content-Type": "application/json"
  }
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This configuration creates a webhook for Stripe payment processing that accepts POST requests 
                and includes Stripe-specific headers for signature verification and content type specification.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Form Submission Webhook</CardTitle>
              <CardDescription>
                Process form submissions and trigger automated responses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "requestMethod": "POST",
  "path": "contact-form",
  "authentication": "none",
  "requestHeaders": {
    "Content-Type": "application/json",
    "X-Form-Source": "website"
  }
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This configuration creates a public webhook for contact form submissions that accepts POST 
                requests and includes custom headers to identify the form source and content type.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Simple GET Webhook</CardTitle>
              <CardDescription>
                Create simple GET endpoints for basic integrations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "requestMethod": "GET",
  "path": "health-check",
  "authentication": "none"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This configuration creates a simple health check webhook that accepts GET requests without 
                authentication. Useful for monitoring, testing, or simple integrations that don&apos;t require 
                complex data processing.
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
              <CardTitle>Automated Customer Onboarding</CardTitle>
              <CardDescription>
                Trigger customer onboarding workflows from webhook events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🔗 Webhook Trigger → 📊 Data Processing → 📧 Welcome Email → 📱 SMS Notification → ✅ Onboarding Complete</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Webhook Configuration</h4>
                  <CodeBlock
                    code={`{
  "requestMethod": "POST",
  "path": "customer-signup",
  "authentication": "secret",
  "requestHeaders": {
    "Content-Type": "application/json",
    "X-Event-Type": "customer.created"
  }
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation Steps</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>Webhook Trigger:</strong> Receives customer signup data from external system</li>
                    <li><strong>Data Processing:</strong> Extracts customer information from request body</li>
                    <li><strong>Welcome Email:</strong> Generates and sends personalized welcome email</li>
                    <li><strong>SMS Notification:</strong> Sends SMS confirmation to customer</li>
                    <li><strong>Onboarding Complete:</strong> Updates customer status and logs completion</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Real-time Order Processing</CardTitle>
              <CardDescription>
                Process orders immediately when webhooks are received
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically process orders, update inventory, and notify relevant teams when webhook 
                    events are received from e-commerce platforms, payment processors, or order management systems.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Webhook Configuration</h4>
                  <CodeBlock
                    code={`{
  "requestMethod": "POST",
  "path": "order-created",
  "authentication": "secret",
  "requestHeaders": {
    "Content-Type": "application/json",
    "X-Platform": "shopify",
    "X-Event": "order.created"
  }
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Processing Steps</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Webhook receives order creation event from e-commerce platform</li>
                    <li>Order data is extracted and validated from request body</li>
                    <li>Inventory is automatically updated based on order items</li>
                    <li>Order confirmation emails are sent to customers</li>
                    <li>Warehouse teams are notified of new orders</li>
                    <li>Order status is tracked and updated in real-time</li>
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Do&apos;s
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Use descriptive and unique paths for each webhook</li>
                <li>• Implement authentication for sensitive webhook endpoints</li>
                <li>• Include relevant custom headers for context</li>
                <li>• Use HTTPS endpoints for secure communication</li>
                <li>• Monitor webhook performance and reliability</li>
                <li>• Implement proper error handling in workflows</li>
                <li>• Use appropriate HTTP methods for your use case</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Don&apos;s
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Don&apos;t use generic paths like &quot;webhook&quot; or &quot;api&quot;</li>
                <li>• Avoid leaving webhooks unauthenticated for sensitive data</li>
                <li>• Don&apos;t ignore webhook security best practices</li>
                <li>• Avoid creating webhooks without proper error handling</li>
                <li>• Don&apos;t use GET for webhooks that modify data</li>
                <li>• Avoid exposing webhook endpoints without rate limiting</li>
                <li>• Don&apos;t forget to validate incoming webhook data</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-500" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Always use HTTPS for webhook endpoints</li>
                <li>• Implement secret-based authentication when possible</li>
                <li>• Validate webhook signatures from trusted services</li>
                <li>• Use unique, unpredictable webhook paths</li>
                <li>• Implement rate limiting to prevent abuse</li>
                <li>• Monitor webhook access and usage patterns</li>
                <li>• Regularly rotate authentication secrets</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-green-500">
            <strong>Pro Tip:</strong> When designing webhook endpoints, think about the external service 
            that will be calling them. Use descriptive paths, implement proper authentication, and include 
            relevant headers to make integration as smooth as possible. Remember that webhooks are the 
            entry point to your workflows, so security and reliability are paramount.
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
                  <h4 className="font-semibold mb-2">Webhook Not Triggering</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> External service sends requests but workflow doesn&apos;t start
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify the webhook URL is correct, check authentication settings, 
                    and ensure the webhook node is properly configured in your workflow. Test the endpoint 
                    manually to confirm it&apos;s accessible.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Authentication Failures</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Webhook requests are rejected with authentication errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check that the authentication method matches what the external 
                    service is sending. For secret-based authentication, verify the secret is correctly 
                    configured and being sent in the request.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Data Not Available in Workflow</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Workflow starts but can&apos;t access webhook data
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check the webhook node&apos;s output fields are properly connected 
                    to downstream nodes. Verify that the external service is sending data in the expected 
                    format and that the webhook is configured to accept the correct HTTP method.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Endpoint Not Accessible</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> External service cannot reach the webhook endpoint
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check network configuration, firewall settings, and ensure the 
                    webhook endpoint is publicly accessible. Verify the URL generated by the dynamic 
                    documentation is correct and accessible from the internet.
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
          <Link href="/docs/nodes/http-request">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">HTTP Request Node</div>
                <div className="text-sm text-neutral-400">Send HTTP requests to external services</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/if-else">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">If-Else Node</div>
                <div className="text-sm text-neutral-400">Route webhook data based on conditions</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/for-each">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">For Each Node</div>
                <div className="text-sm text-neutral-400">Process multiple webhook items</div>
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
