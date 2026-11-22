import type { ServiceContent } from "../types";

export const ppcHub: Omit<ServiceContent, "slug"> = {
  name: "PPC & Google Ads",
  icon: "google",
  cardText: "Google Search, Maps and Performance Max campaigns that reach people already looking for you.",
  keyword: "google ads agency in delhi",
  metaTitle: "Google Ads Agency in Delhi | PPC Company & PPC Services",
  metaDescription:
    "PPC company in East Delhi managing Google Ads search, local, Performance Max and remarketing campaigns with tight keyword control and cost-per-lead reporting.",
  eyebrow: "PPC company in Delhi",
  h1: "Google Ads agency in Delhi that treats your budget like its own",
  lead:
    "Someone searching “AC repair Mayur Vihar” wants help today. Google Ads puts you at the top of that search within hours, and you pay only when they click.",
  quickAnswer: {
    q: "What does a PPC agency do?",
    a: "A PPC (pay-per-click) agency plans, builds and manages paid advertising campaigns, mainly on Google Ads and social platforms, where you pay each time someone clicks. It researches keywords, writes ads, sets budgets and bids, tracks conversions such as calls and forms, and continuously optimises to lower the cost of each lead or sale.",
  },
  takeaways: [
    "Ad spend goes directly to Google from your own account; agency fees are separate.",
    "Conversion tracking must be set up before launch, or optimisation is guesswork.",
    "Negative keywords stop you paying for irrelevant searches.",
    "The first two to three weeks are a learning period; costs usually improve after that.",
  ],
  intro: [
    "Google Ads is the fastest way to reach people at the exact moment they need you. It is also the fastest way to waste money if it is set up loosely. Broad keywords, no negative keyword list and a landing page that does not match the search can burn a month’s budget in a week.",
    "We keep campaigns tight: specific keywords, careful location settings around Delhi and Noida, ads that match the search, and conversion tracking on calls, forms and WhatsApp clicks. You always see exactly what each lead costs. Many clients pair ads with [SEO services](/seo-company-in-delhi), using ad data to decide which keywords are worth ranking for organically.",
  ],
  highlights: [
    { icon: "search", title: "Search campaigns", text: "High-intent keywords with strict match types and negatives." },
    { icon: "pin", title: "Local and call ads", text: "Location assets and call-focused formats for phone-driven businesses." },
    { icon: "cart", title: "Shopping and PMax", text: "Product feeds and Performance Max for online stores." },
    { icon: "shield", title: "Waste control", text: "Weekly search-term reviews to cut irrelevant clicks." },
  ],
  sections: [
    {
      h2: "What does our Google Ads management include?",
      body: ["Whether you are starting fresh or fixing an underperforming account, we look after:"],
      list: [
        "Keyword research with realistic cost-per-click estimates for Delhi NCR",
        "Campaign structure, ad groups and responsive search ads",
        "Assets: sitelinks, callouts, call, location and lead forms",
        "Conversion tracking with Google Tag Manager and GA4",
        "Landing page recommendations, or a fast new landing page",
        "Bid strategy, budget pacing and audience layering",
        "Monthly reports with cost per lead and next actions",
      ],
    },
    {
      h2: "Which Google Ads campaign type is right for my business?",
      body: [
        "Search campaigns are usually the best start for service businesses because they capture people actively looking. Performance Max suits online stores and businesses with good conversion data. Display and YouTube build awareness and remarketing. Shopping campaigns are essential for e-commerce. We usually begin with search, prove what converts, then expand into [Google Shopping](/google-shopping-ads-agency), display or video once the fundamentals are working.",
      ],
    },
    {
      h2: "How do we keep your cost per lead low?",
      body: [
        "Lower costs come from relevance. We group tightly related keywords together so the ad can mirror the search exactly. We add negative keywords from day one and review the actual search terms every week. We schedule ads around the hours when your team can answer calls, and we target the areas you genuinely serve. Finally, we improve the landing page, because a page that converts twice as well halves your cost per lead without touching the bids.",
      ],
    },
    {
      h2: "Should I run Google Ads and SEO together?",
      body: [
        "Ads give instant visibility while SEO builds. Search-term data from ads also reveals which keywords actually turn into enquiries, so SEO effort goes where the money is. Over time, many clients reduce ad spend on terms they rank for organically and shift budget to new opportunities.",
      ],
    },
    {
      h2: "How much should a Delhi business spend on Google Ads?",
      body: [
        "There is no single answer, because click costs vary greatly by industry. Legal, finance and B2B software terms cost far more per click than restaurant or retail searches. We estimate likely click costs and conversion rates for your keywords, then suggest a test budget large enough to learn from within four to six weeks. Once results are clear, budget can scale on the campaigns that are paying for themselves.",
      ],
    },
  ],
  table: {
    caption: "Google Ads campaign types",
    head: ["Campaign", "Best for", "Where ads appear"],
    rows: [
      ["Search", "Services and high-intent leads", "Google search results"],
      ["Performance Max", "E-commerce and lead generation at scale", "Search, YouTube, Display, Maps, Gmail"],
      ["Shopping", "Online stores", "Shopping tab and search results"],
      ["Display", "Awareness and remarketing", "Websites and apps in Google’s network"],
      ["Video", "Awareness, consideration", "YouTube"],
    ],
  },
  process: [
    { title: "Research", text: "Keywords, competitors and realistic costs." },
    { title: "Build and track", text: "Campaigns, ads and conversion tracking set up properly." },
    { title: "Launch", text: "Controlled budgets with close checks in the first weeks." },
    { title: "Optimise", text: "Search terms, bids, ads and landing pages refined continuously." },
  ],
  faqs: [
    { q: "How much does a click cost in Delhi?", a: "It ranges from a few rupees for some retail searches to much higher for legal, finance or B2B terms. Our keyword research gives realistic estimates before you spend anything." },
    { q: "Can I show ads only to people near my shop?", a: "Yes. We can target specific pin codes, a radius around your business, or chosen areas like East Delhi and Noida, and exclude places you do not serve." },
    { q: "Is ad spend included in your fee?", a: "No. Ad spend is paid directly to Google from your own account, so you always see where your money goes. Our fee covers strategy and management." },
    { q: "Do you work with existing Google Ads accounts?", a: "Yes. We start with an audit to find wasted spend and missed opportunities; many accounts improve quickly with cleaner keywords and correct tracking." },
    { q: "Is there a lock-in contract?", a: "No long lock-ins. After the setup period we work month to month." },
    { q: "Are you a Google Partner?", a: "We manage campaigns following Google’s best practices and will share our account results and process openly on a call. Ask us about current certifications when you enquire." },
  ],
  related: ["/facebook-ads-agency-in-delhi", "/seo-company-in-delhi", "/website-designing-company-in-delhi"],
  external: { label: "Google Ads Help Center", url: "https://support.google.com/google-ads" },
};

