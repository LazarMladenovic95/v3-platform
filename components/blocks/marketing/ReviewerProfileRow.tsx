import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/atoms/Avatar";
import { Heading } from "@/components/ui/atoms/Heading";
import { Text } from "@/components/ui/atoms/Text";
import type { ReviewerSummaryFixture } from "@/lib/fixtures/video-reviews";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const MAX_BRANDS = 6;

export type ReviewerProfileRowProps = {
  reviewer: ReviewerSummaryFixture;
  className?: string;
};

function reviewerInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? ""}`.toUpperCase();
  }

  return name.slice(0, 2).toUpperCase();
}

export function ReviewerProfileRow({ reviewer, className }: ReviewerProfileRowProps) {
  const brands = reviewer.brands.slice(0, MAX_BRANDS);
  const brandsLabel = brands
    .map((brand) => brand.brandName)
    .join(t("marketing.landing.reviewerBrandsSeparator"));

  return (
    <li className={cn(className)}>
      <div className="flex h-full flex-col gap-4 rounded-lg border border-border bg-surface p-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-12 w-12 shrink-0 border border-border">
            <AvatarImage src={reviewer.reviewerAvatarUrl} alt="" />
            <AvatarFallback className="text-body-small-bold">
              {reviewerInitials(reviewer.reviewerDisplayName)}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <Heading as="h4" variant="title-bold" className="text-secondary">
              {reviewer.reviewerDisplayName}
            </Heading>
            {reviewer.city ? (
              <Text as="p" variant="body-small-muted" className="mb-2">
                {reviewer.city}
              </Text>
            ) : null}
            {reviewer.quote ? (
              <Text
                as="p"
                variant="body-small-muted"
                className={cn("line-clamp-3", !reviewer.city && "mt-1")}
              >
                {reviewer.quote}
              </Text>
            ) : null}
          </div>
        </div>

        {brandsLabel ? (
          <Text
            as="p"
            variant="body-extra-small-muted"
            className="line-clamp-2"
            aria-label={t("marketing.landing.reviewerBrandsListAriaLabel", {
              name: reviewer.reviewerDisplayName,
            })}
          >
            {brandsLabel}
          </Text>
        ) : null}
      </div>
    </li>
  );
}
