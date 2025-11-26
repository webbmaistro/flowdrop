import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllTags, getAllPosts } from '@/lib/blog';
import { BlogLayout, BlogCard, Breadcrumbs, BlogCTA } from '@/components/blog';
import { blogStyles } from '@/components/blog/blog-styles';
import Link from 'next/link';

interface TagPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    slug: tag.slug,
  }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tags = getAllTags();
  const tag = tags.find((t) => t.slug === slug);

  if (!tag) {
    return {
      title: 'Tag Not Found',
    };
  }

  const title = `${tag.name} Articles - Flowdrop Blog`;
  const description = `Browse ${tag.count} articles tagged with ${tag.name.toLowerCase()}. Discover tips, tutorials, and guides for AI workflow automation.`;
  const url = `https://flowdrop.xyz/blog/tag/${tag.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `/blog/tag/${tag.slug}`,
    },
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const tags = getAllTags();
  const tag = tags.find((t) => t.slug === slug);

  if (!tag) {
    notFound();
  }

  const allPosts = getAllPosts();
  const tagPosts = allPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.name.toLowerCase())
  );

  // Get popular tags for navigation
  const popularTags = tags.slice(0, 10);

  return (
    <BlogLayout>
      {/* JSON-LD for CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `Articles Tagged: ${tag.name}`,
            description: `Articles tagged with ${tag.name.toLowerCase()} on Flowdrop Blog`,
            url: `https://flowdrop.xyz/blog/tag/${tag.slug}`,
            isPartOf: {
              '@type': 'Blog',
              name: 'Flowdrop Blog',
              url: 'https://flowdrop.xyz/blog',
            },
          }),
        }}
      />

      <div className={blogStyles.content.wrapper}>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: `Tag: ${tag.name}`, href: `/blog/tag/${tag.slug}` }]} />

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`${blogStyles.badge.base} ${blogStyles.badge.tag} text-lg`}>
              {tag.name}
            </span>
          </div>
          <h1 className={`${blogStyles.heading.h1} bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent`}>Articles Tagged: {tag.name}</h1>
          <p className={`${blogStyles.body.large} text-neutral-400`}>
            {tagPosts.length} {tagPosts.length === 1 ? 'article' : 'articles'} with this tag
          </p>
        </div>

        {/* Tag Navigation */}
        <div className="mb-8">
          <h2 className={`${blogStyles.body.base} font-medium mb-4 text-white`}>Popular Tags</h2>
          <div className="flex items-center gap-3 flex-wrap">
            <Link href="/blog" className={`${blogStyles.badge.base} ${blogStyles.badge.tag}`}>
              All Posts
            </Link>
            {popularTags.map((t) => (
              <Link
                key={t.slug}
                href={`/blog/tag/${t.slug}`}
                className={`${blogStyles.badge.base} ${
                  t.slug === slug ? blogStyles.badge.category : blogStyles.badge.tag
                }`}
              >
                {t.name} ({t.count})
              </Link>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className={blogStyles.layout.grid.three}>
          {tagPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* CTA */}
        <BlogCTA />
      </div>
    </BlogLayout>
  );
}

