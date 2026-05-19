import type { Metadata } from "next";
import { ButtonsShowcase } from "@/components/designsystem/showcase/buttons-showcase";

export const metadata: Metadata = {
  title: "Buttons — Design system",
};

export default function DesignSystemButtonsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Buttons</h1>
      <div className="mt-6">
        <ButtonsShowcase />
      </div>
    </>
  );
}
