import { Calendar } from 'lucide-react';
import { blogStyles } from './blog-styles';

interface PublishDateProps {
  date: string;
  updated?: string;
  showIcon?: boolean;
}

/**
 * Formatted date display with semantic time element
 */
export function PublishDate({ date, updated, showIcon = true }: PublishDateProps) {
  const publishDate = new Date(date);
  const updatedDate = updated ? new Date(updated) : null;
  
  const formatDate = (d: Date) => {
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={blogStyles.meta.base}>
      {showIcon && <Calendar size={16} />}
      <time dateTime={publishDate.toISOString()}>
        {formatDate(publishDate)}
      </time>
      {updatedDate && updatedDate.getTime() !== publishDate.getTime() && (
        <>
          <span className={blogStyles.meta.separator}>•</span>
          <span className="text-sm text-neutral-500">
            Updated {formatDate(updatedDate)}
          </span>
        </>
      )}
    </div>
  );
}

