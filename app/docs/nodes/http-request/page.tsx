"use client"

import React from 'react';
import { Globe, Network } from 'lucide-react';
import {
  NodeLayout,
  NodeHeader,
  OverviewSection,
  PrerequisitesSection,
  NodeConfigurationSection,
  BestPracticesSection,
  RelatedResourcesSection,
} from '@/components/docs';
import { Button } from '@/components/ui';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function HttpRequestNode() {
  const prerequisites = [
    {
      icon: Network,
      title: "Network Access",
      description: "Must have network access to external services",
      requirements: [
        "Network connectivity to target URLs",
        "Valid and accessible target endpoints",
        "Proper firewall and security configurations"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Globe}
        title="HTTP Request"
        description="Make HTTP requests to external APIs and services"
        nodeType="Action"
        category="Web Integration"
        iconName="Globe"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>HTTP Request</strong> node is an action node that makes HTTP requests to specified URLs and returns the response. This powerful integration allows you to interact with external APIs, web services, and HTTP endpoints directly from your workflows."
        keyFeatures={[
          "<strong>HTTP Methods:</strong> Supports GET, POST, PUT, DELETE, and PATCH requests",
          "<strong>Flexible Headers:</strong> Customizable request headers for authentication and content type",
          "<strong>Request Body:</strong> Send JSON data with POST, PUT, and PATCH requests",
          "<strong>Response Handling:</strong> Automatic JSON parsing with fallback to text",
          "<strong>Status Tracking:</strong> Returns HTTP status codes and response headers",
          "<strong>Error Handling:</strong> Graceful handling of network failures and invalid responses"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "URL",
              type: "text",
              required: true,
              valueType: "string",
              description: "The target URL for the HTTP request. Must be a valid HTTP or HTTPS endpoint."
            },
            {
              name: "Method",
              type: "dropdown",
              required: true,
              valueType: "GET, POST, PUT, DELETE, PATCH",
              description: "The HTTP method to use for the request. GET for retrieving data, POST/PUT/PATCH for sending data, DELETE for removing data."
            }
          ],
          optional: [
            {
              name: "Headers",
              type: "key_value",
              required: false,
              valueType: "JSON",
              description: "Custom headers to include with the request. Common headers include Authorization for API keys, Content-Type for data format, and custom headers required by the API."
            },
            {
              name: "Body",
              type: "JSON",
              required: false,
              valueType: "JSON",
              description: "Request body for POST, PUT, and PATCH methods. Should be valid JSON data that the API expects."
            }
          ]
        }}
        outputFields={[
          {
            name: "Response",
            type: "JSON or string",
            required: false,
            valueType: "The response from the API",
            description: "The response body from the HTTP request. Automatically parsed as JSON if possible, otherwise returned as text."
          },
          {
            name: "Status Code",
            type: "number",
            required: false,
            valueType: "HTTP status code",
            description: "The HTTP status code returned by the server (e.g., 200 for success, 404 for not found, 500 for server error)."
          },
          {
            name: "Headers",
            type: "JSON",
            required: false,
            valueType: "Response headers",
            description: "The HTTP headers returned by the server. Useful for accessing content type, rate limits, and other metadata."
          }
        ]}
      />

      <BestPracticesSection
        dos={[
          "Use HTTPS URLs whenever possible for security",
          "Include proper authentication headers (API keys, tokens)",
          "Handle different HTTP status codes appropriately",
          "Set appropriate Content-Type headers",
          "Use GET for reading data, POST/PUT for writing",
          "Implement retry logic for transient failures"
        ]}
        donts={[
          "Don't hardcode sensitive API keys (use secure storage)",
          "Avoid making requests without error handling",
          "Don't ignore HTTP status codes",
          "Avoid sending large payloads without consideration",
          "Don't forget rate limiting for repeated requests",
          "Avoid using GET requests with request bodies"
        ]}
        proTip="When working with REST APIs, always check the API documentation for required headers, authentication methods, and expected request formats. Use template variables to dynamically construct URLs and request bodies."
      />

      {/* Related Resources - Custom format */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/docs/nodes/webhook">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Webhook Node</div>
                <div className="text-sm text-neutral-400">Receive HTTP requests to trigger workflows</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/llm-prompt">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">LLM Prompt Node</div>
                <div className="text-sm text-neutral-400">Process HTTP responses with AI</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/for-each">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">For Each Node</div>
                <div className="text-sm text-neutral-400">Process multiple HTTP responses</div>
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
