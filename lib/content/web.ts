import type { Category, ServiceContent } from "../types";

const p = (t1: string, t2: string, t3: string, t4: string) => [
  { title: "Discover", text: t1 },
  { title: "Design", text: t2 },
  { title: "Build", text: t3 },
  { title: "Launch and support", text: t4 },
];

const websiteDesign: ServiceContent = {
  slug: "website-design",
  name: "Website Design",
  icon: "pen",
  cardText: "Clean, modern designs that make your business look as good as it is.",
  keyword: "website designing company in delhi",
  metaTitle: "Website Designing Company in Delhi | Responsive Design",
  metaDescription:
    "Website designing company in East Delhi creating clean, responsive, conversion-focused websites for small businesses, startups and brands across Delhi NCR.",
  eyebrow: "Website designing · Delhi",
  h1: "Website designing company in Delhi that earns trust in five seconds",
  lead:
    "Visitors decide almost instantly whether a website feels trustworthy. Good design makes that decision easy: clear, honest and unmistakably yours.",
  quickAnswer: {
    q: "What does a website designing company do?",
    a: "A website designing company plans the structure, layout, visual style and user experience of a website. It creates sitemaps, wireframes and designs for desktop and mobile, chooses colours and typography that match the brand, and makes sure visitors can quickly understand the business and take action, such as calling, messaging or buying.",
  },
  takeaways: [
    "Most visitors now arrive on mobile, so design should start with the phone screen.",
    "Clear headlines and obvious calls to action matter more than decoration.",
    "Approve wireframes before visual design to avoid costly late changes.",
    "Good design supports SEO through clear structure, readable text and fast pages.",
  ],
  intro: [
    "Design is not decoration. It is how quickly a visitor understands what you do, whether you look reliable, and what they should do next. We design websites that answer those three questions without making anyone think too hard.",
    "Our designs start from your real customers: what they worry about, what they compare and what finally makes them pick up the phone. That shapes everything from the headline to the colour of the WhatsApp button. If you do not have a brand identity yet, our [logo design service](/logo-designer-in-delhi) can create one first, and once the design is approved our [website development team](/website-development-company-in-delhi) builds it.",
  ],
  highlights: [
    { icon: "spark", title: "Custom, not template", text: "A layout built for your brand, not a theme everyone else uses." },
    { icon: "phone", title: "Responsive on every screen", text: "Phones, tablets, laptops and large monitors all look right." },
    { icon: "users", title: "User-first layouts", text: "Navigation and content order based on how people decide." },
    { icon: "shield", title: "Accessible by default", text: "Readable fonts, good contrast and keyboard-friendly navigation." },
  ],
  sections: [
    {
      h2: "What is our website design process?",
      body: [
        "We start with structure before style. A sitemap and wireframes decide what goes where; only then do we bring in colour, typography and imagery. You review and approve each stage, so there are no surprises at the end.",
      ],
      list: [
        "Brand-aligned colour palette and typography",
        "Wireframes for key pages before visual design",
        "Real content planning instead of placeholder text",
        "Clear calls to action on every page",
        "Design handed directly into a fast build",
      ],
    },
    {
      h2: "What makes a business website design convert?",
      body: [
        "A headline that says what you do and for whom, visible proof such as reviews or results, a clear next step on every screen, and as little friction as possible. Contact options should be one tap away on mobile. Pages should load fast and read easily. Fancy animations that slow the page or hide information usually hurt more than they help.",
      ],
    },
    {
      h2: "How does design affect SEO?",
      body: [
        "Well-structured pages with one clear heading, logical subheadings, readable text and fast-loading images are easier for Google to understand and for people to stay on. Good design and good [SEO](/seo-company-in-delhi) pull in the same direction, so we plan both together from the first wireframe.",
      ],
    },
    {
      h2: "Should I redesign or refresh my current website?",
      body: [
        "If your site is slow, hard to use on mobile, or no longer reflects your business, a redesign is worth it. If the structure works and it ranks well, a visual refresh and content update may be enough. We review your current site and recommend the option with the best return, including how to protect existing rankings.",
      ],
    },
    {
      h2: "How long does website design take?",
      body: [
        "For a typical business website, design takes one to three weeks depending on the number of unique page layouts and how quickly feedback comes back. Larger sites and e-commerce stores take longer. Having your content, photos and logo ready speeds things up considerably.",
      ],
    },
  ],
  table: {
    caption: "Template versus custom design",
    head: ["Aspect", "Template", "Custom design"],
    rows: [
      ["Uniqueness", "Shared with many sites", "Built for your brand"],
      ["Speed", "Often heavy with unused features", "Only what you need"],
      ["Cost", "Lower upfront", "Higher upfront, better fit"],
      ["Flexibility", "Limited by theme", "Designed around your content"],
    ],
  },
  process: p(
    "Your brand, audience and the sites you like and dislike.",
    "Wireframes, then full-colour designs for mobile and desktop.",
    "Approved designs move straight into development.",
    "Testing, launch and small refinements after go-live.",
  ),
  faqs: [
    { q: "Will you give my current website a new design?", a: "Gladly. We keep what already works or ranks, redesign the rest, and plan redirects to protect your traffic." },
    { q: "Do you use templates or custom designs?", a: "We design custom layouts. For tight budgets we can adapt a fast, high-quality theme and tell you honestly which suits you." },
    { q: "How many revisions do I get?", a: "Each stage includes revision rounds so you are happy before we move on. Because you approve wireframes first, big late changes are rare." },
    { q: "Will my website work on mobile?", a: "Yes. We design mobile first and test on real phones." },
    { q: "Do you write the website content?", a: "We can. Our writers create clear, SEO-friendly copy, or we polish the content you provide." },
    { q: "Can I meet you to discuss the design?", a: "Yes, at our office in New Ashok Nagar, East Delhi, or over a video call." },
  ],
  related: ["/logo-designer-in-delhi", "/wordpress-development-company-in-delhi", "/website-development-company-in-delhi"],
  external: { label: "web.dev: Learn responsive design", url: "https://web.dev/learn/design" },
};

