import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "korgi-consulting",
    title: "Korgi Consulting",
    description:
      "A bold, tech-forward pitch deck that positions a global technology consultancy as the strategic transformation partner of choice.",
    category: "Presentation Design",
    client: "Korgi Consulting",
    year: "2024",
    thumbnail: "/projects/korgi/hero.png",
    images: [
      "/projects/korgi/hero.png",
      "/projects/korgi/cover.png",
    ],
    tags: ["Presentation Design", "Visual Storytelling", "Branding"],
    link: "https://korgiconsulting.com",
    caseStudy: {
      challenge:
        "Korgi Consulting had a clear value proposition -- but their existing materials weren't keeping pace with the calibre of clients they were pursuing. Competing for enterprise-level mandates means every touchpoint needs to communicate authority, clarity, and trust. They needed a pitch deck that could open boardroom doors and hold the room.",
      approach:
        "We started by mapping the full narrative arc of the deck -- from ethos and company overview through to service delivery and team expertise. Rather than designing slides in isolation, we built a cohesive visual system: a dark, tech-forward palette anchored in deep navy and teal, paired with bold typography and custom data visualisations that made complex service offerings immediately legible.\n\nEvery layout decision was deliberate. Information hierarchy was engineered so that a CFO scanning a slide and a CTO reading it line by line would both walk away with the same core message.",
      sections: [
        {
          title: "Visual Identity & Design System",
          body: "The deck's visual language draws on Korgi's positioning as a technology-first consultancy. Futuristic imagery, topographic background textures, and a restrained teal accent colour work together to signal innovation without sacrificing professionalism. Custom iconography and a consistent grid system across all nine sections give the deck the feel of a branded product, not a templated document.",
        },
        {
          title: "Narrative & Structure",
          body: "We structured the deck around Korgi's five-stage methodology -- Advisory & Strategy, Concept & Technical Design, Procurement & Vendor Management, Delivery, and Optimisation -- giving prospects a clear picture of what working with Korgi actually looks like. The result is a deck that sells the process as much as the outcome.",
        },
      ],
      results: [
        "9-Slide Deck",
        "5 Service Areas",
        "1 Design System",
        "Enterprise-Ready",
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
        "We treated every product page like a gallery exhibit. Through close collaboration with their artisans, we developed a visual system that highlights materials, process, and provenance, turning browsers into buyers who understand the value behind every piece.",
      sections: [
        {
          title: "Visual Storytelling",
          body: "Each product is presented through a cinematic sequence, from raw material to finished piece. We art-directed new photography that captures texture, scale, and detail in ways that make you want to reach through the screen.",
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
