import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { site, waLink } from "@/lib/site";
import { categories, locationPages, regionalHrefs } from "@/lib/services";

async function Year() {
  "use cache";
  return new Date().getFullYear();
}

function Col({ title, href, links }: { title: string; href?: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <h3 className="footer-title">{href ? <Link href={href}>{title}</Link> : title}</h3>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const [seo, social, ppc, web, app, logo] = categories;
  const kids = (c: (typeof categories)[number]) =>
    c.children.map((s) => ({ name: s.name, href: s.href })).filter((l) => !regionalHrefs.includes(l.href));
  const addr = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo dark />
          <p>
            A hands-on digital marketing agency in New Ashok Nagar, East Delhi, helping businesses across Delhi NCR and
            India get found on Google, Google Maps, social media and AI search.
          </p>
          <ul className="footer-nap">
            <li>
              <Icon name="pin" size={16} />
              <a href={site.mapsUrl} target="_blank" rel="noopener">
                {addr}
              </a>
            </li>
            <li>
              <Icon name="call" size={16} />
              <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
            </li>
            <li>
              <Icon name="pen" size={16} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Icon name="whatsapp" size={16} />
              <a href={waLink()} target="_blank" rel="noopener">
                WhatsApp us · {site.hours}
              </a>
            </li>
          </ul>
          <div className="footer-social">
            <a href={site.socials.facebook} target="_blank" rel="noopener">Facebook</a>
            <a href={site.socials.instagram} target="_blank" rel="noopener">Instagram</a>
            <a href={site.socials.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="container footer-grid">
        <Col title="SEO" href="/seo-company-in-delhi" links={kids(seo)} />
        <Col title="Performance Marketing" href="/google-ads-agency-in-delhi" links={kids(ppc)} />
        <Col title="Social Media" href="/social-media-marketing-company-in-delhi" links={[{ name: "Social Media Marketing", href: "/social-media-marketing-company-in-delhi" }, ...kids(social)]} />
        <Col title="Web Development" href="/website-development-company-in-delhi" links={kids(web)} />
        <div>
          <Col
            title="Apps & Branding"
            links={[
              { name: app.name, href: app.href },
              { name: logo.name, href: logo.href },
            ]}
          />
          <div className="footer-gap" />
          <Col
            title="SEO by city"
            links={[
              { name: "SEO Company in Delhi", href: "/seo-company-in-delhi" },
              ...locationPages.map((l) => ({ name: l.name, href: l.href })),
              { name: "GMB Expert in Ahmedabad", href: "/gmb-expert-in-ahmedabad" },
              { name: "GMB Services in Gujarat", href: "/gmb-services-in-gujarat" },
            ]}
          />
          <div className="footer-gap" />
          <Col
            title="Company"
            links={[
              { name: "About us", href: "/about" },
              { name: "All services", href: "/services" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact" },
            ]}
          />
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © <Year /> {site.name}. All rights reserved.
        </span>
        <span className="footer-legal">
          <Link href="/privacy-policy">Privacy policy</Link>
          <a href="/llms.txt">AI reference (llms.txt)</a>
          <a href="/sitemap.xml">Sitemap</a>
        </span>
      </div>
    </footer>
  );
}
