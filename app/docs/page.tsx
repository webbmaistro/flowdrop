"use client"

import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DocsHome() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the Flowdrop App Tour by default
    router.replace('/docs/getting-started');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-main mx-auto mb-4"></div>
        <p className="text-neutral-400">Redirecting to Getting Started...</p>
      </div>
    </div>
  );
}