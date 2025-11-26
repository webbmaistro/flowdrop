import Image from 'next/image';
import { blogStyles } from './blog-styles';
import { CategoryBadge, TagBadge } from './CategoryBadge';
import { ReadingTime } from './ReadingTime';
import { PublishDate } from './PublishDate';

interface BlogHeaderProps {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorImage?: string;
  category: string;
  tags: string[];
  readingTime?: number;
  featured?: boolean;
}

/**
 * Blog post header with all metadata
 */
export function BlogHeader({
  title,
  description,
  publishedAt,
  updatedAt,
  author,
  authorImage,
  category,
  tags,
  readingTime,
  featured,
}: BlogHeaderProps) {
  return (
    <header className="mb-12">
      {/* Category & Featured Badge */}
      <div className="flex items-center gap-2 mb-4">
        <CategoryBadge category={category} />
        {featured && (
          <span className={`${blogStyles.badge.base} ${blogStyles.badge.featured}`}>
            Featured
          </span>
        )}
      </div>

      {/* Title */}
      <h1 className={`${blogStyles.heading.h1} bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent`}>{title}</h1>

      {/* Description */}
      <p className={`${blogStyles.body.large} text-neutral-400 mb-6`}>
        {description}
      </p>

      {/* Author & Metadata */}
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        {authorImage && (
          <Image
            src={authorImage}
            alt={author}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className={`${blogStyles.body.base} font-medium`}>{author}</span>
          <div className="flex items-center gap-4 flex-wrap">
            <PublishDate date={publishedAt} updated={updatedAt} showIcon={true} />
            {readingTime && (
              <>
                <span className={blogStyles.meta.separator}>•</span>
                <ReadingTime minutes={readingTime} />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          {tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      )}
    </header>
  );
}

