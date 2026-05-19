"use client";

import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@/components/ui/atoms/Icon";
import { RightMenuItem } from "@/components/ui/molecules/RightMenuItem";
import {
  appNavDesignSystemChildren,
  appNavDesignSystemGroup,
  appNavLogoutItem,
  appNavPrimaryItems,
} from "@/lib/app-nav-config";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export interface RightMenuProps {
  className?: string;
  onItemClick?: () => void;
}

export function RightMenu({ className, onItemClick }: RightMenuProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (href: string) => {
    onItemClick?.();
    router.push(href);
  };

  const handlePlaceholder = () => {
    onItemClick?.();
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
        {appNavPrimaryItems.map((item) => (
          <RightMenuItem
            key={item.id}
            icon={<Icon name={item.icon} size="xl" />}
            label={t(item.labelKey)}
            onClick={handlePlaceholder}
          />
        ))}

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

        <RightMenuItem
          icon={<Icon name={appNavLogoutItem.icon} size="xl" />}
          label={t(appNavLogoutItem.labelKey)}
          onClick={handlePlaceholder}
        />
      </div>
    </aside>
  );
}
