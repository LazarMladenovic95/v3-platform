"use client";

import Image from "next/image";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge, Carousel, CarouselItem, CarouselTrack, IconButton } from "@/components/ui";
import { cn } from "@/lib/utils";

const carouselItems = [
  {
    title: "Reviewed product",
    description: "Feature a verified product, review summary, or campaign story.",
    badge: "Verified",
    image: "/expeerly_reviewed_MINIMAL.svg",
    dark: false,
  },
  {
    title: "Brand asset",
    description: "Use carousel cards for logo assets, launch visuals, and product highlights.",
    badge: "Brand",
    image: "/expeerly-logo.svg",
    dark: false,
  },
  {
    title: "Inverse mark",
    description: "Show alternate treatments for dark surfaces or high-contrast contexts.",
    badge: "Inverse",
    image: "/expeerly-logo-negative.svg",
    dark: true,
  },
  {
    title: "Symbol",
    description: "Compact artwork works well when paired with concise supporting copy.",
    badge: "Symbol",
    image: "/expeerly_reviewed_MINIMAL.svg",
    dark: false,
  },
  {
    title: "Star asset",
    description: "Small icon-led items can represent ratings, favorites, or review quality.",
    badge: "Rating",
    image: "/expeerly_star.svg",
    dark: false,
  },
] as const;

function CarouselCard({ item }: { item: (typeof carouselItems)[number] }) {
  return (
    <article className="h-full overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
      <div
        className={`flex h-36 items-center justify-center p-6 ${
          item.dark ? "bg-tooltip" : "bg-surface-muted"
        }`}
      >
        <Image
          src={item.image}
          alt=""
          width={180}
          height={96}
          className="max-h-24 w-auto max-w-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-body-regular-bold text-foreground-title">{item.title}</h3>
        <p className="mt-2 text-body-small text-foreground-muted">{item.description}</p>
        <div className="mt-3">
          <Badge label={item.badge} variant="subtle" />
        </div>
      </div>
    </article>
  );
}

const compactCarouselItems = carouselItems.slice(0, 3);

function MultiItemCarouselExample() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const itemRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  const trackRef = React.useRef<HTMLDivElement | null>(null);

  function goToItem(index: number) {
    const nextIndex = Math.min(Math.max(index, 0), carouselItems.length - 1);

    setActiveIndex(nextIndex);
    itemRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }

  function updateActiveIndex() {
    const track = trackRef.current;

    if (!track) return;

    const nearestIndex = itemRefs.current.reduce((nearest, item, index) => {
      if (!item) return nearest;

      const nearestItem = itemRefs.current[nearest];
      const currentDistance = Math.abs(item.offsetLeft - track.scrollLeft);
      const nearestDistance = nearestItem
        ? Math.abs(nearestItem.offsetLeft - track.scrollLeft)
        : Number.POSITIVE_INFINITY;

      return currentDistance < nearestDistance ? index : nearest;
    }, 0);

    setActiveIndex(nearestIndex);
  }

  return (
    <Carousel className="mt-4" aria-label="Featured product carousel">
      <CarouselTrack ref={trackRef} onScroll={updateActiveIndex}>
        {carouselItems.map((item, index) => (
          <CarouselItem
            key={item.title}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            size="multi"
          >
            <CarouselCard item={item} />
          </CarouselItem>
        ))}
      </CarouselTrack>

      <div className="mt-4 flex items-center justify-between gap-4">
        <IconButton
          type="button"
          variant="outline-neutral"
          size="small"
          icon={<ChevronLeft className="h-4 w-4" />}
          aria-label="Show previous carousel item"
          disabled={activeIndex === 0}
          onClick={() => goToItem(activeIndex - 1)}
        />

        <div className="flex items-center justify-center gap-2" aria-label="Carousel position">
          {carouselItems.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={item.title}
                type="button"
                className={cn(
                  "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                  isActive ? "w-5 bg-secondary" : "w-2 bg-border hover:bg-secondary",
                )}
                aria-label={`Show carousel item ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => goToItem(index)}
              />
            );
          })}
        </div>

        <IconButton
          type="button"
          variant="outline-neutral"
          size="small"
          icon={<ChevronRight className="h-4 w-4" />}
          aria-label="Show next carousel item"
          disabled={activeIndex === carouselItems.length - 1}
          onClick={() => goToItem(activeIndex + 1)}
        />
      </div>
    </Carousel>
  );
}

function CompactCarouselExample() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const itemRefs = React.useRef<Array<HTMLDivElement | null>>([]);

  function goToItem(index: number) {
    const nextIndex = Math.min(Math.max(index, 0), compactCarouselItems.length - 1);

    setActiveIndex(nextIndex);
    itemRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }

  return (
    <Carousel className="mt-4 max-w-md" aria-label="Compact promotion carousel">
      <CarouselTrack className="pb-0">
        {compactCarouselItems.map((item, index) => (
          <CarouselItem
            key={item.title}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            size="compact"
          >
            <CarouselCard item={item} />
          </CarouselItem>
        ))}
      </CarouselTrack>

      <div className="mt-4 flex items-center justify-between gap-4">
        <IconButton
          type="button"
          variant="outline-neutral"
          size="small"
          icon={<ChevronLeft className="h-4 w-4" />}
          aria-label="Show previous carousel item"
          disabled={activeIndex === 0}
          onClick={() => goToItem(activeIndex - 1)}
        />

        <div className="flex items-center justify-center gap-2" aria-label="Carousel position">
          {compactCarouselItems.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={item.title}
                type="button"
                className={cn(
                  "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                  isActive ? "w-5 bg-secondary" : "w-2 bg-border hover:bg-secondary",
                )}
                aria-label={`Show carousel item ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => goToItem(index)}
              />
            );
          })}
        </div>

        <IconButton
          type="button"
          variant="outline-neutral"
          size="small"
          icon={<ChevronRight className="h-4 w-4" />}
          aria-label="Show next carousel item"
          disabled={activeIndex === compactCarouselItems.length - 1}
          onClick={() => goToItem(activeIndex + 1)}
        />
      </div>
    </Carousel>
  );
}

export function CarouselsShowcase() {
  return (
    <div className="grid gap-8">
      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Multi-item carousel</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Shows several cards side by side on larger screens. Swipe or horizontally scroll to reveal more.
        </p>
        <MultiItemCarouselExample />
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Compact carousel</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Shows one item at a time for compact placements, mobile previews, or focused promos.
        </p>
        <CompactCarouselExample />
      </section>
    </div>
  );
}
