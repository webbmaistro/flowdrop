"use client"

import React from 'react';
import { FileCode } from 'lucide-react';
import ExpressionCard from '@/components/docs/ExpressionCard';
import { stringUtilities } from '@/data/expressions/stringUtilities';

export default function StringUtilitiesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-primary-main/20 rounded-xl">
            <FileCode className="w-8 h-8 text-primary-main" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">String Utilities</h1>
            <p className="text-neutral-400 mt-1">11 functions for string manipulation and transformation</p>
          </div>
        </div>
      </div>

      {/* String Utilities */}
      <div className="space-y-4">
        {stringUtilities.map((expression, index) => (
          <ExpressionCard key={index} {...expression} />
        ))}
      </div>
    </div>
  );
}
