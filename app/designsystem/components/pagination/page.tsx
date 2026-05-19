import type { Metadata } from "next";
import { PaginationShowcase } from "@/components/designsystem/showcase/pagination-showcase";

export const metadata: Metadata = {
  title: "Pagination — Design system",
};

export default function PaginationComponentsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Pagination</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Controls for moving through large result sets, tables, and paged content.
      </p>

      <div className="mt-6">
        <PaginationShowcase />
      </div>
    </>
  );
}
