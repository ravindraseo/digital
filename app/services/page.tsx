import type { Metadata } from "next";
import { ogImages } from "@/lib/site";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Breadcrumbs, CtaBand, FaqList, JsonLd } from "@/components/Sections";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { categories, regionalHrefs } from "@/lib/services";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: "Our Services: SEO, Ads, Websites & Apps",
  description:
    "All Digital Ravindra services for Delhi NCR: SEO, local SEO, GMB, Meta & Google Ads, WhatsApp marketing, websites, Shopify, WordPress, apps and logos.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", images: ogImages },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

const faqs: FAQ[] = [
  {
    q: "Can I hire you for just one service?",
    a: "Of course. Many clients start with a single service — often a Google Business Profile fix or a new website — and add others once they see results.",
  },
  {
    q: "Do you offer packages that combine SEO, ads and a website?",
    a: "Yes. We put together combined plans when it makes sense, priced around your goals and budget rather than fixed bundles you have to fit into.",
  },
  {
    q: "How do I know which services I actually need?",
    a: "Book a free audit. We look at where your customers come from today and recommend the one or two services likely to make the biggest difference first.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[webPageSchema({ title: "Our Services: SEO, Ads, Websites & Apps", description: "All Digital Ravindra services for Delhi NCR: SEO, local SEO, GMB, Meta & Google Ads, WhatsApp marketing, websites, Shopify, WordPress, apps and logos.", href: "/services", about: "Digital marketing services", type: "CollectionPage" }), breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow eyebrow--light">What we do</span>
          <h1>Digital marketing, SEO, web and app services for Delhi NCR businesses</h1>
          <p className="lead">
            Five areas of expertise, one goal: more of the right customers finding you and choosing you. Explore each
            category below — every service has its own page with details and FAQs.
          </p>
        </div>
      </section>

      {categories.map((c, i) => (
        <section key={c.slug} className={`section${i % 2 ? " section--tint" : ""}`}>
          <div className="container">
            <div className="section-head section-head--left">
              <span className="eyebrow">{c.eyebrow}</span>
              <h2>
                <Link href={c.href} style={{ color: "inherit", textDecoration: "none" }}>
                  {c.name}
                </Link>
              </h2>
              <p>{c.lead}</p>
            </div>
            <div className="service-grid">
              {[{ ...c, label: "Overview" }, ...c.children.map((s) => ({ ...s, label: c.name })).filter((s) => !regionalHrefs.includes(s.href))].map(
                (s) => (
                  <Link key={s.href} href={s.href} className="service-card">
                    <span className="service-icon">
                      <Icon name={s.icon} />
                    </span>
                    <span className="service-cat">{s.label}</span>
                    <h3>{s.name}</h3>
                    <p>{s.cardText}</p>
                    <span className="service-more">
                      Learn more <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>
      ))}

      <FaqList faqs={faqs} />
      <CtaBand />
    </>
  );
}
