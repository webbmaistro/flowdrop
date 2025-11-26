import Image from 'next/image';
import { blogStyles } from './blog-styles';

interface AuthorBioProps {
  author: string;
  authorBio?: string;
  authorImage?: string;
}

/**
 * Author bio section
 * Consistent across all blog posts
 */
export function AuthorBio({ author, authorBio, authorImage }: AuthorBioProps) {
  if (!authorBio && !authorImage) {
    return null;
  }

  return (
    <div className={`${blogStyles.card.base} ${blogStyles.card.padding} my-12`}>
      <div className="flex gap-4 items-start">
        {authorImage && (
          <Image
            src={authorImage}
            alt={author}
            width={64}
            height={64}
            className="rounded-full flex-shrink-0"
          />
        )}
        <div>
          <h3 className={`${blogStyles.heading.h4} mb-2 text-white`}>About {author}</h3>
          {authorBio && (
            <p className={`${blogStyles.body.base} text-neutral-400`}>
              {authorBio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

