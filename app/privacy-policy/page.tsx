import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Sections";
import { ogImages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Digital Ravindra collects, uses and protects the information you share through this website, WhatsApp messages and phone calls.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { url: "/privacy-policy", images: ogImages },
};

export default function PrivacyPage() {
  const a = site.address;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy policy", href: "/privacy-policy" }]} />
          <h1>Privacy policy</h1>
          <p className="lead">Plain-language summary of how we handle your information.</p>
        </div>
      </section>
      <section className="section">
        <div className="container content-sections">
          <article className="content-block">
            <h2>What we collect</h2>
            <p>
              When you contact us through the website form, WhatsApp, phone or email, we receive the details you choose
              to share, such as your name, phone number, city, website and message. The contact form opens WhatsApp with
              your message; nothing is stored on this website’s servers.
            </p>
            <h2>How we use it</h2>
            <p>
              Only to reply to your enquiry, prepare audits or proposals you request, and deliver services you engage
              us for. We do not sell or rent your information.
            </p>
            <h2>Analytics and cookies</h2>
            <p>
              If analytics or advertising tags are enabled on this site, they may use cookies to measure visits and ad
              performance. You can block cookies in your browser settings.
            </p>
            <h2>Your choices</h2>
            <p>
              You can ask us to access, correct or delete your information, or to stop contacting you, at any time by
              writing to {site.email}.
            </p>
            <h2>Contact</h2>
            <p>
              {site.name}, {a.street}, {a.city}, {a.region} {a.postalCode}. Phone {site.phone}.
            </p>

          </article>
        </div>
      </section>
    </>
  );
}
