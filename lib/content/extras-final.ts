import type { Section } from "../types";

/** Short closing notes for pages that needed a little more depth. */
const closing: Record<string, Section> = {
  "/wordpress-development-company-in-delhi": { h2: "Can WordPress handle a growing business?", body: ["Yes. With good hosting, caching and a clean build, WordPress comfortably runs sites with thousands of pages and steady traffic. Many large publishers and brands use it. Growth problems usually come from poor plugins or hosting, not WordPress itself, and both can be upgraded without rebuilding."] },
  "/shopify-development-company-in-delhi": { h2: "Can Shopify grow with my business?", body: ["Yes. Shopify scales from a handful of products to large catalogues and high order volumes without you managing servers. As you grow, you can add markets, wholesale features, more staff accounts and integrations with inventory or accounting software, all on the same store."] },
  "/woocommerce-development-company": { h2: "Is WooCommerce good for SEO?", body: ["Yes. Because it runs on WordPress, WooCommerce gives full control over URLs, titles, content, schema and site structure. Category pages can carry rich content, and blogs live on the same domain. Good results still depend on speed, unique product content and controlling duplicate filter URLs."] },
  "/laravel-development-company-in-delhi": { h2: "Can a Laravel application scale?", body: ["Yes. Laravel supports caching, queues, background jobs and horizontal scaling across servers. Applications serving many thousands of users run on it. We design the database and architecture with expected growth in mind, so the system can scale step by step instead of needing a rewrite."] },
  "/wix-website-designer": { h2: "Is Wix secure?", body: ["Yes. Wix manages hosting, security updates and SSL certificates for every site, so you do not need to install security plugins or patches. Your responsibility is mainly strong passwords, two-factor login and limiting who has admin access to the site."] },
  "/ecommerce-website-development-company-in-delhi": { h2: "How do you keep an online store fast?", body: ["We compress and lazy-load product images, limit apps and plugins, use a lightweight theme, and serve the store through a content delivery network. Speed is re-checked after every major change, because a slow store loses buyers on mobile before they ever see a product."] },
  "/website-maintenance-services-in-delhi": { h2: "Is maintenance needed for Shopify and Wix sites?", body: ["Less technical maintenance is needed because the platforms handle hosting and security, but these sites still need regular content updates, app reviews, broken-link checks, form testing and speed checks. Our plans for hosted platforms focus on those tasks, so the site stays accurate, fast and working as your business changes."] },
  "/logo-designer-in-delhi": { h2: "Can you design a logo quickly for a launch?", body: ["Yes, when timelines are tight we can run a focused process with fewer concepts and faster feedback rounds, while still delivering original work and all final files."] },
  "/seo-company-in-noida": { h2: "Can you shoot content for our Noida business?", body: ["Yes. Being close by, we can plan photo and video shoots at your Noida premises for your website, Google profile and social media."] },
  "/seo-company-in-gurugram": { h2: "Do you work with Gurugram real-estate brokers?", body: ["Yes. We build project and location pages, run Google and Meta lead campaigns within platform rules for housing ads, and manage Google Business Profiles for broker offices, with lead tracking so you can see which projects and channels bring genuine site visits."] },
  "/digital-marketing-company-in-ahmedabad": { h2: "Do you work with Ahmedabad manufacturers?", body: ["Yes. We help manufacturers in Ahmedabad’s industrial areas with Google Business Profiles for their units, B2B SEO for product keywords, and Google Ads that reach buyers across India."] },
};

