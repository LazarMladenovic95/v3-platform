import type { ReactNode } from "react";
import { Carousel } from "@/components/ui/composites/Carousel";
import { cn } from "@/lib/utils";

export type EdgeCarouselProps = {
  id?: string;
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  trackClassName?: string;
};

/** Horizontal list carousel that extends flush to the viewport edges (mobile-first landing). */
export function EdgeCarousel({
  id,
  ariaLabel,
  children,
  className,
  trackClassName,
}: EdgeCarouselProps) {
  return (
    <Carousel variant="edgeBleed" className={className}>
      <ul
        id={id}
        aria-label={ariaLabel}
        className={cn(
          "flex gap-3 overflow-x-auto pb-2 pl-6 pr-6 [-webkit-overflow-scrolling:touch] md:gap-6 md:pl-16 md:pr-16 lg:pl-20 lg:pr-20",
          trackClassName,
        )}
      >
        {children}
      </ul>
    </Carousel>
  );
}
