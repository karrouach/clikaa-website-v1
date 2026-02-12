export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  client: string;
  year: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  thumbnail: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