export const shopping: ServiceContent = {
  slug: "google-shopping-ads",
  name: "Google Shopping Ads",
  icon: "cart",
  cardText: "Product listing ads and Merchant Center feeds that drive online sales.",
  keyword: "google shopping ads agency",
  metaTitle: "Google Shopping Ads Agency | Merchant Center & PMax Experts",
  metaDescription:
    "Google Shopping ads management: Merchant Center setup, product feed optimisation, Shopping and Performance Max campaigns focused on profitable online sales.",
  eyebrow: "Google Shopping ads",
  h1: "Google Shopping ads agency that puts your products in front of ready buyers",
  lead:
    "Shopping ads show your product image, price and store name right in Google results. For online stores they are often the most profitable ad format, when the feed is right.",
  quickAnswer: {
    q: "What are Google Shopping ads?",
    a: "Google Shopping ads are product-based ads that display a product’s image, title, price and store name in Google search results and the Shopping tab. They are powered by a product feed in Google Merchant Center rather than keywords, so feed quality, pricing and product data strongly influence when and where the ads appear.",
  },
  takeaways: [
    "Shopping ads are driven by your product feed, not by keyword lists.",
    "Product titles are the single biggest feed factor for matching searches.",
    "Merchant Center policy issues can stop products showing entirely.",
    "Separate best-sellers from low-margin products so budget goes to profit.",
  ],
  intro: [
    "Unlike search ads, Shopping campaigns do not let you choose keywords directly. Google decides which searches your products match based on the data in your feed: titles, descriptions, categories, prices, brand and identifiers. That makes feed optimisation the most important skill in Shopping advertising.",
    "We set up and clean Google Merchant Center, optimise feeds from Shopify, WooCommerce or custom stores, and structure campaigns so budget flows to products that make money. If your store needs work first, our [e-commerce development team](/ecommerce-website-development-company-in-delhi) can help, and [e-commerce SEO](/ecommerce-seo-services) brings in free traffic alongside.",
  ],
  highlights: [
    { icon: "wrench", title: "Merchant Center setup", text: "Accounts, policies, shipping and tax set up correctly." },
    { icon: "pen", title: "Feed optimisation", text: "Titles, attributes and categories rewritten to match searches." },
    { icon: "target", title: "Profit-based structure", text: "Products grouped by margin and performance." },
    { icon: "chart", title: "ROAS tracking", text: "Revenue and return on ad spend tracked accurately." },
  ],
  sections: [
    {
      h2: "How do we optimise a product feed?",
      body: ["Small feed changes can change which searches your products appear for:"],
      list: [
        "Titles that lead with the product type, brand and key attributes buyers search",
        "Accurate Google product categories and product types",
        "Colour, size, material and gender attributes filled in",
        "GTINs and brand data where available",
        "High-quality images on plain backgrounds",
        "Correct prices, availability and shipping matching the website",
        "Custom labels for margin, best-sellers and seasonality",
      ],
    },
    {
      h2: "Shopping campaigns or Performance Max?",
      body: [
        "Performance Max uses the same product feed but shows ads across Search, Shopping, YouTube, Display and more, with heavy automation. It can scale well for stores with good conversion data. Standard Shopping gives more control and transparency, which is useful for new accounts or tight budgets. We often run both, using standard Shopping to learn and PMax to scale proven products.",
      ],
    },
    {
      h2: "Why are my products disapproved in Merchant Center?",
      body: [
        "Common reasons include price or availability mismatches between feed and website, missing return or shipping policies, image issues, restricted product categories and missing identifiers. We diagnose disapprovals, fix the source data and request reviews where needed. Merchant Center misrepresentation suspensions require careful fixes to website trust signals such as contact details and policies.",
      ],
    },
    {
      h2: "How do you measure Shopping ads success?",
      body: [
        "We focus on return on ad spend (ROAS) and, where possible, profit after product costs. Revenue tracking must be accurate, so we verify GA4 and Google Ads conversion tracking, including purchase values. Reports show results by product group so you can see what is really driving sales.",
      ],
    },
    {
      h2: "Do free product listings still matter?",
      body: [
        "Yes. Google shows free product listings from Merchant Center in the Shopping tab and other surfaces. A well-optimised feed improves both paid and free visibility, so feed work pays off twice.",
      ],
    },
  ],
  table: {
    caption: "Standard Shopping versus Performance Max",
    head: ["Aspect", "Standard Shopping", "Performance Max"],
    rows: [
      ["Control", "High (bids, products, negatives)", "Lower, more automated"],
      ["Placements", "Shopping and search", "All Google channels"],
      ["Best for", "Learning, tight budgets", "Scaling proven products"],
      ["Data needed", "Can start with little", "Works best with conversion history"],
    ],
  },
  process: [
    { title: "Audit", text: "Merchant Center health, feed quality and tracking." },
    { title: "Fix the feed", text: "Titles, attributes, images and policies corrected." },
    { title: "Structure", text: "Campaigns grouped by margin and performance." },
    { title: "Scale", text: "Budget shifted to products with the best return." },
  ],
  faqs: [
    { q: "Do I need a website for Shopping ads?", a: "Yes, an online store with checkout, clear policies and accurate product pages is required." },
    { q: "Can you connect my Shopify store to Google?", a: "Yes, through the Google channel app or a feed tool, then we optimise the feed beyond the default export." },
    { q: "What ROAS should I expect?", a: "It depends on margins, prices and competition. We set a target ROAS based on your margins so ads remain profitable." },
    { q: "How soon will Shopping ads show results?", a: "Sales can start within days, with performance typically stabilising after two to four weeks of data." },
    { q: "Can you fix a Merchant Center suspension?", a: "We identify the cause, fix website and feed issues, and guide you through the review request." },
    { q: "Do you manage Amazon ads too?", a: "Yes, see our [Amazon ads service](/amazon-ads-agency-in-india) for marketplace sellers." },
  ],
  related: ["/ecommerce-seo-services", "/google-ads-agency-in-delhi", "/shopify-development-company-in-delhi"],
  external: { label: "Google Merchant Center Help", url: "https://support.google.com/merchants" },
};