const wordpress: ServiceContent = {
  slug: "wordpress-development",
  name: "WordPress Development",
  icon: "wordpress",
  cardText: "Easy-to-manage WordPress sites, built lean and secure.",
  keyword: "wordpress development company in delhi",
  metaTitle: "WordPress Development Company in Delhi | Fast & Secure Sites",
  metaDescription:
    "WordPress developer in Delhi building fast, secure, easy-to-edit WordPress websites and blogs, plus speed fixes, malware clean-up and maintenance.",
  eyebrow: "WordPress development",
  h1: "WordPress development company in Delhi: easy to manage, fast to load",
  lead:
    "Millions of businesses run on WordPress because it is flexible and simple to update. Built badly, it is also slow and insecure. We build it properly.",
  quickAnswer: {
    q: "Why choose WordPress for a business website?",
    a: "WordPress is a free, open-source content management system that lets businesses edit pages and publish blogs without coding. Thousands of themes and plugins extend it, works well for SEO, and can be hosted anywhere. It performs best when built with a lightweight theme, few plugins, good hosting and regular updates.",
  },
  takeaways: [
    "Too many plugins and heavy page builders are the main causes of slow WordPress sites.",
    "Regular core, theme and plugin updates are essential for security.",
    "WooCommerce adds full e-commerce to WordPress.",
    "Good hosting matters as much as good code for WordPress speed.",
  ],
  intro: [
    "Many WordPress sites we are asked to fix are weighed down by heavy page builders, dozens of unused plugins and unoptimised images. They look fine on an office laptop and crawl on a customer’s phone.",
    "We build WordPress sites lean: a lightweight theme or custom blocks, only the plugins you genuinely need, proper caching and image optimisation. You still get the simple editor you expect, without the bloat. If you need an online store, we extend it with [WooCommerce](/woocommerce-development-company), and our [maintenance plans](/website-maintenance-services-in-delhi) keep it updated and secure.",
  ],
  highlights: [
    { icon: "bolt", title: "Lightweight builds", text: "Minimal plugins and optimised themes for strong speed scores." },
    { icon: "shield", title: "Security hardening", text: "Firewall, backups, updates and login protection." },
    { icon: "pen", title: "Easy editing", text: "Edit text, images and posts without calling a developer." },
    { icon: "search", title: "SEO-ready", text: "Clean structure, schema and an SEO plugin configured properly." },
  ],
  sections: [
    {
      h2: "What WordPress services do we provide?",
      body: [],
      list: [
        "New WordPress business websites and blogs",
        "Custom themes and Gutenberg blocks",
        "WooCommerce stores with Indian payment gateways",
        "Speed optimisation for slow WordPress sites",
        "Malware clean-up and security hardening",
        "Migrations from Wix, Blogger or old hosting",
        "Monthly maintenance: updates, backups and monitoring",
      ],
    },
    {
      h2: "Is WordPress right for my business?",
      body: [
        "WordPress is ideal if you want to publish regularly, manage many pages, or keep full control of your site and hosting. If you mainly sell products and want the simplest setup, [Shopify](/shopify-development-company-in-delhi) may suit you better. If you need complex custom features such as portals or booking systems, a framework like Laravel might be the better base. We help you choose honestly.",
      ],
    },
    {
      h2: "Why is my WordPress website slow?",
      body: [
        "The usual causes are cheap shared hosting, heavy page builders, too many plugins, large images, and third-party scripts such as chat widgets and trackers. A speed audit usually finds a handful of big fixes that make a dramatic difference without rebuilding the site.",
      ],
    },
    {
      h2: "How do you keep WordPress secure?",
      body: [
        "Most WordPress hacks come from outdated plugins and weak passwords. We keep software updated, remove unused plugins, add a firewall and login protection, set up off-site backups, and use secure hosting configuration. If your site has already been hacked, we clean it, close the hole and restore trust with Google if warnings appeared.",
      ],
    },
    {
      h2: "Will I be able to manage the website myself?",
      body: [
        "Yes. We set up editable blocks and fields for your common changes, give you a short training session, and provide a written guide. You can update text, images, blog posts and offers without touching code.",
      ],
    },
  ],
  table: {
    caption: "WordPress versus other platforms",
    head: ["Need", "Best fit"],
    rows: [
      ["Blog and content-heavy site", "WordPress"],
      ["Simple online store", "Shopify"],
      ["Store plus lots of content", "WordPress + WooCommerce"],
      ["Complex custom application", "Laravel or custom code"],
    ],
  },
  process: p(
    "Pages, features and plugins agreed upfront.",
    "Custom design built on a lean, fast theme.",
    "Caching, image compression, security and SEO configured.",
    "Training, documentation and optional maintenance plan.",
  ),
  faqs: [
    { q: "Can you fix a hacked WordPress site?", a: "Yes. We remove malware, close the vulnerability, restore clean files and set up protection and backups." },
    { q: "Do you offer WordPress maintenance?", a: "Yes, monthly plans covering updates, backups, uptime monitoring and small edits." },
    { q: "Can I move from Wix to WordPress?", a: "Yes. We migrate content, rebuild the design and set up redirects to keep your Google traffic." },
    { q: "Do you use Elementor?", a: "We can, but we prefer lighter approaches for speed. If your team relies on a builder, we optimise it carefully." },
    { q: "Which hosting do you recommend?", a: "Reliable managed or cloud hosting with servers in or near India. We recommend options based on your traffic and budget." },
    { q: "How long does a WordPress site take?", a: "A standard business site usually takes two to four weeks once content is ready." },
  ],
  related: ["/woocommerce-development-company", "/website-maintenance-services-in-delhi", "/technical-seo-services-in-delhi"],
  external: { label: "WordPress.org", url: "https://wordpress.org/" },
};

