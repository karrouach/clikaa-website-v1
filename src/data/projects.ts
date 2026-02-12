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
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}
