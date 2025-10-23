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

export default function DiscordSendMessageNode() {
  const prerequisites = [
    {
      icon: MessageSquare,
      title: "Discord Integration",
      description: "Must have Discord integration properly configured",
      requirements: [
        "Discord integration enabled and configured",
        "User has authorized Discord access",
        "Valid Discord bot token and permissions"
      ]
    },
    {
      icon: Hash,
      title: "Discord Server Access",
      description: "Required permissions and access",
      requirements: [
        "Server Membership: User must be a member of the target Discord server",
        "Channel Permissions: User needs send message permissions for the target channel",
        "Text Channel: Target must be a text channel (not voice or announcement)"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Send}
        title="Discord Send Message"
        description="Send messages to Discord channels using server and channel names"
        nodeType="Action"
        category="Discord Integration"
        iconName="Send"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Discord Send Message</strong> node is an action node that sends messages to Discord channels using server and channel names. This powerful integration allows you to automate Discord communications from your workflows, sending notifications, updates, and responses to specific channels automatically."
        keyFeatures={[
          "<strong>Discord Integration:</strong> Seamlessly sends messages to Discord servers and channels",
          "<strong>User Authorization:</strong> Requires user authorization and access to target channels",
          "<strong>Name-Based Targeting:</strong> Uses server and channel names for easy configuration",
          "<strong>Message Content:</strong> Supports full text content with Discord formatting",
          "<strong>Success Tracking:</strong> Returns message ID and success status for workflow control",
          "<strong>Error Handling:</strong> Graceful error handling with fallback responses"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Server Name",
              type: "text",
              required: true,
              valueType: "string",
              example: `"My Discord Server"`,
              description: "The name of the Discord server (guild) where you want to send the message. Must match exactly as it appears in Discord."
            },
            {
              name: "Channel Name",
              type: "text",
              required: true,
              valueType: "string",
              example: `"general"`,
              description: "The name of the text channel where the message will be sent. Do not include the # symbol, just the channel name."
            },
            {
              name: "Message",
              type: "text",
              required: true,
              valueType: "string",
              example: `"Hello from my workflow!"`,
              description: "The message content to send. Supports Discord markdown formatting (bold, italic, code blocks, etc.)."
            }
          ]
        }}
        outputFields={[
          {
            name: "Message ID",
            type: "string",
            valueType: "Unique message identifier",
            description: "The unique ID of the sent message. Useful for tracking or editing messages later."
          },
          {
            name: "Success",
            type: "boolean",
            valueType: "Operation success status",
            description: "Returns true if the message was successfully sent, false otherwise."
          },
          {
            name: "Error",
            type: "string",
            valueType: "Error message if failed",
            description: "Contains the error message if the operation failed, null if successful."
          },
          {
            name: "Channel ID",
            type: "string",
            valueType: "ID of the target channel",
            description: "The unique ID of the channel where the message was sent."
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
                Send a basic notification to a Discord channel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "serverName": "My Team Server",
  "channelName": "notifications",
  "message": "🔔 New user registered: John Doe"
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
  "serverName": "{{config.discordServer}}",
  "channelName": "alerts",
  "message": "**Alert**: {{alert.type}}\\n*Severity*: {{alert.severity}}\\n\`\`\`{{alert.details}}\`\`\`"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Uses Discord markdown formatting (bold with **, italic with *, code blocks with ```) and template variables.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Auto-Response Workflow</CardTitle>
              <CardDescription>
                Respond to Discord messages automatically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>💬 Discord Read Message → 🤖 AI Analysis → ✉️ Discord Send Message</div>
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
                    <div>📝 Create Message → 🔄 For Each Channel → 📤 Discord Send Message</div>
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
          "Use exact server and channel names as they appear",
          "Leverage Discord markdown for formatted messages",
          "Check the success field before proceeding",
          "Use template variables for dynamic content",
          "Implement rate limiting for bulk messages",
          "Test messages in development channels first"
        ]}
        donts={[
          "Don't include # symbol in channel name",
          "Avoid sending too many messages rapidly (rate limits)",
          "Don't forget to handle send failures",
          "Avoid hardcoding server/channel names when possible",
          "Don't send sensitive data without proper security",
          "Avoid creating spam or excessive notifications"
        ]}
        proTip="Use Discord markdown to create rich, formatted messages: **bold**, *italic*, __underline__, ~~strikethrough~~, `code`, and ```code blocks```. Combine with emojis for more engaging notifications."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Permission Denied",
            symptoms: "Node fails with insufficient permissions error",
            solution: "Verify the user has send message permissions in the target channel. Check that the bot has been added to the server and has proper permissions."
          },
          {
            title: "Server/Channel Not Found",
            symptoms: "Node fails with 'not found' error",
            solution: "Ensure server and channel names match exactly as they appear in Discord (case-sensitive). Verify the user is a member of the server and has access to the channel."
          },
          {
            title: "Rate Limit Errors",
            symptoms: "Node fails with rate limit exceeded error",
            solution: "Implement delays between messages and reduce sending frequency. Discord has rate limits that must be respected (typically 5 messages per 5 seconds per channel)."
          },
          {
            title: "Message Not Appearing",
            symptoms: "Node succeeds but message doesn't show in Discord",
            solution: "Refresh Discord client and verify you're viewing the correct channel. Check that the message wasn't deleted by auto-moderation or bot rules."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/discord-read-message",
            title: "Discord Read Message Node",
            description: "Read messages from Discord channels"
          },
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
            href: "/docs/nodes",
            title: "Node Library",
            description: "Explore all available nodes"
          }
        ]}
      />
    </NodeLayout>
  );
}
