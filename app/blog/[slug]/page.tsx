import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
  markdownToHtml,
  extractTableOfContents,
} from '@/lib/blog';
import {
  BlogLayout,
  BlogHeader,
  BlogContent,
  TableOfContents,
  AuthorBio,
  RelatedPosts,
  ShareButtons,
  FAQSection,
  Breadcrumbs,
  BlogCTA,
} from '@/components/blog';
import { blogStyles } from '@/components/blog/blog-styles';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const url = `https://flowdrop.xyz/blog/${post.slug}`;
  const ogImage = post.ogImage || 'https://flowdrop.xyz/website-preview.png';

  return {
    title: `${post.title} | Flowdrop Blog`,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const htmlContent = await markdownToHtml(post.content);
  const toc = extractTableOfContents(post.content);
  const relatedPosts = getRelatedPosts(post, 3);
  const url = `https://flowdrop.xyz/blog/${post.slug}`;

  // Generate JSON-LD structured data
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.ogImage || 'https://flowdrop.xyz/website-preview.png',
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
      ...(post.authorImage && { image: post.authorImage }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Flowdrop',
      logo: {
        '@type': 'ImageObject',
        url: 'https://flowdrop.xyz/website-preview.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://flowdrop.xyz',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://flowdrop.xyz/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.category,
        item: `https://flowdrop.xyz/blog/category/${post.category.toLowerCase()}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: url,
      },
    ],
  };

  const faqSchema = post.faqSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqSchema.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <BlogLayout>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className={blogStyles.content.wrapper}>
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: post.category, href: `/blog/category/${post.category.toLowerCase()}` },
            { label: post.title, href: `/blog/${post.slug}` },
          ]}
        />

        {/* Article */}
        <article>
          {/* Header */}
          <BlogHeader
            title={post.title}
            description={post.description}
            publishedAt={post.publishedAt}
            updatedAt={post.updatedAt}
            author={post.author}
            authorImage={post.authorImage}
            category={post.category}
            tags={post.tags}
            readingTime={post.readingTime}
            featured={post.featured}
          />

          {/* Content with TOC */}
          <div className="lg:grid lg:grid-cols-[1fr_250px] lg:gap-12">
            <div>
              <BlogContent content={htmlContent} />

              {/* FAQ Section */}
              {post.faqSchema && post.faqSchema.length > 0 && (
                <FAQSection faqs={post.faqSchema} />
              )}

              {/* Share Buttons */}
              <ShareButtons title={post.title} url={url} />

              {/* Author Bio */}
              <AuthorBio
                author={post.author}
                authorBio={post.authorBio}
                authorImage={post.authorImage}
              />
            </div>

            {/* Table of Contents */}
            {toc.length > 0 && (
              <aside>
                <TableOfContents items={toc} />
              </aside>
            )}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}

        {/* CTA */}
        <BlogCTA 
          title="Ready to Put This Into Practice?"
          description="Start building AI workflows today. No coding required."
        />
      </div>
    </BlogLayout>
  );
}

