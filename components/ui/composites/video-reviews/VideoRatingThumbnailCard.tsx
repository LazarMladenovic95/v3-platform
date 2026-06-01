import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/atoms/Avatar";
import { StarRating } from "@/components/ui/molecules/video-reviews/StarRating";
import { getReviewPlayerPath, type ReviewFixture } from "@/lib/fixtures/video-reviews";
import { cn } from "@/lib/utils";

export type VideoRatingThumbnailCardProps = {
  review: ReviewFixture;
  className?: string;
};

export function VideoRatingThumbnailCard({ review, className }: VideoRatingThumbnailCardProps) {
  return (
    <Link
      href={getReviewPlayerPath(review)}
      className={cn(
        "relative block min-w-40 w-40 shrink-0 overflow-hidden rounded-lg border border-border",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <div className="relative h-64 w-full">
        <Image
          src={review.posterUrl}
          alt=""
          fill
          className="object-cover"
          sizes="160px"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
        <div className="absolute left-3 top-3">
          <StarRating rating={review.starRating} onDark />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 p-3">
          <Avatar className="h-8 w-8 border border-border">
            <AvatarImage src={review.reviewerAvatarUrl} alt="" />
            <AvatarFallback className="text-body-extra-small-bold">
              {review.reviewerName.slice(0, 1)}
            </AvatarFallback>
          </Avatar>
          <p className="line-clamp-2 text-body-small-bold text-foreground-on-dark">
            {review.productName}
          </p>
        </div>
      </div>
    </Link>
  );
}
