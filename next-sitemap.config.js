/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://flowdrop.xyz',
  generateRobotsTxt: true,
  exclude: [
    '/admin',
    '/api',
    '/auth',
    '/dashboard',
  ],
  additionalPaths: async (config) => {
    const currentDate = new Date().toISOString().split('T')[0];
    
    return [
      // Main Pages
      {
        loc: '/',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 1.0,
      },
      {
        loc: '/pricing',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.8,
      },
      {
        loc: '/contact',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.6,
      },
      {
        loc: '/privacy',
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: 0.3,
      },
      {
        loc: '/terms',
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: 0.3,
      },
      
      // Documentation Pages
      {
        loc: '/docs',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        loc: '/docs/workflow-builder-basics',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.7,
      },
      {
        loc: '/docs/ai-blocks-nodes',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.7,
      },
      {
        loc: '/docs/cli-api-reference',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.7,
      },
      {
        loc: '/docs/authentication-pricing',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.6,
      },
      {
        loc: '/docs/changelog',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.5,
      },
      {
        loc: '/docs/roadmap',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/workflow-editor-comparison',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.6,
      },
      
      // Node Documentation Pages
      {
        loc: '/docs/nodes',
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.6,
      },
      {
        loc: '/docs/nodes/ai-switch',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/discord-read-message',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/discord-send-message',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/fetch-webpage',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/for-each',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/gmail-read-emails',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/gmail-write-labels',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/google-docs-read',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/google-sheets-read',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/google-sheets-write',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/http-request',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/if-else',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/image-generation',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/llm-prompt',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/randomize',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/schedule',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/slack-read-message',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/trigger',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
      },
      {
        loc: '/docs/nodes/webhook',
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.5,
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
    additionalSitemaps: [
      'https://flowdrop.xyz/sitemap.xml',
    ],
  },
};
