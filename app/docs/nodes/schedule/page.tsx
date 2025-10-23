"use client"

import React from 'react';
import { Clock, Calendar, Repeat, Settings } from 'lucide-react';
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

export default function ScheduleNode() {
  const prerequisites = [
    {
      icon: Calendar,
      title: "Scheduling Requirements",
      description: "Understanding of time-based workflow execution needs",
      requirements: [
        "Clear understanding of execution frequency needs",
        "Knowledge of appropriate timeframes for your use case",
        "Workflow design that can handle scheduled execution"
      ]
    },
    {
      icon: Repeat,
      title: "Automation Planning",
      description: "Strategic planning for recurring automation",
      requirements: [
        "Recurring Tasks: Identify processes that need regular execution",
        "Time Sensitivity: Understand when workflows should run",
        "Resource Management: Plan for continuous workflow execution"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "System capabilities needed",
      requirements: [
        "Scheduler System: Platform must support scheduled triggers",
        "Time Precision: System uses milliseconds for accuracy",
        "Execution Tracking: Timestamps provided for monitoring"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Clock}
        title="Schedule"
        description="Automatically start workflows on a schedule"
        nodeType="Trigger"
        category="Workflow Control"
        iconName="Clock"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Schedule</strong> node is a trigger node that automatically initiates workflow execution at specified intervals or times. This powerful automation tool enables recurring tasks, periodic reminders, and scheduled data processing without manual intervention. Perfect for maintenance tasks, regular reports, and time-based business processes."
        keyFeatures={[
          "<strong>Flexible Scheduling:</strong> Support for minute, hour, day, week, and month intervals",
          "<strong>Frequency Control:</strong> Customizable execution frequency for each timeframe",
          "<strong>Automatic Execution:</strong> Workflows start automatically without manual triggers",
          "<strong>Time Tracking:</strong> Provides execution timestamps for monitoring and logging",
          "<strong>Precise Timing:</strong> Uses millisecond precision for accurate scheduling",
          "<strong>Recurring Automation:</strong> Enables continuous, hands-off workflow execution"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "timeframe",
              type: "dropdown",
              required: true,
              valueType: "minute, hour, day, week, month",
              description: "The time unit for scheduling. Determines how often the workflow will execute. Options: minute (every X minutes), hour (every X hours), day (every X days), week (every X weeks), month (every X months)."
            },
            {
              name: "frequency",
              type: "number",
              required: true,
              valueType: "number",
              description: "How often to trigger within the chosen timeframe. For example, frequency=5 with timeframe=minute means every 5 minutes. Must be a positive integer."
            }
          ]
        }}
        outputFields={[
          {
            name: "executionTime",
            type: "string",
            required: false,
            valueType: "ISO 8601 timestamp",
            description: "The exact timestamp when this scheduled execution was triggered. Useful for logging, tracking, and time-based logic in workflows."
          },
          {
            name: "milliseconds",
            type: "number",
            required: false,
            valueType: "Milliseconds since epoch",
            description: "The execution time in milliseconds since Unix epoch. Provides precise timing for calculations and comparisons."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Daily Report Generation</CardTitle>
              <CardDescription>
                Generate and send reports every day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "timeframe": "day",
  "frequency": 1
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Triggers once per day to generate daily reports, summaries, or analytics.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Hourly Data Sync</CardTitle>
              <CardDescription>
                Synchronize data every 2 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "timeframe": "hour",
  "frequency": 2
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Runs every 2 hours to sync data between systems, databases, or services.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Weekly Maintenance</CardTitle>
              <CardDescription>
                Perform weekly cleanup or maintenance tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "timeframe": "week",
  "frequency": 1
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Executes once per week for maintenance, cleanup, or weekly summaries.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Real-time Monitoring</CardTitle>
              <CardDescription>
                Check system status every minute
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "timeframe": "minute",
  "frequency": 1
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Monitors systems, APIs, or services every minute for real-time alerting.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Choose appropriate frequencies to avoid overwhelming systems",
          "Use executionTime for logging and tracking",
          "Test schedules before deploying to production",
          "Consider time zones and daylight saving time",
          "Add error handling for scheduled workflows",
          "Monitor scheduled workflow execution rates"
        ]}
        donts={[
          "Don't set extremely frequent schedules (every minute) unless necessary",
          "Avoid overlapping executions if workflow takes longer than frequency",
          "Don't forget to disable schedules during maintenance",
          "Avoid scheduling during peak system load times",
          "Don't ignore failed scheduled executions",
          "Avoid hardcoding time-sensitive logic"
        ]}
        proTip="When building scheduled workflows, always include logging and monitoring. Use the executionTime output to track when jobs run and combine with error handling to ensure reliable automation."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Schedule Not Triggering",
            symptoms: "Workflow doesn't execute at expected times",
            solution: "Verify the schedule node is properly configured and enabled. Check that the workflow is published/active. Ensure the scheduler service is running."
          },
          {
            title: "Overlapping Executions",
            symptoms: "Multiple instances of the workflow run simultaneously",
            solution: "If your workflow takes longer than the schedule frequency, consider increasing the frequency or adding execution locks to prevent overlap."
          },
          {
            title: "Missed Executions",
            symptoms: "Schedule skips expected execution times",
            solution: "System may have been offline or overloaded. Implement logging to track missed executions and add retry logic if needed."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/trigger",
            title: "Manual Trigger Node",
            description: "Manually trigger workflows on demand"
          },
          {
            href: "/docs/nodes/webhook",
            title: "Webhook Node",
            description: "Trigger workflows via HTTP requests"
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
