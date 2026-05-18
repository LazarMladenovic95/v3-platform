"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
        {items.map((item) => {
          const itemClassName = cn(
            "relative flex min-h-10 items-center gap-2 rounded-md px-3 py-2 text-body-small transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            item.active
              ? "bg-surface-active font-bold text-foreground-title"
              : "text-foreground-title-subtle hover:bg-surface-hover hover:text-primary-hover",
            item.disabled &&
              "pointer-events-none bg-transparent text-foreground-disabled opacity-60 before:hidden",
          );
          const itemContent = (
            <>
              {item.icon && (
                <span className="flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden>
                  {item.icon}
                </span>
              )}
              <span className="min-w-0 truncate">{item.label}</span>
            </>
          );

          if (item.disabled) {
            return (
              <span key={item.href} className={itemClassName} aria-disabled="true">
                {itemContent}
              </span>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={itemClassName}
            >
              {itemContent}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
