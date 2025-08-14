"use client"

import React from 'react';
import { MessageSquare, Database, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink, Bell, Hash } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function DiscordReadMessageNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-500/20 rounded-lg">
            <MessageSquare className="w-6 h-6 text-indigo-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Discord Read Message</h1>
            <p className="text-neutral-400">Reads the latest message from a Discord channel</p>
          </div>
        </div>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Node Type</h3>
              <p className="text-neutral-400">Trigger</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Category</h3>
              <p className="text-neutral-400">Discord Integration</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">Message</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Discord Read Message</strong> node is a trigger node that monitors Discord channels and reads 
          the latest messages. This powerful integration allows you to build workflows that automatically respond to 
          Discord activity, process messages, and extract both text content and image URLs for further automation.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>Discord Integration:</strong> Seamlessly connects to Discord servers and channels</li>
            <li>• <strong>Trigger-Based:</strong> Automatically activates workflows when new messages arrive</li>
            <li>• <strong>Message Content:</strong> Extracts full message text for processing</li>
            <li>• <strong>Image Support:</strong> Captures image URLs from message attachments</li>
            <li>• <strong>Server & Channel Targeting:</strong> Precise targeting of specific Discord locations</li>
            <li>• <strong>Real-Time Processing:</strong> Immediate workflow activation on message arrival</li>
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
                <MessageSquare className="w-5 h-5 text-indigo-500" />
                Discord Integration
              </CardTitle>
              <CardDescription>
                Must have Discord integration properly configured
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Discord integration enabled and configured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Valid Discord bot token and permissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Bot added to target Discord server</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hash className="w-5 h-5 text-blue-500" />
                Discord Server Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>Server Membership:</strong> Bot must be a member of the target Discord server
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Channel Permissions:</strong> Bot needs read permissions for the target channel
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Message History:</strong> Access to read message content and attachments
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
                  <strong>Discord Service:</strong> Access to Discord service for channel operations
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>User Authentication:</strong> Valid user ID for Discord operations
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Network Access:</strong> Ability to connect to Discord's API endpoints
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
                    <h4 className="font-semibold mb-2">Server Name</h4>
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
                        <span className="ml-2 text-neutral-200">"My Gaming Server"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The exact name of the Discord server (guild) where the target channel is located. 
                      Must match the server name exactly as it appears in Discord.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Channel Name</h4>
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
                        <span className="ml-2 text-neutral-200">"general"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The exact name of the Discord channel to monitor. Must match the channel name exactly 
                      as it appears in Discord (without the # symbol).
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
                    <h4 className="font-semibold mb-2">Message</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The content of the Discord message</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Contains the full text content of the Discord message that triggered the workflow. 
                      This includes all text, mentions, and formatting.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Image URLs</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">array[string]</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">URLs of images in the message</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Array of URLs pointing to any images, attachments, or embedded media in the Discord message. 
                      Empty array if no images are present.
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
              <CardTitle>Trigger Node Behavior</CardTitle>
              <CardDescription>
                How the node operates as a trigger rather than an executable node
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Trigger-Only Execution</h4>
                  <p className="text-neutral-400 text-sm mb-3">
                    This node cannot be executed as part of a workflow graph. It only functions as a trigger:
                  </p>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• <strong>No Manual Execution:</strong> Cannot be called by other nodes</li>
                    <li>• <strong>Event-Driven:</strong> Only activates when Discord messages arrive</li>
                    <li>• <strong>Workflow Starter:</strong> Initiates workflows automatically</li>
                    <li>• <strong>Real-Time Response:</strong> Immediate activation on message detection</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Channel Discovery</h4>
                  <p className="text-neutral-400 text-sm">
                    The node automatically discovers the Discord channel ID using the provided server and channel names. 
                    This ensures accurate targeting even if channel IDs change.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Discord Service Integration</CardTitle>
              <CardDescription>
                How the node interfaces with Discord services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Channel Lookup</h4>
                  <p className="text-neutral-400 text-sm">
                    Uses the Discord service to find channels by name within specific servers. The service handles 
                    authentication and permission validation automatically.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">User-Specific Access</h4>
                  <p className="text-neutral-400 text-sm">
                    Channel discovery is performed in the context of the specific user, ensuring proper access control 
                    and permission validation for each workflow execution.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Error Handling</h4>
                  <p className="text-neutral-400 text-sm">
                    Gracefully handles errors during channel discovery and message processing, returning error messages 
                    when Discord operations fail.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Message Processing</CardTitle>
              <CardDescription>
                How incoming Discord messages are processed and formatted
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Content Extraction</h4>
                  <p className="text-neutral-400 text-sm">
                    Extracts the full text content of Discord messages, including mentions, formatting, and special 
                    Discord syntax. Preserves the original message structure.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Image URL Collection</h4>
                  <p className="text-neutral-400 text-sm">
                    Automatically detects and collects URLs for all images, attachments, and embedded media in the 
                    message. Returns an empty array if no images are present.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Data Validation</h4>
                  <p className="text-neutral-400 text-sm">
                    Validates incoming message data and provides fallback error messages if the trigger data is 
                    malformed or incomplete.
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
              <CardTitle>Basic Discord Monitoring</CardTitle>
              <CardDescription>
                Monitor a general channel for messages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "serverName": "My Gaming Community",
  "channelName": "general"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Monitors the "general" channel in the "My Gaming Community" Discord server for new messages.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Support Channel Monitoring</CardTitle>
              <CardDescription>
                Monitor support channels for customer inquiries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "serverName": "Company Support",
  "channelName": "customer-help"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Monitors the "customer-help" channel in the "Company Support" server for new support requests.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Announcement Channel</CardTitle>
              <CardDescription>
                Monitor announcement channels for important updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "serverName": "Project Updates",
  "channelName": "announcements"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Monitors the "announcements" channel in the "Project Updates" server for new announcements and updates.
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
              <CardTitle>Discord Support Ticket Automation</CardTitle>
              <CardDescription>
                Automatically process support requests from Discord
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📱 Discord Message → 🤖 AI Analysis → 📋 Ticket Creation → 📧 Email Notification → 📊 Database Log</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Discord Read Configuration</h4>
                  <CodeBlock
                    code={`{
  "serverName": "Customer Support",
  "channelName": "help-requests"
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation Steps</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>Discord Read Message:</strong> Triggers on new help requests</li>
                    <li><strong>AI Analysis:</strong> Analyzes message content and urgency</li>
                    <li><strong>Ticket Creation:</strong> Creates support ticket in system</li>
                    <li><strong>Email Notification:</strong> Alerts support team</li>
                    <li><strong>Database Log:</strong> Records the interaction</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Content Moderation Pipeline</CardTitle>
              <CardDescription>
                Automatically moderate Discord content for inappropriate material
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically monitor Discord channels for inappropriate content, moderate messages, 
                    and take action based on content analysis results.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Discord Read Configuration</h4>
                  <CodeBlock
                    code={`{
  "serverName": "Community Server",
  "channelName": "general-chat"
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Moderation Process</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Discord message triggers workflow</li>
                    <li>AI analyzes message content for inappropriate material</li>
                    <li>Image analysis checks for inappropriate images</li>
                    <li>Automated actions based on moderation results</li>
                    <li>Logging and reporting of moderation actions</li>
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
                <li>• Use exact server and channel names as they appear in Discord</li>
                <li>• Ensure your Discord bot has proper permissions</li>
                <li>• Test the integration in a development server first</li>
                <li>• Monitor bot rate limits and API usage</li>
                <li>• Implement proper error handling in your workflows</li>
                <li>• Use descriptive channel names for better organization</li>
                <li>• Consider privacy and data handling requirements</li>
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
                <li>• Don't use channel names with special characters</li>
                <li>• Avoid monitoring too many channels simultaneously</li>
                <li>• Don't ignore Discord API rate limits</li>
                <li>• Avoid processing sensitive information without consent</li>
                <li>• Don't forget to handle image URL validation</li>
                <li>• Avoid hardcoding server/channel names</li>
                <li>• Don't process messages without proper error handling</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-indigo-500">
            <strong>Pro Tip:</strong> When setting up Discord monitoring, start with a single channel and gradually 
            expand. This helps you understand the message volume and optimize your workflows before scaling up to 
            multiple channels or servers.
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
                  <h4 className="font-semibold mb-2">Channel Not Found</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails to find the specified Discord channel
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify the server and channel names are exactly correct. Check that 
                    the bot has been added to the server and has proper permissions to view the channel.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Bot Permission Errors</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Bot cannot access channels or read messages
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Ensure the Discord bot has "Read Message History" and "View Channel" 
                    permissions. Check server role assignments and channel-specific permissions.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Integration Not Configured</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with Discord integration errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify Discord integration is properly configured in your system. 
                    Check API keys, bot tokens, and integration status.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Message Processing Errors</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Workflow fails when processing Discord messages
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check that your workflow can handle the message and image URL outputs. 
                    Implement proper error handling for malformed message data.
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
                <div className="text-sm text-neutral-400">Analyze Discord message content with AI</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/fetch-webpage">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Fetch Webpage Node</div>
                <div className="text-sm text-neutral-400">Process images from Discord messages</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/google-sheets-write">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Google Sheets Write Node</div>
                <div className="text-sm text-neutral-400">Log Discord interactions to spreadsheets</div>
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
