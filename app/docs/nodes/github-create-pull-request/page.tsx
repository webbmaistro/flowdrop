"use client"

import React from 'react';
import { GitPullRequest, Github, Settings, Key } from 'lucide-react';
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

export default function GitHubCreatePullRequestNode() {
  const prerequisites = [
    {
      icon: Github,
      title: "GitHub Integration",
      description: "Must have GitHub OAuth integration configured",
      requirements: [
        "GitHub OAuth token with repository access",
        "Valid GitHub account with repository permissions",
        "Repository access for the target repositories"
      ]
    },
    {
      icon: GitPullRequest,
      title: "Repository Access",
      description: "Access to the target GitHub repository",
      requirements: [
        "Write access to the target repository",
        "Permission to create pull requests",
        "Valid repository URL or owner/repo format"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "System capabilities needed",
      requirements: [
        "GitHub Integration: Access to GitHub service through NodeServiceRegistry",
        "Network Access: Internet connectivity for GitHub API communication",
        "Error Handling: Proper exception handling for API failures"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={GitPullRequest}
        title="GitHub Create Pull Request"
        description="Create a pull request in a GitHub repository"
        nodeType="Action"
        category="GitHub"
        iconName="GitPullRequest"
        iconColor="primary"
      />

      <OverviewSection
        description="The <strong>GitHub Create Pull Request</strong> node is an action node that creates pull requests in GitHub repositories. This powerful integration enables automated pull request creation within workflows, perfect for code review processes, feature branch management, and automated development workflows."
        keyFeatures={[
          "<strong>Automated PR Creation:</strong> Create pull requests programmatically from workflows",
          "<strong>Flexible Repository Input:</strong> Accept GitHub URLs or owner/repo format",
          "<strong>Branch Management:</strong> Specify head and base branches for the pull request",
          "<strong>Rich Content:</strong> Include detailed titles and descriptions",
          "<strong>Dynamic Repository Selection:</strong> Automatically populate available repositories",
          "<strong>Comprehensive Output:</strong> Returns PR number, URL, and success status"
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
              description: "Repository URL or owner/repo format (e.g., https://github.com/acme/tools or acme/tools). The node will automatically parse and validate the repository format."
            },
            {
              name: "Title",
              type: "text",
              required: true,
              valueType: "string",
              description: "The title of the pull request. This should be clear and descriptive to help reviewers understand the changes."
            },
            {
              name: "Head (branch)",
              type: "text",
              required: true,
              valueType: "string",
              description: "Name of the branch where your changes are implemented. This is the branch that contains the changes you want to merge."
            },
            {
              name: "Base (branch)",
              type: "text",
              required: true,
              valueType: "string",
              description: "Name of the branch you want the changes pulled into. This is typically 'main' or 'master' for the primary branch."
            }
          ],
          optional: [
            {
              name: "Body",
              type: "text",
              required: false,
              valueType: "string",
              description: "Optional description of the pull request. This can include details about the changes, testing instructions, or any other relevant information for reviewers."
            }
          ]
        }}
        outputFields={[
          {
            name: "Success",
            type: "boolean",
            required: true,
            valueType: "Whether the PR was created successfully",
            description: "Indicates whether the pull request was created successfully. Returns true if the PR was created, false otherwise."
          },
          {
            name: "PR Number",
            type: "number",
            required: true,
            valueType: "The pull request number",
            description: "The unique number assigned to the created pull request. This can be used to reference the PR in other operations."
          },
          {
            name: "PR URL",
            type: "string",
            required: true,
            valueType: "The URL of the pull request",
            description: "The direct URL to the created pull request on GitHub. This can be used to link to the PR or share it with team members."
          }
        ]}
      />

      <BestPracticesSection
        dos={[
          "Use clear and descriptive PR titles that explain the purpose",
          "Include detailed descriptions in the body field for better context",
          "Ensure the head branch exists and contains your changes",
          "Use consistent naming conventions for branches",
          "Test with different repository formats (URL vs owner/repo)",
          "Include relevant information about changes in the PR body",
          "Verify repository access before creating PRs"
        ]}
        donts={[
          "Don't create PRs without proper branch setup",
          "Avoid vague or unclear PR titles",
          "Don't forget to specify the correct base branch",
          "Avoid creating PRs to non-existent repositories",
          "Don't ignore error handling for repository access issues",
          "Avoid creating PRs without proper GitHub integration setup",
          "Don't assume repository access without verification"
        ]}
        proTip="When using dynamic repository selection, the node will automatically populate available repositories from your GitHub account. This makes it easy to select the correct repository without manually typing the full path."
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Repository Access Issues",
            symptoms: "Node fails with repository access or permission errors",
            solution: "Verify that your GitHub OAuth token has the necessary permissions for the target repository. Ensure you have write access to the repository and can create pull requests."
          },
          {
            title: "Invalid Repository Format",
            symptoms: "Node fails with repository format errors",
            solution: "Ensure the repository is specified in the correct format: either as a full GitHub URL (https://github.com/owner/repo) or as owner/repo. The node will automatically parse and validate the format."
          },
          {
            title: "Branch Not Found",
            symptoms: "Node fails because the specified head or base branch doesn't exist",
            solution: "Verify that both the head branch (containing your changes) and base branch (target branch) exist in the repository. Ensure branch names are spelled correctly and match the actual branch names in GitHub."
          },
          {
            title: "GitHub Integration Not Configured",
            symptoms: "Node fails with GitHub access token not found errors",
            solution: "Ensure that GitHub OAuth integration is properly configured in your system. Verify that the integration service is registered and that valid GitHub credentials are available."
          },
          {
            title: "Duplicate Pull Request",
            symptoms: "Node fails when trying to create a PR that already exists",
            solution: "Check if a pull request already exists for the same head and base branch combination. GitHub doesn't allow duplicate PRs for the same branch pair."
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/github-new-commit",
            title: "GitHub New Commit",
            description: "Trigger workflows on new commits"
          },
          {
            href: "/docs/nodes/http-request",
            title: "HTTP Request Node",
            description: "Integrate with GitHub API directly"
          },
          {
            href: "/docs/nodes/llm-prompt",
            title: "LLM Prompt Node",
            description: "Generate PR descriptions with AI"
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
