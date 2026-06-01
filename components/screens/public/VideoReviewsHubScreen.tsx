import Link from "next/link";
import { Heading } from "@/components/ui/atoms/Heading";
import { Text } from "@/components/ui/atoms/Text";
import { Card, CardTitle } from "@/components/ui/composites/Card";
import { BrandMarketingCard, VideoRatingThumbnailCard } from "@/components/ui";
import type { InterestCategoryRecord } from "@/lib/data/interest-categories-dev";
import { getCategoryProductPagePath } from "@/lib/data/interest-categories-dev";
import { getAllBrands, getReviewsForBrand } from "@/lib/fixtures/video-reviews";
import { getLocale, t } from "@/lib/i18n";
import { pathnameWithLocale } from "@/lib/i18n-routing";
import { pickLocalized } from "@/lib/i18n-content";

export type VideoReviewsHubScreenProps = {
  categories: InterestCategoryRecord[];
};

export function VideoReviewsHubScreen({ categories }: VideoReviewsHubScreenProps) {
  const locale = getLocale();
  const brands = getAllBrands();
  const featured = brands[0];
  const featuredReviews = featured ? getReviewsForBrand(featured.slug) : [];

  return (
    <div className="mx-auto w-full max-w-content px-6 py-10 md:px-16 lg:px-20">
      <Heading as="h1" variant="heading-2">
        {t("player.hub.title")}
      </Heading>
      <Text variant="body-small-muted" className="mt-2 max-w-2xl">
        {t("player.hub.description")}
      </Text>

      <Heading as="h2" variant="heading-3" className="mt-10">
        {t("player.hub.categoriesHeading")}
      </Heading>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const label = pickLocalized(category.displayName, locale, "title") ?? category.slugs.en;
          const href = pathnameWithLocale(getCategoryProductPagePath(category, locale), locale);

          return (
            <li key={category.uniqueCategoryId}>
              <Link
                href={href}
                className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Card className="h-full transition-colors hover:border-border-focus">
                  <CardTitle className="text-left">{label}</CardTitle>
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>

      {featuredReviews.length > 0 && featured ? (
        <section className="mt-10">
          <Heading as="h2" variant="heading-3">
            {featured.name} — {t("player.brand.reviewsHeading")}
          </Heading>
          <ul className="mt-5 flex gap-3 overflow-x-auto pb-2 md:gap-4">
            {featuredReviews.map((review) => (
              <li key={review.publicReviewId}>
                <VideoRatingThumbnailCard review={review} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <Heading as="h2" variant="heading-3" className="mt-12">
        {t("player.hub.brandsHeading")}
      </Heading>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {brands.map((brand) => (
          <li key={brand.slug} className="h-full">
            <BrandMarketingCard brand={brand} />
          </li>
        ))}
      </ul>
    </div>
  );
}
