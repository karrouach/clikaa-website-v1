"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";

interface ArticleContentProps {
  post: BlogPost;
}

export function ArticleContent({ post }: ArticleContentProps) {
  return (
    <article>
      <Container size="narrow" className="section-padding">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <TextReveal>
          <div className="flex items-center gap-3 text-sm text-muted">
            <span>{post.category}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>
        </TextReveal>

        <TextReveal delay={0.1}>
          <h1 className="mt-4 text-display-sm font-bold">{post.title}</h1>
        </TextReveal>

        <RevealOnScroll delay={0.2}>
          <div className="mt-6 flex items-center gap-4">
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-sm text-muted">{formatDate(post.date)}</p>
            </div>
          </div>
        </RevealOnScroll>
      </Container>

      <ImageReveal
        src={post.thumbnail}
        alt={post.title}
        width={1400}
        height={600}
        className="w-full object-cover"
        containerClassName="w-full max-h-[60vh]"
      />

      <Container size="narrow" className="py-16">
        <RevealOnScroll>
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-semibold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:text-muted prose-p:leading-relaxed
              prose-a:text-foreground prose-a:no-underline prose-a:border-b prose-a:border-foreground
              prose-strong:text-foreground
              prose-ul:text-muted prose-ol:text-muted
              prose-li:marker:text-muted"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </RevealOnScroll>
      </Container>
    </article>
  );
}

function formatContent(content: string): string {
  return content
    .split("\n")
    .map((line) => {
      line = line.trim();
      if (!line) return "";
      if (line.startsWith("## ")) {
        return `<h2>${line.substring(3)}</h2>`;
      }
      if (line.startsWith("- ")) {
        return `<li>${line.substring(2)}</li>`;
      }
      return `<p>${line}</p>`;
    })
    .join("\n")
    .replace(/<li>/g, "<ul><li>")
    .replace(/<\/li>\n(?!<li>)/g, "</li></ul>\n");
}
