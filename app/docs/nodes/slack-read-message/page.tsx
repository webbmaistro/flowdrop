"use client"

import React from 'react';
import { MessageSquare, Settings, Code, AlertTriangle, CheckCircle, ExternalLink, Zap, Bell, Hash } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, RelatedResourceCard } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function SlackReadMessageNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary-main/20 rounded-lg">
            <MessageSquare className="w-6 h-6 text-primary-main" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Slack Read Message</h1>
            <p className="text-neutral-400">Reads the latest message from a Slack channel</p>
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
              <p className="text-neutral-400">Integration</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">MessageSquare</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Slack Read Message</strong> node is a trigger node that monitors Slack channels and reads 
          the latest messages. This powerful integration enables workflows to automatically respond to Slack 
          activity, process incoming messages, and extract both text content and image URLs for further processing.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>Slack Integration:</strong> Connects directly to Slack workspaces and channels</li>
            <li>• <strong>Message Reading:</strong> Automatically reads the latest messages from specified channels</li>
            <li>• <strong>Content Extraction:</strong> Extracts both text content and image URLs from messages</li>
            <li>• <strong>Channel Monitoring:</strong> Monitors specific Slack channels for new activity</li>
            <li>• <strong>OAuth Authentication:</strong> Secure access using user&apos;s Slack OAuth tokens</li>
            <li>• <strong>Trigger-Based:</strong> Activates workflows when new messages arrive</li>
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
                <Bell className="w-5 h-5 text-primary-main" />
                Slack Integration
              </CardTitle>
              <CardDescription>
                Must have Slack workspace access and proper OAuth setup
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Slack workspace with proper permissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">OAuth integration configured for Slack</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">User access token for the Slack workspace</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hash className="w-5 h-5 text-purple-500" />
                Channel Access
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-neutral-300">
                  <strong>Channel Permissions:</strong> Access to read messages from target channels
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Channel Names:</strong> Knowledge of the exact channel names to monitor
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Workspace Access:</strong> Member of the Slack workspace being monitored
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
                  <strong>OAuth Service:</strong> Access to OAuth service through NodeServiceRegistry
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Slack API:</strong> Internet connectivity for Slack API communication
                </div>
                <div className="text-sm text-neutral-300">
                  <strong>Trigger System:</strong> Workflow trigger system for message processing
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
                        <span className="text-neutral-400">Value Type:</span>
                        <span className="ml-2 text-neutral-200">string</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      The Slack channel name to read from (without the # symbol). This should be the exact 
                      channel name as it appears in Slack. The node will automatically resolve this to a 
                      channel ID for efficient message monitoring.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-neutral-700">
              <CardHeader>
                <CardTitle>Optional Fields</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="text-neutral-400 mb-2">
                    <MessageSquare className="w-12 h-12 mx-auto mb-3 text-primary-main/50" />
                  </div>
                  <p className="text-neutral-400">
                    The Slack Read Message node has <strong>no optional fields</strong>. All configuration 
                    is handled through the single required channel name input.
                  </p>
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
                        <span className="ml-2 text-neutral-200">The content of the Slack message</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Contains the text content of the Slack message that triggered the workflow. This includes 
                      all the message text, emojis, and formatting that was sent to the channel.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Image URLs</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">array_string</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Description:</span>
                        <span className="ml-2 text-neutral-200">URLs of images in the message</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      An array of image URLs that were included in the Slack message. This allows workflows 
                      to process images separately from text content, enabling image analysis, storage, or 
                      other image-related automation.
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
              <CardTitle>Slack Integration Process</CardTitle>
              <CardDescription>
                How the node connects to Slack and processes messages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">OAuth Authentication</h4>
                  <p className="text-neutral-400 text-sm">
                    The node uses <code className="bg-neutral-700 px-1 rounded">NodeServiceRegistry.getService&lt;OAuthService&gt;(ServiceType.OAUTH)</code> 
                    to retrieve the user&apos;s Slack access token. This ensures secure, authenticated access to 
                    the Slack workspace.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Channel Resolution</h4>
                  <p className="text-neutral-400 text-sm">
                    The <code className="bg-neutral-700 px-1 rounded">getChannelId()</code> method converts the channel name to a Slack channel ID 
                    using <code className="bg-neutral-700 px-1 rounded">slack.findChannelByName()</code>. This enables efficient message matching 
                    and reduces API calls during trigger events.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Message Processing</h4>
                  <p className="text-neutral-400 text-sm">
                    When triggered, the node receives <code className="bg-neutral-700 px-1 rounded">SlackNodeTriggerData</code> containing the message 
                    content and image URLs. It processes this data and outputs it in the standard workflow format.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Trigger Execution</CardTitle>
              <CardDescription>
                How the trigger node handles Slack message events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Execution Prevention</h4>
                  <p className="text-neutral-400 text-sm">
                    Like all trigger nodes, the Slack Read node cannot be executed as part of a workflow graph. 
                    When <code className="bg-neutral-700 px-1 rounded">_execute()</code> is called, it throws an error indicating 
                    it&apos;s a trigger node.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Trigger Handling</h4>
                  <p className="text-neutral-400 text-sm">
                    The <code className="bg-neutral-700 px-1 rounded">_trigger()</code> method processes incoming Slack message data and returns 
                    two output fields: the message content and an array of image URLs. This data is then 
                    available to downstream nodes in the workflow.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Data Structure</h4>
                  <p className="text-neutral-400 text-sm">
                    The trigger data interface <code className="bg-neutral-700 px-1 rounded">SlackNodeTriggerData</code> ensures type safety 
                    and provides a consistent structure for message content and image URLs from Slack.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Examples & Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Customer Support Automation</CardTitle>
              <CardDescription>
                Automatically process customer support requests from Slack
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Monitor a customer support channel for new messages and automatically create support tickets, 
                    categorize requests, and route them to appropriate team members based on message content.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📱 Slack Read Message → 🤖 LLM Prompt (categorize) → 📊 If-Else (route) → 📧 Send Email → 📝 Create Ticket</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Configuration</h4>
                  <CodeBlock
                    code={`{
  "channelName": "customer-support"
}`}
                    lang="json"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Content Moderation</CardTitle>
              <CardDescription>
                Automatically moderate content in community channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Monitor community channels for inappropriate content, automatically flag messages for review, 
                    and take action based on content analysis results.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Processing Steps</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Slack Read Message captures new messages</li>
                    <li>LLM Prompt analyzes content for inappropriate language</li>
                    <li>If-Else routes based on moderation results</li>
                    <li>Webhook notifies moderators of flagged content</li>
                    <li>Automated actions taken for policy violations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Image Processing Workflows</CardTitle>
              <CardDescription>
                Process images shared in Slack channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically process images shared in Slack channels for content analysis, storage, 
                    or integration with other systems like image recognition services.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Image Workflow</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📱 Slack Read Message → 🖼️ For Each (image URLs) → 🔍 Image Analysis → 💾 Store Results → 📊 Generate Report</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Benefits</h4>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• <strong>Automated Processing:</strong> No manual image handling required</li>
                    <li>• <strong>Content Analysis:</strong> AI-powered image recognition and analysis</li>
                    <li>• <strong>Storage Integration:</strong> Automatic image storage and organization</li>
                    <li>• <strong>Reporting:</strong> Generate insights from image content</li>
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
                <li>• Use exact channel names without the # symbol</li>
                <li>• Ensure proper OAuth permissions for the Slack workspace</li>
                <li>• Test channel access before deploying workflows</li>
                <li>• Handle both text and image content in your workflows</li>
                <li>• Implement proper error handling for Slack API failures</li>
                <li>• Monitor OAuth token expiration and refresh</li>
                <li>• Use appropriate rate limiting for Slack API calls</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Don&apos;s
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Don&apos;t include # in channel names</li>
                <li>• Avoid monitoring too many channels simultaneously</li>
                <li>• Don&apos;t assume all messages will have images</li>
                <li>• Avoid hardcoding channel names in workflows</li>
                <li>• Don&apos;t ignore OAuth token management</li>
                <li>• Avoid processing sensitive content without proper security</li>
                <li>• Don&apos;t forget to handle Slack API rate limits</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-blue-500">
            <strong>Pro Tip:</strong> When setting up Slack Read Message workflows, always test with a small, 
            controlled channel first. This helps verify your OAuth setup, channel permissions, and workflow 
            logic before scaling to busier channels.
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
                  <h4 className="font-semibold mb-2">OAuth Token Issues</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with authentication or token errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify that the Slack OAuth integration is properly configured, 
                    the user has authorized the app, and the access token hasn&apos;t expired. Re-authenticate 
                    if necessary.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Channel Access Denied</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node cannot find or access the specified channel
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check that the channel name is exactly correct (without #), 
                    the user is a member of the channel, and has permission to read messages. Verify the 
                    channel exists in the workspace.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">No Messages Triggering</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Workflow doesn&apos;t trigger when new messages arrive
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Ensure the workflow trigger system is properly configured to 
                    listen for Slack events. Check that the channel ID resolution is working correctly and 
                    the trigger is properly connected to the Slack event stream.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Image URL Processing Failures</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Image URLs are empty or invalid
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Verify that the Slack message actually contains images. Some 
                    messages may only have text content. Always check if the imageUrls array has content 
                    before processing images in downstream nodes.
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
          <Link href="/docs/nodes/trigger">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Trigger Node</div>
                <div className="text-sm text-neutral-400">Basic workflow entry point</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/llm-prompt">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">LLM Prompt Node</div>
                <div className="text-sm text-neutral-400">Analyze Slack message content</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/nodes/if-else">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">If-Else Node</div>
                <div className="text-sm text-neutral-400">Route based on message content</div>
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
