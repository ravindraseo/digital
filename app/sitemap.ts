import type { MetadataRoute } from "next";
import { allPages } from "@/lib/services";
import { absolute } from "@/lib/site";
import { CONTENT_UPDATED } from "@/lib/schema";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy-policy", priority: 0.2 },
    { path: "/blog", priority: 0.6 },
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6 })),
    ...allPages().map((s) => ({ path: s.href, priority: s.href.split("/").length === 2 ? 0.9 : 0.8 })),
  ];
  return pages.map((p) => ({
    url: absolute(p.path),
    lastModified: CONTENT_UPDATED.iso,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
