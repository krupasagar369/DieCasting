import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import { IndustryPage } from "@/components/industries/IndustryPage";

type Params = { slug: string };

// Only the industries that exist in the source project are routable; everything else -> 404.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const data = industries.find((i) => i.slug === slug);
  return { title: data?.pageTitle ?? "Not found" };
}

export default async function IndustryRoute({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const data = industries.find((i) => i.slug === slug);
  if (!data) notFound();
  return <IndustryPage data={data} />;
}
