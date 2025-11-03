"use client"

import React from 'react';
import { Code } from 'lucide-react';
import ExpressionCard from '@/components/docs/ExpressionCard';
import { objectUtilities } from '@/data/expressions/objectUtilities';

export default function ObjectUtilitiesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-primary-main/20 rounded-xl">
            <Code className="w-8 h-8 text-primary-main" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Object Utilities</h1>
            <p className="text-neutral-400 mt-1">4 functions for object manipulation and inspection</p>
          </div>
        </div>
      </div>

      {/* Object Utilities */}
      <div className="space-y-4">
        {objectUtilities.map((expression, index) => (
          <ExpressionCard key={index} {...expression} />
        ))}
      </div>
    </div>
  );
}
