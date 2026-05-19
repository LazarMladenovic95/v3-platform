// Outline button atom (white tone) — large / medium / small. For dark backgrounds.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton, type BaseButtonProps } from "./BaseButton";
import { buttonSizeClasses, type ButtonSize } from "./buttonClasses";

export interface OutlineWhiteProps extends BaseButtonProps {
  size?: ButtonSize;
}

export const OutlineWhite = React.forwardRef<
  HTMLButtonElement,
  OutlineWhiteProps
>(({ size = "large", className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        buttonSizeClasses[size],
        "bg-transparent border border-foreground-on-dark text-foreground-on-dark",
        "hover:border-foreground-on-dark/80 hover:text-foreground-on-dark/80",
        "active:border-foreground-on-dark/60 active:text-foreground-on-dark/60",
        "disabled:border-foreground-on-dark/40 disabled:text-foreground-on-dark/40 disabled:cursor-not-allowed disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

OutlineWhite.displayName = "OutlineWhite";
