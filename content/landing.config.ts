export type Audience = { label: string };
export type PainPoint = { text: string };
export type CompanyLogo = { src: string; alt: string };
export type Testimonial = { initials: string; name: string; role: string; quote: string; color?: string };
export type ComparisonItem = { title: string; emoji: string; color: 'red' | 'primary' | 'blue'; bullets: string[]; highlight?: boolean };
export type HeroContent = { headline: string; subcopy: string; ctaHref: string; ctaText: string };
export type MobileStory = { title: string; copy: string; screenshot: { url: string; src: string; alt: string; width: number; height: number; label: { text: string; colorClass: string } } };

export const audiences: Audience[] = [
  { label: '⚡ Side‑Hustlers' },
  { label: '🚀 Indie SaaS teams' },
  { label: '📈 Sales & Marketing teams' },
  { label: '🛠️ Automation agencies' },
];

export const painPoints: PainPoint[] = [
  { text: 'Mapping nodes takes forever' },
  { text: "Im tired of copying between tools" },
  { text: 'API keys are endless' },
];

export const companyLogos: CompanyLogo[] = [
  { src: '/logos/apple.svg', alt: 'Apple' },
  { src: '/logos/meta.svg', alt: 'Meta' },
  { src: '/logos/capital-one.svg', alt: 'Capital One' },
];

export const testimonials: Testimonial[] = [
  { initials: 'HT', name: 'Hugh Tang', role: 'SaaS Founder', quote: 'Love the minimalist design.' },
  { initials: 'W', name: 'Will', role: 'Agency Founder', quote: 'Saw your LinkedIn post and thought it looked great.' },
  { initials: 'K', name: 'Kmark', role: 'Community Moderator & JavaScript Dev', quote: 'i gotta say sir. i love the UI' },
];

export const comparisonItems: ComparisonItem[] = [
  {
    title: 'Zapier',
    emoji: '😤',
    color: 'red',
    bullets: ['5,000+ apps but limited depth', '$20/month for basic features', 'Complex node mapping'],
  },
  {
    title: 'Flowdrop',
    emoji: '⚡',
    color: 'primary',
    bullets: ['AI-powered workflow builder', 'Starts at $9/month for everything', 'Zero learning curve'],
    highlight: true,
  },
  {
    title: 'n8n',
    emoji: '🤔',
    color: 'blue',
    bullets: ['Self-hosted or $24/month cloud', '500+ integrations with JS/Python nodes', 'Steep learning curve for non-developers'],
  },
];

export const hero: HeroContent = {
  headline: "Automation shouldn't feel like another job.",
  subcopy: 'What if it felt... <em class="text-primary-main font-medium">effortless?</em>',
  ctaHref: 'https://app.flowdrop.xyz/',
  ctaText: 'Get Started',
};

export const mobileStories: MobileStory[] = [
  {
    title: 'Visual Workflow Builder',
    copy: 'Drag, drop, and connect. Build complex workflows with intuitive visual tools.',
    screenshot: {
      url: 'flowdrop.xyz/builder',
      src: '/screenshots/webfloweditor.png',
      alt: 'Flowdrop Visual Workflow Builder',
      width: 400,
      height: 300,
      label: { text: 'Visual Builder', colorClass: 'bg-primary-main/20 backdrop-blur-sm border border-primary-main/30 text-primary-main' },
    },
  },
  {
    title: 'AI-Powered Generation',
    copy: 'Describe your workflow in plain English. Watch AI create it instantly.',
    screenshot: {
      url: 'flowdrop.xyz/ai-generator',
      src: '/screenshots/generatewebflowscreen.png',
      alt: 'Flowdrop AI Workflow Generation',
      width: 400,
      height: 300,
      label: { text: 'AI Workflow Generation', colorClass: 'bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-400' },
    },
  },
  {
    title: 'Build with Chat',
    copy: 'Natural conversations that create powerful workflows. Like Cursor, but for automation.',
    screenshot: {
      url: 'flowdrop.xyz/build-with-chat',
      src: '/screenshots/buildwithchatfeature.png',
      alt: 'Flowdrop Build with Chat',
      width: 250,
      height: 300,
      label: { text: 'build with chat', colorClass: 'bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-400 px-2 py-1' },
    },
  },
  {
    title: 'Advanced AI Node Editing',
    copy: 'Fine-tune AI nodes with precision. Custom logic for complex workflows.',
    screenshot: {
      url: 'flowdrop.xyz/node-editor',
      src: '/screenshots/nodeeditor.png',
      alt: 'Flowdrop Node Editor',
      width: 400,
      height: 300,
      label: { text: 'AI node editing', colorClass: 'bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-400 px-2 py-1' },
    },
  },
];


