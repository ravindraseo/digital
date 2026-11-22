import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { allPages, getCategory, parentOf } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

/** Every service and location page lives at /<primary-keyword>. */
export function generateStaticParams() {
  return allPages().map((p) => ({ slug: p.href.slice(1) }));
}

const find = (slug: string) => allPages().find((p) => p.href === `/${slug}`);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = find(slug);
  if (!p) return {};
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: { canonical: p.href },
    openGraph: { title: p.metaTitle, description: p.metaDescription, url: p.href, type: "article" },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = find(slug);
  if (!p) notFound();
  const hub = getCategory(p.categorySlug);
  const isHub = hub?.href === p.href;
  const parent = parentOf(p.href);
  const crumbs = [
    { name: "Home", href: "/" },
    ...(parent ? [{ name: parent.menuName, href: parent.href }] : isHub ? [{ name: "Services", href: "/services" }] : []),
    { name: p.name, href: p.href },
  ];
  return <ServicePage content={p} href={p.href} crumbs={crumbs} hub={isHub ? hub : undefined} />;
}
