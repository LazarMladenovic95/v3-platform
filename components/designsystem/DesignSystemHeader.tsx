"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TabbedNavigation } from "@/components/ui";

const navItems = [
  { href: "/designsystem", label: "Overview" },
  { href: "/designsystem/typography", label: "Typography" },
  { href: "/designsystem/colors", label: "Color" },
  { href: "/designsystem/styles", label: "Styles" },
  { href: "/designsystem/accessibility", label: "Accessibility" },
  { href: "/designsystem/components", label: "Components" },
] as const;

export function DesignSystemHeader() {
  const pathname = usePathname();
  const items = navItems.map((item) => ({
    ...item,
    active: pathname === item.href || (item.href !== "/designsystem" && pathname.startsWith(item.href)),
  }));

  return (
    <header className="h-[70px] w-full border-b border-border bg-surface">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between gap-6 px-6 md:px-16 lg:px-20">
        <Link
          href="/designsystem"
          className="inline-flex shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <Image
            src="/expeerly-logo.svg"
            alt="Expeerly logo"
            width={150}
            height={40}
            priority
            className="h-[40px] w-[150px]"
          />
        </Link>
        <TabbedNavigation aria-label="Design system" items={items} />
      </div>
    </header>
  );
}
