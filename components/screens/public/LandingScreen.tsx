import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/atoms/Icon";
import { Heading } from "@/components/ui/atoms/Heading";
import { Text } from "@/components/ui/atoms/Text";
import { BrandMarketingCard, VideoRatingThumbnailCard } from "@/components/ui";
import { buttonSizeClasses } from "@/components/ui/atoms/button/buttonClasses";
import {
  getAllBrands,
  getReviewsForBrand,
  type ReviewFixture,
} from "@/lib/fixtures/video-reviews";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function ReviewThumbnailStrip({
  title,
  reviews,
  className,
  listClassName,
}: {
  title?: string;
  reviews: ReviewFixture[];
  className?: string;
  listClassName?: string;
}) {
  if (reviews.length === 0) return null;

  const listLabel = title ?? t("marketing.landing.reviewersHeading");

  return (
    <div className={className}>
      {title ? (
        <Heading as="h2" variant="heading-3" className="px-6 text-center md:px-0">
          {title}
        </Heading>
      ) : null}
      <ul
        className={cn(
          "flex justify-center gap-3 overflow-x-auto pb-2 md:gap-4",
          title ? "mt-5 px-6 md:px-0" : "w-full",
          listClassName,
        )}
        aria-label={listLabel}
      >
        {reviews.map((review) => (
          <li key={review.publicReviewId} className="shrink-0">
            <VideoRatingThumbnailCard review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LandingScreen() {
  const brands = getAllBrands();
  const featuredReviews = brands[0] ? getReviewsForBrand(brands[0].slug) : [];
  const heroExampleReviews = featuredReviews.slice(0, 5);

  return (
    <>
      <section className="w-full bg-secondary text-foreground-on-dark">
        <div className="mx-auto flex w-full max-w-content flex-col items-center gap-4 px-6 py-8 text-center sm:gap-5 sm:py-10 md:px-16 md:py-12 lg:px-20">
          <Image
            src="/HeaderImage.svg"
            alt=""
            width={352}
            height={340}
            priority
            className="h-auto w-40 shrink-0 sm:w-48 md:w-56 lg:w-64"
          />
          <div className="flex max-w-3xl flex-col items-center gap-3 sm:gap-4">
            <div className="flex items-start justify-center gap-2">
              <Icon name="message-square" size="lg" className="mt-1 shrink-0 text-foreground-on-dark" />
              <Heading as="h1" variant="heading-1" className="text-foreground-on-dark">
                {t("marketing.landing.heroTitle")}
              </Heading>
            </div>
            <Text variant="body-regular" className="max-w-xl text-foreground-on-dark opacity-90">
              {t("marketing.landing.heroSubtitle")}
            </Text>
            <Link
              href="/video-reviews"
              className={cn(
                buttonSizeClasses.medium,
                "mt-2 inline-flex items-center justify-center rounded-lg bg-surface text-foreground-title hover:bg-surface-hover active:bg-surface-active",
                "no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-secondary",
              )}
            >
              {t("marketing.landing.scrollCta")}
            </Link>
          </div>
          {heroExampleReviews.length > 0 ? (
            <ReviewThumbnailStrip
              reviews={heroExampleReviews}
              className="mt-2 w-full max-w-content"
              listClassName="px-2 sm:px-0"
            />
          ) : null}
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-secondary">
        <Image
          src="/BackgroundImage.svg"
          alt=""
          width={1440}
          height={320}
          className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full select-none object-cover object-top opacity-40 md:bottom-0 md:top-auto md:object-bottom"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-content px-6 py-12 md:px-16 md:py-16 lg:px-20">
          <Heading as="h2" variant="heading-2" className="text-center text-foreground-on-dark">
            {t("marketing.landing.brandsHeading")}
          </Heading>
          <Text
            variant="body-regular"
            className="mx-auto mt-3 max-w-xl text-center text-foreground-on-dark opacity-90"
          >
            {t("marketing.landing.brandsBody")}
          </Text>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {brands.map((brand) => (
              <li key={brand.slug} className="h-full">
                <BrandMarketingCard brand={brand} />
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <Link
              href="/video-reviews"
              className={cn(
                buttonSizeClasses.medium,
                "inline-flex items-center justify-center rounded-lg bg-surface px-6 text-foreground-title hover:bg-surface-hover active:bg-surface-active",
                "no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-secondary",
              )}
            >
              {t("marketing.landing.viewAllBrands")}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-content border-t border-border py-12 md:px-16 lg:px-20">
        <Heading as="h2" variant="heading-2" className="px-6 text-center md:px-0">
          {t("marketing.landing.categoriesHeading")}
        </Heading>
        <Text variant="body-small-muted" className="mx-auto mt-2 max-w-xl px-6 text-center md:px-0">
          {t("marketing.landing.categoriesBody")}
        </Text>
        {featuredReviews.length > 0 ? (
          <ReviewThumbnailStrip
            className="mt-8"
            title={featuredReviews[0]?.productName ?? ""}
            reviews={featuredReviews}
          />
        ) : null}
      </section>

      <section className="mx-auto w-full max-w-lg px-6 py-12 text-center md:max-w-2xl md:py-16 lg:px-20">
        <Heading as="h2" variant="heading-2">
          {t("marketing.landing.howItWorksHeading")}
        </Heading>
        <Text variant="body-small-muted" className="mt-4">
          {t("marketing.landing.howItWorksBody")}
        </Text>
        <Link
          href="https://www.get.expeerly.com/"
          className={cn(
            buttonSizeClasses.large,
            "mt-6 inline-flex items-center justify-center rounded-lg border border-border bg-surface text-foreground-title-subtle",
            "hover:border-border-focus hover:text-secondary",
            "no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
          aria-label={t("marketing.landing.learnMoreAriaLabel")}
        >
          {t("marketing.landing.learnMore")}
        </Link>
      </section>
    </>
  );
}
