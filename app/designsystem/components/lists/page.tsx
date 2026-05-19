import type { Metadata } from "next";
import { ListsShowcase } from "@/components/designsystem/showcase/lists-showcase";

export const metadata: Metadata = {
  title: "Lists — Design system",
};

export default function ListsComponentsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Lists</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Structured rows for compact content previews, search results, product rows, and asset pickers.
      </p>

      <div className="mt-6">
        <ListsShowcase />
      </div>
    </>
  );
}
