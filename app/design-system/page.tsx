"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Button, 
  Input, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui';
import { 
  Zap, 
  Cloud, 
  Cpu, 
  ArrowRight, 
  Check, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Star,
  Heart,
  Settings,
  User,
  Bell
} from 'lucide-react';
import { typography, glassmorphism } from '@/lib/styles';
import { cn } from '@/lib/utils';

export default function DesignSystemPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
              <div className="p-4 bg-background-glass backdrop-blur-lg rounded-2xl border border-white/10">
                <Zap className="w-8 h-8 text-primary-main" />
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className={cn(typography.h1, "mb-6 text-balance")}
            >
              Design System Showcase
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className={cn(typography.bodyLarge, "mb-12 max-w-2xl mx-auto text-balance")}
            >
              A comprehensive design system built with modern tools and best practices. 
              Featuring glassmorphism, smooth animations, and a cohesive color palette.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Buttons */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className={cn(typography.h2, "mb-8 text-center")}>Buttons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card variant="glass" hover>
                  <CardHeader>
                    <CardTitle>Primary</CardTitle>
                    <CardDescription>Main action buttons</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="primary" size="sm" icon={<Zap className="w-4 h-4" />}>
                      Small
                    </Button>
                    <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                      Default
                    </Button>
                    <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                      Large
                    </Button>
                    <Button variant="primary" size="xl" loading>
                      Loading
                    </Button>
                  </CardContent>
                </Card>

                <Card variant="glass" hover>
                  <CardHeader>
                    <CardTitle>Secondary</CardTitle>
                    <CardDescription>Alternative actions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="secondary" size="sm">
                      Small
                    </Button>
                    <Button variant="secondary">
                      Default
                    </Button>
                    <Button variant="secondary" size="lg">
                      Large
                    </Button>
                    <Button variant="secondary" disabled>
                      Disabled
                    </Button>
                  </CardContent>
                </Card>

                <Card variant="glass" hover>
                  <CardHeader>
                    <CardTitle>Outline</CardTitle>
                    <CardDescription>Bordered buttons</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" size="sm">
                      Small
                    </Button>
                    <Button variant="outline">
                      Default
                    </Button>
                    <Button variant="outline" size="lg">
                      Large
                    </Button>
                    <Button variant="outline" disabled>
                      Disabled
                    </Button>
                  </CardContent>
                </Card>

                <Card variant="glass" hover>
                  <CardHeader>
                    <CardTitle>Ghost</CardTitle>
                    <CardDescription>Subtle actions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="ghost" size="sm" icon={<Heart className="w-4 h-4" />}>
                      Like
                    </Button>
                    <Button variant="ghost" icon={<Star className="w-4 h-4" />}>
                      Favorite
                    </Button>
                    <Button variant="ghost" size="lg" icon={<Settings className="w-4 h-4" />}>
                      Settings
                    </Button>
                    <Button variant="ghost" disabled>
                      Disabled
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Inputs */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className={cn(typography.h2, "mb-8 text-center")}>Inputs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card variant="glass" hover>
                  <CardHeader>
                    <CardTitle>Text Inputs</CardTitle>
                    <CardDescription>Form input variations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Input
                      label="Email Address"
                      placeholder="Enter your email"
                      icon={<Mail className="w-4 h-4" />}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      icon={<Lock className="w-4 h-4" />}
                      iconPosition="right"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                      label="With Error"
                      placeholder="This field has an error"
                      error
                      helperText="This field is required"
                    />
                  </CardContent>
                </Card>

                <Card variant="glass" hover>
                  <CardHeader>
                    <CardTitle>Glass Inputs</CardTitle>
                    <CardDescription>Glassmorphism style inputs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Input
                      variant="glass"
                      label="Glass Email"
                      placeholder="Enter your email"
                      icon={<Mail className="w-4 h-4" />}
                    />
                    <Input
                      variant="glass"
                      label="Glass Password"
                      type="password"
                      placeholder="Enter your password"
                      icon={<Lock className="w-4 h-4" />}
                    />
                    <Input
                      variant="glass"
                      label="No Label"
                      placeholder="Placeholder text"
                    />
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Cards */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className={cn(typography.h2, "mb-8 text-center")}>Cards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card variant="default" hover>
                  <CardHeader>
                    <CardTitle>Default Card</CardTitle>
                    <CardDescription>Standard card with hover effects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className={typography.body}>
                      This is a default card with subtle shadows and hover animations.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="primary" size="sm">
                      Action
                    </Button>
                  </CardFooter>
                </Card>

                <Card variant="glass" hover>
                  <CardHeader>
                    <CardTitle>Glass Card</CardTitle>
                    <CardDescription>Glassmorphism effect card</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className={typography.body}>
                      This card uses glassmorphism with backdrop blur and transparency.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Action
                    </Button>
                  </CardFooter>
                </Card>

                <Card variant="elevated" hover>
                  <CardHeader>
                    <CardTitle>Elevated Card</CardTitle>
                    <CardDescription>Card with enhanced shadows</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className={typography.body}>
                      This card has enhanced shadows for a more prominent appearance.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" size="sm">
                      Action
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </motion.div>

            {/* Feature Cards */}
            <motion.div variants={itemVariants}>
              <h2 className={cn(typography.h2, "mb-8 text-center")}>Feature Cards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card variant="glass" hover className="text-center">
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-2xl">
                        <Cloud className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <CardTitle className="mb-4">Cloud Deployment</CardTitle>
                    <p className={typography.body}>
                      Deploy your applications to the cloud with zero configuration.
                    </p>
                  </CardContent>
                </Card>

                <Card variant="glass" hover className="text-center">
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-2xl">
                        <Zap className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <CardTitle className="mb-4">Lightning Fast</CardTitle>
                    <p className={typography.body}>
                      Optimized for speed with the latest performance technologies.
                    </p>
                  </CardContent>
                </Card>

                <Card variant="glass" hover className="text-center">
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-2xl">
                        <Cpu className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <CardTitle className="mb-4">Smart Processing</CardTitle>
                    <p className={typography.body}>
                      AI-powered processing for intelligent automation and insights.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-footer border-t border-border-primary py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className={cn(typography.bodySmall, "text-text-muted")}>
              Design System built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 