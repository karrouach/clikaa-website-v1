import { Metadata } from "next";
import { BlogGrid } from "@/components/sections/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tutorials, and thoughts on design, development, and digital strategy.",
};

export default function BlogPage() {
  return <BlogGrid />;
}
