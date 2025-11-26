import { ReactNode } from 'react';
import { Info, AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';
import { blogStyles } from './blog-styles';

type SnippetType = 'info' | 'warning' | 'success' | 'tip';

interface FeaturedSnippetProps {
  type?: SnippetType;
  title?: string;
  children: ReactNode;
}

/**
 * Featured snippet callout boxes
 * Optimized for Google featured snippets
 */
export function FeaturedSnippet({ type = 'info', title, children }: FeaturedSnippetProps) {
  const styles = {
    info: {
      bg: 'bg-blue-950/20 border-blue-900',
      icon: <Info size={20} className="text-blue-400" />,
      title: 'text-blue-100',
    },
    warning: {
      bg: 'bg-amber-950/20 border-amber-900',
      icon: <AlertCircle size={20} className="text-amber-400" />,
      title: 'text-amber-100',
    },
    success: {
      bg: 'bg-green-950/20 border-green-900',
      icon: <CheckCircle size={20} className="text-green-400" />,
      title: 'text-green-100',
    },
    tip: {
      bg: 'bg-purple-950/20 border-purple-900',
      icon: <Lightbulb size={20} className="text-purple-400" />,
      title: 'text-purple-100',
    },
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} border rounded-lg p-6 my-6`}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-1">{style.icon}</div>
        <div className="flex-1">
          {title && (
            <h4 className={`${blogStyles.heading.h4} ${style.title} mb-2`}>
              {title}
            </h4>
          )}
          <div className={`${blogStyles.body.base} text-neutral-200`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

