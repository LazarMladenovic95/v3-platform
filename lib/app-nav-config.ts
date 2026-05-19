import type { IconName } from "@/components/ui/icons";

export type AppNavItemConfig = {
  id: string;
  labelKey:
    | "app.nav.dashboard"
    | "app.nav.manageBrandAssets"
    | "app.nav.distributionAnalytics"
    | "app.nav.adminPortal"
    | "app.nav.accountSettings"
    | "app.nav.designSystem"
    | "app.nav.designSystemOverview"
    | "app.nav.designSystemTypography"
    | "app.nav.designSystemColor"
    | "app.nav.designSystemStyles"
    | "app.nav.designSystemAccessibility"
    | "app.nav.designSystemComponents"
    | "app.nav.logout";
  icon: IconName;
  href: string | null;
};

export const appNavPrimaryItems: AppNavItemConfig[] = [
  { id: "dashboard", labelKey: "app.nav.dashboard", icon: "layout-dashboard", href: null },
  {
    id: "manage-brand-assets",
    labelKey: "app.nav.manageBrandAssets",
    icon: "shopping-bag",
    href: null,
  },
  {
    id: "distribution-analytics",
    labelKey: "app.nav.distributionAnalytics",
    icon: "bar-chart3",
    href: null,
  },
  { id: "admin-portal", labelKey: "app.nav.adminPortal", icon: "user", href: null },
  {
    id: "account-settings",
    labelKey: "app.nav.accountSettings",
    icon: "sliders-horizontal",
    href: null,
  },
];

export type AppNavLinkConfig = {
  id: string;
  labelKey: AppNavItemConfig["labelKey"];
  href: string;
};

export const appNavDesignSystemChildren: AppNavLinkConfig[] = [
  { id: "ds-overview", labelKey: "app.nav.designSystemOverview", href: "/bnd/designsystem" },
  { id: "ds-typography", labelKey: "app.nav.designSystemTypography", href: "/bnd/designsystem/typography" },
  { id: "ds-color", labelKey: "app.nav.designSystemColor", href: "/bnd/designsystem/colors" },
  { id: "ds-styles", labelKey: "app.nav.designSystemStyles", href: "/bnd/designsystem/styles" },
  { id: "ds-accessibility", labelKey: "app.nav.designSystemAccessibility", href: "/bnd/designsystem/accessibility" },
  { id: "ds-components", labelKey: "app.nav.designSystemComponents", href: "/bnd/designsystem/components" },
];

export const appNavDesignSystemGroup = {
  id: "design-system",
  labelKey: "app.nav.designSystem" as const,
  icon: "palette" as const satisfies IconName,
  children: appNavDesignSystemChildren,
};

export const appNavLogoutItem: AppNavItemConfig = {
  id: "logout",
  labelKey: "app.nav.logout",
  icon: "log-out",
  href: null,
};
