"use client"

import React from 'react';
import { Brain, MessageSquare, Settings } from 'lucide-react';
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

export default function LLMPromptNode() {
  const prerequisites = [
    {
      icon: Brain,
      title: "AI Service Access",
      description: "Must have access to Large Language Model services",
      requirements: [
        "LLM service access through NodeServiceRegistry",
        "Valid service credentials and API access",
        "Sufficient API credits for LLM operations"
      ]
    },
    {
      icon: MessageSquare,
      title: "Content Requirements",
      description: "Prompt design requirements",
      requirements: [
        "Prompt Design: Ability to write clear, effective prompts for the LLM",
        "Output Formatting: Understanding of desired response formats (HTML, text, etc.)",
        "Content Strategy: Clear understanding of what you want the AI to generate"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "System capabilities needed",
      requirements: [
        "LLM Integration: Access to LLM service through NodeServiceRegistry",
        "Network Access: Internet connectivity for AI service communication",
        "Error Handling: Proper exception handling for API failures"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Brain}
        title="LLM Prompt"
        description="Generate AI-powered text responses using Large Language Models"
        nodeType="Action"
        category="AI & Language"
        iconName="Brain"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>LLM Prompt</strong> node is an action node that sends prompts to Large Language Models and returns their responses. This powerful AI integration enables AI-powered text generation, analysis, and processing within workflows, perfect for creating dynamic content, analyzing text, or generating creative responses."
        keyFeatures={[
          "<strong>AI-Powered Generation:</strong> Uses Large Language Models for intelligent text responses",
          "<strong>Flexible Prompting:</strong> Send any text prompt to the LLM for processing",
          "<strong>Temperature Control:</strong> Adjust creativity vs. determinism in responses",
          "<strong>Vision Analysis:</strong> Include image URLs for multimodal AI processing",
          "<strong>Cost Tracking:</strong> Monitor API usage costs for budget management",
          "<strong>HTML Output:</strong> Generate formatted HTML content for emails and web applications"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Prompt",
              type: "text",
              required: true,
              valueType: "string",
              description: "The text prompt to send to the Large Language Model. This should clearly describe what you want the AI to generate, analyze, or process. For HTML output, include specific formatting instructions."
            }
          ],
          optional: [
            {
              name: "Temperature",
              type: "number",
              required: false,
              valueType: "number",
              description: "Controls the randomness of the LLM's response. Higher values (closer to 1) make the AI more creative and unpredictable, while lower values (closer to 0) make responses more deterministic and focused."
            },
            {
              name: "Image URLs",
              type: "text",
              required: false,
              valueType: "array_string",
              description: "Optional array of image URLs to include with the prompt for vision analysis. This enables multimodal AI processing where the LLM can analyze both text and visual content together."
            }
          ]
        }}
        outputFields={[
          {
            name: "Response",
            type: "string",
            required: true,
            valueType: "The response from the LLM",
            description: "Contains the AI-generated response based on your prompt. The format depends on your instructions - it can be plain text, formatted HTML, or any other text format you specify in your prompt."
          },
          {
            name: "Cost",
            type: "number (optional)",
            required: false,
            valueType: "API usage cost for the operation",
            description: "The cost of the LLM API call, returned when available. This helps track usage and manage API budgets across your workflows."
          }
        ]}
      />

      <BestPracticesSection
        dos={[
          "Be specific and clear in your prompts for better results",
          "Use appropriate temperature settings for your use case",
          "Include formatting instructions when you need specific output formats",
          "Test different prompt variations to find what works best",
          "Use template variables for dynamic content generation",
          "Monitor API costs and usage patterns",
          "Provide context and examples in your prompts when helpful"
        ]}
        donts={[
          "Don't use overly vague or ambiguous prompts",
          "Avoid extremely high temperatures for critical business content",
          "Don't forget to specify output format requirements",
          "Avoid prompts that could generate inappropriate content",
          "Don't ignore cost tracking and API usage limits",
          "Avoid overly complex prompts that may confuse the AI",
          "Don't assume the AI will understand industry jargon without context"
        ]}
        proTip="When generating HTML content, always include specific formatting instructions in your prompt. For emails, specify that you want 'nicely formatted visually appealing HTML' and instruct the LLM to output only raw HTML without markdown formatting or code blocks."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Service Connection Failures",
            symptoms: "Node fails with service connection or registry errors",
            solution: "Verify that the LLM service is properly registered in the NodeServiceRegistry and that all required credentials and configurations are set up correctly."
          },
          {
            title: "Poor Response Quality",
            symptoms: "LLM responses are irrelevant or low quality",
            solution: "Improve your prompt by being more specific, providing context, and using appropriate temperature settings. Test different prompt variations to find what works best."
          },
          {
            title: "HTML Formatting Issues",
            symptoms: "Generated HTML includes markdown or code blocks",
            solution: "Include explicit instructions in your prompt: \"Output only the HTML, not markdown. Do NOT output ```html or ```markdown. Just output the raw HTML.\""
          },
          {
            title: "High API Costs",
            symptoms: "Unexpectedly high costs from LLM API usage",
            solution: "Monitor the cost output from the node, optimize prompts to be more concise, and use appropriate temperature settings. Consider implementing cost controls in your workflows."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/image-generation",
            title: "Generate Image Node",
            description: "Create AI-generated images"
          },
          {
            href: "/docs/nodes/http-request",
            title: "HTTP Request Node",
            description: "Integrate with external AI services"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Process multiple items with AI"
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
