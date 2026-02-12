import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-web-design-2024",
    title: "The Future of Web Design: Trends Shaping 2024 and Beyond",
    excerpt:
      "Explore the emerging trends that are redefining how we approach web design, from AI-powered interfaces to immersive 3D experiences.",
    content: `
The digital landscape is evolving at an unprecedented pace, and web design is at the forefront of this transformation. As we move through 2024, several key trends are emerging that will shape how we create and interact with digital experiences.

## AI-Powered Design

Artificial intelligence is no longer just a buzzword—it's becoming an integral part of the design process. From generative design tools to personalized user experiences, AI is helping designers work smarter and create more tailored solutions.

## Immersive 3D Experiences

WebGL and Three.js have matured significantly, making it easier than ever to create stunning 3D experiences directly in the browser. We're seeing more brands embrace these technologies to create memorable, interactive showcases.

## Micro-Interactions and Motion

Subtle animations and micro-interactions are becoming essential, not just decorative. They provide feedback, guide users, and add personality to digital products.

## Accessibility-First Design

Inclusive design is no longer optional. The best designers are building accessibility into their process from day one, ensuring digital experiences work for everyone.

## Sustainable Web Design

With growing awareness of digital carbon footprints, designers are optimizing for performance and efficiency, creating faster, lighter websites that are better for both users and the planet.

The future of web design is exciting, challenging, and full of opportunity. The key is staying curious, embracing change, and never losing sight of the humans we're designing for.
    `,
    author: "Alexandra Chen",
    date: "2024-01-15",
    category: "Design",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    readTime: "5 min read",
  },
  {
    id: "2",
    slug: "building-design-systems",
    title: "Building Design Systems That Scale: A Practical Guide",
    excerpt:
      "Learn how to create and maintain design systems that grow with your organization while maintaining consistency.",
    content: `
Design systems are the backbone of consistent, efficient digital product development. But building one that truly scales requires careful planning and ongoing commitment.

## Start With Principles, Not Components

Before diving into buttons and color palettes, establish the principles that will guide your system. What values does your brand embody? How should interactions feel? These foundations will inform every decision that follows.

## Document Everything

A design system is only as good as its documentation. Every component should include usage guidelines, accessibility requirements, and code examples.

## Build for Flexibility

The best design systems are opinionated enough to ensure consistency but flexible enough to accommodate edge cases. Strike this balance by defining core patterns while allowing for controlled variations.

## Establish Governance

Who can contribute to the system? How are changes proposed and approved? Clear governance prevents chaos while encouraging collaboration.

## Measure and Iterate

Track adoption, gather feedback, and continuously improve. A design system is never truly finished—it evolves alongside your products and organization.

Building a design system is a significant investment, but the payoff in efficiency, consistency, and scalability makes it worthwhile for any organization serious about digital products.
    `,
    author: "Sarah Kim",
    date: "2024-01-08",
    category: "Development",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop",
    readTime: "7 min read",
  },
  {
    id: "3",
    slug: "psychology-of-color",
    title: "The Psychology of Color in Digital Design",
    excerpt:
      "Understanding how color influences perception, emotion, and behavior in digital interfaces.",
    content: `
Color is one of the most powerful tools in a designer's arsenal. It influences mood, guides attention, and can even affect purchasing decisions. Understanding the psychology behind color choices is essential for effective design.

## Color and Emotion

Different colors evoke different emotional responses. Blue often conveys trust and stability, which is why it's popular in finance and healthcare. Red creates urgency and excitement, making it effective for calls to action.

## Cultural Considerations

Color meanings vary significantly across cultures. White represents purity in Western cultures but mourning in some Eastern cultures. Always research your target audience's cultural context.

## Accessibility and Contrast

Beautiful color choices mean nothing if users can't perceive them. Ensure sufficient contrast ratios and never rely on color alone to convey information.

## Creating Color Hierarchies

Strategic use of color creates visual hierarchy and guides users through your interface. Use bold colors sparingly for emphasis and neutral tones for less critical elements.

## Testing Your Palette

Always test your color choices with real users. What looks great in a design tool might not work in context, and individual perception varies more than you might expect.

Color is subjective, but understanding its psychological foundations helps us make more intentional, effective choices in our designs.
    `,
    author: "Sarah Kim",
    date: "2023-12-20",
    category: "Design",
    thumbnail: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&h=500&fit=crop",
    readTime: "6 min read",
  },
  {
    id: "4",
    slug: "performance-optimization-guide",
    title: "Web Performance Optimization: A Complete Guide",
    excerpt:
      "Master the techniques that make websites fast, from code splitting to image optimization.",
    content: `
Website performance directly impacts user experience, SEO, and conversion rates. A one-second delay can result in significant drops in engagement. Here's how to make your sites lightning fast.

## Core Web Vitals

Google's Core Web Vitals have become the standard for measuring performance. Focus on LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift).

## Image Optimization

Images often account for most of a page's weight. Use modern formats like WebP and AVIF, implement lazy loading, and serve appropriately sized images for each viewport.

## Code Splitting

Don't load all your JavaScript upfront. Split your code into smaller chunks and load only what's needed for the current view.

## Caching Strategies

Implement effective caching at multiple levels—browser, CDN, and server. A well-cached asset doesn't need to be downloaded again.

## Critical CSS

Inline critical styles and defer non-critical CSS to prevent render-blocking. This gets content on screen faster.

## Performance Budgets

Set and enforce performance budgets to prevent regression. Make performance a first-class concern in your development process.

Performance optimization is an ongoing process, not a one-time task. Regular monitoring and iteration are key to maintaining fast experiences.
    `,
    author: "Marcus Rodriguez",
    date: "2023-12-12",
    category: "Development",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    readTime: "8 min read",
  },
  {
    id: "5",
    slug: "user-research-methods",
    title: "User Research Methods Every Designer Should Know",
    excerpt:
      "A practical overview of research techniques that lead to better design decisions.",
    content: `
Great design is informed by understanding users. Here are the essential research methods that every designer should have in their toolkit.

## User Interviews

One-on-one conversations provide deep insights into user motivations, frustrations, and mental models. Prepare open-ended questions and listen more than you speak.

## Surveys

Surveys help you gather quantitative data from larger populations. Keep them focused and be mindful of leading questions that might bias responses.

## Usability Testing

Watch real users interact with your product to identify friction points and opportunities for improvement. Even testing with five users can reveal most usability issues.

## Card Sorting

Understand how users categorize information to inform your information architecture. Both open and closed card sorts have their place.

## A/B Testing

Compare different design approaches with real traffic to make data-informed decisions. Just ensure you're testing meaningful differences with adequate sample sizes.

## Analytics Review

Quantitative data from analytics can reveal what users do, even if it can't tell you why. Use it to identify patterns and prioritize research efforts.

The best research combines multiple methods, triangulating insights to form a complete picture of user needs and behaviors.
    `,
    author: "David Park",
    date: "2023-12-05",
    category: "Research",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    readTime: "6 min read",
  },
  {
    id: "6",
    slug: "brand-storytelling-digital",
    title: "Brand Storytelling in the Digital Age",
    excerpt:
      "How to craft compelling brand narratives that resonate across digital touchpoints.",
    content: `
In a crowded digital landscape, storytelling is what separates memorable brands from forgettable ones. Here's how to craft narratives that resonate.

## Find Your Core Story

Every brand has a story—the 'why' behind what you do. Identify yours and make it the foundation of all your communications.

## Know Your Audience

Effective storytelling requires understanding who you're speaking to. What do they care about? What challenges do they face? How does your brand fit into their lives?

## Show, Don't Tell

Digital media offers rich opportunities to demonstrate rather than declare. Use visuals, interactions, and experiences to bring your story to life.

## Consistency Across Channels

Your story should adapt to different channels while maintaining its core essence. A social post and a product page can tell the same story in different ways.

## Create Emotional Connections

Facts inform, but emotions drive action. Find the human element in your story and don't be afraid to be vulnerable.

## Invite Participation

The best brand stories aren't monologues—they're conversations. Create opportunities for your audience to become part of your narrative.

Storytelling isn't just for marketers. When design, development, and strategy align around a compelling narrative, the result is a cohesive, memorable brand experience.
    `,
    author: "James Thompson",
    date: "2023-11-28",
    category: "Strategy",
    thumbnail: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=500&fit=crop",
    readTime: "5 min read",
  },
];

export const blogCategories = ["All", "Design", "Development", "Research", "Strategy"] as const;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPostBySlug(currentSlug);
  if (!current) return blogPosts.slice(0, limit);

  return blogPosts
    .filter((p) => p.slug !== currentSlug)
    .filter((p) => p.category === current.category)
    .slice(0, limit);
}
