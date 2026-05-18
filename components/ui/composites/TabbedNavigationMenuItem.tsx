"use client";

import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

export interface TabbedNavigationMenuItemProps {
  label: string;
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  className?: string;
}

export function TabbedNavigationMenuItem({
  label,
  children,
  active = false,
  disabled = false,
  className,
}: TabbedNavigationMenuItemProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          aria-haspopup="menu"
          className={cn(
            "relative inline-flex h-10 shrink-0 items-center justify-center gap-1 rounded-t-lg px-4 text-body-small-bold transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            active
              ? "font-bold text-foreground-title"
              : "text-foreground-title-subtle hover:text-secondary",
            disabled && "pointer-events-none text-foreground-disabled opacity-60",
            className,
          )}
        >
          <span
            className={cn(
              "relative",
              active &&
                "after:absolute after:bottom-[-10px] after:left-[-2px] after:h-[3px] after:w-[calc(100%+4px)] after:rounded-full after:bg-primary",
            )}
          >
            {label}
          </span>
          <ChevronDown className="h-4 w-4 shrink-0" aria-hidden />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" sideOffset={4} className="w-56 p-2">
        {children}
      </PopoverContent>
    </Popover>
  );
}
