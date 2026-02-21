"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { smoothEasing } from "@/lib/animations";

export function BlogGrid() {
  return (
    <section className="section-padding">
      <Container>
        <div className="mb-16">
          <TextReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-muted">
              Insights & Ideas
            </span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h1 className="mt-2 text-display-lg font-bold leading-tight">Blog</h1>
          </TextReveal>
        </div>

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.id}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

interface BlogCardProps {
  post: (typeof blogPosts)[0];
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <motion.article
        className="h-full rounded-2xl border border-border bg-card overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: smoothEasing }}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: smoothEasing }}
          >
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        </div>
        <div className="p-6">
          <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{post.category}</span>
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-foreground/60"
              >
                {tag}
              </span>
            ))}
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>
          <h2 className="mb-3 text-xl font-semibold line-clamp-2 group-hover:text-muted transition-colors">
            {post.title}
          </h2>
          <p className="text-muted line-clamp-2">{post.excerpt}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-muted">{formatDate(post.date)}</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
