import Link from "next/link";
import { Heading } from "@/components/ui/atoms/Heading";
import { Icon } from "@/components/ui/atoms/Icon";
import { outlineWhiteLinkClassName } from "@/components/ui/atoms/button/buttonClasses";
import { Text } from "@/components/ui/atoms/Text";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export type ReviewerCommunityBannerProps = {
  className?: string;
};

export function ReviewerCommunityBanner({ className }: ReviewerCommunityBannerProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-lg bg-secondary px-4 py-4 md:flex-row md:items-center md:gap-6 md:px-6",
        className,
      )}
    >
      <div className="flex min-w-0 items-start gap-4 md:flex-1">
        <div
          className="flex h-16 w-20 shrink-0 items-center justify-center rounded-lg border border-foreground-on-dark/20 bg-foreground-on-dark/10 md:h-20 md:w-28"
          aria-hidden
        >
          <Icon name="image" size="lg" className="text-foreground-on-dark/70" />
        </div>

        <div className="min-w-0 flex-1">
          <Heading as="h2" variant="title-2" className="text-foreground-on-dark">
            {t("marketing.landing.communityBanner")}
          </Heading>
          <Text as="p" variant="body-extra-small-muted" className="mt-0.5 text-foreground-on-dark/80">
            {t("marketing.landing.communityBannerSub")}
          </Text>
        </div>
      </div>

      <Link
        href="/sign-in?sign-up"
        className={cn(
          outlineWhiteLinkClassName("medium"),
          "w-full shrink-0 justify-center md:w-auto",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-secondary",
        )}
        aria-label={t("marketing.landing.joinCommunityAriaLabel")}
      >
        {t("marketing.landing.joinCommunity")}
      </Link>
    </div>
  );
}
