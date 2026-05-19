"use client";

import { cn } from "@/lib/utils";
import { NavLink } from "../../atoms/NavLink";

export type TabbedNavigationItem = {
  href: string;
  label: string;
  active?: boolean;
  disabled?: boolean;
};

export interface TabbedNavigationProps {
  items: readonly TabbedNavigationItem[];
  "aria-label": string;
  className?: string;
}

export function TabbedNavigation({
  items,
  "aria-label": ariaLabel,
  className,
}: TabbedNavigationProps) {
  return (
    <nav aria-label={ariaLabel} className={className}>
      <div className="flex gap-1 overflow-x-auto">
        {items.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            variant="tab"
            active={item.active}
            disabled={item.disabled}
          >
            <span
              className={cn(
                "relative",
                item.active &&
                  "after:absolute after:bottom-[-10px] after:left-[-2px] after:h-[3px] after:w-[calc(100%+4px)] after:rounded-full after:bg-primary",
              )}
            >
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
