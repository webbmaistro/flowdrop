import React from 'react';
import { RelatedResourceCard } from '@/components/ui';

export interface RelatedResource {
  href: string;
  title: string;
  description: string;
}

interface RelatedResourcesSectionProps {
  resources: RelatedResource[];
}

export default function RelatedResourcesSection({ resources }: RelatedResourcesSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {resources.map((resource, index) => (
          <RelatedResourceCard
            key={index}
            href={resource.href}
            title={resource.title}
            description={resource.description}
          />
        ))}
      </div>
    </section>
  );
}

