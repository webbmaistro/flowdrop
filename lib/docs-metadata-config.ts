/**
 * ============================================================================
 * CENTRALIZED DOCS METADATA CONFIGURATION
 * ============================================================================
 * 
 * This is the SINGLE SOURCE OF TRUTH for all documentation page metadata.
 * 
 * 🚀 ADDING A NEW DOCS PAGE? Follow these steps:
 * 
 * Step 1: Add your page config HERE ⬇️
 * Step 2: Create a layout.tsx file (see TEMPLATE below)
 * Step 3: Create your page.tsx as normal
 * 
 * That's it! Canonical URLs, OG tags, Twitter cards all auto-generated.
 * 
 * ============================================================================
 * TEMPLATE FOR NEW PAGES:
 * ============================================================================
 * 
 * 1. Add config here:
 * 
 *    myNewPage: {
 *      title: 'Page Title Here',
 *      description: 'SEO-optimized description (150-160 chars)',
 *      path: '/docs/my-new-page',
 *      keywords: ['keyword1', 'keyword2', 'keyword3'],
 *    },
 * 
 * 2. Create app/docs/my-new-page/layout.tsx:
 * 
 *    import { generateDocsMetadata } from '@/lib/metadata';
 *    import { docsMetadata } from '@/lib/docs-metadata-config';
 *    
 *    export const metadata = generateDocsMetadata(docsMetadata.myNewPage);
 *    
 *    export default function MyNewPageLayout({ children }: { children: React.ReactNode }) {
 *      return <>{children}</>;
 *    }
 * 
 * 3. Create app/docs/my-new-page/page.tsx as normal (can be client component)
 * 
 * ============================================================================
 * TIPS:
 * ============================================================================
 * 
 * - Keep titles under 60 characters
 * - Keep descriptions between 150-160 characters
 * - Use 5-10 targeted keywords (not too many!)
 * - Path must match the actual route (e.g., '/docs/getting-started')
 * - Use 'type: "article" as const' for long-form content
 * - Add datePublished/dateModified for articles
 * 
 * ============================================================================
 */

