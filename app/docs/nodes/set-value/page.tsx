"use client"

import React from 'react';
import { Settings, Database, Code } from 'lucide-react';
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

export default function SetValueNode() {
  const prerequisites = [
    {
      icon: Database,
      title: "Data Requirements",
      description: "Understanding of data types and value setting",
      requirements: [
        "Value Definition: Clear understanding of the constant value to set",
        "Type Selection: Knowledge of appropriate data types (string, number, boolean, JSON)",
        "JSON Formatting: Understanding of valid JSON syntax for complex objects"
      ]
    },
    {
      icon: Settings,
      title: "Use Case Planning",
      description: "Strategic planning for constant values",
      requirements: [
        "Configuration Values: Identify where constant values are needed in workflows",
        "Default Values: Plan for setting default values for downstream nodes",
        "Workflow Logic: Design workflows that can utilize constant values effectively"
      ]
    },
    {
      icon: Code,
      title: "Technical Requirements",
      description: "System capabilities needed",
      requirements: [
        "JSON Parsing: Ability to parse and validate JSON input",
        "Type Handling: Support for multiple data types (string, number, boolean, object, array)",
        "Value Validation: Proper handling of null/undefined values"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Settings}
        title="Set Value"
        description="Set a constant value (string, number, boolean, or JSON object) to use in your workflow"
        nodeType="Action"
        category="Data Translation"
        iconName="Settings"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Set Value</strong> node is a utility node that allows you to define and output a constant value of any type (string, number, boolean, array, or JSON object). This powerful tool enables you to set configuration values, default values, or constants in your workflows, making it perfect for providing static data to downstream nodes or establishing workflow parameters."
        keyFeatures={[
          "<strong>Multi-Type Support:</strong> Handles strings, numbers, booleans, arrays, and JSON objects",
          "<strong>JSON Parsing:</strong> Automatically parses valid JSON strings into objects",
          "<strong>Type Preservation:</strong> Maintains the original data type of your input",
          "<strong>Validation:</strong> Ensures values are not null or undefined",
          "<strong>Template Support:</strong> Works with template variables for dynamic values",
          "<strong>Universal Output:</strong> Provides consistent output format for any data type"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "value",
              type: "JSON",
              required: true,
              valueType: "any",
              description: "The constant value to set. Can be a string, number, boolean, array, or JSON object. For JSON, provide a valid JSON string. The node will automatically parse JSON strings into objects."
            }
          ]
        }}
        outputFields={[
          {
            name: "output",
            type: "JSON",
            required: true,
            valueType: "The value that was set",
            description: "Contains the value that was set, maintaining its original data type. This output can be used by downstream nodes in your workflow."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>String Configuration</CardTitle>
              <CardDescription>
                Set a constant string value for configuration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "value": "Welcome to our service!"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Sets a welcome message that can be used in emails, notifications, or other communications.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Numeric Default</CardTitle>
              <CardDescription>
                Set a default numeric value
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "value": 42
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Sets a default number that can be used for calculations, limits, or configuration values.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Boolean Flag</CardTitle>
              <CardDescription>
                Set a boolean configuration flag
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "value": true
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Sets a boolean flag that can control workflow behavior or feature toggles.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>JSON Object Configuration</CardTitle>
              <CardDescription>
                Set a complex configuration object
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "value": {
    "apiUrl": "https://api.example.com",
    "timeout": 5000,
    "retries": 3,
    "features": {
      "notifications": true,
      "analytics": false
    }
  }
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Sets a complex configuration object with nested properties for API settings and feature flags.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Array of Options</CardTitle>
              <CardDescription>
                Set an array of available options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "value": [
    "option1",
    "option2", 
    "option3"
  ]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Sets an array of options that can be used for dropdowns, random selection, or iteration.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use clear, descriptive values that are easy to understand",
          "Validate JSON syntax when using complex objects",
          "Use appropriate data types for your use case",
          "Consider using template variables for dynamic values",
          "Document the purpose of your constant values",
          "Test with different data types to ensure proper parsing"
        ]}
        donts={[
          "Don't use null or undefined values",
          "Avoid malformed JSON syntax",
          "Don't use overly complex nested objects unless necessary",
          "Avoid hardcoding sensitive information in values",
          "Don't forget to validate JSON when using object types",
          "Avoid using this node for values that should be dynamic"
        ]}
        proTip="When using JSON objects, always validate the syntax before setting the value. Use a JSON validator to ensure your object is properly formatted. For sensitive configuration values, consider using environment variables or secure storage instead of hardcoding them."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "JSON Parsing Errors",
            symptoms: "Node fails with JSON parsing errors",
            solution: "Ensure your JSON syntax is valid. Use a JSON validator to check your syntax. Common issues include missing quotes around keys, trailing commas, or unescaped characters."
          },
          {
            title: "Null/Undefined Values",
            symptoms: "Node fails with null or undefined value errors",
            solution: "Ensure the value field is not empty and contains a valid value. The node requires a non-null, non-undefined value to function properly."
          },
          {
            title: "Type Mismatch",
            symptoms: "Downstream nodes receive unexpected data types",
            solution: "Verify that the value you're setting matches the expected type for downstream nodes. Use the appropriate data type (string, number, boolean, object, array) for your use case."
          },
          {
            title: "Template Variable Issues",
            symptoms: "Template variables not resolving correctly",
            solution: "Ensure template variables are properly formatted with double curly braces {{variableName}} and that the referenced variables exist in your workflow context."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/if-else",
            title: "If-Else Node",
            description: "Use constant values in conditional logic"
          },
          {
            href: "/docs/nodes/randomize",
            title: "Randomize Node",
            description: "Use constant arrays for random selection"
          },
          {
            href: "/docs/nodes/for-each",
            title: "For Each Node",
            description: "Iterate over constant arrays"
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
