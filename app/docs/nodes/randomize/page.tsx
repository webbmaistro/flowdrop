"use client"

import React from 'react';
import { Shuffle, List, Database } from 'lucide-react';
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

export default function RandomizeNode() {
  const prerequisites = [
    {
      icon: List,
      title: "Data Requirements",
      description: "Understanding of array data structures and random selection needs",
      requirements: [
        "Array input with multiple values to choose from",
        "Understanding of random selection use cases",
        "Workflow design that can handle random outcomes"
      ]
    },
    {
      icon: Database,
      title: "Use Case Planning",
      description: "Strategic planning for random selection",
      requirements: [
        "Random Selection: Identify where variety or unpredictability is needed",
        "Array Processing: Plan how to handle the selected value and index",
        "Workflow Logic: Design workflows that can work with random outcomes"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Shuffle}
        title="Randomize"
        description="Randomly select one item from a list"
        nodeType="Action"
        category="Data Translation"
        iconName="Shuffle"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Randomize</strong> node is a utility node that randomly selects a single value from an input array. This powerful tool enables variety in your workflows, random decision-making, and unpredictable outcomes. Perfect for creating dynamic content, random sampling, or adding randomness to automated processes."
        keyFeatures={[
          "<strong>Random Selection:</strong> Uses Math.random() for true randomness",
          "<strong>Array Processing:</strong> Works with any array of string values",
          "<strong>Complete Output:</strong> Returns selected value, index, and original array",
          "<strong>Error Handling:</strong> Gracefully handles empty arrays and invalid inputs",
          "<strong>Index Tracking:</strong> Provides the position of the selected item",
          "<strong>Data Preservation:</strong> Maintains the original array for further processing"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "input",
              type: "array",
              required: true,
              valueType: "array_string",
              description: "An array of values to randomly select from. Must contain at least one item. The node will pick one random value from this array using Math.random()."
            }
          ]
        }}
        outputFields={[
          {
            name: "randomValue",
            type: "string",
            valueType: "The randomly selected value from the array",
            description: "Contains the randomly selected value from the input array. This is the primary output you'll typically use in your workflow."
          },
          {
            name: "randomIndex",
            type: "number",
            valueType: "Index position of the selected value",
            description: "The index position (0-based) of the selected value in the original array. Useful for tracking which item was selected."
          },
          {
            name: "originalArray",
            type: "array",
            valueType: "The original input array",
            description: "The complete original array that was provided as input. Useful for further processing or reference."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Random Greeting Selection</CardTitle>
              <CardDescription>
                Add variety to automated messages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "input": [
    "Hello!",
    "Hi there!",
    "Greetings!",
    "Hey!",
    "Welcome!"
  ]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Randomly selects one greeting from the array for use in emails, notifications, or chat messages.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>A/B Testing Content</CardTitle>
              <CardDescription>
                Randomly assign test variants
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "input": [
    "variant-a-cta",
    "variant-b-cta",
    "variant-c-cta"
  ]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Randomly assigns users to different test variants for A/B testing campaigns.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Random Team Assignment</CardTitle>
              <CardDescription>
                Distribute tasks randomly among team members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "input": [
    "alice@company.com",
    "bob@company.com",
    "charlie@company.com"
  ]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Randomly assigns incoming tasks or support tickets to available team members.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Provide arrays with multiple options for true randomness",
          "Handle empty array cases in your workflow logic",
          "Use randomIndex when you need to track which option was selected",
          "Combine with If-Else nodes for conditional random routing",
          "Test your workflow with all possible random outcomes",
          "Store random selections for audit trails if needed"
        ]}
        donts={[
          "Don't use empty arrays as input",
          "Avoid assuming specific outcomes in downstream nodes",
          "Don't use for cryptographic randomness",
          "Avoid very large arrays if performance is critical",
          "Don't forget to handle all possible random values",
          "Avoid using single-item arrays (defeats the purpose)"
        ]}
        proTip="When testing workflows with random nodes, try running them multiple times to ensure all possible outcomes are handled correctly. Consider logging the randomIndex for debugging and analytics purposes."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Empty Array Error",
            symptoms: "Node fails with empty array or null input",
            solution: "Ensure your input array contains at least one value. Add conditional logic before the Randomize node to check array length."
          },
          {
            title: "Unexpected Values",
            symptoms: "Selected values don't match expectations",
            solution: "Verify the input array format is correct (array of strings). Check that template variables are properly resolved before reaching this node."
          },
          {
            title: "Not Random Enough",
            symptoms: "Same values appear frequently",
            solution: "This is normal with true randomness. Math.random() is pseudorandom but sufficient for most use cases. For cryptographic randomness, use a different approach."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/if-else",
            title: "If-Else Node",
            description: "Route random values conditionally"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Process arrays before randomizing"
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
