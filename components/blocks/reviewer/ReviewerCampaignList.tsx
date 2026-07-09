import "server-only";

import { ReviewerCampaignListClient } from "@/components/blocks/reviewer/ReviewerCampaignListClient";
import { getReviewerCampaignRows } from "@/lib/fixtures/reviewer-campaigns-server";

export function ReviewerCampaignList() {
  return <ReviewerCampaignListClient campaigns={getReviewerCampaignRows()} />;
}
