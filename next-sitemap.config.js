/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://flowdrop.xyz',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Generate single sitemap instead of index
  exclude: [
    '/admin',
    '/api',
    '/auth',
    '/dashboard',
  ],
  additionalPaths: async (config) => {
    // Import blog functions
    const { getAllPostSlugs, getAllCategories, getAllTags } = require('./lib/blog');
    const fs = require('fs');
    const path = require('path');
    
    // Get blog data
    const postSlugs = getAllPostSlugs();
    const categories = getAllCategories();
    const tags = getAllTags();
    
    // Generate blog post paths
    const blogPosts = postSlugs.map((slug) => {
      const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
      const stats = fs.existsSync(filePath) ? fs.statSync(filePath) : null;
      const lastmod = stats ? stats.mtime.toISOString().split('T')[0] : '2025-11-25';
      
      return {
        loc: `/blog/${slug}`,
        lastmod,
        changefreq: 'weekly',
        priority: '0.6',
      };
    });
    
    // Generate category paths
    const categoryPaths = categories.map((category) => ({
      loc: `/blog/category/${category.slug}`,
      lastmod: '2025-11-25',
      changefreq: 'weekly',
      priority: '0.7',
    }));
    
    // Generate tag paths
    const tagPaths = tags.map((tag) => ({
      loc: `/blog/tag/${tag.slug}`,
      lastmod: '2025-11-25',
      changefreq: 'monthly',
      priority: '0.6',
    }));
    
    return [
      // Main Pages (most recent)
      {
        loc: '/',
        lastmod: '2025-09-30',
        changefreq: 'weekly',
        priority: '1.0',
      },
      {
        loc: '/pricing',
        lastmod: '2025-09-30',
        changefreq: 'monthly',
        priority: '0.8',
      },
      // Blog Pages
      {
        loc: '/blog',
        lastmod: '2025-11-25',
        changefreq: 'weekly',
        priority: '0.8',
      },
      ...blogPosts,
      ...categoryPaths,
      ...tagPaths,
      {
        loc: '/contact',
        lastmod: '2025-09-25',
        changefreq: 'monthly',
        priority: '0.6',
      },
      {
        loc: '/privacy',
        lastmod: '2025-09-05',
        changefreq: 'yearly',
        priority: '0.3',
      },
      {
        loc: '/terms',
        lastmod: '2025-09-05',
        changefreq: 'yearly',
        priority: '0.3',
      },
      
      // Documentation Pages
      {
        loc: '/docs',
        lastmod: '2025-09-25',
        changefreq: 'weekly',
        priority: '0.8',
      },
      {
        loc: '/docs/workflow-builder-basics',
        lastmod: '2025-09-25',
        changefreq: 'weekly',
        priority: '0.7',
      },
      {
        loc: '/docs/ai-blocks-nodes',
        lastmod: '2025-09-12',
        changefreq: 'weekly',
        priority: '0.7',
      },
      {
        loc: '/docs/cli-api-reference',
        lastmod: '2025-09-12',
        changefreq: 'weekly',
        priority: '0.7',
      },
      {
        loc: '/docs/authentication-pricing',
        lastmod: '2025-09-25',
        changefreq: 'monthly',
        priority: '0.6',
      },
      {
        loc: '/docs/changelog',
        lastmod: '2025-09-25',
        changefreq: 'weekly',
        priority: '0.5',
      },
      {
        loc: '/docs/roadmap',
        lastmod: '2025-09-12',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/workflow-editor-comparison',
        lastmod: '2025-09-12',
        changefreq: 'monthly',
        priority: '0.6',
      },
      
      // Node Documentation Pages
      {
        loc: '/docs/nodes',
        lastmod: '2025-09-25',
        changefreq: 'weekly',
        priority: '0.6',
      },
      {
        loc: '/docs/nodes/ai-switch',
        lastmod: '2025-09-12',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/discord-read-message',
        lastmod: '2025-09-12',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/discord-send-message',
        lastmod: '2025-09-12',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/fetch-webpage',
        lastmod: '2025-09-05',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/for-each',
        lastmod: '2025-09-05',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/gmail-read-emails',
        lastmod: '2025-09-12',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/gmail-write-labels',
        lastmod: '2025-09-05',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/google-docs-read',
        lastmod: '2025-09-12',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/google-sheets-read',
        lastmod: '2025-09-12',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/google-sheets-write',
        lastmod: '2025-09-05',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/http-request',
        lastmod: '2025-09-25',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/if-else',
        lastmod: '2025-09-05',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/image-generation',
        lastmod: '2025-09-25',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/llm-prompt',
        lastmod: '2025-09-12',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/randomize',
        lastmod: '2025-09-05',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/schedule',
        lastmod: '2025-09-12',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/slack-read-message',
        lastmod: '2025-09-05',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/trigger',
        lastmod: '2025-09-25',
        changefreq: 'monthly',
        priority: '0.5',
      },
      {
        loc: '/docs/nodes/webhook',
        lastmod: '2025-09-12',
        changefreq: 'monthly',
        priority: '0.5',
      },
    ];
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/auth', '/dashboard'],
      },
    ],
  },
};
