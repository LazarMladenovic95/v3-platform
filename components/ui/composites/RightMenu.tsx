"use client";

import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@/components/ui/atoms/Icon";
import { RightMenuItem } from "@/components/ui/molecules/RightMenuItem";
import {
  appNavDesignSystemChildren,
  appNavDesignSystemGroup,
  appNavLogoutItem,
  appNavPrimaryItems,
  bndNavItems,
  companyNavItems,
  reviewerNavItems,
  resolveRightMenuVariant,
  type AppNavItemConfig,
  type RightMenuVariant,
} from "@/lib/app-nav-config";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export interface RightMenuProps {
  className?: string;
  onItemClick?: () => void;
  variant?: RightMenuVariant;
}

function NavItemsList({
  items,
  onNavigate,
  onPlaceholder,
}: {
  items: readonly AppNavItemConfig[];
  onNavigate: (href: string) => void;
  onPlaceholder: () => void;
}) {
  return (
    <>
      {items.map((item) => (
        <RightMenuItem
          key={item.id}
          icon={<Icon name={item.icon} size="xl" />}
          label={t(item.labelKey)}
          onClick={() => {
            if (item.href) {
              onNavigate(item.href);
              return;
            }
            onPlaceholder();
          }}
        />
      ))}
    </>
  );
}

export function RightMenu({ className, onItemClick, variant }: RightMenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const resolvedVariant = variant ?? resolveRightMenuVariant(pathname);

  const handleNavigate = (href: string) => {
    onItemClick?.();
    router.push(href);
  };

  const handlePlaceholder = () => {
    onItemClick?.();
  };

  const handleLogout = () => {
    onItemClick?.();
    router.push(appNavLogoutItem.href ?? "/");
  };

  return (
    <aside
      id="right-menu"
      aria-label={t("app.nav.ariaLabel")}
      className={cn(
        "flex min-h-menu w-menu flex-col items-start gap-2 rounded-lg bg-surface p-2 shadow-md",
        className,
      )}
    >
      <div className="flex w-full flex-col gap-2">
        {resolvedVariant === "company" ? (
          <NavItemsList
            items={companyNavItems}
            onNavigate={handleNavigate}
            onPlaceholder={handlePlaceholder}
          />
        ) : null}

        {resolvedVariant === "reviewer" ? (
          <NavItemsList
            items={reviewerNavItems}
            onNavigate={handleNavigate}
            onPlaceholder={handlePlaceholder}
          />
        ) : null}

        {resolvedVariant === "bnd" ? (
          <>
            <NavItemsList
              items={bndNavItems}
              onNavigate={handleNavigate}
              onPlaceholder={handlePlaceholder}
            />

            <RightMenuItem
              icon={<Icon name={appNavDesignSystemGroup.icon} size="xl" />}
              label={t(appNavDesignSystemGroup.labelKey)}
              defaultSubmenuOpen={pathname.startsWith("/bnd/designsystem")}
              submenu={appNavDesignSystemChildren.map((item) => ({
                id: item.id,
                label: t(item.labelKey),
                onClick: () => handleNavigate(item.href),
              }))}
            />
          </>
        ) : null}

        {resolvedVariant === "default" ? (
          <>
            <NavItemsList
              items={appNavPrimaryItems}
              onNavigate={handleNavigate}
              onPlaceholder={handlePlaceholder}
            />

            <RightMenuItem
              icon={<Icon name={appNavDesignSystemGroup.icon} size="xl" />}
              label={t(appNavDesignSystemGroup.labelKey)}
              defaultSubmenuOpen={pathname.startsWith("/bnd/designsystem")}
              submenu={appNavDesignSystemChildren.map((item) => ({
                id: item.id,
                label: t(item.labelKey),
                onClick: () => handleNavigate(item.href),
              }))}
            />
          </>
        ) : null}

        <RightMenuItem
          icon={<Icon name={appNavLogoutItem.icon} size="xl" />}
          label={t(appNavLogoutItem.labelKey)}
          onClick={handleLogout}
        />
      </div>
    </aside>
  );
}
