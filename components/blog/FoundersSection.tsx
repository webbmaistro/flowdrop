import Image from 'next/image';
import Link from 'next/link';
import { blogStyles } from './blog-styles';
import { founders, getAllFounders } from '@/lib/founders';

interface FoundersSectionProps {
  variant?: 'full' | 'compact';
  showBoth?: boolean;
}

/**
 * Founders section for blog posts
 * Displays founder profiles with LinkedIn links
 * Reusable across all blog posts
 */
export function FoundersSection({ variant = 'full', showBoth = true }: FoundersSectionProps) {
  const foundersList = getAllFounders();
  const webb = founders['webb-hammond'];
  const john = founders['john-pizzo'];

  if (variant === 'compact') {
    return (
      <div className={`${blogStyles.card.base} ${blogStyles.card.padding} my-12`}>
        <h3 className={`${blogStyles.heading.h3} mb-6 text-white`}>Meet the Founders</h3>
        <div className="space-y-4">
          <p className={`${blogStyles.body.base} text-neutral-300`}>
            <Link
              href={webb.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline transition-colors font-semibold"
            >
              {webb.name}
            </Link>
            {' - '}
            {webb.bio}
          </p>
          <p className={`${blogStyles.body.base} text-neutral-300`}>
            <Link
              href={john.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline transition-colors font-semibold"
            >
              {john.name}
            </Link>
            {' - '}
            {john.bio}
          </p>
        </div>
      </div>
    );
  }

  // Full variant - show detailed founder profiles
  return (
    <div className={`${blogStyles.card.base} ${blogStyles.card.padding} my-12`}>
      <h3 className={`${blogStyles.heading.h3} mb-6 text-white text-center`}>Meet the Team</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {foundersList.map((founder) => (
          <div key={founder.name} className="flex flex-col items-center text-center">
            <Image
              src={founder.image}
              alt={founder.name}
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <h4 className={`${blogStyles.heading.h4} text-white mb-1`}>
              <Link
                href={founder.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                {founder.name}
              </Link>
            </h4>
            <p className={`${blogStyles.body.small} text-purple-400 mb-3`}>{founder.role}</p>
            <p className={`${blogStyles.body.base} text-neutral-400`}>{founder.bio}</p>
            <Link
              href={founder.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

