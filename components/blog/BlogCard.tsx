import Link from 'next/link';
import Image from 'next/image';
import { BlogPostMetadata } from '@/types/blog';
import { blogStyles } from './blog-styles';
import { CategoryBadge } from './CategoryBadge';
import { ReadingTime } from './ReadingTime';
import { PublishDate } from './PublishDate';

interface BlogCardProps {
  post: BlogPostMetadata;
}

/**
 * Blog post preview card
 * Used in listing, search results, and related posts
 */
export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className={`${blogStyles.card.base} ${blogStyles.card.hover} group transition-all duration-200 hover:ring-2 hover:ring-purple-500/30`}>
      <Link href={`/blog/${post.slug}`} className="block">
        {post.ogImage && (
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={post.ogImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        
        <div className={blogStyles.card.padding}>
          {/* Category Badge */}
          <div className="mb-3">
            <CategoryBadge category={post.category} clickable={false} />
            {post.featured && (
              <span className={`${blogStyles.badge.base} ${blogStyles.badge.featured} ml-2`}>
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className={`${blogStyles.heading.h3} mb-2 text-white group-hover:text-purple-400 transition-colors duration-200`}>
            {post.title}
          </h3>

          {/* Description */}
          <p className={`${blogStyles.body.base} text-neutral-400 mb-4 line-clamp-2`}>
            {post.description}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-4 flex-wrap">
            <PublishDate date={post.publishedAt} showIcon={false} />
            {post.readingTime && (
              <>
                <span className={blogStyles.meta.separator}>•</span>
                <ReadingTime minutes={post.readingTime} />
              </>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}

