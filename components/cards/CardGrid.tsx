"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

// Card data interface
interface CardData {
  title: string;
  description: string;
  icon: LucideIcon;
  cta?: {
    text: string;
    href: string;
  };
}

// Props interface
interface CardGridProps {
  cards: CardData[];
  className?: string;
}

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const CardGrid: React.FC<CardGridProps> = ({ cards, className = "" }) => {
  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {cards.map((card, index) => {
        const IconComponent = card.icon;
        
        return (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group"
          >
            <Card className="h-full bg-neutral-900/50 border-neutral-800 rounded-4xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] group-hover:border-purple-500/20">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Icon Area */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-purple-500/10 rounded-4xl group-hover:bg-purple-500/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-purple-500" />
                  </div>
                </div>

                {/* Heading */}
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-100 transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Body Copy */}
                <p className="text-neutral-400 text-center mb-6 flex-grow leading-relaxed">
                  {card.description}
                </p>

                {/* Optional CTA Button */}
                {card.cta && (
                  <Button
                    onClick={() => window.open(card.cta!.href, '_blank')}
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-xl transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                  >
                    {card.cta.text}
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default CardGrid; 

