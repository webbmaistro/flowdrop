"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import CodeBlock from '@/components/ui/CodeBlock';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { cn } from '@/lib/utils';

interface ExpressionCardProps {
  signature: string;
  description: string;
  format: string;
  example: string;
  details: string;
  outputNote?: string;
}

export default function ExpressionCard({
  signature,
  description,
  format,
  example,
  details,
  outputNote
}: ExpressionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={cn(
        "group border border-neutral-700 rounded-lg bg-neutral-900/50 backdrop-blur-sm cursor-pointer p-0 overflow-hidden transition-all duration-500 ease-out",
        "hover:border-primary-main/30 hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)]",
        isExpanded && "border-primary-main/30"
      )}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <CardHeader className="cursor-pointer py-3 px-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg text-text-primary">{signature}</CardTitle>
            <CardDescription className="text-neutral-400 mt-1">{description}</CardDescription>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="ml-4 flex-shrink-0 relative flex items-center justify-center"
            style={{ width: 32, height: 32 }}
          >
            <div className="absolute inset-0 rounded-full bg-primary-main/0 group-hover:bg-primary-main/10 transition-all duration-200 ease-out scale-100 group-hover:scale-125" />
            <ChevronDown className="w-5 h-5 text-neutral-400 relative z-10 group-hover:text-primary-main/80 transition-colors duration-200" />
          </motion.div>
        </div>
      </CardHeader>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <CardContent className="pt-0 px-6 pb-6">
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-neutral-500 mb-2">Format:</p>
                  <CodeBlock code={format} lang="javascript" />
                </div>
                <div>
                  <p className="text-xs font-medium text-neutral-500 mb-2">Example:</p>
                  <CodeBlock code={example} lang="javascript" />
                  {outputNote && (
                    <p className="text-xs text-neutral-500 mt-2">
                      {outputNote}
                    </p>
                  )}
                </div>
                <p className="text-neutral-400 text-sm">
                  {details}
                </p>
              </div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

