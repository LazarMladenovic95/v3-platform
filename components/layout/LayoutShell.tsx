import { AppFooter } from "@/components/layout/AppFooter";
import { AppHeader } from "@/components/ui/composites/AppHeader";
import { applyRequestLocale } from "@/lib/i18n-request";
import { buildPublicMenuCatalog } from "@/lib/public-menu-data.server";
import type { ReactNode } from "react";

export interface LayoutShellProps {
  children: ReactNode;
}

/**
 * Global layout structure only (chrome + main slot). No route or page meaning.
 * Page layout behavior is declared via PageCanvas (app routes only, not design system).
 */
export async function LayoutShell({ children }: LayoutShellProps) {
  const locale = await applyRequestLocale();
  const publicMenuCatalog = buildPublicMenuCatalog(locale);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AppHeader publicMenuCatalog={publicMenuCatalog} />
      <main className="min-w-0 flex-1">{children}</main>
      <AppFooter />
    </div>
  );
}
