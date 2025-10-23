"use client"

import React from 'react';
import { Search, Settings, Key, Globe } from 'lucide-react';
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

export default function GoogleSearchNode() {
  const prerequisites = [
    {
      icon: Key,
      title: "Google Custom Search API",
      description: "Must have Google Custom Search API credentials configured",
      requirements: [
        "Google Custom Search API key",
        "Google Custom Search Engine ID",
        "API access enabled in Google Cloud Console",
        "Sufficient API quota for search operations"
      ]
    },
    {
      icon: Globe,
      title: "Internet Access",
      description: "Network connectivity for Google Search API",
      requirements: [
        "Internet connectivity for API requests",
        "Access to Google's Custom Search API endpoints",
        "No firewall restrictions blocking Google APIs"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "System capabilities needed for search operations",
      requirements: [
        "HTTP Support: The node uses fetch API for Google Custom Search API",
        "JSON Processing: Handles structured search results",
        "Error Handling: Proper exception handling for API failures and rate limits"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Search}
        title="Google Search"
        description="Search Google and get structured results using the Google Custom Search API"
        nodeType="Action"
        category="General"
        iconName="Search"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Google Search</strong> node is an action node that performs web searches using Google's Custom Search API and returns structured search results. This powerful integration enables you to search the web programmatically within your workflows, perfect for research, content discovery, and information gathering."
        keyFeatures={[
          "<strong>Structured Results:</strong> Returns organized search results with titles, links, snippets, and metadata",
          "<strong>Customizable Query:</strong> Search with any text query using template variables",
          "<strong>Result Control:</strong> Specify the number of results to return (1-10)",
          "<strong>Rich Metadata:</strong> Includes display links, formatted URLs, and image thumbnails when available",
          "<strong>Performance Tracking:</strong> Returns search time and total result counts",
          "<strong>API Integration:</strong> Uses Google's official Custom Search JSON API for reliable results"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Search Query",
              type: "text",
              required: true,
              valueType: "string",
              description: "The search query to send to Google. This can include any search terms, phrases, or keywords you want to search for. Use template variables for dynamic searches."
            }
          ],
          optional: [
            {
              name: "Number of Results",
              type: "number",
              required: false,
              valueType: "number",
              description: "Number of search results to return (1-10). Defaults to 10 if not specified. The API will automatically validate and constrain this value."
            }
          ]
        }}
        outputFields={[
          {
            name: "Results",
            type: "json",
            required: true,
            valueType: "Array of search result objects",
            description: "Array of search results, each containing title, link, snippet, displayLink, formattedUrl, and optional image thumbnail."
          },
          {
            name: "Total Results",
            type: "string",
            required: true,
            valueType: "Total number of search results found",
            description: "The total number of search results available for the query, as reported by Google."
          },
          {
            name: "Search Time",
            type: "string",
            required: true,
            valueType: "Search execution time in seconds",
            description: "The time it took to execute the search operation, useful for performance monitoring."
          }
        ]}
      />

      <BestPracticesSection
        dos={[
          "Use specific, well-formed search queries for better results",
          "Leverage template variables for dynamic search terms",
          "Monitor the Total Results output to understand search scope",
          "Use appropriate result counts based on your workflow needs",
          "Handle the Results array properly in downstream nodes",
          "Consider search time for performance optimization",
          "Test different query formats to find what works best for your use case"
        ]}
        donts={[
          "Don't use overly broad or vague search terms",
          "Avoid exceeding the 10 result limit per search",
          "Don't ignore API rate limits and quota restrictions",
          "Avoid making too many concurrent search requests",
          "Don't assume all searches will return results",
          "Avoid using the node for real-time search without proper error handling",
          "Don't forget to handle cases where no results are found"
        ]}
        proTip="For research workflows, combine Google Search with LLM nodes to analyze and summarize search results. Use the Results array to extract specific information and the Search Time output to monitor performance."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "API Key Configuration Errors",
            symptoms: "Node fails with 'Google Custom Search API key is not configured' error",
            solution: "Verify that your Google Custom Search API key is properly set in the configuration. Check that the API key has the Custom Search API enabled in Google Cloud Console."
          },
          {
            title: "Search Engine ID Missing",
            symptoms: "Node fails with 'Google Custom Search Engine ID is not configured' error",
            solution: "Ensure your Google Custom Search Engine ID is configured. You can create a custom search engine at https://cse.google.com/ and get the Engine ID from the setup."
          },
          {
            title: "No Search Results",
            symptoms: "Search returns empty results array",
            solution: "Try different search terms, check if your query is too specific or too broad, and verify that the search engine is configured to search the entire web."
          },
          {
            title: "API Quota Exceeded",
            symptoms: "Node fails with API quota or rate limit errors",
            solution: "Check your Google Cloud Console for API quota usage, consider upgrading your quota if needed, and implement rate limiting in your workflows to avoid exceeding limits."
          },
          {
            title: "Network Connectivity Issues",
            symptoms: "Node fails with network or timeout errors",
            solution: "Verify internet connectivity, check firewall settings, and ensure that Google's API endpoints are accessible from your environment."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Analyze and process search results with AI"
          },
          {
            href: "/docs/nodes/fetch-webpage",
            title: "Fetch Webpage Node",
            description: "Retrieve content from search result URLs"
          },
          {
            href: "/docs/nodes/http-request",
            title: "HTTP Request Node",
            description: "Make custom API requests to other services"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Process multiple search results"
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
