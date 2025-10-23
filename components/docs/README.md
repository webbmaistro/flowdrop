# Node Documentation Components

A comprehensive, reusable component library for creating consistent node documentation pages.

## Philosophy

This library follows a modular, data-driven approach to documentation. Instead of repeating JSX structure across dozens of pages, you define your content as data and let the components handle the rendering. This makes it:

- **Easy to maintain**: Update styles in one place
- **Easy to scale**: Add new nodes quickly with consistent structure
- **Easy to refactor**: Change the entire docs structure without touching individual pages
- **Type-safe**: TypeScript interfaces ensure consistency

## Components

### Core Layout Components

#### `NodeLayout`
Wrapper component that provides consistent max-width and centering.

```tsx
<NodeLayout>
  {/* Your content */}
</NodeLayout>
```

#### `NodeHeader`
The header section with icon, title, description, and metadata card.

```tsx
<NodeHeader
  icon={PlayCircle}
  title="Manual Trigger"
  description="Start a workflow manually from the editor or API"
  nodeType="Trigger"
  category="Workflow Control"
  iconName="PlayCircle"
  iconColor="primary"  // Always use "primary" for consistency
/>
```

### Content Sections

#### `OverviewSection`
Overview with description and key features list.

```tsx
<OverviewSection
  description="The Manual Trigger node acts as the entry point..."
  keyFeatures={[
    "On-demand execution from the UI",
    "No external setup required",
    "Optional initial payload for downstream nodes"
  ]}
/>
```

#### `PrerequisitesSection`
Prerequisites with icons and requirements.

```tsx
const prerequisites = [
  {
    icon: Shield,
    title: "Access Required",
    description: "What you need to use this node",
    requirements: [
      "Valid API credentials",
      "Proper permissions"
    ]
  }
];

<PrerequisitesSection items={prerequisites} />
```

#### `NodeConfigurationSection`
Input and output fields configuration.

```tsx
<NodeConfigurationSection
  inputFields={{
    required: [
      {
        name: "Prompt",
        type: "text",
        required: true,
        valueType: "string",
        description: "The text prompt to send to the AI"
      }
    ],
    optional: [
      {
        name: "Temperature",
        type: "number",
        required: false,
        defaultValue: "0.7",
        valueType: "number",
        description: "Controls randomness of responses"
      }
    ]
  }}
  outputFields={[
    {
      name: "Response",
      type: "string",
      valueType: "The AI response",
      description: "Contains the generated text"
    }
  ]}
/>
```

#### `BestPracticesSection`
Best practices with Do's, Don'ts, and optional Security tips.

```tsx
<BestPracticesSection
  dos={[
    "Use descriptive prompts",
    "Test with different temperatures",
    "Monitor API costs"
  ]}
  donts={[
    "Don't use vague prompts",
    "Avoid extremely high temperatures",
    "Don't ignore cost tracking"
  ]}
  securityItems={[  // Optional
    "Always use HTTPS",
    "Validate inputs",
    "Monitor access patterns"
  ]}
  proTip="Use template variables for dynamic content generation."
/>
```

#### `TroubleshootingSection`
Common issues and solutions.

```tsx
<TroubleshootingSection
  issues={[
    {
      title: "Connection Failures",
      symptoms: "Node fails with timeout errors",
      solution: "Check network connectivity and API credentials"
    }
  ]}
/>
```

#### `TechnicalDetailsSection`
Technical implementation details.

```tsx
<TechnicalDetailsSection
  details={[
    {
      title: "Authentication",
      description: "How the node handles authentication",
      items: [
        {
          title: "OAuth Flow",
          description: "Uses OAuth 2.0 for secure authentication"
        }
      ]
    }
  ]}
/>
```

#### `ExampleCard`
Individual example with code or custom content.

```tsx
<ExampleCard
  title="Basic Usage"
  description="Send a simple request"
  code={`{ "prompt": "Write a haiku" }`}
  codeLanguage="json"
/>

// Or with custom content
<ExampleCard title="Advanced Usage">
  <div>{/* Custom JSX */}</div>
</ExampleCard>
```

#### `RelatedResourcesSection`
Related node links.

```tsx
<RelatedResourcesSection
  resources={[
    {
      href: "/docs/nodes/http-request",
      title: "HTTP Request Node",
      description: "Send HTTP requests"
    }
  ]}
/>
```

## Complete Example

Here's a minimal node documentation page using the component library:

```tsx
"use client"

import React from 'react';
import { Brain } from 'lucide-react';
import {
  NodeLayout,
  NodeHeader,
  OverviewSection,
  PrerequisitesSection,
  NodeConfigurationSection,
  BestPracticesSection,
  TroubleshootingSection,
  RelatedResourcesSection
} from '@/components/docs';

export default function MyNodePage() {
  const prerequisites = [
    {
      icon: Brain,
      title: "AI Service Access",
      description: "Must have access to AI services",
      requirements: [
        "Valid API key",
        "Sufficient credits"
      ]
    }
  ];

  return (
    <NodeLayout>
      <NodeHeader
        icon={Brain}
        title="My Node"
        description="Does something awesome"
        nodeType="Action"
        category="AI"
        iconName="Brain"
        iconColor="primary"
      />

      <OverviewSection
        description="This node does amazing things..."
        keyFeatures={[
          "Feature one",
          "Feature two",
          "Feature three"
        ]}
      />

      <PrerequisitesSection items={prerequisites} />

      <NodeConfigurationSection
        inputFields={{
          required: [
            {
              name: "Input",
              type: "text",
              required: true,
              valueType: "string",
              description: "The input value"
            }
          ]
        }}
        outputFields={[
          {
            name: "Output",
            type: "string",
            valueType: "Result",
            description: "The output value"
          }
        ]}
      />

      <BestPracticesSection
        dos={["Do this", "Do that"]}
        donts={["Don't do this", "Don't do that"]}
        proTip="Here's a helpful tip!"
      />

      <TroubleshootingSection
        issues={[
          {
            title: "Common Issue",
            symptoms: "Something goes wrong",
            solution: "Fix it like this"
          }
        ]}
      />

      <RelatedResourcesSection
        resources={[
          {
            href: "/docs/nodes/other-node",
            title: "Other Node",
            description: "Related node"
          }
        ]}
      />
    </NodeLayout>
  );
}
```

## Benefits

### Before (Old Approach)
- 300-800 lines of repetitive JSX per page
- Style changes require updating 20+ files
- Inconsistent structure between pages
- Hard to maintain and scale

### After (Component Library)
- 50-150 lines of data-driven configuration
- Style changes in one component affect all pages
- Guaranteed consistent structure
- Easy to add new nodes
- Type-safe with TypeScript

## Migration Guide

To migrate an existing node page:

1. Import the components you need from `@/components/docs`
2. Extract your content into data structures (arrays, objects)
3. Replace JSX sections with component calls
4. Pass your data to the components
5. Delete the old repetitive JSX

## Adding New Components

When adding a new reusable component:

1. Create the component file in `components/docs/`
2. Export it from `index.ts`
3. Document it in this README
4. Use consistent styling with existing components
5. Make it data-driven and configurable

## Styling Consistency

All components use:
- `bg-neutral-800` for cards and boxes
- `border-neutral-700` for borders
- `text-neutral-300` for body text
- `text-neutral-400` for descriptions
- `iconColor="primary"` for all node icons (for consistency)
