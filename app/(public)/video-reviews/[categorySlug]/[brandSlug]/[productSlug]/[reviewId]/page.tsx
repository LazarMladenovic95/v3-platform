import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageCanvas } from "@/components/layout/PageCanvas";
import { ReviewScreen } from "@/components/screens";
import { getReviewByPath } from "@/lib/fixtures/video-reviews";
import { getLocale, t } from "@/lib/i18n";
import { pickLocalized } from "@/lib/i18n-content";

type ReviewPageProps = {
  params: Promise<{
    categorySlug: string;
    brandSlug: string;
    productSlug: string;
    reviewId: string;
  }>;
};

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const resolved = await params;
  const review = getReviewByPath(resolved);
  if (!review) return { title: t("player.notFound.title") };

  const locale = getLocale();
  return {
    title: pickLocalized(review.pageTitle, locale, "title") ?? review.productName,
    description: pickLocalized(review.metaDescription, locale, "desc"),
  };
}

export default async function ReviewPlayerPage({ params }: ReviewPageProps) {
  const resolved = await params;
  const review = getReviewByPath(resolved);
  if (!review) notFound();

  return (
    <PageCanvas>
      <ReviewScreen review={review} />
    </PageCanvas>
  );
}
