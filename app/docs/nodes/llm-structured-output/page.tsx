"use client"

import React from 'react';
import { Brain, Code, FileText, Settings } from 'lucide-react';
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

export default function LLMStructuredOutputNode() {
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
      icon: Code,
      title: "JSON Schema Knowledge",
      description: "Understanding of JSON Schema structure",
      requirements: [
        "JSON Schema Design: Ability to define structured output schemas",
        "Schema Validation: Understanding of JSON Schema validation rules",
        "Data Modeling: Clear definition of expected output structure"
      ]
    },
    {
      icon: FileText,
      title: "Content Requirements",
      description: "Prompt and system prompt design",
      requirements: [
        "Prompt Design: Clear instructions for structured output generation",
        "System Prompt: Optional system-level instructions for behavior control",
        "Context Understanding: Clear communication of desired output format"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "System capabilities needed",
      requirements: [
        "LLM Integration: Access to LLM service through NodeServiceRegistry",
        "Schema Validation: JSON Schema validation and Zod conversion capabilities",
        "File Processing: PDF file upload and processing capabilities (optional)",
        "Error Handling: Proper exception handling for schema and API failures"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Brain}
        title="LLM Structured Output"
        description="Generate JSON following a JSON Schema using an LLM"
        nodeType="Action"
        category="AI & Language"
        iconName="Brain"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>LLM Structured Output</strong> node generates structured JSON responses from Large Language Models using a provided JSON Schema. This powerful AI integration ensures consistent, validated output that can be used as input for downstream nodes, making it perfect for creating structured data, API responses, or any scenario requiring consistent JSON output."
        keyFeatures={[
          "<strong>Schema-Driven Output:</strong> Uses JSON Schema to enforce consistent output structure",
          "<strong>Automatic Validation:</strong> Validates LLM responses against the provided schema",
          "<strong>Zod Integration:</strong> Converts JSON Schema to Zod for runtime validation",
          "<strong>PDF Support:</strong> Include PDF files for multimodal processing",
          "<strong>System Prompts:</strong> Optional system-level instructions for better control",
          "<strong>Cost Tracking:</strong> Monitor API usage costs for budget management",
          "<strong>Structured Data:</strong> Perfect for generating consistent data for downstream nodes"
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
              description: "The main user prompt sent to the LLM. This should clearly describe what structured data you want the AI to generate, following the provided JSON schema."
            },
            {
              name: "Schema Fields",
              type: "json",
              required: true,
              valueType: "json",
              description: "JSON Schema object that defines and enforces the output structure. The LLM will generate JSON that conforms to this schema. Use the JSON Schema standard format."
            }
          ],
          optional: [
            {
              name: "Model",
              type: "dropdown",
              required: false,
              valueType: "string",
              description: "Which LLM model to use for generation. If not specified, uses the default model."
            },
            {
              name: "System Prompt",
              type: "text",
              required: false,
              valueType: "string",
              description: "Optional system prompt to steer the LLM's behavior and provide context for structured output generation."
            },
            {
              name: "PDF",
              type: "file_upload_pdf",
              required: false,
              valueType: "number",
              description: "Optional PDF files to include with the prompt for multimodal processing. The LLM can analyze both text and visual content from the PDF."
            }
          ]
        }}
        outputFields={[
          {
            name: "JSON",
            type: "json",
            required: true,
            valueType: "The structured JSON object returned by the LLM",
            description: "Contains the AI-generated JSON response that conforms to the provided schema. This structured data can be used as input for downstream nodes."
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
          "Design clear, well-structured JSON schemas for consistent output",
          "Use descriptive field names and types in your schema",
          "Provide clear prompts that specify the desired output format",
          "Include examples in your prompts when helpful for complex schemas",
          "Use system prompts to provide context and behavior guidelines",
          "Test your schema with sample prompts before production use",
          "Monitor API costs and optimize prompts for efficiency",
          "Use appropriate model selection based on complexity requirements"
        ]}
        donts={[
          "Don't use overly complex schemas that may confuse the LLM",
          "Avoid ambiguous field names or unclear schema definitions",
          "Don't forget to validate your JSON schema before use",
          "Avoid prompts that don't clearly specify the output format",
          "Don't ignore schema validation errors - fix them promptly",
          "Avoid overly restrictive schemas that limit useful output",
          "Don't assume the LLM will understand complex schema relationships without context"
        ]}
        proTip="When designing JSON schemas, start simple and add complexity gradually. Include clear descriptions in your schema properties and provide examples in your prompts. For complex nested structures, consider breaking them into smaller, more manageable schemas."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Invalid JSON Schema",
            symptoms: "Node fails with schema validation errors",
            solution: "Verify that your JSON schema follows the JSON Schema standard. Use online JSON schema validators to check your schema before using it in the node."
          },
          {
            title: "Schema Validation Failures",
            symptoms: "LLM output doesn't match the provided schema",
            solution: "Improve your prompt to be more specific about the expected output format. Include examples in your prompt and ensure the schema is not overly restrictive."
          },
          {
            title: "Poor Output Quality",
            symptoms: "Generated JSON is irrelevant or doesn't follow the schema",
            solution: "Enhance your prompt with clear instructions, provide context, and consider using system prompts to guide the LLM's behavior. Test different prompt variations."
          },
          {
            title: "PDF Processing Issues",
            symptoms: "PDF files are not processed correctly",
            solution: "Ensure PDF files are properly uploaded and accessible. Check that the file format is supported and the content is readable by the LLM."
          },
          {
            title: "High API Costs",
            symptoms: "Unexpectedly high costs from LLM API usage",
            solution: "Monitor the cost output from the node, optimize prompts to be more concise, and consider using more efficient models for simpler tasks."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Basic LLM text generation without structured output"
          },
          {
            href: "/docs/nodes/ai-switch",
            title: "AI Switch Node",
            description: "Use structured output for AI-powered decision making"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Process structured data arrays in workflows"
          },
          {
            href: "/docs/nodes/http-request",
            title: "HTTP Request Node",
            description: "Send structured data to external APIs"
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
