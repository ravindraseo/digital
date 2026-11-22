import type { IconName } from "@/lib/types";

const paths: Record<IconName, React.ReactNode> = {
  search: (<><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>),
  pin: (<><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>),
  store: (<><path d="M4 9h16l-1.5-5h-13L4 9Z" /><path d="M5 9v11h14V9" /><path d="M10 20v-6h4v6" /></>),
  megaphone: (<><path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1Z" /><path d="M17 8a5 5 0 0 1 0 8" /></>),
  meta: (<path d="M3 15c0-4 2-8 4.5-8 3.5 0 5.5 10 9 10C19 17 21 15 21 12s-1.5-5-3.5-5C14 7 10 17 6.5 17 4.5 17 3 16 3 15Z" />),
  google: (<><path d="M20 12a8 8 0 1 1-2.4-5.7" /><path d="M20 12h-8" /></>),
  whatsapp: (<><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20Z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2L9 9.5Z" /></>),
  social: (<><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6" /></>),
  code: (<><path d="m8 8-4 4 4 4M16 8l4 4-4 4" /><path d="m14 5-4 14" /></>),
  wordpress: (<><circle cx="12" cy="12" r="9" /><path d="M5 9l4.5 11M9 7.5h4M11 7.5l4 11 3-9" /></>),
  bag: (<><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>),
  cart: (<><circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /><path d="M3 4h2l2.4 11h10.8L20 8H6.2" /></>),
  call: (<path d="M5 4h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.1 6.1l1.4-2.3L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />),
  phone: (<><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>),
  pen: (<><path d="M4 20l4-1L19 8l-3-3L5 16l-1 4Z" /><path d="m14 7 3 3" /></>),
  chart: (<><path d="M4 20V4M4 20h16" /><path d="m8 15 3-4 3 2 5-6" /></>),
  bolt: (<path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />),
  shield: (<><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>),
  users: (<><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 5a3 3 0 0 1 0 6M21 20a6 6 0 0 0-3.5-5.5" /></>),
  target: (<><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.8" /></>),
  spark: (<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />),
  ai: (<><rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 15l1.8-6h2.4L15 15M9.8 12.5h4.4" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></>),
  link: (<><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></>),
  video: (<><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3" /></>),
  star: (<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />),
  wrench: (<path d="M14.5 6.5a4 4 0 0 0 5 5L21 13l-8 8-2-2 1.5-1.5a4 4 0 0 0-5-5L3 17l-1-1 4.5-4.5a4 4 0 0 0 5-5L13 5l1.5 1.5Z" />),
  briefcase: (<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></>),
};

export function Icon({ name, size = 24, className }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
