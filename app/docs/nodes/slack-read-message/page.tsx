"use client"

import React from 'react';
import { MessageSquare, Bell, Hash } from 'lucide-react';
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

export default function SlackReadMessageNode() {
  const prerequisites = [
    {
      icon: Bell,
      title: "Slack Integration",
      description: "Must have Slack workspace access and proper OAuth setup",
      requirements: [
        "Slack workspace with proper permissions",
        "OAuth integration configured for Slack",
        "User access token for the Slack workspace"
      ]
    },
    {
      icon: Hash,
      title: "Channel Access",
      description: "Access to read messages from channels",
      requirements: [
        "Channel Permissions: Access to read messages from target channels",
        "Channel Names: Knowledge of the exact channel names to monitor",
        "Workspace Access: Member of the Slack workspace being monitored"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={MessageSquare}
        title="Slack Read Message"
        description="Reads the latest message from a Slack channel"
        nodeType="Trigger"
        category="Integration"
        iconName="MessageSquare"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>Slack Read Message</strong> node is a trigger node that monitors Slack channels and reads the latest messages. This powerful integration enables workflows to automatically respond to Slack activity, process incoming messages, and extract both text content and image URLs for further processing."
        keyFeatures={[
          "<strong>Slack Integration:</strong> Connects directly to Slack workspaces and channels",
          "<strong>Message Reading:</strong> Automatically reads the latest messages from specified channels",
          "<strong>Content Extraction:</strong> Extracts both text content and image URLs from messages",
          "<strong>Channel Monitoring:</strong> Monitors specific Slack channels for new activity",
          "<strong>OAuth Authentication:</strong> Secure access using user's Slack OAuth tokens",
          "<strong>Trigger-Based:</strong> Activates workflows when new messages arrive"
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
              example: '"general"',
              description: "The name of the Slack channel to monitor. Do not include the # symbol, just the channel name."
            }
          ]
        }}
        outputFields={[
          {
            name: "Message Text",
            type: "string",
            required: true,
            valueType: "The text content of the message",
            description: "The full text content of the latest message in the channel. Returns empty string if message has no text."
          },
          {
            name: "Image URL",
            type: "string",
            required: false,
            valueType: "URL of attached image",
            description: "The URL of the first image attachment in the message. Returns null if no image is attached."
          },
          {
            name: "User",
            type: "string",
            required: true,
            valueType: "Message author username",
            description: "The username of the person who sent the message."
          },
          {
            name: "Timestamp",
            type: "string",
            required: true,
            valueType: "Message timestamp",
            description: "The timestamp of when the message was sent."
          },
          {
            name: "Channel ID",
            type: "string",
            required: true,
            valueType: "Unique channel identifier",
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
              <CardTitle>Monitor Team Channel</CardTitle>
              <CardDescription>
                Read messages from a team communication channel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "channelName": "team-updates"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Monitors the #team-updates channel for new messages and triggers workflow on each message.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Slack Bot Workflow</CardTitle>
              <CardDescription>
                Automatically respond to Slack messages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>💬 Slack Read Message → 🤖 AI Analysis → ✉️ Send Response</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read incoming Slack message, analyze with AI for intent, and send appropriate response back to the channel.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Image Processing</CardTitle>
              <CardDescription>
                Process images shared in Slack
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>💬 Slack Read Message → 🔍 Check Image → 🖼️ Process → 📤 Reply</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read message with image, process the image with AI or filters, and post results back to Slack.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use exact channel names as they appear in Slack",
          "Implement rate limiting to avoid overwhelming your bot",
          "Check for image attachments before processing",
          "Handle missing or empty message content gracefully",
          "Use timestamps to track processed messages",
          "Filter bot's own messages to avoid loops"
        ]}
        donts={[
          "Don't include # symbol in channel name",
          "Avoid triggering on every message in high-traffic channels",
          "Don't forget to check OAuth permissions",
          "Avoid hardcoding channel names when possible",
          "Don't process sensitive data without encryption",
          "Avoid creating infinite response loops"
        ]}
        proTip="To prevent your bot from responding to its own messages, add a condition that checks if the message user matches your bot's user ID. This prevents infinite loops and unnecessary processing."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Channel Not Found",
            symptoms: "Node fails with channel not found error",
            solution: "Ensure the channel name is spelled correctly (case-sensitive) and that your bot has been added to the channel. Private channels require explicit invitation."
          },
          {
            title: "OAuth Errors",
            symptoms: "Node fails with authentication errors",
            solution: "Verify your Slack OAuth integration is properly configured and the user access token has the required scopes (channels:history, channels:read)."
          },
          {
            title: "No Messages Returned",
            symptoms: "Node succeeds but returns no message data",
            solution: "Check that there are messages in the channel. Ensure the bot has permission to read message history and that messages haven't been deleted."
          },
          {
            title: "Rate Limiting",
            symptoms: "Node fails intermittently with rate limit errors",
            solution: "Implement delays between message reads and reduce polling frequency. Slack has rate limits that must be respected."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
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
            href: "/docs/nodes/http-request",
            title: "HTTP Request Node",
            description: "Send responses to Slack webhooks"
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
