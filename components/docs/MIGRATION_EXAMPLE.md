# Migration Example: Before & After

This document shows the dramatic improvement when migrating from manual JSX to the component library.

## Before: Manual Trigger Page (Old Approach)

**390 lines** of repetitive JSX with duplicated structure:

```tsx
"use client"

import React from 'react';
import { PlayCircle, Zap, Settings, AlertTriangle, CheckCircle, ExternalLink, ClipboardList } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, RelatedResourceCard } from '@/components/ui';
import { NodeHeader } from '@/components/docs';
import Callout from "@/components/ui/Callout";
import CodeBlock from "@/components/ui/CodeBlock";
import CollapsibleSection from "@/components/ui/CollapsibleSection";
import Link from 'next/link';

export default function TriggerNode() {
  return (
    <div className="max-w-4xl mx-auto">
      <NodeHeader
        icon={PlayCircle}
        title="Manual Trigger"
        description="Start a workflow manually from the editor or API"
        nodeType="Trigger"
        category="Workflow Control"
        iconName="PlayCircle"
        iconColor="primary"
      />

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-neutral-300 mb-6">
          The <strong>Manual Trigger</strong> node acts as the entry point...
        </p>
        
        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Key Features
          </h3>
          <ul className="text-neutral-300 space-y-2">
            <li>• On-demand execution from the UI</li>
            <li>• No external setup required</li>
            <li>• Optional initial payload for downstream nodes</li>
          </ul>
        </div>
      </section>

      {/* Prerequisites - 50+ lines of repeated Card structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
        <div className="space-y-4">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-primary-main" />
                Workflow Access
              </CardTitle>
              <CardDescription>...</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Manual access...</span>
                </div>
                {/* More repetitive markup */}
              </div>
            </CardContent>
          </Card>
          {/* More cards... */}
        </div>
      </section>

      {/* Best Practices - 40+ lines of repeated structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Do&apos;s
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Start simple workflows here...</li>
                {/* More items */}
              </ul>
            </CardContent>
          </Card>
          {/* Don'ts card with same structure... */}
        </div>
        
        <div className="mt-6">
          <Callout emoji="💡" color="border-blue-500">
            <strong>Pro Tip:</strong> Use the Manual Trigger...
          </Callout>
        </div>
      </section>

      {/* Related Resources - More repetitive structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <RelatedResourceCard href="/docs/nodes/schedule" title="..." description="..." />
          {/* More cards */}
        </div>
      </section>
    </div>
  );
}
```

## After: Manual Trigger Page (Component Library)

**~100 lines** of clean, data-driven code:

```tsx
"use client"

import React from 'react';
import { PlayCircle, ClipboardList, Settings } from 'lucide-react';
import {
  NodeLayout,
  NodeHeader,
  OverviewSection,
  PrerequisitesSection,
  BestPracticesSection,
  RelatedResourcesSection
} from '@/components/docs';

export default function TriggerNode() {
  const prerequisites = [
    {
      icon: ClipboardList,
      title: "Workflow Access",
      description: "Ability to open and run workflows from the builder",
      requirements: [
        "Manual access to the workflow in the editor",
        "Optional: API access to start runs programmatically"
      ]
    },
    {
      icon: Settings,
      title: "Technical Requirements",
      description: "System capabilities",
      requirements: [
        "Trigger Mechanism: System capable of starting workflows on demand",
        "Optional Payload: Ability to provide initial data at run start"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={PlayCircle}
        title="Manual Trigger"
        description="Start a workflow manually from the editor or API"
        nodeType="Trigger"
        category="Workflow Control"
        iconName="PlayCircle"
        iconColor="primary"
      />

      <OverviewSection
        description="The Manual Trigger node acts as the entry point when you click Run in the editor. It's perfect for building, testing, and running workflows on demand without external events."
        keyFeatures={[
          "On-demand execution from the UI",
          "No external setup required",
          "Optional initial payload for downstream nodes"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <BestPracticesSection
        dos={[
          "Start simple workflows here before adding other triggers",
          "Pass minimal, well-structured initial data",
          "Log execution timestamps for traceability",
          "Transition to Webhook/Schedule when automating"
        ]}
        donts={[
          "Don't rely on manual runs for production automation",
          "Avoid very large payloads at start time",
          "Don't skip error handling in downstream nodes"
        ]}
        proTip="Use the Manual Trigger during early development to iterate rapidly. Once your flow stabilizes, switch to Schedule or Webhook to automate execution."
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/schedule",
            title: "Schedule Node",
            description: "Automatically run workflows on a schedule"
          },
          {
            href: "/docs/nodes/webhook",
            title: "Webhook Node",
            description: "Trigger workflows via HTTP requests"
          }
        ]}
      />
    </NodeLayout>
  );
}
```

## Comparison

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Lines of Code** | 390 | ~100 | **74% reduction** |
| **JSX Complexity** | High | Low | **Simplified** |
| **Maintainability** | Hard | Easy | **Much easier** |
| **Consistency** | Manual | Automatic | **Guaranteed** |
| **Time to Create** | 30-60 min | 10-15 min | **3-4x faster** |
| **Bug Surface** | Large | Small | **Fewer errors** |

## Benefits Realized

### 1. **Code Reduction**
- Cut 75% of boilerplate code
- Focus on content, not structure
- Easier to read and understand

### 2. **Consistency**
- All pages use identical structure
- Styling changes propagate automatically
- No more inconsistent spacing or colors

### 3. **Maintainability**
- Update one component → all pages updated
- Add new sections → simple component addition
- Refactor structure → change components, not pages

### 4. **Developer Experience**
- Write less, ship faster
- Clear templates and patterns
- Type-safe with TypeScript
- Self-documenting code

### 5. **Scalability**
- Easy to add 50+ more nodes
- No fear of technical debt
- Clean, modular architecture

## Migration Steps

To migrate an existing page:

1. **Copy the template**: Start with `NodePageTemplate.tsx`
2. **Extract data**: Pull your text into arrays and objects
3. **Import components**: Add the components you need
4. **Replace sections**: Swap JSX for component calls
5. **Test**: Verify the page looks identical
6. **Delete old code**: Remove the old JSX

**Time to migrate one page**: 15-30 minutes

## Next Steps

1. Migrate all existing node pages to use the component library
2. Use the template for all new node documentation
3. Add more specialized components as patterns emerge
4. Keep the README updated with new components

