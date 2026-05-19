// Outline button atom (primary tone) — large / medium / small.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton, type BaseButtonProps } from "./BaseButton";
import { buttonSizeClasses, type ButtonSize } from "./buttonClasses";

export interface OutlinePrimaryProps extends BaseButtonProps {
  size?: ButtonSize;
}

export const OutlinePrimary = React.forwardRef<
  HTMLButtonElement,
  OutlinePrimaryProps
>(({ size = "large", className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        buttonSizeClasses[size],
        "border border-primary text-primary bg-transparent",
        "hover:border-primary-hover hover:text-primary-hover",
        "active:border-primary-active active:text-primary-active",
        "disabled:border-border disabled:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

OutlinePrimary.displayName = "OutlinePrimary";
