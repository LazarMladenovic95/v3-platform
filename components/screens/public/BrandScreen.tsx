import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/atoms/Avatar";
import { Heading } from "@/components/ui/atoms/Heading";
import { Text } from "@/components/ui/atoms/Text";
import { Card, CardTitle } from "@/components/ui/composites/Card";
import { StarRating, VideoRatingThumbnailCard } from "@/components/ui";
import { primaryPinkClassName } from "@/components/ui/atoms/button/buttonClasses";
import type { BrandFixture, ReviewFixture } from "@/lib/fixtures/video-reviews";
import { getLocale, t } from "@/lib/i18n";
import { pickLocalized } from "@/lib/i18n-content";
import { cn } from "@/lib/utils";

function ReviewThumbnailStrip({
  title,
  reviews,
}: {
  title: string;
  reviews: ReviewFixture[];
}) {
  return (
    <section className="mt-10">
      <Heading as="h2" variant="heading-3">
        {title}
      </Heading>
      <ul className="mt-5 flex gap-3 overflow-x-auto pb-2 md:gap-4" aria-label={title}>
        {reviews.map((review) => (
          <li key={review.publicReviewId}>
            <VideoRatingThumbnailCard review={review} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export type BrandScreenProps = {
  brand: BrandFixture;
  reviews: ReviewFixture[];
};

export function BrandScreen({ brand, reviews }: BrandScreenProps) {
  const locale = getLocale();
  const bodyText = pickLocalized(brand.bodyText, locale, "text");
  const footerText = pickLocalized(brand.footerText, locale, "text");

  return (
    <div className="mx-auto w-full max-w-lg px-6 py-8 md:max-w-content md:px-16 md:py-10 lg:px-20">
      <Link
        href="/video-reviews"
        className="text-body-small text-secondary underline-offset-4 hover:underline"
      >
        {t("player.brand.backToHub")}
      </Link>

      <header className="mt-6 w-full">
        <div className="flex gap-4">
          <Link
            href={brand.websiteUrl ?? "#"}
            target={brand.websiteUrl ? "_blank" : undefined}
            rel={brand.websiteUrl ? "noreferrer" : undefined}
            className="shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
          >
            <Avatar className="h-14 w-14 md:h-16 md:w-16">
              <AvatarImage src={brand.logoSrc} alt="" />
              <AvatarFallback>{brand.name.slice(0, 1)}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="min-w-0 flex-1">
            <Heading as="h1" variant="heading-2">
              {brand.name} {t("player.brand.videoReviewsSuffix")}
            </Heading>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <StarRating rating={brand.rating} />
              <Text as="span" variant="body-small-muted">
                {t("player.brand.reviewsCount", { count: brand.reviewsCount })}
              </Text>
            </div>
          </div>
        </div>
        {bodyText ? (
          <Text variant="body-regular" className="mt-6 max-w-2xl">
            {bodyText}
          </Text>
        ) : null}
      </header>

      <ReviewThumbnailStrip title={t("player.brand.reviewsHeading")} reviews={reviews} />

      <Card className="mt-10 bg-surface-muted" surface="muted">
        <CardTitle>{t("player.brand.ctaTitle")}</CardTitle>
        <Text variant="body-small-muted" className="mt-2">
          {t("player.brand.ctaDescription")}
        </Text>
        <Link
          href="https://www.get.expeerly.com/for-brands"
          className={cn(
            primaryPinkClassName("medium"),
            "mt-4 inline-flex no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
          )}
          aria-label={t("marketing.landing.learnMoreAriaLabel")}
        >
          {t("player.brand.ctaButton")}
        </Link>
      </Card>

      {footerText ? (
        <footer className="mt-12 border-t border-border pt-8">
          <Text variant="body-small-muted">{footerText}</Text>
        </footer>
      ) : null}
    </div>
  );
}
