import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageCanvas } from "@/components/layout/PageCanvas";
import { CategoryScreen } from "@/components/screens";
import {
  getCategoryBySlug,
  getCategorySlug,
} from "@/lib/data/interest-categories-dev";
import { getReviewsForCategoryEnglishSlug } from "@/lib/fixtures/video-reviews";
import { applyRequestLocale } from "@/lib/i18n-request";
import { t } from "@/lib/i18n";
import { pickLocalized } from "@/lib/i18n-content";

type CategoryPageProps = {
  params: Promise<{ categorySlug: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const locale = await applyRequestLocale();
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug, locale);
  if (!category) return { title: t("player.notFound.title") };

  return {
    title: pickLocalized(category.siteTitle, locale, "title") ?? getCategorySlug(category, locale),
    description: pickLocalized(category.metaDescription, locale, "desc"),
  };
}

export default async function CategoryProductPage({ params }: CategoryPageProps) {
  const locale = await applyRequestLocale();
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug, locale);
  if (!category) notFound();

  const reviews = getReviewsForCategoryEnglishSlug(category.slugs.en);

  return (
    <PageCanvas>
      <CategoryScreen category={category} reviews={reviews} />
    </PageCanvas>
  );
}
