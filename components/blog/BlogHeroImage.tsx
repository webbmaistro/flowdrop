import Image from 'next/image';

interface BlogHeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

/**
 * Premium blog hero image component for above-the-fold section
 * Features elegant shadows, borders, and depth effects
 * Uses flexible aspect ratio that preserves image proportions better
 */
export function BlogHeroImage({ src, alt, priority = false }: BlogHeroImageProps) {
  return (
    <div className="relative w-full mb-12 -mx-4 sm:mx-0">
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent rounded-2xl blur-2xl -z-10" />
      
      {/* Image container with premium styling - flexible aspect ratio */}
      <div className="relative w-full rounded-xl overflow-hidden border border-neutral-800/50 bg-neutral-900/30 shadow-2xl shadow-purple-500/10">
        {/* Container with flexible aspect ratio (16:9 base, but allows variation) */}
        <div 
          className="relative w-full"
          style={{ 
            aspectRatio: 'auto',
            minHeight: '300px',
            maxHeight: '550px'
          }}
        >
          {/* Use a more flexible container that adapts */}
          <div className="relative w-full h-full min-h-[300px] max-h-[550px]">
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent z-10 pointer-events-none rounded-xl" />
            
            {/* Image - better aspect ratio preservation */}
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
              style={{
                objectPosition: 'center'
              }}
            />
            
            {/* Subtle inner border glow */}
            <div className="absolute inset-0 border border-purple-500/5 rounded-xl pointer-events-none" />
          </div>
        </div>
      </div>
      
      {/* Bottom shadow accent */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[95%] h-4 bg-gradient-to-b from-purple-500/5 to-transparent rounded-full blur-xl" />
    </div>
  );
}