const shopify: ServiceContent = {
  slug: "shopify-development",
  name: "Shopify Development",
  icon: "bag",
  cardText: "Shopify stores set up to sell: themes, apps, payments and shipping.",
  keyword: "shopify development company in delhi",
  metaTitle: "Shopify Development Company in Delhi | Store Setup & Design",
  metaDescription:
    "Shopify development in Delhi: store setup, theme customisation, Indian payments and COD, shipping integrations, migrations and speed optimisation.",
  eyebrow: "Shopify development",
  h1: "Shopify development company in Delhi for brands ready to sell online",
  lead:
    "Shopify takes care of hosting, security and checkout, so you can focus on selling. We make sure your store looks like a brand people trust and buys from.",
  quickAnswer: {
    q: "What does a Shopify development company do?",
    a: "A Shopify development company sets up and customises online stores on Shopify. That includes theme design, product and collection structure, payment gateways, shipping and tax settings, app selection and integration, migrations from other platforms, speed optimisation and conversion improvements so the store sells more efficiently.",
  },
  takeaways: [
    "Shopify handles hosting, security and checkout, reducing maintenance work.",
    "Every app adds code; too many apps slow the store down.",
    "Indian stores need UPI, cards and often COD with verification to reduce returns.",
    "Collection pages need unique content to rank well in Google.",
  ],
  intro: [
    "From Lajpat Nagar fashion labels to Chandni Chowk wholesalers and Okhla manufacturers, more Delhi NCR businesses are selling directly online. Shopify is often the fastest, most reliable way to do it, as long as the store is set up thoughtfully.",
    "We handle the full setup: theme design, product structure, Indian payment gateways and COD, shipping partners, GST settings and only the apps that genuinely help. Then we optimise for speed and conversions, because traffic means nothing if visitors do not check out. To bring that traffic, pair your store with [Google Shopping ads](/google-shopping-ads-agency) and [e-commerce SEO](/ecommerce-seo-services).",
  ],
  highlights: [
    { icon: "spark", title: "Custom theme design", text: "A store that reflects your brand, not a default demo." },
    { icon: "cart", title: "Indian checkout setup", text: "UPI, cards, COD, shipping and GST configured correctly." },
    { icon: "bolt", title: "Speed optimised", text: "Lean apps and compressed media for faster pages." },
    { icon: "chart", title: "Tracking ready", text: "GA4, Meta pixel and Google Merchant Center connected." },
  ],
  sections: [
    {
      h2: "What Shopify services do we offer?",
      body: [],
      list: [
        "New store setup and theme customisation",
        "Product, collection and variant structure",
        "Payment gateways such as Razorpay, PayU and Cashfree, plus COD",
        "Shipping integrations with Shiprocket, Delhivery and others",
        "WhatsApp order notifications and abandoned-cart recovery",
        "Migration from WooCommerce, Wix or custom platforms",
        "Shopify SEO, speed optimisation and conversion improvements",
      ],
    },
    {
      h2: "Shopify or WooCommerce: which should I choose?",
      body: [
        "Shopify is simpler to run and very reliable, with a monthly subscription and less technical upkeep. WooCommerce gives more control and no platform fee but needs more maintenance. For most first-time online sellers, Shopify is the easier start. If you already run a content-heavy WordPress site, [WooCommerce](/woocommerce-development-company) can make more sense.",
      ],
    },
    {
      h2: "How do you reduce COD returns and fake orders?",
      body: [
        "We can add COD verification through WhatsApp or SMS, partial prepaid options, pin-code restrictions for high-return areas and clear delivery expectations. Encouraging prepaid orders with small incentives also helps. These steps protect margins without losing genuine COD buyers.",
      ],
    },
    {
      h2: "How do you make a Shopify store convert better?",
      body: [
        "Clear product photos, honest descriptions, visible delivery timelines, trust badges that mean something, reviews, and a fast checkout. We also simplify navigation, improve collection filters and remove apps that slow pages down. Small improvements across these areas often lift conversion rates meaningfully.",
      ],
    },
    {
      h2: "Can you migrate my store to Shopify?",
      body: [
        "Yes. We move products, customers and order history where possible, rebuild the design, and set up redirects from old URLs so you keep search rankings. We test thoroughly before switching the domain and monitor closely after launch.",
      ],
    },
  ],
  table: {
    caption: "Shopify versus WooCommerce",
    head: ["Aspect", "Shopify", "WooCommerce"],
    rows: [
      ["Hosting and security", "Included", "You manage"],
      ["Monthly cost", "Subscription plus apps", "Hosting plus plugins"],
      ["Ease of use", "Very easy", "Moderate"],
      ["Flexibility", "High within platform", "Very high"],
    ],
  },
  process: p(
    "Products, categories, shipping zones and payment methods planned.",
    "Theme customised to your brand and products.",
    "Payments, shipping, taxes and essential apps configured.",
    "Testing, go-live and a plan for traffic through ads and SEO.",
  ),
  faqs: [
    { q: "Does Shopify support Cash on Delivery in India?", a: "Yes. COD can be enabled, and we can add verification or partial prepaid options to reduce fake orders." },
    { q: "Can you upload all my products?", a: "Yes, manually or by bulk import, with proper titles, descriptions, images and variants." },
    { q: "Do you build custom Shopify themes?", a: "We customise premium themes or build custom sections, depending on your needs and budget." },
    { q: "Will you help me get sales after launch?", a: "Yes. Many clients pair their store with our Meta ads, Google Shopping and SEO services." },
    { q: "How long does a Shopify store take to build?", a: "Usually two to five weeks, depending on product count, design and integrations." },
    { q: "Who owns the store?", a: "You do. The Shopify account, domain and content are in your name." },
  ],
  related: ["/ecommerce-website-development-company-in-delhi", "/google-shopping-ads-agency", "/ecommerce-seo-services"],
  external: { label: "Shopify Help Center", url: "https://help.shopify.com/" },
};

