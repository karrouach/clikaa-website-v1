import { Service, ProcessStep } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    title: "Presentation & Pitch Decks",
    description:
      "We craft persuasive pitch decks and sales presentations that help you close rounds and win clients. We turn data into narratives that investors love.",
    icon: "Layers",
    features: [
      "Investor pitch decks",
      "Sales presentations",
      "Data visualization",
      "Narrative design",
      "Slide design",
      "Presentation coaching",
    ],
  },
  {
    id: "2",
    title: "Brand Strategy & Identity",
    description:
      "We build scalable brand systems, not just logos. We ensure your visual identity creates trust and authority across every touchpoint.",
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
    title: "Design Partnership",
    description:
      "Your On-Demand Design Team. For growing businesses that need consistent, high-tier design without the overhead of a full-time hire. We act as your external creative department, providing ongoing support for everything from daily marketing assets to complex product updates.",
    icon: "Target",
    features: [
      "Dedicated design team",
      "Marketing assets",
      "Product design updates",
      "Brand consistency",
      "Monthly retainers",
      "Priority support",
    ],
  },
  {
    id: "4",
    title: "Web Design & Development",
    description:
      "High-performance websites built for conversion. We combine stunning UI/UX with solid engineering to turn visitors into users.",
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
    id: "5",
    title: "Growth Creative (Ads & Social)",
    description:
      "Stop the scroll with high-impact creatives. We design ad sets and social assets optimized for clicks, engagement, and ROI.",
    icon: "ShoppingCart",
    features: [
      "Ad creative design",
      "Social media assets",
      "Campaign visuals",
      "A/B test variants",
      "Platform optimization",
      "Performance creative",
    ],
  },
  {
    id: "6",
    title: "Motion & Animation",
    description:
      "Bring your product to life. We use motion graphics to explain complex tech concepts and add a layer of polish to your brand.",
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
