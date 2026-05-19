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
  accordions: "/bnd/designsystem/components/accordions",
  assets: "/bnd/designsystem/components/assets",
  badgesAndTags: "/bnd/designsystem/components/badges-and-tags",
  buttons: "/bnd/designsystem/components/buttons",
  cards: "/bnd/designsystem/components/cards",
  carousels: "/bnd/designsystem/components/carousels",
  dialogWindows: "/bnd/designsystem/components/dialog-windows",
  emptyStates: "/bnd/designsystem/components/empty-states",
  feedback: "/bnd/designsystem/components/feedback",
  filtersAndSorting: "/bnd/designsystem/components/filters-and-sorting",
  iconography: "/bnd/designsystem/components/iconography",
  inputs: "/bnd/designsystem/components/inputs",
  lists: "/bnd/designsystem/components/lists",
  loadersAndSkeletons: "/bnd/designsystem/components/loaders-and-skeletons",
  navigation: "/bnd/designsystem/components/navigation",
  pagination: "/bnd/designsystem/components/pagination",
  progress: "/bnd/designsystem/components/progress",
  tablesAndRows: "/bnd/designsystem/components/tables-and-rows",
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
