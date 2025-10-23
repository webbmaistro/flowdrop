import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import CodeBlock from '@/components/ui/CodeBlock';

interface ExampleCardProps {
  title: string;
  description?: string;
  code?: string;
  codeLanguage?: string;
  children?: React.ReactNode;
}

export default function ExampleCard({ 
  title, 
  description, 
  code, 
  codeLanguage = 'json',
  children 
}: ExampleCardProps) {
  return (
    <Card className="border-neutral-700">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {children ? (
          children
        ) : code ? (
          <>
            {code && <CodeBlock code={code} lang={codeLanguage} />}
            {description && (
              <p className="text-neutral-400 mt-3 text-sm">{description}</p>
            )}
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}

