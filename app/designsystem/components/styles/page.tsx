import type { Metadata } from "next";
import { StylesShowcase } from "@/components/designsystem/showcase/styles-showcase";

export const metadata: Metadata = {
  title: "Styles — Design system",
};

export default function DesignSystemStylesPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Styles</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-muted">
        Border and elevation building blocks used across surfaces, popovers, and tables.
      </p>
      <div className="mt-6">
        <StylesShowcase />
      </div>
    </>
  );
}
