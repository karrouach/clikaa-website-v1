export const SITE_CONFIG = {
  name: "Clikaa",
  description: "We help startups and growing tech companies turn brand, product and pitch into growth engines",
  url: "https://clikaa.com",
  email: "hello@clikaa.com",
  address: "Ain Sebaa, Casablanca 20250",
};

export const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
] as const;

export const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/clikaa", icon: "X" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/clikaa/", icon: "Linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/clikaagency/", icon: "Instagram" },
  { label: "Dribbble", href: "https://dribbble.com/clikaa-agency", icon: "Dribbble" },
] as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const TIMING = {
  fast: 200,
  normal: 400,
  slow: 600,
  slower: 800,
  slowest: 1000,
} as const;

export const Z_INDEX = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  overlay: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
  cursor: 1000,
} as const;
