"use client";

import { MoreHorizontal } from "lucide-react";
import { IconButton, OutlineDestructive, OutlinePrimary } from "@/components/ui";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/composites/Popover";

/** Row affordance: icon-only trigger (ellipsis) aligned right, opens a sample actions menu. */
export function TableRowMenuCell() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton
          variant="ghost-neutral"
          size="small"
          icon={
            <MoreHorizontal
              className="h-4 w-4"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            />
          }
          aria-label="Open row menu"
        />
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={4} className="w-56 p-2">
        <div className="flex flex-col gap-0.5" role="menu">
          <OutlinePrimary type="button" size="small" className="h-9 w-full justify-start font-normal">
            View details
          </OutlinePrimary>
          <OutlinePrimary type="button" size="small" className="h-9 w-full justify-start font-normal">
            Duplicate
          </OutlinePrimary>
          <OutlineDestructive type="button" size="small" className="h-9 w-full justify-start font-normal">
            Archive
          </OutlineDestructive>
        </div>
      </PopoverContent>
    </Popover>
  );
}
