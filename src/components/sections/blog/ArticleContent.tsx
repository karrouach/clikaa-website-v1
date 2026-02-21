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
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{post.category}</span>
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>
        </TextReveal>

        <TextReveal delay={0.1}>
          <h1 className="mt-4 text-display-sm font-bold leading-tight">{post.title}</h1>
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
            className="max-w-none
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:text-foreground
              [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:pb-4 [&>h2]:border-b [&>h2]:border-border
              [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-3
              [&>p]:text-muted [&>p]:leading-relaxed [&>p]:mt-5 [&>p]:text-base md:[&>p]:text-lg
              [&>ul]:mt-5 [&>ul]:space-y-3 [&>ul]:pl-0
              [&>ul>li]:text-muted [&>ul>li]:leading-relaxed [&>ul>li]:pl-5 [&>ul>li]:relative
              [&>ul>li]:before:content-['–'] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:text-foreground/40
              [&>strong]:text-foreground [&>strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </RevealOnScroll>
      </Container>
    </article>
  );
}

function parseBold(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

function formatContent(content: string): string {
  const lines = content.split("\n");
  const result: string[] = [];
  let inList = false;

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) {
      if (inList) {
        result.push("</ul>");
        inList = false;
      }
      continue;
    }

    if (line.startsWith("## ")) {
      if (inList) { result.push("</ul>"); inList = false; }
      result.push(`<h2>${parseBold(line.substring(3))}</h2>`);
      continue;
    }

    if (line.startsWith("### ")) {
      if (inList) { result.push("</ul>"); inList = false; }
      result.push(`<h3>${parseBold(line.substring(4))}</h3>`);
      continue;
    }

    if (line.startsWith("- ")) {
      if (!inList) { result.push("<ul>"); inList = true; }
      result.push(`<li>${parseBold(line.substring(2))}</li>`);
      continue;
    }

    if (inList) { result.push("</ul>"); inList = false; }
    result.push(`<p>${parseBold(line)}</p>`);
  }

  if (inList) result.push("</ul>");
  return result.join("\n");
}
