import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import path from "node:path";
import { Icon } from "./Icon";
import { Rich } from "./Rich";
import { AuthorBox, Breadcrumbs, CtaBand, FaqList, JsonLd, ProcessSteps, ProofStrip, ServicesBox, ServicesGrid } from "./Sections";
import { breadcrumbSchema, CONTENT_UPDATED, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { findByHref, regionalHrefs } from "@/lib/services";
import { site, waLink } from "@/lib/site";
import type { Category, Section, ServiceContent } from "@/lib/types";

const hasPhoto = existsSync(path.join(process.cwd(), "public", "images", "ravindra-founder.jpg"));

type Props = {
  content: ServiceContent;
  href: string;
  crumbs: { name: string; href: string }[];
  hub?: Category;
};

function Block({ s }: { s: Section }) {
  return (
    <article className="content-block">
      <h2>{s.h2}</h2>
      {s.body.map((p, i) => (
        <p key={i}>
          <Rich text={p} />
        </p>
      ))}
      {s.list && (
        <ul className="check-list">
          {s.list.map((li) => (
            <li key={li}>
              <Rich text={li} />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function ServicePage({ content: c, href, crumbs, hub }: Props) {
  const related = c.related.map(findByHref).filter((s): s is NonNullable<typeof s> => Boolean(s));
  const short = c.name.split(" (")[0];
  const firstHalf = c.sections.slice(0, 2);
  const secondHalf = c.sections.slice(2);
  // Show real ranking proof where it is relevant evidence (search and Google listing services).
  const showProof = /seo|gmb|google-business|local|link-building|content/.test(href);

  return (
    <>
      <JsonLd
        data={[
          { ...webPageSchema({ title: c.metaTitle, description: c.metaDescription, href, about: c.name }), citation: c.external.url },
          serviceSchema({ name: c.name, description: c.metaDescription, href, areas: c.areas }),
          breadcrumbSchema(crumbs),
          faqSchema(c.faqs),
        ]}
      />

      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <Breadcrumbs items={crumbs} />
            <span className="eyebrow eyebrow--light">{c.eyebrow}</span>
            <h1>{c.h1}</h1>
            <p className="lead">{c.lead}</p>
            <p className="byline">
              {hasPhoto && <Image src="/images/ravindra-founder.jpg" alt="" width={36} height={36} className="byline-face" />}
              <span>
                <span className="byline-hand">written by {site.founder}</span>
                Updated <time dateTime={CONTENT_UPDATED.iso}>{CONTENT_UPDATED.label}</time>
              </span>
            </p>
            <div className="hero-actions">
              <a href={waLink(`Hi, I'm interested in ${c.name}. Can we talk?`)} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                <Icon name="whatsapp" size={20} /> Talk about {short}
              </a>
              <Link href="/contact" className="btn btn-light btn-lg">
                Request a callback
              </Link>
            </div>
          </div>
          <aside className="hero-panel" aria-label="What you get">
            <p className="hero-panel-title">What you get</p>
            <ul>
              {c.highlights.map((h) => (
                <li key={h.title}>
                  <span className="tick">
                    <Icon name={h.icon ?? "shield"} size={18} />
                  </span>
                  <span>
                    <strong>{h.title}</strong>
                    <small>{h.text}</small>
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* AEO + GEO: direct answer and quotable takeaways near the top */}
      <section className="section section--tight">
        <div className="container answer-grid">
          <div className="answer-box">
            <p className="answer-label">Quick answer</p>
            <h2>{c.quickAnswer.q}</h2>
            <p>{c.quickAnswer.a}</p>
          </div>
          <div className="takeaways">
            <p className="answer-label">Key takeaways</p>
            <ul>
              {c.takeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {showProof && <ProofStrip />}

      <section className="section section--tight">
        <div className="container prose-grid">
          <div className="prose">
            {c.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "dropcap" : undefined}>
                <Rich text={p} />
              </p>
            ))}
          </div>
          <div className="note-card">
            <p className="note-hand">A quick note from me</p>
            <p>
              I’d rather start with a 15-minute chat than a sales pitch. Tell me what you sell and who buys it, and I’ll tell
              you honestly whether {short.toLowerCase()} is the right next step.
            </p>
            <a href={waLink(`Hi, quick question about ${c.name}.`)} target="_blank" rel="noopener" className="link-arrow">
              Start the chat →
            </a>
          </div>
        </div>
      </section>

      {hub && hub.children.length > 0 && (
        <ServicesGrid
          title={`${hub.menuName} services we offer`}
          intro="Each of these has its own detailed page with process, costs and FAQs."
          hrefs={hub.children.map((s) => s.href as string).filter((h) => !regionalHrefs.includes(h))}
        />
      )}

      <section className="section">
        <div className="container content-sections">
          {firstHalf.map((s) => (
            <Block key={s.h2} s={s} />
          ))}
        </div>
      </section>

      <ServicesBox current={href} />

      <section className="section">
        <div className="container content-sections">
          {secondHalf.map((s) => (
            <Block key={s.h2} s={s} />
          ))}
          {c.table && (
            <div className="table-wrap">
              <table>
                <caption>{c.table.caption}</caption>
                <thead>
                  <tr>
                    {c.table.head.map((h) => (
                      <th key={h} scope="col">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.table.rows.map((r, i) => (
                    <tr key={i}>
                      {r.map((cell, j) => (j === 0 ? <th key={j} scope="row">{cell}</th> : <td key={j}>{cell}</td>))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <ProcessSteps steps={c.process} title={`How our ${short.toLowerCase()} process works`} />

      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Keep exploring</span>
            <h2>Services that work well with {short}</h2>
          </div>
          <div className="related-row">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="related-card">
                <Icon name={r.icon} />
                <span>
                  <strong>{r.name}</strong>
                  <small>{r.cardText}</small>
                </span>
              </Link>
            ))}
          </div>
          <p className="source-note">
            Further reading from the source:{" "}
            <a href={c.external.url} target="_blank" rel="noopener">
              {c.external.label}
            </a>
          </p>
          <AuthorBox updated={CONTENT_UPDATED.label} hasPhoto={hasPhoto} />
        </div>
      </section>

      <FaqList faqs={c.faqs} title={`${short}: frequently asked questions`} />
      <CtaBand />
    </>
  );
}
