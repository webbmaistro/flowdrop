/**
 * NODE DOCUMENTATION PAGE TEMPLATE
 * 
 * Copy this file when creating a new node documentation page.
 * Replace all TODO comments with your node's specific information.
 * Delete unused sections if they don't apply to your node.
 * 
 * This template provides a consistent, maintainable structure for all node docs.
 */

"use client"

import React from 'react';
// TODO: Import your specific icon from lucide-react
import { Brain } from 'lucide-react';
import {
  NodeLayout,
  NodeHeader,
  OverviewSection,
  PrerequisitesSection,
  NodeConfigurationSection,
  BestPracticesSection,
  TroubleshootingSection,
  ExampleCard,
  RelatedResourcesSection
} from '@/components/docs';

export default function YourNodePage() {
  // TODO: Define prerequisites (delete if none)
  const prerequisites = [
    {
      icon: Brain,  // TODO: Change icon
      title: "Service Access",  // TODO: Update title
      description: "What access is required",  // TODO: Update description
      requirements: [
        "First requirement",  // TODO: List all requirements
        "Second requirement",
        "Third requirement"
      ]
    }
    // Add more prerequisite cards as needed
  ];

  return (
    <NodeLayout>
      {/* Header Section - Always Required */}
      <NodeHeader
        icon={Brain}  // TODO: Change to your node's icon
        title="Your Node Name"  // TODO: Update
        description="Brief one-line description of what this node does"  // TODO: Update
        nodeType="Action"  // TODO: Update (Action, Trigger, Conditional, etc.)
        category="AI & Language"  // TODO: Update category
        iconName="Brain"  // TODO: Update to match icon
        iconColor="primary"  // Always use "primary" for consistency
      />

      {/* Overview Section - Always Recommended */}
      <OverviewSection
        description="Detailed description of what this node does, when to use it, and what problems it solves."  // TODO: Update
        keyFeatures={[
          "First key feature with bold emphasis",  // TODO: List 4-6 key features
          "Second key feature",
          "Third key feature",
          "Fourth key feature"
        ]}
      />

      {/* Prerequisites Section - Use if node requires setup */}
      <PrerequisitesSection items={prerequisites} />

      {/* Node Configuration Section - Always Recommended */}
      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Field Name",  // TODO: Update
              type: "text",  // TODO: Update (text, dropdown, number, etc.)
              required: true,
              valueType: "string",  // TODO: Update (string, number, object, etc.)
              description: "What this field does and how to use it"  // TODO: Update
            }
            // Add more required fields
          ],
          optional: [
            {
              name: "Optional Field",  // TODO: Update
              type: "number",  // TODO: Update
              required: false,
              defaultValue: "0.7",  // TODO: Update if has default
              valueType: "number",  // TODO: Update
              description: "What this optional field does"  // TODO: Update
            }
            // Add more optional fields
          ]
        }}
        outputFields={[
          {
            name: "Output Name",  // TODO: Update
            type: "string",  // TODO: Update
            required: false,  // Output fields are typically not required
            valueType: "Description of output",  // TODO: Update
            description: "Detailed explanation of what this output contains"  // TODO: Update
          }
          // Add more output fields
        ]}
      />

      {/* Examples Section - Highly Recommended */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        <div className="space-y-6">
          
          <ExampleCard
            title="Basic Example"  // TODO: Update
            description="Simple use case description"  // TODO: Update
            code={`{
  "field1": "value1",
  "field2": "value2"
}`}  // TODO: Update with real example
            codeLanguage="json"
          />

          <ExampleCard
            title="Advanced Example"  // TODO: Update
            description="More complex use case"  // TODO: Update
            code={`{
  "field1": "complex value",
  "field2": 42
}`}  // TODO: Update with real example
            codeLanguage="json"
          />

        </div>
      </section>

      {/* Best Practices Section - Always Recommended */}
      <BestPracticesSection
        dos={[
          "Do this first thing",  // TODO: List 4-7 best practices
          "Do this second thing",
          "Do this third thing"
        ]}
        donts={[
          "Don't do this",  // TODO: List 4-7 anti-patterns
          "Avoid doing this",
          "Never do this"
        ]}
        securityItems={[  // Optional - delete if not security-sensitive
          "Security tip one",  // TODO: List security considerations
          "Security tip two"
        ]}
        proTip="A helpful tip that makes using this node easier or more effective."  // TODO: Update
      />

      {/* Troubleshooting Section - Recommended if node is complex */}
      <TroubleshootingSection
        issues={[
          {
            title: "Common Issue Name",  // TODO: Update
            symptoms: "What the user experiences when this issue occurs",  // TODO: Update
            solution: "How to fix this issue step by step"  // TODO: Update
          }
          // Add more common issues
        ]}
      />

      {/* Related Resources Section - Always Recommended */}
      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/related-node",  // TODO: Update
            title: "Related Node Name",  // TODO: Update
            description: "What this related node does"  // TODO: Update
          }
          // Add 2-4 related resources
        ]}
      />
    </NodeLayout>
  );
}

