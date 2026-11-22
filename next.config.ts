import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // 90 is used for the founder photo so the face stays sharp.
  images: { qualities: [75, 90] },
  async redirects() {
    return [
      // About and Contact moved to /about-us and /contact-us (Nov 2026)
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      // Old nested service URLs -> keyword permalinks
      { source: "/social-media-marketing/online-reputation-management", destination: "/online-reputation-management-company-in-delhi", permanent: true },
      { source: "/web-development/ecommerce-website-development", destination: "/ecommerce-website-development-company-in-delhi", permanent: true },
      { source: "/social-media-marketing/influencer-marketing", destination: "/influencer-marketing-agency-in-delhi", permanent: true },
      { source: "/social-media-marketing/content-creation", destination: "/content-creation-agency-in-delhi", permanent: true },
      { source: "/web-development/woocommerce-development", destination: "/woocommerce-development-company", permanent: true },
      { source: "/web-development/wordpress-development", destination: "/wordpress-development-company-in-delhi", permanent: true },
      { source: "/web-development/shopify-development", destination: "/shopify-development-company-in-delhi", permanent: true },
      { source: "/web-development/laravel-development", destination: "/laravel-development-company-in-delhi", permanent: true },
      { source: "/web-development/website-maintenance", destination: "/website-maintenance-services-in-delhi", permanent: true },
      { source: "/seo/generative-engine-optimization", destination: "/generative-engine-optimization-services", permanent: true },
      { source: "/web-development/wix-development", destination: "/wix-website-designer", permanent: true },
      { source: "/seo/answer-engine-optimization", destination: "/answer-engine-optimization-agency", permanent: true },
      { source: "/web-development/website-design", destination: "/website-designing-company-in-delhi", permanent: true },
      { source: "/seo/google-business-profile", destination: "/gmb-optimization-services-in-delhi", permanent: true },
      { source: "/seo/gmb-expert-ahmedabad", destination: "/gmb-expert-in-ahmedabad", permanent: true },
      { source: "/seo/gmb-services-gujarat", destination: "/gmb-services-in-gujarat", permanent: true },
      { source: "/ppc/google-shopping-ads", destination: "/google-shopping-ads-agency", permanent: true },
      { source: "/social-media-marketing", destination: "/social-media-marketing-company-in-delhi", permanent: true },
      { source: "/ppc/google-display-ads", destination: "/google-display-ads-services", permanent: true },
      { source: "/ppc/whatsapp-marketing", destination: "/whatsapp-marketing-company-in-delhi", permanent: true },
      { source: "/seo/technical-seo", destination: "/technical-seo-services-in-delhi", permanent: true },
      { source: "/seo/ecommerce-seo", destination: "/ecommerce-seo-services", permanent: true },
      { source: "/seo/link-building", destination: "/link-building-services", permanent: true },
      { source: "/ppc/instagram-ads", destination: "/instagram-ads-agency-in-delhi", permanent: true },
      { source: "/ppc/linkedin-ads", destination: "/linkedin-marketing-agency", permanent: true },
      { source: "/ppc/youtube-ads", destination: "/youtube-marketing-agency-in-delhi", permanent: true },
      { source: "/web-development", destination: "/website-development-company-in-delhi", permanent: true },
      { source: "/app-development", destination: "/mobile-app-development-company-in-delhi", permanent: true },
      { source: "/ppc/amazon-ads", destination: "/amazon-ads-agency-in-india", permanent: true },
      { source: "/seo/local-seo", destination: "/local-seo-services-in-delhi", permanent: true },
      { source: "/seo/seo-audit", destination: "/seo-audit-services-in-delhi", permanent: true },
      { source: "/ppc/meta-ads", destination: "/facebook-ads-agency-in-delhi", permanent: true },
      { source: "/logo-design", destination: "/logo-designer-in-delhi", permanent: true },
      { source: "/seo/ai-seo", destination: "/ai-seo-services-in-delhi", permanent: true },
      { source: "/seo", destination: "/seo-company-in-delhi", permanent: true },
      { source: "/ppc", destination: "/google-ads-agency-in-delhi", permanent: true },
      { source: "/digital-marketing-agency-gujarat", destination: "/digital-marketing-company-in-ahmedabad", permanent: true },
      { source: "/digital-marketing-agency-ahmedabad", destination: "/digital-marketing-company-in-ahmedabad", permanent: true },
      { source: "/seo-company-in-gurgaon", destination: "/seo-company-in-gurugram", permanent: true },
    ];
  },
};

export default nextConfig;
