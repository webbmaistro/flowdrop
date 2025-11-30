# Quick Guide: Adding a New Documentation Page

## ✅ 3-Step Checklist

### Step 1: Add Metadata Config

Open `lib/docs-metadata-config.ts` and add your page:

```typescript
export const docsMetadata = {
  // ... existing configs ...
  
  myNewPage: {
    title: 'My New Page Title',                    // ⚠️ Keep under 60 chars
    description: 'SEO description here...',         // ⚠️ Aim for 150-160 chars
    path: '/docs/my-new-page',                      // ⚠️ Must match folder path
    keywords: ['keyword1', 'keyword2', 'keyword3'], // 5-10 keywords
  },
} as const;
```

**Pro Tips:**
- Title: 50-60 characters (shows fully in search results)
- Description: 150-160 characters (optimal for Google)
- Keywords: 5-10 targeted terms, not stuffed
- Path: Must match your actual route exactly

### Step 2: Create Layout File

**Option A - Copy Template:**
```bash
# From your terminal
cp app/docs/_templates/layout.template.tsx app/docs/my-new-page/layout.tsx
```

Then edit `app/docs/my-new-page/layout.tsx`:
```typescript
import { generateDocsMetadata } from '@/lib/metadata';
import { docsMetadata } from '@/lib/docs-metadata-config';

// Change 'myNewPage' to your config key ⬇️
export const metadata = generateDocsMetadata(docsMetadata.myNewPage);

// Change function name to match your page ⬇️
export default function MyNewPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

**Option B - Create Manually:**
```bash
# Create the file
mkdir -p app/docs/my-new-page
touch app/docs/my-new-page/layout.tsx
```

Then paste the code above.

### Step 3: Create Your Page

Create `app/docs/my-new-page/page.tsx` as normal:

```typescript
"use client"  // Can be client component!

import React from 'react';

export default function MyNewPage() {
  return (
    <div>
      <h1>My New Page</h1>
      {/* Your content here */}
    </div>
  );
}
```

## ✅ Validation

Run the validator to check everything:

```bash
npx tsx scripts/validate-docs-metadata.ts
```

This checks:
- ✅ All pages have metadata config
- ✅ All configs have layout files
- ✅ Title/description lengths are optimal
- ✅ Paths match file structure
- ✅ No duplicate paths

## 📋 Full Example

Let's add a new page: "Advanced Integrations"

**1. Add config** (`lib/docs-metadata-config.ts`):
```typescript
export const docsMetadata = {
  // ... existing configs ...
  
  advancedIntegrations: {
    title: 'Advanced Integrations Guide',
    description: 'Learn how to build custom integrations with Flowdrop. Connect any API, database, or service to your workflows with advanced techniques.',
    path: '/docs/advanced-integrations',
    keywords: [
      'custom integrations',
      'API integration',
      'workflow integrations',
      'advanced automation',
      'custom connectors',
    ],
  },
} as const;
```

**2. Create layout** (`app/docs/advanced-integrations/layout.tsx`):
```typescript
import { generateDocsMetadata } from '@/lib/metadata';
import { docsMetadata } from '@/lib/docs-metadata-config';

export const metadata = generateDocsMetadata(docsMetadata.advancedIntegrations);

export default function AdvancedIntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

**3. Create page** (`app/docs/advanced-integrations/page.tsx`):
```typescript
"use client"

import React from 'react';
import { typography } from '@/lib/styles';

export default function AdvancedIntegrationsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className={typography.h1}>Advanced Integrations Guide</h1>
      {/* Your amazing content here */}
    </div>
  );
}
```

**Done!** ✅ The page now has:
- Canonical URL
- Meta title & description
- Open Graph tags (Facebook, LinkedIn)
- Twitter Cards
- Keywords
- Robots directives

## 🎯 What Gets Auto-Generated

When you use `generateDocsMetadata()`, you automatically get:

```html
<!-- Basic Meta -->
<title>Advanced Integrations Guide | Flowdrop Docs</title>
<meta name="description" content="Learn how to build custom integrations..." />
<meta name="keywords" content="custom integrations, API integration, ..." />

<!-- Canonical URL (critical for SEO!) -->
<link rel="canonical" href="https://flowdrop.xyz/docs/advanced-integrations" />

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="Advanced Integrations Guide" />
<meta property="og:description" content="Learn how to build..." />
<meta property="og:url" content="https://flowdrop.xyz/docs/advanced-integrations" />
<meta property="og:image" content="https://flowdrop.xyz/website-preview.png" />
<meta property="og:type" content="website" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Advanced Integrations Guide" />
<meta name="twitter:description" content="Learn how to build..." />
<meta name="twitter:image" content="https://flowdrop.xyz/website-preview.png" />

<!-- Robots Directives -->
<meta name="robots" content="index, follow" />
```

## 🚫 Common Mistakes to Avoid

### ❌ DON'T: Add metadata to page.tsx
```typescript
// ❌ WRONG - doesn't work with "use client"
"use client"
export const metadata = { ... };  // This won't work!
```

### ✅ DO: Add metadata to layout.tsx
```typescript
// ✅ CORRECT - layout.tsx can be server component
export const metadata = generateDocsMetadata(docsMetadata.myPage);
```

### ❌ DON'T: Duplicate metadata
```typescript
// ❌ WRONG - duplicating code
export const metadata: Metadata = {
  title: '...',
  description: '...',
  openGraph: { ... },
  // 30 lines of boilerplate
};
```

### ✅ DO: Use the shared function
```typescript
// ✅ CORRECT - one line, all metadata included
export const metadata = generateDocsMetadata(docsMetadata.myPage);
```

### ❌ DON'T: Forget to add config first
```typescript
// ❌ WRONG - config key doesn't exist yet
export const metadata = generateDocsMetadata(docsMetadata.nonExistentPage);
// TypeScript error: Property 'nonExistentPage' does not exist
```

### ✅ DO: Add config before using it
```typescript
// 1. First add to lib/docs-metadata-config.ts
// 2. Then reference it in layout.tsx
export const metadata = generateDocsMetadata(docsMetadata.myNewPage);
```

## 📚 Need More Info?

- **Full Guide**: See `docs/SEO_METADATA_GUIDE.md`
- **Implementation Details**: See `docs/SEO_IMPLEMENTATION_SUMMARY.md`
- **Template**: Copy from `app/docs/_templates/layout.template.tsx`
- **Validation**: Run `npx tsx scripts/validate-docs-metadata.ts`

## 🎉 That's It!

Three steps, three minutes, full SEO optimization. The system handles the rest!

