// SelectItem molecule built on Radix UI providing a styled option row inside a SelectField.
"use client";

import * as React from "react";
import * as Select from "@radix-ui/react-select";
import { cn } from "../../../../lib/utils";

export interface SelectItemProps extends React.ComponentPropsWithoutRef<
  typeof Select.Item
> {
  icon?: React.ReactNode;
}

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof Select.Item>,
  SelectItemProps
>(({ children, icon, className, ...props }, ref) => {
  return (
    <Select.Item
      ref={ref}
      {...props}
      className={cn(
        // layout
        "flex h-11 w-full items-center px-4",
        // typography
        "text-body-regular text-foreground-body",
        // interaction
        "cursor-pointer select-none",
        "focus:outline-none",
        "hover:bg-surface-hover/50",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-60",
        className,
      )}
    >
      <Select.ItemText>
        <span className="flex items-center gap-2">
          {icon && <span className="flex h-4 w-4 items-center">{icon}</span>}
          {children}
        </span>
      </Select.ItemText>
    </Select.Item>
  );
});

SelectItem.displayName = "SelectItem";
