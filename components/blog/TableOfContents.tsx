'use client';

import { useState, useEffect, useRef } from 'react';
import { TableOfContentsItem } from '@/types/blog';
import { blogStyles } from './blog-styles';

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

/**
 * Auto-generated table of contents with active section tracking
 * Sticky sidebar on desktop
 */
export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Wait a bit for dynamic content (like section-headers) to render
    const setupObserver = () => {
      const visibleSections = new Map<string, number>();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(entry.target.id, entry.intersectionRatio);
            } else {
              visibleSections.delete(entry.target.id);
            }
          });

          // Find the most visible section
          if (visibleSections.size > 0) {
            let maxRatio = 0;
            let mostVisibleId = '';
            
            visibleSections.forEach((ratio, id) => {
              if (ratio > maxRatio) {
                maxRatio = ratio;
                mostVisibleId = id;
              }
            });

            if (mostVisibleId) {
              setActiveId(mostVisibleId);
            }
          }
        },
        { 
          rootMargin: '-100px 0px -66% 0px',
          threshold: [0, 0.25, 0.5, 0.75, 1]
        }
      );

      items.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observerRef.current?.observe(element);
        }
      });
    };

    // Delay to allow dynamic content to render
    const timeoutId = setTimeout(setupObserver, 100);

    return () => {
      clearTimeout(timeoutId);
      observerRef.current?.disconnect();
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
      // Update URL without scrolling
      window.history.pushState(null, '', `#${id}`);
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <h2 className={`${blogStyles.heading.h4} mb-4 text-white`}>Table of Contents</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 1}rem` }}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`text-sm transition-colors cursor-pointer ${
                activeId === item.id
                  ? 'text-purple-400 font-medium'
                  : 'text-neutral-400 hover:text-neutral-100'
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