const woo: ServiceContent = {
  slug: "woocommerce-development",
  name: "WooCommerce Development",
  icon: "cart",
  cardText: "Flexible WordPress stores with full control over your data and costs.",
  keyword: "woocommerce development company",
  metaTitle: "WooCommerce Development Company | WordPress Stores",
  metaDescription:
    "WooCommerce development for Indian businesses: custom WordPress stores, payment gateways, shipping, speed optimisation, migrations and ongoing support.",
  eyebrow: "WooCommerce development",
  h1: "WooCommerce development company for stores that want full control",
  lead:
    "WooCommerce turns WordPress into a full online store with no platform fees and complete freedom to customise. We build it to be fast, secure and easy to run.",
  quickAnswer: {
    q: "What is WooCommerce?",
    a: "WooCommerce is a free, open-source e-commerce plugin for WordPress. It adds products, cart, checkout, payments, shipping and order management to a WordPress website. Businesses choose it for flexibility, ownership of data and the ability to combine a store with rich content, though it requires good hosting and regular maintenance.",
  },
  takeaways: [
    "WooCommerce itself is free; costs come from hosting, premium plugins and development.",
    "It suits stores that also publish lots of content or need custom features.",
    "Speed depends heavily on hosting, caching and plugin choices.",
    "Updates and backups are your responsibility, unlike hosted platforms.",
  ],
  intro: [
    "WooCommerce is a strong choice when you want your store and your content in one place, need custom features that hosted platforms restrict, or want to avoid per-transaction platform fees. It is also the natural choice if you already have a successful [WordPress website](/wordpress-development-company-in-delhi).",
    "The trade-off is responsibility: hosting, speed, updates and security are yours to manage. We build WooCommerce stores that handle these properly from day one, and offer [maintenance plans](/website-maintenance-services-in-delhi) so the store stays fast and secure.",
  ],
  highlights: [
    { icon: "wordpress", title: "WordPress-native", text: "Store and content managed in one familiar dashboard." },
    { icon: "cart", title: "Indian payments", text: "Razorpay, PayU, Cashfree, UPI and COD integrated." },
    { icon: "bolt", title: "Performance tuning", text: "Caching, optimised queries and lean plugins for speed." },
    { icon: "code", title: "Custom features", text: "B2B pricing, bulk orders, subscriptions and more." },
  ],
  sections: [
    {
      h2: "What WooCommerce services do we provide?",
      body: [],
      list: [
        "New WooCommerce stores on WordPress",
        "Custom product types, variations and B2B pricing",
        "Payment gateway and shipping integrations",
        "GST invoices and tax configuration",
        "Speed optimisation for slow stores",
        "Migration from Shopify, Magento or OpenCart",
        "Ongoing maintenance and support",
      ],
    },
    {
      h2: "When is WooCommerce better than Shopify?",
      body: [
        "Choose WooCommerce if you publish a lot of content alongside products, need custom functionality, want full ownership of data and hosting, or have unusual product types. Choose Shopify if you want the simplest possible operation with minimal technical upkeep. Our [Shopify team](/shopify-development-company-in-delhi) can advise if you are unsure.",
      ],
    },
    {
      h2: "How do you make WooCommerce stores fast?",
      body: [
        "We start with quality hosting, then add page and object caching, a lightweight theme, optimised images and a carefully limited plugin list. Database clean-up and disabling unnecessary scripts on non-store pages help further. Speed directly affects conversions and SEO, so we test on real mobile devices before launch.",
      ],
    },
    {
      h2: "Can WooCommerce handle B2B and wholesale?",
      body: [
        "Yes. With the right setup, WooCommerce supports customer-specific pricing, minimum order quantities, quote requests, bulk order forms and credit terms. This makes it popular with wholesalers and manufacturers in Delhi NCR who sell to both retailers and consumers.",
      ],
    },
    {
      h2: "How do you keep a WooCommerce store secure?",
      body: [
        "Regular updates, a web application firewall, strong admin security, limited plugin use, daily backups and payment handled by trusted gateways so card data never touches your server. We also monitor for suspicious activity and fix issues quickly.",
      ],
    },
  ],
  table: {
    caption: "WooCommerce at a glance",
    head: ["Strength", "Consideration"],
    rows: [
      ["No platform fees", "Hosting and plugins cost money"],
      ["Full customisation", "Needs developer skills for complex changes"],
      ["Content and store together", "Requires regular maintenance"],
      ["Own your data", "Security is your responsibility"],
    ],
  },
  process: p(
    "Products, features, integrations and hosting planned.",
    "Store design for home, category, product and checkout.",
    "WooCommerce build, payments, shipping and testing.",
    "Launch, training and ongoing maintenance options.",
  ),
  faqs: [
    { q: "Is WooCommerce free?", a: "The plugin is free. You pay for hosting, any premium plugins or themes, and development." },
    { q: "Is WooCommerce suitable for a large catalogue?", a: "It is. Stores with several thousand products run smoothly when hosting, caching and database tuning are done properly." },
    { q: "Can you convert my WordPress site into a store?", a: "Yes, we can add WooCommerce to your existing WordPress website." },
    { q: "Do you integrate shipping partners?", a: "Yes, including Shiprocket, Delhivery and other Indian logistics providers." },
    { q: "Can customers pay by UPI?", a: "Yes, through gateways like Razorpay, PayU and Cashfree." },
    { q: "Do you offer support after launch?", a: "Yes, monthly maintenance plans or on-demand support." },
  ],
  related: ["/wordpress-development-company-in-delhi", "/shopify-development-company-in-delhi", "/website-maintenance-services-in-delhi"],
  external: { label: "WooCommerce documentation", url: "https://woocommerce.com/documentation/" },
};

