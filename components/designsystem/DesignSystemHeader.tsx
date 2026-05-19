"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TabbedNavigation } from "@/components/ui";
import { t } from "@/lib/i18n";

const navItems = [
  { href: "/designsystem", labelKey: "overview" },
  { href: "/designsystem/typography", labelKey: "typography" },
  { href: "/designsystem/colors", labelKey: "color" },
  { href: "/designsystem/styles", labelKey: "styles" },
  { href: "/designsystem/accessibility", labelKey: "accessibility" },
  { href: "/designsystem/components", labelKey: "components" },
] as const;

export function DesignSystemHeader() {
  const pathname = usePathname();
  const items = navItems.map((item) => ({
    href: item.href,
    label: t(`designsystem.header.nav.${item.labelKey}`),
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
            alt={t("designsystem.header.logoAlt")}
            width={150}
            height={40}
            priority
            className="h-[40px] w-[150px]"
          />
        </Link>
        <TabbedNavigation aria-label={t("designsystem.header.ariaLabel")} items={items} />
      </div>
    </header>
  );
}