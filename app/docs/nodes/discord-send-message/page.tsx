"use client"

import React from 'react';
import { Send, Database, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink, Hash, MessageSquare } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function DiscordSendMessageNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-500/20 rounded-lg">
            <Send className="w-6 h-6 text-indigo-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Discord Send Message</h1>
            <p className="text-neutral-400">Send messages to Discord channels using server and channel names</p>
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
              <p className="text-neutral-400">Discord Integration</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">Send</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Discord Send Message</strong> node is an action node that sends messages to Discord channels 
          using server and channel names. This powerful integration allows you to automate Discord communications 
          from your workflows, sending notifications, updates, and responses to specific channels automatically.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>Discord Integration:</strong> Seamlessly sends messages to Discord servers and channels</li>
            <li>• <strong>User Authorization:</strong> Requires user authorization and access to target channels</li>
            <li>• <strong>Name-Based Targeting:</strong> Uses server and channel names for easy configuration</li>
            <li>• <strong>Message Content:</strong> Supports full text content with Discord formatting</li>
            <li>• <strong>Success Tracking:</strong> Returns message ID and success status for workflow control</li>
            <li>• <strong>Error Handling:</strong> Graceful error handling with fallback responses</li>
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
                  <span className="text-sm">User has authorized Discord access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Valid Discord bot token and permissions</span>
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
                  <strong>Server Membership:</strong> User must be a member of the target Discord server
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Channel Permissions:</strong> User needs send message permissions for the target channel
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Text Channel:</strong> Target must be a text channel (not voice or announcement)
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
                  <strong>Discord Service:</strong> Access to Discord service for message operations
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
                      Must match the server name exactly as it appears in Discord. Case-insensitive.
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
                        <span className="text-neutral-400">Default:</span>
                        <span className="ml-2 text-neutral-200">"general"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The exact name of the Discord channel to send the message to. Must match the channel 
                      name exactly as it appears in Discord (without the # symbol). Case-insensitive.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Message Content</h4>
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
                        <span className="ml-2 text-neutral-200">"Hello from the workflow!"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The text content of the message to send. Supports Discord formatting, mentions, 
                      and special syntax. Cannot be empty.
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
                    <h4 className="font-semibold mb-2">Message ID</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">The ID of the sent Discord message</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Contains the unique Discord message ID if the message was sent successfully, or an empty 
                      string if the operation failed. Useful for tracking and referencing sent messages.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Success</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">boolean</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">Whether the message was sent successfully</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Boolean value indicating whether the Discord message was sent successfully. 
                      Use this to implement error handling and retry logic in your workflows.
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
              <CardTitle>Message Sending Process</CardTitle>
              <CardDescription>
                How the node processes and sends Discord messages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Message Preparation</h4>
                  <p className="text-neutral-400 text-sm mb-3">
                    The node prepares the Discord message using the Discord.js MessageCreateOptions format:
                  </p>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• <strong>Content:</strong> The message text from the input field</li>
                    <li>• <strong>Format:</strong> Discord.js MessageCreateOptions structure</li>
                    <li>• <strong>Validation:</strong> Ensures message content is not empty</li>
                    <li>• <strong>Encoding:</strong> Properly handles special characters and formatting</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Discord Service Integration</h4>
                  <p className="text-neutral-400 text-sm">
                    Uses the Discord service to send messages with user-specific authorization. The service 
                    handles channel discovery, permission validation, and message delivery automatically.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>User Authorization & Access Control</CardTitle>
              <CardDescription>
                How the node ensures proper user access and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">User-Specific Operations</h4>
                  <p className="text-neutral-400 text-sm">
                    All Discord operations are performed in the context of the specific user who owns the workflow. 
                    This ensures proper access control and prevents unauthorized message sending.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Permission Validation</h4>
                  <p className="text-neutral-400 text-sm">
                    The Discord service automatically validates that the user has access to the specified server 
                    and channel, and has permission to send messages before attempting to send.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Channel Discovery</h4>
                  <p className="text-neutral-400 text-sm">
                    Automatically discovers the Discord channel ID using the provided server and channel names. 
                    This ensures accurate targeting even if channel IDs change.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Error Handling & Fallbacks</CardTitle>
              <CardDescription>
                How the node handles errors and provides fallback responses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Try-Catch Error Handling</h4>
                  <p className="text-neutral-400 text-sm">
                    Wraps the entire message sending process in a try-catch block to gracefully handle any 
                    Discord API errors, network issues, or permission problems.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Fallback Response</h4>
                  <p className="text-neutral-400 text-sm">
                    When errors occur, returns a fallback response with an empty message ID and false success 
                    status, allowing workflows to implement proper error handling and retry logic.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Console Logging</h4>
                  <p className="text-neutral-400 text-sm">
                    Logs execution details and errors to the console for debugging purposes, helping developers 
                    troubleshoot Discord integration issues.
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
              <CardTitle>Basic Message Sending</CardTitle>
              <CardDescription>
                Send a simple message to a general channel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "serverName": "My Gaming Community",
  "channelName": "general",
  "messageContent": "Hello everyone! The workflow has completed successfully."
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Sends a simple greeting message to the "general" channel in the "My Gaming Community" server.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Announcement Message</CardTitle>
              <CardDescription>
                Send important announcements to an announcements channel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "serverName": "Company Updates",
  "channelName": "announcements",
  "messageContent": "🚨 **IMPORTANT UPDATE**: New system deployment scheduled for tonight at 2 AM UTC. Please ensure all work is saved."
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Sends a formatted announcement with Discord markdown to the announcements channel.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Content with Workflow Data</CardTitle>
              <CardDescription>
                Send messages with content from workflow execution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "serverName": "Project Monitoring",
  "channelName": "alerts",
  "messageContent": "📊 **Workflow Status**: {{workflowData.status}} - {{workflowData.details}}"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3">
                Sends a dynamic status message using workflow data variables for real-time monitoring updates.
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
              <CardTitle>Automated Status Notifications</CardTitle>
              <CardDescription>
                Send Discord notifications for workflow completion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📥 Data Processing → 🔄 Workflow Execution → ✅ Success Check → 📱 Discord Notification</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Discord Send Configuration</h4>
                  <CodeBlock
                    code={`{
  "serverName": "Team Notifications",
  "channelName": "workflow-status",
  "messageContent": "✅ **Workflow Complete**: {{workflowData.workflowName}} finished successfully at {{workflowData.completionTime}}"
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation Steps</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>Data Processing:</strong> Execute the main workflow logic</li>
                    <li><strong>Success Check:</strong> Verify workflow completion status</li>
                    <li><strong>Discord Notification:</strong> Send status update to team channel</li>
                    <li><strong>Success Tracking:</strong> Monitor notification delivery status</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Customer Support Response Automation</CardTitle>
              <CardDescription>
                Automatically respond to support tickets via Discord
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically send Discord messages to support channels when tickets are created, 
                    updated, or resolved, keeping the team informed in real-time.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Discord Send Configuration</h4>
                  <CodeBlock
                    code={`{
  "serverName": "Support Team",
  "channelName": "ticket-updates",
  "messageContent": "🎫 **New Ticket Created**: {{ticketData.id}} - {{ticketData.title}}\nPriority: {{ticketData.priority}}\nCustomer: {{ticketData.customerName}}"
}`}
                    lang="json"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Automation Process</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Support ticket system triggers workflow</li>
                    <li>Workflow processes ticket data and extracts key information</li>
                    <li>Discord message is sent to appropriate support channel</li>
                    <li>Team receives immediate notification with ticket details</li>
                    <li>Success status is tracked for monitoring purposes</li>
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
                <li>• Ensure the user has proper permissions in the target channel</li>
                <li>• Test the integration in a development server first</li>
                <li>• Implement proper error handling based on success status</li>
                <li>• Use Discord markdown for better message formatting</li>
                <li>• Monitor message delivery success rates</li>
                <li>• Consider rate limits when sending multiple messages</li>
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
                <li>• Don't send messages to channels the user can't access</li>
                <li>• Avoid sending empty or very long messages</li>
                <li>• Don't ignore the success status in your workflows</li>
                <li>• Avoid hardcoding server/channel names</li>
                <li>• Don't send sensitive information without encryption</li>
                <li>• Avoid sending messages too frequently</li>
                <li>• Don't forget to handle Discord API rate limits</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-indigo-500">
            <strong>Pro Tip:</strong> When setting up Discord message automation, start with simple notifications 
            and gradually add complexity. Use the success status to implement retry logic and ensure your 
            important messages are delivered reliably.
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
                    the user has access to the server and channel. Ensure the channel is a text channel.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Permission Errors</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with permission or access denied errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Ensure the user has "Send Messages" permission in the target channel. 
                    Check server role assignments and channel-specific permissions.
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
                  <h4 className="font-semibold mb-2">Message Sending Failures</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node returns success: false or empty message ID
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check the console logs for detailed error information. Verify 
                    the message content is not empty and doesn't exceed Discord's message length limits.
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
          <Link href="/docs/nodes/discord-read-message">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Discord Read Message Node</div>
                <div className="text-sm text-neutral-400">Read messages from Discord channels</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/llm-prompt">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">LLM Prompt Node</div>
                <div className="text-sm text-neutral-400">Generate AI-powered Discord messages</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/google-sheets-write">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Google Sheets Write Node</div>
                <div className="text-sm text-neutral-400">Log Discord message history</div>
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
