import { Metadata } from 'next';

interface DocsMetadataConfig {
  title: string;
  description: string;
  path: string; // relative path like '/docs/getting-started'
  keywords?: readonly string[];
  image?: string;
  type?: 'article' | 'website';
  datePublished?: string;
  dateModified?: string;
  wordCount?: number;
  timeRequired?: string;
}

/**
 * Generates consistent metadata for documentation pages
 * Includes canonical URLs, Open Graph, Twitter cards, and structured data
 */
export function generateDocsMetadata(config: DocsMetadataConfig): Metadata {
  const {
    title,
    description,
    path,
    keywords = [],
    image = 'https://flowdrop.xyz/website-preview.png',
    type = 'website',
  } = config;

  const url = `https://flowdrop.xyz${path}`;
  const fullTitle = title.includes('Flowdrop') ? title : `${title} | Flowdrop Docs`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    openGraph: {
      title,
      description,
      type,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: 'Flowdrop',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      site: '@flowdrop',
      creator: '@flowdrop',
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generates JSON-LD structured data for article-type docs
 */
export function generateArticleSchema(config: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
  wordCount?: number;
  timeRequired?: string; // ISO 8601 duration format like "PT8M"
}) {
  const {
    title,
    description,
    path,
    datePublished,
    dateModified,
    image = 'https://flowdrop.xyz/website-preview.png',
    keywords = [],
    wordCount,
    timeRequired,
  } = config;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    author: {
      '@type': 'Organization',
      name: 'Flowdrop',
      url: 'https://flowdrop.xyz',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Flowdrop',
      logo: {
        '@type': 'ImageObject',
        url: image,
      },
    },
    datePublished: datePublished || new Date().toISOString().split('T')[0],
    dateModified: dateModified || new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://flowdrop.xyz${path}`,
    },
    keywords: keywords.length > 0 ? keywords : undefined,
    articleSection: 'Documentation',
    inLanguage: 'en-US',
    wordCount,
    timeRequired,
  };
}

/**
 * Generates JSON-LD structured data for HowTo/Tutorial docs
 */
export function generateHowToSchema(config: {
  title: string;
  description: string;
  path: string;
  image?: string;
  estimatedCost?: string;
  totalTime?: string; // ISO 8601 duration format like "PT30M"
  steps?: Array<{
    name: string;
    text: string;
    url?: string;
    image?: string;
  }>;
}) {
  const {
    title,
    description,
    path,
    image = 'https://flowdrop.xyz/website-preview.png',
    estimatedCost,
    totalTime,
    steps = [],
  } = config;

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    image,
    estimatedCost: estimatedCost || {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
    totalTime,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url || `https://flowdrop.xyz${path}#step-${index + 1}`,
      image: step.image,
    })),
  };
}

/**
 * Generates breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://flowdrop.xyz${item.path}`,
    })),
  };
}

