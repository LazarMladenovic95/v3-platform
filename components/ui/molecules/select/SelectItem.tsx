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
        "flex w-full items-center gap-2 rounded-md px-3 py-2",
        "text-body-small text-foreground-body",
        "cursor-pointer select-none",
        "outline-none focus:outline-none",
        "data-[highlighted]:bg-surface-hover data-[highlighted]:text-foreground-body",
        "data-[state=checked]:bg-surface-active data-[state=checked]:font-bold",
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
