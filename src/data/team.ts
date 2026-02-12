import { TeamMember, TimelineItem, Testimonial } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alexandra Chen",
    role: "Founder & Creative Director",
    bio: "With over 15 years of experience in digital design, Alex leads our creative vision and ensures every project pushes boundaries while solving real problems.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    social: {
      twitter: "https://twitter.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
    },
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    role: "Technical Director",
    bio: "Marcus brings a decade of full-stack development expertise, leading our engineering team to build performant, scalable solutions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    social: {
      twitter: "https://twitter.com/marcusdev",
      linkedin: "https://linkedin.com/in/marcusrodriguez",
    },
  },
  {
    id: "3",
    name: "Sarah Kim",
    role: "Head of Design",
    bio: "Sarah's passion for user-centered design and attention to detail ensures every interface we create is both beautiful and functional.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/sarahkim",
    },
  },
  {
    id: "4",
    name: "James Thompson",
    role: "Strategy Lead",
    bio: "James combines analytical thinking with creative problem-solving to develop strategies that drive measurable business results.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    social: {
      twitter: "https://twitter.com/jamesthompson",
      linkedin: "https://linkedin.com/in/jamesthompson",
    },
  },
  {
    id: "5",
    name: "Emily Nakamura",
    role: "Senior Developer",
    bio: "Emily specializes in front-end development and animation, bringing designs to life with fluid, performant interactions.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    social: {
      twitter: "https://twitter.com/emilycodes",
    },
  },
  {
    id: "6",
    name: "David Park",
    role: "UX Researcher",
    bio: "David leads our research initiatives, ensuring every design decision is backed by real user insights and data.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    social: {
      linkedin: "https://linkedin.com/in/davidpark",
    },
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "Clikaa was founded with a simple mission: create digital experiences that matter. Starting as a two-person team, we focused on quality over quantity.",
  },
  {
    year: "2019",
    title: "First Major Client",
    description:
      "Landed our first enterprise client, proving that a small team could deliver big results. This project set the standard for everything that followed.",
  },
  {
    year: "2020",
    title: "Remote-First Transition",
    description:
      "Embraced remote work fully, allowing us to attract talent from around the world and serve clients globally without geographical limitations.",
  },
  {
    year: "2021",
    title: "Team Expansion",
    description:
      "Grew to a team of 15 specialists, adding dedicated strategy, research, and motion design capabilities to our service offerings.",
  },
  {
    year: "2022",
    title: "Award Recognition",
    description:
      "Received multiple industry awards for our innovative approach to digital design, including recognition from Awwwards and CSS Design Awards.",
  },
  {
    year: "2023",
    title: "New Horizons",
    description:
      "Expanded into AI-powered solutions and immersive experiences, staying at the forefront of digital innovation while maintaining our human-centered approach.",
  },
  {
    year: "2024",
    title: "Today & Beyond",
    description:
      "Continuing to push boundaries with a talented team of 25+ creatives, serving clients across 15 countries with the same passion we started with.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Clikaa transformed our digital presence completely. Their attention to detail and creative approach exceeded all our expectations.",
    author: "Jennifer Walsh",
    role: "CEO",
    company: "Nova Financial",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    quote:
      "Working with Clikaa was a game-changer. They didn't just design a website; they helped us reimagine our entire brand experience.",
    author: "Michael Torres",
    role: "Founder",
    company: "Artisan Studio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    quote:
      "The team's ability to translate our complex requirements into an intuitive, beautiful interface was remarkable. Highly recommended.",
    author: "Sarah Chen",
    role: "Product Lead",
    company: "Pulse Health",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: "4",
    quote:
      "Professional, creative, and incredibly responsive. Clikaa delivered beyond what we imagined possible within our timeline.",
    author: "David Martinez",
    role: "Marketing Director",
    company: "Verde Consulting",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

export const values = [
  {
    title: "Quality Over Quantity",
    description:
      "We take on fewer projects to ensure each one gets the attention it deserves. No shortcuts, no compromises.",
  },
  {
    title: "Human-Centered",
    description:
      "Every decision starts with understanding people. We design for humans first, algorithms second.",
  },
  {
    title: "Continuous Learning",
    description:
      "The digital landscape evolves constantly. We stay curious and embrace new technologies and methods.",
  },
  {
    title: "Transparent Partnership",
    description:
      "We believe in open communication and collaboration. Clients are partners in the creative process.",
  },
];
