import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import { BlogPost, BlogPostMetadata, TableOfContentsItem } from '@/types/blog';
import { generateSlug, calculateReadingTime } from './blog-utils';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Re-export utilities for convenience
export { generateSlug, calculateReadingTime } from './blog-utils';

/**
 * Extract table of contents from markdown content
 */
export function extractTableOfContents(content: string): TableOfContentsItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TableOfContentsItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');

    toc.push({ id, text, level });
  }

  return toc;
}

/**
 * Get all blog post slugs
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

/**
 * Get blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const readingTime = calculateReadingTime(content);
    
    return {
      slug: data.slug || slug,
      title: data.title,
      description: data.description,
      content,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
      author: data.author,
      authorBio: data.authorBio,
      authorImage: data.authorImage,
      category: data.category,
      tags: data.tags || [],
      featured: data.featured || false,
      ogImage: data.ogImage,
      readingTime,
      faqSchema: data.faqSchema,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return dateB - dateA;
    });

  return posts;
}

/**
 * Get posts metadata only (faster for listing pages)
 */
export function getAllPostsMetadata(): BlogPostMetadata[] {
  const posts = getAllPosts();
  return posts.map(({ content, faqSchema, ...metadata }) => metadata);
}

/**
 * Get featured posts (last 3 most recent posts)
 */
export function getFeaturedPosts(): BlogPostMetadata[] {
  const allPosts = getAllPostsMetadata();
  return allPosts.slice(0, 3);
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique categories with post counts
 */
export function getAllCategories(): { slug: string; name: string; count: number }[] {
  const posts = getAllPosts();
  const categoryMap = new Map<string, number>();

  posts.forEach((post) => {
    const category = post.category;
    categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
  });

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({
      slug: generateSlug(name),
      name,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Get all unique tags with post counts
 */
export function getAllTags(): { slug: string; name: string; count: number }[] {
  const posts = getAllPosts();
  const tagMap = new Map<string, number>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({
      slug: generateSlug(name),
      name,
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Get related posts based on tags and category
 */
export function getRelatedPosts(post: BlogPost, limit: number = 4): BlogPost[] {
  const allPosts = getAllPosts().filter((p) => p.slug !== post.slug);

  // Score posts based on shared tags and category
  const scoredPosts = allPosts.map((p) => {
    let score = 0;
    
    // Same category = +10 points
    if (p.category === post.category) {
      score += 10;
    }
    
    // Each shared tag = +5 points
    const sharedTags = p.tags.filter((tag) => post.tags.includes(tag));
    score += sharedTags.length * 5;
    
    return { post: p, score };
  });

  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

/**
 * Search posts by query (title, description, content, tags)
 */
export function searchPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase();
  const posts = getAllPosts();

  return posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      post.category.toLowerCase().includes(lowerQuery)
    );
  });
}

/**
 * Convert markdown to HTML
 * Note: Raw HTML (like iframes) needs to be preserved through the pipeline
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  // Extract iframes before processing to preserve them
  // Using [\s\S] instead of . with 's' flag for ES2017 compatibility
  const iframeRegex = /<iframe[^>]*>[\s\S]*?<\/iframe>/gi;
  const iframes: string[] = [];
  let iframeIndex = 0;
  
  const markdownWithPlaceholders = markdown.replace(iframeRegex, (match) => {
    iframes.push(match);
    return `\n\n<!-- IFRAME_PLACEHOLDER_${iframeIndex++} -->\n\n`;
  });

  // Extract section-header elements before processing to preserve them
  const sectionHeaderRegex = /<section-header[^>]*>[\s\S]*?<\/section-header>/gi;
  const sectionHeaders: string[] = [];
  let sectionHeaderIndex = 0;
  
  const markdownWithSectionHeaders = markdownWithPlaceholders.replace(sectionHeaderRegex, (match) => {
    sectionHeaders.push(match);
    return `\n\n<!-- SECTION_HEADER_PLACEHOLDER_${sectionHeaderIndex++} -->\n\n`;
  });

  // Convert paragraph-break shortcuts to HTML
  const markdownWithBreaks = markdownWithSectionHeaders.replace(
    /<!--\s*paragraph-break\s*-->/gi,
    '<div class="paragraph-break"></div>'
  );

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdownWithBreaks);

  let html = result.toString();
  
  // Restore iframes
  iframes.forEach((iframe, index) => {
    html = html.replace(`<!-- IFRAME_PLACEHOLDER_${index} -->`, iframe);
  });

  // Restore section-header elements
  sectionHeaders.forEach((sectionHeader, index) => {
    html = html.replace(`<!-- SECTION_HEADER_PLACEHOLDER_${index} -->`, sectionHeader);
  });

  return html;
}

