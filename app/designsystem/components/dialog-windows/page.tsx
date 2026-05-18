import type { Metadata } from "next";
import { DialogWindowsShowcase } from "@/components/designsystem/showcase/dialog-windows-showcase";

export const metadata: Metadata = {
  title: "Dialogs and popovers — Design system",
};

export default function DialogWindowsComponentsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Dialogs and popovers</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Modal windows and contextual overlays for confirmations, decisions, and lightweight supporting content.
      </p>

      <div className="mt-6">
        <DialogWindowsShowcase />
      </div>
    </>
  );
}
