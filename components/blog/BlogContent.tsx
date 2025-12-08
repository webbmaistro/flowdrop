'use client';

import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { blogStyles } from './blog-styles';
import { SectionHeader } from './SectionHeader';

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

      // Make iframes responsive
      const iframes = contentRef.current.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        const iframeElement = iframe as HTMLIFrameElement;
        // Ensure iframe is responsive
        if (!iframeElement.parentElement?.classList.contains('youtube-embed-wrapper')) {
          const wrapper = document.createElement('div');
          wrapper.className = 'youtube-embed-wrapper relative w-full aspect-video my-8 rounded-lg overflow-hidden';
          iframeElement.parentNode?.insertBefore(wrapper, iframeElement);
          wrapper.appendChild(iframeElement);
          iframeElement.className = 'absolute inset-0 w-full h-full border-0';
          iframeElement.removeAttribute('width');
          iframeElement.removeAttribute('height');
        }
      });

      // Ensure paragraph-break divs are properly styled
      const paragraphBreaks = contentRef.current.querySelectorAll('.paragraph-break');
      paragraphBreaks.forEach((breakEl) => {
        // Ensure it's a block element
        if (breakEl instanceof HTMLElement) {
          breakEl.style.display = 'block';
        }
      });

      // Process section-header custom elements
      const sectionHeaders = contentRef.current.querySelectorAll('section-header');
      sectionHeaders.forEach((element) => {
        // Get text from attribute or element content
        const textAttr = element.getAttribute('text');
        const textContent = element.textContent?.trim() || '';
        const text = textAttr || textContent;
        
        if (text) {
          const wrapper = document.createElement('div');
          element.parentNode?.replaceChild(wrapper, element);
          const root = createRoot(wrapper);
          root.render(<SectionHeader text={text} />);
        }
      });
    }
  }, [content]);

  return (
    <div
      ref={contentRef}
      className={`${blogStyles.content.article} overflow-hidden`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}


