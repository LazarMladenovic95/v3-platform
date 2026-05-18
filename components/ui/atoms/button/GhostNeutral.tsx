// Ghost button atom (neutral tone) — large / medium / small. Transparent background, no border.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton, type BaseButtonProps } from "./BaseButton";
import { buttonSizeClasses, type ButtonSize } from "./buttonClasses";

export interface GhostNeutralProps extends BaseButtonProps {
  size?: ButtonSize;
}

export const GhostNeutral = React.forwardRef<
  HTMLButtonElement,
  GhostNeutralProps
>(({ size = "large", className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        buttonSizeClasses[size],
        "bg-transparent text-foreground-muted",
        "hover:bg-primary/10 hover:text-primary-hover",
        "active:text-primary-active",
        "disabled:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

GhostNeutral.displayName = "GhostNeutral";
