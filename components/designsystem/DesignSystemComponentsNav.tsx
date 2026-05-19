"use client";

import {
  Activity,
  CreditCard,
  Funnel,
  Image as ImageIcon,
  Images,
  Inbox,
  LayoutGrid,
  List,
  ListCollapse,
  ListOrdered,
  LoaderCircle,
  MessageSquare,
  MousePointer2,
  Navigation,
  PanelsTopLeft,
  Table2,
  Tags,
  TextCursorInput,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { VerticalNavigation } from "@/components/ui";

const links = [
  { href: "/designsystem/components", label: "Overview", icon: <LayoutGrid className="h-4 w-4" /> },
  { href: "/designsystem/components/accordions", label: "Accordions", icon: <ListCollapse className="h-4 w-4" /> },
  { href: "/designsystem/components/assets", label: "Assets", icon: <Images className="h-4 w-4" /> },
  { href: "/designsystem/components/badges-and-tags", label: "Badges & tags", icon: <Tags className="h-4 w-4" /> },
  { href: "/designsystem/components/buttons", label: "Buttons", icon: <MousePointer2 className="h-4 w-4" /> },
  { href: "/designsystem/components/cards", label: "Cards", icon: <CreditCard className="h-4 w-4" /> },
  { href: "/designsystem/components/carousels", label: "Carousels", icon: <PanelsTopLeft className="h-4 w-4" /> },
  { href: "/designsystem/components/dialog-windows", label: "Dialogs and popovers", icon: <PanelsTopLeft className="h-4 w-4" /> },
  { href: "/designsystem/components/empty-states", label: "Empty states", icon: <Inbox className="h-4 w-4" /> },
  { href: "/designsystem/components/feedback", label: "Feedback", icon: <MessageSquare className="h-4 w-4" /> },
  { href: "/designsystem/components/filters-and-sorting", label: "Filters & sorting", icon: <Funnel className="h-4 w-4" /> },
  { href: "/designsystem/components/iconography", label: "Iconography", icon: <ImageIcon className="h-4 w-4" /> },
  { href: "/designsystem/components/inputs", label: "Inputs", icon: <TextCursorInput className="h-4 w-4" /> },
  { href: "/designsystem/components/lists", label: "Lists", icon: <List className="h-4 w-4" /> },
  { href: "/designsystem/components/loaders-and-skeletons", label: "Loaders & skeletons", icon: <LoaderCircle className="h-4 w-4" /> },
  { href: "/designsystem/components/navigation", label: "Navigation", icon: <Navigation className="h-4 w-4" /> },
  { href: "/designsystem/components/pagination", label: "Pagination", icon: <ListOrdered className="h-4 w-4" /> },
  { href: "/designsystem/components/progress", label: "Progress", icon: <Activity className="h-4 w-4" /> },
  { href: "/designsystem/components/tables-and-rows", label: "Tables & rows", icon: <Table2 className="h-4 w-4" /> },
] as const;

export function DesignSystemComponentsNav() {
  const pathname = usePathname();
  const items = links.map((item) => ({
    ...item,
    active: pathname === item.href,
  }));

  return (
    <VerticalNavigation
      items={items}
      aria-label="Components sections"
      className="w-full"
    />
  );
}
