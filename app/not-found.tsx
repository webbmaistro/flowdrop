import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="opacity-0 animate-fade-in">
          {/* 404 Animation */}
          <div className="text-8xl md:text-9xl font-bold text-primary-main mb-4 animate-pulse">
            404
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg text-text-secondary mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track with Flowdrop.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-gradient-to-r from-primary-main via-primary-500 to-primary-main text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </Link>
            
            <Link 
              href="/docs"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-gradient-to-r from-primary-main/20 via-primary-500/20 to-primary-main/20 text-primary-main font-semibold rounded-lg hover:bg-primary-main/30 hover:scale-105 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Browse Docs
            </Link>
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
        </div>
      </div>
    </div>
  );
}
