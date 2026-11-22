"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

/**
 * Right-side floating stack: Call, WhatsApp, and a scroll toggle.
 * The scroll button goes to the top when you are down the page,
 * and to the bottom when you are at the top (arrow flips to match).
 */
export function FloatingActions({ phoneRaw, waHref }: { phoneRaw: string; waHref: string }) {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleScroll = () => {
    const top = atTop ? document.documentElement.scrollHeight : 0;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="fab-stack">
      <a href={`tel:${phoneRaw}`} className="fab fab--call" aria-label="Call us">
        <Icon name="call" size={20} />
      </a>
      <a href={waHref} className="fab fab--wa" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
        <Icon name="whatsapp" size={22} />
      </a>
      <button
        type="button"
        className="fab fab--scroll"
        onClick={toggleScroll}
        aria-label={atTop ? "Scroll to bottom" : "Scroll to top"}
      >
        <svg
          viewBox="0 0 24 24"
          width={20}
          height={20}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{ transform: atTop ? "rotate(180deg)" : "none", transition: "transform .25s" }}
        >
          <path d="m6 15 6-6 6 6" />
        </svg>
      </button>
    </div>
  );
}
