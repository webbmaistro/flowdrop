/**
 * Blog utilities that can run on both client and server
 * No Node.js dependencies (fs, path, etc.)
 */

/**
 * Generate SEO-friendly slug from title
 * Examples:
 * - "How to Build AI Workflows" → "build-ai-workflows"
 * - "Top 10 Automation Tools!" → "top-automation-tools"
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove duplicate hyphens
    .split('-')
    .slice(0, 5) // Keep max 5 words for short URLs
    .join('-');
}

/**
 * Calculate reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, readingTime); // Minimum 1 minute
}

