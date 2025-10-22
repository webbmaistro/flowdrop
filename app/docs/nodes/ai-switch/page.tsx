"use client"

import React from 'react';
import { Brain, Database, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink, Route, GitBranch } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, RelatedResourceCard } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function AISwitchNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Brain className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">AI Router</h1>
            <p className="text-neutral-400">Use AI to intelligently route workflow execution based on prompt analysis</p>
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
              <p className="text-neutral-400">AI & Logic</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">AI Brain</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>AI Router</strong> node is a powerful conditional node that uses Large Language Models (LLMs) to analyze prompts 
          and intelligently select which downstream node to follow. Instead of traditional rule-based routing, this node leverages 
          AI to understand context and make smart decisions about workflow execution paths.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>AI-Powered Routing:</strong> Uses LLMs to analyze prompts and select optimal execution paths</li>
            <li>• <strong>Dynamic Node Analysis:</strong> Automatically discovers and analyzes available downstream nodes</li>
            <li>• <strong>Letter-Based Selection:</strong> Maps downstream nodes to letters (A, B, C, D...) for easy AI reference</li>
            <li>• <strong>Flexible Execution:</strong> Option to allow no execution if no suitable path exists</li>
            <li>• <strong>Context-Aware Decisions:</strong> Considers node descriptions, types, and categories when routing</li>
            <li>• <strong>Cost Tracking:</strong> Monitors LLM usage costs for optimization</li>
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
                <Brain className="w-5 h-5 text-purple-500" />
                AI Service Access
              </CardTitle>
              <CardDescription>
                Must have access to LLM services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">LLM service properly configured and accessible</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Valid API keys and authentication set up</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Sufficient API credits for LLM calls</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-primary-main" />
                Workflow Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>Downstream Nodes:</strong> Must have at least one connected downstream node for routing
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Node Limits:</strong> Maximum 26 downstream nodes supported (A-Z mapping)
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Proper Connections:</strong> Nodes must be properly connected in the workflow graph
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-purple-500" />
                Technical Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>Workflow Service:</strong> Access to workflow service for node discovery
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Node Registry:</strong> Access to node registry for configuration information
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Enum Switch Tool:</strong> LLM tool for structured decision making
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
                    <h4 className="font-semibold mb-2">Prompt</h4>
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
                        <span className="text-neutral-400">Example:</span>
                        <span className="ml-2 text-neutral-200">"Route to the node that handles email processing"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Describes how the LLM should choose a branch. The AI will analyze this prompt along with available 
                      downstream nodes to make the routing decision.
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
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Allow No Execution</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">dropdown</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-yellow-500">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Default:</span>
                        <span className="ml-2 text-neutral-200">false</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      When enabled, allows the AI to choose not to execute any branches if none are appropriate for the given prompt.
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
                        <span className="ml-2 text-neutral-200">array[number]</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Branch Output:</span>
                        <span className="ml-2 text-green-500">Yes</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Array containing the index of the selected branch. Used by the workflow engine to determine 
                      which execution path to follow.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Selected Branch</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The name of the branch that was selected by the AI</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Human-readable name of the selected branch, useful for logging, debugging, and workflow monitoring.
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
              <CardTitle>AI Decision Process</CardTitle>
              <CardDescription>
                How the node analyzes prompts and makes routing decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Downstream Node Discovery</h4>
                  <p className="text-neutral-400 text-sm mb-3">
                    The node automatically discovers all connected downstream nodes and creates a letter-based mapping:
                  </p>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• <strong>Node A:</strong> First downstream node (index 0)</li>
                    <li>• <strong>Node B:</strong> Second downstream node (index 1)</li>
                    <li>• <strong>Node C:</strong> Third downstream node (index 2)</li>
                    <li>• <strong>Maximum:</strong> 26 nodes (A-Z range)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Enhanced Prompt Creation</h4>
                  <p className="text-neutral-400 text-sm">
                    The node creates an enhanced prompt that includes detailed information about each available downstream node:
                  </p>
                  <ul className="text-sm text-neutral-300 space-y-1 mt-2">
                    <li>• Node title and type</li>
                    <li>• Node description and category</li>
                    <li>• Full node configuration JSON</li>
                    <li>• Letter mapping for easy reference</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>LLM Integration</CardTitle>
              <CardDescription>
                How the node interfaces with Large Language Models
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Enum Switch Tool</h4>
                  <p className="text-neutral-400 text-sm">
                    Uses a specialized LLM tool that constrains the AI's response to valid options only. This ensures 
                    the AI can only select from the available downstream nodes or "NONE" if no execution is allowed.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Cost Tracking</h4>
                  <p className="text-neutral-400 text-sm">
                    Monitors and returns the cost of LLM API calls, allowing users to track and optimize their AI usage 
                    expenses across workflows.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Fallback Handling</h4>
                  <p className="text-neutral-400 text-sm">
                    If the LLM call fails, the node gracefully falls back to selecting the first available downstream 
                    node, ensuring workflow execution continues even with AI service issues.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Branch Selection Logic</CardTitle>
              <CardDescription>
                How the selected branch is processed and executed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Index Calculation</h4>
                  <p className="text-neutral-400 text-sm">
                    Converts the AI's letter selection back to a numerical index for workflow execution. For example, 
                    if the AI selects "C", the node calculates index 2 and routes to the third downstream node.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">No Execution Handling</h4>
                  <p className="text-neutral-400 text-sm">
                    When "Allow No Execution" is enabled and the AI selects "NONE", the workflow continues without 
                    executing any downstream branches, useful for conditional workflows that may not always need execution.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Validation</h4>
                  <p className="text-neutral-400 text-sm">
                    Validates that the selected index is within the valid range of downstream nodes, throwing an error 
                    if the AI somehow selects an invalid option.
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
              <CardTitle>Content Type Routing</CardTitle>
              <CardDescription>
                Route based on content analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "prompt": "Route to the appropriate node based on the content type. If it's an email, use the email processor. If it's a document, use the document analyzer. If it's an image, use the image processor."
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                The AI will analyze the content and route to the most appropriate processing node based on the content type.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Priority-Based Routing</CardTitle>
              <CardDescription>
                Route based on urgency or priority
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "prompt": "Route urgent requests to the high-priority queue, standard requests to the normal queue, and low-priority items to the batch processor."
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                The AI determines the priority level and routes accordingly, ensuring proper resource allocation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Conditional Execution with No-Execution</CardTitle>
              <CardDescription>
                Allow the AI to skip execution when appropriate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "prompt": "Only process items that require immediate attention. Skip processing if the item is already handled or doesn't need action.",
  "allowNoExecution": true
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                The AI can choose "NONE" if no downstream nodes are appropriate, preventing unnecessary processing.
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
              <CardTitle>Intelligent Content Processing Pipeline</CardTitle>
              <CardDescription>
                Route different content types to specialized processors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📥 Input → 🧠 AI Router → 📧 Email Processor / 📄 Doc Analyzer / 🖼️ Image Processor → 📊 Results</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">AI Router Configuration</h4>
                  <CodeBlock
                    code={`{
  "prompt": "Analyze the input content and route to the appropriate processor. Emails go to email processor, documents to document analyzer, and images to image processor."
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Downstream Nodes</h4>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• <strong>Node A:</strong> Email Processor - Handles email content and metadata</li>
                    <li>• <strong>Node B:</strong> Document Analyzer - Processes text documents and PDFs</li>
                    <li>• <strong>Node C:</strong> Image Processor - Analyzes and processes images</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Customer Support Ticket Routing</CardTitle>
              <CardDescription>
                Automatically route support tickets to appropriate teams
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically analyze customer support tickets and route them to the most appropriate support team 
                    based on the issue type, urgency, and team expertise.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">AI Router Prompt</h4>
                  <CodeBlock
                    code={`{
  "prompt": "Route this support ticket to the appropriate team. Technical issues go to engineering, billing questions to finance, general inquiries to customer service, and urgent issues to the priority queue."
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>AI analyzes ticket content and urgency</li>
                    <li>Routes to appropriate team based on issue type</li>
                    <li>Handles edge cases and unclear routing scenarios</li>
                    <li>Provides consistent and fair ticket distribution</li>
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
                <li>• Write clear, specific prompts that describe routing logic</li>
                <li>• Use descriptive node titles and descriptions for better AI understanding</li>
                <li>• Limit downstream nodes to 26 or fewer for optimal performance</li>
                <li>• Test prompts with various input scenarios</li>
                <li>• Monitor LLM costs and optimize prompt efficiency</li>
                <li>• Use "Allow No Execution" when appropriate</li>
                <li>• Provide context about what each downstream node does</li>
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
                <li>• Don't write overly complex or ambiguous prompts</li>
                <li>• Avoid having too many downstream nodes (max 26)</li>
                <li>• Don't ignore LLM costs in high-volume workflows</li>
                <li>• Avoid prompts that require subjective judgment</li>
                <li>• Don't assume the AI will always make perfect decisions</li>
                <li>• Avoid routing logic that changes frequently</li>
                <li>• Don't forget to handle edge cases in your prompts</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-purple-500">
            <strong>Pro Tip:</strong> When designing prompts, think about how you would explain the routing logic to 
            another person. Clear, specific instructions with examples often lead to better AI decision-making and 
            more predictable workflow behavior.
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
                  <h4 className="font-semibold mb-2">No Downstream Nodes Found</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with "No downstream nodes found" error
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Ensure the AI Router node is properly connected to at least one downstream node. 
                    Check your workflow connections and verify the node placement.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">LLM Service Errors</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node falls back to default routing or fails to execute
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check your LLM service configuration, API keys, and service availability. 
                    The node will fall back to the first downstream node if LLM calls fail.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Unexpected Routing Decisions</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> AI makes routing decisions that don't match expectations
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Review and refine your prompt. Make it more specific, provide clearer 
                    examples, and ensure downstream node descriptions are accurate and helpful.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">High LLM Costs</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Unexpectedly high costs from frequent AI Router usage
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Optimize prompts to be more concise, implement caching strategies, 
                    and consider using simpler conditional logic for high-volume workflows.
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
          <Link href="/docs/nodes/llm-prompt">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">LLM Prompt Node</div>
                <div className="text-sm text-neutral-400">Generate AI-powered content</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/fetch-webpage">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Fetch Webpage Node</div>
                <div className="text-sm text-neutral-400">Extract content for AI analysis</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/ai-workflows-explained">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">AI Workflows Guide</div>
                <div className="text-sm text-neutral-400">Learn about AI-powered automation</div>
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
