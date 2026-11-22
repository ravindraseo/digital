import type { Section } from "../types";

/**
 * Extra, page-specific sections (cost guides, mistakes to avoid, checklists).
 * Keyed by the page path. Merged into the page's sections in lib/services.ts.
 */
export const extras: Record<string, Section[]> = {
  "/local-seo-services-in-delhi": [
    {
      h2: "What does local SEO cost in Delhi?",
      body: [
        "Cost depends on how competitive your category is, how many locations you have and how much work the profile and website need. A single clinic in a quiet category needs far less effort than a chain of salons competing across Delhi and Noida. We price after a free rank-grid audit so the quote reflects real work, and we never lock you into long contracts.",
      ],
    },
  ],
  "/gmb-optimization-services-in-delhi": [
    {
      h2: "Which GMB mistakes should you avoid?",
      body: [
        "Avoid creating a second listing when the first has a problem, changing your name or address repeatedly in a short period, using a mobile number that does not match your website, uploading stock photos, and asking staff or friends to post reviews. Each of these can trigger extra verification, filtering of reviews or suspension.",
      ],
    },
  ],
  "/gmb-expert-in-ahmedabad": [
    {
      h2: "What should you prepare before contacting a GMB expert?",
      body: [
        "Keep ready your listing link or exact business name as shown on Google, the email that owns or manages the profile, a photo of your signboard, and one business document such as a GST certificate, shop licence or utility bill in the business name. With these, most Ahmedabad listings can be diagnosed in a single WhatsApp conversation.",
      ],
    },
  ],
  "/gmb-services-in-gujarat": [
    {
      h2: "How should a Gujarat business write its listing details?",
      body: [
        "Use your exact registered or signboard name, without extra words. Write the address the way the postal system and Google Maps recognise it, including the area name and pin code, for example the GIDC estate name and plot number for industrial units. Choose the most specific primary category available, add secondary categories only where they genuinely apply, and keep hours accurate during festivals such as Diwali and Navratri when many businesses close or change timings.",
        "Add products with photos and short descriptions, because Gujarat buyers often compare before calling. Finally, use the same phone number on your profile, website and directories so Google sees one consistent business.",
      ],
    },
  ],
  "/ai-seo-services-in-delhi": [
    {
      h2: "How can you check your own AI visibility today?",
      body: [
        "Open ChatGPT, Gemini and Perplexity and ask the questions your customers would ask, such as “best SEO company in East Delhi” or “who can fix a suspended Google Business Profile”. Note whether your brand appears, what is said about it, and which sources are cited. Repeat with competitors’ names. This simple test, done monthly, shows whether your AI visibility is improving.",
      ],
    },
  ],
  "/generative-engine-optimization-services": [
    {
      h2: "What are the most common GEO mistakes?",
      body: [
        "The most common mistake is writing for AI instead of for people: stuffing pages with questions nobody asks, or publishing large amounts of thin AI-generated text. AI systems are designed to find genuinely helpful sources, so low-value content works against you.",
        "Other mistakes include inconsistent business details across profiles, outdated information with no visible update date, and ignoring third-party sites entirely. GEO rewards brands that are clear, accurate and talked about, so the fundamentals of being a trustworthy business still apply.",
      ],
    },
  ],
  "/answer-engine-optimization-agency": [
    {
      h2: "How do you write a good answer for AEO?",
      body: [
        "Put the question in a heading exactly as people ask it. Answer it in the first sentence, using the key term naturally. Keep the core answer to two or three sentences, then add detail, examples, exceptions and steps below it. Use plain words, define any jargon, and avoid hedging the main answer. If the answer is a process, number the steps; if it is a comparison, use a table.",
        "Finally, make sure the answer is true for your audience. A generic answer written for the US market will not help a buyer in Delhi asking about local prices, laws or timelines.",
      ],
    },
  ],
  "/technical-seo-services-in-delhi": [
    {
      h2: "What is a quick technical SEO checklist?",
      body: ["Start with these checks before anything else:"],
      list: [
        "Search Console shows your important pages as indexed",
        "Only one version of the site loads (https, with or without www)",
        "robots.txt is not blocking important sections",
        "The XML sitemap lists only live, indexable pages",
        "Each page has a unique title and one clear H1",
        "Mobile pages pass Core Web Vitals in field data",
        "Old URLs redirect in one hop to their new versions",
      ],
    },
  ],
  "/ecommerce-seo-services": [
    {
      h2: "How should you write product descriptions that rank and sell?",
      body: [
        "Start with what the shopper needs to know to decide: what the product is, who it suits, and the two or three details that matter most, such as size, material or compatibility. Follow with full specifications in a scannable list, care or usage instructions, and answers to the questions your support team hears most often.",
        "Use the words customers search with, not internal codes. Add original photos and, where possible, short videos. Encourage reviews after delivery, because fresh reviews add unique content and build trust. For large catalogues, start with your top 50 products by revenue, then work down.",
      ],
    },
    {
      h2: "What mistakes hurt e-commerce SEO most?",
      body: [
        "The biggest are letting filter combinations get indexed, deleting discontinued products without redirects, leaving category pages with no text at all, and loading so many apps that pages slow down on mobile. Each is fixable, and fixing them often lifts the whole store.",
      ],
    },
  ],
  "/seo-audit-services-in-delhi": [
    {
      h2: "What are the most common issues we find in audits?",
      body: ["Across Delhi business websites, the same problems appear again and again:"],
      list: [
        "Service pages that target no specific keyword or several at once",
        "Thin location pages copied with only the city name changed",
        "Homepage titles that say only “Home” or the brand name",
        "Slow mobile pages caused by uncompressed images and sliders",
        "Missing Google Business Profile link and inconsistent phone numbers",
        "No conversion tracking, so nobody knows which pages bring leads",
      ],
    },
    {
      h2: "What happens after the audit?",
      body: [
        "You can implement the plan in-house, hand it to your developer, or ask us to do it. Many clients start with the top ten fixes, then move to a monthly SEO plan once the foundations are solid.",
      ],
    },
  ],
  "/link-building-services": [
    {
      h2: "How can a local business earn links without outreach?",
      body: [
        "Some of the best links come from relationships you already have. Ask suppliers and brands you stock to list you as a dealer. Join your market association or local chamber of commerce. Sponsor a school event, a cricket tournament or a resident welfare association activity. Offer an expert quote to local journalists. Publish a genuinely useful local guide, such as a checklist for opening a shop in Delhi, that other sites want to share.",
        "These links are relevant, natural and hard for competitors to copy, which is exactly why they carry weight.",
      ],
    },
    {
      h2: "What does link building cost?",
      body: [
        "Cost reflects the time needed to create content and build relationships, not a price per link. Competitive industries and national campaigns need more effort than local ones. We agree a monthly scope with clear deliverables after reviewing your backlink profile and competitors.",
      ],
    },
  ],
};
