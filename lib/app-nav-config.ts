import type { IconName } from "@/components/ui/icons";
import type { LocaleId } from "@/locales/index";

export type PublicNavLabelKey =
  | "app.nav.public.learnMore"
  | "app.nav.public.submitVideoReview"
  | "app.nav.public.forBrands"
  | "app.nav.public.forRetailers"
  | "app.nav.public.brands"
  | "app.nav.public.categories"
  | "app.nav.public.language"
  | "app.nav.public.locale.en"
  | "app.nav.public.locale.de"
  | "app.nav.public.locale.fr"
  | "app.nav.public.locale.it";

export type AppNavLabelKey =
  | PublicNavLabelKey
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
  | "app.nav.logout"
  | "app.nav.companies.seeAllVideoReviews"
  | "app.nav.companies.manageReviewCampaigns"
  | "app.nav.companies.credits"
  | "app.nav.reviewer.myReviews"
  | "app.nav.reviewer.runningCampaigns";

export type AppNavItemConfig = {
  id: string;
  labelKey: AppNavLabelKey;
  icon: IconName;
  href: string | null;
};

export type RightMenuVariant = "public" | "default" | "company" | "reviewer" | "bnd";

export function isPublicSitePath(pathname: string): boolean {
  if (pathname === "/") return true;
  if (pathname.startsWith("/video-reviews")) return true;
  if (pathname.startsWith("/sign-in")) return true;
  return false;
}

export function resolveRightMenuVariant(pathname: string): RightMenuVariant {
  if (isPublicSitePath(pathname)) return "public";
  if (pathname.startsWith("/company")) return "company";
  if (pathname.startsWith("/reviewer")) return "reviewer";
  if (pathname.startsWith("/bnd")) return "bnd";
  return "default";
}

export type PublicNavLinkConfig = {
  id: string;
  labelKey: PublicNavLabelKey;
  icon: IconName;
  href: string;
  external?: boolean;
};

export const PUBLIC_MENU_EXTERNAL_LINKS = {
  learnMore: "https://www.get.expeerly.com/",
  forBrands: "https://www.get.expeerly.com/for-brands",
  forRetailers: "https://www.get.expeerly.com/for-retailers",
} as const;

export const publicNavPrimaryLinks: PublicNavLinkConfig[] = [
  {
    id: "learn-more",
    labelKey: "app.nav.public.learnMore",
    icon: "info",
    href: PUBLIC_MENU_EXTERNAL_LINKS.learnMore,
    external: true,
  },
  {
    id: "submit-video-review",
    labelKey: "app.nav.public.submitVideoReview",
    icon: "play-square",
    href: "/reviewer/onboarding",
  },
  {
    id: "for-brands",
    labelKey: "app.nav.public.forBrands",
    icon: "tag",
    href: PUBLIC_MENU_EXTERNAL_LINKS.forBrands,
    external: true,
  },
  {
    id: "for-retailers",
    labelKey: "app.nav.public.forRetailers",
    icon: "shopping-cart",
    href: PUBLIC_MENU_EXTERNAL_LINKS.forRetailers,
    external: true,
  },
];

export const publicNavCatalogGroups = [
  { id: "brands", labelKey: "app.nav.public.brands" as const, icon: "shopping-bag" as const satisfies IconName },
  {
    id: "categories",
    labelKey: "app.nav.public.categories" as const,
    icon: "layout-grid" as const satisfies IconName,
  },
] as const;

export const publicNavLocaleOptions: { id: LocaleId; labelKey: PublicNavLabelKey }[] = [
  { id: "en", labelKey: "app.nav.public.locale.en" },
  { id: "de", labelKey: "app.nav.public.locale.de" },
  { id: "fr", labelKey: "app.nav.public.locale.fr" },
  { id: "it", labelKey: "app.nav.public.locale.it" },
];

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

/** Company app menu when pathname is under `/company`. */
export const companyNavItems: AppNavItemConfig[] = [
  {
    id: "see-all-video-reviews",
    labelKey: "app.nav.companies.seeAllVideoReviews",
    icon: "play-square",
    href: "/company/all-reviews",
  },
  {
    id: "manage-review-campaigns",
    labelKey: "app.nav.companies.manageReviewCampaigns",
    icon: "megaphone",
    href: "/company/campaigns",
  },
  {
    id: "manage-brand-assets",
    labelKey: "app.nav.manageBrandAssets",
    icon: "tag",
    href: "/company/brand-assets",
  },
  {
    id: "distribution-analytics",
    labelKey: "app.nav.distributionAnalytics",
    icon: "bar-chart3",
    href: "/company/analytics",
  },
  {
    id: "account-settings",
    labelKey: "app.nav.accountSettings",
    icon: "sliders-horizontal",
    href: "/company/account-settings",
  },
  {
    id: "credits",
    labelKey: "app.nav.companies.credits",
    icon: "banknote",
    href: "/company/credits",
  },
];

export const reviewerNavItems: AppNavItemConfig[] = [
  {
    id: "my-reviews",
    labelKey: "app.nav.reviewer.myReviews",
    icon: "play-square",
    href: "/reviewer/myreviews",
  },
  {
    id: "running-campaigns",
    labelKey: "app.nav.reviewer.runningCampaigns",
    icon: "megaphone",
    href: "/reviewer/campaigns",
  },
  {
    id: "account-settings",
    labelKey: "app.nav.accountSettings",
    icon: "sliders-horizontal",
    href: "/reviewer/account-settings",
  },
];

/** Admin / internal app menu when pathname is under `/bnd` (excludes design system docs). */
export const bndNavItems: AppNavItemConfig[] = [
  { id: "dashboard", labelKey: "app.nav.dashboard", icon: "layout-dashboard", href: "/bnd/dashboard" },
  {
    id: "manage-brand-assets",
    labelKey: "app.nav.manageBrandAssets",
    icon: "shopping-bag",
    href: "/bnd/brand-assets",
  },
  {
    id: "distribution-analytics",
    labelKey: "app.nav.distributionAnalytics",
    icon: "bar-chart3",
    href: "/bnd/analytics",
  },
  { id: "admin-portal", labelKey: "app.nav.adminPortal", icon: "user", href: "/bnd/admin-portal" },
  {
    id: "account-settings",
    labelKey: "app.nav.accountSettings",
    icon: "sliders-horizontal",
    href: "/bnd/account-settings",
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
  href: "/",
};
