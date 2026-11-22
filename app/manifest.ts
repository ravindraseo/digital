import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Digital Ravindra",
    short_name: "Digital Ravindra",
    description: "Digital marketing, SEO, websites and apps for Delhi NCR businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a192f",
    icons: [
      { src: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
      { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
  };
}
