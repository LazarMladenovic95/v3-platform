import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageCanvas } from "@/components/layout/PageCanvas";
import { BrandScreen } from "@/components/screens";
import { getBrandBySlug, getReviewsForBrand } from "@/lib/fixtures/video-reviews";
import { getLocale, t } from "@/lib/i18n";
import { pickLocalized } from "@/lib/i18n-content";

type BrandPageProps = {
  params: Promise<{ brandSlug: string }>;
};

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  if (!brand) return { title: t("player.notFound.title") };

  const locale = getLocale();
  return {
    title: pickLocalized(brand.siteTitle, locale, "title") ?? brand.name,
    description: pickLocalized(brand.metaDescription, locale, "desc"),
  };
}

export default async function BrandVideoReviewsPage({ params }: BrandPageProps) {
  const { brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  if (!brand) notFound();

  const reviews = getReviewsForBrand(brandSlug);

  return (
    <PageCanvas>
      <BrandScreen brand={brand} reviews={reviews} />
    </PageCanvas>
  );
}
