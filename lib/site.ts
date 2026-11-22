/**
 * Single source of truth for business details.
 * Edit these values and every page, the footer and all schema update together.
 */
export const site = {
  name: "Digital Ravindra",
  tagline: "Grow | Rank | Convert",
  url: "https://digitalravindra.in",
  founder: "Ravindra",
  phone: "+91 82828 02150",
  phoneRaw: "+918282802150",
  whatsapp: "918282802150",
  email: "info@digitalravindra.com",
  // Must match the Google Business Profile exactly (same NAP everywhere helps local ranking).
  address: {
    street: "C-142, Block C 1, New Ashok Nagar",
    city: "New Delhi",
    region: "Delhi",
    postalCode: "110096",
    country: "IN",
  },
  mapsUrl: "https://maps.google.com/?cid=6585878373871248573",
  serviceArea: [
    "New Ashok Nagar",
    "Mayur Vihar",
    "Laxmi Nagar",
    "Preet Vihar",
    "East Delhi",
    "Noida",
    "Ghaziabad",
    "Delhi NCR",
  ],
  hours: "Mon–Sat, 10:00 AM – 7:00 PM",
  // Founder background (E-E-A-T). Keep these exactly as the founder states them.
  founderProfile: {
    education: "BSc IT",
    graduated: 2014,
    experienceYears: 8,
    skills: ["SEO", "Local SEO", "Google Business Profile", "Google Ads", "Meta Ads", "WordPress websites"],
  },
  // Paste the full profile URLs here (e.g. https://www.instagram.com/yourhandle). Empty ones are hidden
  // from the footer and left out of schema sameAs, because generic links confuse Google and AI tools.
  socials: {
    facebook: "",
    instagram: "",
    linkedin: "",
  } as Record<"facebook" | "instagram" | "linkedin", string>,
} as const;

/** Shared Open Graph image so every page (not only the home page) gets a share preview. */
export const ogImages = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Digital Ravindra, digital marketing agency in Delhi" }];

export function waLink(message = "Hi Digital Ravindra, I'd like to grow my business online.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function absolute(path = "/") {
  return `${site.url}${path === "/" ? "" : path}`;
}
