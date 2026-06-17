import { Icon } from "@/components/ui/atoms/Icon";
import { Text } from "@/components/ui/atoms/Text";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export type StarRatingProps = {
  rating: number;
  className?: string;
  onDark?: boolean;
  showScore?: boolean;
  size?: "default" | "large";
};

const starIconSize = {
  default: "md",
  large: "lg",
} as const;

const scoreVariant = {
  default: "body-small-muted",
  large: "body-regular",
} as const;

export function StarRating({
  rating,
  className,
  onDark = false,
  showScore = true,
  size = "default",
}: StarRatingProps) {
  const max = 5;
  const filled = Math.min(max, Math.max(0, Math.round(rating)));

  return (
    <div
      className={cn("flex items-center gap-2", className)}
      aria-label={`${t("player.review.ratingLabel")}: ${filled}/${max}`}
    >
      <div className={cn("flex items-center", size === "large" ? "gap-1" : "gap-0.5")}>
        {Array.from({ length: max }, (_, index) => (
          <Icon
            key={index}
            name="star"
            size={starIconSize[size]}
            className={cn(
              index < filled ? "fill-warning text-warning" : "text-foreground-disabled",
            )}
          />
        ))}
      </div>
      {showScore ? (
        <Text
          as="span"
          variant={scoreVariant[size]}
          className={onDark ? "text-foreground-on-dark" : undefined}
        >
          {filled}/{max}
        </Text>
      ) : null}
    </div>
  );
}
