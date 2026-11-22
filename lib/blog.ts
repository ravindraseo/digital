import type { FAQ, IconName, Section } from "./types";

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: string;
  icon: IconName;
  date: string; // ISO
  dateLabel: string;
  readMins: number;
  excerpt: string;
  intro: string[];
  sections: Section[];
  faqs: FAQ[];
};

export const posts: Post[] = [
  {
    slug: "google-business-profile-video-verification",
    title: "How to pass Google Business Profile video verification in India",
    metaTitle: "Google Business Profile Video Verification: Step-by-Step Guide",
    description:
      "A practical guide to passing Google Business Profile (GMB) video verification in India: what to record, common rejection reasons and what to do if it fails.",
    category: "Google Business Profile",
    icon: "store",
    date: "2026-11-18",
    dateLabel: "18 November 2026",
    readMins: 6,
    excerpt:
      "Most rejected verifications fail for the same few reasons. Here is exactly what to show in your video, in what order, so your listing goes live the first time.",
    intro: [
      "Video verification is now the most common way Google asks Indian businesses to prove they are real. You record a short, continuous video and upload it from the Google Business Profile app or dashboard. It sounds simple, yet we see videos rejected every week, often twice, which can delay a listing by weeks.",
      "The good news: almost every rejection comes from a handful of avoidable mistakes. This guide walks through what Google wants to see and how to record it properly. If your listing is suspended rather than unverified, read our guide on [recovering a suspended Google Business Profile](/blog/google-business-profile-suspended) instead.",
    ],
    sections: [
      {
        h2: "What does Google want to see in a verification video?",
        body: [
          "Google is checking three things: that the business exists at the location on the listing, that it is the business named on the listing, and that you are authorised to manage it. Your video must prove all three in one continuous take, without cuts or edits.",
        ],
        list: [
          "Location: the street, nearby shops or landmarks, and your building or shop entrance",
          "Business: the signboard with your business name, clearly readable",
          "Operations: the inside of the premises, equipment, products or workspace",
          "Management: proof you control the business, such as unlocking the shutter, opening a cash counter or showing business documents",
        ],
      },
      {
        h2: "How should you record the video, step by step?",
        body: [
          "Plan the route before you press record, then film it in one go. A good video is usually 30 seconds to two minutes long.",
        ],
        list: [
          "Start on the street outside and slowly pan to show the road name board or a well-known landmark",
          "Walk towards your entrance and hold steady on the signboard for a few seconds",
          "Open the door or shutter yourself to show you have access",
          "Walk inside and show the workspace, products, equipment or service area",
          "Finish by showing a business document such as GST certificate, shop licence or utility bill in the business name",
        ],
      },
      {
        h2: "Why do verification videos get rejected?",
        body: [
          "The most common reasons we see are a signboard that does not match the name on the listing, a video that starts indoors with no street context, cuts or edits in the clip, poor lighting at night, and home-based businesses filming only the inside of a home. Another frequent problem is a listing name stuffed with keywords such as “Best CA Firm in Delhi”, which no signboard will match.",
          "Before recording, make sure the business name on your listing matches your real signboard exactly, and that the pin on the map sits on your actual building.",
        ],
      },
      {
        h2: "What if you are a service-area business without a shop?",
        body: [
          "If you visit customers rather than receiving them, set your profile as a service-area business and hide the address. In the video, show your vehicle with branding if you have it, your tools or equipment, and business documents in your name. Google still needs evidence that the business is real and that you run it.",
        ],
      },
      {
        h2: "What to do if your video is rejected",
        body: [
          "Do not create a new listing. Read the rejection message, fix the specific issue, and record again with more context, especially the street and signboard. If you are rejected twice, contact Google Business Profile support with your documents. If it still does not work, our [Google Business Profile service](/gmb-optimization-services-in-delhi) handles verification and appeals for businesses across India.",
        ],
      },
    ],
    faqs: [
      { q: "How long does Google take to review a verification video?", a: "Often a few days, though it can take longer during busy periods. You will see the status in your Business Profile dashboard." },
      { q: "Can someone else record the video for me?", a: "Yes, as long as the video shows the business and proof of management. The owner or manager should ideally appear opening the premises." },
      { q: "Can I verify a business at home?", a: "Yes, but you should set it as a service-area business and hide the address unless customers actually visit your home." },
    ],
  },
  {
    slug: "google-business-profile-suspended",
    title: "Google Business Profile suspended? How to get it back",
    metaTitle: "Google Business Profile Suspended? How to Get It Reinstated",
    description:
      "Why Google suspends Business Profiles, how to tell which type of suspension you have, and the exact steps to fix the cause and file a successful appeal.",
    category: "Google Business Profile",
    icon: "shield",
    date: "2026-11-12",
    dateLabel: "12 November 2026",
    readMins: 7,
    excerpt:
      "A suspended listing stops your calls overnight. Here is how to find the real cause, fix it and write an appeal that Google approves.",
    intro: [
      "Few things hurt a local business faster than a suspended Google Business Profile. The listing disappears from Maps or shows as unverified, calls stop, and reviews you worked hard for are suddenly invisible. Panic usually follows, and panic leads to the worst move: creating a new listing.",
      "Suspensions can almost always be fixed if you find the real cause and give Google clear evidence. This guide explains how. If your listing simply has not been verified yet, see our [video verification guide](/blog/google-business-profile-video-verification).",
    ],
    sections: [
      {
        h2: "Why do Google Business Profiles get suspended?",
        body: ["Suspensions are usually triggered when something on the listing looks inconsistent with Google’s guidelines. The most common causes:"],
        list: [
          "Keywords or locations added to the business name",
          "An address that does not match the signboard or is a virtual office",
          "Many edits in a short time, especially to name, address or category",
          "A business type Google treats as high risk, such as locksmiths or repair services",
          "Duplicate listings for the same business",
          "Reviews from staff, friends or paid sources",
        ],
      },
      {
        h2: "Which type of suspension do you have?",
        body: [
          "In a soft suspension, the profile shows as unverified or you lose management access, but the listing may still appear. In a hard suspension, the listing is removed from Maps entirely. Both are fixed through Google’s reinstatement request, but hard suspensions usually need stronger evidence that the business is real and operates at that address.",
        ],
      },
      {
        h2: "How to fix the cause before appealing",
        body: [
          "Do not appeal until the listing follows the guidelines, or the appeal will be rejected. Change the business name to match your signboard and registration exactly. Remove keywords from the name. Make sure the address is where you actually serve customers, or switch to a service-area profile. Remove duplicates. Check that your category is accurate and your website shows the same name, address and phone number.",
        ],
      },
      {
        h2: "What evidence should you include?",
        body: ["Prepare clear photos and documents before filing the reinstatement request:"],
        list: [
          "Photos of the permanent signboard and the shop exterior with the street visible",
          "Photos of the interior and the business in operation",
          "Business registration such as GST certificate or shop and establishment licence",
          "A utility bill or rent agreement at the business address",
          "Your website and social profiles showing the same business details",
        ],
      },
      {
        h2: "How long does reinstatement take, and what if it fails?",
        body: [
          "Google often replies within a few days to a few weeks. If the appeal is rejected, read the reason carefully, fix any remaining issue and appeal again with stronger evidence. You can also ask for help through the Google Business Profile community or support. If you would rather hand it over, our [Google Business Profile service](/gmb-optimization-services-in-delhi) diagnoses suspensions and prepares appeals for businesses across India.",
        ],
      },
    ],
    faqs: [
      { q: "Will I lose my reviews after a suspension?", a: "Usually not. When a listing is reinstated, its reviews normally return." },
      { q: "Should I create a new listing instead?", a: "No. A new listing for the same business is a duplicate and can lead to a permanent suspension." },
      { q: "Can I appeal more than once?", a: "Yes, but each appeal should fix the reason given and include better evidence." },
    ],
  },
  {
    slug: "seo-cost-in-delhi",
    title: "How much does SEO cost in Delhi? What you are really paying for",
    metaTitle: "How Much Does SEO Cost in Delhi? A Plain-English Guide",
    description:
      "What decides the cost of SEO in Delhi, what a fair monthly plan includes, red flags in cheap packages and how to judge whether SEO is worth it for your business.",
    category: "SEO",
    icon: "search",
    date: "2026-11-05",
    dateLabel: "5 November 2026",
    readMins: 6,
    excerpt:
      "SEO quotes in Delhi vary wildly. Here is what actually drives the price, what you should get each month, and the red flags in cheap packages.",
    intro: [
      "Ask five agencies in Delhi for an SEO quote and you may get five very different numbers. Some promise page one for a tiny monthly fee; others quote many times more. The difference is rarely explained, which makes it hard for business owners to judge value.",
      "This guide explains what really drives SEO cost, what a fair plan should include, and how to tell whether the money is working. It applies to most local businesses in Delhi NCR, from clinics and CA firms to shops and service providers.",
    ],
    sections: [
      {
        h2: "What decides how much SEO costs?",
        body: ["The price follows the amount of work needed to win, which depends on:"],
        list: [
          "Competition: “CA firm in Delhi” is harder to win than “CA firm in Preet Vihar”",
          "Your starting point: a slow site with technical problems needs more work first",
          "Scope: one location and a few services, or many branches and products",
          "Content needs: how many pages and articles must be written",
          "Link building: how much authority your site needs to compete",
        ],
      },
      {
        h2: "What should a monthly SEO plan include?",
        body: [
          "A fair plan should show clear work every month, not just a report. Expect technical fixes, keyword-focused page improvements, new helpful content, Google Business Profile updates for local businesses, ethical link building, and a report that connects rankings to enquiries. You should know exactly what was done and why.",
          "If your business depends on nearby customers, a large share of the budget should go to [local SEO](/local-seo-services-in-delhi) and your Google Business Profile, because that is where quick wins usually are.",
        ],
      },
      {
        h2: "What are the red flags in cheap SEO packages?",
        body: [
          "Be careful with guarantees of a number one ranking, packages priced per hundred backlinks, reports full of rankings for keywords nobody searches, and agencies that keep your Google accounts in their own name. These usually mean low-quality links or vanity metrics, and some tactics can harm your site.",
        ],
      },
      {
        h2: "How long before SEO pays for itself?",
        body: [
          "For specific local keywords, many businesses see movement in two to three months and steady enquiries in three to six months. Competitive city-wide terms take longer. That is why we suggest starting with high-intent, lower-competition keywords that can bring enquiries sooner, then building towards bigger terms.",
        ],
      },
      {
        h2: "How do you judge whether SEO is working?",
        body: [
          "Track calls, WhatsApp chats and form submissions from organic search, not only rankings. Compare enquiries and their value with what you spend each month. If a page ranks but brings no enquiries, ask why. Our [SEO services](/seo-company-in-delhi) report on exactly these numbers, and we quote only after a free audit so the price matches the work your business actually needs.",
        ],
      },
    ],
    faqs: [
      { q: "Is SEO a one-time cost?", a: "Basic technical fixes can be one-time, but rankings need ongoing content, links and updates, so most businesses treat SEO as a monthly investment." },
      { q: "Is local SEO cheaper than national SEO?", a: "Usually yes, because the competition is narrower and the work focuses on one area and your Google Business Profile." },
      { q: "Can I do SEO myself?", a: "You can handle basics like your Google Business Profile and reviews. Technical work, content strategy and link building usually benefit from experience." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