const laravel: ServiceContent = {
  slug: "laravel-development",
  name: "Laravel Development",
  icon: "code",
  cardText: "Custom web applications, portals and APIs built on Laravel.",
  keyword: "laravel development company in delhi",
  metaTitle: "Laravel Development Company in Delhi | Custom Web Apps",
  metaDescription:
    "Laravel development in Delhi: custom web applications, admin panels, portals, APIs and SaaS products built securely and maintainably on the Laravel framework.",
  eyebrow: "Laravel development",
  h1: "Laravel development company in Delhi for custom web applications",
  lead:
    "When a template website is not enough, such as customer portals, booking systems, dashboards or SaaS products, Laravel gives us a secure, proven foundation to build exactly what you need.",
  quickAnswer: {
    q: "What is Laravel used for?",
    a: "Laravel is a popular open-source PHP framework for building custom web applications. It is used for portals, dashboards, CRMs, booking systems, e-commerce backends, APIs for mobile apps and SaaS products. It provides built-in tools for routing, authentication, database management, queues and security, which speeds up development and maintenance.",
  },
  takeaways: [
    "Laravel suits custom applications, not simple brochure websites.",
    "It includes strong security defaults such as CSRF protection and hashed passwords.",
    "A clear scope and phased delivery keep custom projects on budget.",
    "Laravel APIs can power both web dashboards and mobile apps.",
  ],
  intro: [
    "Some business problems do not fit an off-the-shelf tool: a dealer portal for a manufacturer, a booking and billing system for a clinic chain, an internal dashboard pulling data from several sources, or a new SaaS idea. These need custom software, and Laravel is one of the most reliable ways to build it.",
    "We design the system around your workflow, build it in clear phases, and document it so it can be maintained for years. Laravel APIs can also power [mobile apps](/mobile-app-development-company-in-delhi), so web and app share one backend. For simpler marketing websites, [WordPress](/wordpress-development-company-in-delhi) is usually the better fit.",
  ],
  highlights: [
    { icon: "code", title: "Custom applications", text: "Portals, dashboards, CRMs and booking systems." },
    { icon: "link", title: "APIs and integrations", text: "Payment gateways, ERPs, SMS, WhatsApp and third-party tools." },
    { icon: "shield", title: "Secure by design", text: "Authentication, roles, validation and audit logs." },
    { icon: "wrench", title: "Maintainable code", text: "Tests, documentation and clean architecture." },
  ],
  sections: [
    {
      h2: "What can we build with Laravel?",
      body: [],
      list: [
        "Customer and dealer portals with logins and roles",
        "Admin panels and internal dashboards",
        "Booking, scheduling and billing systems",
        "SaaS products with subscriptions",
        "REST APIs for mobile apps",
        "Integrations with Tally, ERPs, payment gateways and WhatsApp",
        "Upgrades and rescues of existing Laravel or PHP projects",
      ],
    },
    {
      h2: "How do you keep custom projects on time and budget?",
      body: [
        "We start with a short discovery phase to map workflows and agree a minimum viable version. Work is split into milestones with demos every one or two weeks, so you see progress and can adjust priorities early. Change requests are discussed openly with their impact on time and cost before they are added.",
      ],
    },
    {
      h2: "Why choose Laravel over other frameworks?",
      body: [
        "Laravel has a mature ecosystem, excellent documentation and a large developer community, which makes it easier to find developers for future maintenance. It offers built-in tools for authentication, queues, caching, scheduling and testing, which speeds up development without sacrificing quality.",
      ],
    },
    {
      h2: "Can you take over an existing Laravel project?",
      body: [
        "Yes. We start with a code audit to understand structure, dependencies, security and technical debt, then propose a plan: fix urgent issues, upgrade framework versions safely and continue development. Clear communication about what we find is part of the process.",
      ],
    },
    {
      h2: "How do you handle hosting and security?",
      body: [
        "We deploy to reliable cloud servers with automated backups, SSL, environment-based configuration and monitoring. Code follows Laravel security practices, and sensitive actions are logged. We can also support ongoing maintenance through our [website maintenance service](/website-maintenance-services-in-delhi).",
      ],
    },
  ],
  table: {
    caption: "When to use Laravel",
    head: ["Project", "Recommended"],
    rows: [
      ["Marketing website", "WordPress or Next.js"],
      ["Online store", "Shopify or WooCommerce"],
      ["Portal, dashboard or CRM", "Laravel"],
      ["SaaS product or mobile app backend", "Laravel"],
    ],
  },
  process: p(
    "Workflows, users and must-have features mapped.",
    "Database design, wireframes and technical plan.",
    "Milestone-based development with regular demos.",
    "Deployment, documentation and ongoing support.",
  ),
  faqs: [
    { q: "How much does a Laravel application cost?", a: "It depends on features, integrations and complexity. After discovery we provide a phased quote so you can start with the essentials." },
    { q: "Will I own the source code?", a: "Yes. Once paid, the code and documentation belong to you." },
    { q: "Can Laravel connect to my existing software?", a: "Usually yes, through APIs, database connections or file-based integrations." },
    { q: "Do you build the front end too?", a: "Yes, using Blade, Livewire, Vue or React depending on the project." },
    { q: "How long does a custom application take?", a: "A focused first version often takes six to twelve weeks; larger systems are delivered in phases." },
    { q: "Do you provide maintenance?", a: "Yes, including security updates, bug fixes and new features." },
  ],
  related: ["/mobile-app-development-company-in-delhi", "/website-development-company-in-delhi", "/website-maintenance-services-in-delhi"],
  external: { label: "Laravel documentation", url: "https://laravel.com/docs" },
};

const wix: ServiceContent = {
  slug: "wix-development",
  name: "Wix Development",
  icon: "spark",
  cardText: "Professional Wix websites, redesigns and Wix SEO.",
  keyword: "wix website designer",
  metaTitle: "Wix Website Designer & Developer | Wix Design and SEO",
  metaDescription:
    "Wix website design and development: professional Wix sites, redesigns, Wix Studio builds, SEO setup and migrations for small businesses and professionals.",
  eyebrow: "Wix development",
  h1: "Wix website designer for businesses that want simple and professional",
  lead:
    "Wix lets you edit your own website with drag-and-drop ease. We make sure it looks professional, loads well and is set up properly for Google from the start.",
  quickAnswer: {
    q: "Is Wix good for a small business website?",
    a: "Wix is a good choice for small businesses and professionals who want a website they can edit easily without technical maintenance. Hosting, security and updates are included. It suits brochure sites, portfolios, small stores and booking-based services, though it offers less flexibility and portability than WordPress or custom development.",
  },
  takeaways: [
    "Wix includes hosting, security and updates in its subscription.",
    "Wix sites can rank well when SEO basics are configured properly.",
    "Moving a site away from Wix later means rebuilding, not exporting.",
    "Wix Studio offers more design control for agencies and complex layouts.",
  ],
  intro: [
    "Wix is popular with consultants, doctors, coaches, photographers and small shops because it is easy to update. The problem is that many Wix sites are built quickly from templates, leaving them generic, slow and poorly set up for search.",
    "We design Wix websites that look custom, structure pages for clarity and conversion, and configure SEO settings properly. If you outgrow Wix later, we can help you move to [WordPress](/wordpress-development-company-in-delhi) with redirects that protect your rankings. For ongoing visibility, our [local SEO service](/local-seo-services-in-delhi) works with Wix sites too.",
  ],
  highlights: [
    { icon: "pen", title: "Custom-looking design", text: "Templates reworked or designed from scratch in Wix Studio." },
    { icon: "search", title: "Wix SEO setup", text: "Titles, descriptions, URLs, structured data and sitemaps." },
    { icon: "phone", title: "Mobile layouts", text: "Separate mobile tweaks so phones look as good as desktops." },
    { icon: "users", title: "Easy handover", text: "Training so you can update content confidently." },
  ],
  sections: [
    {
      h2: "What Wix services do we offer?",
      body: [],
      list: [
        "New Wix and Wix Studio websites",
        "Redesign of existing Wix sites",
        "Wix bookings, forms and member areas",
        "Wix Stores setup for small catalogues",
        "Wix SEO configuration and content",
        "Speed improvements within Wix limits",
        "Migration from Wix to WordPress",
      ],
    },
    {
      h2: "Can a Wix website rank on Google?",
      body: [
        "Yes. Inside Wix you can set page titles, meta descriptions, URL slugs, headings, alt text, redirects and structured data. Many ranking problems on Wix sites come from thin content and missing basics rather than the platform itself. We set up the essentials and write pages that answer customers’ questions.",
      ],
    },
    {
      h2: "What are the limitations of Wix?",
      body: [
        "You cannot export a Wix site to another platform; moving means rebuilding. Advanced custom features and very large sites are harder than on WordPress or custom code. Page speed can be limited by heavy templates and apps. For many small businesses these limits never matter, but we explain them before you commit.",
      ],
    },
    {
      h2: "Should I choose Wix or WordPress?",
      body: [
        "Choose Wix if you want minimal maintenance and simple editing, and your site needs are modest. Choose WordPress if you plan to publish a lot of content, need specific plugins or features, or want full ownership and portability. We have no platform bias and recommend what fits your plans for the next few years.",
      ],
    },
    {
      h2: "How do you speed up a Wix site?",
      body: [
        "We reduce heavy animations and unnecessary apps, compress and resize images, limit fonts, simplify long pages and use Wix’s built-in performance features. While Wix controls the hosting, these changes often make a noticeable difference on mobile.",
      ],
    },
  ],
  table: {
    caption: "Wix versus WordPress",
    head: ["Aspect", "Wix", "WordPress"],
    rows: [
      ["Ease of editing", "Very easy", "Easy after setup"],
      ["Maintenance", "Handled by Wix", "Updates needed"],
      ["Flexibility", "Moderate", "Very high"],
      ["Portability", "Cannot export", "Fully portable"],
    ],
  },
  process: p(
    "Goals, pages and features agreed.",
    "Custom design in Wix or Wix Studio.",
    "Build, mobile layouts and SEO configuration.",
    "Launch, training and optional SEO support.",
  ),
  faqs: [
    { q: "Do you work in Wix Studio?", a: "Yes, for projects needing more design control and responsive layouts." },
    { q: "Can you improve my existing Wix site?", a: "Yes, we redesign layouts, improve content and fix SEO settings without starting over." },
    { q: "Can I edit the site myself afterwards?", a: "Yes, Wix is designed for that, and we provide training." },
    { q: "Can you move my Wix site to WordPress?", a: "Yes, by rebuilding it on WordPress and setting up redirects to preserve rankings." },
    { q: "Is Wix good for e-commerce?", a: "For small catalogues, yes. Larger or growing stores are usually better on Shopify." },
    { q: "Who pays the Wix subscription?", a: "The subscription is in your name and paid directly to Wix." },
  ],
  related: ["/wordpress-development-company-in-delhi", "/website-designing-company-in-delhi", "/local-seo-services-in-delhi"],
  external: { label: "Wix Help Center", url: "https://support.wix.com/" },
};

