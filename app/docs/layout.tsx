/**
 * Main Docs Layout
 * 
 * 🚀 ADDING A NEW DOCS PAGE?
 * See: docs/ADDING_NEW_DOCS_PAGE.md for quick 3-step guide
 * 
 * Or follow these steps:
 * 1. Add config to: lib/docs-metadata-config.ts
 * 2. Create layout using template: app/docs/_templates/layout.template.tsx
 * 3. Create your page.tsx as normal
 * 4. Run: npm run validate-docs (to check everything)
 */

import React from "react";
import Sidebar from "./Sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 px-4 pt-20 pb-8 md:px-12 md:pt-24 md:pb-12 overflow-y-auto">
        {children}
      </main>
    </div>
  );
} 