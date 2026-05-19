import type { Metadata } from "next";
import { EmptyStatesShowcase } from "@/components/designsystem/showcase/empty-states-showcase";

export const metadata: Metadata = {
  title: "Empty states — Design system",
};

export default function EmptyStatesComponentsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Empty states</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Patterns for explaining missing content, search results, and first-run setup moments.
      </p>

      <div className="mt-6">
        <EmptyStatesShowcase />
      </div>
    </>
  );
}