const ecommerce: ServiceContent = {
  slug: "ecommerce-website-development",
  name: "E-commerce Development",
  icon: "store",
  cardText: "Online stores with payments, inventory and shipping that just work.",
  keyword: "ecommerce website development company in delhi",
  metaTitle: "E-commerce Website Development Company in Delhi",
  metaDescription:
    "E-commerce website development in Delhi: B2C and B2B online stores on Shopify, WooCommerce or custom stacks with payments, shipping and SEO built in.",
  eyebrow: "E-commerce development",
  h1: "Ecommerce website development company in Delhi for businesses selling beyond their city",
  lead:
    "An online store lets a Delhi business sell across India while the shop is closed. We build stores that are simple to run and easy to buy from.",
  quickAnswer: {
    q: "What does e-commerce website development include?",
    a: "E-commerce website development covers planning, designing and building an online store: product catalogue, search and filters, cart and checkout, payment gateways, shipping integrations, tax and invoicing, customer accounts, inventory management, analytics and SEO. The right platform depends on catalogue size, budget, integrations and whether you sell to consumers, businesses or both.",
  },
  takeaways: [
    "Platform choice should follow your catalogue, integrations and team skills.",
    "A short, mobile-friendly checkout is one of the biggest conversion factors.",
    "B2B stores need features such as tiered pricing and quote requests.",
    "Plan SEO and tracking before launch, not after.",
  ],
  intro: [
    "Selling online is more than adding a cart button. You need clear product pages, a checkout that works on any phone, reliable payments, shipping that does not eat your margin, and a way for people to actually find your store.",
    "We build on [Shopify](/shopify-development-company-in-delhi), [WooCommerce](/woocommerce-development-company) or custom stacks depending on your catalogue size, budget and integrations. For B2B suppliers we add bulk ordering, quote requests and customer-specific pricing.",
  ],
  highlights: [
    { icon: "cart", title: "Smooth checkout", text: "Fewer steps, Indian payment options and mobile-friendly forms." },
    { icon: "store", title: "B2C and B2B", text: "Retail stores, wholesale portals and catalogues." },
    { icon: "shield", title: "Secure payments", text: "Trusted gateways with SSL and fraud protection." },
    { icon: "search", title: "Product SEO", text: "Category and product pages structured to rank." },
  ],
  sections: [
    {
      h2: "Which e-commerce features do we build?",
      body: [],
      list: [
        "Product catalogues with filters, variants and search",
        "Payment gateways, UPI and Cash on Delivery",
        "Shipping integrations and order tracking",
        "Inventory management and low-stock alerts",
        "Discount codes, bundles and festival sale features",
        "B2B pricing, bulk ordering and GST invoices",
        "Customer accounts, wishlists and order history",
      ],
    },
    {
      h2: "Which platform should I choose for my online store?",
      body: [
        "Shopify suits most direct-to-consumer brands that want reliability and simplicity. WooCommerce suits businesses that publish lots of content or need deep customisation. Custom builds, often with [Laravel](/laravel-development-company-in-delhi), suit complex B2B workflows, marketplaces or unusual business models. We recommend based on your situation, not what is easiest for us.",
      ],
    },
    {
      h2: "What makes an online store convert?",
      body: [
        "Fast pages, good product photography, honest descriptions, clear delivery and return information, visible reviews and a short checkout. Guest checkout, UPI and saved addresses reduce friction. We design every step with mobile shoppers in mind, because that is where most Indian online shopping happens.",
      ],
    },
    {
      h2: "How do you plan for growth after launch?",
      body: [
        "We set up analytics, conversion tracking and product feeds before launch so marketing can start immediately. The site structure supports [e-commerce SEO](/ecommerce-seo-services), and feeds are ready for Google Shopping and Meta catalogue ads. As you grow, the store can add features such as loyalty programmes and apps.",
      ],
    },
    {
      h2: "Can you build B2B ordering portals?",
      body: [
        "Yes. Many Delhi NCR manufacturers and wholesalers need retailers to log in, see their own prices, place bulk orders and download invoices. We build these on WooCommerce or custom Laravel, integrated with inventory and accounting systems where needed.",
      ],
    },
  ],
  table: {
    caption: "Choosing an e-commerce platform",
    head: ["Business type", "Recommended platform"],
    rows: [
      ["New D2C brand", "Shopify"],
      ["Content-led store", "WooCommerce"],
      ["Wholesale / B2B portal", "WooCommerce or Laravel"],
      ["Marketplace or complex model", "Custom (Laravel)"],
    ],
  },
  process: p(
    "Catalogue size, integrations, payment and shipping needs.",
    "Home, category, product and checkout designed for conversion.",
    "Store, payments, shipping and tracking set up and tested.",
    "Go-live with a plan for SEO and paid traffic.",
  ),
  faqs: [
    { q: "How much does an e-commerce website cost?", a: "It depends on platform, product count, design and integrations. After a short call we send a clear, itemised quote." },
    { q: "Can I sell across India and internationally?", a: "Yes, with shipping across India and, where needed, international shipping and multi-currency pricing." },
    { q: "Do you build shopping apps too?", a: "Yes. Our [app development team](/mobile-app-development-company-in-delhi) can build Android and iOS apps on the same backend." },
    { q: "Who manages the store after launch?", a: "You do, with our training. We also offer maintenance and marketing support." },
    { q: "Can you integrate my billing or inventory software?", a: "Often yes, depending on the software’s API or export options." },
    { q: "How long does it take to build a store?", a: "Typically three to eight weeks depending on scope." },
  ],
  related: ["/shopify-development-company-in-delhi", "/mobile-app-development-company-in-delhi", "/ecommerce-seo-services"],
  external: { label: "Google: E-commerce SEO best practices", url: "https://developers.google.com/search/docs/specialty/ecommerce" },
};

