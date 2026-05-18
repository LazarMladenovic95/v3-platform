import type { Metadata } from "next";
import { AccordionsShowcase } from "@/components/designsystem/showcase/accordions-showcase";

export const metadata: Metadata = {
  title: "Accordions — Design system",
};

export default function AccordionsComponentsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Accordions</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Expandable disclosure patterns for progressive detail and compact page sections.
      </p>

      <div className="mt-6">
        <AccordionsShowcase />
      </div>
    </>
  );
}
