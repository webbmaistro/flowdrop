import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import CodeBlock from '@/components/ui/CodeBlock';

export interface TechnicalDetail {
  title: string;
  description: string;
  items?: Array<{
    title: string;
    description: string;
  }>;
  code?: {
    content: string;
    language: string;
    caption?: string;
  };
}

interface TechnicalDetailsSectionProps {
  details: TechnicalDetail[];
}

export default function TechnicalDetailsSection({ details }: TechnicalDetailsSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
      
      <div className="space-y-6">
        {details.map((detail, index) => (
          <Card key={index} className="border-neutral-700">
            <CardHeader>
              <CardTitle>{detail.title}</CardTitle>
              <CardDescription>{detail.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {detail.items && (
                <div className="space-y-4">
                  {detail.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-neutral-400 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
              {detail.code && (
                <>
                  <CodeBlock code={detail.code.content} lang={detail.code.language} />
                  {detail.code.caption && (
                    <p className="text-neutral-400 mt-3 text-sm">{detail.code.caption}</p>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

