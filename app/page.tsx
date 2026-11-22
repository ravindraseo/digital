import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import path from "node:path";
import { Icon } from "@/components/Icon";
import { Rich } from "@/components/Rich";
import { CtaBand, FaqList, JsonLd, ProcessSteps, PromiseCard, ServicesBox } from "@/components/Sections";
import { ServiceTabs, type TabData } from "@/components/ServiceTabs";
import { rankings } from "@/lib/rankings";
import { BlogSection } from "@/components/BlogCards";
import { faqSchema, webPageSchema } from "@/lib/schema";
import { findByHref, getCategory, menuColumns } from "@/lib/services";
import { ogImages, site, waLink } from "@/lib/site";
import type { FAQ, IconName } from "@/lib/types";

const title = "Digital Marketing Agency in Delhi | Digital Ravindra";
const description =
  "Digital marketing agency in New Ashok Nagar, East Delhi: SEO, GMB, AI-search optimisation, Google & Meta ads, websites and apps for Delhi, Noida & NCR.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { title: "Digital Ravindra: Digital Marketing Agency in Delhi", description, url: "/", images: ogImages },
};

const hasPhoto = existsSync(path.join(process.cwd(), "public", "images", "ravindra-founder.jpg"));

const faqs: FAQ[] = [
  {
    q: "What does a digital marketing agency in Delhi do?",
    a: "A digital marketing agency helps businesses get found and chosen online. At Digital Ravindra that means SEO and local SEO, Google Business Profile management, optimisation for AI answers, Google and Meta ads, social media, WhatsApp marketing, and fast websites and apps that turn visitors into enquiries.",
  },
  {
    q: "Where is Digital Ravindra located?",
    a: `Our office is at ${site.address.street}, ${site.address.city} ${site.address.postalCode}, close to Mayur Vihar, Laxmi Nagar and the Noida border. You are welcome to visit by appointment, or we can work entirely over WhatsApp and video calls.`,
  },
  {
    q: "Which service should I start with?",
    a: "For most local businesses the quickest win is a properly optimised [Google Business Profile](/gmb-optimization-services-in-delhi) and a fast, clear website. If you need enquiries this month, add [Google Ads](/google-ads-agency-in-delhi). [SEO](/seo-company-in-delhi) then builds steady traffic that keeps working long term.",
  },
  {
    q: "Do you work with businesses outside Delhi?",
    a: "Yes. Delhi and Noida are home ground, and we work with clients across NCR and the rest of India. SEO, ads, websites and apps can all be delivered remotely over WhatsApp and video calls.",
  },
  {
    q: "Can you help my business appear in ChatGPT and Google AI Overviews?",
    a: "Yes. Our [AI SEO service](/ai-seo-services-in-delhi) restructures your content with direct answers, strengthens trust signals and keeps your business details consistent across the web, which helps AI tools understand and cite you.",
  },
  {
    q: "How is Digital Ravindra different from bigger agencies?",
    a: "You talk directly to the people doing your work, not an account manager relaying messages. We keep a limited number of clients so each one gets real attention, and we report on calls and enquiries, not only impressions and rankings.",
  },
  {
    q: "Do you sign long contracts?",
    a: "No long lock-ins. Websites and apps are quoted as projects, and monthly services such as SEO and ads run month to month after the initial setup period.",
  },
  {
    q: "Can you fix a suspended or unverified Google Business listing?",
    a: "Yes. It is one of our most common requests. We find the cause, correct the listing, and guide you through video verification or reinstatement.",
  },
];

