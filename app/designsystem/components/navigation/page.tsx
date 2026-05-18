import type { Metadata } from "next";
import { NavigationShowcase } from "@/components/designsystem/showcase/navigation-showcase";

export const metadata: Metadata = {
  title: "Navigation — Design system",
};

export default function NavigationComponentsPage() {
  return (
    <>
      <h1 className="text-title-2 text-foreground-title">Navigation</h1>
      <p className="mt-2 max-w-2xl text-body-regular text-foreground-muted">
        Tabbed navigation and breadcrumbs for local section switching and hierarchical page context.
      </p>

      <div className="mt-6">
        <NavigationShowcase />
      </div>
    </>
  );
}
