"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./Icon";
import type { IconName } from "@/lib/types";

export type TabData = {
  name: string;
  href: string;
  icon: IconName;
  lead: string;
  items: { name: string; href: string; icon: IconName; text: string }[];
};

export function ServiceTabs({ tabs }: { tabs: TabData[] }) {
  const [active, setActive] = useState(0);
  const t = tabs[active];
  return (
    <div className="tabs">
      <div className="tab-list" role="tablist" aria-label="Service categories">
        {tabs.map((tab, i) => (
          <button
            key={tab.href}
            role="tab"
            id={`tab-${i}`}
            aria-selected={i === active}
            aria-controls={`panel-${i}`}
            className="tab"
            onClick={() => setActive(i)}
          >
            <Icon name={tab.icon} size={18} /> {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-panel" role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`}>
        <div className="tab-intro">
          <p>{t.lead}</p>
          <Link href={t.href} className="btn btn-ghost btn-sm">
            Explore {t.name} →
          </Link>
        </div>
        <div className="tab-grid">
          {t.items.map((s) => (
            <Link key={s.href} href={s.href} className="tab-card">
              <span className="service-icon">
                <Icon name={s.icon} size={20} />
              </span>
              <span>
                <strong>{s.name}</strong>
                <small>{s.text}</small>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
