"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Screenshot, ScreenshotGallery } from '@/components/ui';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';

// Real product screenshots data using actual app images
const productScreenshots = [
  {
    src: '/website-preview.png',
    alt: 'FlowDrop Website Preview - Complete platform overview',
    caption: 'Experience the full FlowDrop platform with our comprehensive website preview showcasing all features',
    width: 1200,
    height: 800
  },
  {
    src: '/screenshots/webfloweditor.png',
    alt: 'FlowDrop Webflow Editor - Visual workflow builder interface',
    caption: 'Intuitive visual editor for building AI-powered workflows with drag-and-drop simplicity',
    width: 1200,
    height: 800
  },
  {
    src: '/screenshots/webfloweditor2.png',
    alt: 'FlowDrop Advanced Editor - Enhanced workflow creation tools',
    caption: 'Advanced workflow editor with AI assistance and real-time preview capabilities',
    width: 1200,
    height: 800
  },
  {
    src: '/screenshots/nodeeditor.png',
    alt: 'FlowDrop Node Editor - Custom node configuration and logic',
    caption: 'Powerful node editor for customizing workflow logic and data transformations',
    width: 1200,
    height: 800
  },
  {
    src: '/screenshots/generatewebflowscreen.png',
    alt: 'FlowDrop AI Generation - AI-powered workflow creation',
    caption: 'AI-driven workflow generation that converts your descriptions into working automations',
    width: 1200,
    height: 800
  }
];

const featureScreenshots = [
  {
    src: '/screenshots/nodeeditor.png',
    alt: 'Node Editor - Custom workflow logic and data processing',
    caption: 'Advanced node editor for custom functions, data transformations, and business logic',
    width: 800,
    height: 600
  },
  {
    src: '/screenshots/webfloweditor2.png',
    alt: 'Visual Workflow Builder - Drag-and-drop automation creation',
    caption: 'Visual workflow builder with AI assistance and real-time collaboration features',
    width: 800,
    height: 600
  }
];

export default function ProductScreenshots() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        {/* Main Product Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className={cn(typography.h2, "mb-6")}>See FlowDrop in Action</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Experience the power of AI-driven workflow automation with our intuitive interface
            </p>
          </div>
          
          <ScreenshotGallery
            screenshots={productScreenshots}
            autoPlay={true}
            autoPlayInterval={4000}
            className="max-w-6xl mx-auto"
          />
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          <div>
            <h3 className={cn(typography.h3, "mb-4")}>Advanced Node Editor</h3>
            <p className="text-gray-400 mb-6">
              Customize workflow logic and data transformations with our powerful node editor. 
              Full control over data processing, filtering, and business logic implementation.
            </p>
            <Screenshot
              src={featureScreenshots[0].src}
              alt={featureScreenshots[0].alt}
              caption={featureScreenshots[0].caption}
              width={featureScreenshots[0].width}
              height={featureScreenshots[0].height}
              showBrowserFrame={true}
            />
          </div>
          
          <div>
            <h3 className={cn(typography.h3, "mb-4")}>Visual Workflow Builder</h3>
            <p className="text-gray-400 mb-6">
              Build complex workflows with our intuitive drag-and-drop interface. 
              AI assistance and real-time collaboration make workflow creation effortless.
            </p>
            <Screenshot
              src={featureScreenshots[1].src}
              alt={featureScreenshots[1].alt}
              caption={featureScreenshots[1].caption}
              width={featureScreenshots[1].width}
              height={featureScreenshots[1].height}
              showBrowserFrame={true}
            />
          </div>
        </motion.div>

        {/* AI-Powered Generation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center"
        >
          <h3 className={cn(typography.h3, "mb-4")}>AI-Powered Workflow Generation</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Describe what you want to automate and watch AI create your workflow instantly
          </p>
          
          <div className="flex justify-center">
            <Screenshot
              src="/screenshots/generatewebflowscreen.png"
              alt="FlowDrop AI Generation - Natural language to workflow conversion"
              caption="AI converts your descriptions into fully functional workflows"
              width={800}
              height={600}
              showBrowserFrame={true}
              className="max-w-4xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
} 