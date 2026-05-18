"use client";

import {
  CreditCard,
  Image as ImageIcon,
  LayoutGrid,
  MessageSquare,
  MousePointer2,
  Navigation,
  Palette,
  Table2,
  Tags,
  TextCursorInput,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { VerticalNavigation } from "@/components/ui";

const links = [
  { href: "/designsystem/components", label: "Overview", icon: <LayoutGrid className="h-4 w-4" /> },
  { href: "/designsystem/components/buttons", label: "Buttons", icon: <MousePointer2 className="h-4 w-4" /> },
  { href: "/designsystem/components/inputs", label: "Inputs", icon: <TextCursorInput className="h-4 w-4" /> },
  { href: "/designsystem/components/badges-and-tags", label: "Badges & tags", icon: <Tags className="h-4 w-4" /> },
  { href: "/designsystem/components/feedback", label: "Feedback", icon: <MessageSquare className="h-4 w-4" /> },
  { href: "/designsystem/components/navigation", label: "Navigation", icon: <Navigation className="h-4 w-4" /> },
  { href: "/designsystem/components/styles", label: "Styles", icon: <Palette className="h-4 w-4" /> },
  { href: "/designsystem/components/cards", label: "Cards", icon: <CreditCard className="h-4 w-4" /> },
  { href: "/designsystem/components/tables-and-rows", label: "Tables & rows", icon: <Table2 className="h-4 w-4" /> },
  { href: "/designsystem/components/iconography", label: "Iconography", icon: <ImageIcon className="h-4 w-4" /> },
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
