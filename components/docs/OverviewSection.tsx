import React from 'react';
import { Zap } from 'lucide-react';

interface OverviewSectionProps {
  description: string | React.ReactNode;
  keyFeatures: string[];
}

export default function OverviewSection({ description, keyFeatures }: OverviewSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <div className="text-neutral-300 mb-6">
        {typeof description === 'string' ? (
          <p dangerouslySetInnerHTML={{ __html: description }} />
        ) : (
          description
        )}
      </div>
      
      <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-500" />
          Key Features
        </h3>
        <ul className="text-neutral-300 space-y-2">
          {keyFeatures.map((feature, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: `• ${feature}` }} />
          ))}
        </ul>
      </div>
    </section>
  );
}

