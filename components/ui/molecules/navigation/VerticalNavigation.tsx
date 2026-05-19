"use client";

import type { ReactNode } from "react";
import { NavLink } from "../../atoms/NavLink";

export type VerticalNavigationItem = {
  href: string;
  label: string;
  icon?: ReactNode;
  active?: boolean;
  disabled?: boolean;
};

export interface VerticalNavigationProps {
  items: readonly VerticalNavigationItem[];
  "aria-label": string;
  className?: string;
}

export function VerticalNavigation({
  items,
  "aria-label": ariaLabel,
  className,
}: VerticalNavigationProps) {
  return (
    <nav aria-label={ariaLabel} className={className}>
      <div className="grid gap-1">
        {items.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            variant="vertical"
            active={item.active}
            disabled={item.disabled}
          >
            {item.icon && (
              <span className="flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden>
                {item.icon}
              </span>
            )}
            <span className="min-w-0 truncate">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
