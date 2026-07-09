import Image from "next/image";
import { Badge } from "@/components/ui/atoms/Badge";
import { Heading } from "@/components/ui/atoms/Heading";
import { Icon } from "@/components/ui/atoms/Icon";
import { Text } from "@/components/ui/atoms/Text";
import { PrimaryPink } from "@/components/ui/atoms/button/PrimaryPink";
import type { ReviewerCampaignStatus } from "@/lib/fixtures/reviewer-campaigns";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export type ReviewerCampaignListItemProps = {
  brandLogoSrc: string;
  title: string;
  metaParts: string[];
  status: ReviewerCampaignStatus;
  endingSoon?: boolean;
  className?: string;
};

export function ReviewerCampaignListItem({
  brandLogoSrc,
  title,
  metaParts,
  status,
  endingSoon = false,
  className,
}: ReviewerCampaignListItemProps) {
  const isClosed = status === "closed";

  return (
    <li
      className={cn(
        "flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <div
        className={cn(
          "flex min-w-0 flex-1 items-start gap-3",
          isClosed && "opacity-60",
        )}
      >
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-muted p-2">
          <Image
            src={brandLogoSrc}
            alt=""
            width={48}
            height={48}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="min-w-0 flex-1">
          <Heading
            as="h3"
            variant="title-3"
            className={cn("line-clamp-2", isClosed && "text-foreground-muted")}
          >
            {title}
          </Heading>
          <Text as="p" variant="body-extra-small-muted" className="mt-1 flex flex-wrap items-center gap-x-2">
            {metaParts.map((part, index) => (
              <span key={`${part}-${index}`} className="inline-flex items-center gap-2">
                {index > 0 ? <span aria-hidden>·</span> : null}
                {part}
              </span>
            ))}
          </Text>
        </div>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-3 self-start sm:self-center">
        {endingSoon ? (
          <Badge
            label={t("app.reviewerCampaigns.endingSoon")}
            variant="warning"
            iconLeft={<Icon name="flame" size="sm" aria-hidden />}
          />
        ) : null}
        {status === "closed" ? (
          <Badge
            label={t("app.reviewerCampaigns.status.closed")}
            variant="subtle"
            iconLeft={<Icon name="circle-off" size="sm" aria-hidden />}
          />
        ) : null}
        {status === "open" ? (
          <PrimaryPink
            type="button"
            size="small"
            aria-label={t("app.reviewerCampaigns.applyAriaLabel", { campaign: title })}
          >
            {t("app.reviewerCampaigns.apply")}
          </PrimaryPink>
        ) : null}
        {status === "applied" ? (
          <Badge
            label={t("app.reviewerCampaigns.status.applied")}
            variant="subtle"
            iconLeft={<Icon name="check" size="sm" aria-hidden />}
          />
        ) : null}
      </div>
    </li>
  );
}
