import React from 'react';
import { CheckCircle, AlertTriangle, Shield } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import Callout from '@/components/ui/Callout';

interface BestPracticesSectionProps {
  dos: string[];
  donts: string[];
  securityItems?: string[];
  proTip?: string;
}

export default function BestPracticesSection({ 
  dos, 
  donts, 
  securityItems,
  proTip 
}: BestPracticesSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
      
      <div className={`grid grid-cols-1 ${securityItems ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
        <Card className="border-neutral-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Do&apos;s
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-neutral-300">
              {dos.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-neutral-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              Don&apos;ts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-neutral-300">
              {donts.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {securityItems && (
          <Card className="border-neutral-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-500" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-neutral-300">
                {securityItems.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>

      {proTip && (
        <div className="mt-6">
          <Callout emoji="💡" color="border-blue-500">
            <strong>Pro Tip:</strong> {proTip}
          </Callout>
        </div>
      )}
    </section>
  );
}

