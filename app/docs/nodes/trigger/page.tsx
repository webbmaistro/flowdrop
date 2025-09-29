"use client"

import React from 'react';
import { PlayCircle, Zap, Settings, AlertTriangle, CheckCircle, ExternalLink, ClipboardList } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function TriggerNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <PlayCircle className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Manual Trigger</h1>
            <p className="text-neutral-400">Start a workflow manually from the editor or API</p>
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
              <p className="text-neutral-400">PlayCircle</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Manual Trigger</strong> node acts as the entry point when you click Run in the editor.
          It&apos;s perfect for building, testing, and running workflows on demand without external events.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• On-demand execution from the UI</li>
            <li>• No external setup required</li>
            <li>• Optional initial payload for downstream nodes</li>
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
                <ClipboardList className="w-5 h-5 text-blue-500" />
                Workflow Access
              </CardTitle>
              <CardDescription>
                Ability to open and run workflows from the builder
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Manual access to the workflow in the editor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Optional: API access to start runs programmatically</span>
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
                  <strong>Trigger Mechanism:</strong> System capable of starting workflows on demand
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Optional Payload:</strong> Ability to provide initial data at run start
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
                <CardTitle>Optional Fields</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Initial Data</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">JSON</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-neutral-200">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Value Type:</span>
                        <span className="ml-2 text-neutral-200">object</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Optional JSON payload you can pass when starting a run manually. This data is made
                      available to downstream nodes as the workflow begins.
                    </p>
                  </div>
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
                        <span className="ml-2 text-neutral-200">Timestamp when execution started</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      ISO 8601 timestamp of when this manual execution started. Useful for logging and tracking runs.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Initial Data</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">JSON (optional)</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">Payload provided at run start</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Includes the optional payload passed when the workflow was started. If not provided, this will be empty.
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
              <CardTitle>Trigger Execution</CardTitle>
              <CardDescription>
                How the manual trigger starts a workflow run
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Manual Start</h4>
                  <p className="text-neutral-400 text-sm">
                    Like all trigger nodes, the Manual Trigger cannot be executed as part of a workflow graph. It
                    acts as the starting point for a run initiated from the editor or an external call.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Execution Metadata</h4>
                  <p className="text-neutral-400 text-sm">
                    When a run begins, the trigger provides execution metadata such as start time and any
                    initial payload. Downstream nodes can read this data to tailor their behavior.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Example: Starting with Payload</CardTitle>
              <CardDescription>
                Passing initial data when running a workflow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "initialData": {
    "userId": "abc_123",
    "mode": "test"
  }
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                If supported by your environment, you can attach an initial JSON payload when starting the run.
                The Manual Trigger exposes this payload to the rest of the workflow.
              </p>
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
                <li>• Start simple workflows here before adding other triggers</li>
                <li>• Pass minimal, well-structured initial data</li>
                <li>• Log execution timestamps for traceability</li>
                <li>• Transition to Webhook/Schedule when automating</li>
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
                <li>• Don&apos;t rely on manual runs for production automation</li>
                <li>• Avoid very large payloads at start time</li>
                <li>• Don&apos;t skip error handling in downstream nodes</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-blue-500">
            <strong>Pro Tip:</strong> Use the Manual Trigger during early development to iterate rapidly.
            Once your flow stabilizes, switch to <em>Schedule</em> or <em>Webhook</em> to automate execution.
          </Callout>
        </div>
      </section>
      {/* Node Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Node Configuration</h2>
        
        <CollapsibleSection title="Input Fields" defaultOpen={true}>
          <div className="space-y-4">
            <Card className="border-neutral-700">
              <CardHeader>
                <CardTitle>Optional Fields</CardTitle>
                <CardDescription>Provide initial data at run start</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-neutral-400 text-sm">
                  The Manual Trigger accepts an optional JSON payload that becomes available to downstream nodes.
                </div>
              </CardContent>
            </Card>
          </div>
        </CollapsibleSection>
      </section>

      {/* Related Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/docs/nodes/schedule">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Schedule Node</div>
                <div className="text-sm text-neutral-400">Automatically run workflows on a schedule</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/webhook">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Webhook Node</div>
                <div className="text-sm text-neutral-400">Trigger workflows via HTTP requests</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
