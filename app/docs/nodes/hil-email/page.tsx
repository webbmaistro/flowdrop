"use client"

import React from 'react';
import { Mail, User, Clock, CheckCircle, AlertTriangle, ExternalLink, MessageSquare, Zap } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, RelatedResourceCard } from '@/components/ui';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function HILEmailNode() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Mail className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Human Approval (Email)</h1>
            <p className="text-neutral-400">Pause workflow and email a human for approval before continuing</p>
          </div>
        </div>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Node Type</h3>
              <p className="text-neutral-400">Human in the Loop</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Category</h3>
              <p className="text-neutral-400">Human in the Loop</p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
              <p className="text-neutral-400">Mail</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Human Approval (Email)</strong> node is a Human in the Loop node that pauses your workflow 
          and sends an email to a human for approval before continuing. This is essential for workflows that 
          require human oversight, decision-making, or validation at critical steps.
        </p>
        
        <Callout emoji="⚠️" color="border-yellow-500">
          <strong>Important:</strong> This node will pause your workflow execution until a human approves the request. 
          The workflow will not continue until the approval link in the email is clicked.
        </Callout>
      </section>

      {/* Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-neutral-800 border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary-main" />
                Content Approval
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300">
                Send generated content to a manager for review before publishing to social media or sending to customers.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-800 border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Risk Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300">
                Require human approval for high-value transactions, sensitive data processing, or compliance-critical operations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-800 border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-green-500" />
                Customer Communication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300">
                Get approval before sending important emails to customers, especially for sensitive or high-value communications.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-neutral-800 border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-500" />
                Quality Control
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300">
                Have humans review AI-generated content, data analysis results, or automated decisions before they're finalized.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Configuration</h2>
        
        <div className="space-y-6">
          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-semibold mb-4">Input Fields</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-400 mb-2">To (Required)</h4>
                <p className="text-neutral-300 mb-2">
                  The email address of the person who will receive the approval request.
                </p>
                <div className="bg-neutral-900 rounded-lg p-3">
                  <CodeBlock language="text" code="manager@company.com" />
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-400 mb-2">Subject (Optional)</h4>
                <p className="text-neutral-300 mb-2">
                  The subject line for the approval email. Defaults to "Approval required: Flowdrop workflow step".
                </p>
                <div className="bg-neutral-900 rounded-lg p-3">
                  <CodeBlock language="text" code="Please approve: Marketing campaign launch" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-semibold mb-4">Output Fields</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-400 mb-2">Request Sent</h4>
                <p className="text-neutral-300">
                  Boolean value indicating whether the approval email was successfully sent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        
        <div className="space-y-6">
          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-semibold mb-4">Execution Flow</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-main rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Workflow Pauses</h4>
                  <p className="text-neutral-300">
                    When the node executes, the workflow pauses and waits for human approval.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-main rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email Sent</h4>
                  <p className="text-neutral-300">
                    An approval email is sent to the specified recipient with a secure approval link.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-main rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Human Reviews</h4>
                  <p className="text-neutral-300">
                    The human recipient reviews the request and clicks the approval link in the email.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Workflow Resumes</h4>
                  <p className="text-neutral-300">
                    Once approved, the workflow automatically resumes and continues to the next node.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Callout emoji="🔒" color="border-green-500">
            <strong>Security:</strong> Each approval link is unique and tied to a specific workflow execution. 
            The links expire after a certain period and can only be used once.
          </Callout>
        </div>
      </section>

      {/* Example Workflow */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Example Workflow</h2>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="text-xl font-semibold mb-4">Content Approval Workflow</h3>
          <p className="text-neutral-300 mb-4">
            Here's how you might use the Human Approval (Email) node in a content marketing workflow:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-neutral-700 rounded-lg">
              <div className="w-6 h-6 bg-primary-main rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
              <span className="text-neutral-200">AI generates blog post content</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-neutral-700 rounded-lg">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <span className="text-neutral-200">Human Approval (Email) - Send to editor for review</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-neutral-700 rounded-lg">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
              <span className="text-neutral-200">Publish to website (after approval)</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-neutral-700 rounded-lg">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
              <span className="text-neutral-200">Share on social media</span>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        
        <div className="space-y-4">
          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Do's
            </h3>
            <ul className="space-y-2 text-neutral-300">
              <li>• Use clear, descriptive email subjects that explain what needs approval</li>
              <li>• Include context in the email about what the workflow is doing</li>
              <li>• Set up notifications for when approvals are needed</li>
              <li>• Consider timeouts for urgent approvals</li>
              <li>• Test the approval flow before deploying to production</li>
            </ul>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Don'ts
            </h3>
            <ul className="space-y-2 text-neutral-300">
              <li>• Don't use this node for high-frequency workflows without proper monitoring</li>
              <li>• Don't forget to set up fallback processes for unapproved requests</li>
              <li>• Don't use generic email subjects that don't explain the context</li>
              <li>• Don't rely solely on email - consider other notification methods</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Nodes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Related Nodes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <RelatedResourceCard
            href="/docs/nodes/if-else"
            title="If Else"
            description="Add conditional logic to handle different approval outcomes"
          />

          <RelatedResourceCard
            href="/docs/nodes/schedule"
            title="Schedule"
            description="Set up recurring workflows that require periodic approvals"
          />
        </div>
      </section>
    </div>
  );
}
