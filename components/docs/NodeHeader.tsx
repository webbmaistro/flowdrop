import React from 'react';
import { LucideIcon } from 'lucide-react';
import NodeIcon from './NodeIcon';

interface NodeHeaderProps {
  icon: LucideIcon;
  title: string;
  description: string;
  nodeType: string;
  category: string;
  iconName: string;
  iconColor?: 'primary' | 'purple' | 'green' | 'red' | 'orange' | 'pink' | 'indigo' | 'blue' | 'yellow';
}

export default function NodeHeader({
  icon: Icon,
  title,
  description,
  nodeType,
  category,
  iconName,
  iconColor = 'primary'
}: NodeHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <NodeIcon icon={Icon} color={iconColor} />
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-neutral-400">{description}</p>
        </div>
      </div>
      
      <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold text-neutral-200 mb-2">Node Type</h3>
            <p className="text-neutral-400">{nodeType}</p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-200 mb-2">Category</h3>
            <p className="text-neutral-400">{category}</p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-200 mb-2">Icon</h3>
            <p className="text-neutral-400">{iconName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
