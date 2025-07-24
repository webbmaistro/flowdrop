"use client";
import { usePathname } from "next/navigation";
import SidebarLink from "@/components/ui/SidebarLink";

const nav = [
  { href: "/docs", label: "Getting Started" },
  { href: "/docs/ai-workflows-explained", label: "AI Workflows Explained" },
  { href: "/docs/workflow-builder-basics", label: "Workflow Builder Basics" },
  { href: "/docs/workflow-editor-comparison", label: "Workflow Editor Comparison" },
  { href: "/docs/ai-blocks-nodes", label: "AI Blocks & Nodes", wip: true },
  { href: "/docs/roadmap", label: "Roadmap" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-neutral-800 bg-neutral-950/80">
      <nav className="flex-1 py-8 space-y-2">
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
      </nav>
    </aside>
  );
} 