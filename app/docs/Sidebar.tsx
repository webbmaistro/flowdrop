"use client";
import { usePathname } from "next/navigation";
import { PlayCircle, Zap, Cog, GitMerge, User } from "lucide-react";
import SidebarLink from "@/components/ui/SidebarLink";
import CollapsibleSection from "@/components/ui/CollapsibleSection";

const nav = [
  { href: "/docs/ai-workflows-explained", label: "AI Workflows Explained" },
  { href: "/docs/workflow-builder-basics", label: "Workflow Builder Basics" },
  { href: "/docs/workflow-editor-comparison", label: "Workflow Editor Comparison" },
];

const gettingStarted = [
  { href: "/docs/getting-started", label: "Flowdrop App Tour" },
  { href: "/docs/getting-started/quick-start", label: "Quick Start Guide" },
  { href: "/docs/getting-started/first-workflow", label: "Your First Workflow" },
  { href: "/docs/getting-started/understanding-node-types", label: "Node Types Explained" },
  { href: "/docs/getting-started/best-practices", label: "Best Practices" },
];

const nodeLibrary = {
  "Workflow Triggers": [
    { href: "/docs/nodes/trigger", label: "Manual Trigger" },
    { href: "/docs/nodes/schedule", label: "Schedule" },
    { href: "/docs/nodes/gmail-read-emails", label: "Email" },
    { href: "/docs/nodes/webhook", label: "Webhook" },
    { href: "/docs/nodes/discord-read-message", label: "Discord Read Message" },
    { href: "/docs/nodes/github-new-commit", label: "GitHub New Commit" },
  ],
  "Action Nodes": {
    "General Actions": [
      { href: "/docs/nodes/llm-prompt", label: "LLM Prompt" },
      { href: "/docs/nodes/http-request", label: "HTTP Request" },
      { href: "/docs/nodes/fetch-webpage", label: "Fetch Webpage" },
      { href: "/docs/nodes/google-search", label: "Google Search" },
      { href: "/docs/nodes/pdf-read", label: "PDF Read" },
      { href: "/docs/nodes/image-generation", label: "Image Generation" },
    ],
    "Gmail": [
      { href: "/docs/nodes/gmail-read-emails", label: "Read Emails" },
      { href: "/docs/nodes/gmail-write-labels", label: "Write Labels" },
    ],
    "Google Sheets": [
      { href: "/docs/nodes/google-sheets-read", label: "Read" },
      { href: "/docs/nodes/google-sheets-write", label: "Write" },
      { href: "/docs/nodes/google-sheets-create-spreadsheet", label: "Create Spreadsheet" },
      { href: "/docs/nodes/google-sheets-create-sheet", label: "Create Sheet" },
      { href: "/docs/nodes/google-sheets-update-row", label: "Update Row" },
      { href: "/docs/nodes/google-sheets-update-column", label: "Update Column" },
      { href: "/docs/nodes/google-sheets-append-row", label: "Append Row" },
      { href: "/docs/nodes/google-sheets-duplicate-spreadsheet", label: "Duplicate Spreadsheet" },
    ],
    "Google Docs": [
      { href: "/docs/nodes/google-docs-read", label: "Read" },
      { href: "/docs/nodes/google-docs-append", label: "Append" },
      { href: "/docs/nodes/google-docs-create", label: "Create Document" },
      { href: "/docs/nodes/google-docs-duplicate", label: "Duplicate Document" },
    ],
    "Notion": [
      { href: "/docs/nodes/notion-database-query", label: "Database Query" },
      { href: "/docs/nodes/notion-page-create", label: "Page Create" },
      { href: "/docs/nodes/notion-page-update", label: "Page Update" },
    ],
    "Discord": [
      { href: "/docs/nodes/discord-send-message", label: "Send Message" },
    ],
    "Slack": [
      { href: "/docs/nodes/slack-send-message", label: "Send Message" },
    ],
    "X": [
      { href: "/docs/nodes/x-create-post", label: "Create Post" },
    ],
    "LinkedIn": [
      { href: "/docs/nodes/linkedin-post", label: "Create Post" },
    ],
    "Microsoft Word": [
      { href: "/docs/nodes/word-write-contents", label: "Write Content" },
      { href: "/docs/nodes/word-duplicate", label: "Duplicate" },
    ],
    "Microsoft Outlook": [
      { href: "/docs/nodes/outlook-read-emails", label: "Read Emails" },
      { href: "/docs/nodes/outlook-draft-email", label: "Draft Email" },
    ],
    "Microsoft Excel": [
      { href: "/docs/nodes/excel-read", label: "Read" },
    ],
    "GitHub": [
      { href: "/docs/nodes/github-new-commit", label: "New Commit" },
      { href: "/docs/nodes/github-create-pull-request", label: "Create Pull Request" },
      { href: "/docs/nodes/github-read-commits", label: "Read Commits" },
      { href: "/docs/nodes/github-write-file", label: "Write File" },
    ],
    "Google Calendar": [
      { href: "/docs/nodes/google-calendar-create-event", label: "Create Event" },
    ],
  },
  "Data Processing": [
    { href: "/docs/nodes/randomize", label: "Randomize" },
    { href: "/docs/nodes/set-value", label: "Set Value" },
  ],
  "Flow Control": [
    { href: "/docs/nodes/if-else", label: "If Else" },
    { href: "/docs/nodes/ai-switch", label: "AI Switch" },
    { href: "/docs/nodes/for-each", label: "For Each" },
    { href: "/docs/nodes/wait", label: "Wait" },
  ],
  "Human in the Loop": [
    { href: "/docs/nodes/hil-email", label: "Email" },
  ],
};

