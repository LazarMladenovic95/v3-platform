import type { Metadata } from "next";
import { PageCanvas } from "@/components/layout/PageCanvas";
import { VideoReviewsHubScreen } from "@/components/screens";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: t("player.hub.title"),
  description: t("player.hub.description"),
};

export default function VideoReviewsHubPage() {
  return (
    <PageCanvas>
      <VideoReviewsHubScreen />
    </PageCanvas>
  );
}