const maintenance: ServiceContent = {
  slug: "website-maintenance",
  name: "Website Maintenance",
  icon: "wrench",
  cardText: "Updates, backups, security and small changes handled every month.",
  keyword: "website maintenance services in delhi",
  metaTitle: "Website Maintenance Services in Delhi | Updates & Backups",
  metaDescription:
    "Website maintenance in Delhi: updates, backups, security monitoring, speed checks, uptime alerts and content changes for WordPress, Shopify and custom sites.",
  eyebrow: "Website maintenance",
  h1: "Website maintenance services in Delhi to keep your site fast, safe and up to date",
  lead:
    "A website is not finished at launch. Software needs updates, backups need checking and content needs changing. We take care of it every month so you do not have to think about it.",
  quickAnswer: {
    q: "What do website maintenance services include?",
    a: "Website maintenance services keep a website secure, fast and working. They usually include software and plugin updates, regular backups, security monitoring and malware scans, uptime monitoring, performance checks, broken-link fixes, small content and design changes, and monthly reports. The exact scope depends on the platform and how often the site changes.",
  },
  takeaways: [
    "Outdated plugins and themes are a leading cause of hacked websites.",
    "Backups are only useful if they are stored off-site and tested.",
    "Regular speed checks catch slowdowns before they hurt rankings.",
    "A maintenance plan is usually cheaper than emergency fixes.",
  ],
  intro: [
    "Most website problems are preventable: a plugin update that was skipped, a backup that never ran, an expired domain or SSL certificate, a contact form that stopped sending emails weeks ago. By the time someone notices, enquiries have already been lost.",
    "Our maintenance plans cover [WordPress](/wordpress-development-company-in-delhi), WooCommerce, Shopify, Wix and custom sites. We update, back up, monitor and fix, and handle small content changes you request. If your site has deeper speed or indexing issues, our [technical SEO service](/technical-seo-services-in-delhi) addresses them properly.",
  ],
  highlights: [
    { icon: "shield", title: "Security updates", text: "Core, theme and plugin updates tested and applied." },
    { icon: "wrench", title: "Backups", text: "Automatic off-site backups with tested restores." },
    { icon: "bolt", title: "Speed monitoring", text: "Monthly performance checks and fixes." },
    { icon: "pen", title: "Content changes", text: "Text, images, offers and pages updated on request." },
  ],
  sections: [
    {
      h2: "What is included in our maintenance plans?",
      body: [],
      list: [
        "Software, theme and plugin updates with testing",
        "Daily or weekly off-site backups",
        "Malware scanning and firewall monitoring",
        "Uptime monitoring with alerts",
        "Domain, hosting and SSL renewal reminders",
        "Contact form and checkout testing",
        "Monthly hours for content and design changes",
        "A short monthly report",
      ],
    },
    {
      h2: "Why do websites need regular maintenance?",
      body: [
        "Software changes constantly. Browsers update, plugins release security patches, payment gateways change APIs and Google updates its requirements. Without maintenance, sites gradually slow down, break or become vulnerable. Regular care is far cheaper than recovering from a hack or a broken checkout.",
      ],
    },
    {
      h2: "What happens if my site goes down or is hacked?",
      body: [
        "Uptime monitoring alerts us quickly. We investigate the cause, whether hosting, a faulty update or an attack, and restore service from a clean backup if needed. For hacks, we clean the site, close the vulnerability and request removal of any browser or Google warnings.",
      ],
    },
    {
      h2: "Do you maintain websites built by other developers?",
      body: [
        "Yes. We start with an onboarding review covering access, backups, updates, security and performance, then fix urgent issues before moving to regular maintenance. Clear documentation means future work is faster and safer.",
      ],
    },
    {
      h2: "How are content change requests handled?",
      body: [
        "Send changes by WhatsApp or email. Small updates such as text, images, prices or new offers are usually completed within one to two working days within your plan’s hours. Larger changes are quoted separately before work begins.",
      ],
    },
  ],
  table: {
    caption: "Maintenance tasks and frequency",
    head: ["Task", "Frequency"],
    rows: [
      ["Backups", "Daily or weekly"],
      ["Updates", "Weekly or as released"],
      ["Security scans", "Continuous or daily"],
      ["Speed and form checks", "Monthly"],
      ["Report", "Monthly"],
    ],
  },
  process: p(
    "Access, platform and current health reviewed.",
    "Plan chosen and monitoring tools set up.",
    "Urgent fixes and first full update cycle.",
    "Ongoing monthly maintenance and reports.",
  ),
  faqs: [
    { q: "Which platforms do you maintain?", a: "WordPress, WooCommerce, Shopify, Wix, Laravel and most custom sites." },
    { q: "How quickly do you respond to problems?", a: "Critical issues such as downtime are prioritised the same day during working hours." },
    { q: "Can I cancel the plan?", a: "Yes, plans run month to month." },
    { q: "Do you include hosting?", a: "We can recommend and manage hosting, but it stays in your name." },
    { q: "Will updates break my site?", a: "We test updates and keep backups, so issues can be fixed or rolled back quickly." },
    { q: "Do you provide reports?", a: "Yes, a short monthly summary of updates, backups, uptime and changes." },
  ],
  related: ["/wordpress-development-company-in-delhi", "/technical-seo-services-in-delhi", "/website-development-company-in-delhi"],
  external: { label: "WordPress: Updating WordPress", url: "https://wordpress.org/documentation/article/updating-wordpress/" },
};

