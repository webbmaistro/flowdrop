import Link from 'next/link';
import { blogStyles } from './blog-styles';
import { generateSlug } from '@/lib/blog-utils';

interface CategoryBadgeProps {
  category: string;
  clickable?: boolean;
}

interface TagBadgeProps {
  tag: string;
  clickable?: boolean;
}

/**
 * Category badge component
 */
export function CategoryBadge({ category, clickable = true }: CategoryBadgeProps) {
  const slug = generateSlug(category);
  const className = `${blogStyles.badge.base} ${blogStyles.badge.category}`;

  if (!clickable) {
    return <span className={className}>{category}</span>;
  }

  return (
    <Link href={`/blog/category/${slug}`} className={className}>
      {category}
    </Link>
  );
}

/**
 * Tag badge component
 */
export function TagBadge({ tag, clickable = true }: TagBadgeProps) {
  const slug = generateSlug(tag);
  const className = `${blogStyles.badge.base} ${blogStyles.badge.tag}`;

  if (!clickable) {
    return <span className={className}>{tag}</span>;
  }

  return (
    <Link href={`/blog/tag/${slug}`} className={className}>
      {tag}
    </Link>
  );
}

