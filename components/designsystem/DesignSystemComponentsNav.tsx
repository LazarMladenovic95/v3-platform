"use client";

import {
  ActivityIcon,
  CreditCardIcon,
  FunnelIcon,
  ImageIcon,
  ImagesIcon,
  InboxIcon,
  LayoutGridIcon,
  ListCollapseIcon,
  ListIcon,
  ListOrderedIcon,
  LoaderCircleIcon,
  MessageSquareIcon,
  MousePointer2Icon,
  NavigationIcon,
  PanelsTopLeftIcon,
  Table2Icon,
  TagsIcon,
  TextCursorInputIcon,
} from "@/components/ui/icons";
import { usePathname } from "next/navigation";
import { VerticalNavigation } from "@/components/ui";
import { t } from "@/lib/i18n";

const links = [
  { href: "/designsystem/components", sectionKey: "overview", icon: <LayoutGridIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/accordions", sectionKey: "accordions", icon: <ListCollapseIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/assets", sectionKey: "assets", icon: <ImagesIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/badges-and-tags", sectionKey: "badgesAndTags", icon: <TagsIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/buttons", sectionKey: "buttons", icon: <MousePointer2Icon className="h-4 w-4" /> },
  { href: "/designsystem/components/cards", sectionKey: "cards", icon: <CreditCardIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/carousels", sectionKey: "carousels", icon: <PanelsTopLeftIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/dialog-windows", sectionKey: "dialogWindows", icon: <PanelsTopLeftIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/empty-states", sectionKey: "emptyStates", icon: <InboxIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/feedback", sectionKey: "feedback", icon: <MessageSquareIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/filters-and-sorting", sectionKey: "filtersAndSorting", icon: <FunnelIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/iconography", sectionKey: "iconography", icon: <ImageIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/inputs", sectionKey: "inputs", icon: <TextCursorInputIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/lists", sectionKey: "lists", icon: <ListIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/loaders-and-skeletons", sectionKey: "loadersAndSkeletons", icon: <LoaderCircleIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/navigation", sectionKey: "navigation", icon: <NavigationIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/pagination", sectionKey: "pagination", icon: <ListOrderedIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/progress", sectionKey: "progress", icon: <ActivityIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/tables-and-rows", sectionKey: "tablesAndRows", icon: <Table2Icon className="h-4 w-4" /> },
] as const;

export function DesignSystemComponentsNav() {
  const pathname = usePathname();
  const items = links.map((item) => ({
    href: item.href,
    label: t(`designsystem.componentsNav.sections.${item.sectionKey}`),
    icon: item.icon,
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
