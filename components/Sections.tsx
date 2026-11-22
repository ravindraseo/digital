import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";
import { Rich } from "./Rich";
import { categories, featuredHrefs, findByHref, locationPages, regionalHrefs } from "@/lib/services";
import { site, waLink } from "@/lib/site";
import { rankings } from "@/lib/rankings";
import type { FAQ, Step } from "@/lib/types";

export function JsonLd({ data }: { data: object | object[] }) {
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON is generated from our own typed data, never user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      <ol>
        {items.map((it, i) => (
          <li key={it.href}>
            {i < items.length - 1 ? <Link href={it.href}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Card grid of selected services (home page, hubs). */
export function ServicesGrid({
  title = "Everything you need to grow online, under one roof",
  intro = "Pick one service or combine a few. Every one of them is planned around the same goal: more of the right customers finding and choosing you.",
  hrefs = featuredHrefs,
}: {
  title?: string;
  intro?: string;
  hrefs?: string[];
}) {
  const list = hrefs.map((h) => findByHref(h)).filter((s): s is NonNullable<typeof s> => Boolean(s));
  return (
    <section className="section section--tint" aria-labelledby="grid-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our services</span>
          <h2 id="grid-title">{title}</h2>
          <p>{intro}</p>
        </div>
        <div className="service-grid">
          {list.map((s) => (
            <Link key={s.href} href={s.href} className="service-card">
              <span className="service-icon">
                <Icon name={s.icon} />
              </span>
              <span className="service-cat">{s.categoryName}</span>
              <h3>{s.name}</h3>
              <p>{s.cardText}</p>
              <span className="service-more">
                Learn more <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Boxed directory of every service, grouped by category. Shown in the middle of every page. */
export function ServicesBox({ current }: { current?: string; hideRegional?: boolean }) {
  return (
    <section className="section section--tint" aria-labelledby="box-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Services we offer</span>
          <h2 id="box-title">One team for SEO, ads, social, websites and apps</h2>
          <p>Explore any service below. Each one has its own page with process, costs and FAQs.</p>
        </div>
        <div className="svc-box">
          {categories.map((c) => (
            <div key={c.slug} className="svc-col">
              <Link href={c.href} className="svc-head">
                <span className="svc-ico">
                  <Icon name={c.icon} size={18} />
                </span>
                {c.menuName}
              </Link>
              <ul>
                {(c.children.length ? c.children : [{ ...c, slug: "" }])
                  .filter((s) => !regionalHrefs.includes(s.href))
                  .map((s) => {
                  const href = s.href;
                  return (
                    <li key={href}>
                      <Link href={href} aria-current={href === current ? "page" : undefined}>
                        {s.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          <div className="svc-col">
            <span className="svc-head">
              <span className="svc-ico">
                <Icon name="pin" size={18} />
              </span>
              Locations
            </span>
            <ul>
              {locationPages.map((l) => ({ name: l.name, href: l.href })).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} aria-current={l.href === current ? "page" : undefined}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqList({ faqs, title = "Questions people ask us" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="container faq-wrap">
        <div className="section-head section-head--left">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-title">{title}</h2>
          <p>
            Can’t find your answer? <a href={waLink("Hi, I have a question about your services.")}>Ask us on WhatsApp</a>. A
            real person replies.
          </p>
        </div>
        <div className="faq">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>
                <Rich text={f.a} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSteps({ steps, title = "How we work with you" }: { steps: Step[]; title?: string }) {
  return (
    <section className="section" aria-labelledby="process-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The process</span>
          <h2 id="process-title">{title}</h2>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** E-E-A-T: who wrote / reviewed the page and when. */
export function AuthorBox({ updated, hasPhoto }: { updated: string; hasPhoto: boolean }) {
  return (
    <aside className="author-box" aria-label="About the author">
      <div className="author-photo">
        {hasPhoto ? (
          <Image src="/images/ravindra-founder-hd.jpg" alt={site.founder} width={72} height={72} />
        ) : (
          <span>DR</span>
        )}
      </div>
      <div>
        <p className="author-meta">
          Written and reviewed by <strong>{site.founder}</strong>, Founder of {site.name} · Updated {updated}
        </p>
        <p>
          {site.founder} ({site.founderProfile.education}, {site.founderProfile.graduated}) has {site.founderProfile.experienceYears} years of
          experience in digital marketing and WordPress, and leads SEO, Google Business Profile and paid ads work at {site.name} from
          our office in New Ashok Nagar, East Delhi. Every page on this site is written from hands-on client work, not copied, and reviewed for
          accuracy before publishing. <Link href="/about">More about us</Link>.
        </p>
        <details className="standards">
          <summary>How we write and check this page</summary>
          <ul>
            <li>Written from work we do every week for clients in Delhi, Noida and NCR, not rewritten from other sites.</li>
            <li>Facts about Google, Meta and AI tools are checked against their official help pages, linked where useful.</li>
            <li>Ranking examples are real positions we can show you on Google, with the date we checked them.</li>
            <li>No fake reviews, no paid-link schemes and no “guaranteed #1” promises, on this site or for clients.</li>
            <li>Spotted something out of date? <a href={waLink("Hi, I spotted something on your website that may be out of date.")} target="_blank" rel="noopener">Tell us on WhatsApp</a> and we will fix it.</li>
          </ul>
        </details>
      </div>
    </aside>
  );
}

/** Experience signal: real client rankings, shown on SEO-related pages. */
export function ProofStrip() {
  const top = rankings.items.slice(0, 3);
  return (
    <section className="section section--tight" aria-labelledby="proof-title">
      <div className="container proof">
        <div className="proof-head">
          <p className="note-hand">Proof, not promises</p>
          <h2 id="proof-title">Rankings we hold for clients right now</h2>
          <p>Checked on Google India, {rankings.checked}. Ask on WhatsApp and we will show you the live results.</p>
        </div>
        <ol className="proof-list">
          {top.map((r) => (
            <li key={r.keyword}>
              <span className="proof-pos">#{r.position}</span>
              <span>
                <strong>{r.keyword}</strong>
                <small>
                  {r.industry} · {r.area}
                </small>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Trust: plain promises, signed, so a business owner knows what to expect. */
export function PromiseCard() {
  const promises = [
    "You talk to me directly, on WhatsApp or a call, not a sales team.",
    "Every Google, Meta and website login stays in your name. You own it all.",
    "A short monthly report in plain words: calls, chats and enquiries.",
    "No long lock-ins. If it is not working, you can stop.",
    "If a service will not help you, I will tell you before you pay for it.",
  ];
  return (
    <section className="section section--tight" aria-labelledby="promise-title">
      <div className="container">
        <div className="promise">
          <p className="note-hand">My promise to every client</p>
          <h2 id="promise-title">What you can hold me to</h2>
          <ol>
            {promises.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
          <p className="promise-hi">Hindi ya English, jisme aap comfortable ho, usi mein baat karenge.</p>
          <p className="signature">— {site.founder}</p>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Let’s find out what’s stopping customers from finding you",
  text = "Send us your website or Google listing. We’ll reply with a short, honest audit: what’s working, what isn’t and what we’d fix first. No charge, no pressure.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
          <p className="cta-hand">we usually reply within a few hours :)</p>
        </div>
        <div className="cta-actions">
          <a href={waLink("Hi, I'd like a free audit of my business.")} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
            <Icon name="whatsapp" size={20} /> Get my free audit
          </a>
          <a href={`tel:${site.phoneRaw}`} className="btn btn-light btn-lg">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

