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
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export function waLink(message = "Hi Digital Ravindra, I'd like to grow my business online.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function absolute(path = "/") {
  return `${site.url}${path === "/" ? "" : path}`;
}
