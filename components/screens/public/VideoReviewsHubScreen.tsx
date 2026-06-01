import { Heading } from "@/components/ui/atoms/Heading";
import { Text } from "@/components/ui/atoms/Text";
import { BrandMarketingCard, VideoRatingThumbnailCard } from "@/components/ui";
import { getAllBrands, getReviewsForBrand } from "@/lib/fixtures/video-reviews";
import { t } from "@/lib/i18n";

export function VideoReviewsHubScreen() {
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
