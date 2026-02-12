import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleContent, RelatedPosts } from "@/components/sections/blog";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);

  return (
    <>
      <ArticleContent post={post} />
      <RelatedPosts posts={relatedPosts} />
    </>
  );
}
