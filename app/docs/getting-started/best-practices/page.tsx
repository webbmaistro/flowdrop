"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Lightbulb, Shield, Zap, Users, Clock } from 'lucide-react';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import Callout from "@/components/ui/Callout";

const bestPractices = [
  {
    category: "Workflow Design",
    icon: Zap,
    color: "text-primary-main",
    bgColor: "bg-primary-main/20",
    practices: [
      {
        title: "Start Simple",
        description: "Begin with basic workflows and gradually add complexity",
        type: "do"
      },
      {
        title: "Use Descriptive Names",
        description: "Name your workflows clearly so you can find them later",
        type: "do"
      },
      {
        title: "Test Before Activating",
        description: "Always test your workflow before turning it on",
        type: "do"
      },
      {
        title: "Avoid Over-Complexity",
        description: "Don't try to do everything in one workflow",
        type: "dont"
      }
    ]
  },
  {
    category: "AI Integration",
    icon: Lightbulb,
    color: "text-warning-500",
    bgColor: "bg-warning-500/20",
    practices: [
      {
        title: "Be Specific with Prompts",
        description: "Give AI clear, detailed instructions for better results",
        type: "do"
      },
      {
        title: "Use Context Effectively",
        description: "Provide relevant context to help AI make better decisions",
        type: "do"
      },
      {
        title: "Review AI Outputs",
        description: "Always check AI-generated content before using it",
        type: "do"
      },
      {
        title: "Don't Rely on AI Alone",
        description: "Use AI as a tool, not a replacement for good judgment",
        type: "dont"
      }
    ]
  },
  {
    category: "Team Collaboration",
    icon: Users,
    color: "text-success-500",
    bgColor: "bg-success-500/20",
    practices: [
      {
        title: "Share Workflows",
        description: "Export and share useful workflows with your team",
        type: "do"
      },
      {
        title: "Document Your Workflows",
        description: "Add descriptions and comments to explain complex logic",
        type: "do"
      },
      {
        title: "Use Workspaces",
        description: "Organize workflows by team or project",
        type: "do"
      },
      {
        title: "Don't Share Sensitive Data",
        description: "Be careful about what data you include in shared workflows",
        type: "dont"
      }
    ]
  },
  {
    category: "Performance & Security",
    icon: Shield,
    color: "text-error-500",
    bgColor: "bg-error-500/20",
    practices: [
      {
        title: "Monitor Execution Times",
        description: "Keep an eye on how long your workflows take to run",
        type: "do"
      },
      {
        title: "Use Error Handling",
        description: "Add error handling nodes to manage failures gracefully",
        type: "do"
      },
      {
        title: "Secure Your Integrations",
        description: "Regularly review and update your app permissions",
        type: "do"
      },
      {
        title: "Don't Ignore Rate Limits",
        description: "Be aware of API rate limits for your integrations",
        type: "dont"
      }
    ]
  }
];

const commonMistakes = [
  {
    mistake: "Creating workflows that are too complex",
    solution: "Break complex processes into smaller, manageable workflows",
    impact: "Harder to debug and maintain"
  },
  {
    mistake: "Not testing workflows before activation",
    solution: "Always use the test feature to verify your workflow works correctly",
    impact: "Can cause data issues or failed automations"
  },
  {
    mistake: "Ignoring error handling",
    solution: "Add error handling nodes to catch and manage failures",
    impact: "Workflows can fail silently without notification"
  },
  {
    mistake: "Using unclear AI prompts",
    solution: "Be specific and provide context for better AI results",
    impact: "AI may not understand what you want to achieve"
  }
];

