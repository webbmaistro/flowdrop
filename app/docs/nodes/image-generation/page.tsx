"use client"

import React from 'react';
import { Image, Database, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink, Palette, Sparkles } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, RelatedResourceCard } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function ImageGenerationNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-pink-500/20 rounded-lg">
            <Image className="w-6 h-6 text-pink-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Generate Image</h1>
            <p className="text-neutral-400">Generate an image from a text prompt using AI</p>
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
              <p className="text-neutral-400">AI & Creative</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">Image</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Generate Image</strong> node is an action node that uses Together AI to create 
          images from text prompts. This powerful AI integration allows you to generate custom visuals 
          directly in your workflows, enabling creative content generation, visual prototyping, and 
          automated image creation based on textual descriptions.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>AI-Powered Generation:</strong> Uses Together AI for high-quality image creation</li>
            <li>• <strong>Text-to-Image:</strong> Converts descriptive prompts into visual content</li>
            <li>• <strong>Creative Flexibility:</strong> Generate any type of image from text descriptions</li>
            <li>• <strong>URL Output:</strong> Returns generated images as accessible URLs</li>
            <li>• <strong>Workflow Integration:</strong> Seamlessly fits into automated creative processes</li>
            <li>• <strong>Prompt-Based Control:</strong> Full control over image generation through text input</li>
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
                <Palette className="w-5 h-5 text-pink-500" />
                AI Service Access
              </CardTitle>
              <CardDescription>
                Must have access to Together AI image generation service
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Together AI API access and credentials</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Valid API key with image generation permissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Sufficient API credits for image generation</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                Creative Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>Prompt Design:</strong> Ability to write clear, descriptive image prompts
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Visual Understanding:</strong> Knowledge of how to describe desired images
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Creative Direction:</strong> Understanding of image style and composition
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
                  <strong>Together AI Integration:</strong> Access to TogetherAI library and utilities
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
                      The text prompt describing the image you want to generate. Be specific and detailed 
                      about the subject, style, composition, colors, and any other visual elements you want 
                      to see in the generated image.
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
                    <h4 className="font-semibold mb-2">Images</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">array_string</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The generated images as URLs</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Contains an array of URLs pointing to the generated images. Currently returns the URL 
                      of the first generated image from the Together AI response. These URLs can be used 
                      directly in web applications or downloaded for further use.
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
              <CardTitle>Image Generation Process</CardTitle>
              <CardDescription>
                How the node processes inputs and generates images using Together AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Input Processing</h4>
                  <p className="text-neutral-400 text-sm mb-3">
                    The node processes the text prompt input:
                  </p>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• <strong>Prompt Parsing:</strong> Extracts and validates the text prompt input</li>
                    <li>• <strong>Template Processing:</strong> Resolves any template variables in the prompt</li>
                    <li>• <strong>Input Validation:</strong> Ensures the prompt is provided and valid</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">AI Service Integration</h4>
                  <p className="text-neutral-400 text-sm">
                    Creates a new TogetherAI instance and calls the <code className="bg-neutral-700 px-1 rounded">createImage</code> 
                    method with the processed prompt. The service handles the actual AI model interaction 
                    and image generation process.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Response Handling</CardTitle>
              <CardDescription>
                How the node processes the AI service response and formats outputs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Image URL Extraction</h4>
                  <p className="text-neutral-400 text-sm">
                    The node extracts the URL from the first generated image in the response array. 
                    Currently accesses <code className="bg-neutral-700 px-1 rounded">(images[0] as any).url</code> to get 
                    the image URL from the Together AI response structure.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Output Formatting</h4>
                  <p className="text-neutral-400 text-sm">
                    Returns the image URL in the standard output format with the field key 
                    <code className="bg-neutral-700 px-1 rounded">IMAGE</code> and the URL as the value. 
                    The output is structured as an array of strings for consistency with the field definition.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Error Handling</CardTitle>
              <CardDescription>
                How the node handles potential failures and errors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">API Failures</h4>
                  <p className="text-neutral-400 text-sm">
                    If the Together AI service fails or returns an error, the node will throw an exception. 
                    This includes network failures, authentication errors, rate limiting, or service unavailability.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Response Validation</h4>
                  <p className="text-neutral-400 text-sm">
                    The node assumes the response contains an array with at least one image object that has a 
                    URL property. If the response structure is unexpected, this could cause runtime errors.
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
              <CardTitle>Simple Object Generation</CardTitle>
              <CardDescription>
                Generate a basic image of a specific object
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "prompt": "A red apple on a white background, photorealistic style"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This will generate a photorealistic image of a red apple placed on a clean white background, 
                perfect for product photography or educational content.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Artistic Style Generation</CardTitle>
              <CardDescription>
                Create images in specific artistic styles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "prompt": "A futuristic city skyline at sunset, painted in the style of Van Gogh with swirling clouds and vibrant colors"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This will generate an artistic interpretation of a futuristic cityscape using Van Gogh's 
                distinctive painting style with swirling brushstrokes and vibrant color palette.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Character Design</CardTitle>
              <CardDescription>
                Generate character illustrations and designs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "prompt": "A friendly robot character with round blue eyes, silver metallic body, cartoon style, holding a flower"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This will create a cute, cartoon-style robot character with the specified features, perfect 
                for game design, storytelling, or branding purposes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Landscape Generation</CardTitle>
              <CardDescription>
                Create natural and fantasy landscapes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "prompt": "A mystical forest with glowing mushrooms, ancient trees, and soft mist, fantasy art style, magical atmosphere"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                This will generate a fantasy landscape with magical elements, perfect for book covers, 
                game backgrounds, or creative inspiration.
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
              <CardTitle>Content Creation Pipeline</CardTitle>
              <CardDescription>
                Automatically generate images for content marketing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📝 Content Analysis → 🎨 Generate Image → 📊 Social Media Post → 📱 Auto-Publish</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Image Generation Configuration</h4>
                  <CodeBlock
                    code={`{
  "prompt": "{{contentTheme}} in modern minimalist style, suitable for social media, high contrast, professional"
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation Steps</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>Content Analysis:</strong> AI analyzes content and determines visual theme</li>
                    <li><strong>Generate Image:</strong> Creates custom image based on content theme</li>
                    <li><strong>Social Media Post:</strong> Combines image with content for posting</li>
                    <li><strong>Auto-Publish:</strong> Automatically publishes to social platforms</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Product Visualization</CardTitle>
              <CardDescription>
                Generate product mockups and visualizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically generate product mockups and visualizations based on product descriptions, 
                    enabling rapid prototyping and marketing material creation without manual design work.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Image Generation Configuration</h4>
                  <CodeBlock
                    code={`{
  "prompt": "Product mockup of {{productName}}, {{productDescription}}, professional product photography style, clean background"
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Processing Steps</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Product data is analyzed and formatted</li>
                    <li>Image Generation creates product mockup based on description</li>
                    <li>Generated image is integrated into product catalog</li>
                    <li>Marketing materials are automatically updated</li>
                    <li>E-commerce listings are refreshed with new visuals</li>
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
                <li>• Be specific and detailed in your image descriptions</li>
                <li>• Include style, composition, and mood in your prompts</li>
                <li>• Use descriptive adjectives for colors, lighting, and atmosphere</li>
                <li>• Specify artistic styles when you want particular aesthetics</li>
                <li>• Test different prompt variations to find what works best</li>
                <li>• Consider the intended use case when writing prompts</li>
                <li>• Use template variables for dynamic content generation</li>
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
                <li>• Don&apos;t use overly vague or ambiguous descriptions</li>
                <li>• Avoid conflicting style instructions in the same prompt</li>
                <li>• Don&apos;t expect exact replication of copyrighted characters</li>
                <li>• Avoid overly complex prompts that may confuse the AI</li>
                <li>• Don&apos;t forget to specify important visual elements</li>
                <li>• Avoid using technical jargon the AI may not understand</li>
                <li>• Don&apos;t assume the AI will understand cultural references</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-pink-500">
            <strong>Pro Tip:</strong> When writing prompts, think like you&apos;re describing the image to 
            a talented artist. Be specific about what you want to see, but also leave room for creative 
            interpretation. The best results often come from clear, descriptive prompts that give the AI 
            enough detail to work with while allowing for artistic freedom.
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
                  <h4 className="font-semibold mb-2">API Authentication Failures</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with authentication or authorization errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify your Together AI API key is valid and has the necessary 
                    permissions for image generation. Check if your account has sufficient credits and is not 
                    suspended.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Poor Image Quality</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Generated images are low quality or don&apos;t match the prompt
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Improve your prompt by being more specific about style, 
                    composition, lighting, and artistic direction. Use clear, descriptive language and 
                    avoid ambiguous terms.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Service Unavailable Errors</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with service unavailable or timeout errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check your internet connection and Together AI service status. 
                    The service may be experiencing high load or maintenance. Try again later or check 
                    Together AI&apos;s status page.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Unexpected Output Format</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node returns errors or unexpected data structure
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> This may indicate changes in the Together AI API response 
                    format. Check the API documentation for updates or contact support if the issue persists.
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
                <div className="text-sm text-neutral-400">Generate text content with AI</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/http-request">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">HTTP Request Node</div>
                <div className="text-sm text-neutral-400">Integrate with external image services</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/for-each">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">For Each Node</div>
                <div className="text-sm text-neutral-400">Generate multiple images in batches</div>
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