/** Final page-specific additions: getting-started guidance and quick checks. */
export const extrasFinal: Record<string, Section[]> = {
  ...Object.fromEntries(Object.entries(closing).map(([k, v]) => [k + "#closing", [v]])),
  "/answer-engine-optimization-agency": [
    {
      h2: "How do you get started with AEO?",
      body: [
        "Pick your five most valuable service pages. For each, list the ten questions buyers ask most, check which already have a clear answer on the page, and add the missing ones with direct answers and an FAQ section. Then watch Search Console for new question-style impressions over the following weeks.",
      ],
    },
  ],
  "/technical-seo-services-in-delhi": [
    {
      h2: "How do you know technical fixes have worked?",
      body: [
        "We validate fixes in Google Search Console, re-crawl the site to confirm errors are gone, and track Core Web Vitals field data over the following 28 days, which is the window Google uses. Indexing and ranking improvements are then measured against the baseline captured before work began.",
      ],
    },
  ],
  "/ecommerce-seo-services": [
    {
      h2: "What is a simple e-commerce SEO starting checklist?",
      body: ["If you are starting from scratch, focus on these first:"],
      list: [
        "Each main category has a unique title, heading and short introduction",
        "Best-selling products have original descriptions and good images",
        "Filter and sort URLs are not filling Google’s index",
        "Product schema with price and availability is valid",
        "Discontinued products redirect to the closest alternative",
      ],
    },
  ],
  "/seo-audit-services-in-delhi": [
    {
      h2: "How should you share audit findings with your team?",
      body: [
        "Turn the action plan into tasks with an owner and deadline for each. Developers get technical tickets with examples and acceptance criteria; writers get content briefs; managers get the summary. Review progress fortnightly, and re-check fixed issues in Search Console so nothing silently breaks again.",
      ],
    },
  ],
  "/link-building-services": [
    {
      h2: "What should a link building report show?",
      body: [
        "Each live link with its URL, the page it points to and the anchor text, plus notes on why the site is relevant. Alongside, the report should show ranking and traffic movement for the target pages, so you can see whether links are supporting business results rather than simply increasing a count.",
      ],
    },
  ],
  "/content-creation-agency-in-delhi": [
    {
      h2: "How do you keep a brand’s voice consistent?",
      body: [
        "We write a short voice guide at the start: words you use and avoid, how formal or friendly you sound, how you address customers, and examples of good and bad copy. Every writer and designer works from it, and we update it as the brand evolves.",
      ],
    },
  ],
  "/influencer-marketing-agency-in-delhi": [
    {
      h2: "How do you start a first influencer campaign?",
      body: [
        "Start small: three to five well-matched micro-creators, one clear offer and tracked codes or links. Review results after a few weeks, keep the creators who performed, and expand gradually. This approach limits risk while building a roster of trusted partners.",
      ],
    },
  ],
  "/online-reputation-management-company-in-delhi": [
    {
      h2: "How quickly should you reply to reviews?",
      body: [
        "Aim to reply within a day or two, and faster for negative reviews. Quick, considered replies show customers and future readers that the business is attentive. We set up alerts and templates so replies stay timely without sounding copied.",
      ],
    },
  ],
  "/google-ads-agency-in-delhi": [
    {
      h2: "How do you report Google Ads results?",
      body: [
        "A one-page monthly summary showing spend, conversions, cost per lead and what changed, plus a short call to agree next steps.",
      ],
    },
  ],
  "/google-shopping-ads-agency": [
    {
      h2: "How often is the product feed updated?",
      body: [
        "Feeds connected through Shopify or WooCommerce apps update automatically, usually several times a day. We schedule checks so price and stock changes reach Google quickly, avoiding disapprovals from mismatches.",
      ],
    },
  ],
  "/youtube-marketing-agency-in-delhi": [
    {
      h2: "Which industries do well with YouTube ads?",
      body: [
        "Education, real estate, healthcare, home improvement, automobiles, software and D2C products, where seeing the product or the people behind it builds confidence before buying.",
      ],
    },
  ],
  "/facebook-ads-agency-in-delhi": [
    {
      h2: "What does a weekly Meta ads optimisation involve?",
      body: [
        "We review cost per result by campaign, ad set and ad; pause underperformers; increase budgets gradually on winners; check frequency for fatigue; review lead quality with your team; and add new creative tests. Changes are made carefully, because frequent large edits can reset Meta’s learning phase.",
      ],
    },
  ],
  "/linkedin-marketing-agency": [
    {
      h2: "Which industries get the best LinkedIn results?",
      body: [
        "IT services, SaaS, manufacturing suppliers, logistics, financial and professional services, education and recruitment, where deal values justify higher click costs.",
      ],
    },
  ],
  "/amazon-ads-agency-in-india": [
    {
      h2: "How do you launch a new product on Amazon?",
      body: [
        "We optimise the listing before launch, start automatic and broad campaigns to gather search data, use coupons carefully to encourage early sales, and request reviews through permitted channels. As data builds, budgets move to the keywords that convert, and ACoS targets tighten.",
      ],
    },
  ],
  "/whatsapp-marketing-company-in-delhi": [
    {
      h2: "How often should you send WhatsApp marketing messages?",
      body: [
        "For most businesses, two to four marketing messages a month is plenty. Utility messages such as order updates and reminders can be sent as needed. Watch block and opt-out rates; if they rise, reduce frequency or improve relevance.",
      ],
    },
  ],
  "/website-development-company-in-delhi": [
    {
      h2: "Who owns the website after it is built?",
      body: [
        "You do. The domain, hosting, website files and all accounts are set up in your name, and admin access is handed over at launch.",
      ],
    },
  ],
  "/website-designing-company-in-delhi": [
    {
      h2: "How do you collect feedback on designs?",
      body: [
        "We share clickable designs online, so you can comment directly on any part of a page from your phone or laptop. Feedback from several team members is gathered in one place, which avoids confusion and keeps revision rounds quick and clear.",
      ],
    },
  ],
  "/wordpress-development-company-in-delhi": [
    {
      h2: "How do you hand over a WordPress website?",
      body: [
        "At launch you receive administrator access, a short recorded training session, a written guide for common tasks such as editing pages and publishing posts, and details of hosting, domain and backups. We remain available for questions after launch, and any changes you request are handled quickly.",
      ],
    },
  ],
  "/shopify-development-company-in-delhi": [
    {
      h2: "What should you check before launching a Shopify store?",
      body: ["Run through this list before going live:"],
      list: [
        "Test orders placed with each payment method, including COD",
        "Shipping rates correct for different pin codes and weights",
        "Policies, contact details and GST information visible",
        "Order notification emails and WhatsApp messages working",
        "Analytics, Meta pixel and Merchant Center connected",
      ],
    },
  ],
  "/woocommerce-development-company": [
    {
      h2: "How do you test a WooCommerce store before launch?",
      body: [
        "We place test orders with every payment method, check tax and shipping calculations for different locations, confirm emails and invoices, test coupon rules, and review the checkout on several phones. Admin workflows such as processing orders and refunds are tested too, so your team is confident from day one.",
      ],
    },
  ],
  "/laravel-development-company-in-delhi": [
    {
      h2: "What documentation do you hand over?",
      body: [
        "You receive a technical overview of the system architecture, setup and deployment instructions, an explanation of key modules and integrations, API documentation where relevant, and a user guide for administrators. Code is kept in a version-controlled repository that you own. This means any competent Laravel developer can understand and continue the work in future, so you are never locked in to a single team.",
      ],
    },
  ],
  "/wix-website-designer": [
    {
      h2: "What should you prepare for a Wix project?",
      body: [
        "Your logo and brand colours, the list of pages you need, text for each service or a rough outline we can turn into copy, photos of your premises, team and work, and access to your domain if you already own one. If you have an existing Wix site, add us as a collaborator so we can review it before planning changes. With these ready, most Wix projects move from design to launch quickly.",
      ],
    },
  ],
  "/ecommerce-website-development-company-in-delhi": [
    {
      h2: "How do you launch an online store without problems?",
      body: [
        "We launch in a controlled way: a final round of test orders, checks on payments, shipping, taxes and emails, then go-live at a quiet time of day. For the first two weeks we monitor orders, errors and site speed closely, fix any issues immediately, and review early customer behaviour to spot quick improvements to product pages and checkout.",
      ],
    },
  ],
  "/website-maintenance-services-in-delhi": [
    {
      h2: "How do you start maintaining an existing website?",
      body: [
        "We begin by collecting all access details and taking a full backup. Then we review installed software, security settings, hosting performance and errors, and prepare a short report of what needs attention. Urgent issues are fixed first. After that, the site moves onto a regular schedule of updates, backups, monitoring and monthly reporting, with your requested content changes handled along the way.",
      ],
    },
  ],
  "/logo-designer-in-delhi": [
    {
      h2: "How is the final logo delivered?",
      body: [
        "You receive an organised folder with vector and image files in colour, black, white and reversed versions, sized for print, web, social profiles and favicons, plus a short guide showing correct use.",
      ],
    },
  ],
  "/seo-company-in-noida": [
    {
      h2: "How do we start working with a Noida business?",
      body: [
        "Send your website or Google Maps link on WhatsApp, or visit our New Ashok Nagar office. We share a free audit, agree a short plan with priorities, and begin with the quickest wins, usually your Google Business Profile and key service pages, while longer-term SEO builds.",
      ],
    },
  ],
  "/seo-company-in-gurugram": [
    {
      h2: "How do we start working with a Gurugram business?",
      body: [
        "We begin with a discovery call to understand your goals, buyers and current marketing. Then we audit your website, Search Console data and competitors, and present a prioritised plan covering technical fixes, content and links. Work starts with the changes most likely to bring qualified leads soonest. Throughout, you get a single point of contact, a shared task list and monthly reviews, whether we meet in person or online.",
      ],
    },
  ],
  "/digital-marketing-company-in-ahmedabad": [
    {
      h2: "What results can an Ahmedabad business expect?",
      body: [
        "GMB fixes and optimisation often show more calls and direction requests within the first couple of months. Geo-targeted ads can bring enquiries within days of launch. SEO builds more gradually, with local keywords moving first and competitive city-wide terms taking longer. We share a baseline at the start and compare each month, so progress is always visible and honest. Where a channel is not delivering, we say so and shift effort to what works.",
      ],
    },
  ],
};
