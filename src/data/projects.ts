import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "nova-financial",
    title: "Nova Financial",
    description:
      "A complete digital transformation for a leading fintech company. We redesigned their entire platform, focusing on user experience and modern aesthetics while maintaining security standards.",
    category: "Web Design",
    client: "Nova Financial Inc.",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    ],
    tags: ["UI/UX", "Development", "Branding"],
    link: "https://novafinancial.com",
    caseStudy: {
      challenge:
        "Nova Financial had outgrown their legacy platform. Users were dropping off during onboarding, and the dated interface was undermining trust with institutional investors. They needed a complete digital overhaul that communicated security and sophistication without sacrificing usability.",
      approach:
        "We started with a deep discovery phase — interviewing stakeholders, mapping user journeys, and auditing the competitive landscape. From there, we designed a modular system that scales across their product suite, with a focus on clarity, speed, and trust signals at every touchpoint.",
      sections: [
        {
          title: "Brand Identity",
          body: "We redefined Nova's visual language from the ground up. A restrained color palette built on deep navy and warm neutrals conveys stability, while custom iconography and refined typography bring a modern edge. Every element was designed to reinforce credibility at a glance.",
        },
        {
          title: "Platform Redesign",
          body: "The new platform prioritizes progressive disclosure — surfacing the right information at the right time. We simplified the onboarding flow from 12 steps to 4, introduced contextual tooltips, and designed a dashboard that adapts to each user's role and activity patterns.",
        },
        {
          title: "Design System",
          body: "To ensure consistency at scale, we built a comprehensive design system with over 120 components. This gives Nova's internal team the tools to ship new features quickly without compromising on quality or brand coherence.",
        },
      ],
      results: [
        "68% faster onboarding",
        "3.2x conversion increase",
        "40% reduction in support tickets",
        "$2.4M Series B raised post-launch",
      ],
    },
  },
  {
    id: "2",
    slug: "artisan-studio",
    title: "Artisan Studio",
    description:
      "Brand identity and e-commerce platform for a luxury furniture brand. We crafted a digital experience that matches the craftsmanship of their physical products.",
    category: "E-commerce",
    client: "Artisan Studio",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop",
    ],
    tags: ["Branding", "E-commerce", "Photography"],
    caseStudy: {
      challenge:
        "Artisan Studio's physical showrooms were renowned for their immersive experience, but their online presence told a different story. Their e-commerce site felt generic and failed to convey the craftsmanship behind each piece. They were losing high-intent buyers to competitors with stronger digital storytelling.",
      approach:
        "We treated every product page like a gallery exhibit. Through close collaboration with their artisans, we developed a visual system that highlights materials, process, and provenance — turning browsers into buyers who understand the value behind every piece.",
      sections: [
        {
          title: "Visual Storytelling",
          body: "Each product is presented through a cinematic sequence — from raw material to finished piece. We art-directed new photography that captures texture, scale, and detail in ways that make you want to reach through the screen.",
        },
        {
          title: "E-commerce Experience",
          body: "The storefront blends editorial content with commerce seamlessly. Curated collections, room visualizers, and a bespoke checkout flow reduce friction while maintaining the premium feel their customers expect.",
        },
      ],
      results: [
        "142% increase in average order value",
        "2.8x online revenue growth",
        "56% lower cart abandonment",
        "Featured in Design Week",
      ],
    },
  },
  {
    id: "3",
    slug: "pulse-health",
    title: "Pulse Health",
    description:
      "Mobile-first health tracking application with intuitive data visualization and personalized insights powered by AI.",
    category: "Mobile App",
    client: "Pulse Health Technologies",
    year: "2023",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=800&fit=crop",
    ],
    tags: ["Mobile", "UI/UX", "AI Integration"],
    link: "https://pulsehealth.io",
  },
  {
    id: "4",
    slug: "verde-sustainable",
    title: "Verde Sustainable",
    description:
      "Comprehensive digital strategy and website for an environmental consultancy, emphasizing their commitment to sustainability through design.",
    category: "Web Design",
    client: "Verde Consulting",
    year: "2023",
    thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518173946687-a4c036bc61af?w=1200&h=800&fit=crop",
    ],
    tags: ["Strategy", "Web Design", "Content"],
  },
  {
    id: "5",
    slug: "momentum-fitness",
    title: "Momentum Fitness",
    description:
      "Dynamic brand identity and membership platform for a boutique fitness chain, featuring workout tracking and community features.",
    category: "Branding",
    client: "Momentum Fitness Co.",
    year: "2023",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=800&fit=crop",
    ],
    tags: ["Branding", "Web App", "Mobile"],
  },
  {
    id: "6",
    slug: "stellar-architecture",
    title: "Stellar Architecture",
    description:
      "Portfolio website for an award-winning architecture firm, showcasing their projects through immersive visual storytelling.",
    category: "Web Design",
    client: "Stellar Architecture",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=800&fit=crop",
    ],
    tags: ["Web Design", "Photography", "Animation"],
    link: "https://stellararch.com",
  },
];

export const projectCategories = [
  "All",
  "Web Design",
  "E-commerce",
  "Mobile App",
  "Branding",
  "Pitch Decks",
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}
