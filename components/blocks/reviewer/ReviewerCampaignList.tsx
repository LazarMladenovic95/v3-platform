import { ReviewerCampaignListClient } from "@/components/blocks/reviewer/ReviewerCampaignListClient";
import { getCategoryByEnglishSlug } from "@/lib/data/interest-categories-dev";
import {
  formatCampaignDueLabel,
  getReviewerCampaignLanguageKey,
  getReviewerCampaignRewardKey,
  getReviewerCampaignTitleKey,
  getReviewerCampaigns,
} from "@/lib/fixtures/reviewer-campaigns";
import { getLocale, t } from "@/lib/i18n";
import { pickLocalized } from "@/lib/i18n/content";

export function ReviewerCampaignList() {
  const locale = getLocale();
  const campaigns = getReviewerCampaigns().map((campaign) => {
    const category = getCategoryByEnglishSlug(campaign.categorySlug);
    const categoryLabel =
      pickLocalized(category?.displayName, locale, "title") ?? campaign.categorySlug;

    return {
      id: campaign.id,
      brandLogoSrc: campaign.brandLogoSrc,
      title: t(getReviewerCampaignTitleKey(campaign.itemId)),
      metaParts: [
        categoryLabel,
        t(getReviewerCampaignRewardKey(campaign.itemId)),
        t(getReviewerCampaignLanguageKey(campaign.itemId)),
        formatCampaignDueLabel(campaign.dueAt),
      ],
      endingSoon: campaign.endingSoon,
      status: campaign.status,
    };
  });

  return <ReviewerCampaignListClient campaigns={campaigns} />;
}
