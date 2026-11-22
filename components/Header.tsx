"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import type { MenuColumn } from "@/lib/services";

export type NavLink = { name: string; href: string };

type Props = {
  columns: MenuColumn[]; // Services mega-menu: SEO | Social | Performance | Web Development
  locations: NavLink[];
  waHref: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: string;
  mapsUrl: string;
};

const company: NavLink[] = [
  { name: "About us", href: "/about" },
  { name: "All services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy policy", href: "/privacy-policy" },
];

export function Header({ columns, locations, waHref, phone, phoneRaw, email, address, mapsUrl }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <a href={mapsUrl} target="_blank" rel="noopener" className="topbar-addr">
            <Icon name="pin" size={14} /> {address}
          </a>
          <span className="topbar-links">
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${phoneRaw}`}>
              <Icon name="call" size={14} /> {phone}
            </a>
          </span>
        </div>
      </div>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container header-inner">
          <Logo />

          <nav className="desktop-nav" aria-label="Main">
            <div className="nav-drop nav-drop--mega">
              <button type="button" className="nav-drop-trigger">
                Services <span aria-hidden="true">▾</span>
              </button>
              <div className="mega">
                <div className="mega-cols">
                  {columns.map((col) => (
                    <div key={col.href} className="mega-col">
                      <p className="mega-head">
                        <Icon name={col.icon} size={18} /> {col.title}
                      </p>
                      <ul>
                        {col.items.map((it) => (
                          <li key={it.href}>
                            <Link href={it.href} className="mega-link">
                              {it.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mega-foot">
                  <p>
                    <strong>Not sure where to start?</strong> We’ll audit your Google, Maps, social and AI-search visibility
                    for free.
                  </p>
                  <a href={waHref} target="_blank" rel="noopener" className="btn btn-primary btn-sm">
                    Get a free audit
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-drop">
              <button type="button" className="nav-drop-trigger">
                Locations <span aria-hidden="true">▾</span>
              </button>
              <div className="drop">
                {locations.map((l) => (
                  <Link key={l.href} href={l.href}>
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="nav-drop">
              <button type="button" className="nav-drop-trigger">
                Company <span aria-hidden="true">▾</span>
              </button>
              <div className="drop">
                {company.map((l) => (
                  <Link key={l.href} href={l.href}>
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="header-cta">
            <a href={`tel:${phoneRaw}`} className="header-phone-text">
              <Icon name="call" size={16} /> {phone}
            </a>
            <a href={waHref} className="btn btn-primary btn-sm" target="_blank" rel="noopener">
              Free consultation
            </a>
            <button
              className="burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`} hidden={!open}>
          <nav aria-label="Mobile">
            <Link href="/" onClick={close}>Home</Link>
            {columns.map((col) => (
              <details key={col.href}>
                <summary>
                  <Icon name={col.icon} size={18} /> {col.title}
                </summary>
                {col.items.map((it) => (
                  <Link key={it.href} href={it.href} onClick={close}>
                    {it.name}
                  </Link>
                ))}
              </details>
            ))}
            <details>
              <summary>
                <Icon name="pin" size={18} /> Locations
              </summary>
              {locations.map((l) => (
                <Link key={l.href} href={l.href} onClick={close}>
                  {l.name}
                </Link>
              ))}
            </details>
            <details>
              <summary>
                <Icon name="briefcase" size={18} /> Company
              </summary>
              {company.map((l) => (
                <Link key={l.href} href={l.href} onClick={close}>
                  {l.name}
                </Link>
              ))}
            </details>
            <Link href="/blog" onClick={close}>Blog</Link>
            <Link href="/contact" onClick={close}>Contact</Link>
            <a href={`tel:${phoneRaw}`} className="btn btn-ghost">
              Call {phone}
            </a>
            <a href={waHref} className="btn btn-primary" target="_blank" rel="noopener">
              Free consultation on WhatsApp
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
