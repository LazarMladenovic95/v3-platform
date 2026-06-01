import Link from "next/link";
import { Heading } from "@/components/ui/atoms/Heading";
import { Text } from "@/components/ui/atoms/Text";
import { MainVideoCard, StarRating, VideoRatingThumbnailCard } from "@/components/ui";
import { primaryPinkClassName } from "@/components/ui/atoms/button/buttonClasses";
import {
  getRelatedReviews,
  type ReviewFixture,
} from "@/lib/fixtures/video-reviews";
import { getLocale, t } from "@/lib/i18n";
import { pickLocalized } from "@/lib/i18n-content";
import { cn } from "@/lib/utils";

function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <Text variant="body-small" className="font-semibold text-foreground-title">
        {label}
      </Text>
      <Text variant="body-small" className="mt-1">
        {value}
      </Text>
    </div>
  );
}

export type ReviewScreenProps = {
  review: ReviewFixture;
};

export function ReviewScreen({ review }: ReviewScreenProps) {
  const locale = getLocale();
  const related = getRelatedReviews(review);
  const videoTitle =
    pickLocalized(review.videoTitle, locale, "title") ??
    pickLocalized(review.pageTitle, locale, "title") ??
    review.productName;
  const summary = pickLocalized(review.summary, locale, "text");
  const transcriptTitle = review.transcript[locale]?.title ?? review.transcript.en?.title;
  const transcriptText = review.transcript[locale]?.text ?? review.transcript.en?.text;
  const buyLink = review.product?.buyLink;

  return (
    <div className="flex w-full flex-col items-center overflow-auto">
      <div className="flex w-full min-h-main-below-header items-center justify-center md:min-h-0 md:py-6">
        <MainVideoCard
          playbackId={review.playbackId}
          posterUrl={review.posterUrl}
          title={videoTitle}
          reviewerName={review.reviewerName}
          reviewerDisplayName={review.reviewerDisplayName}
          reviewerAvatarUrl={review.reviewerAvatarUrl}
          brandSlug={review.brandSlug}
          brandName={review.brandName}
          productName={review.productName}
          starRating={review.starRating}
        />
      </div>

      <div className="w-full px-6 pb-16 pt-7 md:max-w-lg md:px-0 md:pt-8">
        <Link
          href={`/video-reviews/brand/${review.brandSlug}`}
          className="text-body-small text-secondary underline-offset-4 hover:underline"
        >
          {t("player.review.backToBrand")}
        </Link>

        <Heading as="h1" variant="heading-2" className="mt-4">
          {videoTitle}
        </Heading>

        <div className="mt-7 w-full max-w-lg">
          {summary ? (
            <section className="mb-6">
              <Heading as="h2" variant="title-bold" className="mb-2">
                {t("player.review.reviewSummary")} {review.productName}
              </Heading>
              <Text variant="body-regular">{summary}</Text>
            </section>
          ) : null}

          {summary ? <hr className="mb-6 border-border" aria-hidden="true" /> : null}

          <section className="mb-6">
            <Heading as="h2" variant="title-bold" className="mb-4">
              {t("player.review.productDetails")}
            </Heading>
            <div className="grid grid-cols-2 gap-4">
              <DetailField label={t("player.review.brandName")} value={review.brandName} />
              <DetailField label={t("player.review.productName")} value={review.productName} />
              <DetailField
                label={t("player.review.gtinEan")}
                value={review.product?.gtinEan ?? t("player.review.notAvailable")}
              />
              <DetailField
                label={t("player.review.vendorProductNumber")}
                value={review.product?.vendorProductNumber ?? t("player.review.notAvailable")}
              />
            </div>
          </section>

          <hr className="mb-6 border-border" aria-hidden="true" />

          <section className="mb-6">
            <Heading as="h2" variant="title-bold" className="mb-2">
              {t("player.review.ratingLabel")}
            </Heading>
            <StarRating rating={review.starRating} />
          </section>

          <hr className="mb-6 border-border" aria-hidden="true" />

          {transcriptTitle && transcriptText ? (
            <section className="mb-6">
              <Heading as="h2" variant="title-bold" className="mb-2">
                {transcriptTitle}
              </Heading>
              <Text variant="body-regular">{transcriptText}</Text>
            </section>
          ) : null}

          {transcriptTitle && transcriptText ? (
            <hr className="mb-6 border-border" aria-hidden="true" />
          ) : null}

          {review.faqs.length > 0 ? (
            <section className="mb-6">
              <Heading as="h2" variant="title-bold" className="mb-4">
                {t("player.review.faqHeading")}
              </Heading>
              <div className="flex flex-col gap-4">
                {review.faqs.map((faq, index) => {
                  const entry = faq[locale] ?? faq.en;
                  if (!entry?.title || !entry?.text) return null;
                  return (
                    <div key={index}>
                      <Heading as="h3" variant="body-bold">
                        {entry.title}
                      </Heading>
                      <Text variant="body-regular" className="mt-2">
                        {entry.text}
                      </Text>
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null}

          {buyLink ? (
            <Link
              href={buyLink.startsWith("http") ? buyLink : `https://${buyLink}`}
              target="_blank"
              rel="noreferrer"
              className={cn(
                primaryPinkClassName("large"),
                "mt-4 inline-flex w-full justify-center no-underline sm:w-auto",
              )}
              aria-label={t("player.review.buyNowAriaLabel")}
            >
              {t("player.review.buyNow")}
            </Link>
          ) : null}
        </div>
      </div>

      {related.length >= 2 ? (
        <div className="w-full px-6 pb-16 md:max-w-content md:px-16 lg:px-20">
          <hr className="mb-8 border-border" aria-hidden="true" />
          <Heading as="h2" variant="heading-3" className="px-6 md:px-0">
            {t("player.review.moreVideosOn")} {review.productName}
          </Heading>
          <ul
            className="mt-5 flex gap-3 overflow-x-auto px-6 pb-2 md:gap-4 md:px-0"
            aria-label={t("player.review.moreVideosOn")}
          >
            {related.map((item) => (
              <li key={item.publicReviewId}>
                <VideoRatingThumbnailCard review={item} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
