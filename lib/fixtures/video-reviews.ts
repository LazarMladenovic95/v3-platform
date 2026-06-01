import data from "@/lib/fixtures/video-reviews-data.json";
import type { LocalizedStringMap } from "@/lib/i18n-content";

export type BrandFixture = {
  slug: string;
  name: string;
  logoSrc: string;
  websiteUrl?: string;
  rating: number;
  reviewsCount: number;
  siteTitle: LocalizedStringMap;
  metaDescription: LocalizedStringMap;
  bodyText?: LocalizedStringMap;
  footerText?: LocalizedStringMap;
};

export type ReviewProductFixture = {
  gtinEan?: string;
  vendorProductNumber?: string;
  buyLink?: string;
};

export type ReviewTranscriptMap = Record<
  string,
  { title?: string; text?: string } | undefined
>;

export type ReviewFixture = {
  publicReviewId: string;
  categorySlug: string;
  brandSlug: string;
  productSlug: string;
  productName: string;
  brandName: string;
  playbackId: string;
  videoUrl: string;
  posterUrl: string;
  reviewerAvatarUrl: string;
  starRating: number;
  resolution: string;
  published: boolean;
  reviewerName: string;
  reviewerDisplayName?: string;
  videoTitle: LocalizedStringMap;
  pageTitle: LocalizedStringMap;
  metaDescription: LocalizedStringMap;
  summary: LocalizedStringMap;
  transcript: ReviewTranscriptMap;
  faqs: Array<Record<string, { title?: string; text?: string } | undefined>>;
  product?: ReviewProductFixture;
};

const brands = data.brands as BrandFixture[];
const reviews = data.reviews as ReviewFixture[];

export function getAllBrands(): BrandFixture[] {
  return brands;
}

export function getBrandBySlug(brandSlug: string): BrandFixture | undefined {
  return brands.find((brand) => brand.slug === brandSlug);
}

export function getReviewsForBrand(brandSlug: string): ReviewFixture[] {
  return reviews.filter((review) => review.brandSlug === brandSlug);
}

export function getRelatedReviews(review: ReviewFixture): ReviewFixture[] {
  return reviews.filter(
    (candidate) =>
      candidate.publicReviewId !== review.publicReviewId &&
      candidate.brandSlug === review.brandSlug &&
      candidate.productSlug === review.productSlug,
  );
}

export function getReviewByPath(params: {
  categorySlug: string;
  brandSlug: string;
  productSlug: string;
  reviewId: string;
}): ReviewFixture | undefined {
  return reviews.find(
    (review) =>
      review.publicReviewId === params.reviewId &&
      review.categorySlug === params.categorySlug &&
      review.brandSlug === params.brandSlug &&
      review.productSlug === params.productSlug,
  );
}

export function getReviewByPublicId(publicReviewId: string): ReviewFixture | undefined {
  return reviews.find((review) => review.publicReviewId === publicReviewId);
}

export function getReviewPlayerPath(review: ReviewFixture): string {
  return `/video-reviews/${review.categorySlug}/${review.brandSlug}/${review.productSlug}/${review.publicReviewId}`;
}

export const SAMPLE_REVIEW_ID = "100000001";

export function getSampleReview(): ReviewFixture {
  const sample = reviews.find((review) => review.publicReviewId === SAMPLE_REVIEW_ID);
  if (!sample) {
    throw new Error("Sample review fixture missing");
  }
  return sample;
}

export function getMuxMp4Url(playbackId: string): string {
  return `https://stream.mux.com/${playbackId}/high.mp4`;
}

export function getMuxPosterUrl(playbackId: string): string {
  return `https://image.mux.com/${playbackId}/thumbnail.png?width=720&height=1280&fit_mode=smartcrop`;
}
