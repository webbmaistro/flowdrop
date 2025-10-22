"use client"

import React from 'react';
import { Brain, Database, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink, MessageSquare, Sparkles } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, RelatedResourceCard } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function LLMPromptNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary-main/20 rounded-lg">
            <Brain className="w-6 h-6 text-primary-main" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">LLM Prompt</h1>
            <p className="text-neutral-400">Generate AI-powered text responses using Large Language Models</p>
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
              <p className="text-neutral-400">AI & Language</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">Brain</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>LLM Prompt</strong> node is an action node that sends prompts to Large Language Models 
          and returns their responses. This powerful AI integration enables AI-powered text generation, analysis, 
          and processing within workflows, perfect for creating dynamic content, analyzing text, or generating 
          creative responses.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>AI-Powered Generation:</strong> Uses Large Language Models for intelligent text responses</li>
            <li>• <strong>Flexible Prompting:</strong> Send any text prompt to the LLM for processing</li>
            <li>• <strong>Temperature Control:</strong> Adjust creativity vs. determinism in responses</li>
            <li>• <strong>Vision Analysis:</strong> Include image URLs for multimodal AI processing</li>
            <li>• <strong>Cost Tracking:</strong> Monitor API usage costs for budget management</li>
            <li>• <strong>HTML Output:</strong> Generate formatted HTML content for emails and web applications</li>
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
                <Brain className="w-5 h-5 text-primary-main" />
                AI Service Access
              </CardTitle>
              <CardDescription>
                Must have access to Large Language Model services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">LLM service access through NodeServiceRegistry</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Valid service credentials and API access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Sufficient API credits for LLM operations</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-500" />
                Content Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>Prompt Design:</strong> Ability to write clear, effective prompts for the LLM
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Output Formatting:</strong> Understanding of desired response formats (HTML, text, etc.)
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Content Strategy:</strong> Clear understanding of what you want the AI to generate
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
                  <strong>LLM Integration:</strong> Access to LLM service through NodeServiceRegistry
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Network Access:</strong> Internet connectivity for AI service communication
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Error Handling:</strong> Proper exception handling for API failures
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
                        <span className="text-neutral-400">Value Type:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The text prompt to send to the Large Language Model. This should clearly describe what 
                      you want the AI to generate, analyze, or process. For HTML output, include specific 
                      formatting instructions.
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
                    <h4 className="font-semibold mb-2">Temperature</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">number</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-neutral-200">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Value Type:</span>
                        <span className="ml-2 text-neutral-200">number</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Controls the randomness of the LLM&apos;s response. Higher values (closer to 1) make the 
                      AI more creative and unpredictable, while lower values (closer to 0) make responses more 
                      deterministic and focused.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Image URLs</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">text</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-neutral-200">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Value Type:</span>
                        <span className="ml-2 text-neutral-200">array_string</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Optional array of image URLs to include with the prompt for vision analysis. This enables 
                      multimodal AI processing where the LLM can analyze both text and visual content together.
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
                    <h4 className="font-semibold mb-2">Response</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The response from the LLM</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Contains the AI-generated response based on your prompt. The format depends on your 
                      instructions - it can be plain text, formatted HTML, or any other text format you specify 
                      in your prompt.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Cost</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">number (optional)</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">API usage cost for the operation</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The cost of the LLM API call, returned when available. This helps track usage and 
                      manage API budgets across your workflows.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CollapsibleSection>
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
                <li>• Be specific and clear in your prompts for better results</li>
                <li>• Use appropriate temperature settings for your use case</li>
                <li>• Include formatting instructions when you need specific output formats</li>
                <li>• Test different prompt variations to find what works best</li>
                <li>• Use template variables for dynamic content generation</li>
                <li>• Monitor API costs and usage patterns</li>
                <li>• Provide context and examples in your prompts when helpful</li>
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
                <li>• Don&apos;t use overly vague or ambiguous prompts</li>
                <li>• Avoid extremely high temperatures for critical business content</li>
                <li>• Don&apos;t forget to specify output format requirements</li>
                <li>• Avoid prompts that could generate inappropriate content</li>
                <li>• Don&apos;t ignore cost tracking and API usage limits</li>
                <li>• Avoid overly complex prompts that may confuse the AI</li>
                <li>• Don&apos;t assume the AI will understand industry jargon without context</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-blue-500">
            <strong>Pro Tip:</strong> When generating HTML content, always include specific formatting instructions 
            in your prompt. For emails, specify that you want &quot;nicely formatted visually appealing HTML&quot; and 
            instruct the LLM to output only raw HTML without markdown formatting or code blocks.
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
                  <h4 className="font-semibold mb-2">Service Connection Failures</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with service connection or registry errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify that the LLM service is properly registered in the 
                    NodeServiceRegistry and that all required credentials and configurations are set up correctly.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Poor Response Quality</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> LLM responses are irrelevant or low quality
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Improve your prompt by being more specific, providing context, 
                    and using appropriate temperature settings. Test different prompt variations to find what works best.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">HTML Formatting Issues</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Generated HTML includes markdown or code blocks
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Include explicit instructions in your prompt: &quot;Output only the HTML, 
                    not markdown. Do NOT output ```html or ```markdown. Just output the raw HTML.&quot;
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">High API Costs</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Unexpectedly high costs from LLM API usage
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Monitor the cost output from the node, optimize prompts to be more 
                    concise, and use appropriate temperature settings. Consider implementing cost controls in your workflows.
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
            href="/docs/nodes/image-generation"
            title="Generate Image Node"
            description="Create AI-generated images"
          />
          
          <RelatedResourceCard
            href="/docs/nodes/http-request"
            title="HTTP Request Node"
            description="Integrate with external AI services"
          />
          
          <RelatedResourceCard
            href="/docs/nodes/for-each"
            title="For Each Node"
            description="Process multiple items with AI"
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
