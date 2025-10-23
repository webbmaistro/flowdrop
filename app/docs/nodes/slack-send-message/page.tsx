"use client"

import React from 'react';
import { Send, Hash, MessageSquare } from 'lucide-react';
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

export default function SlackSendMessageNode() {
  const prerequisites = [
    {
      icon: MessageSquare,
      title: "Slack Integration",
      description: "Must have Slack integration properly configured",
      requirements: [
        "Slack integration enabled and configured",
        "User has authorized Slack access",
        "Valid Slack bot token and permissions"
      ]
    },
    {
      icon: Hash,
      title: "Slack Workspace Access",
      description: "Required permissions and access",
      requirements: [
        "Workspace Membership: User must be a member of the target Slack workspace",
        "Channel Access: User needs access to the target channel",
        "Bot Permissions: Bot must be added to the channel with send message permissions"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Send}
        title="Slack Send Message"
        description="Send messages to Slack channels using channel names"
        nodeType="Action"
        category="Slack Integration"
        iconName="Send"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Slack Send Message</strong> node is an action node that sends messages to Slack channels using channel names. This powerful integration allows you to automate Slack communications from your workflows, sending notifications, updates, and responses to specific channels automatically."
        keyFeatures={[
          "<strong>Slack Integration:</strong> Seamlessly sends messages to Slack workspaces and channels",
          "<strong>User Authorization:</strong> Requires user authorization and access to target channels",
          "<strong>Name-Based Targeting:</strong> Uses channel names for easy configuration",
          "<strong>Message Content:</strong> Supports full text content with Slack formatting",
          "<strong>Success Tracking:</strong> Returns message timestamp and success status for workflow control",
          "<strong>Error Handling:</strong> Graceful error handling with fallback responses"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Channel Name",
              type: "text",
              required: true,
              valueType: "string",
              description: "The name of the Slack channel where you want to send the message. Do not include the # symbol, just the channel name (e.g., 'general')."
            },
            {
              name: "Message Content",
              type: "text",
              required: true,
              valueType: "string",
              description: "The message content to send. Supports Slack markdown formatting (bold, italic, code blocks, etc.)."
            }
          ]
        }}
        outputFields={[
          {
            name: "Message Timestamp",
            type: "string",
            required: false,
            valueType: "Slack message timestamp ID",
            description: "The Slack message timestamp ID (ts) of the sent message. Useful for tracking or editing messages later."
          },
          {
            name: "Success",
            type: "boolean",
            required: false,
            valueType: "Operation success status",
            description: "Returns true if the message was successfully sent, false otherwise."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Send Simple Notification</CardTitle>
              <CardDescription>
                Send a basic notification to a Slack channel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "channelName": "notifications",
  "messageContent": "🔔 New user registered: John Doe"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Sends a simple notification message to the #notifications channel with emoji.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Message with Formatting</CardTitle>
              <CardDescription>
                Send formatted message with workflow data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "channelName": "{{config.slackChannel}}",
  "messageContent": "*Alert*: {{alert.type}}\\n_Severity_: {{alert.severity}}\\n\`\`\`{{alert.details}}\`\`\`"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Uses Slack markdown formatting (bold with *, italic with _, code blocks with ```) and template variables.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Auto-Response Workflow</CardTitle>
              <CardDescription>
                Respond to Slack messages automatically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>💬 Slack Read Message → 🤖 AI Analysis → ✉️ Slack Send Message</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read incoming message, analyze with AI for appropriate response, and send reply to the same channel.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Multi-Channel Announcements</CardTitle>
              <CardDescription>
                Send the same message to multiple channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📝 Create Message → 🔄 For Each Channel → 📤 Slack Send Message</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Create announcement once, then use For Each node to send to multiple channels efficiently.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use exact channel names as they appear in Slack",
          "Leverage Slack markdown for formatted messages",
          "Check the success field before proceeding",
          "Use template variables for dynamic content",
          "Implement rate limiting for bulk messages",
          "Test messages in development channels first"
        ]}
        donts={[
          "Don't include # symbol in channel name",
          "Avoid sending too many messages rapidly (rate limits)",
          "Don't forget to handle send failures",
          "Avoid hardcoding channel names when possible",
          "Don't send sensitive data without proper security",
          "Avoid creating spam or excessive notifications"
        ]}
        proTip="Use Slack markdown to create rich, formatted messages: *bold*, _italic_, ~strikethrough~, `code`, and ```code blocks```. Combine with emojis for more engaging notifications."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Permission Denied",
            symptoms: "Node fails with insufficient permissions error",
            solution: "Verify the user has access to the target channel. Check that the bot has been added to the channel and has proper permissions."
          },
          {
            title: "Channel Not Found",
            symptoms: "Node fails with 'channel not found' error",
            solution: "Ensure channel name matches exactly as it appears in Slack (case-sensitive). Verify the user is a member of the workspace and has access to the channel."
          },
          {
            title: "Rate Limit Errors",
            symptoms: "Node fails with rate limit exceeded error",
            solution: "Implement delays between messages and reduce sending frequency. Slack has rate limits that must be respected."
          },
          {
            title: "Message Not Appearing",
            symptoms: "Node succeeds but message doesn't show in Slack",
            solution: "Refresh Slack client and verify you're viewing the correct channel. Check that the message wasn't deleted by auto-moderation or bot rules."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate dynamic message content with AI"
          },
          {
            href: "/docs/nodes/if-else",
            title: "If-Else Node",
            description: "Add conditional message sending logic"
          },
          {
            href: "/docs/nodes/wait",
            title: "Wait Node",
            description: "Add delays between messages to respect rate limits"
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
