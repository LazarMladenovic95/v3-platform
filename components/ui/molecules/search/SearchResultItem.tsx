// SearchResultItem molecule that renders a single tappable row in a search results list.
"use client";

import * as React from "react";
import { cn } from "../../../../lib/utils";

export interface SearchResultItemProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

export const SearchResultItem = React.forwardRef<
  HTMLDivElement,
  SearchResultItemProps
>(({ children, disabled = false, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="option"
      aria-disabled={disabled}
      className={cn(
        // layout
        "flex h-11 w-full items-center px-4",
        // typography
        "text-body-regular text-foreground-body",
        // interaction
        "select-none",
        !disabled && "cursor-pointer hover:bg-surface-hover/50",
        disabled && "pointer-events-none opacity-60",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

SearchResultItem.displayName = "SearchResultItem";
