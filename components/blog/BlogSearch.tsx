'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { BlogPostMetadata } from '@/types/blog';
import { blogStyles } from './blog-styles';
import { BlogCard } from './BlogCard';

interface BlogSearchProps {
  allPosts: BlogPostMetadata[];
}

/**
 * Client-side blog search with fuzzy matching
 * Displays results as BlogCard components
 */
export function BlogSearch({ allPosts }: BlogSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<BlogPostMetadata[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length > 0) {
        const lowerQuery = query.toLowerCase();
        const filtered = allPosts.filter((post) => {
          return (
            post.title.toLowerCase().includes(lowerQuery) ||
            post.description.toLowerCase().includes(lowerQuery) ||
            post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
            post.category.toLowerCase().includes(lowerQuery)
          );
        });
        setResults(filtered);
        setIsOpen(true);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, allPosts]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(true)}
          className={`${blogStyles.search.input} pl-12 pr-12`}
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
            aria-label="Clear search"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Search Results */}
      {isOpen && (
        <div className={blogStyles.search.results}>
          {results.length > 0 ? (
            <div className="p-4 space-y-4">
              <p className={`${blogStyles.body.small} text-neutral-400`}>
                Found {results.length} {results.length === 1 ? 'article' : 'articles'}
              </p>
              {results.slice(0, 5).map((post) => (
                <div key={post.slug} onClick={() => setIsOpen(false)}>
                  <BlogCard post={post} />
                </div>
              ))}
              {results.length > 5 && (
                <p className={`${blogStyles.body.small} text-neutral-400 text-center pt-2`}>
                  And {results.length - 5} more...
                </p>
              )}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className={`${blogStyles.body.base} text-neutral-400`}>
                No articles found for &quot;{query}&quot;
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

