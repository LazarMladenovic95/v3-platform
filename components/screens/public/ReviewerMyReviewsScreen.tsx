import { Icon } from "@/components/ui/atoms/Icon";
import { Heading } from "@/components/ui/atoms/Heading";
import { Text } from "@/components/ui/atoms/Text";
import { VideoRatingThumbnailCard } from "@/components/ui";
import {
  getReviewerCampaignSubmissions,
  getReviewerSelfSubmittedReviews,
} from "@/lib/fixtures/reviewer-my-reviews";
import type { ReviewFixture } from "@/lib/fixtures/video-reviews";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function ReviewStrip({
  reviews,
  listLabel,
  renderItemMeta,
}: {
  reviews: ReviewFixture[];
  listLabel: string;
  renderItemMeta?: (review: ReviewFixture) => string | undefined;
}) {
  if (reviews.length === 0) {
    return (
      <Text variant="body-small-muted" className="mt-4">
        {t("app.reviewerMyReviews.emptySection")}
      </Text>
    );
  }

  return (
    <ul
      className="mt-5 flex gap-3 overflow-x-auto pb-2 md:gap-4"
      aria-label={listLabel}
    >
      {reviews.map((review) => {
        const meta = renderItemMeta?.(review);

        return (
          <li key={review.publicReviewId} className="flex shrink-0 flex-col gap-2">
            <VideoRatingThumbnailCard review={review} />
            {meta ? (
              <Text variant="body-small-muted" className="max-w-40 text-center">
                {meta}
              </Text>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function ReviewsSection({
  icon,
  title,
  description,
  listLabel,
  reviews,
  renderItemMeta,
}: {
  icon: "play-square" | "megaphone";
  title: string;
  description: string;
  listLabel: string;
  reviews: ReviewFixture[];
  renderItemMeta?: (review: ReviewFixture) => string | undefined;
}) {
  return (
    <section className="text-left">
      <div className="flex gap-3">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-secondary",
          )}
          aria-hidden
        >
          <Icon name={icon} size="lg" />
        </div>
        <div className="min-w-0 flex-1">
          <Heading as="h2" variant="heading-3">
            {title}
          </Heading>
          <Text variant="body-small-muted" className="mt-1">
            {description}
          </Text>
        </div>
      </div>
      <ReviewStrip reviews={reviews} listLabel={listLabel} renderItemMeta={renderItemMeta} />
    </section>
  );
}

export function ReviewerMyReviewsScreen() {
  const selfSubmitted = getReviewerSelfSubmittedReviews();
  const campaignSubmissions = getReviewerCampaignSubmissions();

  const campaignMetaByReviewId = new Map(
    campaignSubmissions.map((entry) => [entry.review.publicReviewId, entry.campaignLabelKey]),
  );

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="text-center md:text-left">
        <Heading as="h1" variant="heading-2">
          {t("app.reviewerMyReviews.title")}
        </Heading>
        <Text variant="body-regular" className="mt-3 max-w-2xl">
          {t("app.reviewerMyReviews.description")}
        </Text>
      </div>

      <ReviewsSection
        icon="play-square"
        title={t("app.reviewerMyReviews.selfSubmitted.title")}
        description={t("app.reviewerMyReviews.selfSubmitted.description")}
        listLabel={t("app.reviewerMyReviews.selfSubmitted.listAriaLabel")}
        reviews={selfSubmitted}
      />

      <ReviewsSection
        icon="megaphone"
        title={t("app.reviewerMyReviews.campaign.title")}
        description={t("app.reviewerMyReviews.campaign.description")}
        listLabel={t("app.reviewerMyReviews.campaign.listAriaLabel")}
        reviews={campaignSubmissions.map((entry) => entry.review)}
        renderItemMeta={(review) => {
          const labelKey = campaignMetaByReviewId.get(review.publicReviewId);
          return labelKey ? t(labelKey) : undefined;
        }}
      />
    </div>
  );
}
