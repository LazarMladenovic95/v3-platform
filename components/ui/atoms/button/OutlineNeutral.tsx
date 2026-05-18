// Outline button atom (neutral tone) — large / medium / small.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton, type BaseButtonProps } from "./BaseButton";
import { buttonSizeClasses, type ButtonSize } from "./buttonClasses";

export interface OutlineNeutralProps extends BaseButtonProps {
  size?: ButtonSize;
}

export const OutlineNeutral = React.forwardRef<
  HTMLButtonElement,
  OutlineNeutralProps
>(({ size = "large", className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        buttonSizeClasses[size],
        "border border-border bg-surface text-foreground-title-subtle",
        "hover:border-border-focus hover:text-secondary",
        "active:border-border-focus active:text-secondary",
        "disabled:border-border disabled:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

OutlineNeutral.displayName = "OutlineNeutral";
