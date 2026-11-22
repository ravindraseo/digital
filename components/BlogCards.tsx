import Link from "next/link";
import { Icon } from "./Icon";
import { posts } from "@/lib/blog";

/** Grid of blog post cards. Used on the home page and /blog. */
export function BlogCards({ limit, exclude }: { limit?: number; exclude?: string }) {
  const pool = posts.filter((p) => p.slug !== exclude);
  const list = limit ? pool.slice(0, limit) : pool;
  return (
    <div className="blog-grid">
      {list.map((p) => (
        <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
          <span className="blog-thumb" aria-hidden="true">
            <Icon name={p.icon} size={34} />
          </span>
          <span className="blog-body">
            <span className="blog-meta">
              {p.category} · {p.readMins} min read
            </span>
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
            <span className="service-more">
              Read the guide <span aria-hidden="true">→</span>
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

/** Home page section: "Guides from our blog". */
export function BlogSection() {
  return (
    <section className="section section--tint" aria-labelledby="blog-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Free guides</span>
          <h2 id="blog-title">Guides from our blog</h2>
          <p>Practical answers to the questions business owners ask us most, written from real client work.</p>
        </div>
        <BlogCards limit={3} />
        <div className="center-row">
          <Link href="/blog" className="btn btn-ghost">
            View all guides
          </Link>
        </div>
      </div>
    </section>
  );
}
