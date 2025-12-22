import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/styles';
import { Sparkles } from 'lucide-react';

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
  discount?: {
    originalPrice: string;
    discountAmount: string;
    discountDuration: string;
    totalSavings: string;
  };
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
  discount,
}: PlanCardProps) {
  const hasDiscount = !!discount;
  const isDiscounted = hasDiscount;

  return (
    <Card 
      variant={highlight ? 'glass' : 'default'}
      hover={true}
      className={cn(
        'h-full relative transition-all duration-500 ease-out overflow-visible',
        highlight && 'border-primary-main/30 bg-gradient-to-br from-primary-main/10 via-primary-main/5 to-purple-700/10 shadow-2xl shadow-primary-main/20',
        hovered && 'border-primary-main/50 bg-gradient-to-br from-primary-main/15 via-primary-main/8 to-purple-700/15 shadow-2xl shadow-primary-main/30',
        isDiscounted && 'border-orange-500/50 bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-yellow-500/10 shadow-2xl shadow-orange-500/20',
        isDiscounted && hovered && 'border-orange-500/70 bg-gradient-to-br from-orange-500/15 via-orange-500/8 to-yellow-500/15 shadow-2xl shadow-orange-500/30'
      )}
    >
      {/* Discount Badge */}
      {hasDiscount && (
        <div className="absolute -top-3 -right-3 z-20">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-1.5 font-bold text-sm">
            <Sparkles className="w-3 h-3" />
            <span>{discount.discountAmount} OFF</span>
            <Sparkles className="w-3 h-3" />
          </div>
        </div>
      )}

      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <IconComponent className={cn(
            'w-6 h-6',
            isDiscounted ? 'text-orange-500' : 'text-primary-main'
          )} />
          <CardTitle className={cn(
            'text-2xl',
            isDiscounted && 'text-orange-500'
          )}>{name}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
        {prevPlanName && (
          <p className="text-sm text-text-muted mt-1">Includes all features from {prevPlanName}</p>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="text-center">
          {hasDiscount ? (
            <div className="space-y-2">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl font-bold text-text-muted line-through">{discount.originalPrice}</span>
                <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{price}</span>
                <span className="text-text-muted ml-1">{period}</span>
              </div>
              <div className="mt-2">
                <div className="inline-block bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg px-3 py-1.5">
                  <span className="text-sm font-semibold text-yellow-400">
                    Save {discount.totalSavings} - {discount.discountDuration}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-baseline justify-center">
              <span className="text-4xl font-bold">{price}</span>
              <span className="text-text-muted ml-1">{period}</span>
            </div>
          )}
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
              hovered && 'btn-liquid ring-white-glow',
              isDiscounted && 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600'
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








