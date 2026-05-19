// Checkbox atom built on Radix UI with design system token styling.
"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "h-4 w-4 shrink-0 rounded-[4px] border border-border-input bg-surface",
      "inline-flex items-center justify-center",
      "transition duration-150 ease-out",
      "focus-visible:outline-none focus-visible:border-[1.5px] focus-visible:border-border-focus",
      "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-foreground-on-dark",
      "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:text-foreground-on-dark",
      "disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="inline-flex items-center justify-center animate-in fade-in-0 zoom-in-75 duration-150">
      {props.checked === "indeterminate" ? (
        <Icon name="minus" size="sm" strokeWidth={2.5} />
      ) : (
        <Icon name="check" size="sm" strokeWidth={2.5} />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = "Checkbox";
