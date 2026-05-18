// Radio group + item atoms built on Radix UI with design system token styling.
"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn("flex flex-col gap-2", className)}
    {...props}
  />
));
RadioGroup.displayName = "RadioGroup";

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "h-4 w-4 shrink-0 rounded-full border border-border-input bg-surface",
      "inline-flex items-center justify-center",
      "transition duration-150 ease-out",
      "focus-visible:outline-none focus-visible:border-[1.5px] focus-visible:border-border-focus",
      "data-[state=checked]:border-primary",
      "disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
      className,
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="inline-flex items-center justify-center">
      <span className="h-2 w-2 rounded-full bg-primary" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = "RadioGroupItem";
