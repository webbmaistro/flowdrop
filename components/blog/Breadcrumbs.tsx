import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { blogStyles } from './blog-styles';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Navigation breadcrumbs for SEO and UX
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link href="/" className={blogStyles.link.muted}>
            Home
          </Link>
        </li>
        <ChevronRight size={14} className="text-neutral-600" />
        <li>
          <Link href="/blog" className={blogStyles.link.muted}>
            Blog
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <ChevronRight size={14} className="text-neutral-600" />
            {index === items.length - 1 ? (
              <span className="text-white font-medium">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className={blogStyles.link.muted}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

