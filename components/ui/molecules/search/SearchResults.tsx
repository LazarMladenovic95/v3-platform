// SearchResults molecule that renders a scrollable container for a list of search result items.
"use client";

import * as React from "react";
import { cn } from "../../../../lib/utils";

export interface SearchResultsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Max height before scroll */
  maxHeight?: number;
}

export const SearchResults = React.forwardRef<
  HTMLDivElement,
  SearchResultsProps
>(({ children, maxHeight = 264, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="listbox"
      className={cn(
        "mt-[2px]", // ← lock the gap here
        // positioning is handled by parent (SearchField / controller)
        "w-full rounded-lg",
        // visuals
        "border-[1.5px] border-grey-700 bg-white",
        // spacing + scroll
        "overflow-y-auto",
        className,
      )}
      style={{ maxHeight }}
      {...props}
    >
      {children}
    </div>
  );
});

SearchResults.displayName = "SearchResults";
