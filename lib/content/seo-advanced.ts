import type { ServiceContent } from "../types";

const stdProcess = (a: string, b: string, c: string, d: string) => [
  { title: "Discover", text: a },
  { title: "Plan", text: b },
  { title: "Implement", text: c },
  { title: "Measure", text: d },
];

export const aiSeo: ServiceContent = {
  slug: "ai-seo",
  name: "AI SEO Services",
  icon: "ai",
  cardText: "SEO built for Google AI Overviews, ChatGPT, Gemini and Perplexity.",
  keyword: "ai seo services in delhi",
  metaTitle: "AI SEO Services in Delhi | Rank in Google AI Overviews",
  metaDescription:
    "AI SEO services that help your business appear in Google AI Overviews, ChatGPT and Perplexity answers, while still ranking in classic search results.",
  eyebrow: "AI SEO",
  h1: "AI SEO services in Delhi to keep you visible as search moves into AI answers",
  lead:
    "People now ask Google’s AI Overviews, ChatGPT and Perplexity which business to choose. AI SEO makes sure those answers know who you are, what you do and why you can be trusted.",
  quickAnswer: {
    q: "What is AI SEO?",
    a: "AI SEO is the practice of optimising a website so AI-powered search features, such as Google AI Overviews, ChatGPT search and Perplexity, can find, understand, trust and cite it. It builds on classic SEO but puts extra weight on direct answers, clear structure, entity information, authorship and mentions across the web.",
  },
  takeaways: [
    "AI answers are built from web pages, so classic SEO foundations still matter.",
    "Pages that answer a question in the first two sentences are easier for AI to quote.",
    "Consistent business details across the web help AI systems recognise your brand as an entity.",
    "Track AI visibility separately: rankings alone no longer show the full picture.",
  ],
  intro: [
    "Search has changed more in the last two years than in the previous ten. A growing share of questions are answered directly on the results page or inside a chat assistant, sometimes without a click. For a business, the important question becomes: when the AI answers, is your name in it?",
    "AI SEO is not a replacement for good [SEO services](/seo-company-in-delhi); it is a layer on top. We make your pages easy to parse and quote, strengthen the signals that show real expertise, and make sure your brand is described the same way wherever AI systems look, from your website to your [Google Business Profile](/gmb-optimization-services-in-delhi) and directory listings.",
  ],
  highlights: [
    { icon: "ai", title: "AI visibility audit", text: "We test how ChatGPT, Gemini and AI Overviews describe you and your competitors." },
    { icon: "pen", title: "Answer-first content", text: "Pages restructured so the key answer appears early and clearly." },
    { icon: "shield", title: "E-E-A-T signals", text: "Author profiles, sources, reviews and credentials that build trust." },
    { icon: "code", title: "Structured data", text: "Schema markup that tells machines exactly what your business offers." },
  ],
  sections: [
    {
      h2: "How do AI search engines choose which businesses to mention?",
      body: [
        "AI systems retrieve pages related to a question, then summarise what those pages say. They tend to rely on sources that are relevant, clearly written, frequently referenced elsewhere and consistent with other information they find. If five reputable pages describe your business the same way, the AI is more confident mentioning you.",
        "That means visibility depends on two things: your own pages being easy to understand and quote, and other trusted places on the web describing you accurately.",
      ],
    },
    {
      h2: "What does our AI SEO work include?",
      body: ["Each engagement is tailored, but usually covers:"],
      list: [
        "Prompt testing across ChatGPT, Gemini, Perplexity and Google AI Overviews",
        "Rewriting key pages with direct answers, summaries and question-style headings",
        "FAQ sections written around real customer questions",
        "Organisation, Service, FAQ and Person schema markup",
        "Author bios and an About page that show genuine experience",
        "Consistent brand descriptions across directories, social profiles and listings",
        "Monthly tracking of brand mentions in AI answers",
      ],
    },
    {
      h2: "How does AI SEO relate to GEO and AEO?",
      body: [
        "The terms overlap. Answer engine optimisation (AEO) focuses on getting your content chosen as the direct answer to a question, such as featured snippets and voice answers. Generative engine optimisation (GEO) focuses on being cited inside AI-generated summaries. AI SEO is the umbrella that brings both together with classic SEO. You can read more on our [GEO](/generative-engine-optimization-services) and [AEO](/answer-engine-optimization-agency) pages.",
      ],
    },
    {
      h2: "Who should invest in AI SEO now?",
      body: [
        "Businesses whose customers research before buying gain the most: professional services, healthcare, education, software, B2B suppliers and premium consumer brands. If customers ask questions like “which is the best X for Y?”, they are probably already asking an AI. Being absent from those answers means competitors get the recommendation by default.",
      ],
    },
  ],
  table: {
    caption: "Classic SEO versus AI SEO",
    head: ["Aspect", "Classic SEO", "AI SEO"],
    rows: [
      ["Goal", "Rank a page in the results list", "Be cited or named inside AI answers"],
      ["Content style", "Comprehensive pages", "Comprehensive pages with direct, quotable answers"],
      ["Key signals", "Relevance, links, technical health", "All of those plus entity consistency and clear authorship"],
      ["Measurement", "Rankings, clicks", "Rankings, clicks and AI mention tracking"],
    ],
  },
  process: stdProcess(
    "Test how AI tools describe you today and find the gaps.",
    "Prioritise the pages and listings that most influence AI answers.",
    "Rewrite, add schema, fix listings and strengthen authorship.",
    "Track mentions and citations month by month.",
  ),
  faqs: [
    { q: "Can you guarantee my business appears in ChatGPT answers?", a: "No one can guarantee that, because AI answers change with each question and model update. We improve the signals AI systems rely on and track how often you are mentioned over time." },
    { q: "Does AI SEO replace normal SEO?", a: "No. AI features draw heavily on pages that already rank and are trusted. Strong technical SEO and helpful content remain the foundation." },
    { q: "How do you measure AI visibility?", a: "We run a fixed set of prompts relevant to your business across major AI tools each month and record whether and how your brand is mentioned or cited." },
    { q: "Will AI Overviews reduce my website traffic?", a: "Some informational clicks may drop, but being cited builds trust and the visitors who do click are often more qualified. Commercial searches still lead to many clicks." },
    { q: "Do I need to change my whole website?", a: "Usually not. We start with the pages that matter most, such as your homepage, main service pages and About page, and expand from there." },
    { q: "How long before AI tools start mentioning us?", a: "Changes to your own site can be picked up within weeks. Building wider brand mentions across the web takes a few months of consistent work." },
  ],
  related: ["/generative-engine-optimization-services", "/answer-engine-optimization-agency", "/seo-company-in-delhi"],
  external: { label: "Google: AI features and your website", url: "https://developers.google.com/search/docs/appearance/ai-features" },
};

