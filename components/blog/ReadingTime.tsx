import { Clock } from 'lucide-react';
import { blogStyles } from './blog-styles';

interface ReadingTimeProps {
  minutes: number;
}

/**
 * Reading time badge
 */
export function ReadingTime({ minutes }: ReadingTimeProps) {
  return (
    <span className={blogStyles.meta.base}>
      <Clock size={16} />
      <span>{minutes} min read</span>
    </span>
  );
}

