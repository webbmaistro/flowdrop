"use client";
import { usePathname } from "next/navigation";
import SidebarLink from "@/components/ui/SidebarLink";
import CollapsibleSection from "@/components/ui/CollapsibleSection";

const nav = [
  { href: "/docs", label: "Overview" },
  { href: "/docs/ai-workflows-explained", label: "AI Workflows Explained" },
  { href: "/docs/workflow-builder-basics", label: "Workflow Builder Basics" },
  { href: "/docs/workflow-editor-comparison", label: "Workflow Editor Comparison" },
];

const gettingStarted = [
  { href: "/docs/getting-started", label: "Flowdrop App Tour" },
  { href: "/docs/getting-started/quick-start", label: "Quick Start Guide" },
  { href: "/docs/getting-started/first-workflow", label: "Your First Workflow" },
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
    "Gmail Integration": [
      { href: "/docs/nodes/gmail-read-emails", label: "Gmail Read Emails" },
      { href: "/docs/nodes/gmail-write-labels", label: "Gmail Write Labels" },
    ],
    "Google Sheets Integration": [
      { href: "/docs/nodes/google-sheets-read", label: "Google Sheets Read" },
      { href: "/docs/nodes/google-sheets-write", label: "Google Sheets Write" },
    ],
    "Discord Integration": [
      { href: "/docs/nodes/discord-send-message", label: "Discord Send Message" },
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
  "Special Nodes": [
    { href: "/docs/nodes/sticky-note", label: "Sticky Note" },
  ],
};

export default function Sidebar() {
  const pathname = usePathname();
  
  // Helper function to check if a section should be open based on current pathname
  const shouldSectionBeOpen = (sectionNodes: any[]) => {
    return sectionNodes.some(node => pathname === node.href);
  };
  
  // Helper function to check if a subsection should be open
  const shouldSubsectionBeOpen = (subsectionNodes: any[]) => {
    return subsectionNodes.some(node => pathname === node.href);
  };
  
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-neutral-800 bg-neutral-950/80">
      <nav className="flex-1 py-8 space-y-2">
        {/* Main navigation */}
        {nav.map((item) => (
          <SidebarLink
            key={item.href}
            href={item.href}
            active={pathname === item.href}
          >
            {item.label}
          </SidebarLink>
        ))}
        
        {/* Getting Started Section */}
        <div className="pt-6 border-t border-neutral-800">
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
        </div>
        
        {/* Node Library Section */}
        <div className="pt-6 border-t border-neutral-800">
          <CollapsibleSection 
            title="Node Library" 
            defaultOpen={shouldSectionBeOpen([
              ...nodeLibrary["Workflow Triggers"],
              ...nodeLibrary["Action Nodes"]["General Actions"],
              ...nodeLibrary["Action Nodes"]["Gmail Integration"],
              ...nodeLibrary["Action Nodes"]["Google Sheets Integration"],
              ...nodeLibrary["Action Nodes"]["Discord Integration"],
              ...nodeLibrary["Data Processing"],
              ...nodeLibrary["Flow Control"],
              ...nodeLibrary["Special Nodes"]
            ])}
          >
            {/* Workflow Triggers */}
            <CollapsibleSection 
              title="Workflow Triggers" 
              defaultOpen={shouldSectionBeOpen(nodeLibrary["Workflow Triggers"])}
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
            defaultOpen={shouldSectionBeOpen([
              ...nodeLibrary["Action Nodes"]["General Actions"],
              ...nodeLibrary["Action Nodes"]["Gmail Integration"],
              ...nodeLibrary["Action Nodes"]["Google Sheets Integration"],
              ...nodeLibrary["Action Nodes"]["Discord Integration"]
            ])}
          >
            {/* General Actions */}
            <CollapsibleSection 
              title="General Actions" 
              defaultOpen={shouldSubsectionBeOpen(nodeLibrary["Action Nodes"]["General Actions"])}
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
            
            {/* Gmail Integration */}
            <CollapsibleSection 
              title="Gmail Integration" 
              defaultOpen={shouldSubsectionBeOpen(nodeLibrary["Action Nodes"]["Gmail Integration"])}
            >
              {nodeLibrary["Action Nodes"]["Gmail Integration"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* Google Sheets Integration */}
            <CollapsibleSection 
              title="Google Sheets Integration" 
              defaultOpen={shouldSubsectionBeOpen(nodeLibrary["Action Nodes"]["Google Sheets Integration"])}
            >
              {nodeLibrary["Action Nodes"]["Google Sheets Integration"].map((node) => (
                <SidebarLink
                  key={node.href}
                  href={node.href}
                  active={pathname === node.href}
                >
                  {node.label}
                </SidebarLink>
              ))}
            </CollapsibleSection>
            
            {/* Discord Integration */}
            <CollapsibleSection 
              title="Discord Integration" 
              defaultOpen={shouldSubsectionBeOpen(nodeLibrary["Action Nodes"]["Discord Integration"])}
            >
              {nodeLibrary["Action Nodes"]["Discord Integration"].map((node) => (
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
            defaultOpen={shouldSectionBeOpen(nodeLibrary["Data Processing"])}
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
            defaultOpen={shouldSectionBeOpen(nodeLibrary["Flow Control"])}
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

          {/* Special Nodes */}
          <CollapsibleSection 
            title="Special Nodes" 
            defaultOpen={shouldSectionBeOpen(nodeLibrary["Special Nodes"])}
          >
            {nodeLibrary["Special Nodes"].map((node) => (
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