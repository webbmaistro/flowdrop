"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Book, FileText, Code, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';

const docCategories = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and tutorials',
    icon: Zap,
    color: 'text-primary-main',
    bgColor: 'bg-primary-main/20',
    items: [
      { title: 'Quick Start Guide', href: '#', description: 'Get up and running in 5 minutes' },
      { title: 'Installation', href: '#', description: 'Install and configure FlowDrop' },
      { title: 'First Workflow', href: '#', description: 'Create your first automation' },
      { title: 'Best Practices', href: '#', description: 'Learn the recommended patterns' },
    ]
  },
  {
    title: 'Core Concepts',
    description: 'Understanding the fundamentals',
    icon: Book,
    color: 'text-success-500',
    bgColor: 'bg-success-500/20',
    items: [
      { title: 'Workflows', href: '#', description: 'Understanding workflow structure' },
      { title: 'Nodes & Connections', href: '#', description: 'Building blocks of automation' },
      { title: 'Data Flow', href: '#', description: 'How data moves through your workflows' },
      { title: 'Error Handling', href: '#', description: 'Managing failures gracefully' },
    ]
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation',
    icon: Code,
    color: 'text-warning-500',
    bgColor: 'bg-warning-500/20',
    items: [
      { title: 'REST API', href: '#', description: 'Complete API reference' },
      { title: 'Webhooks', href: '#', description: 'Real-time event notifications' },
      { title: 'Authentication', href: '#', description: 'API keys and security' },
      { title: 'Rate Limits', href: '#', description: 'Understanding usage limits' },
    ]
  },
  {
    title: 'Guides & Tutorials',
    description: 'Step-by-step tutorials',
    icon: FileText,
    color: 'text-error-500',
    bgColor: 'bg-error-500/20',
    items: [
      { title: 'Email Automation', href: '#', description: 'Automate email workflows' },
      { title: 'Database Integration', href: '#', description: 'Connect to your databases' },
      { title: 'Third-party APIs', href: '#', description: 'Integrate external services' },
      { title: 'Advanced Workflows', href: '#', description: 'Complex automation patterns' },
    ]
  }
];

const quickLinks = [
  { title: 'API Reference', href: '#', icon: ExternalLink },
  { title: 'Community Forum', href: '#', icon: ExternalLink },
  { title: 'GitHub Repository', href: '#', icon: ExternalLink },
  { title: 'Support Center', href: '#', icon: ExternalLink },
];

export default function DocsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-main/20 via-transparent to-primary-dark/20" />
        <div className="relative container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex justify-center mb-6">
              <div className="p-4 bg-primary-main/20 rounded-2xl">
                <Book className="w-8 h-8 text-primary-main" />
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className={cn(typography.h1, "mb-6 text-balance")}
            >
              Documentation
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className={cn(typography.bodyLarge, "mb-12 max-w-2xl mx-auto text-balance")}
            >
              Everything you need to build powerful workflow automations with FlowDrop. 
              From quick start guides to advanced tutorials.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link) => (
                <Button
                  key={link.title}
                  variant="outline"
                  size="sm"
                  icon={<link.icon className="w-4 h-4" />}
                  onClick={() => window.open(link.href, '_blank')}
                >
                  {link.title}
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={cn(typography.h2, "mb-12 text-center")}>
              Documentation Categories
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {docCategories.map((category) => (
                <motion.div key={category.title} variants={itemVariants}>
                  <Card variant="glass" hover className="h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={cn("p-3 rounded-xl", category.bgColor)}>
                          <category.icon className={cn("w-6 h-6", category.color)} />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{category.title}</CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        {category.items.map((item) => (
                          <div
                            key={item.title}
                            className="group flex items-center justify-between p-3 rounded-lg hover:bg-background-glass transition-colors cursor-pointer"
                          >
                            <div>
                              <h4 className="font-medium text-text-primary group-hover:text-primary-main transition-colors">
                                {item.title}
                              </h4>
                              <p className={cn(typography.bodySmall, "text-text-muted")}>
                                {item.description}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary-main transition-colors" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={cn(typography.h2, "mb-6")}>
              Ready to get started?
            </motion.h2>
            
            <motion.p variants={itemVariants} className={cn(typography.bodyLarge, "mb-8 text-text-muted")}>
              Follow our quick start guide to create your first workflow in minutes.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                icon={<Zap className="w-5 h-5" />}
                onClick={() => window.location.href = '/signin'}
              >
                Start Building
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Book className="w-5 h-5" />}
                onClick={() => window.location.href = '#'}
              >
                Read Quick Start
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 