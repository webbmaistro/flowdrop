import React from 'react';

interface NodeLayoutProps {
  children: React.ReactNode;
}

export default function NodeLayout({ children }: NodeLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {children}
    </div>
  );
}
