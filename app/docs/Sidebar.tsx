"use client";
import { usePathname } from "next/navigation";
import SidebarLink from "@/components/ui/SidebarLink";
import CollapsibleSection from "@/components/ui/CollapsibleSection";

const nav = [
  { href: "/docs", label: "Getting Started" },
  { href: "/docs/ai-workflows-explained", label: "AI Workflows Explained" },
  { href: "/docs/workflow-builder-basics", label: "Workflow Builder Basics" },
  { href: "/docs/workflow-editor-comparison", label: "Workflow Editor Comparison" },
];

const nodeLibrary = {
  "Workflow Triggers": [
    { href: "/docs/nodes/manual-trigger", label: "Manual Trigger" },
    { href: "/docs/nodes/schedule", label: "Schedule" },
    { href: "/docs/nodes/email", label: "Email" },
    { href: "/docs/nodes/webhook", label: "Webhook" },
  ],
  "Action Nodes": {
    "General Actions": [
      { href: "/docs/nodes/llm-prompt", label: "LLM Prompt" },
      { href: "/docs/nodes/http-request", label: "HTTP Request" },
      { href: "/docs/nodes/fetch-webpage", label: "Fetch Webpage" },
      { href: "/docs/nodes/send-email", label: "Send Email" },
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
  
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-neutral-800 bg-neutral-950/80">
      <nav className="flex-1 py-8 space-y-2">
        {/* Main navigation */}
        {nav.map((item) => (
          <SidebarLink
            key={item.href}
            href={item.href}
            active={pathname === item.href}
            wip={item.wip}
          >
            {item.label}
          </SidebarLink>
        ))}
        
        {/* Node Library Section */}
        <div className="pt-6 border-t border-neutral-800">
          <CollapsibleSection title="Node Library" defaultOpen={false}>
            {/* Workflow Triggers */}
            <CollapsibleSection title="Workflow Triggers" defaultOpen={false}>
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
          <CollapsibleSection title="Action Nodes" defaultOpen={false}>
            {/* General Actions */}
            <CollapsibleSection title="General Actions" defaultOpen={false}>
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
            <CollapsibleSection title="Gmail Integration" defaultOpen={false}>
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
            <CollapsibleSection title="Google Sheets Integration" defaultOpen={false}>
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
            <CollapsibleSection title="Discord Integration" defaultOpen={false}>
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
          <CollapsibleSection title="Data Processing" defaultOpen={false}>
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
          <CollapsibleSection title="Flow Control" defaultOpen={false}>
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
          <CollapsibleSection title="Special Nodes" defaultOpen={false}>
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