const channels: { icon: IconName; title: string; text: string; href: string; cta: string }[] = [
  {
    icon: "search",
    title: "Google Search",
    text: "Customers type a problem and compare the first few results. We make sure your service pages answer them clearly and rank for the searches that lead to calls.",
    href: "/seo-company-in-delhi",
    cta: "SEO services",
  },
  {
    icon: "pin",
    title: "Google Maps",
    text: "Nearby customers pick from three businesses on a map. A complete, active Google Business Profile with fresh reviews is how you become one of them.",
    href: "/local-seo-services-in-delhi",
    cta: "Local SEO",
  },
  {
    icon: "ai",
    title: "AI answers",
    text: "More people now ask ChatGPT, Gemini and Google’s AI Overviews for recommendations. We structure your content and brand signals so AI tools can find and cite you.",
    href: "/generative-engine-optimization-services",
    cta: "GEO and AI SEO",
  },
  {
    icon: "social",
    title: "Social and ads",
    text: "Instagram, Facebook, YouTube and WhatsApp put your offer in front of the right people today, while search visibility builds for tomorrow.",
    href: "/facebook-ads-agency-in-delhi",
    cta: "Meta ads",
  },
];

const why: { icon: IconName; title: string; text: string }[] = [
  { icon: "users", title: "You talk to the doer", text: "The person planning your SEO or ads is the one on your WhatsApp." },
  { icon: "target", title: "Leads over vanity metrics", text: "We track calls, chats and form fills, the numbers that pay your bills." },
  { icon: "pin", title: "Local, in East Delhi", text: "Meet us in New Ashok Nagar; we know Delhi and Noida buyers." },
  { icon: "shield", title: "Honest, white-hat work", text: "No fake reviews, spam links or shortcuts that get you penalised." },
  { icon: "bolt", title: "Fast, modern builds", text: "Websites engineered for speed and Core Web Vitals, like this one." },
  { icon: "ai", title: "Ready for AI search", text: "Content structured for Google AI Overviews and ChatGPT answers." },
];

const steps = [
  { title: "Free audit", text: "We review your website, Google listing and competitors, and share what we find." },
  { title: "Simple plan", text: "A short list of priorities with timelines and costs, without jargon." },
  { title: "Execution", text: "We do the work and keep you updated on WhatsApp as things go live." },
  { title: "Grow together", text: "Monthly reviews of enquiries and results, then the next step." },
];

const pillars: { title: string; text: string; tags: string[]; href: string }[] = [
  {
    title: "Strategy & audit",
    text: "We start with your numbers: where enquiries come from today, what competitors rank for, and what is quickest to fix.",
    tags: ["Website audit", "Competitor research", "Keyword plan"],
    href: "/seo-company-in-delhi",
  },
  {
    title: "Search & local visibility",
    text: "Get found on Google Search, Google Maps and AI answers by the people already looking for what you sell.",
    tags: ["SEO", "Google Business Profile", "AI SEO"],
    href: "/local-seo-services-in-delhi",
  },
  {
    title: "Paid growth",
    text: "Ads that bring enquiries this month, measured in calls and WhatsApp chats rather than clicks.",
    tags: ["Google Ads", "Meta Ads", "WhatsApp marketing"],
    href: "/google-ads-agency-in-delhi",
  },
  {
    title: "Websites & apps",
    text: "Fast, clear websites, stores and apps that turn visitors into customers, built with SEO from day one.",
    tags: ["Business websites", "E-commerce", "Android & iOS"],
    href: "/website-development-company-in-delhi",
  },
];

const platforms = ["Google Search", "Google Business Profile", "Google Ads", "YouTube", "Meta", "Instagram", "LinkedIn", "WhatsApp Business", "Amazon Ads", "Shopify", "WordPress", "WooCommerce", "Laravel", "Wix", "ChatGPT", "Gemini"];

const industries = ["Clinics and hospitals", "Real estate", "Coaching and education", "Restaurants and cafés", "E-commerce brands", "Manufacturers and B2B", "Salons and wellness", "CA, legal and finance", "Interior designers", "Retail showrooms", "Travel agencies", "Home services"];

