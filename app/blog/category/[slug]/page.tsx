import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllCategories, getAllPosts } from '@/lib/blog';
import { BlogLayout, BlogCard, Breadcrumbs, BlogCTA } from '@/components/blog';
import { blogStyles } from '@/components/blog/blog-styles';
import Link from 'next/link';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categories = getAllCategories();
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  const title = `${category.name} Articles - Flowdrop Blog`;
  const description = `Browse ${category.count} articles about ${category.name.toLowerCase()}. Learn tips, tutorials, and best practices for AI workflow automation.`;
  const url = `https://flowdrop.xyz/blog/category/${category.slug}`;

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
      canonical: `/blog/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categories = getAllCategories();
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    notFound();
  }

  const allPosts = getAllPosts();
  const categoryPosts = allPosts.filter(
    (post) => post.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <BlogLayout>
      {/* JSON-LD for CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `${category.name} Articles`,
            description: `Articles about ${category.name.toLowerCase()} on Flowdrop Blog`,
            url: `https://flowdrop.xyz/blog/category/${category.slug}`,
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
        <Breadcrumbs
          items={[{ label: category.name, href: `/blog/category/${category.slug}` }]}
        />

        {/* Header */}
        <div className="mb-8">
          <h1 className={`${blogStyles.heading.h1} bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent`}>{category.name}</h1>
          <p className={`${blogStyles.body.large} text-neutral-400`}>
            {categoryPosts.length} {categoryPosts.length === 1 ? 'article' : 'articles'} about {category.name.toLowerCase()}
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-8 flex items-center gap-3 flex-wrap">
          <Link href="/blog" className={`${blogStyles.badge.base} ${blogStyles.badge.tag}`}>
            All Posts
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog/category/${cat.slug}`}
              className={`${blogStyles.badge.base} ${
                cat.slug === slug ? blogStyles.badge.category : blogStyles.badge.tag
              }`}
            >
              {cat.name} ({cat.count})
            </Link>
          ))}
        </div>

        {/* Posts Grid */}
        <div className={blogStyles.layout.grid.three}>
          {categoryPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* CTA */}
        <BlogCTA />
      </div>
    </BlogLayout>
  );
}

