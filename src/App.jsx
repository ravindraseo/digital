import { useState, useEffect } from "react";
import "./App.css";

const PHONE = "918282802150";
const DISPLAY_PHONE = "+91 8282802150";

// Services Data with category tags
const services = [
  {
    id: "seo",
    category: "marketing",
    tag: "High ROI",
    title: "SEO Services",
    description: "Rank higher on Google, dominate search queries, and drive consistent organic traffic that converts.",
    color: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
        <circle cx="19" cy="9" r="1.5" fill="currentColor" />
      </svg>
    ),
    features: ["Keyword Strategy", "Technical Audit", "Backlink Building"],
  },
  {
    id: "performance-marketing",
    category: "marketing",
    tag: "Instant Leads",
    title: "Performance Marketing",
    description: "Run precision-targeted Google Ads & Meta campaigns with maximum return on ad spend (ROAS).",
    color: "pink",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 18-5v12L3 13v-2z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
    features: ["Google Ads (PPC)", "Meta / Instagram Ads", "Retargeting Funnels"],
  },
  {
    id: "social-media",
    category: "marketing",
    tag: "Brand Growth",
    title: "Social Media Marketing",
    description: "Build an active community, amplify brand awareness, and engage prospective customers on all socials.",
    color: "purple",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    features: ["Content Calendars", "Viral Reels & Creatives", "Influencer Collabs"],
  },
  {
    id: "web-dev",
    category: "development",
    tag: "Fast & Modern",
    title: "Website Development",
    description: "Lightning-fast, mobile-first, and SEO-optimized custom websites tailored to maximize conversions.",
    color: "orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    features: ["Custom Web Design", "React & Next.js", "WordPress / CMS"],
  },
  {
    id: "app-dev",
    category: "development",
    tag: "iOS & Android",
    title: "App Development",
    description: "End-to-end mobile app design and development that provides fluid user experience and robust scale.",
    color: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="3" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
      </svg>
    ),
    features: ["React Native / Flutter", "Intuitive UI/UX", "API & Cloud Backend"],
  },
  {
    id: "ecommerce",
    category: "development",
    tag: "High Conversion",
    title: "E-commerce Solutions",
    description: "Turn online storefronts into sales machines with secure checkouts and seamless payment gateways.",
    color: "amber",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1.5" />
        <circle cx="20" cy="21" r="1.5" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    features: ["Shopify & WooCommerce", "Payment Integration", "Inventory Management"],
  },
  {
    id: "content-marketing",
    category: "marketing",
    tag: "Authority",
    title: "Content Marketing",
    description: "Engaging copy, blog articles, and video content that establish authority and nurture client trust.",
    color: "cyan",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
    features: ["SEO Copywriting", "Lead Magnets", "Brand Storytelling"],
  },
  {
    id: "branding",
    category: "marketing",
    tag: "Identity",
    title: "Branding & Consulting",
    description: "Craft a distinct brand identity, logos, design systems, and long-term digital growth roadmap.",
    color: "teal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z" />
      </svg>
    ),
    features: ["Brand Guidelines", "Visual Assets", "Growth Strategy"],
  },
];

// Portfolio Projects
const projects = [
  {
    title: "Rojgar Result Tools",
    category: "Technical SEO & Web Utility Portal",
    filterKey: "seo",
    image: "/images/project-rojgar-tools.jpg",
    tag: "SEO Case Study",
    metric: "+420% Organic Search Traffic",
    url: "https://rojgarresulttools.com/",
    description: "Rank #1 Sarkari exam utility tools, Core Web Vitals speed optimization, and high-volume keyword dominance.",
  },
  {
    title: "Delhi Event Company",
    category: "Local SEO & Event Management",
    filterKey: "seo",
    image: "/images/project-delhi-event.jpg",
    tag: "Local SEO Dominance",
    metric: "#1 Local Google Ranking",
    url: "https://delhieventcompany.co.in/",
    description: "Dominant local search ranking for wedding & corporate event management across Delhi NCR driving high-ticket client inquiries.",
  },
  {
    title: "Real Estate Website",
    category: "Website Development",
    filterKey: "web",
    image: "/images/project-real-estate.jpg",
    tag: "Real Estate",
    metric: "+180% Lead Inquiries",
  },
  {
    title: "E-commerce Website",
    category: "Website Development",
    filterKey: "web",
    image: "/images/project-ecommerce.jpg",
    tag: "E-commerce",
    metric: "3.2x Revenue Growth",
  },
  {
    title: "Food Delivery App",
    category: "Mobile App Development",
    filterKey: "app",
    image: "/images/project-food-delivery.jpg",
    tag: "Mobile App",
    metric: "50k+ Active Downloads",
  },
  {
    title: "Business Consulting Website",
    category: "Website Development",
    filterKey: "web",
    image: "/images/project-consulting.jpg",
    tag: "Consulting",
    metric: "98/100 PageSpeed",
  },
];