export const geo: ServiceContent = {
  slug: "generative-engine-optimization",
  name: "Generative Engine Optimization (GEO)",
  icon: "spark",
  cardText: "Get your brand cited inside AI-generated answers and summaries.",
  keyword: "generative engine optimization services",
  metaTitle: "Generative Engine Optimization (GEO) Services | Digital Ravindra",
  metaDescription:
    "GEO services to get your brand cited in ChatGPT, Gemini, Perplexity and Google AI Overviews. Entity building, quotable content and AI mention tracking.",
  eyebrow: "GEO services",
  h1: "Generative engine optimization services that get your brand cited in AI answers",
  lead:
    "When someone asks an AI assistant for the best option in your category, GEO is the work that helps your brand appear in the answer, with a link back to you.",
  quickAnswer: {
    q: "What is generative engine optimisation (GEO)?",
    a: "Generative engine optimisation (GEO) is the process of improving how often a brand is mentioned and cited in answers produced by generative AI tools such as ChatGPT, Gemini, Perplexity and Google AI Overviews. It focuses on quotable content, clear facts, entity consistency and being referenced by trusted third-party sources.",
  },
  takeaways: [
    "Generative AI summarises several sources, so being one of those sources is the goal.",
    "Specific, verifiable facts are cited more often than vague marketing claims.",
    "Mentions on trusted third-party sites strongly influence AI recommendations.",
    "GEO results should be tracked with a fixed set of prompts over time.",
  ],
  intro: [
    "Generative AI tools write a fresh answer for each question by drawing on many sources. Unlike a results page with ten blue links, an AI answer might name only three or four businesses. GEO is about earning one of those spots.",
    "Our GEO work combines three things: making your own content easy for AI to quote, establishing your business as a clear, consistent entity, and earning mentions on the sites AI tools already trust. It works best on top of sound [technical SEO](/technical-seo-services-in-delhi), because AI systems cannot cite pages they cannot crawl.",
  ],
  highlights: [
    { icon: "ai", title: "Prompt research", text: "We find the questions your buyers actually ask AI tools." },
    { icon: "pen", title: "Quotable content", text: "Clear definitions, facts, comparisons and summaries AI can lift." },
    { icon: "link", title: "Third-party mentions", text: "PR, listings and partnerships that put your name on trusted sites." },
    { icon: "chart", title: "Citation tracking", text: "Monthly reports on where and how you are mentioned." },
  ],
  sections: [
    {
      h2: "How is GEO different from traditional SEO?",
      body: [
        "Traditional SEO tries to rank one page for one keyword. GEO tries to influence how an AI model describes a topic and which brands it trusts within it. That means thinking beyond your own website: what do review sites, news articles, industry directories and forums say about you? AI tools often combine these sources into a single recommendation.",
        "The overlap is still large. Pages that rank well in Google are more likely to be retrieved by AI search features, so GEO and [SEO](/seo-company-in-delhi) should be planned together.",
      ],
    },
    {
      h2: "What makes content more likely to be cited by AI?",
      body: ["From our testing and from published research on generative search, citation-friendly content tends to share a few traits:"],
      list: [
        "A direct answer in the opening lines of each section",
        "Specific numbers, dates, definitions and named examples",
        "Clear headings phrased as the questions people ask",
        "Comparison tables and step-by-step lists",
        "Visible authorship and links to supporting sources",
        "Up-to-date information with a clear last-updated date",
      ],
    },
    {
      h2: "How do we build your brand as an entity?",
      body: [
        "An entity is something an AI system recognises as a distinct thing with known attributes, like a business with a name, location, founder and services. We make sure those attributes are stated identically on your website, in schema markup, on your Google Business Profile, on social profiles and in directories. Consistency removes doubt, and doubt is what makes AI tools leave a brand out.",
      ],
    },
    {
      h2: "Which businesses benefit most from GEO?",
      body: [
        "GEO pays off when buyers ask comparison questions: software, education, healthcare, financial services, agencies, travel and premium products. If your customers ask “which is better, X or Y?” or “best X for small business in India”, GEO can put your name in the answer. Local businesses usually gain more first from [local SEO](/local-seo-services-in-delhi), then add GEO.",
      ],
    },
  ],
  table: {
    caption: "GEO signals and how we strengthen them",
    head: ["Signal", "Why it matters", "Our action"],
    rows: [
      ["Content clarity", "AI must extract a clean answer", "Answer-first rewrites, summaries, tables"],
      ["Entity consistency", "Builds confidence in who you are", "Schema, NAP alignment, profile clean-up"],
      ["Third-party mentions", "AI trusts independent sources", "Digital PR, listings, partnerships"],
      ["Freshness", "Out-of-date facts get skipped", "Regular updates with visible dates"],
    ],
  },
  process: stdProcess(
    "Run a prompt audit across major AI tools for your category.",
    "Map topics, pages and third-party sources to target.",
    "Rewrite content, add schema and earn new mentions.",
    "Re-run the prompt set monthly and report changes.",
  ),
  faqs: [
    { q: "Is GEO just a new name for SEO?", a: "No. It shares foundations with SEO but adds focus on being quoted inside AI answers and on how third-party sources describe your brand." },
    { q: "Which AI tools do you track?", a: "We track ChatGPT, Google Gemini, Google AI Overviews and Perplexity by default, and add others if they matter in your industry." },
    { q: "How long does GEO take to show results?", a: "On-site improvements can be reflected within weeks; earning third-party mentions and seeing them in AI answers usually takes three to six months." },
    { q: "Do you write content for GEO?", a: "Yes. Our writers create and update pages, FAQs and guides in a clear, answer-first style, reviewed for accuracy before publishing." },
    { q: "Can small businesses benefit from GEO?", a: "Yes, particularly in niche or local categories where fewer competitors have optimised for AI answers yet." },
    { q: "Is GEO safe under Google’s guidelines?", a: "Yes. Our GEO methods are based on helpful, accurate content and genuine mentions. We avoid manipulative tactics such as hidden text or fake reviews." },
  ],
  related: ["/ai-seo-services-in-delhi", "/answer-engine-optimization-agency", "/content-creation-agency-in-delhi"],
  external: { label: "Google: Creating helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
};

export const aeo: ServiceContent = {
  slug: "answer-engine-optimization",
  name: "Answer Engine Optimization (AEO)",
  icon: "target",
  cardText: "Win featured snippets, People Also Ask and voice answers.",
  keyword: "answer engine optimization agency",
  metaTitle: "Answer Engine Optimization (AEO) Agency | Digital Ravindra",
  metaDescription:
    "AEO services to win featured snippets, People Also Ask boxes, voice answers and AI responses with clear, structured, question-led content and schema.",
  eyebrow: "AEO services",
  h1: "Answer engine optimization agency: become the answer, not just a result",
  lead:
    "Many searches are questions. AEO shapes your content so Google, voice assistants and AI tools pick your page as the answer they show or read out.",
  quickAnswer: {
    q: "What is answer engine optimisation (AEO)?",
    a: "Answer engine optimisation (AEO) is the practice of structuring content so search engines and AI assistants can use it as a direct answer to a user’s question. It targets featured snippets, People Also Ask boxes, voice search and AI responses through concise answers, question-based headings, lists, tables and FAQ schema.",
  },
  takeaways: [
    "A concise 40–60 word answer directly below a question heading is the most snippet-friendly format.",
    "People Also Ask boxes reveal the exact follow-up questions to answer on your page.",
    "Lists and tables are often shown as-is in featured snippets.",
    "FAQ schema helps machines understand question-and-answer content on a page.",
  ],
  intro: [
    "Look at almost any search today and you will see answers before you see links: a featured snippet, a People Also Ask box, an AI Overview. Voice assistants go further and read a single answer aloud. If your content is not shaped to be that answer, a competitor’s will be.",
    "AEO starts by finding the questions your customers ask at every stage, from “what is” to “how much” to “which is best”. Then we answer them on the right pages, in a format search engines can lift cleanly. It complements [AI SEO](/ai-seo-services-in-delhi) and works best when the pages are already technically sound.",
  ],
  highlights: [
    { icon: "search", title: "Question research", text: "People Also Ask, forums and sales calls mined for real questions." },
    { icon: "pen", title: "Snippet formatting", text: "Answers, lists and tables shaped for featured snippets." },
    { icon: "code", title: "FAQ and HowTo schema", text: "Structured data that labels questions and steps clearly." },
    { icon: "phone", title: "Voice-friendly answers", text: "Natural, spoken-style answers for assistants." },
  ],
  sections: [
    {
      h2: "How do featured snippets work?",
      body: [
        "Google pulls a short passage from a page it already ranks well and displays it at the top of the results. It prefers passages that answer the question immediately and completely, often as a paragraph of around 40 to 60 words, a numbered list for processes, or a table for comparisons. You usually need to rank on the first page before you can win the snippet.",
      ],
    },
    {
      h2: "What does our AEO process include?",
      body: ["We focus on the pages and questions that are closest to revenue:"],
      list: [
        "Collecting questions from People Also Ask, Google Search Console and customer calls",
        "Mapping each question to the most relevant existing or new page",
        "Writing direct answers under question-style subheadings",
        "Adding lists, tables and definitions where they suit the question",
        "Implementing FAQ, HowTo and Organization schema markup",
        "Tracking snippet ownership and AI answer mentions",
      ],
    },
    {
      h2: "Does AEO help with AI search too?",
      body: [
        "Yes. The same qualities that win snippets, such as clarity, structure and directness, also make content easier for AI tools to quote. That is why we treat AEO as one part of a broader AI-search strategy that also includes [generative engine optimisation](/generative-engine-optimization-services).",
      ],
    },
    {
      h2: "Which questions should a business answer first?",
      body: [
        "Start with questions buyers ask just before choosing a provider: cost, timelines, comparisons, process and trust. “How much does a website cost in Delhi?” or “How long does GMB verification take?” are worth more than general definitions. We prioritise by search demand, closeness to purchase and how weak the current answers are.",
      ],
    },
  ],
  table: {
    caption: "Answer formats and when to use them",
    head: ["Question type", "Best format", "Example"],
    rows: [
      ["What is…", "40–60 word paragraph", "What is local SEO?"],
      ["How to…", "Numbered steps", "How to verify a Google Business Profile"],
      ["X vs Y", "Comparison table", "Shopify vs WooCommerce"],
      ["How much…", "Short answer plus factors list", "How much does SEO cost?"],
    ],
  },
  process: stdProcess(
    "Collect and group the questions your customers ask.",
    "Assign each question to a page and choose the answer format.",
    "Write answers, restructure pages and add schema.",
    "Track snippets, People Also Ask and AI mentions.",
  ),
  faqs: [
    { q: "Is AEO only for voice search?", a: "No. AEO covers featured snippets, People Also Ask, voice answers and AI responses. Voice is just one place where a single answer wins." },
    { q: "Do featured snippets still matter with AI Overviews?", a: "Yes. The clarity that wins snippets also helps AI features select and cite your content." },
    { q: "Will FAQ schema show rich results for my site?", a: "Google now shows FAQ rich results only for a limited set of sites, but the markup still helps search engines understand your content." },
    { q: "How many questions should a page answer?", a: "Enough to fully cover the topic without padding. Most service pages work well with a short main answer plus five to eight focused FAQs." },
    { q: "Can AEO bring leads, not just traffic?", a: "Yes, when you answer commercial questions about price, process and comparisons, which are asked by people close to buying." },
    { q: "Do you update old content for AEO?", a: "Yes. Updating existing pages that already rank is often the fastest way to win snippets." },
  ],
  related: ["/ai-seo-services-in-delhi", "/generative-engine-optimization-services", "/seo-audit-services-in-delhi"],
  external: { label: "Google: Introduction to structured data", url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" },
};

export const technicalSeo: ServiceContent = {
  slug: "technical-seo",
  name: "Technical SEO",
  icon: "wrench",
  cardText: "Fix crawling, indexing, speed and Core Web Vitals issues.",
  keyword: "technical seo services in delhi",
  metaTitle: "Technical SEO Services in Delhi | Speed & Core Web Vitals",
  metaDescription:
    "Technical SEO services: crawlability, indexing, Core Web Vitals, site architecture, schema and migrations, fixed by developers who understand SEO.",
  eyebrow: "Technical SEO",
  h1: "Technical SEO services in Delhi that remove what stops Google from ranking you",
  lead:
    "Great content cannot rank if Google cannot crawl it, render it or load it fast. Technical SEO fixes the foundations, and we do it with developers on the team.",
  quickAnswer: {
    q: "What is technical SEO?",
    a: "Technical SEO is the work of making a website easy for search engines to crawl, render, index and understand, and fast and stable for users. It covers site architecture, robots and sitemaps, canonical tags, redirects, page speed, Core Web Vitals, mobile usability, structured data and security.",
  },
  takeaways: [
    "Pages that are not indexed cannot rank, so indexing coverage is the first check.",
    "Core Web Vitals measure loading (LCP), responsiveness (INP) and visual stability (CLS).",
    "Redirect chains, duplicate URLs and broken links waste crawl budget and dilute signals.",
    "Most technical issues can be fixed without rebuilding the website.",
  ],
  intro: [
    "Technical SEO is invisible when it is right and painful when it is wrong. We see the same issues across Delhi business websites: important pages accidentally set to noindex, staging sites indexed by Google, thousands of duplicate URLs from filters, slow pages weighed down by sliders and plugins, and migrations that dropped years of rankings overnight.",
    "Because our team builds websites as well, we do not stop at a report. We can fix most issues directly in WordPress, Shopify, Laravel or custom code, or work with your developer. Every engagement starts with a full [SEO audit](/seo-audit-services-in-delhi) so we fix the problems that matter most first.",
  ],
  highlights: [
    { icon: "search", title: "Crawl and index", text: "Robots, sitemaps, canonicals and noindex issues resolved." },
    { icon: "bolt", title: "Core Web Vitals", text: "LCP, INP and CLS improved on real mobile devices." },
    { icon: "code", title: "Structured data", text: "Schema for organisation, services, products, FAQs and breadcrumbs." },
    { icon: "shield", title: "Safe migrations", text: "Redirect maps and monitoring for redesigns and domain moves." },
  ],
  sections: [
    {
      h2: "What does a technical SEO engagement fix?",
      body: ["The most common fixes we make:"],
      list: [
        "Indexing problems reported in Google Search Console",
        "Slow server response, heavy images and render-blocking scripts",
        "Duplicate content from URL parameters, filters and tags",
        "Broken links, redirect chains and soft 404 pages",
        "Missing or conflicting canonical and hreflang tags",
        "Poor internal linking that hides important pages",
        "Missing or invalid schema markup",
      ],
    },
    {
      h2: "Why do Core Web Vitals matter?",
      body: [
        "Core Web Vitals are Google’s measures of real-user experience: how quickly the main content appears, how quickly the page responds to taps, and whether the layout jumps around. They are part of Google’s page experience signals, but more importantly they affect whether visitors stay. A page that takes several seconds to show anything on a mid-range Android phone loses people before they read a word.",
        "We measure using field data from real Chrome users where available, then fix the biggest causes, usually images, fonts, third-party scripts and heavy themes.",
      ],
    },
    {
      h2: "How do you protect rankings during a website redesign?",
      body: [
        "Redesigns are the most common cause of sudden traffic loss. We crawl the old site, map every important URL to its new equivalent, set up 301 redirects, keep titles and content that already rank, and check the new site in a staging environment before launch. After launch we watch Search Console daily for a few weeks. If you are planning a new site, our [website development team](/website-development-company-in-delhi) builds this in from the start.",
      ],
    },
    {
      h2: "Do JavaScript websites have special SEO issues?",
      body: [
        "Sites built with React, Angular or similar frameworks can hide content from search engines if everything renders in the browser. We check what Google actually sees, and recommend server-side rendering or static generation where needed, as we do on our own Next.js websites.",
      ],
    },
  ],
  table: {
    caption: "Core Web Vitals at a glance",
    head: ["Metric", "Measures", "Good threshold"],
    rows: [
      ["LCP (Largest Contentful Paint)", "Loading of main content", "2.5 seconds or less"],
      ["INP (Interaction to Next Paint)", "Responsiveness to input", "200 milliseconds or less"],
      ["CLS (Cumulative Layout Shift)", "Visual stability", "0.1 or less"],
    ],
  },
  process: stdProcess(
    "Crawl the site and review Search Console and field speed data.",
    "Rank issues by impact and effort, and agree a fix list.",
    "Fix issues directly or alongside your developer.",
    "Re-crawl, validate in Search Console and monitor.",
  ),
  faqs: [
    { q: "How long does a technical SEO fix take?", a: "Quick wins such as noindex mistakes can be fixed in a day. Speed and architecture work may take a few weeks depending on the platform." },
    { q: "Do I need a developer for technical SEO?", a: "Our team includes developers, so you do not need one. If you already have a developer, we can work alongside them with clear tickets." },
    { q: "Can you speed up a WordPress site without rebuilding it?", a: "Usually yes, by optimising images, caching, fonts, plugins and hosting. Sometimes a lighter theme is worth it; we explain the trade-offs first." },
    { q: "What tools do you use?", a: "Google Search Console, PageSpeed Insights, Chrome’s Lighthouse, a site crawler and server logs where available." },
    { q: "Will fixing technical SEO alone improve rankings?", a: "It removes barriers, and for sites with serious issues the gains can be large. For most sites, best results come when technical fixes are paired with content and links." },
    { q: "Do you handle website migrations?", a: "Yes. We plan redirects, test staging sites and monitor after launch to protect existing rankings." },
  ],
  related: ["/seo-audit-services-in-delhi", "/website-maintenance-services-in-delhi", "/seo-company-in-delhi"],
  external: { label: "web.dev: Core Web Vitals", url: "https://web.dev/articles/vitals" },
};

export const ecommerceSeo: ServiceContent = {
  slug: "ecommerce-seo",
  name: "E-commerce SEO",
  icon: "cart",
  cardText: "Rank category and product pages and grow organic online sales.",
  keyword: "ecommerce seo services",
  metaTitle: "E-commerce SEO Services | Shopify & WooCommerce SEO Agency",
  metaDescription:
    "E-commerce SEO for Shopify, WooCommerce and custom stores. Category and product page optimisation, technical fixes and content that grows organic revenue.",
  eyebrow: "E-commerce SEO",
  h1: "E-commerce SEO services that turn product searches into sales",
  lead:
    "Paid ads get expensive as a store grows. E-commerce SEO builds a steady stream of shoppers who find your categories and products on Google for free.",
  quickAnswer: {
    q: "What is e-commerce SEO?",
    a: "E-commerce SEO is the optimisation of an online store so its category, product and brand pages rank in search engines for shopping-related searches. It includes keyword-led category structure, unique product content, technical fixes for filters and duplicates, product schema, internal linking, site speed and helpful buying guides.",
  },
  takeaways: [
    "Category pages usually target the highest-value e-commerce keywords, not product pages.",
    "Filters and sorting can create thousands of duplicate URLs that need controlling.",
    "Product schema can show price, availability and ratings directly in results.",
    "Manufacturer descriptions copied across many stores rarely rank well.",
  ],
  intro: [
    "Online stores have SEO problems normal websites do not: thousands of near-identical product pages, filters that create endless URL combinations, out-of-stock items, and descriptions copied from the manufacturer that also appear on fifty other stores. Fix these, and the store’s strongest pages start ranking for the searches shoppers actually make.",
    "We work on Shopify, WooCommerce, Magento and custom stores, often alongside our [Shopify development](/shopify-development-company-in-delhi) team. Where paid shopping campaigns are running, we use their data to find the products and search terms worth targeting organically.",
  ],
  highlights: [
    { icon: "cart", title: "Category strategy", text: "Collections structured around how shoppers actually search." },
    { icon: "pen", title: "Product content", text: "Unique descriptions, FAQs and specs that answer buying questions." },
    { icon: "code", title: "Product schema", text: "Price, availability and review markup for rich results." },
    { icon: "wrench", title: "Filter and duplicate control", text: "Canonicals and indexing rules that stop URL bloat." },
  ],
  sections: [
    {
      h2: "Why are category pages so important for store SEO?",
      body: [
        "Shoppers often search broad product types first, such as “cotton kurtis for women” or “stainless steel water bottle 1 litre”. Those searches match category pages, which list many options, better than single products. We research category keywords, add a short helpful introduction and buying guidance, and link related categories so Google understands your store’s structure.",
      ],
    },
    {
      h2: "What does our e-commerce SEO work cover?",
      body: ["A typical engagement includes:"],
      list: [
        "Keyword research for categories, subcategories and top products",
        "Category page copy, headings and internal links",
        "Unique product titles and descriptions for best-sellers",
        "Product, breadcrumb and review schema markup",
        "Faceted navigation, pagination and canonical rules",
        "Handling out-of-stock and discontinued products without losing rankings",
        "Buying guides and comparison content that link to products",
      ],
    },
    {
      h2: "How do SEO and Google Shopping work together?",
      body: [
        "Your product feed powers both paid Shopping ads and free product listings on Google. A clean feed with good titles and attributes helps both. Paid campaign data also reveals which search terms convert, so we can prioritise those for organic content. See our [Google Shopping ads service](/google-shopping-ads-agency) for the paid side.",
      ],
    },
    {
      h2: "How should stores handle out-of-stock products?",
      body: [
        "If a product will return, keep the page live, mark it out of stock and suggest alternatives. If it is gone for good, redirect it to the closest product or category. Deleting pages without redirects throws away rankings and links the page earned.",
      ],
    },
  ],
  table: {
    caption: "Store page types and their SEO role",
    head: ["Page type", "Typical keyword", "Priority"],
    rows: [
      ["Category / collection", "Product type plus attribute", "Highest"],
      ["Product", "Specific product, brand plus model", "High for best-sellers"],
      ["Buying guide / blog", "How to choose, best for…", "Supports categories"],
      ["Brand page", "Brand plus product type", "Medium"],
    ],
  },
  process: stdProcess(
    "Audit store structure, indexing and product data.",
    "Map keywords to categories and best-selling products.",
    "Fix technical issues and rewrite priority pages.",
    "Track organic revenue, not just traffic.",
  ),
  faqs: [
    { q: "Is Shopify good for SEO?", a: "Yes, Shopify handles many basics well. It still needs work on collection content, duplicate URLs, product descriptions and speed from apps." },
    { q: "Should every product have a unique description?", a: "Ideally yes, starting with best-sellers. Copying manufacturer text that appears on many sites makes it hard to stand out." },
    { q: "How long does e-commerce SEO take?", a: "Technical fixes and category improvements often show results in two to four months; competitive categories take longer." },
    { q: "Can you work with marketplaces like Amazon?", a: "Yes, marketplace optimisation is separate from website SEO. See our [Amazon ads and seller management service](/amazon-ads-agency-in-india)." },
    { q: "Do you write product content?", a: "Yes, our writers create product descriptions, category copy and buying guides, checked against your specifications." },
    { q: "How do you report on results?", a: "We track organic sessions, revenue and conversion rate from Google Analytics 4, by category, along with rankings for priority keywords." },
  ],
  related: ["/shopify-development-company-in-delhi", "/google-shopping-ads-agency", "/technical-seo-services-in-delhi"],
  external: { label: "Google: E-commerce SEO best practices", url: "https://developers.google.com/search/docs/specialty/ecommerce" },
};

export const seoAudit: ServiceContent = {
  slug: "seo-audit",
  name: "SEO Audit",
  icon: "search",
  cardText: "A clear, prioritised list of what holds your website back.",
  keyword: "seo audit services in delhi",
  metaTitle: "SEO Audit Services in Delhi | Website SEO Audit & Action Plan",
  metaDescription:
    "Professional website SEO audit covering technical health, content, keywords, backlinks, local SEO and AI search, delivered as a prioritised action plan.",
  eyebrow: "SEO audit",
  h1: "SEO audit services in Delhi: know exactly what to fix, and in what order",
  lead:
    "Most audits are 80-page exports nobody reads. Ours is a short, prioritised action plan explained on a call, with every finding backed by evidence.",
  quickAnswer: {
    q: "What is an SEO audit?",
    a: "An SEO audit is a structured review of a website’s search performance and health. It checks technical issues, indexing, page speed, on-page optimisation, content quality, keyword targeting, backlinks, local SEO and competitors, then lists the problems and opportunities in order of impact so you know what to fix first.",
  },
  takeaways: [
    "A useful audit ranks issues by impact, not just lists them.",
    "Google Search Console data is the most reliable starting point for any audit.",
    "Comparing against two or three real competitors shows what is actually missing.",
    "Re-audit after major changes such as redesigns or algorithm updates.",
  ],
  intro: [
    "An SEO audit should answer one simple question: what is stopping this website from getting more of the right visitors? Answering it means looking at the site the way Google does, the way customers do, and the way competitors are positioned.",
    "We combine automated crawls with manual review. Tools catch broken links and missing tags; people spot that your best service has no page, or that a competitor wins because its content answers buyers’ questions properly. The result is an action list you can hand to your team, your developer or to us. Many clients then continue with [technical SEO](/technical-seo-services-in-delhi) or our full [SEO services](/seo-company-in-delhi).",
  ],
  highlights: [
    { icon: "wrench", title: "Technical health", text: "Indexing, speed, mobile, redirects and structured data." },
    { icon: "pen", title: "Content and keywords", text: "Gaps, cannibalisation and thin pages identified." },
    { icon: "link", title: "Backlink review", text: "Link quality, toxic patterns and competitor gaps." },
    { icon: "ai", title: "AI search readiness", text: "How your brand appears in AI answers today." },
  ],
  sections: [
    {
      h2: "What does our SEO audit check?",
      body: ["Every audit covers these areas, scaled to your site’s size:"],
      list: [
        "Indexing and crawl coverage in Google Search Console",
        "Site speed and Core Web Vitals on mobile",
        "Titles, meta descriptions, headings and internal links",
        "Keyword targeting and pages competing for the same terms",
        "Content quality, depth and E-E-A-T signals",
        "Backlink profile compared with competitors",
        "Google Business Profile and local citations",
        "Presence in AI Overviews and chat assistants for key questions",
      ],
    },
    {
      h2: "What will I receive?",
      body: [
        "You receive a concise report with an executive summary, a prioritised issue list with evidence and recommended fixes, and a 90-day action plan. We walk you through it on a video call so nothing is lost in jargon. For WordPress and Shopify sites, we can also estimate the time needed to fix each issue.",
      ],
    },
    {
      h2: "When should a business get an SEO audit?",
      body: [
        "Get one before starting a new SEO campaign, before and after a redesign, after a sudden drop in traffic, or when you are paying for SEO but cannot see results. An audit is also a good way to check an agency’s work objectively. If your site is mainly local, we include a [local SEO](/local-seo-services-in-delhi) review with a Google Maps rank grid.",
      ],
    },
    {
      h2: "How is a manual audit different from a free tool report?",
      body: [
        "Free tools are useful but limited: they flag hundreds of minor issues equally and miss business context. A manual audit decides which issues actually affect rankings and revenue, which are cosmetic, and which opportunities are worth more than any fix.",
      ],
    },
  ],
  table: {
    caption: "Audit types",
    head: ["Audit", "Best for", "Turnaround"],
    rows: [
      ["Quick health check", "Small business sites", "2–3 working days"],
      ["Full SEO audit", "Business and e-commerce sites", "5–10 working days"],
      ["Migration audit", "Before and after a redesign", "Depends on site size"],
    ],
  },
  process: stdProcess(
    "Get Search Console and Analytics access and agree goals.",
    "Crawl, analyse and benchmark against competitors.",
    "Write the prioritised plan with evidence.",
    "Walk through findings on a call and answer questions.",
  ),
  faqs: [
    { q: "Is your SEO audit free?", a: "We offer a free quick review for enquiries. A full audit with competitor analysis and a written action plan is a paid service." },
    { q: "What access do you need?", a: "Read access to Google Search Console and Google Analytics. For deeper checks, CMS or hosting access helps but is optional." },
    { q: "Can you also implement the fixes?", a: "Yes, our team can carry out every fix in the plan. Many clients instead give the report to their own developer; it is written so either route works." },
    { q: "How often should I audit my website?", a: "A full audit once or twice a year is enough for most businesses, plus a quick check after major changes." },
    { q: "Can you audit a site that lost traffic suddenly?", a: "Yes. We compare dates against changes to your site and known Google updates to find the likely cause." },
    { q: "Do you audit competitor websites?", a: "We benchmark your site against two or three competitors to show where they are stronger and where you can overtake them." },
  ],
  related: ["/technical-seo-services-in-delhi", "/seo-company-in-delhi", "/link-building-services"],
  external: { label: "Google Search Console", url: "https://search.google.com/search-console/about" },
};

export const linkBuilding: ServiceContent = {
  slug: "link-building",
  name: "Link Building",
  icon: "link",
  cardText: "Earn relevant, high-quality backlinks that build authority safely.",
  keyword: "link building services",
  metaTitle: "Link Building Services | White-Hat Backlinks for Indian Businesses",
  metaDescription:
    "White-hat link building services: digital PR, niche outreach, local citations and partnerships that earn relevant backlinks without risking Google penalties.",
  eyebrow: "Link building",
  h1: "Link building services that earn trust instead of buying risk",
  lead:
    "Links from relevant, respected websites still tell Google your business deserves to rank. We earn them through content, outreach and relationships, never link farms.",
  quickAnswer: {
    q: "What is link building?",
    a: "Link building is the process of getting other websites to link to yours. Search engines treat relevant, editorial links from trusted sites as signals of authority. Safe link building earns links through useful content, digital PR, partnerships, local directories and outreach, while avoiding paid or manipulative link schemes that violate Google’s spam policies.",
  },
  takeaways: [
    "Relevance and quality of linking sites matter far more than the number of links.",
    "Buying links to manipulate rankings violates Google’s spam policies.",
    "Local businesses gain a lot from local news, associations and directories.",
    "Linkable assets such as guides, tools and data attract links naturally over time.",
  ],
  intro: [
    "Cheap backlink packages promising hundreds of links for a few thousand rupees still flood inboxes. Most of those links come from sites built only to sell links, and at best they do nothing. At worst they trigger a manual action that wipes out your rankings.",
    "Our approach is slower and far safer. We create reasons for real websites to link to you, then reach out to the right people. It works best alongside strong on-page work, so most clients pair it with our [SEO services](/seo-company-in-delhi). For local businesses we also build citations that support [local SEO](/local-seo-services-in-delhi).",
  ],
  highlights: [
    { icon: "megaphone", title: "Digital PR", text: "Stories, data and expert comments for news and industry sites." },
    { icon: "users", title: "Niche outreach", text: "Relevant blogs and publications in your industry." },
    { icon: "pin", title: "Local citations", text: "Trusted Indian directories and local associations." },
    { icon: "pen", title: "Linkable assets", text: "Guides, checklists and tools people want to reference." },
  ],
  sections: [
    {
      h2: "What makes a backlink valuable?",
      body: [
        "A valuable link comes from a site that is relevant to your business, has real readers, and links to you because the content genuinely helps them. A link from a respected Delhi business association or an industry publication can be worth more than hundreds of links from random blogs. Anchor text should read naturally, not repeat the same exact keyword again and again.",
      ],
    },
    {
      h2: "Which link building methods do we use?",
      body: ["Every campaign is tailored to the business and its industry:"],
      list: [
        "Digital PR with expert commentary and local stories",
        "Guest articles on relevant, editorially reviewed publications",
        "Resource and broken-link outreach",
        "Supplier, partner and client relationship links",
        "Local citations, chambers of commerce and associations",
        "Creating linkable guides, calculators and research",
        "Unlinked brand mention reclaiming",
      ],
    },
    {
      h2: "What do we avoid?",
      body: [
        "We do not buy links from private blog networks, use automated link tools, exchange links at scale, or place links in hidden or spammy pages. These tactics are listed in Google’s spam policies, and recovering from a penalty takes far longer than building links properly.",
      ],
    },
    {
      h2: "How do you measure link building success?",
      body: [
        "We report every link we earn with its source, and track the rankings and organic traffic of the pages they point to. The aim is not a link count but movement on the pages that bring enquiries. Content created for outreach often doubles as material for [content marketing](/content-creation-agency-in-delhi).",
      ],
    },
  ],
  table: {
    caption: "Good links versus risky links",
    head: ["Good links", "Risky links"],
    rows: [
      ["Relevant industry publications", "Private blog networks"],
      ["Local news and associations", "Paid link packages in bulk"],
      ["Editorial mentions of your content", "Automated directory spam"],
      ["Natural, varied anchor text", "Repeated exact-match anchors"],
    ],
  },
  process: stdProcess(
    "Review your current backlinks and competitors’ links.",
    "Choose targets and plan content or stories that earn links.",
    "Outreach, relationship building and citation work.",
    "Report every link and its effect on rankings.",
  ),
  faqs: [
    { q: "How many backlinks will I get each month?", a: "It varies with industry and budget. We focus on quality and relevance, so we agree realistic targets rather than promise large numbers." },
    { q: "Do you sell guest posts?", a: "We secure guest articles on relevant, editorially reviewed sites as part of a strategy, not as a bulk product." },
    { q: "Can bad backlinks hurt my website?", a: "Google mostly ignores spammy links, but manipulative link patterns can lead to manual actions. We review your profile and advise if any action is needed." },
    { q: "Do local businesses need link building?", a: "Yes, but mostly local: directories, associations, local media and partners. These support both map and website rankings." },
    { q: "How long do links take to impact rankings?", a: "Usually several weeks to a few months after Google discovers and processes them." },
    { q: "Is link building safe?", a: "Earning links through genuine content and relationships is safe and recommended. Buying links or using schemes is not." },
  ],
  related: ["/seo-company-in-delhi", "/seo-audit-services-in-delhi", "/content-creation-agency-in-delhi"],
  external: { label: "Google Search spam policies", url: "https://developers.google.com/search/docs/essentials/spam-policies" },
};
