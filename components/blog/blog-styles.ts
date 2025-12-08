/**
 * Centralized blog styling constants using Geist Sans/Mono fonts
 * All blog components should import styles from here for consistency
 */

export const blogStyles = {
  // Typography - Geist Sans for body, Geist Mono for code
  heading: {
    h1: "text-4xl md:text-5xl font-bold tracking-tight mb-4 font-[family-name:var(--font-geist-sans)]",
    h2: "text-2xl md:text-3xl font-bold tracking-tight mb-3 mt-8 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent",
    h3: "text-xl md:text-2xl font-bold mb-2 mt-6 font-[family-name:var(--font-geist-sans)] text-purple-200 pl-3 border-l-2 border-purple-400/80",
    h4: "text-xl md:text-2xl font-semibold mb-2 mt-4 font-[family-name:var(--font-geist-sans)]",
  },
  
  body: {
    base: "text-lg md:text-[21px] leading-relaxed font-[family-name:var(--font-geist-sans)]",
    large: "text-xl md:text-[23px] leading-relaxed font-[family-name:var(--font-geist-sans)]",
    small: "text-base md:text-lg leading-relaxed font-[family-name:var(--font-geist-sans)]",
  },
  
  code: {
    inline: "px-1.5 py-0.5 rounded bg-neutral-800 text-sm font-[family-name:var(--font-geist-mono)] border border-neutral-700 text-purple-300",
    block: "p-4 rounded-lg bg-neutral-900 font-[family-name:var(--font-geist-mono)] text-sm overflow-x-auto border border-neutral-800",
  },
  
  // Card styles
  card: {
    base: "rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden",
    hover: "hover:shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/30",
    padding: "p-6",
  },
  
  // Badge styles
  badge: {
    base: "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)] transition-all duration-200",
    category: "bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400/50",
    tag: "bg-neutral-800/50 text-neutral-300 border border-neutral-700/50 hover:bg-neutral-700/50 hover:border-neutral-600 hover:text-white",
    featured: "bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20",
  },
  
  // Button styles
  button: {
    primary: "px-4 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors font-[family-name:var(--font-geist-sans)]",
    secondary: "px-4 py-2 rounded-lg border border-neutral-700 hover:bg-neutral-800 transition-colors font-[family-name:var(--font-geist-sans)]",
    ghost: "px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors font-[family-name:var(--font-geist-sans)]",
  },
  
  // Meta info
  meta: {
    base: "flex items-center gap-2 text-sm text-neutral-400 font-[family-name:var(--font-geist-sans)]",
    separator: "text-neutral-600",
  },
  
  // Content area
  content: {
    wrapper: "max-w-6xl mx-auto",
    article: "prose prose-neutral prose-invert prose-lg max-w-none [&>p]:text-lg [&>p]:md:text-[21px] [&>ul>li]:text-lg [&>ul>li]:md:text-[21px] [&>ol>li]:text-lg [&>ol>li]:md:text-[21px] [&>blockquote]:text-lg [&>blockquote]:md:text-[21px] [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:mb-3 [&>h2]:mt-8 [&>h2]:bg-gradient-to-r [&>h2]:from-purple-400 [&>h2]:via-purple-300 [&>h2]:to-purple-400 [&>h2]:bg-clip-text [&>h2]:text-transparent [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-bold [&>h3]:mb-2 [&>h3]:mt-6 [&>h3]:text-purple-200 [&>h3]:pl-3 [&>h3]:border-l-2 [&>h3]:border-purple-400/80",
  },
  
  // Layout
  layout: {
    container: "min-h-screen",
    section: "py-8 md:py-12",
    grid: {
      two: "grid grid-cols-1 md:grid-cols-2 gap-6",
      three: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
    },
  },
  
  // Search
  search: {
    input: "w-full px-4 py-3 rounded-full border border-neutral-700 bg-neutral-900/50 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 font-[family-name:var(--font-geist-sans)] transition-all duration-200",
    results: "absolute top-full left-0 right-0 mt-2 bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50",
  },
  
  // Links
  link: {
    base: "text-neutral-100 hover:underline transition-all font-[family-name:var(--font-geist-sans)]",
    muted: "text-neutral-400 hover:text-neutral-100 transition-colors font-[family-name:var(--font-geist-sans)]",
  },
} as const;

