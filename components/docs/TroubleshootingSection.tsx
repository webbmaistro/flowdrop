import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';

interface TroubleshootingIssue {
  title: string;
  symptoms: string;
  solution: string;
}

interface TroubleshootingSectionProps {
  issues: TroubleshootingIssue[];
}

export default function TroubleshootingSection({ issues }: TroubleshootingSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
      
      <div className="space-y-4">
        <Card className="border-neutral-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Common Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {issues.map((issue, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-2">{issue.title}</h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    <strong>Symptoms:</strong> {issue.symptoms}
                  </p>
                  <p className="text-neutral-400 text-sm">
                    <strong>Solution:</strong> {issue.solution}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

