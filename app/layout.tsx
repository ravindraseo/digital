import type { Metadata, Viewport } from "next";
import { Caveat, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/Sections";
import { FloatingActions } from "@/components/FloatingActions";
import { locationPages, menuColumns } from "@/lib/services";
import { organizationSchema } from "@/lib/schema";
import { site, waLink } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-head",
  display: "swap",
});
const caveat = Caveat({ subsets: ["latin"], weight: ["600"], variable: "--font-hand", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Digital Marketing Agency in Delhi | Digital Ravindra",
    template: "%s | Digital Ravindra",
  },
  description:
    "Digital Ravindra helps Delhi NCR businesses grow with SEO, local SEO, Google Business Profile, Meta & Google Ads, WhatsApp marketing, websites and apps.",
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, "max-image-preview": "large" } as Metadata["robots"],
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#0a192f",
  width: "device-width",
  initialScale: 1,
};

const columns = menuColumns();
const navLocations = [
  { name: "SEO Company in Delhi", href: "/seo-company-in-delhi" },
  ...locationPages.map((l) => ({ name: l.name, href: l.href })),
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${poppins.variable} ${caveat.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={organizationSchema()} />
        <Header
          columns={columns}
          locations={navLocations}
          waHref={waLink("Hi, I'd like a free audit of my business.")}
          phone={site.phone}
          phoneRaw={site.phoneRaw}
          email={site.email}
          address={`${site.address.street}, ${site.address.city} ${site.address.postalCode}`}
          mapsUrl={site.mapsUrl}
        />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions phoneRaw={site.phoneRaw} waHref={waLink()} />
      </body>
    </html>
  );
}
