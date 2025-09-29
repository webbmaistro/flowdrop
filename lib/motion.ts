export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } }
};

export const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 }
  }
};

// Centralized timings and progress windows for the landing page "Your Edge With Flowdrop" section
// Keeps the section configurable and easy to tweak without touching component code
export const edgeSectionMotion = {
  transition: {
    duration: 0.55,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
  parallax: {
    left: {
      progress: [0, 0.08] as const,
      x: [-400, 0] as const,
      rotateY: [-15, 0] as const,
    },
    right: {
      progress: [0, 0.12] as const,
      x: [400, 0] as const,
      rotateY: [15, 0] as const,
    },
  },
  // Earlier, slightly overlapped reveal windows so features appear faster together
  reveals: {
    perf: [0.15, 0.35] as const,
    node: [0.18, 0.38] as const,
    team: [0.2, 0.4] as const,
    adv: [0.22, 0.42] as const,
  },
} as const;

// Shared hover transforms for logo tiles and similar UI elements
export const hoverTransforms = {
  tile: {
    whileHover: { scale: 1.06, y: -2 },
    transition: { duration: 0.2, ease: 'easeOut' as const },
  },
  icon: {
    whileHover: { scale: 1.08 },
    transition: { duration: 0.2, ease: 'easeOut' as const },
  },
} as const;