export default function Home() {
  const tabs: TabData[] = menuColumns().map((col) => ({
    name: col.title,
    href: col.href,
    icon: col.icon,
    lead: getCategory(col.href.slice(1))?.lead ?? "",
    items: col.items
      .map((it) => findByHref(it.href))
      .filter((s): s is NonNullable<typeof s> => Boolean(s))
      .map((s) => ({ name: s.name, href: s.href, icon: s.icon, text: s.cardText })),
  }));

  const devCards = [
    "/website-development-company-in-delhi",
    "/website-designing-company-in-delhi",
    "/ecommerce-website-development-company-in-delhi",
    "/mobile-app-development-company-in-delhi",
    "/shopify-development-company-in-delhi",
    "/wordpress-development-company-in-delhi",
  ]
    .map((h) => findByHref(h))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const stats = [
    { value: "35+", label: "services under one roof" },
    { value: String(rankings.items.length), label: "page-one Google keywords live for clients" },
    { value: "4", label: "places we make you visible: Search, Maps, AI, social" },
    { value: "0", label: "long-term lock-ins. Month to month." },
  ];

  return (
    <>
      <JsonLd data={[webPageSchema({ title, description, href: "/", about: "Digital marketing agency in Delhi" }), faqSchema(faqs)]} />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="hero-kicker">
              <span className="live-dot" aria-hidden="true" /> Digital growth agency · East Delhi
            </p>
            <span className="hand-note">Namaste Dilli! 👋</span>
            <h1>
              Digital marketing agency in Delhi that gets you found on{" "}
              <span className="rotator" aria-hidden="true">
                <span className="rotator-window">
                  <span className="rotator-track">
                    <span>Google</span>
                    <span>Google Maps</span>
                    <span>ChatGPT</span>
                    <span>Instagram</span>
                    <span>Google</span>
                  </span>
                </span>
                <svg className="scribble" viewBox="0 0 220 16" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 11 C 40 4, 90 3, 140 7 S 200 12, 217 5" stroke="#ff7539" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <span className="sr-only">Google, Google Maps, ChatGPT and Instagram</span>
            </h1>
            <p className="lead">
              From our office in New Ashok Nagar, we help businesses across Delhi, Noida and NCR show up where customers
              look, and turn those searches into calls, WhatsApp chats and sales.
            </p>
            <div className="hero-actions hero-actions--last">
              <a href={waLink("Hi, I'd like a free audit of my business.")} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                <Icon name="whatsapp" size={20} /> Get a free audit
              </a>
              <Link href="/services" className="btn btn-light btn-lg">
                Explore services
              </Link>
            </div>
            <p className="doodle-note" aria-hidden="true">
              <svg viewBox="0 0 60 40" width="54" height="36">
                <path d="M55 34 C 40 34, 18 30, 10 8" stroke="#ffb08f" strokeWidth="2.4" fill="none" strokeLinecap="round" />
                <path d="M4 14 L10 6 L16 13" stroke="#ffb08f" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              free, honest &amp; no strings attached
            </p>
          </div>

          <div className="mock" aria-hidden="true">
            {hasPhoto && (
              <figure className="hero-polaroid">
                <Image src="/images/ravindra-founder.jpg" alt="" width={180} height={180} priority />
                <figcaption>Ravindra, that’s me :)</figcaption>
              </figure>
            )}
            <div className="mock-card">
              <div className="mock-search">
                <Icon name="search" size={18} /> digital marketing agency near me
              </div>
              <div className="mock-map">
                <span className="pin" style={{ left: "18%", top: "50%" }} />
                <span className="pin pin--me" style={{ left: "48%", top: "28%" }} />
                <span className="pin" style={{ left: "76%", top: "58%" }} />
              </div>
              <div className="mock-row mock-row--me">
                <span className="mock-rank">#1</span>
                <span>
                  <span className="mock-name">Your Business</span>
                  <span className="mock-meta">
                    <span className="stars">★★★★★</span> 4.9 · Open now
                  </span>
                </span>
                <span className="mock-call">Call</span>
              </div>
              <div className="mock-row">
                <span className="mock-rank">#2</span>
                <span>
                  <span className="mock-name">Competitor</span>
                  <span className="mock-meta">
                    <span className="stars">★★★★</span> 4.1
                  </span>
                </span>
                <span />
              </div>
            </div>
            <p className="sticky-note">
              No sales team here.
              <br />
              You WhatsApp me, I reply.
              <span>— R.</span>
            </p>
            <div className="mock-bubble">
              <span className="dot">
                <Icon name="whatsapp" size={20} />
              </span>
              <span>
                <strong>New enquiry</strong>“Hi, are you free today?”
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Digital Ravindra in numbers">
        <div className="container stats-grid">
          {stats.map((st) => (
            <div key={st.label} className="stat">
              <strong>{st.value}</strong>
              <span>{st.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="areas" aria-label="Platforms we work with">
        <div className="areas-track">
          {[...platforms, ...platforms].map((a, i) => (
            <span key={i}>{a}</span>
          ))}
        </div>
      </div>

      <section className="section section--tight">
        <div className="container answer-grid">
          <div className="answer-box">
            <p className="answer-label">In one paragraph</p>
            <h2>What does Digital Ravindra do?</h2>
            <p>
              Digital Ravindra is a digital marketing agency in New Ashok Nagar, East Delhi. We help small and growing
              businesses get found on Google Search, Google Maps, AI assistants and social media through SEO, Google
              Business Profile management, Google and Meta ads, WhatsApp marketing, website development, app development
              and logo design, with reporting focused on real enquiries.
            </p>
          </div>
          <div className="takeaways">
            <p className="answer-label">At a glance</p>
            <ul>
              <li>Office: {site.address.street}, {site.address.city} {site.address.postalCode}</li>
              <li>Serving Delhi, Noida, Ghaziabad, Gurugram and clients across India</li>
              <li>35+ services across SEO, ads, social, web and apps</li>
              <li>Month-to-month plans; you own every account and asset</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Pick what you need. <span className="hl">We handle the rest.</span></h2>
            <p>Click a category to see every service inside it. Each one has its own detailed page with process, costs and FAQs.</p>
          </div>
          <ServiceTabs tabs={tabs} />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Website &amp; app development</span>
            <h2>Websites, online stores and apps built to bring business</h2>
            <p>
              Marketing works best on a fast, trustworthy website. Our development team builds business websites,
              e-commerce stores and Android and iOS apps, with speed, SEO and enquiries planned in from day one.
            </p>
          </div>
          <div className="dev-grid">
            {devCards.map((s, i) => (
              <Link key={s.href} href={s.href} className={`dev-card${i < 4 ? " dev-card--big" : ""}`}>
                <span className="service-icon">
                  <Icon name={s.icon} />
                </span>
                <h3>{s.name}</h3>
                <p>{s.cardText}</p>
                <span className="service-more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow--light">Search has changed</span>
            <h2>Your customers now search in four places. Are you visible in all of them?</h2>
            <p>
              A few years ago, ranking on Google was enough. Today, buyers check Maps, ask AI assistants and scroll
              Instagram before they call. We cover every one of these touchpoints, so you are present wherever the
              decision happens.
            </p>
          </div>
          <div className="channel-grid">
            {channels.map((c) => (
              <Link key={c.title} href={c.href} className="channel-card">
                <span className="service-icon">
                  <Icon name={c.icon} />
                </span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="service-more">{c.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="rankings-title">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Real results</span>
            <h2 id="rankings-title">Page-one rankings <span className="hl">we hold for clients</span></h2>
            <p>
              Specific, high-intent keywords that bring calls, not vanity terms. These are live Google positions for
              accounting and tax clients across Delhi and Noida.
            </p>
          </div>
          <ol className="rank-list">
            {rankings.items.map((r) => (
              <li key={r.keyword} className="rank-card">
                <span className={`rank-badge rank-badge--${r.position <= 3 ? "top" : "mid"}`}>
                  <small>Google</small>#{r.position}
                </span>
                <span className="rank-body">
                  <span className="rank-query">
                    <Icon name="search" size={16} /> {r.keyword}
                  </span>
                  <span className="rank-meta">
                    {r.industry} · {r.area}
                  </span>
                </span>
                <span className="rank-page">Page 1</span>
              </li>
            ))}
          </ol>
          <p className="rank-note">
            Positions checked on Google India, {rankings.checked}. Rankings move over time; we report them monthly to
            every client. Want results like these? <Link href="/seo-company-in-delhi">See our SEO services</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Why businesses come to us</span>
            <h2>Most local businesses don’t have a marketing problem. They have a <span className="hl">visibility problem</span>.</h2>
          </div>
          <div className="prose">
            <p>
              You are good at what you do, and your customers say so. But when someone across Delhi searches for your
              service, they find three competitors on Google Maps, a directory listing with your old number, and a
              website that takes forever to open on their phone. Now they also ask ChatGPT, which has never heard of you.
            </p>
            <p>
              We fix that step by step. First the basics that bring quick enquiries: your <Rich text="[Google Business Profile](/gmb-optimization-services-in-delhi)" />,
              a fast website and clear calls to action. Then the channels that compound over time: SEO, helpful content,
              AI-search optimisation and ads that pay for themselves. At every step you will see what we changed and the reason behind it.
            </p>
          </div>
        </div>
      </section>

      <section className="section approach" aria-labelledby="approach-title">
        <div className="container">
          <div className="approach-head">
            <div>
              <span className="eyebrow">How we work</span>
              <h2 id="approach-title">One team for strategy, visibility, ads and build.</h2>
            </div>
            <p>
              Most businesses hire three vendors and spend their time making them talk to each other. We plan and run
              all four pieces together, so every rupee points at the same goal.
            </p>
          </div>
          <ol className="pillars">
            {pillars.map((p, i) => (
              <li key={p.title}>
                <Link href={p.href} className="pillar">
                  <span className="pillar-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pillar-main">
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </span>
                  <span className="pillar-tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </span>
                  <span className="pillar-arrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ServicesBox hideRegional />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Digital Ravindra</span>
            <h2>A small team that treats your business <span className="hl">like its own</span></h2>
            <p>We would rather have fewer clients who stay for years than many who leave after three months.</p>
            <p className="margin-note">psst… no long contracts either</p>
          </div>
          <div className="why-grid">
            {why.map((w) => (
              <div key={w.title} className="why-card">
                <span className="service-icon">
                  <Icon name={w.icon} />
                </span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={steps} title="From first chat to steady enquiries" />

      <section className="section section--tint">
        <div className="container split">
          <div>
            <span className="eyebrow">Industries we serve</span>
            <h2>Marketing that understands how your customers decide</h2>
            <p>
              A dental clinic, a real-estate launch and a B2B manufacturer need very different marketing. We adapt
              keywords, channels and messages to how buyers in your industry research and choose, from quick “near me”
              searches to months-long B2B evaluations.
            </p>
          </div>
          <ul className="chips">
            {industries.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container split founder-split">
          <div className="founder-mini">
            {hasPhoto ? (
              <Image src="/images/ravindra-founder.jpg" alt={`${site.founder}, founder of ${site.name}`} width={200} height={200} />
            ) : (
              <span className="logo-symbol" aria-hidden="true">
                <span className="logo-letter-d">D</span>
                <span className="logo-letter-r">R</span>
              </span>
            )}
          </div>
          <div className="prose">
            <span className="eyebrow">A note from the founder</span>
            <h2>“I started this to give local businesses honest marketing.”</h2>
            <p>
              Too many business owners have paid for marketing and received reports they could not understand. I started
              Digital Ravindra to do the work properly and explain it simply: a well-kept Google listing, a fast website,
              content that answers real questions and ads aimed at people ready to buy.
            </p>
            <p>
              Visit us in New Ashok Nagar, or message me on WhatsApp. I will tell you honestly what I would fix first,
              whether or not you hire us.
            </p>
            <p className="signature">— {site.founder}</p>
            <div className="hero-actions" style={{ margin: "8px 0 0" }}>
              <a href={site.mapsUrl} className="btn btn-ghost" target="_blank" rel="noopener">
                Get directions →
              </a>
              <Link href="/about" className="btn btn-ghost">
                About us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PromiseCard />
      <BlogSection />
      <FaqList faqs={faqs} />
      <CtaBand />
    </>
  );
}
