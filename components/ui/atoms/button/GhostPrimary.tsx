// Ghost button atom (primary tone) — large / medium / small. Transparent background, no border.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton, type BaseButtonProps } from "./BaseButton";
import { buttonSizeClasses, type ButtonSize } from "./buttonClasses";

export interface GhostPrimaryProps extends BaseButtonProps {
  size?: ButtonSize;
}

export const GhostPrimary = React.forwardRef<
  HTMLButtonElement,
  GhostPrimaryProps
>(({ size = "large", className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        buttonSizeClasses[size],
        "bg-transparent text-primary",
        "hover:bg-primary/10 hover:text-primary-hover",
        "active:text-primary-active",
        "disabled:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

GhostPrimary.displayName = "GhostPrimary";
