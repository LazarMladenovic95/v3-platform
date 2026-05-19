import type { Metadata } from "next";
import { TablesShowcase } from "@/components/designsystem/showcase/tables-showcase";

export const metadata: Metadata = {
  title: "Tables & rows — Design system",
};

export default function DesignSystemTablesPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Tables & rows</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Row density, column headers, alignment for data-heavy screens, component matrices, and timestamp
        patterns (absolute and relative).
      </p>
      <div className="mt-6">
        <TablesShowcase />
      </div>
    </>
  );
}
