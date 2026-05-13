// Secondary pink button atom with size, hint, and error state support.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton, type BaseButtonProps } from "./BaseButton";

export interface SecondaryPinkProps extends BaseButtonProps {
  size?: "regular" | "small";
}

const sizeClasses = {
  // 44px height, padding 13px 16px
  regular: "h-[44px] px-4 py-[13px] gap-2",

  // 40px height, padding 11px 12px
  small: "h-[40px] px-3 py-[11px] gap-2",
};

export const SecondaryPink = React.forwardRef<
  HTMLButtonElement,
  SecondaryPinkProps
>(({ size = "regular", className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        sizeClasses[size],
        // Explicit typography
        "text-body-regular-bold",
        // Secondary pink style
        "border border-secondary text-secondary bg-transparent",
        "hover:bg-surface-hover active:opacity-90 disabled:border-border disabled:text-foreground-subtle disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

SecondaryPink.displayName = "SecondaryPink";
