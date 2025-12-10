# Founders Profile System

A reusable component system for displaying founder profiles across the blog and website.

## Overview

The founders profile system provides a single source of truth for founder information (names, roles, bios, LinkedIn links, images) that can be used throughout the site.

## Files Created

- **`lib/founders.ts`** - Central data store for founder profiles
- **`components/blog/FoundersSection.tsx`** - Reusable React component for displaying founder profiles
- Updates to `components/blog/BlogContent.tsx` and `lib/blog.ts` to support custom markdown tags

## Usage in Blog Posts

### Compact Variant (Recommended for Blog Posts)

Add this tag anywhere in your markdown blog post:

```markdown
<founders-section variant="compact" />
```

This will render:
- A paragraph about Webb trying to learn coding
- Links to both founders' LinkedIn profiles
- Styled in a card format that matches your blog design

### Full Variant (Team Page Style)

For more detailed founder profiles:

```markdown
<founders-section variant="full" />
```

This will render:
- Profile images for both founders
- Names (linked to LinkedIn)
- Roles (Founder, CTO)
- Full bios
- LinkedIn connect buttons

## Usage in React Components

Import and use the component directly:

```tsx
import { FoundersSection } from '@/components/blog';

// In your component
<FoundersSection variant="compact" />
// or
<FoundersSection variant="full" />
```

## Updating Founder Information

To update founder details (bio, LinkedIn URL, image, etc.), edit the central data file:

**`lib/founders.ts`**

```typescript
export const founders: Record<string, Founder> = {
  'webb-hammond': {
    name: 'Webb Hammond',
    role: 'Founder',
    bio: 'Your updated bio here...',
    linkedIn: 'https://www.linkedin.com/in/webb-hammond-b3b46859/',
    image: '/assets/founders/webb.jpg', // Update image path
  },
  'john-pizzo': {
    name: 'John Pizzo',
    role: 'CTO',
    bio: 'Your updated bio here...',
    linkedIn: 'https://www.linkedin.com/in/johnpizzo/',
    image: '/assets/founders/john.jpg', // Update image path
  },
};
```

## Benefits

✅ **Single Source of Truth** - Update founder info once, it updates everywhere
✅ **Consistent Branding** - Same styling and information across all blog posts
✅ **Easy to Use** - Just add one line to any blog post
✅ **SEO Friendly** - LinkedIn links are properly formatted with rel attributes
✅ **Reusable** - Can be used in blog posts, team pages, about pages, etc.

## Adding More Founders

To add a new founder:

1. Add their profile to `lib/founders.ts`:
```typescript
'jane-doe': {
  name: 'Jane Doe',
  role: 'COO',
  bio: 'Jane leads operations at Flowdrop...',
  linkedIn: 'https://www.linkedin.com/in/janedoe/',
  image: '/assets/founders/jane.jpg',
},
```

2. The component will automatically include them in the full variant

## Example Blog Post Usage

```markdown
---
title: "My Blog Post"
author: "Flowdrop Team"
---

Your blog content here...

## About Flowdrop

At Flowdrop, we make automation accessible to everyone.

<founders-section variant="compact" />

More content here...
```

## Current Implementation

✅ LinkedIn URLs are up to date
- Webb Hammond: https://www.linkedin.com/in/webb-hammond-b3b46859/
- John Pizzo: https://www.linkedin.com/in/johnpizzo/

✅ Component is integrated into blog system
✅ Markdown processor supports the custom tag
✅ Styling matches existing blog design

