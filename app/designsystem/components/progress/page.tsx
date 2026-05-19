import type { Metadata } from "next";
import { ProgressShowcase } from "@/components/designsystem/showcase/progress-showcase";

export const metadata: Metadata = {
  title: "Progress — Design system",
};

export default function ProgressComponentsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Progress</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Determinate and indeterminate indicators for uploads, setup flows, and background work.
      </p>

      <div className="mt-6">
        <ProgressShowcase />
      </div>
    </>
  );
}
