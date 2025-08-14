"use client"

import React from 'react';
import { GitBranch, Database, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink, Route, Split } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function IfElseNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <GitBranch className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">If-Else</h1>
            <p className="text-neutral-400">Conditionally route workflow execution based on typed comparison</p>
          </div>
        </div>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Node Type</h3>
              <p className="text-neutral-400">Conditional</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Category</h3>
              <p className="text-neutral-400">Control Flow</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">GitBranch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>If-Else</strong> node is a conditional node that compares two inputs after casting them 
          to specified types and routes workflow execution to one of two paths based on the result. This powerful 
          branching logic enables complex decision-making in your workflows, allowing you to create dynamic paths 
          based on data comparisons and conditions.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>Type Casting:</strong> Automatically casts inputs to specified types before comparison</li>
            <li>• <strong>Flexible Operations:</strong> Supports equals, does not equal, contains, and does not contain</li>
            <li>• <strong>Dual Branching:</strong> Routes to true path (0) or false path (1) based on condition result</li>
            <li>• <strong>Type Safety:</strong> Handles string, boolean, and number types with proper casting</li>
            <li>• <strong>Condition Tracking:</strong> Returns the evaluated boolean result for downstream use</li>
            <li>• <strong>Dynamic Routing:</strong> Enables complex workflow logic and decision trees</li>
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
                <Route className="w-5 h-5 text-blue-500" />
                Workflow Structure
              </CardTitle>
              <CardDescription>
                Must have downstream nodes for branching paths
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">At least two downstream nodes connected</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Clear understanding of true/false paths</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Proper workflow logic design</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Split className="w-5 h-5 text-purple-500" />
                Data Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>Input Values:</strong> Two comparable values for the condition evaluation
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Type Compatibility:</strong> Understanding of how types will be cast and compared
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Operation Logic:</strong> Clear understanding of the comparison operation being used
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
                  <strong>Executable Node:</strong> Access to conditional node execution framework
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Type Casting:</strong> Support for string, boolean, and number type conversions
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Branch Routing:</strong> Workflow engine support for conditional branching
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
                    <h4 className="font-semibold mb-2">Input A</h4>
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
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The first value to compare. This input will be cast to the specified Type A before 
                      comparison. Can be any string value that can be converted to the target type.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Input B</h4>
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
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The second value to compare. This input will be cast to the specified Type B before 
                      comparison. Can be any string value that can be converted to the target type.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Type A</h4>
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
                        <span className="text-neutral-400">Default:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The data type to cast Input A to before comparison. Available options include string, 
                      boolean, and number. Choose the type that matches your comparison needs.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Type B</h4>
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
                        <span className="text-neutral-400">Default:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The data type to cast Input B to before comparison. Available options include string, 
                      boolean, and number. Choose the type that matches your comparison needs.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Operation</h4>
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
                        <span className="text-neutral-400">Default:</span>
                        <span className="ml-2 text-neutral-200">equals</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The comparison operation to perform between Input A and Input B. Available options 
                      include equals, does not equal, contains, and does not contain.
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
                    <h4 className="font-semibold mb-2">Branch Indexes</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">array_number</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">Array containing the branch index to follow</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Contains an array with a single index indicating which branch to follow. Returns [0] 
                      for the true path when the condition is met, or [1] for the false path when the 
                      condition is not met. This field has the <code className="bg-neutral-700 px-1 rounded">isBranch: true</code> flag.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Condition Result</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">boolean</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The evaluated boolean result of the condition</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The boolean result of the condition evaluation. Returns <code className="bg-neutral-700 px-1 rounded">true</code> 
                      when the condition is met, or <code className="bg-neutral-700 px-1 rounded">false</code> when it is not. 
                      Use this for downstream logic or debugging purposes.
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
              <CardTitle>Type Casting Process</CardTitle>
              <CardDescription>
                How the node converts inputs to specified types before comparison
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Input Parsing</h4>
                  <p className="text-neutral-400 text-sm mb-3">
                    The node parses and casts inputs using the specified types:
                  </p>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• <strong>String Type:</strong> Keeps the original string value</li>
                    <li>• <strong>Boolean Type:</strong> Converts to true/false based on string content</li>
                    <li>• <strong>Number Type:</strong> Converts to numeric value using parseFloat</li>
                    <li>• <strong>Type Safety:</strong> Ensures consistent comparison types</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Type Validation</h4>
                  <p className="text-neutral-400 text-sm">
                    Both inputs are cast to their respective types before comparison, ensuring that 
                    the comparison operation works correctly regardless of the original input format.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Comparison Operations</CardTitle>
              <CardDescription>
                How the node performs different types of comparisons
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Equality Operations</h4>
                  <p className="text-neutral-400 text-sm">
                    <strong>Equals:</strong> Uses strict equality (<code className="bg-neutral-700 px-1 rounded">===</code>) to compare the 
                    cast values. <strong>Does not equal:</strong> Uses strict inequality (<code className="bg-neutral-700 px-1 rounded">!==</code>) 
                    for the opposite result.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">String Operations</h4>
                  <p className="text-neutral-400 text-sm">
                    <strong>Contains:</strong> Converts both values to strings and checks if Input A 
                    contains Input B using <code className="bg-neutral-700 px-1 rounded">includes()</code>. 
                    <strong>Does not contain:</strong> Returns the opposite of the contains check.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Operation Validation</h4>
                  <p className="text-neutral-400 text-sm">
                    The node validates that the operation is one of the four supported options. If an 
                    invalid operation is provided, it throws an error with a descriptive message.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Branch Routing Logic</CardTitle>
              <CardDescription>
                How the node determines which workflow path to follow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Condition Evaluation</h4>
                  <p className="text-neutral-400 text-sm">
                    After performing the comparison operation, the node evaluates the result as a boolean. 
                    The condition result determines which branch index is returned.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Branch Index Calculation</h4>
                  <p className="text-neutral-400 text-sm">
                    <strong>True Path (0):</strong> When the condition evaluates to true, returns [0] 
                    to route to the first downstream node. <strong>False Path (1):</strong> When the 
                    condition evaluates to false, returns [1] to route to the second downstream node.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Output Format</h4>
                  <p className="text-neutral-400 text-sm">
                    Returns an array with a single index for the branch routing, along with the boolean 
                    condition result for downstream use and debugging purposes.
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
              <CardTitle>String Equality Check</CardTitle>
              <CardDescription>
                Compare two string values for exact equality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "inputA": "hello",
  "inputB": "hello",
  "typeA": "string",
  "typeB": "string",
  "operation": "equals"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This will compare the strings "hello" and "hello" using the equals operation. Since they 
                are identical, the condition result will be true and the workflow will follow branch 0.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Numeric Comparison</CardTitle>
              <CardDescription>
                Compare numeric values after type casting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "inputA": "42",
  "inputB": "42",
  "typeA": "number",
  "typeB": "number",
  "operation": "equals"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This will cast both inputs to numbers (42 and 42) and compare them. Since they are equal, 
                the condition result will be true and the workflow will follow branch 0.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Boolean Logic</CardTitle>
              <CardDescription>
                Use boolean type casting for logical operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "inputA": "true",
  "inputB": "false",
  "typeA": "boolean",
  "typeB": "boolean",
  "operation": "does not equal"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This will cast both inputs to booleans (true and false) and check if they are not equal. 
                Since true ≠ false, the condition result will be true and the workflow will follow branch 0.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>String Contains Check</CardTitle>
              <CardDescription>
                Check if one string contains another
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "inputA": "hello world",
  "inputB": "world",
  "typeA": "string",
  "typeB": "string",
  "operation": "contains"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This will check if "hello world" contains "world". Since it does, the condition result 
                will be true and the workflow will follow branch 0.
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
              <CardTitle>User Authentication Flow</CardTitle>
              <CardDescription>
                Route users based on authentication status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🔐 Auth Check → 🔀 If-Else → ✅ Authenticated Path → ❌ Unauthenticated Path</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">If-Else Configuration</h4>
                  <CodeBlock
                    code={`{
  "inputA": "{{authStatus}}",
  "inputB": "authenticated",
  "typeA": "string",
  "typeB": "string",
  "operation": "equals"
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation Steps</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>Auth Check:</strong> Determines user authentication status</li>
                    <li><strong>If-Else:</strong> Compares status with "authenticated" string</li>
                    <li><strong>Authenticated Path:</strong> Executes when condition is true (branch 0)</li>
                    <li><strong>Unauthenticated Path:</strong> Executes when condition is false (branch 1)</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Data Validation Pipeline</CardTitle>
              <CardDescription>
                Route data processing based on validation results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically route data through different processing paths based on validation 
                    results, ensuring data quality and appropriate handling for different data types.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">If-Else Configuration</h4>
                  <CodeBlock
                    code={`{
  "inputA": "{{dataValidationResult}}",
  "inputB": "valid",
  "typeA": "string",
  "typeB": "string",
  "operation": "equals"
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Processing Steps</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Data validation node checks input data quality</li>
                    <li>If-Else compares validation result with "valid" string</li>
                    <li>Valid data follows branch 0 (normal processing)</li>
                    <li>Invalid data follows branch 1 (error handling)</li>
                    <li>Each path has appropriate downstream processing</li>
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
                <li>• Use appropriate types for your comparison needs (string, boolean, number)</li>
                <li>• Choose the right operation for your use case (equals, contains, etc.)</li>
                <li>• Ensure both inputs can be properly cast to the specified types</li>
                <li>• Use descriptive input values for better workflow readability</li>
                <li>• Test your conditions with various input combinations</li>
                <li>• Use the condition result output for downstream logic when needed</li>
                <li>• Design clear true/false paths for your branching logic</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Don&apos;ts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Don&apos;t use incompatible types for your comparison operation</li>
                <li>• Avoid using contains operations with non-string types</li>
                <li>• Don&apos;t forget to connect downstream nodes for both branches</li>
                <li>• Avoid overly complex conditions that are hard to debug</li>
                <li>• Don&apos;t assume type casting will always succeed</li>
                <li>• Avoid using the same input values for both Input A and Input B</li>
                <li>• Don&apos;t ignore the condition result output for debugging</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-purple-500">
            <strong>Pro Tip:</strong> When designing If-Else conditions, consider using the condition result 
            output to create more complex logic. You can combine multiple If-Else nodes or use the boolean 
            result in downstream conditional logic for sophisticated workflow routing.
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
                  <h4 className="font-semibold mb-2">Type Casting Failures</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with type conversion errors or unexpected results
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Ensure your input values can be properly converted to the 
                    specified types. For numbers, use valid numeric strings. For booleans, use "true"/"false" 
                    or truthy/falsy values.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Unexpected Branch Routing</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Workflow follows the wrong branch path
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check the condition result output to verify the evaluation. 
                    Review your input values, types, and operation to ensure they match your intended logic.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Invalid Operation Errors</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node throws "Invalid operation" error
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Ensure the operation field contains one of the four valid 
                    options: "equals", "does not equal", "contains", or "does not contain".
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Missing Downstream Nodes</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Workflow fails when trying to follow a branch
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Ensure you have connected downstream nodes for both branch 0 
                    (true path) and branch 1 (false path). The If-Else node requires both paths to be defined.
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
                <div className="text-sm text-neutral-400">AI-powered conditional routing</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/for-each">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">For Each Node</div>
                <div className="text-sm text-neutral-400">Loop through data arrays</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/llm-prompt">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">LLM Prompt Node</div>
                <div className="text-sm text-neutral-400">Process data with AI before branching</div>
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
