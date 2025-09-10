"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface SocialLinksProps {
  variant?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  variant = 'horizontal', 
  size = 'md',
  className = '' 
}) => {
  const socialLinks = [
    {
      name: 'Discord',
      url: 'https://discord.gg/j52FsqjW2W',
      icon: FaDiscord,
      color: 'hover:text-[#5865F2]'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Flowdrop_AI',
      icon: FaTwitter,
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/flowdrop-labs/',
      icon: FaLinkedin,
      color: 'hover:text-[#0077B5]'
    }
  ];

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const containerClasses = variant === 'horizontal' 
    ? 'flex items-center gap-4' 
    : 'flex flex-col items-center gap-3';

  return (
    <div className={`${containerClasses} ${className}`}>
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 
              hover:bg-white/10 hover:border-white/20 transition-all duration-300
              text-gray-400 ${social.color} hover:shadow-lg hover:shadow-white/5
              group
            `}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            aria-label={`Follow us on ${social.name}`}
          >
            <Icon className={`${sizeClasses[size]} transition-colors duration-300`} />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks; 