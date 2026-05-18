import type { Metadata } from "next";
import { FiltersAndSortingShowcase } from "@/components/designsystem/showcase/filters-and-sorting-showcase";

export const metadata: Metadata = {
  title: "Filters & sorting — Design system",
};

export default function FiltersAndSortingComponentsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Filters & sorting</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Patterns for narrowing, ordering, and summarizing result sets.
      </p>

      <div className="mt-6">
        <FiltersAndSortingShowcase />
      </div>
    </>
  );
}
