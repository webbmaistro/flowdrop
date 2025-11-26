import { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
}

/**
 * Master wrapper for all blog pages
 * Ensures consistent structure and styling
 */
export function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen">
      <main className="px-4 pt-20 pb-8 md:px-8 md:pt-24 md:pb-12">
        {children}
      </main>
    </div>
  );
}

