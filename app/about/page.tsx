import type { Metadata } from "next";
import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import { Icon } from "@/components/Icon";
import { Breadcrumbs, CtaBand, FaqList, JsonLd, PromiseCard, ServicesGrid } from "@/components/Sections";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { site, waLink, ogImages } from "@/lib/site";
import type { FAQ, IconName } from "@/lib/types";

export const metadata: Metadata = {
  title: { absolute: "About Digital Ravindra | Meet Founder Ravindra" },
  description:
    "Meet Digital Ravindra: a hands-on digital marketing team helping Delhi NCR businesses grow with honest SEO, ads, websites and apps.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", images: ogImages },
};

// Drop your photo at public/images/ravindra-founder-hd.jpg and it appears automatically.
const PHOTO = "/images/ravindra-founder-hd.jpg";
const hasPhoto = existsSync(path.join(process.cwd(), "public", PHOTO));

const crumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const values: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Honesty first", text: "If a service won’t help you, we’ll say so — even if it means less work for us." },
  { icon: "users", title: "Real relationships", text: "You’ll have our number. We answer it." },
  { icon: "target", title: "Results you can count", text: "Enquiries, calls and sales. Not likes and impressions dressed up as success." },
  { icon: "spark", title: "Always learning", text: "Google and Meta change every month. Staying sharp is part of the job." },
];

const faqs: FAQ[] = [
  {
    q: "Who will actually work on my project?",
    a: "You work directly with our core team. We don’t pass your account to juniors you’ve never met, and you’ll always know who is responsible for what.",
  },
  {
    q: "Can I meet you in person?",
    a: "You are welcome to visit our office in New Ashok Nagar, East Delhi. That said, many clients — in Noida, Gurugram or even Ahmedabad — work with us entirely over WhatsApp, phone and video calls.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Mostly small and medium businesses — clinics, retailers, manufacturers, service providers, coaching institutes, real-estate firms and online brands.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[webPageSchema({ title: "About Digital Ravindra | Meet Founder Ravindra", description: "Meet Digital Ravindra: a hands-on digital marketing team helping Delhi NCR businesses grow with honest SEO, ads, websites and apps.", href: "/about", about: "Digital Ravindra", type: "AboutPage" }), breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow eyebrow--light">About Digital Ravindra</span>
          <h1>We started this because good businesses deserve to be found</h1>
          <p className="lead">
            Not a faceless agency. A small team that picks up the phone, explains things plainly and cares whether
            your business actually grows.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="founder-photo">
            {hasPhoto ? (
              <Image
                src={PHOTO}
                alt={`${site.founder}, founder of ${site.name}`}
                fill
                sizes="380px"
                quality={90}
                style={{ objectFit: "cover" }}
                priority
              />
            ) : (
              <span className="logo-symbol" aria-hidden="true">
                <span className="logo-letter-d">D</span>
                <span className="logo-letter-r">R</span>
                <span className="logo-arrow" />
              </span>
            )}
            <div className="founder-tag">
              <strong>{site.founder}</strong>
              <span>Founder, {site.name}</span>
            </div>
          </div>
          <div className="prose">
            <span className="eyebrow">Our story</span>
            <h2>Hi, I’m {site.founder}.</h2>
            <p>
              For years I watched talented business owners — doctors, shopkeepers, manufacturers, consultants — lose
              customers to competitors who were simply louder online. Not better. Just easier to find.
            </p>
            <p>
              Many of them had already paid an agency and got little back except reports they couldn’t understand.
              That frustrated me, because the fundamentals aren’t a secret: a well-kept Google listing, a fast website,
              content that answers real questions, and ads aimed at people who are ready to buy.
            </p>
            <p>
              A bit about me: I completed my {site.founderProfile.education} in {site.founderProfile.graduated} and have
              spent the last {site.founderProfile.experienceYears} years working in digital marketing, first in
              digital marketing jobs and now with my own clients. My day-to-day is SEO, Google Business Profile, Google
              and Meta ads, and building and fixing WordPress websites. What clients value most is simple: I keep them
              in the loop, explain things clearly and reply when they message.
            </p>
            <ul className="founder-facts" aria-label={`About ${site.founder}`}>
              <li><strong>{site.founderProfile.experienceYears} years</strong>In digital marketing</li>
              <li><strong>{site.founderProfile.education}</strong>Completed {site.founderProfile.graduated}</li>
              <li><strong>WordPress</strong>Websites: build, speed and fixes</li>
              <li><strong>SEO, GMB, Google &amp; Meta ads</strong>Hands-on, every week</li>
              <li><strong>Clear communication</strong>On WhatsApp or a call</li>
              <li><strong>Based in Delhi</strong>New Ashok Nagar office</li>
            </ul>
            <p>
              So I started Digital Ravindra to do that work properly and explain it simply. Today we help businesses
              in Delhi and across NCR with SEO, Google Business Profiles, paid ads, WhatsApp marketing,
              websites and apps. We still work the same way: honest advice, hands-on execution, and reporting on the
              enquiries that matter.
            </p>
            <p className="signature">— {site.founder}</p>
            <a href={waLink(`Hi ${site.founder}, I'd like to talk about my business.`)} className="btn btn-primary" target="_blank" rel="noopener">
              <Icon name="whatsapp" size={20} /> Say hello on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we stand for</span>
            <h2>Four promises we make to every client</h2>
          </div>
          <div className="values">
            {values.map((v) => (
              <div key={v.title} className="why-card">
                <span className="service-icon">
                  <Icon name={v.icon} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PromiseCard />
      <ServicesGrid title="Here’s how we can help your business" />
      <FaqList faqs={faqs} title="A little more about working with us" />
      <CtaBand title="Let’s have a chai-and-strategy chat" text="Tell us about your business. We’ll share a few honest ideas you can use — whether or not you work with us." />
    </>
  );
}
