"use client"

import React from 'react';
import { Image, Palette, Sparkles } from 'lucide-react';
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

export default function ImageGenerationNode() {
  const prerequisites = [
    {
      icon: Palette,
      title: "AI Service Access",
      description: "Must have access to Together AI image generation service",
      requirements: [
        "Together AI API access and credentials",
        "Valid API key with image generation permissions",
        "Sufficient API credits for image generation"
      ]
    },
    {
      icon: Sparkles,
      title: "Creative Requirements",
      description: "Skills for effective image generation",
      requirements: [
        "Prompt Design: Ability to write clear, descriptive image prompts",
        "Visual Understanding: Knowledge of how to describe desired images",
        "Creative Direction: Understanding of image style and composition"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Image}
        title="Generate Image"
        description="Generate an image from a text prompt using AI"
        nodeType="Action"
        category="AI & Creative"
        iconName="Image"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Generate Image</strong> node is an action node that uses Together AI to create images from text prompts. This powerful AI integration allows you to generate custom visuals directly in your workflows, enabling creative content generation, visual prototyping, and automated image creation based on textual descriptions."
        keyFeatures={[
          "<strong>AI-Powered Generation:</strong> Uses Together AI for high-quality image creation",
          "<strong>Text-to-Image:</strong> Converts descriptive prompts into visual content",
          "<strong>Creative Flexibility:</strong> Generate any type of image from text descriptions",
          "<strong>URL Output:</strong> Returns generated images as accessible URLs",
          "<strong>Workflow Integration:</strong> Seamlessly fits into automated creative processes",
          "<strong>Prompt-Based Control:</strong> Full control over image generation through text input"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Prompt",
              type: "text",
              required: true,
              valueType: "string",
              description: "A detailed text description of the image you want to generate. Be specific about style, composition, colors, mood, and details for best results."
            }
          ],
          optional: [
            {
              name: "Size",
              type: "dropdown",
              required: false,
              defaultValue: "1024x1024",
              valueType: "string",
              description: "The dimensions of the generated image. Common sizes include 1024x1024 (square), 1024x768 (landscape), or 768x1024 (portrait)."
            },
            {
              name: "Model",
              type: "dropdown",
              required: false,
              valueType: "string",
              description: "The AI model to use for image generation. Different models have different styles and capabilities."
            }
          ]
        }}
        outputFields={[
          {
            name: "Image URL",
            type: "string",
            required: true,
            valueType: "URL of the generated image",
            description: "The URL where the generated image can be accessed. This URL can be used to display, download, or further process the image."
          },
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Generation success status",
            description: "Returns true if the image was successfully generated, false otherwise."
          },
          {
            name: "Error",
            type: "string",
            required: false,
            valueType: "Error message if failed",
            description: "Contains the error message if the generation failed, null if successful."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Product Mockup Generation</CardTitle>
              <CardDescription>
                Generate product mockups from descriptions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "prompt": "Professional product photo of a sleek black smartphone on a white marble surface, studio lighting, minimalist style"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates a professional product mockup image for marketing materials.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Social Media Content</CardTitle>
              <CardDescription>
                Generate eye-catching visuals for social posts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "prompt": "Vibrant abstract background with geometric shapes, modern and energetic, perfect for Instagram post, colorful gradient from blue to purple"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates engaging background images for social media content.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Content Workflow</CardTitle>
              <CardDescription>
                Generate images based on workflow data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📝 Content Creation → 🎨 Generate Image → 📤 Post to Social Media</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "prompt": "{{aiContent.imageDescription}}, professional quality, {{style}}"
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Uses AI-generated descriptions and style preferences to create matching visuals.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Blog Post Illustrations</CardTitle>
              <CardDescription>
                Auto-generate featured images for blog posts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "prompt": "Header image for a blog post about {{topic}}, professional illustration style, clean and modern design"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Automatically creates relevant featured images based on blog post topics.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Be specific and detailed in your prompts",
          "Include style, mood, and composition details",
          "Specify colors, lighting, and atmosphere",
          "Use descriptive adjectives for better results",
          "Test prompts iteratively to refine output",
          "Store generated image URLs for later use"
        ]}
        donts={[
          "Don't use vague or ambiguous prompts",
          "Avoid contradictory descriptions",
          "Don't forget to check API usage limits",
          "Avoid generating inappropriate content",
          "Don't rely on first generation - iterate",
          "Avoid very long prompts (keep under 200 words)"
        ]}
        proTip="Start with a clear subject, add style descriptors (e.g., 'photorealistic', 'watercolor', 'minimalist'), specify lighting and mood, then add composition details. For example: 'A golden retriever (subject), oil painting style (style), warm sunset lighting (lighting), sitting in a meadow (composition)'."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Poor Quality Results",
            symptoms: "Generated images don't match expectations",
            solution: "Refine your prompt with more specific details. Include style references, lighting conditions, and compositional elements. Try adding phrases like 'high quality', 'professional', or 'detailed'."
          },
          {
            title: "API Errors",
            symptoms: "Node fails with API errors",
            solution: "Verify your Together AI API key is valid and has sufficient credits. Check that the API service is accessible and not experiencing downtime."
          },
          {
            title: "Timeout Issues",
            symptoms: "Image generation takes too long or times out",
            solution: "Image generation can take 10-30 seconds. Ensure your workflow timeout settings allow sufficient time. Consider using simpler prompts for faster generation."
          },
          {
            title: "Inappropriate Content",
            symptoms: "Generation fails with content policy violation",
            solution: "Together AI has content policies. Ensure your prompt doesn't request prohibited content like violence, explicit material, or copyrighted characters."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate image prompts with AI"
          },
          {
            href: "/docs/nodes/http-request",
            title: "HTTP Request Node",
            description: "Post generated images to services"
          },
          {
            href: "/docs/ai-workflows-explained",
            title: "AI Workflows Guide",
            description: "Learn about AI-powered automation"
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
