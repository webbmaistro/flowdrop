import { BlogPost } from '@/types/blog';
import { blogStyles } from './blog-styles';
import { BlogCard } from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPost[];
}

/**
 * Related posts section
 * Uses BlogCard component internally
 */
export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="my-16">
      <h2 className={`${blogStyles.heading.h2} mb-8 text-white`}>Related Articles</h2>
      <div className={blogStyles.layout.grid.three}>
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

