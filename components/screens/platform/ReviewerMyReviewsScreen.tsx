import { ReviewsOverviewStrip } from "@/components/blocks/video-reviews/ReviewsOverviewSections";
import { ReviewerCommunitySubmissionsSection } from "@/components/blocks/reviewer/ReviewerCommunitySubmissionsSection";
import { Heading } from "@/components/ui/atoms/Heading";
import { Text } from "@/components/ui/atoms/Text";
import { SectionHeader } from "@/components/ui/composites/SectionHeader";
import {
  getReviewerCampaignSubmissions,
  getReviewerSelfSubmittedReviews,
} from "@/lib/fixtures/reviewer-my-reviews";
import { t } from "@/lib/i18n";

export function ReviewerMyReviewsScreen() {
  const selfSubmitted = getReviewerSelfSubmittedReviews();
  const campaignSubmissions = getReviewerCampaignSubmissions();
  const emptyMessage = t("app.reviewerMyReviews.emptySection");

  const campaignMetaByReviewId = new Map(
    campaignSubmissions.map((entry) => [
      entry.review.publicReviewId,
      entry.campaignLabelKey,
    ]),
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

      <section
        aria-labelledby="reviewer-community-reviews-heading"
        className="text-left"
      >
        <SectionHeader
          headingId="reviewer-community-reviews-heading"
          title={t("app.reviewerMyReviews.community.title")}
          description={t("app.reviewerMyReviews.community.description")}
          actionLabel={t("app.reviewerMyReviews.community.cta")}
          actionHref="/reviewer/submit-review"
        />
        <ReviewerCommunitySubmissionsSection />
        <Heading as="h3" variant="title-bold" className="mt-5">
          {t("app.reviewerMyReviews.selfSubmitted.publishedTitle")}
        </Heading>
        <ReviewsOverviewStrip
          listLabel={t("app.reviewerMyReviews.selfSubmitted.listAriaLabel")}
          reviews={selfSubmitted}
          emptyMessage={emptyMessage}
        />
      </section>

      <section
        aria-labelledby="reviewer-campaign-reviews-heading"
        className="text-left"
      >
        <SectionHeader
          headingId="reviewer-campaign-reviews-heading"
          title={t("app.reviewerMyReviews.campaign.title")}
          description={t("app.reviewerMyReviews.campaign.description")}
          actionLabel={t("app.reviewerMyReviews.campaign.cta")}
          actionHref="/reviewer/campaigns"
        />
        <ReviewsOverviewStrip
          listLabel={t("app.reviewerMyReviews.campaign.listAriaLabel")}
          reviews={campaignSubmissions.map((entry) => entry.review)}
          emptyMessage={emptyMessage}
          renderItemMeta={(review) => {
            const labelKey = campaignMetaByReviewId.get(review.publicReviewId);
            return labelKey ? t(labelKey) : undefined;
          }}
        />
      </section>
    </div>
  );
}
