import { Icon } from "@/components/ui/atoms/Icon";
import { Text } from "@/components/ui/atoms/Text";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export type StarRatingProps = {
  rating: number;
  className?: string;
  onDark?: boolean;
  showScore?: boolean;
};

export function StarRating({
  rating,
  className,
  onDark = false,
  showScore = true,
}: StarRatingProps) {
  const max = 5;
  const filled = Math.min(max, Math.max(0, Math.round(rating)));

  return (
    <div
      className={cn("flex items-center gap-2", className)}
      aria-label={`${t("player.review.ratingLabel")}: ${filled}/${max}`}
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }, (_, index) => (
          <Icon
            key={index}
            name="star"
            size="md"
            className={cn(
              index < filled ? "fill-warning text-warning" : "text-foreground-disabled",
            )}
          />
        ))}
      </div>
      {showScore ? (
        <Text
          as="span"
          variant="body-small-muted"
          className={onDark ? "text-foreground-on-dark" : undefined}
        >
          {filled}/{max}
        </Text>
      ) : null}
    </div>
  );
}
