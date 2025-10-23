"use client"

import React from 'react';
import { Repeat, List, Hash, Settings } from 'lucide-react';
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

export default function ForEachNode() {
  const prerequisites = [
    {
      icon: List,
      title: "Array Data Source",
      description: "Must have an array of strings to iterate over",
      requirements: [
        "Array data available from upstream nodes",
        "Data formatted as strings or JSON array",
        "Non-empty array with valid content"
      ]
    },
    {
      icon: Hash,
      title: "Downstream Nodes",
      description: "Workflow structure requirements",
      requirements: [
        "Connected Nodes: Must have downstream nodes connected to process each item",
        "Data Handling: Downstream nodes should be configured to use loop outputs",
        "Execution Flow: Workflow will execute downstream nodes for each array item"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "System capabilities needed",
      requirements: [
        "Loop Support: Workflow engine must support loop node execution",
        "Array Parsing: Ability to parse JSON arrays and comma-separated values",
        "Iteration Control: System tracks current item and iteration index"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Repeat}
        title="For Each"
        description="Iterate over an array of strings and execute downstream nodes once for each item"
        nodeType="Control Flow"
        category="Loop"
        iconName="Repeat"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>For Each</strong> node is a control flow node that takes an array of strings and causes the workflow to iterate over each item, executing downstream nodes separately for every value. This powerful looping mechanism allows you to process multiple items in sequence, making your workflows more dynamic and efficient."
        keyFeatures={[
          "<strong>Array Iteration:</strong> Processes each item in an array sequentially",
          "<strong>Downstream Execution:</strong> Executes connected nodes for each array item",
          "<strong>Item Access:</strong> Provides current item and index to downstream nodes",
          "<strong>Flexible Input:</strong> Accepts comma-separated lists or JSON arrays",
          "<strong>Loop Control:</strong> Manages workflow execution flow for repetitive tasks",
          "<strong>Data Processing:</strong> Enables batch processing of multiple data items"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "list",
              type: "array",
              required: true,
              valueType: "array_string",
              description: "An array of strings to iterate over. Can be provided as a JSON array ['item1', 'item2'] or comma-separated values 'item1,item2,item3'. Each item will be processed sequentially by downstream nodes."
            }
          ]
        }}
        outputFields={[
          {
            name: "item",
            type: "string",
            valueType: "Current iteration item",
            description: "The current item being processed in this iteration. This value changes with each loop iteration and is available to all downstream nodes."
          },
          {
            name: "index",
            type: "number",
            valueType: "Current iteration index",
            description: "The zero-based index of the current item in the array. Useful for tracking progress or making index-based decisions."
          },
          {
            name: "list",
            type: "array",
            valueType: "Original input array",
            description: "The complete original array being iterated over. Useful for reference or calculating total iterations."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Bulk Email Processing</CardTitle>
              <CardDescription>
                Send emails to multiple recipients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🔄 For Each (email list) → ✉️ Send Email → 📊 Log Result</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "list": [
    "user1@example.com",
    "user2@example.com",
    "user3@example.com"
  ]
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Sends an email to each recipient in the list, one by one, and logs the result for each send operation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Multi-URL Data Fetching</CardTitle>
              <CardDescription>
                Fetch data from multiple URLs sequentially
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🔄 For Each (URLs) → 🌐 Fetch Webpage → 🤖 AI Analysis → 💾 Store Results</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "list": [
    "https://example.com/page1",
    "https://example.com/page2",
    "https://example.com/page3"
  ]
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Fetches content from multiple URLs, analyzes each with AI, and stores the results.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Batch File Processing</CardTitle>
              <CardDescription>
                Process multiple files or documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Process a list of document IDs, file paths, or references, performing operations on each one individually.
                  </p>
                </div>
                <CodeBlock
                  code={`{
  "list": [
    "doc-id-001",
    "doc-id-002",
    "doc-id-003"
  ]
}`}
                  lang="json"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Validate array is not empty before passing to For Each",
          "Use the index output for progress tracking",
          "Handle errors in downstream nodes for each iteration",
          "Keep loop bodies focused on single, clear operations",
          "Consider rate limiting for API calls in loops",
          "Log iteration progress for debugging"
        ]}
        donts={[
          "Don't use extremely large arrays (>1000 items) without consideration",
          "Avoid nested For Each loops when possible (use array flattening instead)",
          "Don't ignore the original list output for reference",
          "Avoid side effects that depend on iteration order if not necessary",
          "Don't create infinite loops with recursive workflows",
          "Avoid unnecessary processing - filter arrays before looping"
        ]}
        proTip="When processing large arrays, consider adding delay nodes between iterations to avoid overwhelming external APIs or services. Use the index field to track progress and implement checkpointing for long-running loops."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Empty Array Error",
            symptoms: "Loop doesn't execute or skips entirely",
            solution: "Ensure the input array contains at least one item. Add validation before the For Each node to check array length."
          },
          {
            title: "Downstream Node Failures",
            symptoms: "Loop stops partway through",
            solution: "Add error handling in downstream nodes. Use If-Else nodes to check for success/failure and handle gracefully."
          },
          {
            title: "Performance Issues",
            symptoms: "Loop takes very long to complete",
            solution: "Reduce array size, optimize downstream nodes, or consider parallel processing alternatives if order doesn't matter."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/if-else",
            title: "If-Else Node",
            description: "Add conditional logic in loops"
          },
          {
            href: "/docs/nodes/randomize",
            title: "Randomize Node",
            description: "Select random items from arrays"
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
