import Link from 'next/link';
import { Button } from '@/components/ui';
import { ArrowLeft, Home, Search, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Animation */}
          <motion.div
            className="text-8xl md:text-9xl font-bold text-primary-main mb-4"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 1, -1, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            404
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg text-text-secondary mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track with FlowDrop.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              variant="primary"
              className="h-12 px-6"
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            
            <Button
              asChild
              variant="glass"
              className="h-12 px-6"
            >
              <Link href="/docs">
                <FileText className="w-4 h-4 mr-2" />
                Browse Docs
              </Link>
            </Button>
          </div>
          
          {/* Popular Pages */}
          <div className="bg-background-glass/50 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <Link 
                href="/pricing" 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-2 h-2 bg-primary-main rounded-full"></div>
                <span className="text-text-secondary hover:text-text-primary">Pricing</span>
              </Link>
              <Link 
                href="/docs/workflow-builder-basics" 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-2 h-2 bg-primary-main rounded-full"></div>
                <span className="text-text-secondary hover:text-text-primary">Workflow Builder Basics</span>
              </Link>
              <Link 
                href="/docs/ai-blocks-nodes" 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-2 h-2 bg-primary-main rounded-full"></div>
                <span className="text-text-secondary hover:text-text-primary">AI Blocks & Nodes</span>
              </Link>
              <Link 
                href="/contact" 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-2 h-2 bg-primary-main rounded-full"></div>
                <span className="text-text-secondary hover:text-text-primary">Contact Us</span>
              </Link>
            </div>
          </div>
          
          {/* Help Text */}
          <p className="text-sm text-text-secondary mt-6">
            Still can't find what you're looking for?{' '}
            <Link 
              href="/contact" 
              className="text-primary-main hover:text-primary-light transition-colors"
            >
              Contact our support team
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
