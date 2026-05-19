"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
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
  const [isDesignSystemOpen, setIsDesignSystemOpen] = useState(() => pathname.startsWith("/bnd/designsystem"));

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
      className={cn(
        "flex min-h-[104px] w-[273px] flex-col items-start gap-2 rounded-[12px] bg-surface p-2 shadow-[0px_4px_8px_rgba(0,0,0,0.08)]",
        className,
      )}
    >
      <div className="flex w-full flex-col gap-2">
        {appNavPrimaryItems.map((item) => (
          <RightMenuItem
            key={item.id}
            icon={<Icon name={item.icon} className="h-6 w-6" aria-hidden />}
            label={t(item.labelKey)}
            onClick={handlePlaceholder}
          />
        ))}

        <RightMenuItem
          icon={<Icon name={appNavDesignSystemGroup.icon} className="h-6 w-6" aria-hidden />}
          label={t(appNavDesignSystemGroup.labelKey)}
          onClick={() => setIsDesignSystemOpen((open) => !open)}
        />

        {isDesignSystemOpen
          ? appNavDesignSystemChildren.map((item) => (
              <RightMenuItem
                key={item.id}
                label={t(item.labelKey)}
                nested
                onClick={() => item.href && handleNavigate(item.href)}
              />
            ))
          : null}

        <RightMenuItem
          icon={<Icon name={appNavLogoutItem.icon} className="h-6 w-6" aria-hidden />}
          label={t(appNavLogoutItem.labelKey)}
          onClick={handlePlaceholder}
        />
      </div>
    </aside>
  );
}
