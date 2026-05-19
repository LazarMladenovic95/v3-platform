import type { Metadata } from "next";
import { LoadersAndSkeletonsShowcase } from "@/components/designsystem/showcase/loaders-and-skeletons-showcase";

export const metadata: Metadata = {
  title: "Loaders & skeletons — Design system",
};

export default function LoadersAndSkeletonsComponentsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Loaders & skeletons</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Loading indicators and placeholder states for asynchronous UI.
      </p>

      <div className="mt-6">
        <LoadersAndSkeletonsShowcase />
      </div>
    </>
  );
}
