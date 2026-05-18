import type { Metadata } from "next";
import { CardsShowcase } from "@/components/designsystem/showcase/cards-showcase";

export const metadata: Metadata = {
  title: "Cards — Design system",
};

export default function DesignSystemCardsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Cards</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-muted">
        Layout patterns for grouped content. Prefer tokens over one-off hex values; add a Card composite when
        repeated structure stabilizes.
      </p>
      <div className="mt-6">
        <CardsShowcase />
      </div>
    </>
  );
}
