export type IconName =
  | "search"
  | "pin"
  | "store"
  | "megaphone"
  | "meta"
  | "google"
  | "whatsapp"
  | "social"
  | "code"
  | "wordpress"
  | "bag"
  | "cart"
  | "phone"
  | "call"
  | "pen"
  | "chart"
  | "bolt"
  | "shield"
  | "users"
  | "target"
  | "spark"
  | "ai"
  | "link"
  | "video"
  | "star"
  | "wrench"
  | "briefcase";

export type FAQ = { q: string; a: string };

/** Body strings support inline links: [anchor text](/internal-path) or [text](https://external). */
export type Section = {
  h2: string;
  body: string[];
  list?: string[];
};

export type Step = { title: string; text: string };

export type Highlight = { title: string; text: string; icon?: IconName };

export type Table = { caption: string; head: string[]; rows: string[][] };

export type ServiceContent = {
  slug: string;
  /** Set in lib/services.ts from the keyword: /<primary-keyword>. */
  href?: string;
  name: string; // short label used in nav & cards
  icon: IconName;
  cardText: string;
  keyword: string; // primary target keyword
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  /** AEO: a direct 40–60 word answer to the page's core question. */
  quickAnswer: { q: string; a: string };
  /** GEO: short, quotable facts an AI summary can lift. */
  takeaways: string[];
  intro: string[];
  highlights: Highlight[];
  sections: Section[];
  table?: Table;
  process: Step[];
  faqs: FAQ[];
  related: string[]; // internal paths
  external: { label: string; url: string }; // one authoritative outbound reference
  areas?: string[]; // areaServed override for schema
};

export type Category = ServiceContent & {
  menuName: string; // column title in the mega menu
  children: ServiceContent[];
};
