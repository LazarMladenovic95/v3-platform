import type { Metadata } from "next";
import { IconographyShowcase } from "@/components/designsystem/showcase/iconography-showcase";

export const metadata: Metadata = {
  title: "Iconography — Design system",
};

export default function DesignSystemIconographyPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Iconography</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-muted">
        Lucide outline icons sized to match atoms and molecules. Prefer round stroke caps and joins so icons
        align with our rounded surfaces and controls.
      </p>
      <div className="mt-6">
        <IconographyShowcase />
      </div>
    </>
  );
}
