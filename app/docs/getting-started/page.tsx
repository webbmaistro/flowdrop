"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, CheckCircle, BookOpen, Zap, Users, Settings } from 'lucide-react';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';

export default function GettingStartedPage() {
  const videoId = "Viqi2bkpt-0"; // Flowdrop App Tour
  const features = [
    "AI Assistant for workflow creation",
    "Visual drag-and-drop canvas editor", 
    "Node-based automation building",
    "Real-time execution monitoring",
    "Team collaboration workspaces",
    "Import/export workflows"
  ];

  const tourSections = [
    {
      title: "AI Assistant",
      description: "Describe what you want to automate with chat and one-shot a workflow",
      icon: Zap,
      features: ["Chat-based workflow creation", "Add files for context", "Import workflows from others"]
    },
    {
      title: "Left Sidebar Navigation", 
      description: "Main navigation menu accessible from every page",
      icon: Settings,
      features: ["Dashboard overview", "Workspace management", "Workflow organization", "Account settings"]
    },
    {
      title: "Dashboard Control Center",
      description: "Launch workflows, edit existing ones, and manage your workspace",
      icon: BookOpen,
      features: ["Workflow statistics", "New workflow creation", "Integration management", "Execution monitoring"]
    },
    {
      title: "Canvas Editor",
      description: "Visual workflow builder with drag-and-drop functionality",
      icon: Users,
      features: ["Node-based building", "Real-time testing", "AI chat integration", "Execution tracking"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className={cn(typography.h1, "mb-4")}>
          Getting Started with Flowdrop
        </h1>
        <p className={cn(typography.bodyLarge, "text-text-secondary mb-8")}>
          Watch our comprehensive app tour to learn how to build powerful automations with Flowdrop's intuitive interface.
        </p>
      </div>

      {/* Video Section */}
      <div className="mb-16">
        <div className="relative group">
          <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary-main/10 to-purple-700/10 border border-primary-main/20">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&enablejsapi=1`}
              title="Flowdrop App Tour"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            
            {/* Play overlay for better UX */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-main/20 rounded-full blur-sm group-hover:bg-primary-main/30 transition-colors duration-300" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500/20 rounded-full blur-sm group-hover:bg-purple-500/30 transition-colors duration-300" />
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="mb-16">
        <h2 className={cn(typography.h2, "mb-8")}>
          What You'll Learn
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-primary-main/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-primary-main" />
              </div>
              <span className={cn(typography.body, "text-text-primary")}>
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tour Sections */}
      <div className="mb-16">
        <h2 className={cn(typography.h2, "mb-8")}>
          Tour Overview
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {tourSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-main/20 rounded-lg">
                  <section.icon className="w-5 h-5 text-primary-main" />
                </div>
                <h3 className={cn(typography.h3, "text-text-primary")}>
                  {section.title}
                </h3>
              </div>
              
              <p className={cn(typography.body, "text-text-secondary mb-4")}>
                {section.description}
              </p>
              
              <ul className="space-y-2">
                {section.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-main rounded-full" />
                    <span className={cn(typography.bodySmall, "text-text-secondary")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-primary-main/10 to-purple-700/10 rounded-2xl p-8 border border-primary-main/20"
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Play className="w-6 h-6 text-primary-main" />
            <h3 className={cn(typography.h3, "text-primary-main")}>
              Complete App Tour
            </h3>
          </div>
          
          <p className={cn(typography.body, "text-text-secondary mb-6 max-w-2xl mx-auto")}>
            From AI assistant to workflow execution, learn every feature in our step-by-step guide. 
            Watch the video above to see Flowdrop in action.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-primary-main">
            <span className={cn(typography.body, "font-medium")}>
              Ready to start building?
            </span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
