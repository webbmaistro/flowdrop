import { Metadata } from 'next';
import { getAllPostsMetadata, getFeaturedPosts, getAllCategories } from '@/lib/blog';
import { BlogLayout, BlogCard, BlogSearch, BlogCTA } from '@/components/blog';
import { blogStyles } from '@/components/blog/blog-styles';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - AI Workflow Automation Tips & Tutorials | Flowdrop',
  description: 'Learn how to build AI workflows, automate business processes, and boost productivity. Tutorials, guides, and tips for non-coders.',
  openGraph: {
    title: 'Flowdrop Blog - AI Workflow Automation',
    description: 'Tutorials, guides, and tips for building AI workflows without code.',
    type: 'website',
    url: 'https://flowdrop.xyz/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flowdrop Blog - AI Workflow Automation',
    description: 'Tutorials, guides, and tips for building AI workflows without code.',
  },
  alternates: {
    canonical: '/blog',
    types: {
      'application/rss+xml': 'https://flowdrop.xyz/blog/rss.xml',
    },
  },
};

export default function BlogPage() {
  const allPosts = getAllPostsMetadata();
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();
  
  // Get featured post slugs to exclude from all posts
  const featuredSlugs = new Set(featuredPosts.map((post) => post.slug));
  const nonFeaturedPosts = allPosts.filter((post) => !featuredSlugs.has(post.slug));

  return (
    <BlogLayout>
      {/* JSON-LD for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Flowdrop Blog',
            description: 'AI workflow automation tips, tutorials, and guides for non-coders',
            url: 'https://flowdrop.xyz/blog',
            publisher: {
              '@type': 'Organization',
              name: 'Flowdrop',
              logo: {
                '@type': 'ImageObject',
                url: 'https://flowdrop.xyz/website-preview.png',
              },
            },
          }),
        }}
      />

      <div className={blogStyles.content.wrapper}>
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className={`${blogStyles.heading.h1} bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent`}>Flowdrop Blog</h1>
          <p className={`${blogStyles.body.large} text-neutral-400 max-w-2xl mx-auto`}>
            Learn how to build AI workflows, automate business processes, and boost productivity.
            Tutorials, guides, and tips for non-coders.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <BlogSearch allPosts={allPosts} />
        </div>

        {/* Categories */}
        <div className="mb-8 flex items-center gap-3 flex-wrap justify-center">
          <Link
            href="/blog"
            className={`${blogStyles.badge.base} ${blogStyles.badge.category}`}
          >
            All Posts
          </Link>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/category/${category.slug}`}
              className={`${blogStyles.badge.base} ${blogStyles.badge.tag}`}
            >
              {category.name} ({category.count})
            </Link>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className={`${blogStyles.heading.h2} mb-6 bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent`}>Featured Articles</h2>
            <div className={blogStyles.layout.grid.three}>
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className={`${blogStyles.heading.h2} mb-6 bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent`}>
            All Articles
            <span className="text-neutral-400 text-xl ml-3">
              ({nonFeaturedPosts.length})
            </span>
          </h2>
          <div className={blogStyles.layout.grid.three}>
            {nonFeaturedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <BlogCTA />
      </div>
    </BlogLayout>
  );
}

