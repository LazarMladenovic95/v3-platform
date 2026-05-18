"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

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
        {items.map((item) => {
          const tabClassName = cn(
            "relative inline-flex h-10 shrink-0 items-center justify-center rounded-t-lg px-4 text-body-small-bold transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            item.active
              ? "font-bold text-foreground-title"
              : "border-transparent text-foreground-title-subtle hover:text-primary-hover",
            item.disabled &&
              "pointer-events-none text-foreground-disabled opacity-60",
          );

          if (item.disabled) {
            return (
              <span key={item.href} className={tabClassName} aria-disabled="true">
                <span
                  className={cn(
                    "relative",
                    item.active &&
                      "after:absolute after:bottom-[-10px] after:left-[-2px] after:h-[3px] after:w-[calc(100%+4px)] after:rounded-full after:bg-primary",
                  )}
                >
                  {item.label}
                </span>
              </span>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={tabClassName}
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
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
