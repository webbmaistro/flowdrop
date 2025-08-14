"use client"

import React from 'react';
import { Mail, Settings, Code, Zap, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function GmailWriteLabelsNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-red-500/20 rounded-lg">
            <Mail className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Gmail Write Labels</h1>
            <p className="text-neutral-400">Create, modify, and manage Gmail labels programmatically</p>
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
              <p className="text-neutral-400">Gmail Integration</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">Gmail</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Gmail Write Labels</strong> node allows you to create, update, and manage Gmail labels 
          programmatically. This powerful automation tool integrates with Gmail's API to provide intelligent 
          email organization capabilities.
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• <strong>Dynamic Label Creation:</strong> Create labels based on workflow logic</li>
            <li>• <strong>Custom Styling:</strong> Set background and text colors for visual organization</li>
            <li>• <strong>Smart Visibility:</strong> Control how labels appear in Gmail interface</li>
            <li>• <strong>Error Handling:</strong> Built-in success/failure tracking</li>
            <li>• <strong>Real-time Updates:</strong> Labels are created instantly in your Gmail account</li>
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
                <Mail className="w-5 h-5 text-blue-500" />
                Google Integration
              </CardTitle>
              <CardDescription>
                Must be connected to access Gmail API
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Google account connected</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Gmail labels scope granted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Gmail modify scope (if applying labels to emails)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-purple-500" />
                Required Scopes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                                 <CodeBlock
                   code="https://www.googleapis.com/auth/gmail.labels"
                   lang="text"
                 />
                 <CodeBlock
                   code="https://www.googleapis.com/auth/gmail.modify"
                   lang="text"
                 />
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
                    <h4 className="font-semibold mb-2">labelName</h4>
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
                        <span className="ml-2 text-neutral-200">"Important", "Work"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Name of the label to create or modify. Use descriptive names for better organization.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">labelType</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">dropdown</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-green-500">Yes</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Options:</span>
                        <span className="ml-2 text-neutral-200">"user", "system"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Type of label to create. User labels are customizable, system labels are predefined.
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
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">backgroundColor</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">text</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-red-500">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Format:</span>
                        <span className="ml-2 text-neutral-200">Hex color code</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Hex color code for the label background (e.g., "#4285f4" for Google Blue).
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">textColor</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">text</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-red-500">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Format:</span>
                        <span className="ml-2 text-neutral-200">Hex color code</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Hex color code for the label text (e.g., "#ffffff" for white).
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">messageListVisibility</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">dropdown</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-red-500">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Options:</span>
                        <span className="ml-2 text-neutral-200">"show", "hide"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Controls whether the label is visible in the message list.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">labelListVisibility</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-neutral-400">Type:</span>
                        <span className="ml-2 text-neutral-200">dropdown</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Required:</span>
                        <span className="ml-2 text-red-500">No</span>
                      </div>
                      <div>
                        <span className="text-neutral-400">Options:</span>
                        <span className="ml-2 text-neutral-200">"labelShow", "labelHide"</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">
                      Controls whether the label appears in the label list sidebar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Output Fields" defaultOpen={false}>
          <Card className="border-neutral-700">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">labelId</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">string</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">Unique identifier of the created/modified label</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">labelName</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">string</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">Name of the label</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">success</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">boolean</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">Whether the operation was successful</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">error</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Type:</span>
                      <span className="ml-2 text-neutral-200">string</span>
                    </div>
                    <div>
                      <span className="text-neutral-400">Description:</span>
                      <span className="ml-2 text-neutral-200">Error message if operation failed</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CollapsibleSection>
      </section>

      {/* Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Basic Label Creation</CardTitle>
              <CardDescription>
                Create a simple label with default settings
              </CardDescription>
            </CardHeader>
            <CardContent>
                             <CodeBlock
                 code={`{
   "labelName": "Work",
   "labelType": "user",
   "backgroundColor": "#4285f4",
   "textColor": "#ffffff"
 }`}
                 lang="json"
               />
              <p className="text-neutral-400 mt-3">
                Creates a blue "Work" label that will be visible in both the message list and label sidebar.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Dynamic Label Based on Email Content</CardTitle>
              <CardDescription>
                Create labels based on AI analysis of email content
              </CardDescription>
            </CardHeader>
            <CardContent>
                             <CodeBlock
                 code={`{
   "labelName": "{{aiAnalysis.isImportant ? 'Important' : 'Regular'}}",
   "labelType": "user",
   "backgroundColor": "{{aiAnalysis.isImportant ? '#ea4335' : '#34a853'}}",
   "textColor": "#ffffff",
   "messageListVisibility": "show",
   "labelListVisibility": "labelShow"
 }`}
                 lang="json"
               />
              <p className="text-neutral-400 mt-3">
                Creates either an "Important" (red) or "Regular" (green) label based on AI analysis results.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Domain-Based Labeling</CardTitle>
              <CardDescription>
                Create labels based on email sender domain
              </CardDescription>
            </CardHeader>
            <CardContent>
                             <CodeBlock
                 code={`{
   "labelName": "{{emailTrigger.senderDomain}}",
   "labelType": "user",
   "backgroundColor": "#9c27b0",
   "textColor": "#ffffff"
 }`}
                 lang="json"
               />
              <p className="text-neutral-400 mt-3">
                Creates a label named after the sender's domain (e.g., "gmail.com", "company.com").
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
              <CardTitle>Auto-label Important Emails</CardTitle>
              <CardDescription>
                Complete workflow for intelligent email organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📧 Email Trigger → 🤖 AI Analysis → 🏷️ Gmail Write Labels → 📱 Notification</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Step-by-Step Configuration</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>Email Trigger:</strong> Configure to trigger on new email arrival</li>
                    <li><strong>AI Analysis:</strong> Analyze email content for importance indicators</li>
                    <li><strong>Gmail Write Labels:</strong> Create appropriate label based on analysis</li>
                    <li><strong>Conditional Logic:</strong> Handle success/failure scenarios</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Project-Based Email Organization</CardTitle>
              <CardDescription>
                Organize emails by project or client automatically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Use Case</h4>
                  <p className="text-sm text-neutral-400">
                    Automatically create and apply project-specific labels based on email content, 
                    sender information, or keywords in the subject line.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                    <li>Extract project keywords from email content</li>
                                         <li>Create dynamic label names (e.g., "Project-ProjectName")</li>
                    <li>Use consistent color coding for project categories</li>
                    <li>Apply labels to organize related emails</li>
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
                <li>• Use consistent naming conventions</li>
                <li>• Implement a logical color scheme</li>
                <li>• Always check the success output field</li>
                <li>• Handle errors gracefully</li>
                <li>• Use descriptive label names</li>
                <li>• Consider label hierarchy and organization</li>
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
                <li>• Don't create labels in rapid succession</li>
                <li>• Avoid overly long label names</li>
                <li>• Don't ignore API rate limits</li>
                <li>• Avoid creating duplicate labels</li>
                <li>• Don't use special characters in names</li>
                <li>• Avoid creating too many labels</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Callout emoji="💡" color="border-blue-500">
            <strong>Pro Tip:</strong> Create a label naming convention document for your team to ensure 
            consistency across all automated workflows. This makes it easier to find and manage labels later.
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
                  <h4 className="font-semibold mb-2">Authentication Errors</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails with permission denied errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Ensure Google integration is properly connected and Gmail labels scope is granted
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Label Already Exists</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node succeeds but label isn't created
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Check if label exists before creating, or handle gracefully in your workflow
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">API Rate Limits</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> Node fails intermittently with quota exceeded errors
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> Implement delays between label creation operations and monitor API usage
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
          <Link href="/docs/nodes/gmail-read-emails">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Gmail Read Emails Node</div>
                <div className="text-sm text-neutral-400">Read and analyze email content</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/ai-workflows-explained">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">AI Workflows Guide</div>
                <div className="text-sm text-neutral-400">Learn about AI-powered automation</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </Button>
          </Link>
          
          <Link href="/docs/workflow-builder-basics">
            <Button variant="outline" className="justify-start h-auto p-4 w-full">
              <div className="text-left">
                <div className="font-semibold">Workflow Builder Basics</div>
                <div className="text-sm text-neutral-400">Learn how to build workflows</div>
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
