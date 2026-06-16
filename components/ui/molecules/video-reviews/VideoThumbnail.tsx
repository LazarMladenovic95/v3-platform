import Image from "next/image";
import { Icon } from "@/components/ui/atoms/Icon";
import { StarRating } from "@/components/ui/molecules/video-reviews/StarRating";
import { Text } from "@/components/ui/atoms/Text";
import { cn } from "@/lib/utils";

export type VideoThumbnailProps = {
  posterUrl: string;
  brandLogoSrc: string;
  brandName: string;
  productName: string;
  starRating: number;
  showBrandLogo?: boolean;
  className?: string;
};

export function VideoThumbnail({
  posterUrl,
  brandLogoSrc,
  brandName,
  productName,
  starRating,
  showBrandLogo = true,
  className,
}: VideoThumbnailProps) {
  return (
    <div
      className={cn(
        "relative aspect-[9/16] w-40 min-w-40 shrink-0 overflow-hidden rounded-lg border border-border",
        className,
      )}
    >
      <Image
        src={posterUrl}
        alt=""
        fill
        className="object-cover"
        sizes="160px"
        unoptimized
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-foreground-accent/10 via-foreground-accent/35 to-foreground-accent/75"
        aria-hidden
      />

      <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
        <Icon name="play-square" size="xl" className="text-foreground-on-dark" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-3">
        <div className="flex items-center gap-2">
          {showBrandLogo ? (
            <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-surface p-1">
              <Image
                src={brandLogoSrc}
                alt={brandName}
                width={24}
                height={24}
                className="h-full w-full object-contain"
              />
            </div>
          ) : null}
          <StarRating rating={starRating} onDark showScore={false} />
        </div>
        <Text
          as="p"
          variant="body-small"
          className="mt-1.5 line-clamp-2 text-body-small-bold text-foreground-on-dark"
        >
          {productName}
        </Text>
      </div>
    </div>
  );
}
