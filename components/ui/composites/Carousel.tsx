import * as React from "react";
import { cn } from "@/lib/utils";

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative", className)}
    {...props}
  />
));
Carousel.displayName = "Carousel";

const CarouselTrack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3",
      "[-webkit-overflow-scrolling:touch]",
      className,
    )}
    {...props}
  />
));
CarouselTrack.displayName = "CarouselTrack";

export type CarouselItemSize = "multi" | "compact";

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: CarouselItemSize;
}

const carouselItemSizeClasses: Record<CarouselItemSize, string> = {
  multi: "w-[85%] sm:w-[45%] lg:w-[31%]",
  compact: "w-full",
};

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, size = "multi", ...props }, ref) => (
    <div
      ref={ref}
      className={cn("shrink-0 snap-start", carouselItemSizeClasses[size], className)}
      {...props}
    />
  ),
);
CarouselItem.displayName = "CarouselItem";

export { Carousel, CarouselTrack, CarouselItem };
