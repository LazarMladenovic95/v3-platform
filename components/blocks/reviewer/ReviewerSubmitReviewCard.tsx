import { Heading } from "@/components/ui/atoms/Heading";
import { Text } from "@/components/ui/atoms/Text";
import { PrimaryPink } from "@/components/ui/atoms/button/PrimaryPink";
import { t } from "@/lib/i18n";

export function ReviewerSubmitReviewCard() {
  return (
    <section className="rounded-lg border border-border bg-surface-muted p-5 text-left">
      <Heading as="h2" variant="title-1">
        {t("app.reviewerOnboarding.submitReview.title")}
      </Heading>
      <Text variant="body-small-muted" className="mt-2">
        {t("app.reviewerDashboard.submitReview.body")}
      </Text>
      <PrimaryPink type="button" size="small" className="mt-4 inline-flex w-full justify-center sm:w-auto">
        {t("app.reviewerDashboard.submitReview.cta")}
      </PrimaryPink>
    </section>
  );
}