export default function BestPracticesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className={cn(typography.h1, "mb-4")}>
          Best Practices
        </h1>
        <p className={cn(typography.bodyLarge, "text-text-secondary mb-8")}>
          Learn the recommended patterns and avoid common pitfalls when building workflows with Flowdrop. 
          These practices will help you create more reliable, maintainable automations.
        </p>
      </div>

      {/* Best Practices by Category */}
      <div className="mb-12">
        <h2 className={cn(typography.h2, "mb-8")}>
          Best Practices by Category
        </h2>
        
        <div className="space-y-8">
          {bestPractices.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", category.bgColor)}>
                  <category.icon className={cn("w-5 h-5", category.color)} />
                </div>
                <h3 className={cn(typography.h3, "text-text-primary")}>
                  {category.category}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {category.practices.map((practice, practiceIndex) => (
                  <div
                    key={practiceIndex}
                    className={cn(
                      "p-4 rounded-lg border",
                      practice.type === "do" 
                        ? "bg-success-500/10 border-success-500/30" 
                        : "bg-error-500/10 border-error-500/30"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      {practice.type === "do" ? (
                        <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-error-500 mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <h4 className={cn(typography.bodyLarge, "font-semibold mb-1")}>
                          {practice.title}
                        </h4>
                        <p className={cn(typography.bodySmall, "text-text-secondary")}>
                          {practice.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="mb-12">
        <h2 className={cn(typography.h2, "mb-8")}>
          Common Mistakes to Avoid
        </h2>
        
        <div className="space-y-6">
          {commonMistakes.map((mistake, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-error-500/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-error-500" />
                </div>
                
                <div className="flex-1">
                  <h3 className={cn(typography.h3, "mb-2 text-error-500")}>
                    {mistake.mistake}
                  </h3>
                  <p className={cn(typography.body, "text-text-secondary mb-3")}>
                    <strong>Impact:</strong> {mistake.impact}
                  </p>
                  <div className="bg-neutral-900/50 rounded-lg p-3">
                    <p className={cn(typography.bodySmall, "text-text-primary")}>
                      <strong>Solution:</strong> {mistake.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pro Tips */}
      <div className="mb-12">
        <h2 className={cn(typography.h2, "mb-8")}>
          Pro Tips for Success
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Callout emoji="🚀" color="border-primary-main">
            <strong>Start with Templates:</strong> Use Flowdrop's built-in templates as starting points 
            for your workflows. They're tested and optimized for common use cases.
          </Callout>
          
          <Callout emoji="📊" color="border-success-500">
            <strong>Monitor Performance:</strong> Keep an eye on your workflow execution times and 
            success rates. This helps you identify bottlenecks and optimization opportunities.
          </Callout>
          
          <Callout emoji="🔄" color="border-warning-500">
            <strong>Iterate and Improve:</strong> Don't try to build the perfect workflow on the first try. 
            Start simple, test, and gradually add features based on what you learn.
          </Callout>
          
          <Callout emoji="👥" color="border-primary-main">
            <strong>Share and Collaborate:</strong> Export your successful workflows and share them with 
            your team. This helps everyone benefit from your automation discoveries.
          </Callout>
        </div>
      </div>

      {/* Security Considerations */}
      <div className="mb-12">
        <h2 className={cn(typography.h2, "mb-6")}>
          Security Best Practices
        </h2>
        
        <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary-main" />
            <h3 className={cn(typography.h3, "text-primary-main")}>
              Keep Your Data Secure
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className={cn(typography.bodyLarge, "font-semibold mb-3 text-success-500")}>
                ✅ Do This
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Regularly review app permissions</li>
                <li>• Use specific data access scopes</li>
                <li>• Monitor workflow execution logs</li>
                <li>• Keep integrations up to date</li>
                <li>• Use team workspaces for organization</li>
              </ul>
            </div>
            
            <div>
              <h4 className={cn(typography.bodyLarge, "font-semibold mb-3 text-error-500")}>
                ❌ Avoid This
              </h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Don't share workflows with sensitive data</li>
                <li>• Avoid overly broad permissions</li>
                <li>• Don't ignore security warnings</li>
                <li>• Avoid hardcoding credentials</li>
                <li>• Don't skip regular security reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-primary-main/10 to-purple-700/10 rounded-2xl p-8 border border-primary-main/20"
      >
        <div className="text-center">
          <h3 className={cn(typography.h3, "mb-4 text-primary-main")}>
            Ready to Build Better Workflows?
          </h3>
          <p className={cn(typography.body, "text-text-secondary mb-6 max-w-2xl mx-auto")}>
            You now have the knowledge to create reliable, maintainable workflows. Remember to start 
            simple, test thoroughly, and iterate based on what you learn.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-primary-main">
            <span className={cn(typography.body, "font-medium")}>
              Start building with confidence
            </span>
            <Zap className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
