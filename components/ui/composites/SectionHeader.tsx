import Link from "next/link";
import { Heading } from "@/components/ui/atoms/Heading";
import { Icon } from "@/components/ui/atoms/Icon";
import { ghostLinkClassName } from "@/components/ui/atoms/button/buttonClasses";
import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  actionHref?: string;
  actionAriaLabel?: string;
  headingId?: string;
  className?: string;
};

export function SectionHeader({
  title,
  actionLabel,
  actionHref,
  actionAriaLabel,
  headingId,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex w-full items-center gap-4", className)}>
      <Heading as="h3" variant="title-1" className="min-w-0" id={headingId}>
        {title}
      </Heading>
      {actionLabel && actionHref ? (
        <Link
          href={actionHref}
          className={cn(
            ghostLinkClassName("medium"),
            "ml-auto shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
          aria-label={actionAriaLabel ?? actionLabel}
        >
          {actionLabel}
          <Icon name="chevron-right" size="sm" aria-hidden />
        </Link>
      ) : null}
    </div>
  );
}
