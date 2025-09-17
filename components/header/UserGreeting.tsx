"use client"

import React from 'react';

interface UserGreetingProps {
  email: string | undefined;
  className?: string;
}

// Helper function to capitalize the first letter of username
const getCapitalizedUsername = (email: string | undefined) => {
  if (!email) return '';
  const username = email.split('@')[0];
  return username.charAt(0).toUpperCase() + username.slice(1);
};

export default function UserGreeting({ email, className = "" }: UserGreetingProps) {
  return (
    <span className={`text-sm text-text-secondary bg-background-glass/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 ${className}`}>
      👋 Hey, {getCapitalizedUsername(email)}!
    </span>
  );
}
