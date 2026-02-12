import { Variants, Transition } from "framer-motion";

export const smoothEasing = [0.22, 1, 0.36, 1];

export const defaultTransition: Transition = {
  duration: 0.8,
  ease: smoothEasing,
};

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: smoothEasing,
    },
  },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: defaultTransition,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: smoothEasing,
    },
  },
};

export const slideUp: Variants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: smoothEasing,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: smoothEasing,
    },
  },
};

export const slideInLeft: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: defaultTransition,
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: smoothEasing,
    },
  },
};

export const slideInRight: Variants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: defaultTransition,
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: smoothEasing,
    },
  },
};

export const scaleUp: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: defaultTransition,
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: smoothEasing,
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const imageReveal: Variants = {
  initial: {
    clipPath: "inset(0 0 100% 0)",
  },
  animate: {
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 1,
      ease: smoothEasing,
    },
  },
};

export const maskReveal: Variants = {
  initial: {
    clipPath: "inset(100% 0 0 0)",
  },
  animate: {
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: 0.8,
      ease: smoothEasing,
    },
  },
};

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEasing,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: smoothEasing,
    },
  },
};

export const menuSlide: Variants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.8,
      ease: smoothEasing,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.6,
      ease: smoothEasing,
    },
  },
};

export const menuLinkSlide: Variants = {
  initial: {
    x: 80,
    opacity: 0,
  },
  animate: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: smoothEasing,
      delay: 0.05 * i,
    },
  }),
  exit: (i: number) => ({
    x: 80,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: smoothEasing,
      delay: 0.03 * i,
    },
  }),
};

export const letterAnimation: Variants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: smoothEasing,
      delay: 0.02 * i,
    },
  }),
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3, ease: smoothEasing },
};

export const tapScale = {
  scale: 0.98,
  transition: { duration: 0.1 },
};
