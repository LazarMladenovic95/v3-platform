import type { Metadata } from "next";
import { CarouselsShowcase } from "@/components/designsystem/showcase/carousels-showcase";

export const metadata: Metadata = {
  title: "Carousels — Design system",
};

export default function CarouselsComponentsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Carousels</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Swipeable horizontal content patterns for browsing images, cards, and compact promotional items.
      </p>

      <div className="mt-6">
        <CarouselsShowcase />
      </div>
    </>
  );
}
