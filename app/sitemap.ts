import { MetadataRoute } from 'next';
import { docsMetadata } from '@/lib/docs-metadata-config';
import { getAllPostSlugs } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flowdrop.xyz';
  
  // Main site pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Add all docs pages from metadata config
  const docRoutes: MetadataRoute.Sitemap = Object.values(docsMetadata).map((doc) => {
    // Determine priority based on path depth and type
    let priority = 0.7;
    if (doc.path === '/docs') {
      priority = 0.8;
    } else if (doc.path.includes('/getting-started')) {
      priority = 0.75;
    } else if (doc.type === 'article') {
      priority = 0.8; // Higher priority for article-type content
    } else if (doc.path.includes('/nodes/')) {
      priority = 0.5; // Node reference pages
    }

    return {
      url: `${baseUrl}${doc.path}`,
      lastModified: doc.dateModified ? new Date(doc.dateModified) : new Date(),
      changeFrequency: doc.type === 'article' ? 'monthly' : 'weekly',
      priority,
    } as const;
  });

  // Add all blog posts
  const blogSlugs = getAllPostSlugs();
  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...docRoutes, ...blogRoutes];
}