export default function Sidebar() {
  const pathname = usePathname();
  
  // Helper function to check if a section should be open based on current pathname
  const shouldSectionBeOpen = (sectionNodes: any[]) => {
    return sectionNodes.some(node => pathname === node.href) || pathname === '/docs' || pathname === '/docs/getting-started';
  };
  
  // Helper function to check if Node Library should be open
  const shouldNodeLibraryBeOpen = () => {
    const allNodePaths = [
      ...nodeLibrary["Workflow Triggers"],
      ...nodeLibrary["Action Nodes"]["General Actions"],
      ...nodeLibrary["Action Nodes"]["Gmail"],
      ...nodeLibrary["Action Nodes"]["Google Sheets"],
      ...nodeLibrary["Action Nodes"]["Google Docs"],
      ...nodeLibrary["Action Nodes"]["Notion"],
      ...nodeLibrary["Action Nodes"]["Discord"],
      ...nodeLibrary["Action Nodes"]["Slack"],
      ...nodeLibrary["Action Nodes"]["X"],
      ...nodeLibrary["Action Nodes"]["LinkedIn"],
      ...nodeLibrary["Action Nodes"]["Microsoft Word"],
      ...nodeLibrary["Action Nodes"]["Microsoft Outlook"],
      ...nodeLibrary["Action Nodes"]["Microsoft Excel"],
      ...nodeLibrary["Action Nodes"]["GitHub"],
      ...nodeLibrary["Action Nodes"]["Google Calendar"],
      ...nodeLibrary["Data Processing"],
      ...nodeLibrary["Flow Control"],
      ...nodeLibrary["Human in the Loop"]
    ];
    return allNodePaths.some(node => pathname === node.href) || pathname === '/docs' || pathname === '/docs/getting-started';
  };
  
  // Helper function to check if a subsection should be open
  const shouldSubsectionBeOpen = (subsectionNodes: any[]) => {
    return subsectionNodes.some(node => pathname === node.href);
  };
  
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-neutral-800 bg-neutral-950/80">
      <nav className="flex-1 pt-24 pb-8 space-y-2">
        {/* Getting Started Section - Moved to top */}
        <CollapsibleSection 
          title="Getting Started" 
          defaultOpen={shouldSectionBeOpen(gettingStarted)}
        >
          {gettingStarted.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              active={pathname === item.href}
            >
              {item.label}
            </SidebarLink>
          ))}
        </CollapsibleSection>
        
        {/* Main navigation */}
        <div className="pt-6 border-t border-neutral-800">
          {nav.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              active={pathname === item.href}
            >
              {item.label}
            </SidebarLink>
          ))}
        </div>
        
        {/* Node Library Section */}
        <div className="pt-6 border-t border-neutral-800">
          {/* Browse All Nodes Button */}
          <SidebarLink
            href="/docs/nodes"
            active={pathname === '/docs/nodes'}
          >
            Browse All Nodes
          </SidebarLink>
          
          <CollapsibleSection 
            title="Node Library" 
            defaultOpen={shouldNodeLibraryBeOpen()}
          >
            {/* Workflow Triggers */}
            <CollapsibleSection 
              title="Workflow Triggers" 
              defaultOpen={false}
              icon={PlayCircle}
            >
              {nodeLibrary["Workflow Triggers"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>

          {/* Action Nodes */}
          <CollapsibleSection 
            title="Action Nodes" 
            defaultOpen={false}
            icon={Zap}
          >
            {/* General Actions */}
            <CollapsibleSection 
              title="General Actions" 
              defaultOpen={false}
            >
              {nodeLibrary["Action Nodes"]["General Actions"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* Gmail */}
            <CollapsibleSection 
              title="Gmail" 
              defaultOpen={false}
            >
              {nodeLibrary["Action Nodes"]["Gmail"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* Google Sheets */}
            <CollapsibleSection 
              title="Google Sheets" 
              defaultOpen={false}
            >
              {nodeLibrary["Action Nodes"]["Google Sheets"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* Google Docs */}
            <CollapsibleSection 
              title="Google Docs" 
              defaultOpen={false}
            >
              {nodeLibrary["Action Nodes"]["Google Docs"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* Notion */}
            <CollapsibleSection 
              title="Notion" 
              defaultOpen={false}
            >
              {nodeLibrary["Action Nodes"]["Notion"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* Discord */}
            <CollapsibleSection 
              title="Discord" 
              defaultOpen={false}
            >
              {nodeLibrary["Action Nodes"]["Discord"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* Slack */}
            <CollapsibleSection 
              title="Slack" 
              defaultOpen={false}
            >
              {nodeLibrary["Action Nodes"]["Slack"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* X */}
            <CollapsibleSection 
              title="X" 
              defaultOpen={false}
            >
              {nodeLibrary["Action Nodes"]["X"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* LinkedIn */}
            <CollapsibleSection 
              title="LinkedIn" 
              defaultOpen={false}
            >
              {nodeLibrary["Action Nodes"]["LinkedIn"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* Microsoft Word */}
            <CollapsibleSection 
              title="Microsoft Word" 
              defaultOpen={false}
            >
              {nodeLibrary["Action Nodes"]["Microsoft Word"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* Microsoft Outlook */}
            <CollapsibleSection 
              title="Microsoft Outlook" 
              defaultOpen={false}
            >
              {nodeLibrary["Action Nodes"]["Microsoft Outlook"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* Microsoft Excel */}
            <CollapsibleSection 
              title="Microsoft Excel" 
              defaultOpen={false}
            >
              {nodeLibrary["Action Nodes"]["Microsoft Excel"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* GitHub */}
            <CollapsibleSection 
              title="GitHub" 
              defaultOpen={false}
            >
              {nodeLibrary["Action Nodes"]["GitHub"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* Google Calendar */}
            <CollapsibleSection 
              title="Google Calendar" 
              defaultOpen={false}
            >
              {nodeLibrary["Action Nodes"]["Google Calendar"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
          </CollapsibleSection>

          {/* Data Processing */}
          <CollapsibleSection 
            title="Data Processing" 
            defaultOpen={false}
            icon={Cog}
          >
            {nodeLibrary["Data Processing"].map((node) => (
              <SidebarLink
                key={node.href}
                href={node.href}
                active={pathname === node.href}
              >
                {node.label}
              </SidebarLink>
            ))}
          </CollapsibleSection>

          {/* Flow Control */}
          <CollapsibleSection 
            title="Flow Control" 
            defaultOpen={false}
            icon={GitMerge}
          >
            {nodeLibrary["Flow Control"].map((node) => (
              <SidebarLink
                key={node.href}
                href={node.href}
                active={pathname === node.href}
              >
                {node.label}
              </SidebarLink>
            ))}
          </CollapsibleSection>

          {/* Human in the Loop */}
          <CollapsibleSection 
            title="Human in the Loop" 
            defaultOpen={false}
            icon={User}
          >
            {nodeLibrary["Human in the Loop"].map((node) => (
              <SidebarLink
                key={node.href}
                href={node.href}
                active={pathname === node.href}
              >
                {node.label}
              </SidebarLink>
            ))}
          </CollapsibleSection>
        </CollapsibleSection>
        </div>
      </nav>
    </aside>
  );
} 