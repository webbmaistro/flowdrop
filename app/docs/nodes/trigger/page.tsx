"use client"

import React from 'react';
import { PlayCircle, ClipboardList, Settings } from 'lucide-react';
import {
  NodeLayout,
  NodeHeader,
  OverviewSection,
  PrerequisitesSection,
  NodeConfigurationSection,
  BestPracticesSection,
  RelatedResourcesSection,
  TechnicalDetailsSection,
} from '@/components/docs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import CodeBlock from "@/components/ui/CodeBlock";

export default function TriggerNode() {
  const prerequisites = [
    {
      icon: ClipboardList,
      title: "Workflow Access",
      description: "Ability to open and run workflows from the builder",
      requirements: [
        "Manual access to the workflow in the editor",
        "Optional: API access to start runs programmatically"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "System capabilities needed for manual triggering",
      requirements: [
        "Trigger Mechanism: System capable of starting workflows on demand",
        "Optional Payload: Ability to provide initial data at run start"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={PlayCircle}
        title="Manual Trigger"
        description="Start a workflow manually from the editor or API"
        nodeType="Trigger"
        category="Workflow Control"
        iconName="PlayCircle"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Manual Trigger</strong> node acts as the entry point when you click Run in the editor. It's perfect for building, testing, and running workflows on demand without external events."
        keyFeatures={[
          "On-demand execution from the UI",
          "No external setup required",
          "Optional initial payload for downstream nodes"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          optional: [
            {
              name: "Initial Data",
              type: "JSON",
              required: false,
              valueType: "object",
              description: "Optional JSON payload you can pass when starting a run manually. This data is made available to downstream nodes as the workflow begins."
            }
          ]
        }}
        outputFields={[
          {
            name: "Execution Time",
            type: "string",
            valueType: "Timestamp when execution started",
            description: "ISO 8601 timestamp of when this manual execution started. Useful for logging and tracking runs."
          },
          {
            name: "Initial Data",
            type: "JSON (optional)",
            valueType: "Payload provided at run start",
            description: "Includes the optional payload passed when the workflow was started. If not provided, this will be empty."
          }
        ]}
      />

      <TechnicalDetailsSection
        details={[
          {
            title: "Trigger Execution",
            description: "How the manual trigger starts a workflow run",
            items: [
              {
                title: "Manual Start",
                description: "Like all trigger nodes, the Manual Trigger cannot be executed as part of a workflow graph. It acts as the starting point for a run initiated from the editor or an external call."
              },
              {
                title: "Execution Metadata",
                description: "When a run begins, the trigger provides execution metadata such as start time and any initial payload. Downstream nodes can read this data to tailor their behavior."
              }
            ]
          },
          {
            title: "Example: Starting with Payload",
            description: "Passing initial data when running a workflow",
            code: {
              content: `{
  "initialData": {
    "userId": "abc_123",
    "mode": "test"
  }
}`,
              language: "json",
              caption: "If supported by your environment, you can attach an initial JSON payload when starting the run. The Manual Trigger exposes this payload to the rest of the workflow."
            }
          }
        ]}
      />

      {/* Examples & Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Ad-hoc Data Processing</CardTitle>
              <CardDescription>
                Run workflows on demand for one-off tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Quickly execute a workflow to process a single file, send a test email, or verify logic
                    without setting up a schedule or webhook.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Configuration</h4>
                  <CodeBlock
                    code={`{
  "initialData": { "task": "process-once" }
}`}
                    lang="json"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Debugging & Development</CardTitle>
              <CardDescription>
                Iterate quickly during workflow design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>▶️ Manual Trigger → 🧪 Experimental Node → 🔄 If-Else → 📤 Output</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tips</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Use small payloads for quick iterations</li>
                    <li>Combine with If-Else to route test scenarios</li>
                    <li>Swap in real triggers (Schedule/Webhook) when ready</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Start simple workflows here before adding other triggers",
          "Pass minimal, well-structured initial data",
          "Log execution timestamps for traceability",
          "Transition to Webhook/Schedule when automating"
        ]}
        donts={[
          "Don't rely on manual runs for production automation",
          "Avoid very large payloads at start time",
          "Don't skip error handling in downstream nodes"
        ]}
        proTip="Use the Manual Trigger during early development to iterate rapidly. Once your flow stabilizes, switch to Schedule or Webhook to automate execution."
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/schedule",
            title: "Schedule Node",
            description: "Automatically run workflows on a schedule"
          },
          {
            href: "/docs/nodes/webhook",
            title: "Webhook Node",
            description: "Trigger workflows via HTTP requests"
          }
        ]}
      />
    </NodeLayout>
  );
}
