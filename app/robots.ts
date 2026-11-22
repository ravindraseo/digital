import type { MetadataRoute } from "next";
import { absolute } from "@/lib/site";

// GEO: name the AI search and answer crawlers explicitly so it is clear they are welcome.
const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Claude-SearchBot", "Google-Extended", "Applebot-Extended", "Bingbot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...aiBots.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: absolute("/sitemap.xml"),
    host: absolute("/"),
  };
}
