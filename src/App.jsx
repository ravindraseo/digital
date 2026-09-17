import { useState } from "react";
import "./App.css";

const PHONE = "91828202150";
const DISPLAY_PHONE = "+91 82828 02150";

function Logo() {
  return (
    <a href="#home" className="logo" aria-label="Digital Ravindra">
      <div className="logo-mark">
        <span>D</span>
        <span>R</span>
      </div>

      <div className="logo-text">
        <strong>
          Digital <b>Ravindra</b>
        </strong>
        <small>Your Growth, Our Digital Strategy</small>
      </div>
    </a>
  );
}
const services = [
  {
    icon: "⌕",
    title: "Search Engine Optimization",
    short: "SEO",
    description:
      "Rank higher on Google and attract qualified organic traffic.",
    color: "blue",
  },

  {
    icon: "◎",
    title: "Social Media Marketing",
    short: "Social Media",
    description:
      "Grow your brand on Instagram, Facebook and other platforms.",
    color: "pink",
  },

  {
    icon: "↗",
    title: "Google Ads & PPC",
    short: "Google Ads",
    description:
      "Generate targeted traffic, leads and sales with paid campaigns.",
    color: "green",
  },

  {
    icon: "✎",
    title: "Content Marketing",
    short: "Content",
    description:
      "Create content that attracts customers and builds trust.",
    color: "orange",
  },

  {
    icon: "✉",
    title: "Email Marketing",
    short: "Email",
    description:
      "Convert subscribers into loyal and repeat customers.",
    color: "purple",
  },

  {
    icon: "▣",
    title: "Website Development",
    short: "Web Development",
    description:
      "Modern, fast, responsive and SEO-friendly websites.",
    color: "cyan",
  },

  {
    icon: "◉",
    title: "WhatsApp Ads",
    short: "WhatsApp Ads",
    description:
      "Generate direct leads through highly targeted WhatsApp advertising campaigns.",
    color: "green",
  },

  {
    icon: "⚙",
    title: "WhatsApp Automation",
    short: "WhatsApp Automation",
    description:
      "Automate customer replies, lead follow-ups and support using WhatsApp.",
    color: "blue",
  },

  {
    icon: "▤",
    title: "Google AdSense Approval",
    short: "AdSense Approval",
    description:
      "Get your website ready for Google AdSense with proper content and technical setup.",
    color: "orange",
  },
];

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Business Owner",
    avatar: "A",
    text:
      "Digital Ravindra helped us increase our website traffic and leads. Highly recommended!",
  },
  {
    name: "Priya Verma",
    role: "Startup Founder",
    avatar: "P",
    text:
      "Professional team, great communication and excellent results. Our social media growth has been amazing!",
  },
  {
    name: "Rahul Mehta",
    role: "E-commerce Seller",
    avatar: "R",
    text:
      "They really understand business needs and deliver results. Excellent digital marketing service.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="website">

      {/* ================= TOP BAR ================= */}

      <div className="topbar">
        <div className="container topbar-inner">

          <div className="topbar-left">
            <span>📍 Based in India</span>
            <span>✉ info@digitalravindra.com</span>
          </div>

          <div className="topbar-right">
            <a href="#contact">f</a>
            <a href="#contact">◎</a>
            <a href="#contact">in</a>
            <a href="#contact">▶</a>

            <a
              href={`https://wa.me/${PHONE}`}
              target="_blank"
              rel="noreferrer"
              className="top-whatsapp"
            >
              🟢 WhatsApp: {DISPLAY_PHONE}
            </a>
          </div>

        </div>
      </div>

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="container nav-inner">

          <Logo />

          <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <a href="#" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
            <a href="#testimonials" onClick={closeMenu}>
              Testimonials
            </a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a href="#contact" className="consultation-btn">
            Get Free Consultation
          </a>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>

      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-bg-circle circle-one"></div>
        <div className="hero-bg-circle circle-two"></div>

        <div className="container hero-grid">

          <div className="hero-content">

            <div className="hero-label">
              DIGITAL MARKETING EXPERT
            </div>

            <h1>
              Grow Your Business
              <br />
              Online with
              <br />
              <span>Digital Ravindra</span>
            </h1>

            <p>
              We help businesses get more traffic, more leads and higher
              sales through result-driven digital marketing strategies.
            </p>

            <div className="hero-actions">

              <a href="#contact" className="orange-btn">
                Get Started Now →
              </a>

              <a
                href={`https://wa.me/${PHONE}`}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-outline"
              >
                🟢 Chat on WhatsApp
              </a>

            </div>

            <div className="hero-benefits">

              <div className="benefit">
                <div className="benefit-icon blue-icon">
                  ▥
                </div>
                <div>
                  <strong>More</strong>
                  <span>Visibility</span>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-icon">
                  ♟
                </div>
                <div>
                  <strong>Quality</strong>
                  <span>Leads</span>
                </div>
              </div>

              <div className="benefit">
                <div className="benefit-icon">
                  🚀
                </div>
                <div>
                  <strong>Higher</strong>
                  <span>Sales</span>
                </div>
              </div>

            </div>

          </div>

          {/* HERO VISUAL */}

          <div className="hero-visual">

            <div className="marketing-screen">

              <div className="screen-header">
                <span>Digital Marketing</span>
                <span className="screen-dot"></span>
              </div>

              <div className="screen-content">

                <h3>Grow Your Business</h3>

                <div className="growth-number">
                  +186%
                </div>

                <small>Online Growth</small>

                <div className="growth-chart">
                  <div style={{ height: "25%" }}></div>
                  <div style={{ height: "40%" }}></div>
                  <div style={{ height: "55%" }}></div>
                  <div style={{ height: "72%" }}></div>
                  <div style={{ height: "88%" }}></div>
                </div>

              </div>

            </div>

            <div className="floating-stat stat-one">
              <div className="stat-icon">🎯</div>
              <div>
                <strong>2,847</strong>
                <small>New Leads</small>
              </div>
              <b>+24%</b>
            </div>

            <div className="floating-stat stat-two">
              <div className="stat-icon orange-stat">
                ₹
              </div>
              <div>
                <strong>4.8X</strong>
                <small>Average ROI</small>
              </div>
            </div>

            <div className="hero-logo-circle">
              <span>DR</span>
            </div>

          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="stats">

        <div className="container stats-grid">

          <div>
            <strong>100+</strong>
            <span>Happy Clients</span>
          </div>

          <div>
            <strong>250+</strong>
            <span>Projects Completed</span>
          </div>

          <div>
            <strong>3+</strong>
            <span>Years Experience</span>
          </div>

          <div>
            <strong>95%</strong>
            <span>Client Retention</span>
          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section id="services" className="services section">

        <div className="container">

          <div className="section-heading">

            <span>OUR SERVICES</span>

            <h2>
              Our Digital Marketing
              <strong> Services</strong>
            </h2>

            <p>
              Everything you need to grow your brand online, under one roof.
            </p>

          </div>

          <div className="services-grid">

            {services.map((service, index) => (

              <div className="service-card" key={index}>

                <div className={`service-icon ${service.color}`}>
                  {service.icon}
                </div>

                <div className="service-number">
                  0{index + 1}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#contact">
                  Learn More →
                </a>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="about section">

        <div className="container about-grid">

          <div className="about-content">

            <span className="section-label">
              ABOUT DIGITAL RAVINDRA
            </span>

            <h2>
              Your Trusted
              <br />
              <span>Digital Growth Partner</span>
            </h2>

            <p>
              At Digital Ravindra, we help businesses build a powerful
              online presence and generate measurable business results.
            </p>

            <p>
              Our approach combines digital strategy, creativity, technology
              and data to create marketing campaigns that actually grow
              your business.
            </p>

            <div className="about-features">

              <div>
                <div className="about-feature-icon orange">
                  ◎
                </div>
                <div>
                  <strong>Result-Oriented</strong>
                  <span>Strategies</span>
                </div>
              </div>

              <div>
                <div className="about-feature-icon blue">
                  ♟
                </div>
                <div>
                  <strong>Experienced</strong>
                  <span>Team</span>
                </div>
              </div>

              <div>
                <div className="about-feature-icon green">
                  ♥
                </div>
                <div>
                  <strong>Client</strong>
                  <span>Satisfaction</span>
                </div>
              </div>

            </div>

            <a href="#contact" className="orange-btn">
              Know More About Us →
            </a>

          </div>

          <div className="about-visual">

            <div className="about-circle">

              <div className="about-dr">
                <span>D</span>
                <span>R</span>
              </div>

              <h3>
                Digital <b>Ravindra</b>
              </h3>

              <p>
                Your Growth, Our Digital Strategy
              </p>

            </div>

            <div className="about-quote">
              <strong>“</strong>
              <p>
                Helping Businesses Go
                <br />
                Digital & Global
              </p>
            </div>

          </div>

          <div className="about-side-stats">

            <div>
              <strong>100+</strong>
              <span>Happy Clients</span>
            </div>

            <div>
              <strong>250+</strong>
              <span>Projects Completed</span>
            </div>

            <div>
              <strong>3+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>95%</strong>
              <span>Retention Rate</span>
            </div>

          </div>

        </div>

      </section>

      {/* ================= PROCESS ================= */}

      <section className="process section">

        <div className="container">

          <div className="section-heading">

            <span>HOW WE WORK</span>

            <h2>
              Simple Process.
              <strong> Powerful Results.</strong>
            </h2>

          </div>

          <div className="process-grid">

            <div className="process-card">
              <div>01</div>
              <h3>Discover</h3>
              <p>
                We understand your business, market, customers and goals.
              </p>
            </div>

            <div className="process-card">
              <div>02</div>
              <h3>Strategize</h3>
              <p>
                We build a customized digital marketing strategy.
              </p>
            </div>

            <div className="process-card">
              <div>03</div>
              <h3>Execute</h3>
              <p>
                Our team launches and manages your campaigns.
              </p>
            </div>

            <div className="process-card">
              <div>04</div>
              <h3>Optimize</h3>
              <p>
                We analyze performance and continuously improve results.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}

      <section id="portfolio" className="portfolio section">

        <div className="container">

          <div className="section-heading">

            <span>OUR WORK</span>

            <h2>
              Results That
              <strong> Speak</strong>
            </h2>

            <p>
              Digital strategies designed around real business objectives.
            </p>

          </div>

          <div className="portfolio-grid">

            <div className="portfolio-card portfolio-blue">

              <div className="portfolio-pattern"></div>

              <div>
                <span>E-COMMERCE</span>
                <h3>Online Store Growth</h3>
                <strong>+186% Organic Traffic</strong>
              </div>

            </div>

            <div className="portfolio-card portfolio-orange">

              <div className="portfolio-pattern"></div>

              <div>
                <span>LOCAL BUSINESS</span>
                <h3>Lead Generation</h3>
                <strong>+240% Qualified Leads</strong>
              </div>

            </div>

            <div className="portfolio-card portfolio-green">

              <div className="portfolio-pattern"></div>

              <div>
                <span>PAID ADVERTISING</span>
                <h3>Google Ads Campaign</h3>
                <strong>4.8X ROAS</strong>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section
        id="testimonials"
        className="testimonials section"
      >

        <div className="container">

          <div className="section-heading">

            <span>CLIENT LOVE</span>

            <h2>
              What Our Clients
              <strong> Say</strong>
            </h2>

            <p>
              Real stories. Real results.
            </p>

          </div>

          <div className="testimonial-grid">

            {testimonials.map((item, index) => (

              <div className="testimonial-card" key={index}>

                <div className="testimonial-header">

                  <div className="testimonial-avatar">
                    {item.avatar}
                  </div>

                  <div className="stars">
                    ★★★★★
                  </div>

                </div>

                <p>
                  "{item.text}"
                </p>

                <div className="testimonial-user">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}

      <section id="contact" className="contact-cta">

        <div className="container contact-inner">

          <div className="contact-icon">
            ➤
          </div>

          <div className="contact-text">

            <h2>
              Ready to Grow Your Business Online?
            </h2>

            <p>
              Get a free consultation and let's create your success story.
            </p>

          </div>

          <div className="contact-buttons">

            <a
              href={`tel:+${PHONE}`}
              className="call-button"
            >
              📞 Call: {DISPLAY_PHONE}
            </a>

            <a
              href={`https://wa.me/${PHONE}`}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-button"
            >
              🟢 WhatsApp
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container footer-grid">

          <div className="footer-brand">

            <Logo />

            <p>
              We help businesses grow with innovative digital marketing
              strategies, creative solutions and measurable results.
            </p>

            <div className="footer-socials">
              <a href="#contact">f</a>
              <a href="#contact">◎</a>
              <a href="#contact">in</a>
              <a href="#contact">▶</a>
            </div>

          </div>

          <div className="footer-column">

            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>

          </div>

          <div className="footer-column">

            <h3>Our Services</h3>

            <a href="#services">SEO</a>
            <a href="#services">Social Media Marketing</a>
            <a href="#services">Google Ads</a>
            <a href="#services">Content Marketing</a>
            <a href="#services">Website Development</a>

          </div>

          <div className="footer-column contact-column">

            <h3>Contact Us</h3>

            <a href={`tel:+${PHONE}`}>
              📞 {DISPLAY_PHONE}
            </a>

            <a
              href={`https://wa.me/${PHONE}`}
              target="_blank"
              rel="noreferrer"
            >
              🟢 WhatsApp: {DISPLAY_PHONE}
            </a>

            <a href="mailto:info@digitalravindra.com">
              ✉ info@digitalravindra.com
            </a>

            <span>
              📍 India
            </span>

          </div>

        </div>

        <div className="footer-bottom">

          <div className="container footer-bottom-inner">

            <p>
              © 2026 Digital Ravindra. All Rights Reserved.
            </p>

            <div>
              <a href="#home">Privacy Policy</a>
              <span>|</span>
              <a href="#home">Terms & Conditions</a>
              <span>|</span>
              <a href="#home">Sitemap</a>
            </div>

          </div>

        </div>

      </footer>

      {/* ================= FLOATING WHATSAPP ================= */}

      <a
        href={`https://wa.me/${PHONE}`}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <span>◉</span>
      </a>

    </div>
  );
}

export default App;