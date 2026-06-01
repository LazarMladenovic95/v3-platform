import { Icon } from "@/components/ui/atoms/Icon";
import { Heading } from "@/components/ui/atoms/Heading";
import { Text } from "@/components/ui/atoms/Text";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/composites/Card";
import { t } from "@/lib/i18n";

function OnboardingOptionCard({
  icon,
  title,
  description,
  details,
}: {
  icon: "play-square" | "megaphone";
  title: string;
  description: string;
  details?: string[];
}) {
  return (
    <Card className="text-left">
      <div className="flex gap-4">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-secondary"
          aria-hidden
        >
          <Icon name={icon} size="lg" />
        </div>
        <div className="min-w-0 flex-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="mt-1">{description}</CardDescription>
          {details && details.length > 0 ? (
            <CardContent className="mt-3 space-y-2">
              {details.map((line) => (
                <Text key={line} variant="body-regular" className="text-foreground-title-subtle">
                  {line}
                </Text>
              ))}
            </CardContent>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

export function ReviewerOnboardingScreen() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 text-center">
      <div className="flex flex-col gap-3">
        <Heading as="h1" variant="heading-2">
          {t("app.reviewerOnboarding.title")}
        </Heading>
        <Text variant="body-regular">{t("app.reviewerOnboarding.description")}</Text>
      </div>

      <div className="flex flex-col gap-4 text-left">
        <OnboardingOptionCard
          icon="play-square"
          title={t("app.reviewerOnboarding.submitReview.title")}
          description={t("app.reviewerOnboarding.submitReview.description")}
          details={[
            t("app.reviewerOnboarding.submitReview.baseReward"),
            t("app.reviewerOnboarding.submitReview.viewPerformance"),
          ]}
        />
        <OnboardingOptionCard
          icon="megaphone"
          title={t("app.reviewerOnboarding.campaign.title")}
          description={t("app.reviewerOnboarding.campaign.description")}
        />
      </div>
    </div>
  );
}
