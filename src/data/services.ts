import { Service, ProcessStep } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    title: "Web Design & Development",
    description:
      "We create stunning, high-performance websites that captivate users and drive conversions. From concept to deployment, we handle every aspect of your digital presence.",
    icon: "Monitor",
    features: [
      "Custom website design",
      "Responsive development",
      "CMS integration",
      "Performance optimization",
      "SEO best practices",
      "Accessibility compliance",
    ],
  },
  {
    id: "2",
    title: "Brand Identity",
    description:
      "We craft memorable brand identities that resonate with your audience. Our holistic approach ensures consistency across all touchpoints.",
    icon: "Palette",
    features: [
      "Logo design",
      "Visual identity systems",
      "Brand guidelines",
      "Typography selection",
      "Color strategy",
      "Brand messaging",
    ],
  },
  {
    id: "3",
    title: "UI/UX Design",
    description:
      "User-centered design that balances aesthetics with functionality. We create intuitive interfaces that delight users and achieve business goals.",
    icon: "Layers",
    features: [
      "User research",
      "Wireframing",
      "Prototyping",
      "Usability testing",
      "Design systems",
      "Interaction design",
    ],
  },
  {
    id: "4",
    title: "E-commerce Solutions",
    description:
      "End-to-end e-commerce experiences that convert browsers into buyers. We build scalable online stores with seamless checkout flows.",
    icon: "ShoppingCart",
    features: [
      "Custom storefronts",
      "Payment integration",
      "Inventory management",
      "Order processing",
      "Analytics & reporting",
      "Mobile commerce",
    ],
  },
  {
    id: "5",
    title: "Digital Strategy",
    description:
      "Data-driven strategies that align your digital presence with business objectives. We help you reach the right audience at the right time.",
    icon: "Target",
    features: [
      "Market research",
      "Competitor analysis",
      "Content strategy",
      "SEO & SEM",
      "Social media planning",
      "Performance tracking",
    ],
  },
  {
    id: "6",
    title: "Motion & Animation",
    description:
      "Bring your brand to life with captivating motion design. From micro-interactions to full animations, we add movement that engages.",
    icon: "Sparkles",
    features: [
      "Micro-interactions",
      "Loading animations",
      "Explainer videos",
      "Social media content",
      "Product animations",
      "Brand motion guidelines",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into understanding your business, goals, and target audience through research and collaborative workshops.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Based on our findings, we develop a comprehensive strategy that outlines the approach, timeline, and deliverables.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our designers craft visually stunning concepts that align with your brand while prioritizing user experience.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We bring designs to life with clean, efficient code, ensuring performance, accessibility, and scalability.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "After thorough testing and optimization, we deploy your project and ensure a smooth transition to production.",
  },
  {
    number: "06",
    title: "Support",
    description:
      "Our relationship continues post-launch with ongoing support, maintenance, and optimization services.",
  },
];
