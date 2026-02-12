export const SITE_CONFIG = {
  name: "Clikaa",
  description: "Digital agency crafting exceptional web experiences",
  url: "https://clikaa.com",
  email: "hello@clikaa.com",
  phone: "+1 (555) 123-4567",
  address: "123 Creative Street, Design District, NYC 10001",
};

export const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com/clikaa", icon: "Twitter" },
  { label: "LinkedIn", href: "https://linkedin.com/company/clikaa", icon: "Linkedin" },
  { label: "Instagram", href: "https://instagram.com/clikaa", icon: "Instagram" },
  { label: "GitHub", href: "https://github.com/clikaa", icon: "Github" },
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
