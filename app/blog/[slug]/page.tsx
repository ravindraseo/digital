import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { existsSync } from "node:fs";
import path from "node:path";
import { BlogCards } from "@/components/BlogCards";
import { Rich } from "@/components/Rich";
import { AuthorBox, Breadcrumbs, CtaBand, FaqList, JsonLd } from "@/components/Sections";
import { getPost, posts } from "@/lib/blog";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { absolute, ogImages, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const hasPhoto = existsSync(path.join(process.cwd(), "public", "images", "ravindra-founder-hd.jpg"));

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: { absolute: p.metaTitle },
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { title: p.metaTitle, description: p.description, url: `/blog/${p.slug}`, type: "article", publishedTime: p.date, images: ogImages },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const href = `/blog/${p.slug}`;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: p.title, href },
  ];
  const others = posts.filter((x) => x.slug !== p.slug);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: p.title,
            description: p.description,
            url: absolute(href),
            datePublished: p.date,
            dateModified: p.date,
            inLanguage: "en-IN",
            author: { "@type": "Person", "@id": `${site.url}/#founder`, name: site.founder },
            publisher: { "@id": `${site.url}/#organization` },
            mainEntityOfPage: absolute(href),
            image: absolute("/opengraph-image"),
          },
          breadcrumbSchema(crumbs),
          faqSchema(p.faqs),
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow eyebrow--light">{p.category}</span>
          <h1>{p.title}</h1>
          <p className="lead">{p.excerpt}</p>
          <p className="byline">
            By {site.founder} · <time dateTime={p.date}>{p.dateLabel}</time> · {p.readMins} min read
          </p>
        </div>
      </section>

      <article className="section">
        <div className="container content-sections article">
          <div className="prose">
            {p.intro.map((t, i) => (
              <p key={i}>
                <Rich text={t} />
              </p>
            ))}
          </div>
          {p.sections.map((s) => (
            <section key={s.h2} className="content-block">
              <h2>{s.h2}</h2>
              {s.body.map((t, i) => (
                <p key={i}>
                  <Rich text={t} />
                </p>
              ))}
              {s.list && (
                <ul className="check-list">
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <AuthorBox updated={p.dateLabel} hasPhoto={hasPhoto} />
        </div>
      </article>

      <FaqList faqs={p.faqs} title="Quick questions" />

      {others.length > 0 && (
        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Keep reading</span>
              <h2>More guides</h2>
            </div>
            <div className="blog-more">
              <BlogCards exclude={p.slug} />
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
