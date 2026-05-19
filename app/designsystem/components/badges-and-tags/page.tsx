import type { Metadata } from "next";
import { BadgesShowcase } from "@/components/designsystem/showcase/badges-showcase";

export const metadata: Metadata = {
  title: "Badges & tags — Design system",
};

export default function DesignSystemBadgesPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Badges & tags</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-title-subtle">
        Compact status and identity treatments. Badges communicate state; tags represent removable labels.
      </p>
      <div className="mt-6">
        <BadgesShowcase />
      </div>
    </>
  );
}
