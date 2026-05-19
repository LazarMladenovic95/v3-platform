"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "../atoms/Icon";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

export interface VerticalNavigationMenuItemProps {
  label: string;
  icon?: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export function VerticalNavigationMenuItem({
  label,
  icon,
  children,
  disabled = false,
  className,
}: VerticalNavigationMenuItemProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          aria-haspopup="menu"
          className={cn(
            "relative flex min-h-10 w-full items-center gap-2 rounded-md px-3 py-2 text-left text-body-small transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            disabled
              ? "pointer-events-none bg-transparent text-foreground-disabled opacity-60"
              : "text-foreground-title-subtle hover:bg-surface-hover hover:text-secondary",
            className,
          )}
        >
          {icon && (
            <span className="flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden>
              {icon}
            </span>
          )}
          <span className="min-w-0 flex-1 truncate">{label}</span>
          <Icon name="chevron-right" className="shrink-0" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" side="right" sideOffset={8} className="w-56 p-2">
        {children}
      </PopoverContent>
    </Popover>
  );
}
