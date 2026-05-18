import { Archive, BarChart3, Download, FileText, FolderOpen } from "lucide-react";
import {
  Breadcrumbs,
  GhostNeutral,
  TabbedNavigation,
  TabbedNavigationMenuItem,
  VerticalNavigation,
  VerticalNavigationMenuItem,
} from "@/components/ui";

const tabs = [
  { href: "/designsystem/components/navigation#overview", label: "Overview" },
  { href: "/designsystem/components/navigation#activity", label: "Activity", active: true },
  { href: "/designsystem/components/navigation#settings", label: "Settings" },
  { href: "/designsystem/components/navigation#disabled", label: "Disabled", disabled: true },
] as const;

const breadcrumbItems = [
  { href: "/designsystem", label: "Design system" },
  { href: "/designsystem/components", label: "Components" },
  { label: "Navigation" },
] as const;

const verticalItems = [
  {
    href: "/designsystem/components/navigation#summary",
    label: "Summary",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    href: "/designsystem/components/navigation#reports",
    label: "Reports",
    icon: <BarChart3 className="h-4 w-4" />,
    active: true,
  },
  {
    href: "/designsystem/components/navigation#exports",
    label: "Exports",
    icon: <Download className="h-4 w-4" />,
  },
  {
    href: "/designsystem/components/navigation#archived",
    label: "Archived",
    icon: <Archive className="h-4 w-4" />,
    disabled: true,
  },
] as const;

const menuItemClassName =
  "h-9 w-full justify-start text-body-small font-normal text-foreground-title-subtle hover:bg-surface-hover hover:text-secondary active:bg-surface-active active:text-secondary";
const selectedMenuItemClassName =
  "h-9 w-full justify-start bg-surface-active text-body-small font-bold text-foreground-title hover:bg-surface-active hover:text-foreground-title active:bg-surface-active active:text-foreground-title";

export function NavigationShowcase() {
  return (
    <div className="grid gap-6">
      <div className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Tabbed navigation</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use tabs for peer sections within the same page or surface. The active item uses a primary underline
          and title text.
        </p>
        <div className="mt-4">
          <TabbedNavigation aria-label="Example sections" items={tabs} />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Tabbed navigation menu item</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use a down caret when tapping a tab opens a menu of related views or filters.
        </p>
        <div className="mt-4 flex gap-1 overflow-x-auto">
          <TabbedNavigation aria-label="Example tab menu base" items={tabs.slice(0, 2)} />
          <TabbedNavigationMenuItem label="More">
            <div className="flex flex-col gap-0.5" role="menu">
              <GhostNeutral type="button" size="small" className={menuItemClassName} role="menuitem">
                Product reviews
              </GhostNeutral>
              <GhostNeutral type="button" size="small" className={selectedMenuItemClassName} role="menuitem">
                Review requests
              </GhostNeutral>
              <GhostNeutral type="button" size="small" className={menuItemClassName} role="menuitem">
                Archived reviews
              </GhostNeutral>
            </div>
          </TabbedNavigationMenuItem>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Breadcrumbs</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use breadcrumbs for hierarchical page context. The current page is bold and non-interactive.
        </p>
        <div className="mt-4">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Vertical navigation</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use vertical navigation for sidebars or secondary page sections. The active item uses a soft
          selected surface, and default items use foreground body text.
        </p>
        <div className="mt-4 max-w-xs">
          <VerticalNavigation aria-label="Example sidebar sections" items={verticalItems} />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Vertical navigation menu item</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use a right caret when tapping the navigation item opens a menu instead of navigating immediately.
        </p>
        <div className="mt-4 max-w-xs">
          <VerticalNavigationMenuItem
            label="Collections"
            icon={<FolderOpen className="h-4 w-4" />}
          >
            <div className="flex flex-col gap-0.5" role="menu">
              <GhostNeutral type="button" size="small" className={menuItemClassName} role="menuitem">
                New arrivals
              </GhostNeutral>
              <GhostNeutral type="button" size="small" className={selectedMenuItemClassName} role="menuitem">
                Best sellers
              </GhostNeutral>
              <GhostNeutral type="button" size="small" className={menuItemClassName} role="menuitem">
                Reviews queue
              </GhostNeutral>
            </div>
          </VerticalNavigationMenuItem>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Combined page header</h2>
        <div className="mt-4 rounded-lg border border-border bg-background p-4">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="mt-4">
            <h3 className="text-title-3 text-foreground-title">Navigation patterns</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Breadcrumbs sit above page context. Tabs sit below the page heading when switching between local
              views.
            </p>
          </div>
          <TabbedNavigation aria-label="Example page sections" items={tabs} className="mt-5" />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Sidebar layout</h2>
        <div className="mt-4 grid gap-4 rounded-lg border border-border bg-background p-4 md:grid-cols-[220px_1fr]">
          <VerticalNavigation aria-label="Example sidebar" items={verticalItems} />
          <div className="rounded-lg border border-border bg-surface p-4">
            <Breadcrumbs items={breadcrumbItems} />
            <h3 className="mt-4 text-title-3 text-foreground-title">Reports</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Vertical navigation anchors a local sidebar while breadcrumbs preserve page hierarchy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
