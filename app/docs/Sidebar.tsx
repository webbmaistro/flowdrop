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
  ],
  "Action Nodes": {
    "General Actions": [
      { href: "/docs/nodes/llm-prompt", label: "LLM Prompt" },
      { href: "/docs/nodes/http-request", label: "HTTP Request" },
      { href: "/docs/nodes/fetch-webpage", label: "Fetch Webpage" },
      { href: "/docs/nodes/image-generation", label: "Image Generation" },
    ],
    "Gmail": [
      { href: "/docs/nodes/gmail-read-emails", label: "Gmail Read Emails" },
      { href: "/docs/nodes/gmail-write-labels", label: "Gmail Write Labels" },
    ],
    "Google Sheets": [
      { href: "/docs/nodes/google-sheets-read", label: "Google Sheets Read" },
      { href: "/docs/nodes/google-sheets-write", label: "Google Sheets Write" },
      { href: "/docs/nodes/google-sheets-update-row", label: "Google Sheets Update Row" },
    ],
    "Discord": [
      { href: "/docs/nodes/discord-send-message", label: "Discord Send Message" },
    ],
    "X": [
      { href: "/docs/nodes/x-create-post", label: "X Create Post" },
    ],
    "Microsoft Word": [
      { href: "/docs/nodes/word-write-contents", label: "Word Write Content" },
      { href: "/docs/nodes/word-duplicate", label: "Word Duplicate" },
    ],
  },
  "Data Processing": [
    { href: "/docs/nodes/randomize", label: "Randomize" },
  ],
  "Flow Control": [
    { href: "/docs/nodes/if-else", label: "If Else" },
    { href: "/docs/nodes/ai-switch", label: "AI Switch" },
    { href: "/docs/nodes/for-each", label: "For Each" },
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
      ...nodeLibrary["Action Nodes"]["Discord"],
      ...nodeLibrary["Action Nodes"]["X"],
      ...nodeLibrary["Action Nodes"]["Microsoft Word"],
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