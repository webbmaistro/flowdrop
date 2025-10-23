"use client"

import React from 'react';
import { Twitter, MessageSquare, Settings } from 'lucide-react';
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

export default function XCreatePostNode() {
  const prerequisites = [
    {
      icon: Twitter,
      title: "X Integration",
      description: "Must have X integration properly configured",
      requirements: [
        "X integration enabled and configured",
        "User has authorized X access with required scopes",
        "Valid OAuth access token for X API"
      ]
    },
    {
      icon: MessageSquare,
      title: "X Account Access",
      description: "Understanding of X account requirements and permissions",
      requirements: [
        "User must have connected their X account",
        "Account must have permission to create posts",
        "Requires tweet write, tweet read, and users read scopes"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "Technical setup and service configuration",
      requirements: [
        "Access to X service for tweet operations",
        "Valid OAuth service for token management",
        "Ability to connect to X API endpoints"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Twitter}
        title="X Create Post"
        description="Create posts (tweets) on X (Twitter) with optional reply functionality"
        nodeType="Action"
        category="X Integration"
        iconName="Twitter"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>X Create Post</strong> node is an action node that creates posts (tweets) on X (Twitter) using OAuth authentication. This powerful integration allows you to automate social media posting from your workflows, sharing updates, announcements, and responses to your X account automatically."
        keyFeatures={[
          "<strong>X Integration:</strong> Seamlessly creates posts on your X (Twitter) account",
          "<strong>OAuth Authentication:</strong> Uses secure OAuth for user authorization",
          "<strong>Reply Functionality:</strong> Can reply to existing tweets by providing tweet ID",
          "<strong>Character Limits:</strong> Respects X's 280 character limit for standard posts",
          "<strong>Success Tracking:</strong> Returns tweet ID, URL, and content for workflow control",
          "<strong>Error Handling:</strong> Graceful error handling with specific error messages"
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
              example: '"Check out our new feature! 🚀"',
              description: "The text content of your post. Must be 280 characters or less for standard posts. Can include emojis, hashtags, and mentions."
            }
          ],
          optional: [
            {
              name: "Reply To Tweet ID",
              type: "text",
              required: false,
              valueType: "string",
              description: "Optional. The ID of a tweet you want to reply to. When provided, your post will be a reply to that tweet instead of a standalone post."
            }
          ]
        }}
        outputFields={[
          {
            name: "Tweet ID",
            type: "string",
            required: true,
            valueType: "Unique tweet identifier",
            description: "The unique ID of the created tweet. Use this to reference or reply to this tweet in future nodes."
          },
          {
            name: "Tweet URL",
            type: "string",
            required: true,
            valueType: "Direct link to the tweet",
            description: "The full URL to view the tweet on X. Share this link or use it for verification."
          },
          {
            name: "Tweet Text",
            type: "string",
            required: true,
            valueType: "The posted text content",
            description: "The text content that was actually posted. Useful for logging and verification."
          },
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Operation success status",
            description: "Returns true if the tweet was successfully posted, false otherwise."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Automated Announcements</CardTitle>
              <CardDescription>
                Post product updates and announcements automatically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "postText": "🚀 New feature alert! {{featureName}} is now live. Check it out: {{featureURL}}"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Uses template variables to create dynamic announcement tweets based on workflow data.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>AI-Generated Content</CardTitle>
              <CardDescription>
                Post AI-generated social media content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🤖 LLM Generate → ✅ Human Approval → 🐦 X Create Post → 📊 Track Engagement</div>
                  </div>
                </div>
                <CodeBlock
                  code={`{
  "postText": "{{aiGeneratedTweet}}"
}`}
                  lang="json"
                />
                <p className="text-neutral-400 text-sm">
                  Generate tweet content with AI, get human approval, then post to X automatically.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Automated Replies</CardTitle>
              <CardDescription>
                Reply to mentions or specific tweets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "postText": "Thanks for reaching out! {{customResponse}}",
  "replyToTweetId": "{{mentionTweetId}}"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Automatically reply to tweets, useful for customer support or engagement workflows.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Content Distribution</CardTitle>
              <CardDescription>
                Share blog posts and content across platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📝 New Blog Post → 🐦 X Post → 💬 Discord Post → 📧 Newsletter</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Automatically share new content across multiple social platforms when published.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Keep tweets under 280 characters",
          "Use engaging language and emojis",
          "Include relevant hashtags for discoverability",
          "Test tweets before going live",
          "Monitor the Success field before proceeding",
          "Use Human Approval for important posts"
        ]}
        donts={[
          "Don't exceed character limits",
          "Avoid posting duplicate content repeatedly",
          "Don't spam or post too frequently",
          "Avoid sensitive information in public tweets",
          "Don't ignore X's community guidelines",
          "Avoid hardcoding tweet content when possible"
        ]}
        proTip="Use emojis and hashtags strategically to increase engagement. Keep the most important information at the beginning of the tweet in case it gets truncated in previews. For AI-generated content, always include a human approval step before posting."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Duplicate Content Error",
            symptoms: "Node fails with duplicate tweet error",
            solution: "X prevents posting the exact same content multiple times in a short period. Add variation to your tweets (timestamps, unique IDs) or wait before reposting."
          },
          {
            title: "Character Limit Exceeded",
            symptoms: "Node fails with 'text too long' error",
            solution: "Ensure your tweet text is 280 characters or less. Add logic to truncate long content or split into multiple tweets."
          },
          {
            title: "OAuth Errors",
            symptoms: "Node fails with authentication errors",
            solution: "Verify the user has connected their X account and granted necessary permissions (tweet write, tweet read, users read). Reconnect the X account if needed."
          },
          {
            title: "Rate Limiting",
            symptoms: "Node fails with rate limit exceeded error",
            solution: "X has rate limits for posting. Reduce posting frequency and implement delays between tweets. Monitor API usage."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate tweet content with AI"
          },
          {
            href: "/docs/nodes/hil-email",
            title: "Human Approval Node",
            description: "Get approval before posting"
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
