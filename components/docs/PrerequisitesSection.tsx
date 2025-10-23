import React from 'react';
import { LucideIcon, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';

interface PrerequisiteItem {
  icon: LucideIcon;
  title: string;
  description: string;
  requirements: string[];
}

interface PrerequisitesSectionProps {
  items: PrerequisiteItem[];
}

export default function PrerequisitesSection({ items }: PrerequisitesSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <Card key={index} className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <item.icon className="w-5 h-5 text-white" />
                {item.title}
              </CardTitle>
              <CardDescription>
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {item.requirements.map((requirement, reqIndex) => (
                  <div key={reqIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
