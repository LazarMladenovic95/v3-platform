import type { Metadata } from "next";
import { ReviewerOnboardingScreen } from "@/components/screens";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: t("app.reviewerOnboarding.metaTitle"),
  description: t("app.reviewerOnboarding.metaDescription"),
};

export default function ReviewerOnboardingPage() {
  return <ReviewerOnboardingScreen />;
}
