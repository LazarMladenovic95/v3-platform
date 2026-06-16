import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/ui/atoms/Heading";
import { Icon } from "@/components/ui/atoms/Icon";
import { Text } from "@/components/ui/atoms/Text";
import { Card } from "@/components/ui/composites/Card";
import { AvatarGroup, type AvatarGroupItem } from "@/components/ui/composites/AvatarGroup";
import { ProductGroup, type ProductGroupItem } from "@/components/ui/composites/ProductGroup";
import { StarRating } from "@/components/ui";
import type { BrandFixture } from "@/lib/fixtures/video-reviews";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type BrandStatMetricProps = {
  value: string;
  label: string;
};

function BrandStatMetric({ value, label }: BrandStatMetricProps) {
  return (
    <div>
      <Heading as="h4" variant="heading-2" className="tabular-nums text-secondary">
        {value}
      </Heading>
      <Text as="p" variant="body-small-muted" className="mt-0.5">
        {label}
      </Text>
    </div>
  );
}

export type BrandScreenHeaderProps = {
  brand: BrandFixture;
  bodyText?: string;
  reviewCount: number;
  averageRating: number | null;
  productCount: number;
  reviewerAvatars: AvatarGroupItem[];
  productThumbnails: ProductGroupItem[];
};

export function BrandScreenHeader({
  brand,
  bodyText,
  reviewCount,
  averageRating,
  productCount,
  reviewerAvatars,
  productThumbnails,
}: BrandScreenHeaderProps) {
  return (
    <>
      <Link
        href="/video-reviews/brand"
        className={cn(
          "inline-flex items-center gap-1 text-body-small text-secondary no-underline",
          "hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
      >
        <Icon name="chevron-left" size="sm" aria-hidden />
        {t("player.brand.backToAllBrands")}
      </Link>

      <header className="mt-6 w-full">
        <div className="flex gap-4">
          <Link
            href={brand.websiteUrl ?? "#"}
            target={brand.websiteUrl ? "_blank" : undefined}
            rel={brand.websiteUrl ? "noreferrer" : undefined}
            className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-muted p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          >
            <Image
              src={brand.logoSrc}
              alt=""
              width={72}
              height={72}
              className="max-h-full max-w-full object-contain"
            />
          </Link>

          <div className="min-w-0 flex-1">
            <Heading as="h1" variant="display">
              {brand.name}
            </Heading>
          </div>
        </div>

        {bodyText ? (
          <Text variant="body-regular" className="mt-5 max-w-2xl">
            {bodyText}
          </Text>
        ) : null}

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Card padding="small" className="text-center sm:text-left">
            <BrandStatMetric
              value={String(reviewCount)}
              label={t("player.brand.statReviewsLabel")}
            />
            {reviewerAvatars.length > 0 ? (
              <AvatarGroup
                items={reviewerAvatars}
                max={4}
                sizeClassName="h-8 w-8"
                className="mt-3 justify-center sm:justify-start"
                aria-label={t("player.brand.statReviewersAriaLabel")}
              />
            ) : null}
          </Card>
          <Card padding="small" className="text-center sm:text-left">
            {averageRating !== null ? (
              <BrandStatMetric
                value={averageRating.toFixed(1)}
                label={t("player.brand.statAvgRatingLabel")}
              />
            ) : (
              <Text as="p" variant="body-regular" className="text-body-regular-bold text-foreground-title">
                {t("player.brand.statAverageRatingEmpty")}
              </Text>
            )}
            {averageRating !== null ? (
              <StarRating
                rating={averageRating}
                showScore={false}
                className="mt-3 justify-center sm:justify-start"
              />
            ) : null}
          </Card>
          <Card padding="small" className="text-center sm:text-left">
            <BrandStatMetric
              value={String(productCount)}
              label={t("player.brand.statProductsLabel")}
            />
            {productThumbnails.length > 0 ? (
              <ProductGroup
                items={productThumbnails}
                max={4}
                sizeClassName="h-8 w-8"
                className="mt-3 justify-center sm:justify-start"
                aria-label={t("player.brand.statProductsAriaLabel")}
              />
            ) : null}
          </Card>
        </div>
      </header>
    </>
  );
}
