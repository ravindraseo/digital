import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { Breadcrumbs, FaqList, JsonLd, ServicesGrid } from "@/components/Sections";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { allServices } from "@/lib/services";
import { site, waLink } from "@/lib/site";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: "Contact Us — Free SEO & Marketing Audit",
  description:
    "Contact Digital Ravindra in New Ashok Nagar, East Delhi for a free audit of your website, Google Business Profile and marketing. Call, WhatsApp or visit us.",
  alternates: { canonical: "/contact" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

const faqs: FAQ[] = [
  { q: "How quickly will you reply?", a: `We aim to reply to every WhatsApp message and call during working hours (${site.hours}) the same day.` },
  { q: "Is the first consultation really free?", a: "Yes. The first call and the basic audit are free, with no obligation to hire us." },
  { q: "What should I share before the call?", a: "Your website or Google listing link, the services you sell most, and the area you want customers from. That’s enough to start." },
];

export default function ContactPage() {
  const services = allServices().map((s) => s.name);

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow eyebrow--light">Contact</span>
          <h1>Let’s talk about growing your business</h1>
          <p className="lead">
            Message us on WhatsApp, call, or fill in the form. A real person reads every enquiry — usually within a few
            hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-cards">
            <a className="contact-card" href={waLink()} target="_blank" rel="noopener">
              <span className="service-icon"><Icon name="whatsapp" /></span>
              <span><strong>WhatsApp</strong><span>Fastest way to reach us</span></span>
            </a>
            <a className="contact-card" href={`tel:${site.phoneRaw}`}>
              <span className="service-icon"><Icon name="call" /></span>
              <span><strong>{site.phone}</strong><span>{site.hours}</span></span>
            </a>
            <a className="contact-card" href={`mailto:${site.email}`}>
              <span className="service-icon"><Icon name="pen" /></span>
              <span><strong>{site.email}</strong><span>For proposals and documents</span></span>
            </a>
            <a className="contact-card" href={site.mapsUrl} target="_blank" rel="noopener">
              <span className="service-icon"><Icon name="pin" /></span>
              <span>
                <strong>Visit our office</strong>
                <address style={{ fontStyle: "normal", color: "var(--muted)" }}>
                  {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
                </address>
                <span>Get directions on Google Maps →</span>
              </span>
            </a>
          </div>
          <ContactForm whatsapp={site.whatsapp} services={services} />
        </div>
      </section>

      <ServicesGrid title="Not sure what to ask for? Start here" />
      <FaqList faqs={faqs} />
    </>
  );
}
