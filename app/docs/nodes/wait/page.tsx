"use client"

import React from 'react';
import { Clock, Timer, Settings, Zap } from 'lucide-react';
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

export default function WaitNode() {
  const prerequisites = [
    {
      icon: Timer,
      title: "Workflow Timing",
      description: "Understanding of workflow execution timing",
      requirements: [
        "Clear understanding of when delays are needed in workflows",
        "Knowledge of rate limiting and API constraints",
        "Planning for time-based workflow execution"
      ]
    },
    {
      icon: Clock,
      title: "Time Unit Selection",
      description: "Understanding of time units and durations",
      requirements: [
        "Duration Value: Positive number for the wait duration",
        "Time Unit: Appropriate unit selection (seconds, minutes, hours, days)",
        "Message Context: Optional message for debugging and logging"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "System capabilities needed",
      requirements: [
        "Workflow Engine: Support for pause/resume functionality",
        "Time Conversion: Ability to convert time units to milliseconds",
        "Execution Context: Proper handling of workflow state during wait periods"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Clock}
        title="Wait"
        description="Pause workflow execution for a specified amount of time"
        nodeType="Control Flow"
        category="Flow Control"
        iconName="Clock"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Wait</strong> node is a control flow node that pauses workflow execution for a configurable duration. This powerful timing control enables rate limiting, delays, and time-based workflow execution. Perfect for handling API rate limits, creating delays between actions, or implementing time-based business logic."
        keyFeatures={[
          "<strong>Flexible Timing:</strong> Support for seconds, minutes, hours, and days",
          "<strong>Rate Limiting:</strong> Perfect for API rate limiting and avoiding throttling",
          "<strong>Business Hours:</strong> Wait for specific times or business hours",
          "<strong>Debugging Support:</strong> Optional message logging during wait periods",
          "<strong>Precise Control:</strong> Exact millisecond precision for timing",
          "<strong>Workflow State:</strong> Maintains workflow context during wait periods"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "duration",
              type: "number",
              required: true,
              valueType: "positive number",
              description: "How long to wait. Must be a positive number. The actual duration depends on the selected time unit."
            },
            {
              name: "unit",
              type: "dropdown",
              required: true,
              valueType: "seconds, minutes, hours, days",
              description: "The unit of time for the duration. Choose the most appropriate unit for your use case. Defaults to minutes."
            }
          ],
          optional: [
            {
              name: "message",
              type: "text",
              required: false,
              valueType: "string",
              description: "Optional message to log during the wait. Useful for debugging and understanding workflow execution. Examples: 'Waiting for business hours...', 'Rate limiting API calls...'"
            }
          ]
        }}
        outputFields={[
          {
            name: "waitedFor",
            type: "number",
            required: false,
            valueType: "milliseconds",
            description: "The actual duration waited in milliseconds. Useful for logging and verification of wait times."
          },
          {
            name: "completedAt",
            type: "string",
            required: false,
            valueType: "ISO timestamp",
            description: "When the wait completed, provided as an ISO timestamp. Useful for tracking workflow execution timing."
          },
          {
            name: "message",
            type: "string",
            required: false,
            valueType: "string",
            description: "The message that was provided during the wait. Returns the same message that was input, useful for audit trails."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>API Rate Limiting</CardTitle>
              <CardDescription>
                Wait between API calls to respect rate limits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "duration": 1,
  "unit": "seconds",
  "message": "Rate limiting API calls to avoid throttling"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Waits 1 second between API calls to respect rate limits. Essential for working with APIs that have strict rate limiting policies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Business Hours Delay</CardTitle>
              <CardDescription>
                Wait until business hours before sending notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "duration": 8,
  "unit": "hours",
  "message": "Waiting for business hours to send notification"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Waits 8 hours before sending notifications, ensuring they arrive during business hours. Perfect for time-sensitive business workflows.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Email Campaign Spacing</CardTitle>
              <CardDescription>
                Space out email sends to avoid spam filters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "duration": 5,
  "unit": "minutes",
  "message": "Spacing out email sends to avoid spam filters"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Waits 5 minutes between email sends to avoid triggering spam filters. Essential for email marketing automation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Processing Delay</CardTitle>
              <CardDescription>
                Wait for external systems to process data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "duration": 30,
  "unit": "seconds",
  "message": "Waiting for external system to process uploaded data"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Waits 30 seconds for external systems to process uploaded data before proceeding. Common in data integration workflows.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Long-term Scheduling</CardTitle>
              <CardDescription>
                Wait for extended periods (days) for scheduled tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "duration": 7,
  "unit": "days",
  "message": "Waiting for weekly report generation"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Waits 7 days for weekly report generation. Perfect for long-term scheduling and recurring business processes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use appropriate time units for your use case (seconds for API delays, hours for business logic)",
          "Add meaningful messages to help with debugging and workflow understanding",
          "Consider API rate limits when setting wait durations",
          "Use the output fields for logging and audit trails",
          "Test wait times in development before deploying to production",
          "Consider using shorter waits with loops for more flexible timing"
        ]}
        donts={[
          "Don't use extremely long waits (days) unless absolutely necessary",
          "Avoid using wait nodes for real-time requirements",
          "Don't forget to handle workflow timeouts for long waits",
          "Avoid using wait nodes as a substitute for proper scheduling",
          "Don't ignore the output fields for monitoring and debugging",
          "Avoid hardcoding wait times without considering different environments"
        ]}
        proTip="For complex timing requirements, consider using multiple Wait nodes with different durations rather than one very long wait. This provides more flexibility and better error handling. Use the output fields to log wait times and completion timestamps for better workflow monitoring."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Workflow Timeout",
            symptoms: "Workflow times out during wait period",
            solution: "Check your workflow timeout settings. For long waits (hours/days), ensure the workflow timeout is set appropriately or consider using scheduled workflows instead."
          },
          {
            title: "Incorrect Wait Duration",
            symptoms: "Wait duration doesn't match expected time",
            solution: "Verify the time unit selection. Remember that the duration is multiplied by the unit (e.g., 5 minutes = 5 * 60 * 1000 milliseconds). Check the output 'waitedFor' field to verify actual wait time."
          },
          {
            title: "API Rate Limiting Still Occurs",
            symptoms: "Still getting rate limited despite using wait node",
            solution: "Increase the wait duration or check if you're hitting multiple API endpoints. Some APIs have per-endpoint rate limits. Consider using longer waits or implementing more sophisticated rate limiting logic."
          },
          {
            title: "Workflow Execution Issues",
            symptoms: "Workflow doesn't resume after wait",
            solution: "Check workflow execution logs and ensure the workflow engine supports pause/resume functionality. Verify that the wait duration is reasonable and within system limits."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/schedule",
            title: "Schedule Node",
            description: "Trigger workflows on a schedule"
          },
          {
            href: "/docs/nodes/if-else",
            title: "If-Else Node",
            description: "Conditional logic for time-based decisions"
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
