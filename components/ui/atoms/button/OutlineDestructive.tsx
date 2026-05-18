// Outline button atom (destructive tone) — large / medium / small.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton, type BaseButtonProps } from "./BaseButton";
import { buttonSizeClasses, type ButtonSize } from "./buttonClasses";

export interface OutlineDestructiveProps extends BaseButtonProps {
  size?: ButtonSize;
}

export const OutlineDestructive = React.forwardRef<
  HTMLButtonElement,
  OutlineDestructiveProps
>(({ size = "large", className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        buttonSizeClasses[size],
        "border border-destructive text-destructive bg-transparent",
        "hover:border-destructive-hover hover:text-destructive-hover",
        "active:border-destructive-active active:text-destructive-active",
        "disabled:border-border disabled:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

OutlineDestructive.displayName = "OutlineDestructive";
