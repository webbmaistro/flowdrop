"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardTitle, AnimatedSection, SectionHeader, Section } from '@/components/ui';
import { FileText, MessageSquare, Zap } from 'lucide-react';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';

export default function WhySection() {
  return (
    <Section>
      <AnimatedSection className="max-w-4xl mx-auto">
          <SectionHeader title="Why Flowdrop?" align="center" level="h2" />

          <div className="mb-12">
            <Card variant="glass" hover className="px-8 py-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden max-w-2xl mx-auto group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <div className="text-center relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-primary-main group-hover:text-primary-light transition-colors duration-300">So simple you'll actually enjoy automating.</h3>
              </div>
            </Card>
          </div>

          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card variant="glass" hover className="p-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-0">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                </div>
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-4xl">
                      <FileText className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                  <CardTitle className="mb-4 text-center">Document Magic</CardTitle>
                  <p className={cn(typography.body, "text-center")}>Transform PDFs, Sheets, Docs, and Drive—the whole Google Suite at your fingertips.</p>
                </CardContent>
              </Card>

              <Card variant="glass" hover className="p-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-0">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                </div>
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-4xl">
                      <MessageSquare className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                  <CardTitle className="mb-4 text-center">Chat to Build</CardTitle>
                  <p className={cn(typography.body, "text-center")}>Create workflows from scratch or upgrade existing ones as simple as talking with a friend.</p>
                </CardContent>
              </Card>

              <Card variant="glass" hover className="p-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-0">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                </div>
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-4xl">
                      <Zap className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                  <CardTitle className="mb-4 text-center">Content Factory</CardTitle>
                  <p className={cn(typography.body, "text-center")}>Social media posts that slap on demand. Audience on autopilot.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <Card variant="glass" className="p-8 border-primary-main/30 bg-gradient-to-r from-primary-main/10 to-purple-700/10 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <div className="relative z-10">
                <p className={cn(typography.bodyLarge, "font-semibold text-primary-light group-hover:text-primary-main transition-colors duration-300")}>Bottom line: Flowdrop turns "someday we'll automate that" into "done before lunch."</p>
              </div>
            </Card>
          </div>
        </AnimatedSection>
    </Section>
  );
}


