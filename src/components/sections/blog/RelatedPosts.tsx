"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";
import { smoothEasing } from "@/lib/animations";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="section-padding bg-card">
      <Container>
        <div className="mb-12">
          <TextReveal>
            <h2 className="text-display-sm font-bold">Related Articles</h2>
          </TextReveal>
        </div>

        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.id}>
              <RelatedPostCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

interface RelatedPostCardProps {
  post: BlogPost;
}

function RelatedPostCard({ post }: RelatedPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <motion.article
        className="h-full"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: smoothEasing }}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
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
        <div className="mt-4">
          <div className="mb-2 text-sm text-muted">{post.category}</div>
          <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-muted transition-colors">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-muted">{formatDate(post.date)}</p>
        </div>
      </motion.article>
    </Link>
  );
}
