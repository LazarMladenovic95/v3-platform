import type { Metadata } from "next";
import { AssetsShowcase } from "@/components/designsystem/showcase/assets-showcase";

export const metadata: Metadata = {
  title: "Assets — Design system",
};

export default function AssetsComponentsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Assets</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Brand assets for logos, inverse marks, symbols, and favicon-style app icons.
      </p>

      <div className="mt-6">
        <AssetsShowcase />
      </div>
    </>
  );
}
