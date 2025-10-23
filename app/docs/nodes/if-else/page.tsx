"use client"

import React from 'react';
import { GitBranch, Route, Split, Settings } from 'lucide-react';
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

export default function IfElseNode() {
  const prerequisites = [
    {
      icon: Route,
      title: "Workflow Structure",
      description: "Must have downstream nodes for branching paths",
      requirements: [
        "At least two downstream nodes connected",
        "Clear understanding of true/false paths",
        "Proper workflow logic design"
      ]
    },
    {
      icon: Split,
      title: "Data Requirements",
      description: "Understanding of data types and comparisons",
      requirements: [
        "Input Values: Two comparable values for the condition evaluation",
        "Type Compatibility: Understanding of how types will be cast and compared",
        "Operation Logic: Clear understanding of the comparison operation being used"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "System capabilities needed",
      requirements: [
        "Branching Support: Workflow engine must support conditional branching",
        "Type Casting: Ability to cast values to string, boolean, or number types",
        "Path Routing: System routes execution to branch 0 (true) or branch 1 (false)"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={GitBranch}
        title="If-Else"
        description="Conditionally route workflow execution based on typed comparison"
        nodeType="Conditional"
        category="Control Flow"
        iconName="GitBranch"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>If-Else</strong> node is a conditional node that compares two inputs after casting them to specified types and routes workflow execution to one of two paths based on the result. This powerful branching logic enables complex decision-making in your workflows, allowing you to create dynamic paths based on data comparisons and conditions."
        keyFeatures={[
          "<strong>Type Casting:</strong> Automatically casts inputs to specified types before comparison",
          "<strong>Flexible Operations:</strong> Supports equals, does not equal, contains, and does not contain",
          "<strong>Dual Branching:</strong> Routes to true path (0) or false path (1) based on condition result",
          "<strong>Type Safety:</strong> Handles string, boolean, and number types with proper casting",
          "<strong>Condition Tracking:</strong> Returns the evaluated boolean result for downstream use",
          "<strong>Dynamic Routing:</strong> Enables complex workflow logic and decision trees"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "inputType",
              type: "dropdown",
              required: true,
              valueType: "string, boolean, number",
              description: "The type to cast both inputs to before comparison. All comparisons happen after casting to this type. Choose the type that best matches your data."
            },
            {
              name: "operation",
              type: "dropdown",
              required: true,
              valueType: "equals, does not equal, contains, does not contain",
              description: "The comparison operation to perform. Equals checks for exact match, does not equal checks for difference, contains checks if first value includes second (string/array), does not contain checks if first value excludes second."
            },
            {
              name: "input1",
              type: "text",
              required: true,
              valueType: "any",
              description: "The first value to compare. Will be cast to the specified inputType before comparison."
            },
            {
              name: "input2",
              type: "text",
              required: true,
              valueType: "any",
              description: "The second value to compare. Will be cast to the specified inputType before comparison."
            }
          ]
        }}
        outputFields={[
          {
            name: "condition",
            type: "boolean",
            required: false,
            valueType: "Result of the comparison",
            description: "The boolean result of the comparison operation. True if the condition is met, false otherwise. This value is also used to determine which branch path to execute."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>String Comparison</CardTitle>
              <CardDescription>
                Check if email domain matches company domain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "inputType": "string",
  "operation": "contains",
  "input1": "{{userEmail}}",
  "input2": "@company.com"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Routes to true path if the email contains "@company.com", false path otherwise. Useful for filtering internal vs external users.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Number Threshold</CardTitle>
              <CardDescription>
                Route based on numeric value comparison
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "inputType": "number",
  "operation": "equals",
  "input1": "{{orderTotal}}",
  "input2": "0"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Checks if order total equals zero. Can be used to skip payment processing for free orders.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Boolean Status Check</CardTitle>
              <CardDescription>
                Route based on boolean flag
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "inputType": "boolean",
  "operation": "equals",
  "input1": "{{user.isVerified}}",
  "input2": "true"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Routes verified users to one path and unverified users to another path for different handling.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Exclusion Check</CardTitle>
              <CardDescription>
                Check if value does NOT contain unwanted content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "inputType": "string",
  "operation": "does not contain",
  "input1": "{{emailSubject}}",
  "input2": "spam"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Filters out emails that contain "spam" in the subject line.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Choose the correct input type for your data",
          "Use clear, meaningful comparison values",
          "Connect different nodes to each branch for proper routing",
          "Test both true and false paths in your workflow",
          "Use the condition output for debugging and logging",
          "Consider type casting behavior when designing conditions"
        ]}
        donts={[
          "Don't forget that types are cast before comparison",
          "Avoid using contains operation with number types",
          "Don't create conditions that always evaluate to the same result",
          "Avoid deeply nested if-else chains (consider AI Router instead)",
          "Don't ignore the condition output for audit trails",
          "Avoid comparing incompatible data types without proper casting"
        ]}
        proTip="When working with complex conditions, use the condition output field to log the result. This makes debugging much easier. For multiple conditions, consider using the AI Router node instead of chaining many If-Else nodes."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Unexpected Routing",
            symptoms: "Workflow routes to wrong branch",
            solution: "Check the inputType and ensure both values are being cast correctly. Remember that casting happens before comparison. Test with explicit values first before using template variables."
          },
          {
            title: "Contains Not Working",
            symptoms: "Contains operation doesn't find substring",
            solution: "Ensure inputType is set to 'string'. The contains operation works on strings and arrays. Check for case sensitivity and whitespace issues."
          },
          {
            title: "Boolean Comparison Issues",
            symptoms: "Boolean comparisons give unexpected results",
            solution: "When using boolean type, ensure values are exactly 'true' or 'false'. Truthy values (like '1', 'yes') may not cast as expected. Use explicit boolean values."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/ai-switch",
            title: "AI Router Node",
            description: "AI-powered multi-way branching"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Loop through items with conditions"
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
