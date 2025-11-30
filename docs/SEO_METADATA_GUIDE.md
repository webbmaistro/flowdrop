# SEO Metadata System Guide

## Overview

This guide explains Flowdrop's centralized SEO metadata system for documentation pages. It's designed to be **scalable**, **maintainable**, and follows **Next.js 13+ App Router best practices**.

## Architecture

### Three-Layer System

1. **Utility Functions** (`lib/metadata.ts`) - Reusable metadata generators
2. **Centralized Config** (`lib/docs-metadata-config.ts`) - Single source of truth for all docs metadata
3. **Layout Files** (`app/docs/**/layout.tsx`) - Minimal glue code that connects config to pages

## Why This Approach?

### ✅ Benefits

- **DRY (Don't Repeat Yourself)**: No duplicate metadata code
- **Single Source of Truth**: All metadata in one file
- **Type Safety**: TypeScript ensures consistency
- **Easy Updates**: Change metadata in one place
- **SEO Optimized**: Includes all critical tags (canonical, OG, Twitter, robots)
- **Scalable**: Add new pages with 2-3 lines of code

### ❌ What We Avoided

- Duplicating metadata across 20+ layout files
- Inconsistent SEO implementations
- Hard-to-maintain scattered metadata
- Missing canonical tags or other SEO essentials

## File Structure

```
flowdrop/
├── lib/
│   ├── metadata.ts              # Utility functions for generating metadata
│   └── docs-metadata-config.ts  # Centralized metadata configuration
├── app/
│   └── docs/
│       ├── getting-started/
│       │   ├── layout.tsx       # 3 lines: import config + export metadata
│       │   └── page.tsx         # Client component (can use framer-motion)
│       ├── workflow-builder-basics/
│       │   ├── layout.tsx
│       │   └── page.tsx
│       └── ...
└── docs/
    └── SEO_METADATA_GUIDE.md    # This file
```

## How to Add a New Documentation Page

### Step 1: Add Metadata Config

Edit `lib/docs-metadata-config.ts`:

```typescript
export const docsMetadata = {
  // ... existing configs ...
  
  myNewPage: {
    title: 'My New Documentation Page',
    description: 'A comprehensive guide to this new feature...',
    path: '/docs/my-new-page',
    keywords: [
      'feature keyword',
      'another keyword',
      'SEO terms',
    ],
    // Optional for articles:
    type: 'article' as const,
    datePublished: '2024-12-01',
    dateModified: '2024-12-01',
    wordCount: 2500,
    timeRequired: 'PT10M', // ISO 8601 duration (10 minutes)
  },
} as const;
```

### Step 2: Create Layout File

Create `app/docs/my-new-page/layout.tsx`:

```typescript
import { generateDocsMetadata } from '@/lib/metadata';
import { docsMetadata } from '@/lib/docs-metadata-config';

export const metadata = generateDocsMetadata(docsMetadata.myNewPage);

export default function MyNewPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

### Step 3: Create Page Component

Create `app/docs/my-new-page/page.tsx` as usual - can be client or server component.

**That's it!** Three simple steps.

## What Gets Generated Automatically

The `generateDocsMetadata()` function creates:

### 1. Basic Metadata
- ✅ Title (with "| Flowdrop Docs" suffix)
- ✅ Description
- ✅ Keywords (optional)

### 2. Canonical URL
- ✅ Full URL with `https://flowdrop.xyz` prefix
- ✅ Prevents duplicate content issues
- ✅ Critical for Google indexing

### 3. Open Graph Tags
- ✅ `og:title`
- ✅ `og:description`
- ✅ `og:type` (website or article)
- ✅ `og:url`
- ✅ `og:image` (with dimensions)
- ✅ `og:site_name`

### 4. Twitter Cards
- ✅ `twitter:card` (summary_large_image)
- ✅ `twitter:title`
- ✅ `twitter:description`
- ✅ `twitter:image`
- ✅ `twitter:site` (@flowdrop)
- ✅ `twitter:creator`

### 5. Robots Directives
- ✅ `index: true` (allow indexing)
- ✅ `follow: true` (follow links)
- ✅ Google-specific directives for rich previews

## Advanced: Structured Data (JSON-LD)

For pages that need rich search results, use structured data helpers:

### Article Schema

```typescript
import Script from 'next/script';
import { generateArticleSchema } from '@/lib/metadata';
import { docsMetadata } from '@/lib/docs-metadata-config';

export default function MyArticlePage() {
  const schema = generateArticleSchema(docsMetadata.myNewPage);
  
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Your page content */}
    </>
  );
}
```

### HowTo/Tutorial Schema

```typescript
import { generateHowToSchema } from '@/lib/metadata';

const schema = generateHowToSchema({
  title: 'How to Build Your First Workflow',
  description: 'Step-by-step tutorial...',
  path: '/docs/getting-started/first-workflow',
  totalTime: 'PT30M', // 30 minutes
  steps: [
    {
      name: 'Create a new workflow',
      text: 'Click the "New Workflow" button on the dashboard',
    },
    {
      name: 'Add a trigger',
      text: 'Select a trigger node to start your automation',
    },
    // ... more steps
  ],
});
```

### Breadcrumb Schema

```typescript
import { generateBreadcrumbSchema } from '@/lib/metadata';

const breadcrumbs = generateBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Docs', path: '/docs' },
  { name: 'Getting Started', path: '/docs/getting-started' },
  { name: 'Quick Start', path: '/docs/getting-started/quick-start' },
]);
```

## Geographic Data

**Q: Should docs pages include geo tags?**
**A: No.** Geographic tags are for business locations, not content pages.

The root layout (`app/layout.tsx`) already includes:
- `geo.region`: US-CA
- `geo.placename`: San Francisco
- `geo.position`: 37.7749;-122.4194

These apply globally and don't need to be repeated in docs pages.

## SEO Best Practices Implemented

### ✅ Canonical URLs
- **Critical for Google indexing**
- Prevents duplicate content penalties
- Always uses full absolute URLs
- Each page has unique canonical

### ✅ Meta Descriptions
- 150-160 character limit (optimal for search results)
- Action-oriented language
- Includes target keywords
- Unique per page

### ✅ Title Tags
- 50-60 character limit
- Primary keyword first
- Brand name at end
- Unique per page

### ✅ Keywords
- Relevant, specific terms
- Mix of short and long-tail keywords
- Based on search intent
- Not stuffed (5-10 per page)

### ✅ Open Graph & Twitter Cards
- Social media previews
- Increases click-through rates
- Professional appearance when shared
- Custom images (1200x630px)

### ✅ Structured Data
- Rich search results
- Enhanced SERP features
- Better click-through rates
- Improved semantic understanding

### ✅ Robots Directives
- Explicit indexing permission
- Link following enabled
- Max preview settings for rich snippets
- Google-specific optimizations

## Maintenance

### Updating Metadata

To update any page's metadata:

1. Edit `lib/docs-metadata-config.ts`
2. Find the page's config
3. Update fields as needed
4. No other files need changes!

### Adding Keywords

```typescript
// Bad - too many, too generic
keywords: ['workflow', 'automation', 'software', 'tool', 'app', 'platform', 'cloud', 'saas']

// Good - specific, targeted
keywords: [
  'AI workflow builder',
  'no-code automation',
  'visual workflow designer',
  'workflow automation tutorial',
]
```

### Optimizing Descriptions

```typescript
// Bad - generic, no action
description: 'This page has information about workflows.'

// Good - specific, action-oriented, includes keywords
description: 'Learn how to build your first AI workflow with Flowdrop. Step-by-step guide to creating automated workflows using drag-and-drop nodes and triggers.'
```

## Performance Considerations

- **Zero Client-Side Overhead**: All metadata is static at build time
- **No Runtime Cost**: Next.js generates metadata during SSG/ISR
- **Tree-Shaking**: Unused utilities are eliminated
- **Type-Safe**: Catches errors at compile time

## Scaling to 100+ Pages

This system is designed to scale. When you have 100+ docs pages:

1. **Group configs by section** in `docs-metadata-config.ts`:
```typescript
export const docsMetadata = {
  gettingStarted: { /* ... */ },
  nodes: {
    triggers: { /* ... */ },
    actions: { /* ... */ },
    // ... 50+ node pages
  },
  integrations: { /* ... */ },
  // ... etc
};
```

2. **Use code generation** for repetitive pages (e.g., node docs)
3. **Add validation** to ensure no missing/duplicate paths
4. **Track in CMS** if metadata needs non-technical editing

## Verification

### Check Canonical Tags in Browser

```bash
# View source and search for "canonical"
curl https://flowdrop.xyz/docs/getting-started | grep canonical

# Should output:
<link rel="canonical" href="https://flowdrop.xyz/docs/getting-started">
```

### Google Search Console

1. Submit sitemap: `https://flowdrop.xyz/sitemap.xml`
2. Request indexing for new pages
3. Monitor coverage reports
4. Check for duplicate canonicals

### Testing Tools

- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Schema Validator**: https://validator.schema.org/

## Common Issues & Solutions

### Issue: Canonical tag not appearing

**Solution**: Ensure you created a `layout.tsx` file (not just `page.tsx`) and exported `metadata`.

### Issue: Duplicate canonical URLs

**Solution**: Check that each page has a unique `path` in `docs-metadata-config.ts`.

### Issue: Description too long in search results

**Solution**: Keep descriptions under 160 characters. Update in config file.

### Issue: OG image not loading

**Solution**: Ensure `https://flowdrop.xyz/website-preview.png` is accessible. Can customize per page:

```typescript
myPage: {
  title: 'My Page',
  description: '...',
  path: '/docs/my-page',
  image: 'https://flowdrop.xyz/my-custom-image.png',
}
```

## Next Steps

1. ✅ Canonical tags implemented
2. ✅ Centralized metadata system created
3. ✅ All current docs pages configured
4. 🔄 Monitor Google Search Console
5. 🔄 Add structured data for key pages
6. 🔄 Optimize based on search performance

## Questions?

This system follows Next.js 13+ App Router conventions and SEO best practices. It's production-ready and scales with your documentation.

**Key Principle**: One config file, one utility function, minimal boilerplate everywhere else.

