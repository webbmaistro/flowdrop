"use client"

import React from 'react';
import { GitCommit, Database, Settings, Shield } from 'lucide-react';
import {
  NodeLayout,
  NodeHeader,
  OverviewSection,
  PrerequisitesSection,
  NodeConfigurationSection,
  BestPracticesSection,
  TroubleshootingSection,
  TechnicalDetailsSection,
} from '@/components/docs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import CodeBlock from "@/components/ui/CodeBlock";

export default function GitHubNewCommitNode() {
  const prerequisites = [
    {
      icon: Database,
      title: "GitHub Integration",
      description: "Must be connected to access GitHub API",
      requirements: [
        "GitHub account connected",
        "Repository access permissions",
        "Webhook configuration for push events"
      ]
    },
    {
      icon: Shield,
      title: "Repository Access",
      description: "Required permissions for repository monitoring",
      requirements: [
        "Read access to target repository",
        "Webhook creation permissions",
        "Repository owner or collaborator access"
      ]
    },
    {
      icon: Settings,
      title: "Webhook Configuration",
      description: "GitHub webhook setup for push events",
      requirements: [
        "GitHub webhook configured for push events",
        "Webhook URL pointing to Flowdrop endpoint",
        "Secret token for webhook verification"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={GitCommit}
        title="GitHub New Commit"
        description="Triggers when a commit is pushed to a GitHub repository branch"
        nodeType="Trigger"
        category="GitHub Integration"
        iconName="GitCommit"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>GitHub New Commit</strong> node is a trigger that activates workflows when new commits are pushed to a specified GitHub repository and branch. This powerful integration enables automated responses to code changes, CI/CD workflows, and repository monitoring."
        keyFeatures={[
          "<strong>Branch-Specific Triggers:</strong> Monitor specific branches for commits",
          "<strong>Repository Filtering:</strong> Target specific repositories or owner/repo combinations",
          "<strong>Commit Metadata:</strong> Access commit SHA, message, and URL information",
          "<strong>Real-time Activation:</strong> Instant workflow triggering on push events",
          "<strong>Webhook-Based:</strong> Uses GitHub webhooks for reliable event delivery",
          "<strong>Security:</strong> Webhook signature verification for secure integration"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Repository",
              type: "text",
              required: true,
              valueType: "string",
              description: "Repository URL or owner/repo format (e.g., 'https://github.com/acme/tools' or 'acme/tools'). Must be a repository you have access to."
            },
            {
              name: "Branch",
              type: "text",
              required: true,
              valueType: "string",
              description: "Branch name to monitor for commits (e.g., 'main', 'develop', 'feature/new-feature'). Only commits pushed to this specific branch will trigger the workflow."
            }
          ]
        }}
        outputFields={[
          {
            name: "Repository",
            type: "string",
            required: true,
            valueType: "Repository full name",
            description: "The full repository name in owner/repo format. Useful for downstream nodes that need to identify which repository triggered the workflow."
          },
          {
            name: "Branch",
            type: "string",
            required: true,
            valueType: "Branch name",
            description: "The name of the branch where the commit was pushed. Helps downstream nodes understand the context of the commit."
          },
          {
            name: "Commit SHA",
            type: "string",
            required: true,
            valueType: "Commit hash",
            description: "The SHA hash of the commit that triggered the workflow. Use this for precise commit identification and API calls."
          },
          {
            name: "Commit Message",
            type: "string",
            required: true,
            valueType: "Commit message text",
            description: "The commit message associated with the push. Useful for conditional logic based on commit content."
          },
          {
            name: "Commit URL",
            type: "string",
            required: true,
            valueType: "GitHub commit URL",
            description: "Direct URL to the commit on GitHub. Useful for notifications, logging, or linking to the specific commit."
          }
        ]}
      />

      <TechnicalDetailsSection
        details={[
          {
            title: "Webhook Trigger Process",
            description: "How the node receives GitHub webhook events and triggers workflow execution",
            items: [
              {
                title: "Webhook Reception",
                description: "The GitHub New Commit trigger receives webhook events through GitHub's webhook infrastructure: Repository Configuration monitors specified repository and branch combinations, Event Filtering validates that push events match the configured branch, Data Extraction extracts commit metadata from the webhook payload, and Workflow Trigger automatically starts workflow execution with commit data."
              },
              {
                title: "Trigger Execution",
                description: "Uses the _trigger method to process incoming webhook data and provide it to the workflow. The node cannot be executed as part of a workflow graph since it's a trigger node."
              }
            ]
          },
          {
            title: "Data Processing",
            description: "How the node processes and validates GitHub webhook data",
            items: [
              {
                title: "Webhook Validation",
                description: "The node validates incoming webhook data to ensure it contains the expected repository, branch, and commit information before triggering the workflow."
              },
              {
                title: "Error Handling",
                description: "If an error occurs during webhook processing, the node returns an error message, allowing workflows to handle failures gracefully and provide appropriate responses."
              },
              {
                title: "Security Verification",
                description: "The node verifies webhook signatures to ensure the payload is authentic and comes from GitHub, protecting against unauthorized triggers."
              }
            ]
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>CI/CD Pipeline Trigger</CardTitle>
              <CardDescription>
                Automatically trigger builds and deployments on commits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "repository": "mycompany/myapp",
  "branch": "main"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Triggers deployment workflows whenever code is pushed to the main branch of the myapp repository.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Feature Branch Monitoring</CardTitle>
              <CardDescription>
                Monitor specific feature branches for development updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "repository": "acme/webapp",
  "branch": "feature/user-authentication"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Monitors the feature/user-authentication branch for commits and can trigger code review workflows or notifications.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Automated Documentation</CardTitle>
              <CardDescription>
                Generate documentation updates on code changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🔗 GitHub New Commit → 📊 Analyze Changes → 📝 Generate Docs → 🚀 Deploy Docs</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Automatically update documentation when commits are pushed to the main branch.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Code Quality Monitoring</CardTitle>
              <CardDescription>
                Monitor commits for quality and security issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🔗 GitHub New Commit → 🔍 Code Analysis → 🛡️ Security Check → 📧 Report Issues</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Analyze each commit for potential issues and send notifications to the development team.
                </p>
              </div>
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
              <CardTitle>Automated Release Process</CardTitle>
              <CardDescription>
                Complete release automation triggered by commits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🔗 GitHub New Commit → 🔄 If-Else (Branch Check) → 🏗️ Build → 🧪 Test → 📦 Package → 🚀 Deploy → 📢 Notify</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation Steps</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>GitHub New Commit:</strong> Triggers on commits to main branch</li>
                    <li><strong>Branch Check:</strong> Verify commit is on the correct branch</li>
                    <li><strong>Build Process:</strong> Compile and prepare the application</li>
                    <li><strong>Testing:</strong> Run automated tests on the new commit</li>
                    <li><strong>Packaging:</strong> Create deployment packages</li>
                    <li><strong>Deployment:</strong> Deploy to staging or production</li>
                    <li><strong>Notification:</strong> Send status updates to the team</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use specific branch names to avoid triggering on unwanted commits",
          "Verify repository access before configuring the trigger",
          "Test webhook configuration with sample commits",
          "Use commit message analysis for conditional logic",
          "Store commit SHA for audit trails and rollback capabilities",
          "Implement proper error handling for webhook failures",
          "Monitor webhook delivery and retry failed events"
        ]}
        donts={[
          "Don't monitor too many repositories simultaneously",
          "Avoid triggering on every branch unless necessary",
          "Don't ignore webhook signature verification",
          "Avoid processing sensitive data without encryption",
          "Don't forget to handle webhook timeout scenarios",
          "Avoid creating workflows that run too frequently",
          "Don't skip validating repository access permissions"
        ]}
        securityItems={[
          "Always verify webhook signatures from GitHub",
          "Use HTTPS endpoints for webhook URLs",
          "Implement rate limiting to prevent abuse",
          "Monitor webhook access logs regularly",
          "Use secure secret tokens for webhook authentication",
          "Validate repository permissions before processing",
          "Encrypt sensitive data in workflow processing"
        ]}
        proTip="When setting up GitHub webhooks, test with a small repository first to verify the configuration works correctly. Use branch-specific triggers to avoid unnecessary workflow executions and implement proper error handling to ensure reliable automation."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Webhook Not Triggering",
            symptoms: "Commits are pushed but workflow doesn't start",
            solution: "Verify the webhook URL is correct in GitHub repository settings, check that the branch name matches exactly, and ensure the webhook is configured for 'push' events. Test by making a small commit to verify the setup."
          },
          {
            title: "Wrong Repository Triggering",
            symptoms: "Workflow triggers from unexpected repositories",
            solution: "Check that the repository field matches exactly (including owner/repo format). Verify you have access to the repository and that the webhook is configured on the correct repository."
          },
          {
            title: "Branch Mismatch",
            symptoms: "Workflow doesn't trigger on commits to expected branch",
            solution: "Verify the branch name is spelled correctly and matches the exact branch name in GitHub. Branch names are case-sensitive and must match exactly."
          },
          {
            title: "Webhook Authentication Errors",
            symptoms: "Webhook requests are rejected with authentication errors",
            solution: "Check that the webhook secret is correctly configured in both GitHub and your webhook endpoint. Verify the signature verification process is working correctly."
          },
          {
            title: "Missing Commit Data",
            symptoms: "Workflow starts but commit information is incomplete",
            solution: "Verify that the GitHub webhook payload contains the expected data structure. Check that the webhook is configured to send the full payload and not just a summary."
          }
        ]}
      />

      {/* Related Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-neutral-700 hover:border-neutral-600 transition-colors">
            <CardHeader>
              <CardTitle>Webhook Node</CardTitle>
              <CardDescription>Generic webhook trigger for custom integrations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-400 mb-3">
                Use the generic webhook node for custom GitHub integrations or other webhook-based triggers.
              </p>
              <a href="/docs/nodes/webhook" className="text-primary-main hover:text-primary-light text-sm font-medium">
                View Documentation →
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-neutral-700 hover:border-neutral-600 transition-colors">
            <CardHeader>
              <CardTitle>If-Else Node</CardTitle>
              <CardDescription>Route workflow based on commit conditions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-400 mb-3">
                Use conditional logic to handle different types of commits or branch-specific workflows.
              </p>
              <a href="/docs/nodes/if-else" className="text-primary-main hover:text-primary-light text-sm font-medium">
                View Documentation →
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-neutral-700 hover:border-neutral-600 transition-colors">
            <CardHeader>
              <CardTitle>HTTP Request Node</CardTitle>
              <CardDescription>Make API calls to GitHub or other services</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-400 mb-3">
                Interact with GitHub API or other services based on commit information.
              </p>
              <a href="/docs/nodes/http-request" className="text-primary-main hover:text-primary-light text-sm font-medium">
                View Documentation →
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-neutral-700 hover:border-neutral-600 transition-colors">
            <CardHeader>
              <CardTitle>Node Library</CardTitle>
              <CardDescription>Explore all available nodes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-400 mb-3">
                Discover other nodes to build comprehensive GitHub automation workflows.
              </p>
              <a href="/docs/nodes" className="text-primary-main hover:text-primary-light text-sm font-medium">
                View Documentation →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </NodeLayout>
  );
}
