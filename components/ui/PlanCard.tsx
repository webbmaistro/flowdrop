import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/styles';

type IconProps = { className?: string };

type PlanCardProps = {
  name: string;
  description: string;
  price: string;
  period: string;
  IconComponent: React.ComponentType<IconProps>;
  features: string[];
  ctaLabel: string;
  onCta: () => void;
  highlight?: boolean;
  hovered?: boolean;
  loading?: boolean;
  disabled?: boolean;
  prevPlanName?: string;
};

export default function PlanCard({
  name,
  description,
  price,
  period,
  IconComponent,
  features,
  ctaLabel,
  onCta,
  highlight = false,
  hovered = false,
  loading = false,
  disabled = false,
  prevPlanName,
}: PlanCardProps) {
  return (
    <Card 
      variant={highlight ? 'glass' : 'default'}
      hover={true}
      className={cn(
        'h-full relative transition-all duration-500 ease-out overflow-visible',
        highlight && 'border-primary-main/30 bg-gradient-to-br from-primary-main/10 via-primary-main/5 to-purple-700/10 shadow-2xl shadow-primary-main/20',
        hovered && 'border-primary-main/50 bg-gradient-to-br from-primary-main/15 via-primary-main/8 to-purple-700/15 shadow-2xl shadow-primary-main/30'
      )}
    >
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <IconComponent className="w-6 h-6 text-primary-main" />
          <CardTitle className="text-2xl">{name}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
        {prevPlanName && (
          <p className="text-sm text-text-muted mt-1">Includes all features from {prevPlanName}</p>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold">{price}</span>
            <span className="text-text-muted ml-1">{period}</span>
          </div>
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className={typography.bodySmall}>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <Button
            variant="primary"
            size="lg"
            className={cn(
              'w-full text-white font-semibold btn-hover-ready rounded-full',
              hovered && 'btn-liquid ring-white-glow'
            )}
            onClick={onCta}
            loading={loading}
            disabled={disabled}
          >
            {loading ? 'Redirecting...' : ctaLabel}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}







