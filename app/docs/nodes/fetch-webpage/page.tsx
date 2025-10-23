"use client"

import React from 'react';
import { Globe, Settings } from 'lucide-react';
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

export default function FetchWebpageNode() {
  const prerequisites = [
    {
      icon: Globe,
      title: "Web Access",
      description: "Must have access to the target webpages",
      requirements: [
        "Internet connectivity",
        "Target webpage is publicly accessible",
        "No authentication required for target page"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "Technical setup requirements",
      requirements: [
        "HTTP Support: The node uses the fetch API to make HTTP requests",
        "HTML Processing: Automatically strips script and style tags",
        "Content Extraction: Returns clean, readable text content"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Globe}
        title="Fetch Webpage"
        description="Extract content from any webpage with automatic HTML cleaning"
        nodeType="Action"
        category="Web Integration"
        iconName="Web"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Fetch Webpage</strong> node allows you to extract content from any webpage by making HTTP requests to specified URLs. This powerful automation tool automatically cleans the HTML by removing scripts and styles to provide clean, readable content for further processing in your workflows."
        keyFeatures={[
          "<strong>Universal Web Access:</strong> Fetch content from any publicly accessible webpage",
          "<strong>Automatic HTML Cleaning:</strong> Remove scripts, styles, and unnecessary markup",
          "<strong>Clean Content Output:</strong> Get readable text content for processing",
          "<strong>Simple Configuration:</strong> Just provide a URL to get started",
          "<strong>Error Handling:</strong> Built-in success/failure tracking"
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
              description: "The complete URL of the webpage to fetch. Must include the protocol (http:// or https://)."
            }
          ]
        }}
        outputFields={[
          {
            name: "Content",
            type: "string",
            required: false,
            valueType: "The cleaned webpage content",
            description: "The extracted and cleaned content from the webpage. Scripts and style tags have been removed for easier processing."
          },
          {
            name: "Success",
            type: "boolean",
            required: false,
            valueType: "Operation success status",
            description: "Returns true if the webpage was successfully fetched and processed, false otherwise."
          },
          {
            name: "Error",
            type: "string",
            required: false,
            valueType: "Error message if failed",
            description: "Contains the error message if the operation failed, null if successful."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Content Monitoring</CardTitle>
              <CardDescription>
                Monitor website content for changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "url": "https://example.com/status"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Fetch a status page regularly to monitor for service disruptions or updates.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Extraction</CardTitle>
              <CardDescription>
                Extract data from web pages for processing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "url": "https://blog.example.com/latest-post"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Fetch blog posts or articles for content aggregation, analysis, or summarization.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Web Scraping</CardTitle>
              <CardDescription>
                Extract structured data from websites
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "url": "https://news.example.com"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Fetch news headlines or product listings for automated processing and analysis.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use HTTPS URLs whenever possible for security",
          "Handle the Success field to check if fetch succeeded",
          "Add error handling for failed requests",
          "Respect robots.txt and website terms of service",
          "Cache results when appropriate to reduce requests",
          "Use rate limiting for bulk scraping operations"
        ]}
        donts={[
          "Don't fetch password-protected pages without authentication",
          "Avoid fetching very large pages (>10MB) without consideration",
          "Don't ignore the Error field when Success is false",
          "Avoid hammering websites with rapid requests",
          "Don't fetch pages that require JavaScript execution",
          "Avoid scraping without checking legal restrictions"
        ]}
        proTip="When processing the fetched content, combine this node with the LLM Prompt node to extract structured data, summarize content, or answer questions about the webpage."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Timeout Errors",
            symptoms: "Request fails with timeout error",
            solution: "The target webpage may be slow or unreachable. Check the URL is correct and the website is accessible. Consider implementing retry logic."
          },
          {
            title: "Empty Content",
            symptoms: "Content field is empty or minimal",
            solution: "The webpage may be dynamically generated with JavaScript. This node fetches static HTML only. For JavaScript-rendered pages, consider alternative scraping methods."
          },
          {
            title: "403 or 401 Errors",
            symptoms: "Access denied errors",
            solution: "The webpage requires authentication or has blocked automated access. Check if the page is publicly accessible and respects robots.txt."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/http-request",
            title: "HTTP Request Node",
            description: "Make custom HTTP requests"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Process fetched content with AI"
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
