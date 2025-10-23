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

export default function GitHubReadCommitsNode() {
  const prerequisites = [
    {
      icon: Database,
      title: "GitHub Integration",
      description: "Must be connected to access GitHub API",
      requirements: [
        "GitHub account connected",
        "Repository access permissions",
        "Valid GitHub access token"
      ]
    },
    {
      icon: Shield,
      title: "Repository Access",
      description: "Required permissions for reading commits",
      requirements: [
        "Read access to target repository",
        "Repository must be accessible via GitHub API",
        "Valid repository URL or owner/repo format"
      ]
    },
    {
      icon: Settings,
      title: "API Configuration",
      description: "GitHub API setup for commit retrieval",
      requirements: [
        "GitHub API access token with appropriate scopes",
        "Internet connectivity for GitHub API calls",
        "Proper error handling for API failures"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        logo="/logos/github.svg"
        title="GitHub Read Commits"
        description="Reads recent commits from a GitHub repository"
        nodeType="Action"
        category="GitHub Integration"
        iconName="GitCommit"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>GitHub Read Commits</strong> node fetches recent commits from a specified GitHub repository and branch. This powerful action node enables you to retrieve commit history, analyze code changes, and build workflows around repository activity."
        keyFeatures={[
          "<strong>Branch-Specific Reading:</strong> Read commits from specific branches or default branch",
          "<strong>Flexible Repository Input:</strong> Accept GitHub URLs or owner/repo format",
          "<strong>Configurable Limits:</strong> Control the number of commits returned (1-100)",
          "<strong>Rich Commit Data:</strong> Access commit SHA, message, author, and committer information",
          "<strong>Dynamic Repository Selection:</strong> Auto-populate repository options from connected GitHub account",
          "<strong>Comprehensive Output:</strong> Returns detailed commit information including author details and URLs"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Repository",
              type: "dynamic_select",
              required: true,
              valueType: "string",
              description: "Repository URL or owner/repo format (e.g., 'https://github.com/acme/tools' or 'acme/tools'). Must be a repository you have access to. The dropdown will auto-populate with your accessible repositories."
            },
            {
              name: "Branch",
              type: "text",
              required: false,
              valueType: "string",
              description: "Branch name to read commits from. Defaults to the repository's default branch (usually 'main'). Leave empty to use the default branch."
            },
            {
              name: "Limit",
              type: "number",
              required: false,
              valueType: "number",
              description: "Maximum number of commits to return (1-100). Defaults to 20 if not specified. Higher limits may take longer to process."
            }
          ]
        }}
        outputFields={[
          {
            name: "Commits",
            type: "array_json",
            required: true,
            valueType: "Array of commit objects",
            description: "Array of commit objects containing SHA, message, author, committer, and URL information. Each commit includes detailed metadata for analysis and processing."
          },
          {
            name: "Repository",
            type: "string",
            required: true,
            valueType: "Repository full name",
            description: "The full repository name in owner/repo format. Useful for downstream nodes that need to identify which repository was queried."
          },
          {
            name: "Branch",
            type: "string",
            required: true,
            valueType: "Branch name",
            description: "The name of the branch that was queried for commits. Helps downstream nodes understand the context of the retrieved commits."
          },
          {
            name: "Total Count",
            type: "number",
            required: true,
            valueType: "Number of commits",
            description: "The actual number of commits returned. Useful for validation and conditional logic based on commit count."
          },
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Success status",
            description: "Whether the operation succeeded. Use this for error handling and workflow control."
          }
        ]}
      />

      <TechnicalDetailsSection
        details={[
          {
            title: "Repository Parsing",
            description: "How the node processes different repository input formats",
            items: [
              {
                title: "URL Format Support",
                description: "The node accepts full GitHub URLs (https://github.com/owner/repo) and automatically extracts the owner and repository name from the URL path."
              },
              {
                title: "Owner/Repo Format",
                description: "Direct owner/repo format (e.g., 'acme/tools') is supported for quick repository specification without full URLs."
              },
              {
                title: "Validation",
                description: "Repository input is validated to ensure it's a valid GitHub repository format and that the user has access to the specified repository."
              }
            ]
          },
          {
            title: "GitHub API Integration",
            description: "How the node interacts with GitHub's Commits API",
            items: [
              {
                title: "Authentication",
                description: "Uses the connected GitHub access token to authenticate API requests and ensure proper permissions for repository access."
              },
              {
                title: "Branch Handling",
                description: "When a branch is specified, it's used as the SHA parameter for the GitHub API. If no branch is provided, the repository's default branch is used."
              },
              {
                title: "Pagination",
                description: "The node uses GitHub's pagination system to retrieve the specified number of commits, with a maximum limit of 100 commits per request."
              }
            ]
          },
          {
            title: "Data Transformation",
            description: "How commit data is processed and formatted for output",
            items: [
              {
                title: "Commit Structure",
                description: "Each commit is transformed to include SHA, short SHA (7 characters), message, author details, committer details, and GitHub URL for easy access and processing."
              },
              {
                title: "Author Information",
                description: "Author data includes name, email, date, GitHub username, and avatar URL when available from the GitHub API response."
              },
              {
                title: "Committer Information",
                description: "Committer data includes name, email, date, GitHub username, and avatar URL, which may differ from author information in some cases."
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
              <CardTitle>Recent Commits Analysis</CardTitle>
              <CardDescription>
                Analyze recent commits for code review and quality assessment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "repository": "mycompany/webapp",
  "branch": "main",
  "limit": 10
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Retrieves the 10 most recent commits from the main branch for analysis, code review, or automated quality checks.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Feature Branch Monitoring</CardTitle>
              <CardDescription>
                Monitor commits on specific feature branches
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "repository": "acme/mobile-app",
  "branch": "feature/user-authentication",
  "limit": 50
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Monitors commits on the feature/user-authentication branch to track development progress and changes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Commit History Reporting</CardTitle>
              <CardDescription>
                Generate reports on repository activity and commit patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🔗 GitHub Read Commits → 📊 Analyze Commits → 📈 Generate Report → 📧 Send Report</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Automatically generate weekly or monthly commit reports for project stakeholders.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Automated Code Review</CardTitle>
              <CardDescription>
                Trigger code review processes based on recent commits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🔗 GitHub Read Commits → 🔍 Analyze Changes → 🤖 AI Code Review → 📝 Generate Review → 📧 Notify Team</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Automatically review recent commits using AI to identify potential issues and generate review comments.
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
              <CardTitle>Automated Release Notes</CardTitle>
              <CardDescription>
                Generate release notes from recent commits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🔗 GitHub Read Commits → 📝 LLM Prompt (Generate Notes) → 📄 Format Release Notes → 📧 Send to Team</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation Steps</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>GitHub Read Commits:</strong> Retrieve recent commits from main branch</li>
                    <li><strong>Commit Analysis:</strong> Process commit messages and metadata</li>
                    <li><strong>LLM Processing:</strong> Use AI to generate human-readable release notes</li>
                    <li><strong>Formatting:</strong> Structure the notes in a professional format</li>
                    <li><strong>Distribution:</strong> Send release notes to stakeholders</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Developer Activity Dashboard</CardTitle>
              <CardDescription>
                Create a dashboard showing recent development activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🔗 GitHub Read Commits → 📊 Process Data → 📈 Create Dashboard → 🚀 Deploy Dashboard</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Implementation Steps</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-neutral-300">
                    <li><strong>Data Collection:</strong> Read commits from multiple repositories</li>
                    <li><strong>Data Processing:</strong> Analyze commit patterns and developer activity</li>
                    <li><strong>Visualization:</strong> Create charts and metrics</li>
                    <li><strong>Dashboard Creation:</strong> Build an interactive dashboard</li>
                    <li><strong>Deployment:</strong> Deploy the dashboard for team access</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use appropriate commit limits to avoid overwhelming downstream processes",
          "Specify branch names when you need commits from specific branches",
          "Handle the Success output field for proper error handling",
          "Use the Total Count field to validate expected commit counts",
          "Process commits in chronological order (newest first)",
          "Store commit SHAs for audit trails and reference",
          "Implement proper error handling for API failures"
        ]}
        donts={[
          "Don't request too many commits unless necessary (affects performance)",
          "Avoid hardcoding repository names (use dynamic selection)",
          "Don't ignore the Success field in error handling",
          "Avoid processing commits without validating the repository access",
          "Don't forget to handle cases where no commits are found",
          "Avoid making too many API calls in a short time period",
          "Don't skip validating the repository format before processing"
        ]}
        securityItems={[
          "Always validate repository access permissions before reading commits",
          "Use secure GitHub access tokens with minimal required scopes",
          "Implement rate limiting to prevent API abuse",
          "Monitor API usage and implement proper error handling",
          "Validate commit data before processing in downstream nodes",
          "Use HTTPS for all GitHub API communications",
          "Implement proper authentication error handling"
        ]}
        proTip="When working with multiple repositories, use the dynamic repository selection feature to avoid hardcoding repository names. Always check the Success field before processing commit data, and implement proper error handling for cases where the GitHub API is unavailable or returns errors."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Repository Not Found",
            symptoms: "Error message about repository not being accessible",
            solution: "Verify that the repository URL or owner/repo format is correct, ensure you have access to the repository, and check that your GitHub integration is properly connected with the necessary permissions."
          },
          {
            title: "No Commits Returned",
            symptoms: "Empty commits array or zero total count",
            solution: "Check that the specified branch exists and has commits. Verify the branch name is correct (case-sensitive) and that the repository has commit history. Try using the default branch if no specific branch is needed."
          },
          {
            title: "Authentication Errors",
            symptoms: "GitHub API returns authentication or permission errors",
            solution: "Verify that your GitHub integration is properly connected, check that the access token has the necessary scopes (repo access), and ensure the token hasn't expired. Reconnect your GitHub account if necessary."
          },
          {
            title: "Invalid Repository Format",
            symptoms: "Error about repository format not being recognized",
            solution: "Ensure the repository input is either a valid GitHub URL (https://github.com/owner/repo) or in owner/repo format. Check for typos in the repository name and ensure it matches the exact case used on GitHub."
          },
          {
            title: "API Rate Limiting",
            symptoms: "GitHub API returns rate limit errors",
            solution: "Implement delays between API calls, reduce the frequency of workflow executions, and consider using GitHub's conditional requests to minimize API usage. Monitor your API usage in the GitHub settings."
          },
          {
            title: "Branch Not Found",
            symptoms: "Error about branch not existing",
            solution: "Verify the branch name is correct and exists in the repository. Check the case sensitivity of the branch name and ensure it matches exactly as it appears in GitHub. Use the default branch if no specific branch is needed."
          }
        ]}
      />

      {/* Related Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-neutral-700 hover:border-neutral-600 transition-colors">
            <CardHeader>
              <CardTitle>GitHub New Commit</CardTitle>
              <CardDescription>Trigger workflows on new commits</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-400 mb-3">
                Use the GitHub New Commit trigger to automatically start workflows when new commits are pushed to a repository.
              </p>
              <a href="/docs/nodes/github-new-commit" className="text-primary-main hover:text-primary-light text-sm font-medium">
                View Documentation →
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-neutral-700 hover:border-neutral-600 transition-colors">
            <CardHeader>
              <CardTitle>LLM Prompt Node</CardTitle>
              <CardDescription>Analyze commits with AI</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-400 mb-3">
                Use AI to analyze commit messages and generate insights, summaries, or automated code reviews.
              </p>
              <a href="/docs/nodes/llm-prompt" className="text-primary-main hover:text-primary-light text-sm font-medium">
                View Documentation →
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-neutral-700 hover:border-neutral-600 transition-colors">
            <CardHeader>
              <CardTitle>HTTP Request Node</CardTitle>
              <CardDescription>Make additional GitHub API calls</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-400 mb-3">
                Use the HTTP Request node to make additional GitHub API calls for detailed commit information or repository data.
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