export const display: ServiceContent = {
  slug: "google-display-ads",
  name: "Google Display Ads",
  icon: "chart",
  cardText: "Banner and remarketing ads across millions of websites and apps.",
  keyword: "google display ads services",
  metaTitle: "Google Display Ads Services | Display & Remarketing Ads",
  metaDescription:
    "Google Display ads and remarketing campaigns that bring back website visitors and build awareness, with careful audience targeting and placement control.",
  eyebrow: "Display & remarketing",
  h1: "Google display ads services and remarketing that bring visitors back",
  lead:
    "Most visitors leave without enquiring the first time. Display remarketing reminds them about you across websites and apps they already use.",
  quickAnswer: {
    q: "What are Google Display ads?",
    a: "Google Display ads are image and responsive ads shown on websites, apps and Google properties in the Google Display Network. They are used to build awareness, reach specific audiences and remarket to people who visited your website. They are usually cheaper per click than search ads but reach people earlier in their buying journey.",
  },
  takeaways: [
    "Remarketing to past visitors is usually the most profitable use of display ads.",
    "Placement exclusions prevent ads from appearing on low-quality apps and sites.",
    "Display reaches people earlier in their journey, so expect lower conversion rates than search.",
    "Frequency caps stop the same person seeing your ad too often.",
  ],
  intro: [
    "Search ads catch demand; display ads help create it and recapture it. The Google Display Network covers a huge range of news sites, blogs, YouTube and apps, which makes it powerful but also easy to waste money on if targeting is loose.",
    "We use display mainly in two ways: remarketing to people who already visited your site or engaged with your brand, and carefully targeted awareness campaigns for launches and seasonal offers. Both work best alongside a [Google Ads search campaign](/google-ads-agency-in-delhi) that captures people once they are ready.",
  ],
  highlights: [
    { icon: "target", title: "Remarketing lists", text: "Visitors, cart abandoners and past customers segmented." },
    { icon: "pen", title: "Responsive creatives", text: "Images, headlines and logos that adapt to every placement." },
    { icon: "shield", title: "Placement control", text: "Exclusions for low-quality apps and irrelevant sites." },
    { icon: "chart", title: "View-through insight", text: "Assisted conversions tracked alongside direct ones." },
  ],
  sections: [
    {
      h2: "How does display remarketing work?",
      body: [
        "When someone visits your website, a tag adds them to an audience list (with consent where required). Later, when they browse other sites or apps in Google’s network, they can see your ads. We create separate lists for different behaviour: people who viewed a service page, people who started a form, people who added to cart, and past customers, each with a message suited to where they stopped.",
      ],
    },
    {
      h2: "Which targeting options do we use?",
      body: ["Display targeting can be layered for precision:"],
      list: [
        "Your website visitors and customer lists",
        "Custom segments based on search behaviour and websites visited",
        "In-market audiences actively researching your category",
        "Topics and specific placements relevant to your industry",
        "Location targeting down to areas of Delhi NCR",
        "Exclusions for mobile games, kids’ apps and poor-quality sites",
      ],
    },
    {
      h2: "What makes a good display ad?",
      body: [
        "A clear message that can be understood in a second, a strong visual, your logo, and one obvious action. For remarketing, the message should reflect what the person already saw: a reminder of the product they viewed, a reason to come back, or proof such as reviews. We design responsive ad assets that work across many sizes and test variations to find the strongest.",
      ],
    },
    {
      h2: "Is display advertising worth it for small businesses?",
      body: [
        "Remarketing usually is, because it targets people already familiar with you at relatively low cost. Broad awareness display is better suited to businesses with a clear offer, a decent budget and patience. If your budget is small, we recommend starting with search ads and a small remarketing campaign rather than broad display. Video remarketing on [YouTube](/youtube-marketing-agency-in-delhi) is another strong option.",
      ],
    },
    {
      h2: "How do you judge display performance?",
      body: [
        "Display often assists conversions rather than closing them directly. We look at direct conversions, assisted conversions in GA4, cost per thousand impressions, click-through rate and, for remarketing, how many returning visitors go on to enquire. Placements that bring junk clicks are excluded every week.",
      ],
    },
  ],
  table: {
    caption: "Display campaign uses",
    head: ["Goal", "Targeting", "Typical message"],
    rows: [
      ["Bring back visitors", "Website remarketing", "Reminder, offer, reviews"],
      ["Recover carts", "Cart abandoners", "Product reminder, free shipping"],
      ["Launch awareness", "In-market and custom segments", "New product or service"],
      ["Repeat sales", "Past customers", "New arrivals, refills, upgrades"],
    ],
  },
  process: [
    { title: "Tag and segment", text: "Remarketing tags and audience lists set up." },
    { title: "Create", text: "Responsive ad assets designed and approved." },
    { title: "Launch", text: "Campaigns live with frequency caps and exclusions." },
    { title: "Refine", text: "Placements and creatives optimised weekly." },
  ],
  faqs: [
    { q: "Are display ads cheaper than search ads?", a: "Usually per click, yes, but conversion rates are lower because people are not actively searching. Remarketing narrows the gap." },
    { q: "Will my ads show on irrelevant apps?", a: "We exclude low-quality categories and review placement reports regularly to block poor sites and apps." },
    { q: "Do you design the banners?", a: "Yes, we create responsive image assets in your brand style, plus specific sizes if needed." },
    { q: "How big does my audience need to be for remarketing?", a: "Google requires a minimum number of active users on a list before ads serve. Low-traffic sites may need to combine display with search or social remarketing." },
    { q: "Is remarketing allowed under privacy rules?", a: "Yes, when done through Google’s tools with appropriate disclosures and consent where required. We help set up consent banners and privacy policy wording." },
    { q: "Can display ads target specific Delhi areas?", a: "Yes, display supports location targeting by city, radius or pin code." },
  ],
  related: ["/google-ads-agency-in-delhi", "/youtube-marketing-agency-in-delhi", "/google-shopping-ads-agency"],
  external: { label: "Google Ads Help Center", url: "https://support.google.com/google-ads" },
};

