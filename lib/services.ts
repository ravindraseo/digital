import type { Category, ServiceContent } from "./types";
import { seoHub, localSeo, gbp, gmbAhmedabad, gmbGujarat } from "./content/seo-local";
import { aiSeo, geo, aeo, technicalSeo, ecommerceSeo, seoAudit, linkBuilding } from "./content/seo-advanced";
import { social } from "./content/social";
import { ppcHub, shopping, display, youtube } from "./content/ppc-google";
import { metaAds, instagramAds, linkedinAds, amazonAds, whatsappMarketing } from "./content/ppc-social";
import { web } from "./content/web";
import { app, logo } from "./content/app-logo";
import { locations } from "./content/locations";
import { extras as extrasSeo } from "./content/extras";
import { extrasMarketing } from "./content/extras-marketing";
import { extrasWeb } from "./content/extras-web";
import { extrasFinal } from "./content/extras-final";
import type { Section } from "./types";

const extras: Record<string, Section[]> = {};
for (const map of [extrasSeo, extrasMarketing, extrasWeb, extrasFinal]) {
  for (const [raw, v] of Object.entries(map)) {
    const k = raw.split("#")[0]; // "#suffix" lets one file hold several entries per page
    extras[k] = [...(extras[k] ?? []), ...v];
  }
}

const seo: Category = {
  ...seoHub,
  slug: "seo",
  menuName: "SEO",
  children: [localSeo, gbp, gmbAhmedabad, gmbGujarat, aiSeo, geo, aeo, technicalSeo, ecommerceSeo, seoAudit, linkBuilding],
};

const ppc: Category = {
  ...ppcHub,
  slug: "ppc",
  menuName: "Performance Marketing",
  children: [shopping, display, youtube, metaAds, instagramAds, linkedinAds, amazonAds, whatsappMarketing],
};

/** Permalink = primary keyword, directly after the domain (e.g. /seo-company-in-delhi). */
export function keywordHref(keyword: string) {
  return "/" + keyword.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function prepare<T extends ServiceContent>(s: T): T & { href: string } {
  const href = keywordHref(s.keyword);
  const add = extras[href];
  return { ...s, href, sections: add ? [...s.sections, ...add] : s.sections };
}

export type Page = ServiceContent & { href: string };
export type CategoryPage = Omit<Category, "children"> & { href: string; children: Page[] };

export const categories: CategoryPage[] = [
  seo, social, ppc, web, app, logo,
].map((c) => ({ ...prepare(c), children: c.children.map((s) => prepare(s)) }));

export const locationPages = locations.map((l) => prepare(l));

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

/** The category a child page belongs to (for breadcrumbs). */
export function parentOf(href: string) {
  return categories.find((c) => c.children.some((s) => s.href === href));
}

export type FlatService = ServiceContent & { href: string; categoryName: string; categorySlug: string };

/** Every service page (category hubs included). */
export function allServices(): FlatService[] {
  return categories.flatMap((c) => {
    const hub: FlatService = { ...c, categoryName: c.menuName, categorySlug: c.slug };
    const kids = c.children.map((s) => ({ ...s, categoryName: c.menuName, categorySlug: c.slug }));
    return [hub, ...kids];
  });
}

/** Every content page including location pages. */
export function allPages(): FlatService[] {
  return [
    ...allServices(),
    ...locationPages.map((l) => ({ ...l, categoryName: "Locations", categorySlug: "locations" })),
  ];
}

export function findByHref(href: string) {
  return allPages().find((s) => s.href === href);
}

/** Regional GMB pages: linked from inner pages only, not from the home page, menu or footer. */
export const regionalHrefs = ["/gmb-expert-in-ahmedabad", "/gmb-services-in-gujarat"];

export type MenuColumn = { title: string; href: string; icon: Category["icon"]; items: { name: string; href: string }[] };

/** Mega-menu columns, mirroring the reference layout: SEO | Social | Performance | Web Development. */
export function menuColumns(): MenuColumn[] {
  const col = (slug: string, title: string, hubLabel: string, extra: { name: string; href: string }[] = []): MenuColumn => {
    const c = getCategory(slug)!;
    return {
      title,
      href: c.href,
      icon: c.icon,
      items: [
        { name: hubLabel, href: c.href },
        ...c.children
          .map((s) => ({ name: s.name, href: s.href }))
          .filter((i) => !regionalHrefs.includes(i.href)),
        ...extra,
      ],
    };
  };
  return [
    col("seo", "SEO", "SEO Services"),
    col("social-media-marketing", "Social Media", "Social Media Marketing"),
    col("ppc", "Performance Marketing", "PPC / Google Ads"),
    col("web-development", "Web Development", "Website Development", [
      { name: "App Development", href: "/mobile-app-development-company-in-delhi" },
      { name: "Logo Design", href: "/logo-designer-in-delhi" },
    ]),
  ];
}

/** Featured cards on the home page. */
export const featuredHrefs = [
  "/seo-company-in-delhi",
  "/local-seo-services-in-delhi",
  "/gmb-optimization-services-in-delhi",
  "/ai-seo-services-in-delhi",
  "/google-ads-agency-in-delhi",
  "/facebook-ads-agency-in-delhi",
  "/social-media-marketing-company-in-delhi",
  "/website-development-company-in-delhi",
];
