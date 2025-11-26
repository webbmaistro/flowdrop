'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/types/blog';
import { blogStyles } from './blog-styles';

interface FAQSectionProps {
  faqs: FAQItem[];
}

/**
 * FAQ section with accordion UI
 * Renders FAQ schema visually
 */
export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faqs.length === 0) {
    return null;
  }

  return (
    <section className="my-12">
      <h2 className={`${blogStyles.heading.h2} mb-6 text-white`}>Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${blogStyles.card.base} ${blogStyles.card.padding}`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between text-left gap-4"
              aria-expanded={openIndex === index}
            >
              <h3 className={`${blogStyles.heading.h4} mb-0 text-white`}>{faq.question}</h3>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className={`${blogStyles.body.base} text-neutral-400 mt-4`}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

