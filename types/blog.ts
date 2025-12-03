export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorBio?: string;
  authorImage?: string;
  category: string;
  tags: string[];
  featured?: boolean;
  ogImage?: string;
  readingTime?: number;
  faqSchema?: FAQItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorBio?: string;
  authorImage?: string;
  category: string;
  tags: string[];
  featured?: boolean;
  ogImage?: string;
  readingTime?: number;
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

export interface CategoryInfo {
  slug: string;
  name: string;
  count: number;
}

export interface TagInfo {
  slug: string;
  name: string;
  count: number;
}


