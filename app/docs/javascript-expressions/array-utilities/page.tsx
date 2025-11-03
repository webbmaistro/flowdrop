"use client"

import React from 'react';
import { Zap } from 'lucide-react';
import ExpressionCard from '@/components/docs/ExpressionCard';
import { arrayUtilities } from '@/data/expressions/arrayUtilities';

export default function ArrayUtilitiesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-primary-main/20 rounded-xl">
            <Zap className="w-8 h-8 text-primary-main" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Array Utilities</h1>
            <p className="text-neutral-400 mt-1">7 functions for array operations and transformations</p>
          </div>
        </div>
      </div>

      {/* Array Utilities */}
      <div className="space-y-4">
        {arrayUtilities.map((expression, index) => (
          <ExpressionCard key={index} {...expression} />
        ))}
      </div>
    </div>
  );
}
