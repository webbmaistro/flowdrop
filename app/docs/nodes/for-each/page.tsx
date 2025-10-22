"use client"

import React from 'react';
import { Repeat, Database, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink, List, Hash } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, RelatedResourceCard } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function ForEachNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary-main/20 rounded-lg">
            <Repeat className="w-6 h-6 text-primary-main" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">For Each</h1>
            <p className="text-neutral-400">Iterate over an array of strings and execute downstream nodes once for each item</p>
          </div>
        </div>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Node Type</h3>
              <p className="text-neutral-400">Control Flow</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Category</h3>
              <p className="text-neutral-400">Loop</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">Repeat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>For Each</strong> node is a control flow node that takes an array of strings and causes the workflow 
          to iterate over each item, executing downstream nodes separately for every value. This powerful looping mechanism 
          allows you to process multiple items in sequence, making your workflows more dynamic and efficient.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>Array Iteration:</strong> Processes each item in an array sequentially</li>
            <li>• <strong>Downstream Execution:</strong> Executes connected nodes for each array item</li>
            <li>• <strong>Item Access:</strong> Provides current item and index to downstream nodes</li>
            <li>• <strong>Flexible Input:</strong> Accepts comma-separated lists or JSON arrays</li>
            <li>• <strong>Loop Control:</strong> Manages workflow execution flow for repetitive tasks</li>
            <li>• <strong>Data Processing:</strong> Enables batch processing of multiple data items</li>
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
                <List className="w-5 h-5 text-primary-main" />
                Array Data Source
              </CardTitle>
              <CardDescription>
                Must have an array of strings to iterate over
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Array data available from upstream nodes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Data formatted as strings or JSON array</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Non-empty array with valid content</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hash className="w-5 h-5 text-purple-500" />
                Downstream Nodes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>Connected Nodes:</strong> Must have downstream nodes connected to process each item
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Data Handling:</strong> Downstream nodes should be configured to use loop outputs
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Execution Flow:</strong> Workflow will execute downstream nodes for each array item
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
                  <strong>Loop Support:</strong> Workflow engine must support loop node execution
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Array Parsing:</strong> Ability to parse JSON arrays and comma-separated values
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Context Management:</strong> Proper handling of loop context and iteration state
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
                    <h4 className="font-semibold mb-2">Array</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">text</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-green-500">Yes</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Value Type:</span>
                        <span className="ml-2 text-neutral-200">ARRAY_JSON</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      An array of strings to iterate over. Can be provided as a comma-separated list or JSON array format. 
                      The node will parse this input and execute downstream nodes for each item in the array.
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
                    <h4 className="font-semibold mb-2">Items</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">array[JSON]</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Special:</span>
                        <span className="ml-2 text-primary-main">isForLoop</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The complete array of strings to iterate over. This output is marked with the special 
                      <code className="bg-neutral-700 px-1 rounded">isForLoop</code> flag, indicating it's used 
                      by the workflow engine to control loop execution.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Item</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">JSON</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">Current item in the loop</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The current item being processed in the loop iteration. This value changes with each 
                      iteration, providing the specific data item to downstream nodes for processing.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Index</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">number</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">Current position in the loop</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The current index position in the loop (0-based). Useful for tracking position, 
                      implementing conditional logic, or creating indexed outputs in downstream nodes.
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
              <CardTitle>Loop Execution Process</CardTitle>
              <CardDescription>
                How the node manages workflow iteration and execution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Initial Execution</h4>
                  <p className="text-neutral-400 text-sm mb-3">
                    The For Each node executes once initially, providing the first item and index:
                  </p>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• <strong>Items:</strong> Returns the complete input array</li>
                    <li>• <strong>Item:</strong> Returns the first item (array[0])</li>
                    <li>• <strong>Index:</strong> Returns 0 (first position)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Loop Control</h4>
                  <p className="text-neutral-400 text-sm">
                    The workflow engine uses the <code className="bg-neutral-700 px-1 rounded">isForLoop</code> flag on the 
                    Items output to recognize this as a loop node and automatically iterate over the array.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Array Input Processing</CardTitle>
              <CardDescription>
                How the node handles different array input formats
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Input Parsing</h4>
                  <p className="text-neutral-400 text-sm">
                    The node accepts input as <code className="bg-neutral-700 px-1 rounded">ARRAY_JSON</code> type, which 
                    means it can handle both JSON array format and comma-separated string lists that get converted to arrays.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Data Validation</h4>
                  <p className="text-neutral-400 text-sm">
                    Ensures the input is a valid array and provides fallback values for the initial execution. 
                    The actual loop iteration is managed by the workflow engine.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Type Safety</h4>
                  <p className="text-neutral-400 text-sm">
                    Uses TypeScript generics to ensure type safety when parsing the array input, 
                    making the node robust and predictable in its behavior.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Workflow Engine Integration</CardTitle>
              <CardDescription>
                How the node integrates with the workflow execution system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Loop Recognition</h4>
                  <p className="text-neutral-400 text-sm">
                    The <code className="bg-neutral-700 px-1 rounded">isForLoop</code> flag on the Items output 
                    signals to the workflow engine that this node should trigger loop execution.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Downstream Execution</h4>
                  <p className="text-neutral-400 text-sm">
                    For each array item, the workflow engine automatically executes all downstream nodes 
                    with the updated Item and Index values, creating a complete iteration cycle.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Context Management</h4>
                  <p className="text-neutral-400 text-sm">
                    Each iteration maintains its own execution context, allowing downstream nodes to 
                    access the current item and index values independently.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Basic Array Iteration</CardTitle>
              <CardDescription>
                Iterate over a simple list of items
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "array": ["apple", "banana", "orange", "grape"]
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This will execute downstream nodes four times, once for each fruit. Each iteration will have 
                <code className="bg-neutral-700 px-1 rounded">item</code> set to the current fruit and 
                <code className="bg-neutral-700 px-1 rounded">index</code> set to 0, 1, 2, and 3 respectively.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Comma-Separated Input</CardTitle>
              <CardDescription>
                Use comma-separated values as input
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "array": "red,blue,green,yellow,purple"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                The node will automatically parse the comma-separated string into an array and iterate over 
                each color. This format is useful when working with simple lists or user input.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Array from Workflow</CardTitle>
              <CardDescription>
                Use array data from previous workflow steps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "array": "{{previousNode.outputArray}}"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Uses template syntax to reference an array output from a previous node. The For Each node 
                will iterate over whatever array is provided by the upstream node.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Workflow Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Workflow Examples</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Batch Email Processing</CardTitle>
              <CardDescription>
                Send personalized emails to multiple recipients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📧 Email List → 🔄 For Each → 📝 Email Template → 📤 Send Email → 📊 Log Result</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">For Each Configuration</h4>
                  <CodeBlock
                    code={`{
  "array": "{{emailListNode.emailAddresses}}"
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation Steps</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>Email List:</strong> Provides array of email addresses</li>
                    <li><strong>For Each:</strong> Iterates over each email address</li>
                    <li><strong>Email Template:</strong> Creates personalized email content</li>
                    <li><strong>Send Email:</strong> Sends email to current recipient</li>
                    <li><strong>Log Result:</strong> Records success/failure for each email</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Processing Pipeline</CardTitle>
              <CardDescription>
                Process multiple data files or records
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically process multiple data files, records, or items by iterating over a list 
                    and applying the same processing logic to each item individually.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">For Each Configuration</h4>
                  <CodeBlock
                    code={`{
  "array": "{{fileListNode.fileNames}}"
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Processing Steps</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>File list provides array of file names to process</li>
                    <li>For Each iterates over each file name</li>
                    <li>File processing logic executes for current file</li>
                    <li>Results are collected and logged for each file</li>
                    <li>Process continues until all files are processed</li>
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
                Do's
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Use meaningful array names that describe the data being processed</li>
                <li>• Ensure downstream nodes can handle the Item and Index outputs</li>
                <li>• Test with small arrays first before scaling to large datasets</li>
                <li>• Use the Index output for conditional logic or tracking</li>
                <li>• Consider array size and potential execution time</li>
                <li>• Validate array input data before processing</li>
                <li>• Use template syntax for dynamic array sources</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Don'ts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Don't use extremely large arrays that could cause timeouts</li>
                <li>• Avoid nested loops unless absolutely necessary</li>
                <li>• Don't forget to handle empty arrays in downstream nodes</li>
                <li>• Avoid modifying the array during iteration</li>
                <li>• Don't assume array items are always strings</li>
                <li>• Avoid hardcoding array values when dynamic sources are available</li>
                <li>• Don't ignore the loop execution context</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-blue-500">
            <strong>Pro Tip:</strong> When designing workflows with For Each nodes, consider the execution 
            order and dependencies. Use the Index output to implement conditional logic or create 
            indexed outputs that can be referenced by downstream nodes in subsequent iterations.
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
                  <h4 className="font-semibold mb-2">Empty Array Input</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node executes but no downstream nodes run
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify the array input contains data. Check upstream nodes 
                    that provide the array data and ensure they're generating valid arrays.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Downstream Nodes Not Executing</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> For Each node runs but connected nodes don't execute
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Ensure downstream nodes are properly connected. Check that 
                    the workflow engine supports loop execution and loop nodes are properly configured.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Array Parsing Errors</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails to parse array input or returns errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify the input format is valid. Use proper JSON array syntax 
                    or ensure comma-separated values are properly formatted.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Infinite Loops</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Workflow gets stuck in endless iteration
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check that the array input is not being modified during 
                    iteration. Ensure downstream nodes don't accidentally change the array being processed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/docs/nodes/ai-switch">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">AI Router Node</div>
                <div className="text-sm text-neutral-400">Make intelligent routing decisions</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/llm-prompt">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">LLM Prompt Node</div>
                <div className="text-sm text-neutral-400">Process each item with AI</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/google-sheets-write">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Google Sheets Write Node</div>
                <div className="text-sm text-neutral-400">Log results for each iteration</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Node Library</div>
                <div className="text-sm text-neutral-400">Explore all available nodes</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
