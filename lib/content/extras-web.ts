import type { Section } from "../types";

/** Additional page-specific sections for web, app, branding and location pages. */
export const extrasWeb: Record<string, Section[]> = {
  "/website-development-company-in-delhi": [
    {
      h2: "How much does website development cost in Delhi?",
      body: [
        "Cost depends mainly on the number of unique page designs, whether content and photography are needed, the platform, and features such as online payments, bookings or integrations. A five-page business website is a very different project from a 500-product store or a customer portal. Rather than quote a generic package, we scope the pages and features you need and send an itemised estimate, so you can see where the money goes and decide what to include now or later.",
      ],
    },
    {
      h2: "What should every business website include?",
      body: ["Whatever the platform, these elements make a site useful from day one:"],
      list: [
        "A clear headline saying what you do, for whom and where",
        "Separate pages for each main service or product range",
        "Visible phone number, WhatsApp button and short enquiry form",
        "Reviews, photos of real work and information about your team",
        "Your address and a map if customers visit you",
        "Fast loading on mobile and an SSL certificate",
        "Google Analytics, Search Console and conversion tracking",
      ],
    },
    {
      h2: "Should I build my website myself or hire an agency?",
      body: [
        "Website builders make it possible to create a basic site yourself, which can be fine for a very small business with time to learn. Hiring a team makes sense when the site needs to generate leads or sales, when speed and SEO matter, or when your time is better spent running the business. A professional build also avoids common mistakes that are expensive to fix later, such as poor structure for search engines or slow, bloated templates.",
      ],
    },
  ],
  "/website-designing-company-in-delhi": [
    {
      h2: "Which pages does a small business website need?",
      body: [
        "Most small businesses need a home page, one page per main service, an about page that shows the real people behind the business, a contact page with map and hours, and a page for reviews or work examples. A blog or resources section is valuable if you will keep it updated. Every page should have a clear purpose and a next step for the visitor.",
      ],
    },
    {
      h2: "What design mistakes cost businesses enquiries?",
      body: [
        "Hiding the phone number, using vague headlines such as “Welcome to our website”, auto-playing sliders that push key information down, tiny text on mobile, too many competing buttons, and stock photos that look nothing like the real business. Each of these makes visitors work harder to understand and trust you. Fixing them is often the quickest way to get more enquiries from the traffic you already have.",
      ],
    },
  ],
  "/wordpress-development-company-in-delhi": [
    {
      h2: "Which plugins does a business WordPress site really need?",
      body: [
        "Usually far fewer than people think. A typical business site needs an SEO plugin, a security and firewall plugin, a backup solution, a caching or performance plugin, a form plugin and perhaps an image optimisation tool. Everything else should earn its place. Each extra plugin adds code that may slow the site or create security risks, so we review what is installed and remove what is not pulling its weight.",
      ],
    },
    {
      h2: "Block editor or page builder?",
      body: [
        "WordPress’s built-in block editor, also called Gutenberg, has become powerful enough for most business sites and produces lighter pages than many third-party page builders. Page builders offer more visual control but often add heavy code. For new sites we usually build custom blocks on the native editor for speed and ease of editing. For existing builder-based sites, we optimise rather than force a rebuild.",
      ],
    },
    {
      h2: "How much does a WordPress website cost?",
      body: [
        "The cost depends on design complexity, number of pages, custom functionality, content creation and whether e-commerce is included. Hosting, a domain and any premium plugins are separate running costs. We provide an itemised quote after understanding your requirements, with options to phase non-essential features.",
      ],
    },
  ],
  "/shopify-development-company-in-delhi": [
    {
      h2: "Which Shopify apps are worth installing?",
      body: [
        "Install apps that solve a clear problem: reviews, shipping and order tracking, COD verification, WhatsApp notifications, and perhaps product bundles or subscriptions. Avoid stacking apps that duplicate each other or add pop-ups and widgets that slow the store. Shopify’s built-in features have also improved, so some older apps are no longer needed. We audit apps on existing stores and often remove several without losing functionality.",
      ],
    },
    {
      h2: "What does a Shopify store cost to run?",
      body: [
        "Running costs include the Shopify subscription, any paid apps, a premium theme if used, payment gateway fees on each transaction, and shipping charges. Marketing is a separate budget. During planning we list these costs clearly, so you can price products with all expenses in mind and avoid surprises after launch.",
      ],
    },
    {
      h2: "How do you set up Shopify for GST?",
      body: [
        "We configure tax settings for Indian GST, set whether prices include tax, add your GSTIN to invoices and set up invoice templates that meet common requirements. For businesses selling across states or with different tax rates by product, we configure tax overrides. Your accountant should confirm final settings, and we work with them to get it right.",
      ],
    },
  ],
  "/woocommerce-development-company": [
    {
      h2: "What hosting does a WooCommerce store need?",
      body: [
        "WooCommerce pages such as cart and checkout cannot be fully cached, so the server does more work than on a normal website. Cheap shared hosting often struggles once traffic grows. We recommend managed WordPress or cloud hosting with enough memory, modern PHP, object caching and servers in or near India. Good hosting is one of the most cost-effective upgrades for a slow store.",
      ],
    },
    {
      h2: "How do you migrate a store to WooCommerce?",
      body: [
        "We export products, categories, customers and, where possible, order history from the old platform and import them into WooCommerce. Product URLs are mapped to their new addresses with 301 redirects so search rankings and old links keep working. We rebuild the design, test payments and shipping end to end, and run the old and new stores side by side until everything is verified, then switch the domain at a quiet time.",
      ],
    },
    {
      h2: "Which mistakes slow down WooCommerce stores?",
      body: [
        "Installing a plugin for every small feature, using heavy multipurpose themes, uploading uncompressed product images, leaving old orders and logs to bloat the database, and running many external scripts such as chat widgets and trackers on every page. Each one alone may seem minor, but together they make stores sluggish, especially on mobile. Regular maintenance prevents this gradual slowdown.",
      ],
    },
    {
      h2: "What does a WooCommerce store cost?",
      body: [
        "Development cost depends on design, number of products, payment and shipping integrations, and any custom features such as B2B pricing or subscriptions. Running costs include hosting, premium plugins and maintenance. We provide an itemised estimate and suggest which features to launch with and which to add later.",
      ],
    },
  ],
  "/laravel-development-company-in-delhi": [
    {
      h2: "What should a custom software brief include?",
      body: [
        "A useful brief describes who will use the system, what they need to do step by step, what information is stored, which existing tools it must connect with, and what success looks like. Screenshots of current spreadsheets or paper forms help a lot. You do not need technical language; we translate your workflow into a technical plan during discovery and confirm it with you before building.",
      ],
    },
    {
      h2: "Should I build custom software or buy an existing tool?",
      body: [
        "If a reliable off-the-shelf tool covers most of your needs at reasonable cost, buying is usually faster and cheaper. Custom software makes sense when your process is a competitive advantage, when existing tools force awkward workarounds, when subscription costs grow large with users, or when you need deep integration between systems. We are happy to recommend an existing tool if it fits better than custom development.",
      ],
    },
    {
      h2: "How do you test custom applications?",
      body: [
        "We write automated tests for important logic such as calculations, permissions and payments, and test each feature manually against agreed scenarios before demos. Before launch, you and your team test in a staging environment with realistic data. After launch, error monitoring alerts us to problems so they are fixed quickly, often before users report them.",
      ],
    },
  ],
  "/wix-website-designer": [
    {
      h2: "What does a Wix website cost?",
      body: [
        "There are two parts: the Wix subscription, paid directly to Wix, and our design and setup work. The subscription plan depends on whether you need e-commerce, bookings or extra storage. Our fee depends on the number of pages, design complexity and content creation. We help you choose the right Wix plan so you do not pay for features you will not use.",
      ],
    },
    {
      h2: "How do you set up SEO on Wix properly?",
      body: [
        "We connect the site to Google Search Console, set clean URL slugs, write unique titles and meta descriptions for every page, structure headings correctly, add descriptive alt text to images, configure redirects for any changed pages, and add structured data for your business details. Then we focus on content, because well-written service pages matter more than any setting.",
      ],
    },
    {
      h2: "Who is Wix best suited for?",
      body: [
        "Consultants, doctors, coaches, photographers, small restaurants, boutiques and local service businesses that want an attractive site they can update themselves without dealing with hosting, updates or security. Businesses planning large content libraries, complex integrations or big online stores are usually better served by WordPress or Shopify from the start.",
      ],
    },
  ],
  "/ecommerce-website-development-company-in-delhi": [
    {
      h2: "How do I prepare product data for a new store?",
      body: [
        "Prepare a spreadsheet with product names, SKUs, prices, variants such as size and colour, stock quantities, weights for shipping, HSN codes and GST rates, and categories. Gather high-quality images for every product and variant, ideally on a clean background. Write or collect descriptions covering the details buyers ask about. Good data at the start saves weeks of fixes later and makes product feeds for ads and marketplaces far easier.",
      ],
    },
    {
      h2: "Which payment and shipping options should an Indian store offer?",
      body: [
        "Most Indian shoppers expect UPI, debit and credit cards, net banking and wallets. Cash on Delivery is still important in many categories, though verification helps reduce failed deliveries. For shipping, aggregators such as Shiprocket give access to multiple couriers through one account. Clear delivery timelines by pin code and an easy return process build confidence and reduce abandoned carts.",
      ],
    },
    {
      h2: "What legal pages does an e-commerce website need?",
      body: [
        "At minimum: a privacy policy, terms and conditions, a shipping policy, a returns and refunds policy, and clear contact details including a grievance contact. Payment gateways and Google Merchant Center check for these pages, and missing or vague policies can delay approvals. Your legal adviser should review final wording for your business.",
      ],
    },
  ],
  "/website-maintenance-services-in-delhi": [
    {
      h2: "How do you know if a website needs maintenance?",
      body: ["Warning signs that a site has been neglected:"],
      list: [
        "The admin dashboard shows many pending updates",
        "Pages load noticeably slower than before",
        "Contact forms have stopped delivering enquiries",
        "Google Search Console reports errors or security issues",
        "The copyright year, offers or team details are out of date",
        "Nobody is sure when the last backup was taken",
      ],
    },
    {
      h2: "What does website maintenance cost?",
      body: [
        "Plans are priced by platform, site size and the number of hours included for changes. A small brochure website needs less time than a busy online store with many plugins and daily orders. We review your site first and suggest a plan that covers essential security and backups, with optional hours for content updates and improvements.",
      ],
    },
    {
      h2: "Can maintenance improve SEO?",
      body: [
        "Indirectly, yes. Keeping the site fast, secure, free of broken links and error pages, and regularly updated with fresh content supports search performance. Security problems can trigger browser warnings and drops in traffic, so prevention protects rankings. For active growth, maintenance pairs well with an ongoing SEO plan.",
      ],
    },
    {
      h2: "Do you keep a record of changes?",
      body: [
        "Yes. Every update, fix and content change is logged with the date, so you know what was done and when. If something unexpected happens, the log and backups make it easy to trace the cause and roll back if needed. This history is included in your monthly report.",
      ],
    },
  ],
  "/mobile-app-development-company-in-delhi": [
    {
      h2: "What should be in the first version of an app?",
      body: [
        "Only the features needed for users to complete the main task and for you to run the service. For a booking app, that might be sign-up, choosing a service and time, payment and reminders, plus an admin panel to manage bookings. Ratings, referral programmes and advanced analytics can follow once real users are active. Launching a focused version sooner lets you learn from real behaviour instead of guesses.",
      ],
    },
    {
      h2: "What are the ongoing costs of running an app?",
      body: [
        "Expect server hosting, third-party services such as SMS, maps or push notifications, developer account fees for the app stores, and regular maintenance for operating system updates and bug fixes. Marketing to acquire users is a separate budget. We estimate these running costs during planning so the total cost of ownership is clear from the start.",
      ],
    },
    {
      h2: "How do you protect user data in an app?",
      body: [
        "We use secure authentication, encrypt data in transit, store passwords securely, limit what data is collected to what the app needs, and control access by user role. Payments are handled by trusted gateways. Privacy policies describe data use accurately, as required by the app stores and Indian data protection law.",
      ],
    },
  ],
  "/logo-designer-in-delhi": [
    {
      h2: "What do I need to prepare before a logo project?",
      body: [
        "Your business name exactly as it will be used, a short description of what you do and who your customers are, three words you want people to feel about your brand, a few logos you like and dislike with reasons, and where the logo will be used most, such as signboard, packaging or Instagram. If you have a tagline or preferred colours, share those too. This brief helps us explore meaningful directions rather than guessing.",
      ],
    },
    {
      h2: "How much does a logo cost?",
      body: [
        "Cost depends on the number of concepts, revision rounds and what is included beyond the logo itself, such as brand guidelines, stationery or social media templates. A simple logo refresh is a smaller project than a full brand identity for a new company. We share clear packages after a short discussion of your needs, with no hidden charges for source files.",
      ],
    },
    {
      h2: "Which logo design mistakes should you avoid?",
      body: [
        "Too much detail that disappears at small sizes, trendy effects that date quickly, using too many colours, choosing fonts that are hard to read, copying a well-known brand’s style, and relying on free icons that thousands of other businesses also use. A logo should be simple, original and practical across everything from a favicon to a hoarding.",
      ],
    },
  ],
  "/seo-company-in-noida": [
    {
      h2: "What does SEO cost for a Noida business?",
      body: [
        "It depends on your category, competition and number of locations. A single clinic or shop targeting its own sector needs much less work than a company competing city-wide or nationally. We start with a free audit, then propose a monthly scope with clear deliverables and no long lock-in, so you can judge value from results.",
      ],
    },
    {
      h2: "How do Noida customers search differently?",
      body: [
        "Noida’s numbered sectors shape how people search. Many add a sector number, a nearby metro station or a mall name to their query, such as “physiotherapist near Sector 18 metro” or “bakery in Sector 104”. Others search by society name in high-rise areas. We research these patterns and use them naturally in your Google Business Profile, website pages and posts, so you match the way people actually describe locations in Noida.",
      ],
    },
  ],
  "/seo-company-in-gurugram": [
    {
      h2: "What does SEO cost for a Gurugram business?",
      body: [
        "Gurugram is competitive, so effort varies widely. A single clinic targeting nearby sectors needs far less than a SaaS company competing nationally for software keywords. Scope depends on site size, content needs, technical complexity and link building. We propose a monthly plan with clear deliverables after an audit, and adjust as results come in.",
      ],
    },
    {
      h2: "How do Gurugram buyers search?",
      body: [
        "Local searchers often mention DLF phases, sector numbers, Golf Course Road, Sohna Road or a nearby metro station. B2B buyers search by problem and solution, often researching for weeks and comparing vendors. Consumer buyers in premium categories read reviews carefully and expect polished websites. Our keyword research reflects these differences so content matches intent.",
      ],
    },
    {
      h2: "Which mistakes hold back Gurugram websites?",
      body: [
        "Beautiful but slow JavaScript-heavy sites that search engines struggle to render, thin service pages that rely on design rather than substance, blogs written for volume instead of buyers, and no tracking of which pages generate leads. Startups also often launch without any content plan, leaving competitors to own the questions their buyers ask. Each of these can be fixed with a structured SEO plan.",
      ],
    },
  ],
  "/digital-marketing-company-in-ahmedabad": [
    {
      h2: "What does digital marketing cost for an Ahmedabad business?",
      body: [
        "It depends on the services you need and how competitive your category is. A GMB rescue is a one-time project, while SEO and ads are monthly services with separate ad budgets paid directly to Google or Meta. Because we work remotely, our pricing stays sensible compared with large agency retainers. We share a clear scope and quote after a free audit on WhatsApp.",
      ],
    },
    {
      h2: "How do Ahmedabad customers search online?",
      body: [
        "Many add an area name such as Satellite, Bopal, Navrangpura or Maninagar to their searches, and some search in Gujarati or mixed language. Value matters, so reviews, clear pricing signals and quick WhatsApp replies influence decisions strongly. We reflect these habits in your Google Business Profile, ad copy and website content so your business matches how local customers look for it.",
      ],
    },
  ],
};