export const docsMetadata = {
  // ============================================================================
  // GETTING STARTED SECTION
  // ============================================================================
  
  gettingStarted: {
    title: 'Getting Started with Flowdrop',
    description: 'Learn how to build powerful automations with Flowdrop. Watch our comprehensive app tour and get started with AI-powered workflow automation.',
    path: '/docs/getting-started',
    keywords: [
      'Flowdrop tutorial',
      'workflow automation tutorial',
      'AI workflow builder',
      'getting started',
      'workflow automation guide',
      'no-code automation',
      'visual workflow builder',
      'automation platform',
    ],
  },
  
  quickStart: {
    title: 'Quick Start Guide',
    description: 'Get started with Flowdrop in minutes. Learn how to sign up, connect integrations, and create your first AI-powered workflow automation.',
    path: '/docs/getting-started/quick-start',
    keywords: [
      'Flowdrop quick start',
      'workflow setup',
      'automation setup',
      'first workflow',
      'integration setup',
      'getting started guide',
    ],
  },
  
  firstWorkflow: {
    title: 'Your First Workflow',
    description: 'Build your first workflow with Flowdrop. Step-by-step guide to creating a simple email notification automation using our visual workflow builder.',
    path: '/docs/getting-started/first-workflow',
    keywords: [
      'first workflow',
      'workflow tutorial',
      'email automation',
      'workflow example',
      'automation tutorial',
      'beginner workflow',
    ],
  },
  
  aiChatFeatures: {
    title: 'Building with AI',
    description: 'Learn how to use Flowdrop\'s AI assistant to build workflows with natural language. Discover chat-based automation creation and AI-powered workflow generation.',
    path: '/docs/getting-started/ai-chat-features',
    keywords: [
      'AI workflow builder',
      'AI assistant',
      'natural language automation',
      'chat-based workflow',
      'AI-powered automation',
      'conversational workflow builder',
    ],
  },
  
  understandingNodeTypes: {
    title: 'Node Types Explained',
    description: 'Understanding Flowdrop node types. Learn about triggers, actions, data processing nodes, flow control, and human-in-the-loop nodes for building powerful workflows.',
    path: '/docs/getting-started/understanding-node-types',
    keywords: [
      'workflow nodes',
      'node types',
      'trigger nodes',
      'action nodes',
      'flow control',
      'data processing',
      'workflow building blocks',
    ],
  },
  
  bestPractices: {
    title: 'Best Practices',
    description: 'Learn Flowdrop workflow best practices. Optimize your automations with naming conventions, error handling, testing strategies, and performance tips.',
    path: '/docs/getting-started/best-practices',
    keywords: [
      'workflow best practices',
      'automation optimization',
      'workflow design',
      'error handling',
      'workflow testing',
      'performance optimization',
    ],
  },

  // ============================================================================
  // MAIN DOCUMENTATION PAGES
  // ============================================================================
  
  aiWorkflowsExplained: {
    title: 'What is a Workflow Builder? The Complete Guide to AI Automation in 2024',
    description: 'Discover how workflow builders are revolutionizing business automation, why AI-powered tools are dominating, and which use cases are driving the biggest ROI today.',
    path: '/docs/ai-workflows-explained',
    type: 'article' as const,
    keywords: [
      'workflow builder',
      'AI automation',
      'business automation',
      'workflow automation',
      'no-code automation',
      'AI workflow builder',
      'automation platform',
      'business process automation',
      'workflow tools',
      'automation software',
    ],
    datePublished: '2024-12-01',
    dateModified: '2024-12-01',
    wordCount: 3200,
    timeRequired: 'PT8M',
  },
  
  workflowBuilderBasics: {
    title: 'Workflow Builder Basics: Complete Guide to Building Your First AI Workflow',
    description: 'Master the fundamentals of visual workflow building. Learn how to create, test, and deploy automated workflows using drag-and-drop nodes, triggers, and actions.',
    path: '/docs/workflow-builder-basics',
    type: 'article' as const,
    keywords: [
      'workflow builder tutorial',
      'visual workflow builder',
      'drag and drop automation',
      'workflow nodes',
      'workflow connections',
      'automation triggers',
      'workflow testing',
      'no-code workflow',
      'workflow debugging',
      'automation builder guide',
    ],
    datePublished: '2024-12-01',
    dateModified: '2024-12-01',
    wordCount: 2800,
    timeRequired: 'PT10M',
  },
  
  workflowEditorComparison: {
    title: 'AI Workflow Builder Comparison 2025: Zapier vs Make vs n8n vs Gumloop vs Flowise',
    description: 'Compare the best AI workflow builders in 2025. Find the right automation tool for your startup with this side-by-side comparison of Zapier, Make, n8n, and more.',
    path: '/docs/workflow-editor-comparison',
    type: 'article' as const,
    keywords: [
      'AI workflow builder comparison',
      'Zapier alternative',
      'Make vs Zapier',
      'n8n review',
      'workflow automation comparison',
      'best workflow builder',
      'automation tool comparison',
      'low-code automation',
      'workflow builder features',
      'automation platform comparison',
    ],
    datePublished: '2024-06-01',
    dateModified: '2024-06-01',
  },

  // ============================================================================
  // JAVASCRIPT EXPRESSIONS
  // ============================================================================
  
  javascriptExpressions: {
    title: 'JavaScript Expressions in Flowdrop',
    description: 'Learn how to use JavaScript expressions in your Flowdrop workflows. Access helper utilities for strings, arrays, objects, and more to build powerful automations.',
    path: '/docs/javascript-expressions',
    keywords: [
      'JavaScript expressions',
      'workflow expressions',
      'string utilities',
      'array utilities',
      'object utilities',
      'workflow scripting',
      'automation code',
      'no-code JavaScript',
      'workflow helpers',
    ],
  },
  
  stringUtilities: {
    title: 'String Utilities | JavaScript Expressions',
    description: 'Learn how to use string manipulation utilities in Flowdrop workflows. Format text, parse strings, and transform data with built-in JavaScript helpers.',
    path: '/docs/javascript-expressions/string-utilities',
  },
  
  arrayUtilities: {
    title: 'Array Utilities | JavaScript Expressions',
    description: 'Learn how to use array manipulation utilities in Flowdrop workflows. Filter, map, sort, and transform arrays with built-in JavaScript helpers.',
    path: '/docs/javascript-expressions/array-utilities',
  },
  
  objectUtilities: {
    title: 'Object Utilities | JavaScript Expressions',
    description: 'Learn how to use object manipulation utilities in Flowdrop workflows. Transform, merge, and access nested properties with built-in JavaScript helpers.',
    path: '/docs/javascript-expressions/object-utilities',
  },
  
  typeUtilities: {
    title: 'Type & Utility Helpers | JavaScript Expressions',
    description: 'Learn how to use type checking and utility helpers in Flowdrop workflows. Validate data types, convert values, and handle edge cases with built-in helpers.',
    path: '/docs/javascript-expressions/type-utilities',
  },

  // ============================================================================
  // NODE LIBRARY
  // ============================================================================
  
  nodes: {
    title: 'Node Library',
    description: 'Browse all available nodes in Flowdrop. Explore triggers, actions, data processing nodes, flow control, and integrations for building powerful AI workflows.',
    path: '/docs/nodes',
    keywords: [
      'Flowdrop nodes',
      'workflow nodes',
      'automation nodes',
      'integration nodes',
      'trigger nodes',
      'action nodes',
      'data processing',
      'flow control',
      'workflow building blocks',
    ],
  },
  
  // ============================================================================
  // 🚀 ADD YOUR NEW PAGE CONFIG HERE
  // ============================================================================
  // 
  // Copy this template:
  // 
  // myNewPage: {
  //   title: 'Page Title (under 60 chars)',
  //   description: 'SEO description between 150-160 characters for optimal search results display.',
  //   path: '/docs/my-new-page',
  //   keywords: ['keyword1', 'keyword2', 'keyword3'],
  // },
  // 
  // Then create the layout file (see template at top of this file)
  // ============================================================================
  
} as const;
