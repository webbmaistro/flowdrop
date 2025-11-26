'use client';

import { Share2, Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react';
import { blogStyles } from './blog-styles';
import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

/**
 * Social sharing buttons
 */
export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={`${blogStyles.card.base} ${blogStyles.card.padding} my-8`}>
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Share2 size={20} className="text-neutral-400" />
          <span className={`${blogStyles.body.base} text-white`}>Share this article:</span>
        </div>
        
        <div className="flex gap-2">
          <a
            href={shareUrls.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={`${blogStyles.button.secondary} flex items-center gap-2`}
            aria-label="Share on Twitter"
          >
            <Twitter size={18} />
            <span className="hidden sm:inline">Twitter</span>
          </a>
          
          <a
            href={shareUrls.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${blogStyles.button.secondary} flex items-center gap-2`}
            aria-label="Share on LinkedIn"
          >
            <Linkedin size={18} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          
          <a
            href={shareUrls.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`${blogStyles.button.secondary} flex items-center gap-2`}
            aria-label="Share on Facebook"
          >
            <Facebook size={18} />
            <span className="hidden sm:inline">Facebook</span>
          </a>
          
          <button
            onClick={copyToClipboard}
            className={`${blogStyles.button.secondary} flex items-center gap-2`}
            aria-label="Copy link"
          >
            <LinkIcon size={18} />
            <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

