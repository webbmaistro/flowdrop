import React from 'react';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/styles';

export default function WorkflowEditorComparison() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className={cn(typography.h1, 'mb-6')}>Workflow Editor Comparison</h1>
      <p className={cn(typography.bodyLarge, 'text-text-secondary mb-8')}>
        Explore how Flowdrop stacks up against other workflow editors. (Competitor details and comparison coming soon!)
      </p>
      {/* TODO: Add competitor comparison table and copy here */}
    </div>
  );
} 