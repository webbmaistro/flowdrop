'use client';

import { useEffect, useRef } from 'react';
import { blogStyles } from './blog-styles';

interface BlogContentProps {
  content: string;
}

/**
 * Markdown content renderer with Geist Mono for code blocks
 * Applies proper typography and styling to parsed markdown
 */
export function BlogContent({ content }: BlogContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      // Add IDs to headings for anchor links
      const headings = contentRef.current.querySelectorAll('h2, h3, h4, h5, h6');
      headings.forEach((heading) => {
        const text = heading.textContent || '';
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-');
        heading.id = id;
      });

      // Style code blocks with Geist Mono
      const codeBlocks = contentRef.current.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        block.classList.add('font-[family-name:var(--font-geist-mono)]');
      });

      // Style inline code with Geist Mono
      const inlineCodes = contentRef.current.querySelectorAll('code:not(pre code)');
      inlineCodes.forEach((code) => {
        code.classList.add('font-[family-name:var(--font-geist-mono)]');
      });
    }
  }, [content]);

  return (
    <div
      ref={contentRef}
      className={blogStyles.content.article}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

