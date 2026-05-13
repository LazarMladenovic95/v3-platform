// Label atom built on Radix UI with CVA variants for consistent form field labeling.
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  // typography (explicit, no globals)
  "text-body-small font-bold",
  {
    variants: {
      disabled: {
        true: "text-foreground-disabled cursor-not-allowed",
        false: "text-foreground-body",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>;

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, disabled, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ disabled }), className)}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
