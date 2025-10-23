"use client"

import React from 'react';
import { FileText, Shield, GitBranch, Settings } from 'lucide-react';
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

export default function GitHubWriteFileNode() {
  const prerequisites = [
    {
      icon: Shield,
      title: "GitHub Authentication",
      description: "Must have a connected GitHub account with appropriate permissions",
      requirements: [
        "GitHub account connected via OAuth",
        "Repository write access permissions for target repositories",
        "Valid GitHub access token with repository write scope"
      ]
    },
    {
      icon: FileText,
      title: "Repository Access",
      description: "Understanding of repository structure and file write requirements",
      requirements: [
        "Write access to the target GitHub repository",
        "Repository must be accessible and not archived",
        "Understanding of branch creation and file path conventions",
        "Knowledge of base branch references (default branch if not specified)"
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
        "Branch creation and file content management capabilities"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={FileText}
        title="GitHub Write File"
        description="Creates or overwrites a file in a new branch of a GitHub repository"
        nodeType="Action"
        category="GitHub"
        iconName="FileText"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>GitHub Write File</strong> node is an action node that creates or overwrites files in GitHub repositories by creating a new branch from a base reference and committing the file changes. This powerful integration enables automated file management, documentation updates, and code generation workflows directly within GitHub repositories."
        keyFeatures={[
          "<strong>Automated File Creation:</strong> Create or update files in GitHub repositories programmatically",
          "<strong>Branch Management:</strong> Automatically creates new branches for file changes",
          "<strong>Flexible Repository Input:</strong> Support for GitHub URLs or owner/repo format with dynamic selection",
          "<strong>Base Reference Support:</strong> Branch from any branch, tag, or commit SHA",
          "<strong>Automatic Branch Naming:</strong> Generates unique branch names with timestamps",
          "<strong>File Content Management:</strong> Handles both new file creation and existing file updates",
          "<strong>Comprehensive Output:</strong> Returns file content, branch name, and operation status"
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
              description: "Path to the file within the repository (e.g., path/to/file.txt). Use forward slashes for path separators. The file will be created or updated at this location."
            },
            {
              name: "Contents",
              type: "text_area",
              required: true,
              valueType: "string",
              description: "Raw contents to write to the file. This can be plain text, code, JSON, or any other file content you want to store in the repository."
            }
          ],
          optional: [
            {
              name: "Base ref",
              type: "text",
              required: false,
              valueType: "string",
              description: "Base branch, tag, or commit SHA to branch from. If not specified, defaults to the repository's default branch (usually 'main' or 'master')."
            }
          ]
        }}
        outputFields={[
          {
            name: "File Content",
            type: "string",
            required: true,
            valueType: "The content that was written",
            description: "The actual content that was written to the file. This matches the input contents and can be used for verification or downstream processing."
          },
          {
            name: "Branch",
            type: "string",
            required: true,
            valueType: "The branch where the file was written",
            description: "The name of the branch where the file was written. The node automatically generates a unique branch name with timestamp."
          },
          {
            name: "Repository",
            type: "string",
            required: true,
            valueType: "Repository full name (owner/repo)",
            description: "The full name of the repository in owner/repo format. Useful for downstream nodes that need to reference the repository."
          },
          {
            name: "File Path",
            type: "string",
            required: true,
            valueType: "Path to the file",
            description: "The path to the file that was written in the repository. This matches the input file path and can be used for verification."
          },
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Whether the operation succeeded",
            description: "Indicates whether the file writing operation was successful. Returns true if the file was written successfully, false otherwise."
          }
        ]}
      />

      {/* Examples Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Examples & Use Cases</h2>
        
        <div className="space-y-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Documentation Updates</CardTitle>
              <CardDescription>
                Automatically update documentation files in GitHub repositories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "repository": "myorg/docs",
  "filePath": "api/changelog.md",
  "contents": "# API Changelog\\n\\n## Version 2.1.0\\n- Added new authentication endpoints\\n- Improved error handling\\n- Updated rate limiting",
  "baseRef": "main"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                This will create a new branch from main, update the changelog.md file with new content, and commit the changes. The file will be ready for review and merging.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Configuration File Management</CardTitle>
              <CardDescription>
                Update configuration files with new settings or environment-specific values
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "repository": "acme/webapp",
  "filePath": "config/production.json",
  "contents": "{\\n  \\"database\\": {\\n    \\"host\\": \\"prod-db.example.com\\",\\n    \\"port\\": 5432,\\n    \\"ssl\\": true\\n  },\\n  \\"api\\": {\\n    \\"baseUrl\\": \\"https://api.example.com\\",\\n    \\"timeout\\": 30000\\n  }\\n}",
  "baseRef": "main"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Updates the production configuration file with new database and API settings. The changes will be committed to a new branch for review.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Automated Code Generation</CardTitle>
              <CardDescription>
                Generate and commit code files based on templates or AI output
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>🤖 AI Code Generation → 📝 GitHub Write File → 🔍 Code Review → 🚀 Deploy</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Generate code using AI, write it to GitHub, trigger code review processes, and deploy the changes automatically.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Release Notes Generation</CardTitle>
              <CardDescription>
                Automatically generate and commit release notes for new versions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-neutral-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Workflow Structure</h4>
                  <div className="text-sm text-neutral-400 space-y-1">
                    <div>📊 Analyze Commits → 📝 Generate Release Notes → 📄 GitHub Write File → 🏷️ Create Tag</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm">
                  Analyze recent commits, generate comprehensive release notes, write them to the repository, and create version tags.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle>Environment-Specific Files</CardTitle>
              <CardDescription>
                Create environment-specific configuration files from templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`{
  "repository": "mycompany/infrastructure",
  "filePath": "environments/staging/terraform.tfvars",
  "contents": "# Staging Environment Configuration\\n\\nproject_id = \\"myproject-staging\\"\\nregion = \\"us-central1\\"\\ninstance_type = \\"n1-standard-2\\"\\nenvironment = \\"staging\\"",
  "baseRef": "main"
}`}
                lang="json"
              />
              <p className="text-neutral-400 mt-3 text-sm">
                Creates environment-specific Terraform configuration files for different deployment environments, ensuring consistent infrastructure setup.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <BestPracticesSection
        dos={[
          "Use the dynamic repository selector to choose from available repositories",
          "Specify clear and descriptive file paths that follow repository conventions",
          "Include meaningful content that adds value to the repository",
          "Use specific base refs (branches, tags, commits) for reproducible workflows",
          "Test file content before writing to ensure it's valid and properly formatted",
          "Use the success output to verify file writing operations",
          "Store repository and file path information for reference in subsequent nodes",
          "Consider the impact of file changes on existing code and documentation"
        ]}
        donts={[
          "Don't write files to repositories without proper write access",
          "Avoid using incorrect file paths that might conflict with existing files",
          "Don't forget to handle authentication errors gracefully",
          "Avoid writing very large files that might cause performance issues",
          "Don't assume repository access without verification",
          "Avoid overwriting critical files without proper review processes",
          "Don't write files with sensitive information like passwords or API keys",
          "Avoid creating files that might conflict with existing build or deployment processes"
        ]}
        proTip="The GitHub Write File node is perfect for automated documentation updates, configuration management, and code generation workflows. Always review the generated branch before merging, and consider using this node in combination with pull request creation nodes for proper code review processes."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Authentication Errors",
            symptoms: "Node fails with GitHub access token not found error",
            solution: "Ensure your GitHub account is properly connected via OAuth and that you have valid access tokens with repository write permissions. Check your GitHub integration settings and verify the OAuth scopes include repository write access."
          },
          {
            title: "Repository Not Found",
            symptoms: "Node fails with repository not found error",
            solution: "Verify the repository name is correct and that you have write access to the repository. Use the dynamic repository selector to choose from available repositories. Ensure the repository is not archived or deleted."
          },
          {
            title: "Invalid Base Ref",
            symptoms: "Node fails with invalid base ref error",
            solution: "Ensure the base ref (branch, tag, or commit SHA) exists in the repository. Check that the ref name is spelled correctly and that it exists in the repository history. If not specified, the node will use the default branch."
          },
          {
            title: "File Path Issues",
            symptoms: "Node fails with file path errors",
            solution: "Check that the file path is valid and follows GitHub conventions. Use forward slashes for path separators and avoid special characters that might cause issues. Ensure the path doesn't conflict with existing files unless you intend to overwrite them."
          },
          {
            title: "Branch Creation Failures",
            symptoms: "Node fails when creating new branches",
            solution: "Verify that you have permission to create branches in the repository. Check that the base ref exists and is accessible. Ensure there are no naming conflicts with existing branches."
          },
          {
            title: "Content Encoding Issues",
            symptoms: "File content appears corrupted or incorrectly encoded",
            solution: "Ensure the content is properly formatted and encoded. For special characters or binary content, consider using base64 encoding. Test with simple text content first to verify the node is working correctly."
          },
          {
            title: "API Rate Limiting",
            symptoms: "Node fails with rate limit exceeded error",
            solution: "GitHub API has rate limits. If you're making many requests, consider adding delays between requests or using GitHub's GraphQL API for more efficient operations. Monitor your API usage and implement retry logic with exponential backoff."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/github-read-file",
            title: "GitHub Read File Node",
            description: "Read files from GitHub repositories"
          },
          {
            href: "/docs/nodes/github-create-pull-request",
            title: "GitHub Create Pull Request Node",
            description: "Create pull requests for file changes"
          },
          {
            href: "/docs/nodes/github-new-commit",
            title: "GitHub New Commit Node",
            description: "Trigger workflows on GitHub commits"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate file content with AI"
          },
          {
            href: "/docs/nodes/llm-structured-output",
            title: "LLM Structured Output Node",
            description: "Generate structured file content with AI"
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
