"use client";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
}

/*
  AnimatedHeadline splits a string into individual characters and wraps each in a
  motion.span. When a user hovers over a letter, it smoothly transitions to the
  brand color (primary-main) with a subtle glow, then fades back to the original
  color when the hover ends.
*/
export default function AnimatedHeadline({ text, className = '' }: AnimatedHeadlineProps) {
  // Split into tokens that preserve spaces so we can identify words vs whitespace
  const tokens = text.split(/(\s+)/);

  return (
    <span className={className}>
      {tokens.map((token, tokenIdx) => {
        // If the token is purely whitespace, render it directly so word spacing remains intact.
        if (/^\s+$/.test(token)) {
          return <span key={`space-${tokenIdx}`}>{token}</span>;
        }

        // For actual words, wrap them in an inline-block so the browser will not break
        // lines inside the word. Inside that wrapper we still animate individual letters.
        return (
          <span key={`word-${tokenIdx}`} className="inline-block">
            {Array.from(token).map((char, charIdx) => (
              <AnimatedLetter key={`char-${tokenIdx}-${charIdx}`} char={char} />
            ))}
          </span>
        );
      })}
    </span>
  );
}

// ----- Internal letter component -----
interface AnimatedLetterProps {
  char: string;
}

function AnimatedLetter({ char }: AnimatedLetterProps) {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start('hover');
  };

  const handleHoverEnd = () => {
    controls.start('hover').then(() => controls.start('rest'));
  };

  return (
    <motion.span
      className="inline-block cursor-default"
      variants={{
        rest: {
          color: 'var(--foreground)',
          textShadow: '0 0 0 rgba(0,0,0,0)',
          scale: 1,
          y: 0,
          transition: {
            color: { duration: 1.2 },
            textShadow: { duration: 1.2 },
            scale: { type: 'spring', stiffness: 500, damping: 18 },
            y: { duration: 0.3, ease: 'easeInOut' },
          },
        },
        hover: {
          color: 'var(--color-primary)',
          textShadow: '0 0 8px rgba(139, 92, 246, 0.75)',
          scale: 1.15,
          y: [-2, 2, 0],
          transition: {
            color: { duration: 0.2 },
            textShadow: { duration: 0.2 },
            scale: { type: 'spring', stiffness: 500, damping: 18 },
            y: { duration: 0.3, ease: 'easeInOut' },
          },
        },
      }}
      initial="rest"
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {char}
    </motion.span>
  );
} 