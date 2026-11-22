import { site, absolute } from "./site";
import type { FAQ } from "./types";

const orgId = `${site.url}/#organization`;
const founderId = `${site.url}/#founder`;
const stripLinks = (t: string) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

/** Date shown on pages and used as dateModified. Update when content is revised. */
export const CONTENT_UPDATED = { iso: "2026-11-22", label: "November 2026" };

export function webPageSchema(p: { title: string; description: string; href: string; about?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absolute(p.href)}#webpage`,
    url: absolute(p.href),
    name: p.title,
    description: p.description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${site.url}/#website` },
    about: p.about ? { "@type": "Thing", name: p.about } : undefined,
    dateModified: CONTENT_UPDATED.iso,
    author: { "@type": "Person", "@id": founderId, name: site.founder, jobTitle: "Founder", worksFor: { "@id": orgId } },
    publisher: { "@id": orgId },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": orgId,
        name: site.name,
        slogan: site.tagline,
        url: site.url,
        logo: absolute("/icon-512.png"),
        image: absolute("/opengraph-image"),
        telephone: site.phoneRaw,
        email: site.email,
        priceRange: "₹₹",
        founder: { "@type": "Person", "@id": founderId, name: site.founder, image: absolute("/images/founder.jpg") },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode || undefined,
          addressCountry: site.address.country,
        },
        hasMap: site.mapsUrl,
        areaServed: [
          ...site.serviceArea.map((c) => ({ "@type": "Place", name: c })),
          { "@type": "City", name: "Ahmedabad" },
          { "@type": "Country", name: "India" },
        ],
        knowsAbout: [
          "Search Engine Optimization",
          "Local SEO",
          "Google Business Profile",
          "Google Ads",
          "Meta Ads",
          "WhatsApp Marketing",
          "Website Development",
          "WordPress",
          "Shopify",
          "Mobile App Development",
          "Logo Design",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phoneRaw,
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: Object.values(site.socials),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": orgId },
        inLanguage: "en-IN",
      },
    ],
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripLinks(f.a) },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absolute(it.href),
    })),
  };
}

export function serviceSchema(s: { name: string; description: string; href: string; areas?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    url: absolute(s.href),
    provider: { "@id": orgId },
    areaServed: (s.areas ?? ["Delhi", "Noida", "Delhi NCR"]).map((name) => ({ "@type": "Place", name })),
  };
}
