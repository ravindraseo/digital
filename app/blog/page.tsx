import type { Metadata } from "next";
import { BlogCards } from "@/components/BlogCards";
import { Breadcrumbs, CtaBand, JsonLd } from "@/components/Sections";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SEO & Google Business Profile Guides",
  description:
    "Practical guides on SEO, Google Business Profile, ads and websites for small businesses in Delhi NCR and across India, from the Digital Ravindra team.",
  alternates: { canonical: "/blog" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow eyebrow--light">Blog</span>
          <h1>Guides for growing your business online</h1>
          <p className="lead">
            Clear, practical answers about SEO, Google Business Profile, ads and websites, written from the work we do for
            clients every day.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <BlogCards />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
