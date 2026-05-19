import type { Metadata } from "next";
import { DesignSystemColorTokensSection } from "@/components/designsystem/DesignSystemColorTokensSection";

export const metadata: Metadata = {
  title: "Color — Design system",
};

export default function DesignSystemColorsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Color</h1>
      <div className="mt-8">
        <DesignSystemColorTokensSection />
      </div>
    </>
  );
}
