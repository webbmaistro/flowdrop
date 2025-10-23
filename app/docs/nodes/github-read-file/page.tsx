"use client"

import React from 'react';
import { GitBranch, Shield, FileText, Settings } from 'lucide-react';
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

export default function GitHubReadFileNode() {
  const prerequisites = [
    {
      icon: Shield,
      title: "GitHub Authentication",
      description: "Must have a connected GitHub account with appropriate permissions",
      requirements: [
        "GitHub account connected via OAuth",
        "Repository access permissions for target repositories",
        "Valid GitHub access token"
      ]
    },
    {
      icon: FileText,
      title: "Repository Access",
      description: "Understanding of repository structure and file access requirements",
      requirements: [
        "Access to the target GitHub repository",
        "Repository must be public or you must have read access",
        "File must exist at the specified path in the repository",
        "Understanding of branch, tag, or commit SHA references"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "Technical setup and configuration requirements",
      requirements: [
        "GitHub OAuth service properly configured",
        "Internet connectivity for GitHub API communication",
        "Proper exception handling for API failures and authentication issues",
        "Base64 decoding capabilities for file content"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        logo="/logos/github.svg"
        title="GitHub Read File"
        description="Read the raw contents of a file from a GitHub repository using the GitHub Contents API"
        nodeType="Action"
        category="GitHub"
        iconName="GitHub"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>GitHub Read File</strong> node is an action node that fetches the raw contents of a file from a GitHub repository using the GitHub Contents API. This powerful integration enables you to programmatically read files from GitHub repositories, perfect for documentation processing, configuration file analysis, and automated code review workflows."
        keyFeatures={[
          "<strong>Repository Access:</strong> Read files from any accessible GitHub repository",
          "<strong>Flexible References:</strong> Support for branches, tags, and commit SHAs",
          "<strong>Dynamic Repository Selection:</strong> Automatically populate available repositories",
          "<strong>File Content Processing:</strong> Automatically decode base64 encoded content",
          "<strong>Error Handling:</strong> Comprehensive error handling for API failures and authentication issues",
          "<strong>Metadata Tracking:</strong> Track repository, file path, and reference information"
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
              description: "Repository URL or owner/repo format (e.g., https://github.com/acme/tools or acme/tools). The node will automatically populate available repositories from your GitHub account."
            },
            {
              name: "File path",
              type: "text",
              required: true,
              valueType: "string",
              description: "Path to the file within the repository (e.g., path/to/file.txt). Use forward slashes for path separators."
            }
          ],
          optional: [
            {
              name: "Ref (branch, tag, or commit SHA)",
              type: "text",
              required: false,
              valueType: "string",
              description: "Optional branch, tag, or commit SHA. If not specified, defaults to the default branch of the repository."
            }
          ]
        }}
        outputFields={[
          {
            name: "File Content",
            type: "string",
            required: true,
            valueType: "Decoded file content as text",
            description: "The raw content of the file as text. For binary files, this will be the base64 decoded content."
          },
          {
            name: "Repository",
            type: "string",
            required: true,
            valueType: "Repository full name (owner/repo)",
            description: "The full name of the repository in owner/repo format."
          },
          {
            name: "File Path",
            type: "string",
            required: true,
            valueType: "Path to the file",
            description: "The path to the file that was read from the repository."
          },
          {
            name: "Ref",
            type: "string",
            required: true,
            valueType: "The ref used for reading",
            description: "The branch, tag, or commit SHA that was used to read the file."
          },
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Whether the operation succeeded",
            description: "Indicates whether the file reading operation was successful."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Read Configuration Files</CardTitle>
              <CardDescription>
                Read configuration files from GitHub repositories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "repository": "myorg/config-repo",
  "filePath": "config/app.json",
  "ref": "main"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                This will read the app.json configuration file from the main branch of the config-repo repository.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Documentation Processing Workflow</CardTitle>
              <CardDescription>
                Process documentation files with AI analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📄 GitHub Read File → 🤖 AI Analysis → 📊 Generate Summary → 📧 Email Report</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read documentation files from GitHub, analyze content with AI for insights, generate summary, and email results to stakeholders.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Code Review Automation</CardTitle>
              <CardDescription>
                Automatically review code changes and generate reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📄 GitHub Read File → 🔍 Code Analysis → 📝 Generate Review → 💬 Slack Notification</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Read source code files from GitHub, analyze code quality and patterns, generate automated code review, and notify team via Slack.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Version-Specific File Reading</CardTitle>
              <CardDescription>
                Read files from specific versions or commits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "repository": "facebook/react",
  "filePath": "README.md",
  "ref": "v18.2.0"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                This will read the README.md file from the v18.2.0 tag of the React repository, useful for reading documentation from specific versions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use the dynamic repository selector to choose from available repositories",
          "Specify the correct file path with forward slashes as separators",
          "Use specific refs (branches, tags, commits) for reproducible workflows",
          "Handle file content appropriately based on file type (text vs binary)",
          "Use the success output to verify file reading operations",
          "Store repository and file path information for reference in subsequent nodes"
        ]}
        donts={[
          "Don't try to read files from private repositories without proper access",
          "Avoid using incorrect file paths that don't exist in the repository",
          "Don't forget to handle authentication errors gracefully",
          "Avoid reading very large files that might cause memory issues",
          "Don't assume file content is always text - handle binary files appropriately",
          "Avoid hardcoding repository names - use the dynamic selector when possible"
        ]}
        proTip="The GitHub Read File node is perfect for documentation processing and code analysis workflows. Use specific refs (like commit SHAs) for reproducible builds, and combine with AI nodes to analyze code or documentation content. For large files, consider implementing file size checks before processing."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Authentication Errors",
            symptoms: "Node fails with GitHub access token not found error",
            solution: "Ensure your GitHub account is properly connected via OAuth and that you have valid access tokens. Check your GitHub integration settings."
          },
          {
            title: "Repository Not Found",
            symptoms: "Node fails with repository not found error",
            solution: "Verify the repository name is correct and that you have access to the repository. Use the dynamic repository selector to choose from available repositories."
          },
          {
            title: "File Not Found",
            symptoms: "Node fails with file not found error",
            solution: "Check that the file path is correct and exists in the specified repository and ref. Use forward slashes for path separators and verify the file exists at the specified location."
          },
          {
            title: "Invalid Ref",
            symptoms: "Node fails with invalid ref error",
            solution: "Ensure the branch, tag, or commit SHA exists in the repository. Check that the ref name is spelled correctly and that it exists in the repository history."
          },
          {
            title: "API Rate Limiting",
            symptoms: "Node fails with rate limit exceeded error",
            solution: "GitHub API has rate limits. If you're making many requests, consider adding delays between requests or using GitHub's GraphQL API for more efficient queries."
          },
          {
            title: "Large File Processing",
            symptoms: "Node times out or fails with large files",
            solution: "GitHub has limits on file sizes for the Contents API. For very large files, consider using the Git Data API or implementing chunked processing for large files."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/github-create-pull-request",
            title: "GitHub Create Pull Request Node",
            description: "Create pull requests in GitHub repositories"
          },
          {
            href: "/docs/nodes/github-new-commit",
            title: "GitHub New Commit Node",
            description: "Trigger workflows on GitHub commits"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Analyze file content with AI"
          },
          {
            href: "/docs/nodes/llm-structured-output",
            title: "LLM Structured Output Node",
            description: "Extract structured data from file content"
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
