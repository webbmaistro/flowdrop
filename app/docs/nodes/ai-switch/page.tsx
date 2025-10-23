"use client"

import React from 'react';
import { Brain, Route, GitBranch } from 'lucide-react';
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

export default function AISwitchNode() {
  const prerequisites = [
    {
      icon: Brain,
      title: "AI Service Access",
      description: "Must have access to LLM services",
      requirements: [
        "LLM service properly configured and accessible",
        "Valid API keys and authentication set up",
        "Sufficient API credits for LLM calls"
      ]
    },
    {
      icon: Route,
      title: "Workflow Structure",
      description: "Must have multiple downstream paths",
      requirements: [
        "At least two downstream nodes connected",
        "Each node should have clear descriptions",
        "Well-designed routing logic and flow"
      ]
    },
    {
      icon: GitBranch,
      title: "Routing Strategy",
      description: "Understanding of AI-based decision making",
      requirements: [
        "Clear routing criteria and objectives",
        "Understanding of when to use AI vs rule-based routing",
        "Prompt design skills for effective routing"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Brain}
        title="AI Router"
        description="Use AI to intelligently route workflow execution based on prompt analysis"
        nodeType="Conditional"
        category="AI & Logic"
        iconName="AI Brain"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>AI Router</strong> node is a powerful conditional node that uses Large Language Models (LLMs) to analyze prompts and intelligently select which downstream node to follow. Instead of traditional rule-based routing, this node leverages AI to understand context and make smart decisions about workflow execution paths."
        keyFeatures={[
          "<strong>AI-Powered Routing:</strong> Uses LLMs to analyze prompts and select optimal execution paths",
          "<strong>Dynamic Node Analysis:</strong> Automatically discovers and analyzes available downstream nodes",
          "<strong>Letter-Based Selection:</strong> Maps downstream nodes to letters (A, B, C, D...) for easy AI reference",
          "<strong>Flexible Execution:</strong> Option to allow no execution if no suitable path exists",
          "<strong>Context-Aware Decisions:</strong> Considers node descriptions, types, and categories when routing",
          "<strong>Cost Tracking:</strong> Monitors LLM usage costs for optimization"
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
              description: "The prompt or context the AI will analyze to determine routing. Should clearly describe the situation, data, or condition that will inform the routing decision."
            }
          ],
          optional: [
            {
              name: "Allow No Execution",
              type: "boolean",
              required: false,
              defaultValue: "false",
              valueType: "boolean",
              description: "If true, allows the AI to choose not to execute any downstream node. If false, the AI must select one of the available paths."
            }
          ]
        }}
        outputFields={[
          {
            name: "Selected Path",
            type: "string",
            required: true,
            valueType: "Letter of selected node (A, B, C, etc.)",
            description: "The letter identifier of the node selected by the AI for execution. Empty if no execution was selected (when allowed)."
          },
          {
            name: "Reasoning",
            type: "string",
            required: true,
            valueType: "AI's explanation for the choice",
            description: "The AI's explanation of why it selected the particular path. Useful for debugging and understanding routing decisions."
          },
          {
            name: "Cost",
            type: "number",
            required: true,
            valueType: "LLM API usage cost",
            description: "The cost of the LLM API call used for routing decision. Helps track and optimize AI usage costs."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Customer Support Routing</CardTitle>
              <CardDescription>
                Route customer inquiries to appropriate departments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "prompt": "Customer message: {{customerMessage}}. Route to the most appropriate department.",
  "allowNoExecution": false
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Downstream nodes: A) Sales Team, B) Technical Support, C) Billing Department. 
                AI analyzes the customer message and routes to the best department.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Content Classification</CardTitle>
              <CardDescription>
                Classify and route content based on type or sentiment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "prompt": "Email content: {{emailBody}}. Classify as urgent, regular, or spam.",
  "allowNoExecution": true
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Routes emails to: A) Urgent Processing, B) Regular Inbox, C) Spam Filter, or no action if uncertain.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Workflow Selection</CardTitle>
              <CardDescription>
                Choose different processing pipelines based on data characteristics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "prompt": "Data type: {{dataType}}, size: {{dataSize}}, priority: {{priority}}. Select optimal processing pipeline.",
  "allowNoExecution": false
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Routes to: A) Fast Processing, B) Detailed Analysis, C) Batch Processing based on data characteristics.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Provide clear, descriptive prompts with relevant context",
          "Give downstream nodes meaningful names and descriptions",
          "Use the reasoning output for debugging and optimization",
          "Monitor costs to optimize AI usage",
          "Test with various scenarios to ensure reliable routing",
          "Consider using allowNoExecution for uncertain cases"
        ]}
        donts={[
          "Don't use vague or ambiguous prompts",
          "Avoid having too many downstream paths (limit to 4-6)",
          "Don't forget to provide context in the prompt",
          "Avoid using when simple If-Else would suffice",
          "Don't ignore the cost implications of frequent AI routing",
          "Avoid unclear node names that confuse the AI"
        ]}
        proTip="The AI Router is most effective when you have complex, nuanced routing decisions that are hard to express with simple rules. For straightforward comparisons, use the If-Else node to save on AI costs."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Inconsistent Routing",
            symptoms: "AI selects different paths for similar inputs",
            solution: "Make prompts more specific and provide more context. The AI's probabilistic nature means some variation is normal, but clear prompts reduce inconsistency."
          },
          {
            title: "Wrong Path Selected",
            symptoms: "AI consistently chooses inappropriate paths",
            solution: "Improve downstream node descriptions to help the AI understand each path's purpose. Add more context to the prompt about what criteria should drive the decision."
          },
          {
            title: "High Costs",
            symptoms: "Routing operations are expensive",
            solution: "Consider using If-Else nodes for simple conditions and reserve AI Router for complex decisions. Monitor the cost output and optimize prompt length."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/if-else",
            title: "If-Else Node",
            description: "Simple rule-based conditional routing"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate AI-powered text responses"
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
