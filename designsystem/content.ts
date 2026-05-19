import { t } from "@/lib/i18n";

export const designSystemSectionSlugs = [
  "accordions",
  "assets",
  "badgesAndTags",
  "buttons",
  "cards",
  "carousels",
  "dialogWindows",
  "emptyStates",
  "feedback",
  "filtersAndSorting",
  "iconography",
  "inputs",
  "lists",
  "loadersAndSkeletons",
  "navigation",
  "pagination",
  "progress",
  "tablesAndRows",
] as const;

export type DesignSystemSectionSlug = (typeof designSystemSectionSlugs)[number];

const sectionPaths: Record<DesignSystemSectionSlug, string> = {
  accordions: "/designsystem/components/accordions",
  assets: "/designsystem/components/assets",
  badgesAndTags: "/designsystem/components/badges-and-tags",
  buttons: "/designsystem/components/buttons",
  cards: "/designsystem/components/cards",
  carousels: "/designsystem/components/carousels",
  dialogWindows: "/designsystem/components/dialog-windows",
  emptyStates: "/designsystem/components/empty-states",
  feedback: "/designsystem/components/feedback",
  filtersAndSorting: "/designsystem/components/filters-and-sorting",
  iconography: "/designsystem/components/iconography",
  inputs: "/designsystem/components/inputs",
  lists: "/designsystem/components/lists",
  loadersAndSkeletons: "/designsystem/components/loaders-and-skeletons",
  navigation: "/designsystem/components/navigation",
  pagination: "/designsystem/components/pagination",
  progress: "/designsystem/components/progress",
  tablesAndRows: "/designsystem/components/tables-and-rows",
};

export function getDesignSystemHubSections() {
  return designSystemSectionSlugs.map((slug) => ({
    href: sectionPaths[slug],
    title: t(`designsystem.hub.sections.${slug}.title`),
    description: t(`designsystem.hub.sections.${slug}.description`),
  }));
}

export function designSystemPageTitle(sectionName: string) {
  return t("designsystem.meta.pageTitle", { section: sectionName });
}