// Process steps
const processSteps = [
  {
    num: "01",
    title: "Discover",
    description: "Deep dive into your business goals, target audience, and competitive edge.",
    color: "#0066FF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Strategy",
    description: "Develop a bespoke data-backed blueprint for SEO, ad campaigns, or custom tech stack.",
    color: "#00C49F",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Execution",
    description: "High-speed implementation with pixel-perfect design, clean code, and ads optimization.",
    color: "#FF7A00",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Results",
    description: "Measure KPIs, analyze conversion funnels, and continuously scale profitable traffic.",
    color: "#7C3AED",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

// Testimonials
const testimonials = [
  {
    name: "Amit Sharma",
    role: "Business Owner, Delhi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&h=140&q=80",
    text: "Digital Ravindra helped us rank #1 on Google for high-intent keywords and generated over 150+ quality leads monthly. Their reporting is transparent and results are real.",
    company: "Sharma Logistics",
  },
  {
    name: "Priya Mehta",
    role: "E-commerce Founder, USA",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&h=140&q=80",
    text: "Our online sales grew by 3.2X within 4 months with their Meta & Google Ads funnels. Best digital agency partner we have worked with!",
    company: "Luxe Fashion Apparel",
  },
  {
    name: "Rahul Verma",
    role: "Startup Founder, Bangalore",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=140&h=140&q=80",
    text: "Excellent website and mobile app development! The design is stunning, lightning fast, and conversion rates improved immediately on launch day.",
    company: "TechNova Solutions",
  },
];

// FAQs
const faqs = [
  {
    q: "How soon can I expect results from SEO and Performance Marketing?",
    a: "For Google & Meta Ads, targeted lead generation starts within 24 to 48 hours of campaign launch. For organic SEO, measurable Google rankings and organic traffic growth typically show within 60 to 90 days as domain authority builds.",
  },
  {
    q: "Do you build custom websites and native mobile apps?",
    a: "Yes! We develop modern, ultra-fast websites using React, Next.js, and WordPress, as well as cross-platform mobile apps for Android and iOS using React Native and Flutter with scalable cloud backends.",
  },
  {
    q: "What makes Digital Ravindra different from typical agencies?",
    a: "We focus on revenue and real ROI, never vanity metrics. Every campaign is backed by clear analytics, direct WhatsApp communication, 100% transparency, and customized growth roadmaps.",
  },
  {
    q: "How does the Free 30-Minute Consultation work?",
    a: "During our 1-on-1 strategy call, we review your current website, analyze competitor gaps, and deliver an actionable plan to scale your brand visibility and lead flow—with zero sales obligation.",
  },
  {
    q: "Do you work with international clients outside India?",
    a: "Yes! We proudly partner with clients in the USA, UK, UAE, Canada, and Australia, offering seamless timezone coordination, international payment support, and high-converting global campaigns.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceFilter, setServiceFilter] = useState("all");
  const [projectFilter, setProjectFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "SEO Services",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = encodeURIComponent(
      `Hello Digital Ravindra,\nMy name is ${formData.name}.\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService Interested: ${formData.service}\nDetails: ${formData.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
    }, 800);
  };

  const openConsultation = () => {
    setModalOpen(true);
    setSubmitted(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHomeClick = (e) => {
    if (e) e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname + window.location.search);
    }
  };

  // Filtered Services
  const filteredServices = services.filter((s) => {
    if (serviceFilter === "all") return true;
    return s.category === serviceFilter;
  });

  // Filtered Projects
  const filteredProjects = projects.filter((p) => {
    if (projectFilter === "all") return true;
    return p.filterKey === projectFilter;
  });

  return (
    <div className="website">
      {/* ================= TOP ANNOUNCEMENT RIBBON ================= */}
      <div className="announcement-ribbon">
        <div className="container announcement-inner">
          <div className="announcement-left">
            <span className="live-pulse-dot"></span>
            <span className="announcement-text">
              <strong>Open for Q4 Projects:</strong> Claim your complimentary 30-min Digital Growth Audit
            </span>
          </div>
          <div className="announcement-right">
            <a href={`tel:+${PHONE}`} className="announcement-link">
              📞 Call Now: {DISPLAY_PHONE}
            </a>
            <span className="ribbon-sep">•</span>
            <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer" className="announcement-link">
              💬 WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      {/* ================= HEADER / NAVBAR ================= */}
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          {/* LOGO */}
          <a href="/" onClick={handleHomeClick} className="logo" aria-label="Digital Ravindra">
            <div className="logo-symbol">
              <span className="logo-letter-d">D</span>
              <span className="logo-letter-r">R</span>
            </div>
            <div className="logo-text">
              <div className="logo-brand">
                Digital <span>Ravindra</span>
              </div>
              <div className="logo-tagline">Grow | Rank | Convert</div>
            </div>
          </a>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="nav-menu desktop-menu">
            <a href="/" onClick={handleHomeClick} className="nav-link active">
              Home
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
            <a href="#process" className="nav-link">
              How We Work
            </a>
            <a href="#testimonials" className="nav-link">
              Reviews
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="nav-actions">
            <a href={`tel:+${PHONE}`} className="phone-link desktop-only">
              <svg
                className="phone-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{DISPLAY_PHONE}</span>
            </a>

            <button
              onClick={openConsultation}
              className="btn-primary btn-consultation"
            >
              <span className="btn-text-desktop">Get Free Consultation</span>
              <span className="btn-text-mobile">Consult</span>
              <span>→</span>
            </button>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER OVERLAY ================= */}
      <div
        className={`mobile-drawer-overlay ${menuOpen ? "visible" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* ================= MOBILE NAVIGATION DRAWER ================= */}
      <aside className={`mobile-nav-drawer ${menuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <div className="logo">
            <div className="logo-symbol">
              <span className="logo-letter-d">D</span>
              <span className="logo-letter-r">R</span>
            </div>
            <div className="logo-text">
              <div className="logo-brand">
                Digital <span>Ravindra</span>
              </div>
              <div className="logo-tagline">Grow | Rank | Convert</div>
            </div>
          </div>
          <button
            className="mobile-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="mobile-drawer-body">
          <nav className="mobile-nav-links">
            <a href="/" onClick={handleHomeClick}>
              <span>🏠 Home</span>
              <span className="chevron">›</span>
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              <span>⚡ Services &amp; Solutions</span>
              <span className="chevron">›</span>
            </a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>
              <span>💼 Featured Projects</span>
              <span className="chevron">›</span>
            </a>
            <a href="#process" onClick={() => setMenuOpen(false)}>
              <span>🔄 How We Work</span>
              <span className="chevron">›</span>
            </a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              <span>⭐ Client Reviews</span>
              <span className="chevron">›</span>
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              <span>❓ Common Questions</span>
              <span className="chevron">›</span>
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              <span>📍 Contact Details</span>
              <span className="chevron">›</span>
            </a>
          </nav>

          <div className="mobile-drawer-actions">
            <button
              onClick={() => {
                setMenuOpen(false);
                openConsultation();
              }}
              className="btn-primary mobile-drawer-btn"
            >
              Request Free Consultation <span>→</span>
            </button>
            <a
              href={`https://wa.me/${PHONE}`}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary mobile-drawer-whatsapp"
            >
              🟢 Chat on WhatsApp
            </a>
            <a href={`tel:+${PHONE}`} className="mobile-drawer-phone">
              📞 {DISPLAY_PHONE}
            </a>
          </div>
        </div>
      </aside>

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="hero-section">
        {/* Subtle Ambient Decorative Glowing Orbs */}
        <div className="hero-glow-orb orb-primary"></div>
        <div className="hero-glow-orb orb-secondary"></div>
        <div className="hero-grid-pattern"></div>

        <div className="container hero-grid">
          {/* HERO LEFT */}
          <div className="hero-left">
            <div className="hero-pill-badge">
              <span className="pulse-dot"></span>
              <span>Result-Driven Growth Agency</span>
            </div>

            <h1 className="hero-title">
              Scale Your Revenue <br />
              with <span className="highlight-gradient">Performance Marketing,</span> <br />
              SEO &amp; High-Impact Apps
            </h1>

            <p className="hero-description">
              We engineer custom digital strategies that generate high-intent leads, dominate search rankings, and deliver verified ROI for businesses in India, USA, and worldwide.
            </p>

            <div className="hero-cta-group">
              <button onClick={openConsultation} className="btn-primary hero-btn">
                Get Free Consultation <span>→</span>
              </button>

              <a href="#portfolio" className="btn-secondary hero-btn-outline">
                <span className="play-icon">▶</span> Explore Our Work
              </a>
            </div>

            {/* CREATIVE TRUST METRICS ROW */}
            <div className="hero-trust-row">
              <div className="trust-pill">
                <span className="trust-icon">⚡</span>
                <span><strong>10X</strong> Avg. ROI</span>
              </div>
              <div className="trust-pill">
                <span className="trust-icon">🎯</span>
                <span><strong>500+</strong> Brands Scaled</span>
              </div>
              <div className="trust-pill">
                <span className="trust-icon">⭐</span>
                <span><strong>4.9/5</strong> Rating</span>
              </div>
            </div>

            {/* SOCIAL PROOF AVATARS */}
            <div className="hero-social-proof">
              <div className="avatar-stack">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Client"
                  className="avatar-img"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Client"
                  className="avatar-img"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Client"
                  className="avatar-img"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Client"
                  className="avatar-img"
                />
              </div>
              <div className="social-proof-text">
                <strong>500+ Clients Trust Digital Ravindra</strong>
                <span>Verified Google Reviews &amp; Client Growth Results</span>
              </div>
            </div>
          </div>

          {/* HERO RIGHT (DEVICE MOCKUP & RESPONSIVE FLOATING BADGES) */}
          <div className="hero-right">
            <div className="hero-stage">
              {/* Central Mockup Image */}
              <div className="hero-image-wrapper">
                <img
                  src="/images/hero-devices.jpg"
                  alt="Digital Ravindra Growth Solutions Laptop and Mobile Mockup"
                  className="hero-main-img"
                />
              </div>

              {/* FLOATING BADGE 1: SEO */}
              <div className="floating-badge badge-seo">
                <div className="badge-icon-box google-icon">
                  <span className="google-g">G</span>
                </div>
                <div className="badge-text-box">
                  <strong>#1 SEO Ranking</strong>
                  <span>Google Top 3 Positions</span>
                </div>
              </div>

              {/* FLOATING BADGE 2: Social Media */}
              <div className="floating-badge badge-social">
                <div className="badge-icon-box social-icon">
                  <span className="social-bubble">f</span>
                </div>
                <div className="badge-text-box">
                  <strong>Social Growth</strong>
                  <span>3.2x Engagement</span>
                  <div className="mini-socials">
                    <span className="social-tag fb">f</span>
                    <span className="social-tag ig">◎</span>
                    <span className="social-tag in">in</span>
                  </div>
                </div>
              </div>

              {/* FLOATING BADGE 3: Website Development */}
              <div className="floating-badge badge-web">
                <div className="badge-icon-box blue-tag-icon">
                  <code>&lt;/&gt;</code>
                </div>
                <div className="badge-text-box">
                  <strong>Fast Websites</strong>
                  <span>99+ PageSpeed Score</span>
                </div>
              </div>

              {/* FLOATING BADGE 4: App Development */}
              <div className="floating-badge badge-app">
                <div className="badge-icon-box purple-phone-icon">
                  <span>📱</span>
                </div>
                <div className="badge-text-box">
                  <strong>Mobile Apps</strong>
                  <span>iOS &amp; Android Ready</span>
                </div>
              </div>

              {/* FLOATING BADGE 5: PPC Advertising */}
              <div className="floating-badge badge-ppc">
                <div className="badge-icon-box yellow-ad-icon">
                  <span>▲</span>
                </div>
                <div className="badge-text-box">
                  <strong>PPC Advertising</strong>
                  <span>Instant Lead Flow</span>
                </div>
              </div>

              {/* FLOATING BADGE 6: Content Marketing */}
              <div className="floating-badge badge-content">
                <div className="badge-icon-box orange-doc-icon">
                  <span>📑</span>
                </div>
                <div className="badge-text-box">
                  <strong>Content ROI</strong>
                  <span>Engage &amp; Convert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INFINITE MARQUEE TRUSTED PARTNERS BAR ================= */}
      <section className="partners-bar">
        <div className="partners-inner">
          <div className="partners-label">
            Certified Partners &amp; Industry Standards Worldwide
          </div>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {/* Partner item list duplicated for seamless infinite loop */}
              {[1, 2].map((loopIdx) => (
                <div key={loopIdx} className="marquee-group">
                  <div className="partner-logo">
                    <span className="google-partner-g">
                      <span className="g-blue">G</span>
                      <span className="g-red">o</span>
                      <span className="g-yellow">o</span>
                      <span className="g-blue">g</span>
                      <span className="g-green">l</span>
                      <span className="g-red">e</span>
                    </span>
                    <span className="partner-sub">Partner</span>
                  </div>

                  <div className="partner-logo">
                    <svg className="meta-icon" viewBox="0 0 24 24" fill="#0081FB">
                      <path d="M12 4.4C8 4.4 4.8 7.3 3.5 10.9 2.2 14.5 3 18.2 5.5 20.3c1.7 1.4 3.9 1.7 5.8.8l.7-.3.7.3c1.9.9 4.1.6 5.8-.8 2.5-2.1 3.3-5.8 2-9.4-1.3-3.6-4.5-6.5-8.5-6.5zm-3.2 11.8c-1.3 0-2.4-.9-2.7-2.1-.4-1.5.3-3.2 1.8-3.9 1.4-.7 3.1-.2 3.9 1.1.9 1.5.3 3.4-1.1 4.3-.6.4-1.2.6-1.9.6zm6.4 0c-.7 0-1.3-.2-1.9-.6-1.4-.9-2-2.8-1.1-4.3.8-1.3 2.5-1.8 3.9-1.1 1.5.7 2.2 2.4 1.8 3.9-.3 1.2-1.4 2.1-2.7 2.1z" />
                    </svg>
                    <div className="partner-text-stack">
                      <strong>Meta</strong>
                      <small>Business Partner</small>
                    </div>
                  </div>

                  <div className="partner-logo">
                    <svg className="shopify-icon" viewBox="0 0 24 24" fill="#95BF47">
                      <path d="M19.6 6.3 16.5 4c-.3-.2-.7 0-.8.3l-.9 3.5-3.8-1.2c-.3-.1-.6.1-.7.4L7.5 17.8c-.1.3 0 .6.3.7l9.8 4.1c.3.1.6 0 .7-.3l3.4-14.7c0-.5-.3-.9-.7-1.1" />
                    </svg>
                    <div className="partner-text-stack">
                      <strong>Shopify</strong>
                      <small>Partner</small>
                    </div>
                  </div>

                  <div className="partner-logo">
                    <div className="wp-badge">W</div>
                    <strong>WordPress</strong>
                  </div>

                  <div className="partner-logo">
                    <span className="aws-text">AWS</span>
                    <span className="partner-sub">Cloud</span>
                  </div>

                  <div className="partner-logo">
                    <div className="ms-squares">
                      <span className="ms-red"></span>
                      <span className="ms-green"></span>
                      <span className="ms-blue"></span>
                      <span className="ms-yellow"></span>
                    </div>
                    <span className="ms-text">Microsoft</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION WITH INTERACTIVE FILTER ================= */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-pill">OUR EXPERTISE</div>
            <h2 className="section-heading">
              Complete <span className="highlight-blue">Digital Growth Engine</span> Under One Roof
            </h2>
            <p className="section-subtext">
              We design and execute integrated marketing funnels, search domination campaigns, and modern web applications that turn visitors into loyal revenue.
            </p>

            {/* CREATIVE FILTER TABS */}
            <div className="filter-tabs-row">
              <button
                className={`filter-tab-btn ${serviceFilter === "all" ? "active" : ""}`}
                onClick={() => setServiceFilter("all")}
              >
                All Solutions ({services.length})
              </button>
              <button
                className={`filter-tab-btn ${serviceFilter === "marketing" ? "active" : ""}`}
                onClick={() => setServiceFilter("marketing")}
              >
                Digital Marketing &amp; SEO
              </button>
              <button
                className={`filter-tab-btn ${serviceFilter === "development" ? "active" : ""}`}
                onClick={() => setServiceFilter("development")}
              >
                Web &amp; App Development
              </button>
            </div>
          </div>

          <div className="services-cards-grid">
            {filteredServices.map((item) => (
              <div key={item.id} className="service-card-item">
                <div className="service-card-top-row">
                  <div className={`service-icon-box bg-${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="service-tag-pill">{item.tag}</span>
                </div>

                <div className="service-info">
                  <h3 className="service-card-title">{item.title}</h3>
                  <p className="service-card-desc">{item.description}</p>

                  <ul className="service-features-list">
                    {item.features?.map((feat, i) => (
                      <li key={i}>
                        <span className="check-bullet">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-footer">
                  <button
                    onClick={openConsultation}
                    className="service-card-cta-btn"
                  >
                    <span>Get Started</span>
                    <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS & LET'S GROW BANNER ================= */}
      <section className="stats-banner-section">
        <div className="container">
          <div className="stats-navy-card">
            <div className="stats-metrics-list">
              <div className="stat-metric-box">
                <div className="stat-badge-icon stat-trophy">🏆</div>
                <div className="stat-numbers">
                  <span className="stat-value">8+ Years</span>
                  <span className="stat-label">Proven Industry Mastery</span>
                </div>
              </div>

              <div className="stat-metric-box">
                <div className="stat-badge-icon stat-clients">👥</div>
                <div className="stat-numbers">
                  <span className="stat-value">500+</span>
                  <span className="stat-label">Delighted Worldwide Clients</span>
                </div>
              </div>

              <div className="stat-metric-box">
                <div className="stat-badge-icon stat-projects">📄</div>
                <div className="stat-numbers">
                  <span className="stat-value">1,000+</span>
                  <span className="stat-label">Campaigns &amp; Apps Delivered</span>
                </div>
              </div>

              <div className="stat-metric-box">
                <div className="stat-badge-icon stat-growth">📈</div>
                <div className="stat-numbers">
                  <span className="stat-value">300%</span>
                  <span className="stat-label">Average Traffic Growth</span>
                </div>
              </div>
            </div>

            <div className="stats-cta-box">
              <div className="stats-cta-header">
                <div>
                  <span className="quick-badge">🚀 Fast-Track Growth</span>
                  <h3>Ready to double your inbound revenue?</h3>
                </div>
                <span className="stats-arrow-up">↗</span>
              </div>
              <button onClick={openConsultation} className="btn-primary stats-cta-btn">
                Claim Free Strategy Session <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO / PROJECTS SECTION ================= */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <div className="section-pill">OUR PORTFOLIO</div>
              <h2 className="section-heading">
                Recent <span className="highlight-blue">Success Stories</span> &amp; Builds
              </h2>
              <p className="section-subtext">
                Explore a handpicked selection of our top-ranking SEO campaigns, high-converting web applications, and digital builds.
              </p>
            </div>

            {/* PROJECT FILTER TABS */}
            <div className="filter-tabs-row project-filters">
              <button
                className={`filter-tab-btn ${projectFilter === "all" ? "active" : ""}`}
                onClick={() => setProjectFilter("all")}
              >
                All Projects
              </button>
              <button
                className={`filter-tab-btn ${projectFilter === "seo" ? "active" : ""}`}
                onClick={() => setProjectFilter("seo")}
              >
                SEO Case Studies
              </button>
              <button
                className={`filter-tab-btn ${projectFilter === "web" ? "active" : ""}`}
                onClick={() => setProjectFilter("web")}
              >
                Websites
              </button>
              <button
                className={`filter-tab-btn ${projectFilter === "app" ? "active" : ""}`}
                onClick={() => setProjectFilter("app")}
              >
                Mobile Apps
              </button>
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="project-card">
                <div className="project-image-box">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                  />
                  <div className="project-overlay-badge">
                    <span>{project.metric}</span>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-tag"
                      title="Visit Live Website"
                    >
                      <span className="live-dot"></span> Live Website ↗
                    </a>
                  )}
                </div>
                <div className="project-footer">
                  <div className="project-meta">
                    <span className="project-cat-pill">{project.tag}</span>
                    <h3 className="project-name">{project.title}</h3>
                    <span className="project-cat">{project.category}</span>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-live-link"
                      >
                        {project.url.replace("https://", "").replace(/\/$/, "")} ↗
                      </a>
                    )}
                  </div>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-arrow-btn"
                      aria-label={`Visit live website ${project.title}`}
                      title="Visit Live Website"
                    >
                      ↗
                    </a>
                  ) : (
                    <button
                      onClick={openConsultation}
                      className="project-arrow-btn"
                      aria-label={`Inquire about ${project.title}`}
                      title="Request a Quote"
                    >
                      ↗
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK (PROCESS TIMELINE) ================= */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-pill">OUR PROCESS</div>
            <h2 className="section-heading">
              How We Turn Ideas Into <span className="highlight-blue">Measurable Growth</span>
            </h2>
            <p className="section-subtext">
              A streamlined 4-step framework crafted to eliminate guesswork and deliver on-time, high-impact results.
            </p>
          </div>

          <div className="process-flow-container">
            {processSteps.map((step, idx) => (
              <div key={step.num} className="process-step-item">
                <div className="process-step-card">
                  <div
                    className="process-icon-circle"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.icon}
                  </div>
                  <div className="process-step-info">
                    <div className="process-num-title">
                      <span className="step-num">{step.num}</span>
                      <h3 className="step-title">{step.title}</h3>
                    </div>
                    <p className="step-desc">{step.description}</p>
                  </div>
                </div>

                {idx < processSteps.length - 1 && (
                  <div className="process-connector-arrow">
                    <svg viewBox="0 0 50 16" fill="none">
                      <path
                        d="M2 8 Q 25 1 45 8"
                        stroke="#0066FF"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        fill="none"
                      />
                      <polygon points="43,5 49,8 43,11" fill="#0066FF" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <div className="section-pill">TESTIMONIALS</div>
              <h2 className="section-heading">
                Client Stories That <span className="highlight-blue">Speak Volumes</span>
              </h2>
              <p className="section-subtext">
                Read what business owners and founders say about their journey with Digital Ravindra.
              </p>
            </div>
            <div className="google-badge-pill">
              <span className="google-star">★</span>
              <span><strong>5.0 / 5.0</strong> Client Satisfaction</span>
            </div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="review-stars">★★★★★</div>
                  <span className="verified-badge">✓ Verified Client</span>
                </div>
                <p className="testimonial-quote">"{item.text}"</p>
                <div className="testimonial-top">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="reviewer-avatar"
                  />
                  <div className="reviewer-info">
                    <h4 className="reviewer-name">{item.name}</h4>
                    <span className="reviewer-role">{item.role}</span>
                    <span className="reviewer-company">{item.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE FAQ SECTION ================= */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-pill">GOT QUESTIONS?</div>
            <h2 className="section-heading">
              Frequently Asked <span className="highlight-blue">Questions</span>
            </h2>
            <p className="section-subtext">
              Everything you need to know about our workflow, deliverables, timeline, and consultation process.
            </p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item ${isOpen ? "active" : ""}`}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <button
                    className="faq-question-btn"
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.q}</span>
                    <span className="faq-toggle-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-box">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA BANNER (ROCKET BANNER) ================= */}
      <section className="rocket-cta-section">
        <div className="container">
          <div className="rocket-cta-card">
            <div className="rocket-cta-content">
              <div className="rocket-pill">🚀 Ready For Takeoff</div>
              <h2 className="rocket-cta-heading">
                Ready to Accelerate Your Business to the <span className="highlight-blue">Next Level?</span>
              </h2>
              <p className="rocket-cta-subtext">
                Book a no-obligation strategy session with Ravindra and uncover untapped revenue channels tailored to your exact industry.
              </p>
            </div>

            {/* Launching Rocket Graphic */}
            <div className="rocket-image-container">
              <img
                src="/images/cta-rocket.jpg"
                alt="Rocket Launch Illustration"
                className="rocket-illustration-img"
              />
            </div>

            <div className="rocket-cta-action-side">
              <button onClick={openConsultation} className="btn-primary rocket-btn">
                Get Free Consultation <span>→</span>
              </button>

              <div className="rocket-trust-checks">
                <span>
                  <svg className="check-icon" viewBox="0 0 20 20" fill="#0066FF">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Zero Obligation &amp; 100% Free
                </span>
                <span>
                  <svg className="check-icon" viewBox="0 0 20 20" fill="#0066FF">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Rapid 30-Min Response Time
                </span>
                <span>
                  <svg className="check-icon" viewBox="0 0 20 20" fill="#0066FF">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Senior Expert Strategy Call
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="contact" className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand-col">
            <a href="/" onClick={handleHomeClick} className="logo">
              <div className="logo-symbol">
                <span className="logo-letter-d">D</span>
                <span className="logo-letter-r">R</span>
              </div>
              <div className="logo-text">
                <div className="logo-brand">
                  Digital <span>Ravindra</span>
                </div>
                <div className="logo-tagline">Grow | Rank | Convert</div>
              </div>
            </a>
            <p className="footer-bio">
              We empower ambitious businesses worldwide with bespoke digital marketing strategies, fast modern web systems, and measurable revenue growth.
            </p>
            <div className="footer-social-links">
              <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                🟢
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                f
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                ◎
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                in
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-list">
              <li><a href="/" onClick={handleHomeClick}>Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Our Portfolio</a></li>
              <li><a href="#process">How We Work</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Our Core Services</h4>
            <ul className="footer-list">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="footer-list footer-contact-list">
              <li>
                <span className="contact-bullet">📞</span>
                <span className="contact-prefix">Call:</span>
                <a href={`tel:+${PHONE}`}>{DISPLAY_PHONE}</a>
              </li>
              <li>
                <span className="contact-bullet">🟢</span>
                <span className="contact-prefix">WhatsApp:</span>
                <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer">
                  {DISPLAY_PHONE}
                </a>
              </li>
              <li>
                <span className="contact-bullet">✉</span>
                <span className="contact-prefix">Email:</span>
                <a href="mailto:info@digitalravindra.com">info@digitalravindra.com</a>
              </li>
              <li>
                <span className="contact-bullet">📍</span>
                <span className="contact-prefix">Base:</span>
                <span className="contact-text">Delhi, India &amp; Serving Global Clients</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="container footer-bottom-inner">
            <div>© 2026 Digital Ravindra. All rights reserved. Designed for optimal conversion.</div>
            <div className="legal-links">
              <a href="/" onClick={handleHomeClick}>Privacy Policy</a>
              <span>•</span>
              <a href="/" onClick={handleHomeClick}>Terms of Service</a>
              <span>•</span>
              <a href="/" onClick={handleHomeClick}>Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= FLOATING WHATSAPP BUTTON WITH BADGE ================= */}
      <div className="floating-whatsapp-container">
        <span className="floating-whatsapp-tooltip">
          Chat with Ravindra <span>🟢 Online</span>
        </span>
        <a
          href={`https://wa.me/${PHONE}?text=Hi%20Digital%20Ravindra,%20I%20would%20like%20to%20discuss%20growing%20my%20business%20with%20your%20services!`}
          target="_blank"
          rel="noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 32 32" fill="white" width="30" height="30">
            <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A14 14 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.4 1.2 1.2-4.3-.3-.5A11.5 11.5 0 1 1 16 27.5zm6.3-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1-1.1 1.2-.4.2-.7.1a9.2 9.2 0 0 1-2.7-1.7 10 10 0 0 1-1.9-2.3c-.2-.3 0-.5.2-.6l.5-.6.3-.5a.6.6 0 0 0 0-.6c-.1-.2-.8-1.9-1.1-2.6s-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 1c-.3 1 .4 2.8 1.8 4.7 1.9 2.5 4.3 3.9 6.8 4.3 1.1.2 2 .1 2.7 0a2.3 2.3 0 0 0 1.5-1.1 1.9 1.9 0 0 0 .1-1.1c-.2-.2-.4-.3-.7-.4z" />
          </svg>
        </a>
      </div>

      {/* ================= BACK TO TOP FLOATING BUTTON ================= */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="floating-back-to-top"
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}

      {/* ================= FREE CONSULTATION MODAL ================= */}
      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setModalOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>

            {submitted ? (
              <div className="modal-success">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>
                  We have received your consultation request. Connecting you to WhatsApp for immediate priority support...
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="btn-primary"
                  style={{ marginTop: "1.2rem" }}
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="modal-header">
                  <div className="section-pill">FREE 30-MIN CALL</div>
                  <h2>Request Your Growth Plan</h2>
                  <p>
                    Tell us about your business goals and our lead strategist will connect with you within 30 minutes!
                  </p>
                </div>

                <form onSubmit={handleConsultationSubmit} className="modal-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Service You Need Most</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Briefly Describe Your Goals</label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="e.g. We want to rank for commercial keywords in Delhi and generate 100+ B2B leads monthly..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary modal-submit-btn">
                    Submit &amp; Chat on WhatsApp <span>→</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;