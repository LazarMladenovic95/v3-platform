import type { Metadata } from "next";
import { PageCanvas } from "@/components/layout/PageCanvas";
import { VideoReviewsHubScreen } from "@/components/screens";
import { getAllInterestCategories } from "@/lib/data/interest-categories-dev";
import { applyRequestLocale } from "@/lib/i18n-request";
import { t } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  await applyRequestLocale();
  return {
    title: t("player.hub.title"),
    description: t("player.hub.description"),
  };
}

export default async function VideoReviewsHubPage() {
  await applyRequestLocale();
  const categories = getAllInterestCategories();

  return (
    <PageCanvas>
      <VideoReviewsHubScreen categories={categories} />
    </PageCanvas>
  );
}
