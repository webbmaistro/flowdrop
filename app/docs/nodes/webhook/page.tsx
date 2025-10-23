"use client"

import React from 'react';
import { Webhook, Server, Shield, Settings } from 'lucide-react';
import {
  NodeLayout,
  NodeHeader,
  OverviewSection,
  PrerequisitesSection,
  NodeConfigurationSection,
  BestPracticesSection,
  TroubleshootingSection,
  TechnicalDetailsSection,
} from '@/components/docs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from '@/components/ui';
import { ExternalLink } from 'lucide-react';
import CodeBlock from "@/components/ui/CodeBlock";
import Link from 'next/link';

export default function WebhookNode() {
  const prerequisites = [
    {
      icon: Server,
      title: "Infrastructure Requirements",
      description: "Must have accessible webhook endpoints and proper network configuration",
      requirements: [
        "Publicly accessible webhook endpoint",
        "Proper firewall and security configurations",
        "HTTPS support for secure webhook communication"
      ]
    },
    {
      icon: Shield,
      title: "Security Considerations",
      description: "Webhook security requirements",
      requirements: [
        "Authentication: Understanding of webhook security best practices",
        "Endpoint Security: Protection against unauthorized access and abuse",
        "Data Validation: Proper handling of incoming webhook data"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "System capabilities needed",
      requirements: [
        "Webhook Framework: Access to webhook trigger infrastructure",
        "HTTP Handling: Support for processing incoming HTTP requests",
        "Error Handling: Proper exception handling for webhook failures"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Webhook}
        title="Webhook"
        description="Receives HTTP requests and triggers workflows"
        nodeType="Trigger"
        category="Integration"
        iconName="Webhook"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Webhook</strong> node is a trigger node that receives HTTP requests and automatically starts workflow execution. This powerful integration enables external services, applications, and systems to trigger your workflows by sending HTTP requests to custom endpoints, creating seamless automation and real-time integration capabilities."
        keyFeatures={[
          "<strong>HTTP Trigger:</strong> Receives GET and POST requests to trigger workflows",
          "<strong>Custom Endpoints:</strong> Create unique webhook URLs for different integrations",
          "<strong>Authentication Options:</strong> Support for secret-based authentication",
          "<strong>Request Data Access:</strong> Provides request body and headers to workflows",
          "<strong>Dynamic Documentation:</strong> Generates endpoint URLs for easy integration",
          "<strong>Header Management:</strong> Configure and merge custom request headers"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Request Method",
              type: "dropdown",
              required: true,
              defaultValue: "POST",
              valueType: "GET, POST",
              description: "The HTTP method this webhook will accept. Available options are GET and POST. Choose the method that matches your integration requirements and security policies."
            },
            {
              name: "Path",
              type: "text",
              required: true,
              valueType: "string",
              description: "The custom path for the webhook endpoint. This will be appended to the base webhook URL to create a unique endpoint for this webhook. Use descriptive paths like \"github-push\" or \"stripe-payment\"."
            }
          ],
          optional: [
            {
              name: "Authentication",
              type: "dropdown",
              required: false,
              defaultValue: "none",
              valueType: "none, secret",
              description: "The authentication method for the webhook. Available options are \"none\" for public endpoints and \"secret\" for authenticated endpoints. Choose based on your security requirements."
            },
            {
              name: "Request Headers",
              type: "key_value",
              required: false,
              valueType: "JSON",
              description: "Custom headers to include in the webhook request. These headers will be merged with incoming request headers, with incoming headers taking precedence. Useful for adding metadata or authentication tokens."
            }
          ]
        }}
        outputFields={[
          {
            name: "Request Body",
            type: "JSON",
            required: false,
            valueType: "The body of the incoming request",
            description: "Contains the request body data sent to the webhook. This is typically JSON data but can handle any format. Use this to access the payload sent by the external service that triggered the webhook."
          },
          {
            name: "Request Headers",
            type: "JSON",
            required: false,
            valueType: "The headers of the incoming request",
            description: "Contains the HTTP headers from the incoming request, merged with any configured custom headers. Incoming headers take precedence over configured headers. Useful for accessing authentication tokens, content types, and other request metadata."
          }
        ]}
      />

      <TechnicalDetailsSection
        details={[
          {
            title: "Webhook Trigger Process",
            description: "How the node receives HTTP requests and triggers workflow execution",
            items: [
              {
                title: "Request Reception",
                description: "The webhook node receives HTTP requests through the webhook trigger infrastructure: Endpoint Creation generates unique webhook URLs based on path configuration, Request Validation validates HTTP method and authentication if configured, Data Extraction extracts request body and headers for workflow processing, and Workflow Trigger automatically starts workflow execution with webhook data."
              },
              {
                title: "Trigger Execution",
                description: "Uses the _trigger method to process incoming webhook data and provide it to the workflow. The node cannot be executed as part of a workflow graph since it's a trigger node."
              }
            ]
          },
          {
            title: "Data Processing",
            description: "How the node processes and merges webhook request data",
            items: [
              {
                title: "Header Merging",
                description: "The node merges configured custom headers with incoming request headers using the logic: { ...configuredHeaders, ...headers }. This ensures incoming headers take precedence while preserving configured defaults."
              },
              {
                title: "Error Handling",
                description: "If an error occurs during webhook processing, the node returns an error message in the request body output, allowing workflows to handle failures gracefully and provide appropriate error responses."
              },
              {
                title: "Data Validation",
                description: "The node validates that trigger data exists and contains the expected body and headers structure before processing. This ensures robust handling of malformed webhook requests."
              }
            ]
          }
        ]}
      />

      {/* Examples Section */}
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
              <p className="text-neutral-400 mt-3 text-sm">
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
              <p className="text-neutral-400 mt-3 text-sm">
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
              <p className="text-neutral-400 mt-3 text-sm">
                This configuration creates a public webhook for contact form submissions that accepts POST 
                requests and includes custom headers to identify the form source and content type.
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
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use descriptive and unique paths for each webhook",
          "Implement authentication for sensitive webhook endpoints",
          "Include relevant custom headers for context",
          "Use HTTPS endpoints for secure communication",
          "Monitor webhook performance and reliability",
          "Implement proper error handling in workflows",
          "Use appropriate HTTP methods for your use case"
        ]}
        donts={[
          "Don't use generic paths like \"webhook\" or \"api\"",
          "Avoid leaving webhooks unauthenticated for sensitive data",
          "Don't ignore webhook security best practices",
          "Avoid creating webhooks without proper error handling",
          "Don't use GET for webhooks that modify data",
          "Avoid exposing webhook endpoints without rate limiting",
          "Don't forget to validate incoming webhook data"
        ]}
        securityItems={[
          "Always use HTTPS for webhook endpoints",
          "Implement secret-based authentication when possible",
          "Validate webhook signatures from trusted services",
          "Use unique, unpredictable webhook paths",
          "Implement rate limiting to prevent abuse",
          "Monitor webhook access and usage patterns",
          "Regularly rotate authentication secrets"
        ]}
        proTip="When designing webhook endpoints, think about the external service that will be calling them. Use descriptive paths, implement proper authentication, and include relevant headers to make integration as smooth as possible. Remember that webhooks are the entry point to your workflows, so security and reliability are paramount."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Webhook Not Triggering",
            symptoms: "External service sends requests but workflow doesn't start",
            solution: "Verify the webhook URL is correct, check authentication settings, and ensure the webhook node is properly configured in your workflow. Test the endpoint manually to confirm it's accessible."
          },
          {
            title: "Authentication Failures",
            symptoms: "Webhook requests are rejected with authentication errors",
            solution: "Check that the authentication method matches what the external service is sending. For secret-based authentication, verify the secret is correctly configured and being sent in the request."
          },
          {
            title: "Data Not Available in Workflow",
            symptoms: "Workflow starts but can't access webhook data",
            solution: "Check the webhook node's output fields are properly connected to downstream nodes. Verify that the external service is sending data in the expected format and that the webhook is configured to accept the correct HTTP method."
          },
          {
            title: "Endpoint Not Accessible",
            symptoms: "External service cannot reach the webhook endpoint",
            solution: "Check network configuration, firewall settings, and ensure the webhook endpoint is publicly accessible. Verify the URL generated by the dynamic documentation is correct and accessible from the internet."
          }
        ]}
      />

      {/* Related Resources - Custom format */}
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
    </NodeLayout>
  );
}
