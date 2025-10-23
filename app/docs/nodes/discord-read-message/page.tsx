"use client"

import React from 'react';
import { MessageSquare, Hash, Bell } from 'lucide-react';
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

export default function DiscordReadMessageNode() {
  const prerequisites = [
    {
      icon: MessageSquare,
      title: "Discord Integration",
      description: "Must have Discord integration properly configured",
      requirements: [
        "Discord integration enabled and configured",
        "Valid Discord bot token and permissions",
        "Bot added to target Discord server"
      ]
    },
    {
      icon: Hash,
      title: "Discord Server Access",
      description: "Required permissions and access",
      requirements: [
        "Server Membership: Bot must be a member of the target Discord server",
        "Channel Permissions: Bot needs read permissions for the target channel",
        "Message History: Access to read message content and attachments"
      ]
    },
    {
      icon: Bell,
      title: "Bot Permissions",
      description: "Required Discord bot permissions",
      requirements: [
        "READ_MESSAGE_HISTORY: Required to read past messages",
        "VIEW_CHANNEL: Required to access channel content",
        "READ_MESSAGES: Required to see message content"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={MessageSquare}
        title="Discord Read Message"
        description="Reads the latest message from a Discord channel"
        nodeType="Trigger"
        category="Discord Integration"
        iconName="Message"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Discord Read Message</strong> node is a trigger node that monitors Discord channels and reads the latest messages. This powerful integration allows you to build workflows that automatically respond to Discord activity, process messages, and extract both text content and image URLs for further automation."
        keyFeatures={[
          "<strong>Discord Integration:</strong> Seamlessly connects to Discord servers and channels",
          "<strong>Trigger-Based:</strong> Automatically activates workflows when new messages arrive",
          "<strong>Message Content:</strong> Extracts full message text for processing",
          "<strong>Image Support:</strong> Captures image URLs from message attachments",
          "<strong>Server & Channel Targeting:</strong> Precise targeting of specific Discord locations",
          "<strong>Real-Time Processing:</strong> Immediate workflow activation on message arrival"
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
              description: "The name of the Discord server (guild) where the channel is located. Must match exactly as it appears in Discord."
            },
            {
              name: "Channel Name",
              type: "text",
              required: true,
              valueType: "string",
              example: `"general"`,
              description: "The name of the text channel to monitor. Do not include the # symbol, just the channel name."
            }
          ]
        }}
        outputFields={[
          {
            name: "Message Content",
            type: "string",
            valueType: "The text content of the message",
            description: "The full text content of the latest message in the channel. Returns empty string if message has no text."
          },
          {
            name: "Image URL",
            type: "string",
            valueType: "URL of attached image",
            description: "The URL of the first image attachment in the message. Returns null if no image is attached."
          },
          {
            name: "Author",
            type: "object",
            valueType: "Message author information",
            description: "Information about the message author, including username, discriminator, and user ID."
          },
          {
            name: "Message ID",
            type: "string",
            valueType: "Unique message identifier",
            description: "The unique ID of the message. Useful for tracking or referencing specific messages."
          },
          {
            name: "Timestamp",
            type: "string",
            valueType: "Message creation timestamp",
            description: "ISO 8601 timestamp of when the message was created."
          },
          {
            name: "Success",
            type: "boolean",
            valueType: "Operation success status",
            description: "Returns true if the message was successfully read, false otherwise."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Monitor General Channel</CardTitle>
              <CardDescription>
                Read messages from a general discussion channel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "serverName": "My Community Server",
  "channelName": "general"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Monitors the #general channel for new messages and triggers workflow on each new message.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Auto-Response Bot</CardTitle>
              <CardDescription>
                Workflow that responds to Discord messages
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
                  Read incoming Discord message, analyze with AI for intent, and send appropriate response.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Image Processing Pipeline</CardTitle>
              <CardDescription>
                Automatically process images posted to Discord
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>💬 Discord Read Message → 🔍 Check Image → 🖼️ Process Image → 📤 Send Result</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read message with image attachment, process the image with AI or filters, and post results back to Discord.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use exact server and channel names as they appear in Discord",
          "Implement rate limiting to avoid overwhelming your bot",
          "Check for image attachments before processing",
          "Handle missing or empty message content gracefully",
          "Use message IDs to track processed messages",
          "Implement filters to avoid processing bot's own messages"
        ]}
        donts={[
          "Don't include # symbol in channel name",
          "Avoid triggering workflows on every message in high-traffic channels",
          "Don't forget to check bot permissions before deploying",
          "Avoid hardcoding server/channel names when possible",
          "Don't process sensitive data without proper security",
          "Avoid creating infinite loops with response bots"
        ]}
        proTip="To prevent your bot from responding to its own messages, add a condition node that checks if the message author is your bot's user ID. This prevents infinite response loops and unnecessary processing."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Bot Can't Read Messages",
            symptoms: "Node fails or returns no messages",
            solution: "Verify the bot has been added to the server and has READ_MESSAGE_HISTORY and VIEW_CHANNEL permissions for the target channel. Check that channel name is spelled correctly."
          },
          {
            title: "Server/Channel Not Found",
            symptoms: "Node fails with 'not found' error",
            solution: "Ensure server and channel names match exactly as they appear in Discord (case-sensitive). Verify the bot is a member of the server and has access to the channel."
          },
          {
            title: "Missing Images",
            symptoms: "Image URL returns null even when images are present",
            solution: "Check that the message actually has image attachments (not just image links in text). Verify bot has permissions to view attachments."
          },
          {
            title: "Rate Limiting",
            symptoms: "Node fails intermittently with rate limit errors",
            solution: "Implement delays between message reads and reduce polling frequency. Discord has rate limits that must be respected."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/discord-send-message",
            title: "Discord Send Message Node",
            description: "Send responses back to Discord"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Analyze message content with AI"
          },
          {
            href: "/docs/nodes/if-else",
            title: "If-Else Node",
            description: "Add conditional message processing"
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
