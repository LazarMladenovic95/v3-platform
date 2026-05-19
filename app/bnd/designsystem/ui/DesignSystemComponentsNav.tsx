"use client";

import { usePathname } from "next/navigation";
import { Icon, type IconName } from "@/components/ui/atoms/Icon";
import { VerticalNavigation } from "@/components/ui";
import { t } from "@/lib/i18n";

const links: {
  href: string;
  sectionKey:
    | "overview"
    | "accordions"
    | "assets"
    | "badgesAndTags"
    | "buttons"
    | "cards"
    | "carousels"
    | "dialogWindows"
    | "emptyStates"
    | "feedback"
    | "filtersAndSorting"
    | "iconography"
    | "inputs"
    | "lists"
    | "loadersAndSkeletons"
    | "navigation"
    | "pagination"
    | "progress"
    | "tablesAndRows";
  icon: IconName;
}[] = [
  { href: "/bnd/designsystem/components", sectionKey: "overview", icon: "layout-grid" },
  { href: "/bnd/designsystem/components/accordions", sectionKey: "accordions", icon: "list-collapse" },
  { href: "/bnd/designsystem/components/assets", sectionKey: "assets", icon: "images" },
  { href: "/bnd/designsystem/components/badges-and-tags", sectionKey: "badgesAndTags", icon: "tags" },
  { href: "/bnd/designsystem/components/buttons", sectionKey: "buttons", icon: "mouse-pointer2" },
  { href: "/bnd/designsystem/components/cards", sectionKey: "cards", icon: "credit-card" },
  { href: "/bnd/designsystem/components/carousels", sectionKey: "carousels", icon: "panels-top-left" },
  { href: "/bnd/designsystem/components/dialog-windows", sectionKey: "dialogWindows", icon: "panels-top-left" },
  { href: "/bnd/designsystem/components/empty-states", sectionKey: "emptyStates", icon: "inbox" },
  { href: "/bnd/designsystem/components/feedback", sectionKey: "feedback", icon: "message-square" },
  { href: "/bnd/designsystem/components/filters-and-sorting", sectionKey: "filtersAndSorting", icon: "funnel" },
  { href: "/bnd/designsystem/components/iconography", sectionKey: "iconography", icon: "image" },
  { href: "/bnd/designsystem/components/inputs", sectionKey: "inputs", icon: "text-cursor-input" },
  { href: "/bnd/designsystem/components/lists", sectionKey: "lists", icon: "list" },
  { href: "/bnd/designsystem/components/loaders-and-skeletons", sectionKey: "loadersAndSkeletons", icon: "loader-circle" },
  { href: "/bnd/designsystem/components/navigation", sectionKey: "navigation", icon: "navigation" },
  { href: "/bnd/designsystem/components/pagination", sectionKey: "pagination", icon: "list-ordered" },
  { href: "/bnd/designsystem/components/progress", sectionKey: "progress", icon: "activity" },
  { href: "/bnd/designsystem/components/tables-and-rows", sectionKey: "tablesAndRows", icon: "table2" },
];

export function DesignSystemComponentsNav() {
  const pathname = usePathname();
  const items = links.map((item) => ({
    href: item.href,
    label: t(`designsystem.componentsNav.sections.${item.sectionKey}`),
    icon: <Icon name={item.icon} size="md" />,
    active: pathname === item.href,
  }));

  return (
    <VerticalNavigation
      items={items}
      aria-label={t("designsystem.componentsNav.ariaLabel")}
      className="w-full"
    />
  );
}