export const web: Category = {
  slug: "web-development",
  menuName: "Web Development",
  name: "Website Development",
  icon: "code",
  cardText: "Fast, mobile-first websites on WordPress, Shopify, Laravel or custom code.",
  keyword: "website development company in delhi",
  metaTitle: "Website Development Company in Delhi | SEO-Ready Sites",
  metaDescription:
    "Website development company in East Delhi building fast, mobile-first business websites, WordPress and Shopify stores and custom Laravel applications.",
  eyebrow: "Website development · Delhi",
  h1: "Website development company in Delhi that builds sites to win customers",
  lead:
    "Your website is your hardest-working salesperson. We build it to load fast, look sharp on every phone, and make it effortless for visitors to call, message or buy.",
  quickAnswer: {
    q: "What does a website development company do?",
    a: "A website development company plans, designs, builds and launches websites and web applications. It selects the right platform, builds responsive pages, integrates forms, payments and other tools, sets up SEO and analytics, tests across devices and provides support after launch. The goal is a fast, secure site that achieves business results.",
  },
  takeaways: [
    "Choose the platform based on your goals: content, selling or custom features.",
    "Speed and mobile usability affect both conversions and search rankings.",
    "Own your domain, hosting and website accounts in your company’s name.",
    "Plan redirects before any redesign to protect existing Google traffic.",
  ],
  intro: [
    "A good-looking website that nobody finds, or that takes eight seconds to load on mobile data, is an expensive brochure. We think about search, speed and conversion from the first wireframe, not as extras after launch.",
    "From a five-page site for a clinic in Mayur Vihar to a full online store for a Gandhi Nagar garment brand, we pick the right platform for your budget and goals: WordPress, Shopify, Laravel or Next.js. You get a site you can manage yourself, built on a foundation our [SEO team](/seo-company-in-delhi) is happy to work with.",
  ],
  highlights: [
    { icon: "bolt", title: "Built for speed", text: "Optimised images, clean code and strong Core Web Vitals." },
    { icon: "phone", title: "Mobile first", text: "Designed for the phone screen, where most visitors are." },
    { icon: "search", title: "SEO-ready", text: "Clean URLs, schema, meta tags and sitemaps built in." },
    { icon: "whatsapp", title: "Conversion focused", text: "Call, WhatsApp and short forms on every page." },
  ],
  sections: [
    {
      h2: "Which website development services do we offer?",
      body: ["Every project is scoped to what you actually need:"],
      list: [
        "Business and corporate websites",
        "WordPress websites and blogs",
        "Shopify and WooCommerce online stores",
        "Custom web applications with Laravel",
        "Landing pages for ads and launches",
        "Redesigns that keep existing rankings",
        "Speed optimisation and ongoing maintenance",
      ],
    },
    {
      h2: "Why do speed and Core Web Vitals matter?",
      body: [
        "Google uses page experience signals, including Core Web Vitals, as part of ranking. More importantly, real people leave slow sites. Every site we build is tested on mid-range Android phones and slower connections, the way many of your customers will actually see it.",
      ],
    },
    {
      h2: "How do we choose the right platform?",
      body: [
        "We ask what the site must do over the next few years. Content-heavy sites suit WordPress. Product-focused stores suit Shopify or WooCommerce. Portals and complex workflows suit Laravel. Marketing sites that must be extremely fast can use modern frameworks like Next.js, which this website runs on. We explain the trade-offs in plain language.",
      ],
    },
    {
      h2: "What do you need from me to start?",
      body: [
        "Your logo, any brand colours, the services or products you want to feature, photos if you have them, and examples of websites you like. If content is not ready, our writers can create it. If you need a logo, see our [logo design service](/logo-designer-in-delhi).",
      ],
    },
    {
      h2: "What happens after launch?",
      body: [
        "We train you to manage the site, provide documentation and remain available for support. Many clients choose a [maintenance plan](/website-maintenance-services-in-delhi) for updates and backups, and add SEO or ads to start bringing traffic.",
      ],
    },
  ],
  table: {
    caption: "Platform guide",
    head: ["Goal", "Platform", "Why"],
    rows: [
      ["Business website and blog", "WordPress", "Easy editing, strong SEO"],
      ["Online store", "Shopify / WooCommerce", "Reliable checkout and payments"],
      ["Custom application", "Laravel", "Flexible, secure, maintainable"],
      ["High-performance marketing site", "Next.js", "Very fast, modern stack"],
    ],
  },
  process: p(
    "Goals, customers, competitors and existing content.",
    "Wireframes and visual design reviewed before coding.",
    "Responsive build, integrations, SEO setup and speed tuning.",
    "Testing, go-live, training and support after launch.",
  ),
  faqs: [
    { q: "How long does it take to build a website?", a: "A standard business website usually takes two to four weeks once content is ready. E-commerce and custom projects take longer; we share a clear timeline first." },
    { q: "Will I be able to update the website myself?", a: "Yes. WordPress, Shopify and Wix sites come with simple admin panels, and we provide training and a guide." },
    { q: "Do you provide domain, hosting and business email?", a: "We help you buy and set these up in your own name so you stay in full control." },
    { q: "Is SEO included?", a: "Every site includes technical SEO basics. Ongoing SEO such as content, links and local SEO is a separate monthly service." },
    { q: "Can you redesign without losing rankings?", a: "Yes. We map old URLs to new pages with redirects and monitor Search Console after launch." },
    { q: "Can I visit your office?", a: "Yes, our office is in New Ashok Nagar, East Delhi, near the Noida border." },
  ],
  related: ["/website-designing-company-in-delhi", "/technical-seo-services-in-delhi", "/website-maintenance-services-in-delhi"],
  external: { label: "web.dev: Core Web Vitals", url: "https://web.dev/articles/vitals" },
  children: [websiteDesign, wordpress, shopify, woo, laravel, wix, ecommerce, maintenance],
};
