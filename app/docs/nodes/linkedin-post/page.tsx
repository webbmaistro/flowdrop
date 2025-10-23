"use client"

import React from 'react';
import { Linkedin, MessageSquare, Settings } from 'lucide-react';
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

export default function LinkedInPostNode() {
  const prerequisites = [
    {
      icon: Linkedin,
      title: "LinkedIn Integration",
      description: "Must have LinkedIn integration properly configured",
      requirements: [
        "LinkedIn integration enabled and configured",
        "User has authorized LinkedIn access with required scopes",
        "Valid OAuth access token for LinkedIn API"
      ]
    },
    {
      icon: MessageSquare,
      title: "LinkedIn Account Access",
      description: "Understanding of LinkedIn account requirements and permissions",
      requirements: [
        "User must have connected their LinkedIn account",
        "Account must have permission to create posts",
        "Requires LinkedIn write member social and organization social scopes"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "Technical setup and service configuration",
      requirements: [
        "Access to LinkedIn service for post operations",
        "Valid OAuth service for token management",
        "Ability to connect to LinkedIn API endpoints"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Linkedin}
        title="LinkedIn Post"
        description="Create posts on your LinkedIn profile or organization page with optional link sharing"
        nodeType="Action"
        category="LinkedIn Integration"
        iconName="Linkedin"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>LinkedIn Post</strong> node is an action node that creates posts on LinkedIn using OAuth authentication. This powerful integration allows you to automate professional social media posting from your workflows, sharing updates, announcements, and professional content to your LinkedIn profile or organization page automatically."
        keyFeatures={[
          "<strong>LinkedIn Integration:</strong> Seamlessly creates posts on your LinkedIn profile or organization page",
          "<strong>OAuth Authentication:</strong> Uses secure OAuth for user authorization",
          "<strong>Organization Support:</strong> Can post as your personal profile or on behalf of organizations you manage",
          "<strong>Link Sharing:</strong> Optionally includes links with your posts for enhanced engagement",
          "<strong>Success Tracking:</strong> Returns post ID and URL for workflow control and verification",
          "<strong>Error Handling:</strong> Graceful error handling with specific error messages including duplicate post detection"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Post Text",
              type: "text",
              required: true,
              valueType: "string",
              description: "The text content of your LinkedIn post. This is the main content that will be shared on your LinkedIn profile or organization page."
            }
          ],
          optional: [
            {
              name: "Link URL",
              type: "text",
              required: false,
              valueType: "string",
              description: "Optional. A URL to include with your post. When provided, LinkedIn will automatically generate a link preview with the URL."
            },
            {
              name: "Organization ID",
              type: "text",
              required: false,
              valueType: "string",
              description: "Optional. The LinkedIn organization ID to post as an organization page. Leave empty to post as your personal profile."
            }
          ]
        }}
        outputFields={[
          {
            name: "Post ID",
            type: "string",
            required: true,
            valueType: "Unique post identifier",
            description: "The unique ID of the created LinkedIn post. Use this to reference the post in future nodes or for tracking purposes."
          },
          {
            name: "Post URL",
            type: "string",
            required: true,
            valueType: "Direct link to the post",
            description: "The full URL to view the post on LinkedIn. Share this link or use it for verification and engagement tracking."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Professional Announcements</CardTitle>
              <CardDescription>
                Share company updates and professional milestones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "text": "🎉 Excited to announce that {{companyName}} has reached {{milestone}}! Thank you to our amazing team and community for making this possible. #growth #teamwork",
  "linkUrl": "{{announcementURL}}"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Uses template variables to create dynamic professional announcements with optional links to detailed information.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>AI-Generated Professional Content</CardTitle>
              <CardDescription>
                Post AI-generated professional content and insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🤖 LLM Generate → ✅ Human Approval → 💼 LinkedIn Post → 📊 Track Engagement</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "text": "{{aiGeneratedLinkedInPost}}",
  "linkUrl": "{{articleURL}}"
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Generate professional LinkedIn content with AI, get human approval, then post to LinkedIn automatically.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Organization Page Posts</CardTitle>
              <CardDescription>
                Post on behalf of your organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "text": "We're thrilled to share {{productUpdate}} with our community! This update brings {{keyFeatures}} to help you {{benefit}}.",
  "linkUrl": "{{productURL}}",
  "organizationId": "{{companyLinkedInId}}"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Post professional updates on behalf of your organization using the organization ID parameter.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Content Distribution</CardTitle>
              <CardDescription>
                Share blog posts and professional content across platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📝 New Blog Post → 💼 LinkedIn Post → 🐦 X Post → 📧 Newsletter</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Automatically share new professional content across multiple platforms when published.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Keep posts professional and relevant to your network",
          "Use engaging language appropriate for LinkedIn",
          "Include relevant hashtags for professional discoverability",
          "Test posts before going live",
          "Monitor the Post ID and URL for tracking",
          "Use Human Approval for important professional posts",
          "Include links to provide additional value to your network"
        ]}
        donts={[
          "Don't post duplicate content repeatedly",
          "Avoid overly casual language inappropriate for LinkedIn",
          "Don't spam or post too frequently",
          "Avoid sensitive or controversial information",
          "Don't ignore LinkedIn's professional community guidelines",
          "Avoid hardcoding post content when possible",
          "Don't post without considering your professional brand"
        ]}
        proTip="LinkedIn is a professional network, so maintain a professional tone and focus on value-driven content. Use the organization ID parameter to post on behalf of your company when appropriate. For AI-generated content, always include a human approval step to ensure professional quality and brand alignment."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Duplicate Content Error",
            symptoms: "Node fails with duplicate post error",
            solution: "LinkedIn prevents posting the exact same content multiple times. Add variation to your posts (timestamps, unique IDs) or wait before reposting. The node includes specific error handling for this scenario."
          },
          {
            title: "Organization Permission Errors",
            symptoms: "Node fails when trying to post as organization",
            solution: "Verify that you have the necessary permissions to post on behalf of the organization. Check that the organization ID is correct and that your LinkedIn account has admin access to the organization page."
          },
          {
            title: "OAuth Errors",
            symptoms: "Node fails with authentication errors",
            solution: "Verify the user has connected their LinkedIn account and granted necessary permissions (write member social, write organization social). Reconnect the LinkedIn account if needed."
          },
          {
            title: "Link Preview Issues",
            symptoms: "Link URL not generating proper preview",
            solution: "Ensure the link URL is valid and accessible. LinkedIn may take time to generate link previews. Test the URL in a browser first to ensure it's working properly."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate professional LinkedIn content with AI"
          },
          {
            href: "/docs/nodes/hil-email",
            title: "Human Approval Node",
            description: "Get approval before posting professional content"
          },
          {
            href: "/docs/nodes/if-else",
            title: "If-Else Node",
            description: "Add conditional posting logic"
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
