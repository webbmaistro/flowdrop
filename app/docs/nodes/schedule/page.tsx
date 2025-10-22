"use client"

import React from 'react';
import { Clock, Settings, Code, AlertTriangle, CheckCircle, ExternalLink, Zap, Calendar, Repeat } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, RelatedResourceCard } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function ScheduleNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-orange-500/20 rounded-lg">
            <Clock className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Schedule</h1>
            <p className="text-neutral-400">Automatically start workflows on a schedule</p>
          </div>
        </div>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Node Type</h3>
              <p className="text-neutral-400">Trigger</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Category</h3>
              <p className="text-neutral-400">Workflow Control</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">Clock</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Schedule</strong> node is a trigger node that automatically initiates workflow execution 
          at specified intervals or times. This powerful automation tool enables recurring tasks, periodic 
          reminders, and scheduled data processing without manual intervention. Perfect for maintenance tasks, 
          regular reports, and time-based business processes.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>Flexible Scheduling:</strong> Support for minute, hour, day, week, and month intervals</li>
            <li>• <strong>Frequency Control:</strong> Customizable execution frequency for each timeframe</li>
            <li>• <strong>Automatic Execution:</strong> Workflows start automatically without manual triggers</li>
            <li>• <strong>Time Tracking:</strong> Provides execution timestamps for monitoring and logging</li>
            <li>• <strong>Precise Timing:</strong> Uses millisecond precision for accurate scheduling</li>
            <li>• <strong>Recurring Automation:</strong> Enables continuous, hands-off workflow execution</li>
          </ul>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
        
        <div className="space-y-4">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-orange-500" />
                Scheduling Requirements
              </CardTitle>
              <CardDescription>
                Understanding of time-based workflow execution needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Clear understanding of execution frequency needs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Knowledge of appropriate timeframes for your use case</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Workflow design that can handle scheduled execution</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Repeat className="w-5 h-5 text-purple-500" />
                Automation Planning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>Recurring Tasks:</strong> Identify processes that need regular execution
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Time Sensitivity:</strong> Understand when workflows should run
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Resource Management:</strong> Plan for continuous workflow execution
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-green-500" />
                Technical Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>Scheduler System:</strong> Access to workflow scheduling infrastructure
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Time Constants:</strong> Access to millisecond time constants (MS_IN_MINUTE, etc.)
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Trigger Mechanism:</strong> System capable of time-based workflow activation
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Node Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Node Configuration</h2>
        
        <CollapsibleSection title="Input Fields" defaultOpen={true}>
          <div className="space-y-4">
            <Card className="border-neutral-700">
              <CardHeader>
                <CardTitle>Required Fields</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Timeframe</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">dropdown</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-green-500">Yes</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Value Type:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="text-neutral-400 text-sm">Options:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {['minute', 'hour', 'day', 'week', 'month'].map((option) => (
                          <span key={option} className="bg-neutral-700 px-2 py-1 rounded text-xs text-neutral-200">
                            {option}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The time unit for the schedule. Choose from minute, hour, day, week, or month intervals. 
                      This determines the base unit of time for your scheduling frequency.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Frequency</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">number</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-green-500">Yes</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Value Type:</span>
                        <span className="ml-2 text-neutral-200">number</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      How often to run the workflow. For example, with timeframe &quot;day&quot; and frequency &quot;2&quot;, 
                      the workflow runs every 2 days. With timeframe &quot;hour&quot; and frequency &quot;1&quot;, it runs every hour.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-neutral-700">
              <CardHeader>
                <CardTitle>Optional Fields</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="text-neutral-400 mb-2">
                    <Clock className="w-12 h-12 mx-auto mb-3 text-orange-500/50" />
                  </div>
                  <p className="text-neutral-400">
                    The Schedule node has <strong>no optional fields</strong>. All configuration is handled 
                    through the two required inputs: timeframe and frequency.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Output Fields" defaultOpen={false}>
          <div className="space-y-4">
            <Card className="border-neutral-700">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Execution Time</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">Timestamp when execution occurred</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Contains the ISO 8601 timestamp of when this scheduled execution occurred. This is useful 
                      for logging, monitoring, and tracking when workflows were triggered by the schedule.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CollapsibleSection>
      </section>

      {/* Technical Details */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Schedule Calculation Process</CardTitle>
              <CardDescription>
                How the node calculates execution intervals and timing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Timeframe Resolution</h4>
                  <p className="text-neutral-400 text-sm">
                    The <code className="bg-neutral-700 px-1 rounded">getTimeframeMs()</code> method converts human-readable timeframes 
                    to millisecond constants: <code className="bg-neutral-700 px-1 rounded">MS_IN_MINUTE</code>, <code className="bg-neutral-700 px-1 rounded">MS_IN_HOUR</code>, 
                    <code className="bg-neutral-700 px-1 rounded">MS_IN_DAY</code>, <code className="bg-neutral-700 px-1 rounded">MS_IN_WEEK</code>, and <code className="bg-neutral-700 px-1 rounded">MS_IN_MONTH</code>.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Interval Calculation</h4>
                  <p className="text-neutral-400 text-sm">
                    The <code className="bg-neutral-700 px-1 rounded">getTimeBetweenExecutionsMs()</code> method calculates the total 
                    milliseconds between executions by multiplying the timeframe milliseconds by the frequency value. 
                    This provides precise timing for the scheduler system.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Template Resolution</h4>
                  <p className="text-neutral-400 text-sm">
                    Both input fields use <code className="bg-neutral-700 px-1 rounded">parseValueTemplate()</code> to resolve any 
                    template variables or dynamic values, allowing for flexible scheduling configurations that 
                    can change based on context or external data.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Trigger Execution</CardTitle>
              <CardDescription>
                How the scheduled trigger node handles time-based activation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Execution Prevention</h4>
                  <p className="text-neutral-400 text-sm">
                    Like all trigger nodes, the Schedule node cannot be executed as part of a workflow graph. 
                    When <code className="bg-neutral-700 px-1 rounded">_execute()</code> is called, it throws an error indicating 
                    it&apos;s a trigger node.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Scheduled Triggering</h4>
                  <p className="text-neutral-400 text-sm">
                    The <code className="bg-neutral-700 px-1 rounded">_trigger()</code> method is called by the scheduler system 
                    at the calculated intervals. It returns the current execution timestamp, providing a record 
                    of when the scheduled execution occurred.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Timestamp Generation</h4>
                  <p className="text-neutral-400 text-sm">
                    Each trigger execution generates a new ISO 8601 timestamp using <code className="bg-neutral-700 px-1 rounded">new Date().toISOString()</code>. 
                    This ensures accurate tracking of when each scheduled workflow execution began.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Examples & Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Daily Data Processing</CardTitle>
              <CardDescription>
                Process data and generate reports on a daily schedule
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically process daily data, generate reports, and send them to stakeholders every 
                    morning without manual intervention.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Configuration</h4>
                  <CodeBlock
                    code={`{
  "timeframe": "day",
  "frequency": 1
}`}
                    lang="json"
                  />
                  <p className="text-neutral-400 mt-2 text-sm">
                    This runs the workflow every 1 day (daily) at the scheduled time.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>⏰ Schedule (daily) → 📊 Data Processing → 📈 Report Generation → 📧 Email Distribution</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Weekly Maintenance Tasks</CardTitle>
              <CardDescription>
                Run system maintenance and cleanup tasks weekly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically perform system maintenance, database cleanup, log rotation, and performance 
                    monitoring on a weekly basis.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Configuration</h4>
                  <CodeBlock
                    code={`{
  "timeframe": "week",
  "frequency": 1
}`}
                    lang="json"
                  />
                  <p className="text-neutral-400 mt-2 text-sm">
                    This runs the workflow every 1 week (weekly) at the scheduled time.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Processing Steps</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Schedule triggers weekly maintenance workflow</li>
                    <li>System cleanup and optimization tasks execute</li>
                    <li>Performance metrics are collected and analyzed</li>
                    <li>Maintenance report is generated and stored</li>
                    <li>Team is notified of completion status</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Hourly Monitoring</CardTitle>
              <CardDescription>
                Monitor systems and services every hour
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Continuously monitor system health, service availability, and performance metrics every 
                    hour to ensure optimal operation and quick issue detection.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Configuration</h4>
                  <CodeBlock
                    code={`{
  "timeframe": "hour",
  "frequency": 1
}`}
                    lang="json"
                  />
                  <p className="text-neutral-400 mt-2 text-sm">
                    This runs the workflow every 1 hour (hourly) at the scheduled time.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Monitoring Workflow</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>⏰ Schedule (hourly) → 🔍 Health Check → 📊 Metrics Collection → 🚨 Alert Generation → 📝 Logging</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Benefits</h4>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• <strong>Proactive Monitoring:</strong> Issues detected before they become critical</li>
                    <li>• <strong>Performance Tracking:</strong> Continuous monitoring of system metrics</li>
                    <li>• <strong>Automated Response:</strong> Immediate alerts for system issues</li>
                    <li>• <strong>Historical Data:</strong> Build comprehensive performance baselines</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Do&apos;s
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Choose appropriate timeframes for your use case</li>
                <li>• Use frequency values that make sense for your business needs</li>
                <li>• Test scheduling logic with longer intervals first</li>
                <li>• Monitor execution times and adjust schedules as needed</li>
                <li>• Implement proper error handling in scheduled workflows</li>
                <li>• Consider timezone implications for global operations</li>
                <li>• Use execution timestamps for logging and debugging</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Don&apos;s
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Don&apos;t set extremely frequent schedules without considering resource usage</li>
                <li>• Avoid scheduling workflows that might conflict with each other</li>
                <li>• Don&apos;t forget to handle timezone differences</li>
                <li>• Avoid scheduling during peak business hours for non-critical tasks</li>
                <li>• Don&apos;t assume all timeframes are equally suitable for your use case</li>
                <li>• Avoid scheduling workflows that depend on external services without fallbacks</li>
                <li>• Don&apos;t ignore the impact of daylight saving time changes</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-orange-500">
            <strong>Pro Tip:</strong> When setting up scheduled workflows, start with longer intervals and 
            gradually decrease them as you verify the workflow runs correctly. This helps prevent overwhelming 
            your system with too many concurrent executions during initial testing.
          </Callout>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
        
        <div className="space-y-4">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                Common Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Workflow Not Running on Schedule</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Scheduled workflows don&apos;t execute at expected times
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify that the scheduler system is running and properly configured. 
                    Check that the timeframe and frequency values are correct, and ensure the workflow trigger 
                    system is connected to the scheduler.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Incorrect Execution Intervals</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Workflows run at unexpected intervals or frequencies
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Double-check your timeframe and frequency configuration. Remember 
                    that frequency multiplies the timeframe, so frequency 2 with timeframe &quot;day&quot; means every 2 days, 
                    not twice per day.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Resource Exhaustion</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> System becomes overwhelmed with too many scheduled executions
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Review your scheduling frequency and consider using longer timeframes 
                    or lower frequencies. Implement proper resource management and consider staggering multiple 
                    scheduled workflows to avoid concurrent execution peaks.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Timezone Confusion</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Workflows execute at unexpected times due to timezone differences
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Ensure your scheduler system is configured with the correct timezone. 
                    Consider using UTC for global operations and be aware of daylight saving time changes that 
                    might affect your schedules.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <RelatedResourceCard
            href="/docs/nodes/trigger"
            title="Trigger Node"
            description="Basic workflow entry point"
          />
          
          <RelatedResourceCard
            href="/docs/nodes/webhook"
            title="Webhook Node"
            description="Event-driven workflow triggers"
          />
          
          <RelatedResourceCard
            href="/docs/nodes/if-else"
            title="If-Else Node"
            description="Conditional workflow routing"
          />
          
          <RelatedResourceCard
            href="/docs/nodes"
            title="Node Library"
            description="Explore all available nodes"
          />
        </div>
      </section>
    </div>
  );
}
