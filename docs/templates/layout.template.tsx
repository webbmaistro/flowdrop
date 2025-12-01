/**
 * ============================================================================
 * TEMPLATE: Documentation Page Layout
 * ============================================================================
 * 
 * Copy this file when creating a new docs page!
 * 
 * INSTRUCTIONS:
 * 1. Copy this file to your new docs directory
 * 2. Rename it from layout.template.tsx to layout.tsx
 * 3. Update 'myNewPage' to match your config key in docs-metadata-config.ts
 * 4. Update the function name to match your page (PascalCase)
 * 
 * Example:
 * - Config key: 'advancedFeatures'
 * - Function name: 'AdvancedFeaturesLayout'
 * 
 * ============================================================================
 */

import { generateDocsMetadata } from '@/lib/metadata';
import { docsMetadata } from '@/lib/docs-metadata-config';

// ⚠️ CHANGE 'myNewPage' to match your config key
export const metadata = generateDocsMetadata(docsMetadata.myNewPage);

// ⚠️ CHANGE 'MyNewPageLayout' to match your page name
export default function MyNewPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