export const youtube: ServiceContent = {
  slug: "youtube-ads",
  name: "YouTube Ads",
  icon: "video",
  cardText: "Video ads and YouTube marketing that build trust before the sale.",
  keyword: "youtube marketing agency in delhi",
  metaTitle: "YouTube Ads & YouTube Marketing Agency in Delhi",
  metaDescription:
    "YouTube ads and video marketing in Delhi: in-stream, Shorts and demand-gen campaigns, scripts and channel optimisation that turn views into enquiries.",
  eyebrow: "YouTube ads & video marketing",
  h1: "YouTube marketing agency in Delhi for video ads people remember",
  lead:
    "Video lets customers see your product, your team and your results before they ever call. YouTube puts that video in front of the right people, at a cost per view far below TV.",
  quickAnswer: {
    q: "How do YouTube ads work?",
    a: "YouTube ads are video ads bought through Google Ads that play before, during or alongside YouTube videos and in Shorts. Advertisers choose audiences by interests, searches, demographics, location or remarketing lists. With skippable in-stream ads you typically pay only when someone watches a set duration or interacts with the ad.",
  },
  takeaways: [
    "The first five seconds decide whether a skippable ad gets watched.",
    "Vertical videos are needed to reach Shorts viewers effectively.",
    "YouTube remarketing to website visitors is often the most efficient start.",
    "YouTube is also a search engine; optimised videos can bring free views for years.",
  ],
  intro: [
    "YouTube is where Indian audiences learn, compare and get entertained, from product reviews to tutorials to cooking videos. For businesses, that means two opportunities: paid ads that reach chosen audiences, and organic videos that answer questions and keep earning views.",
    "We plan both. On the paid side we build campaigns in Google Ads, write scripts with strong hooks and target precise audiences around Delhi NCR or across India. On the organic side we optimise your channel and videos so they rank in YouTube search. On its own, video builds familiarity; it pays off most inside a broader [Google Ads strategy](/google-ads-agency-in-delhi) that also captures searches.",
  ],
  highlights: [
    { icon: "video", title: "Scripts and hooks", text: "Openings built to stop the skip in five seconds." },
    { icon: "target", title: "Audience targeting", text: "Custom segments, in-market audiences and remarketing." },
    { icon: "phone", title: "Shorts-ready", text: "Vertical edits for YouTube Shorts and mobile viewers." },
    { icon: "search", title: "Channel SEO", text: "Titles, descriptions, chapters and thumbnails optimised." },
  ],
  sections: [
    {
      h2: "Which YouTube ad formats do we use?",
      body: ["Formats are chosen by goal and budget:"],
      list: [
        "Skippable in-stream ads for consideration and leads",
        "Non-skippable and bumper ads (6 seconds) for short, memorable messages",
        "In-feed video ads that appear in search results and recommendations",
        "Shorts ads for mobile-first audiences",
        "Demand Gen campaigns combining video and image across YouTube and Discover",
      ],
    },
    {
      h2: "What makes a YouTube ad work?",
      body: [
        "A clear hook in the first few seconds, a visible brand early on, one simple message, and a specific call to action. Real people, real places and real results almost always beat stock footage. We script around a single customer problem, show the solution, add proof, and end with an easy next step, such as a WhatsApp message or a visit to a landing page.",
      ],
    },
    {
      h2: "Do I need expensive production?",
      body: [
        "No. Many effective ads are shot on a good phone with decent sound and lighting. What matters more is the script and the edit. We provide shot lists and can coordinate shoots in Delhi NCR, or edit your existing footage into several ad variations for testing.",
      ],
    },
    {
      h2: "How do we optimise your YouTube channel organically?",
      body: [
        "We research what people search on YouTube in your niche, plan videos that answer those questions, and optimise titles, descriptions, chapters, tags and thumbnails. Playlists and end screens keep viewers watching, and links lead them to your website or WhatsApp. Organic videos also give your [social media](/social-media-marketing-company-in-delhi) team ready content for reels and posts.",
      ],
    },
    {
      h2: "How do you measure YouTube campaign results?",
      body: [
        "We track view rate, cost per view, watch time, clicks and conversions, plus brand search lift where possible. For lead-focused campaigns, conversions on the website or WhatsApp are the primary measure. Videos that hold attention are scaled; those that lose viewers early are recut or replaced.",
      ],
    },
  ],
  table: {
    caption: "YouTube ad formats compared",
    head: ["Format", "Length", "Best for"],
    rows: [
      ["Skippable in-stream", "Any (15–60s ideal)", "Consideration, leads"],
      ["Bumper", "6 seconds", "Reach and recall"],
      ["In-feed", "Any", "Search intent, tutorials"],
      ["Shorts", "Under 60 seconds, vertical", "Mobile reach"],
    ],
  },
  process: [
    { title: "Goal and audience", text: "Who to reach and what action you want." },
    { title: "Script and produce", text: "Hooks, scripts, shoot and edits." },
    { title: "Launch", text: "Campaigns set up with tracking and audiences." },
    { title: "Test and scale", text: "Creative and audience tests, then scale the winners." },
  ],
  faqs: [
    { q: "How much do YouTube ads cost?", a: "Costs depend on audience, format and competition. YouTube allows small daily budgets, and we recommend a test budget sized to produce meaningful data within a few weeks." },
    { q: "Can you make the video for us?", a: "Yes. Our team writes the script, plans each shot and edits the final cut, and we organise shoot days anywhere in Delhi NCR." },
    { q: "Can I target viewers in a specific city?", a: "Yes, YouTube ads support location targeting by city, region or radius." },
    { q: "Do YouTube ads work for B2B?", a: "Yes, especially with custom segments based on searches and websites relevant to your industry, and remarketing to site visitors." },
    { q: "Will you manage our YouTube channel?", a: "We can optimise and manage your channel, including uploads, SEO and thumbnails." },
    { q: "Do Shorts ads need separate videos?", a: "Vertical video performs best on Shorts, so we create vertical edits alongside horizontal versions." },
  ],
  related: ["/google-ads-agency-in-delhi", "/google-display-ads-services", "/content-creation-agency-in-delhi"],
  external: { label: "YouTube Ads", url: "https://www.youtube.com/ads/" },
};
