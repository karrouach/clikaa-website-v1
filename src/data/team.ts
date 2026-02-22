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
    year: "2024",
    title: "Redefining the Design Partner",
    description:
      "Clikaa was launched with a single, clear mission: to give fast-moving startups access to top-tier strategic design without the slow timelines of traditional agencies.",
  },
  {
    year: "2025",
    title: "Integrating Growth & Design",
    description:
      "We expanded our core capabilities by integrating dedicated Growth Marketing. We realized that beautiful design is only half the equation—it needs to drive measurable business results and conversion.",
  },
  {
    year: "2025",
    title: "Launching \"Design-as-a-Service\"",
    description:
      "To better serve our fastest-growing clients, we introduced our ongoing design retainer. We shifted from one-off projects to acting as the dedicated, on-demand creative department for scaling businesses.",
  },
  {
    year: "Present",
    title: "Building for the Future",
    description:
      "Today, we are proud to partner with innovative founders across Tech, SaaS, and AI. From closing seed rounds with our pitch decks to scaling user bases with our web experiences, we are building the visual infrastructure for tomorrow's leaders.",
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
    title: "Design is a Growth Lever",
    description:
      "Every design decision we make is tied to a business outcome. We don't create art; we build visual infrastructure that drives revenue, closes rounds, and builds the authority your next stage demands.",
  },
  {
    title: "Complexity is a Communication Problem",
    description:
      "The most transformative AI and SaaS products fail because they can't explain themselves clearly. Our job is to take the 'black box' of your technology and make it undeniably clear—to investors, clients, and users.",
  },
  {
    title: "Speed is Non-Negotiable",
    description:
      "Your market isn't waiting. We are structured to move at the pace of a startup—with defined processes that eliminate the slow back-and-forth of traditional agencies without sacrificing quality.",
  },
  {
    title: "Consistency Signals Competence",
    description:
      "A fragmented brand creates micro-moments of doubt in the minds of your buyers. A systematic visual language signals market leadership—telling the world that your company is ready to compete at the highest level.",
  },
];
