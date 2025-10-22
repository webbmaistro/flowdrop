"use client"

import React from 'react';
import { Shuffle, Settings, Code, AlertTriangle, CheckCircle, ExternalLink, Zap, Database, Repeat, List } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, RelatedResourceCard } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function RandomizeNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Shuffle className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Randomize</h1>
            <p className="text-neutral-400">Randomly select one item from a list</p>
          </div>
        </div>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Node Type</h3>
              <p className="text-neutral-400">Action</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Category</h3>
              <p className="text-neutral-400">Data Translation</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">Shuffle</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Randomize</strong> node is a utility node that randomly selects a single value from an input array. 
          This powerful tool enables variety in your workflows, random decision-making, and unpredictable outcomes. 
          Perfect for creating dynamic content, random sampling, or adding randomness to automated processes.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>Random Selection:</strong> Uses Math.random() for true randomness</li>
            <li>• <strong>Array Processing:</strong> Works with any array of string values</li>
            <li>• <strong>Complete Output:</strong> Returns selected value, index, and original array</li>
            <li>• <strong>Error Handling:</strong> Gracefully handles empty arrays and invalid inputs</li>
            <li>• <strong>Index Tracking:</strong> Provides the position of the selected item</li>
            <li>• <strong>Data Preservation:</strong> Maintains the original array for further processing</li>
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
                <List className="w-5 h-5 text-purple-500" />
                Data Requirements
              </CardTitle>
              <CardDescription>
                Understanding of array data structures and random selection needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Array input with multiple values to choose from</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Understanding of random selection use cases</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Workflow design that can handle random outcomes</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary-main" />
                Use Case Planning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>Random Selection:</strong> Identify where variety or unpredictability is needed
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Array Processing:</strong> Plan how to handle the selected value and index
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Workflow Logic:</strong> Design workflows that can work with random outcomes
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
                  <strong>Executable Node Framework:</strong> Access to node execution system
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Array Support:</strong> System capable of processing array inputs
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Random Generation:</strong> Access to Math.random() or equivalent
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
                        <span className="ml-2 text-neutral-200">array_string</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The array to randomly select a value from. This must be a valid array variable or a comma 
                      separated list of values. The node will process this input and randomly select one item.
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
                    <Shuffle className="w-12 h-12 mx-auto mb-3 text-purple-500/50" />
                  </div>
                  <p className="text-neutral-400">
                    The Randomize node has <strong>no optional fields</strong>. All configuration is handled 
                    through the single required input: the array to randomize from.
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
                    <h4 className="font-semibold mb-2">Selected Value</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The randomly selected value</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Contains the randomly selected string value from the input array. This is the main output 
                      that you'll typically use in your workflow for further processing.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Selected Index</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">number</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">Position of selected value</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The zero-based index position of the randomly selected value in the original array. 
                      Useful for tracking which position was chosen or for further array operations.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Original Array</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">array_string</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The complete input array</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The complete original input array, preserved exactly as it was provided. This allows 
                      you to continue working with the full dataset after the random selection.
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
              <CardTitle>Random Selection Process</CardTitle>
              <CardDescription>
                How the node processes arrays and generates random selections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Input Validation</h4>
                  <p className="text-neutral-400 text-sm">
                    The node first validates that the input is a valid array using <code className="bg-neutral-700 px-1 rounded">Array.isArray()</code>. 
                    If the input is not an array, it throws an error: <code className="bg-neutral-700 px-1 rounded">"Input must be a valid array"</code>.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Empty Array Handling</h4>
                  <p className="text-neutral-400 text-sm">
                    If the input array is empty (length === 0), the node returns a special response with 
                    <code className="bg-neutral-700 px-1 rounded">"No values in array"</code> as the selected value and <code className="bg-neutral-700 px-1 rounded">-1</code> as the index.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Random Index Generation</h4>
                  <p className="text-neutral-400 text-sm">
                    Uses <code className="bg-neutral-700 px-1 rounded">Math.floor(Math.random() * arrayInput.length)</code> to generate a random 
                    index between 0 and the array length (exclusive). This ensures equal probability for all array positions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Output Structure</CardTitle>
              <CardDescription>
                How the node formats and returns its results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Standard Output Format</h4>
                  <p className="text-neutral-400 text-sm">
                    Returns an array of <code className="bg-neutral-700 px-1 rounded">ExecutableNodeValue</code> objects, each with a 
                    <code className="bg-neutral-700 px-1 rounded">fieldKey</code> and <code className="bg-neutral-700 px-1 rounded">value</code>.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Data Preservation</h4>
                  <p className="text-neutral-400 text-sm">
                    The original array is preserved exactly as provided, allowing downstream nodes to work with 
                    the complete dataset while still having access to the random selection results.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Error Handling</h4>
                  <p className="text-neutral-400 text-sm">
                    Comprehensive error handling ensures the node fails gracefully with clear error messages 
                    when invalid inputs are provided, preventing workflow crashes.
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
              <CardTitle>Random Content Selection</CardTitle>
              <CardDescription>
                Select random content for dynamic generation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Generate random social media posts, email subjects, or content variations to avoid 
                    repetitive messaging and increase engagement.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Configuration</h4>
                  <CodeBlock
                    code={`{
  "array": ["Welcome to our platform!", "Thanks for joining us!", "We're excited to have you!", "Let's get started together!"]
}`}
                    lang="json"
                  />
                  <p className="text-neutral-400 mt-2 text-sm">
                    This will randomly select one of the four welcome messages each time the workflow runs.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📝 Content Array → 🎲 Randomize → 📧 Email Generation → 📤 Send Email</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>A/B Testing</CardTitle>
              <CardDescription>
                Randomly assign users to different test groups
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Randomly assign users to different test groups for A/B testing campaigns, ensuring 
                    unbiased distribution and statistically valid results.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Configuration</h4>
                  <CodeBlock
                    code={`{
  "array": ["Group A", "Group B", "Control"]
}`}
                    lang="json"
                  />
                  <p className="text-neutral-400 mt-2 text-sm">
                    This will randomly assign users to one of three test groups with equal probability.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Processing Steps</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>User data is processed for test assignment</li>
                    <li>Randomize node selects test group</li>
                    <li>User is assigned to selected group</li>
                    <li>Group assignment is recorded in database</li>
                    <li>User receives group-specific experience</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Random Sampling</CardTitle>
              <CardDescription>
                Select random items from large datasets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Randomly sample items from large datasets for quality assurance, testing, or 
                    representative analysis without processing the entire dataset.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Configuration</h4>
                  <CodeBlock
                    code={`{
  "array": ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]
}`}
                    lang="json"
                  />
                  <p className="text-neutral-400 mt-2 text-sm">
                    This will randomly select one item from a dataset of 10 items for sampling purposes.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Sampling Workflow</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Large Dataset → 🎲 Randomize → 🔍 Quality Check → 📝 Sample Report</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Benefits</h4>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• <strong>Efficient Processing:</strong> Sample subset instead of full dataset</li>
                    <li>• <strong>Statistical Validity:</strong> Random selection ensures representative samples</li>
                    <li>• <strong>Cost Reduction:</strong> Lower processing costs for large datasets</li>
                    <li>• <strong>Quick Results:</strong> Faster analysis and decision-making</li>
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
                <li>• Use arrays with meaningful, related values</li>
                <li>• Handle the case where arrays might be empty</li>
                <li>• Use the selected index for tracking and debugging</li>
                <li>• Preserve the original array for further processing</li>
                <li>• Test with various array sizes and content types</li>
                <li>• Consider the probability distribution of your selections</li>
                <li>• Use for true randomness, not pseudo-random patterns</li>
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
                <li>• Don&apos;t use for critical decision-making without validation</li>
                <li>• Avoid extremely large arrays that might impact performance</li>
                <li>• Don&apos;t assume the selection will always be different</li>
                <li>• Avoid using for security-critical random number generation</li>
                <li>• Don&apos;t forget to handle empty array edge cases</li>
                <li>• Avoid mixing different data types in the same array</li>
                <li>• Don&apos;t use for deterministic workflows</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-purple-500">
            <strong>Pro Tip:</strong> The Randomize node is perfect for adding variety to your workflows, 
            but remember that true randomness means the same value can be selected multiple times in a row. 
            If you need guaranteed variety, consider implementing additional logic to track previous selections.
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
                  <h4 className="font-semibold mb-2">Input Must Be a Valid Array Error</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with "Input must be a valid array" error
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Ensure your input is properly formatted as an array. Check that 
                    you're passing an array variable or a properly formatted comma-separated list. Verify the 
                    data type in your workflow context.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Empty Array Handling</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node returns "No values in array" and index -1
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check your input array to ensure it contains values. If the array 
                    is dynamically generated, add validation to ensure it's not empty before passing to the 
                    Randomize node.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Same Value Selected Repeatedly</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> The same value is selected multiple times in a row
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> This is normal behavior for true randomness. If you need guaranteed 
                    variety, implement additional logic to track previous selections or use a different approach 
                    like cycling through values.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Performance Issues with Large Arrays</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node takes longer to process with very large arrays
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Consider limiting array size or pre-filtering to a smaller subset 
                    before randomization. The node processes the entire array, so extremely large datasets may 
                    impact performance.
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
          <Link href="/docs/nodes/for-each">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">For Each Node</div>
                <div className="text-sm text-neutral-400">Process all items in arrays</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/if-else">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">If-Else Node</div>
                <div className="text-sm text-neutral-400">Route based on random results</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/llm-prompt">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">LLM Prompt Node</div>
                <div className="text-sm text-neutral-400">Generate content with random inputs</div>
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
