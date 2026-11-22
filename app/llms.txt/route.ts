import { categories, locationPages } from "@/lib/services";
import { absolute, site } from "@/lib/site";

/** llms.txt: a plain-text guide to the site for AI assistants and crawlers. */
export function GET() {
  const a = site.address;
  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.name} is a digital marketing agency in ${a.street}, ${a.city}, ${a.region} ${a.postalCode}, India. It provides SEO, local SEO, Google Business Profile (GMB) management, AI-search optimisation (GEO/AEO), Google and Meta ads, social media, WhatsApp marketing, website and app development and logo design for businesses in Delhi, Noida, NCR and across India, including Ahmedabad and Gujarat.`,
    "",
    `Contact: ${site.phone} · ${site.email} · Founder: ${site.founder}`,
    "",
  ];
  for (const c of categories) {
    lines.push(`## ${c.menuName}`, "");
    lines.push(`- [${c.name}](${absolute(c.href)}): ${c.quickAnswer.a}`);
    for (const s of c.children) lines.push(`- [${s.name}](${absolute(s.href)}): ${s.cardText}`);
    lines.push("");
  }
  lines.push("## Locations", "");
  for (const l of locationPages) lines.push(`- [${l.name}](${absolute(l.href)}): ${l.cardText}`);
  lines.push("", "## Company", "", `- [About](${absolute("/about")})`, `- [Contact](${absolute("/contact")})`, "");
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
