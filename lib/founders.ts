/**
 * Founders profile data - single source of truth
 * Used across blog posts and other parts of the site
 */

export interface Founder {
  name: string;
  role: string;
  bio: string;
  linkedIn: string;
  image: string;
}

export const founders: Record<string, Founder> = {
  'webb-hammond': {
    name: 'Webb Hammond',
    role: 'Founder',
    bio: 'Webb is the design genius that tried to learn coding four times and failed. Then finally got it. But he thought, why should everyone have to go through that? He founded Flowdrop to make automation and doing things with software accessible to everyone.',
    linkedIn: 'https://www.linkedin.com/in/webb-hammond-b3b46859/',
    image: '/assets/logo.png', // Update with actual founder image path
  },
  'john-pizzo': {
    name: 'John Pizzo',
    role: 'CTO',
    bio: 'John is the technical wizard behind Flowdrop. He transforms complex AI and automation challenges into simple, intuitive experiences that anyone can use.',
    linkedIn: 'https://www.linkedin.com/in/johnpizzo/',
    image: '/assets/logo.png', // Update with actual founder image path
  },
};

/**
 * Get a founder by their ID
 */
export function getFounder(id: string): Founder | undefined {
  return founders[id];
}

/**
 * Get all founders
 */
export function getAllFounders(): Founder[] {
  return Object.values(founders);
}

/**
 * Get founder by name (case-insensitive)
 */
export function getFounderByName(name: string): Founder | undefined {
  const normalizedName = name.toLowerCase().replace(/\s+/g, '-');
  return Object.values(founders).find(
    (founder) => founder.name.toLowerCase().replace(/\s+/g, '-') === normalizedName
  );
}

