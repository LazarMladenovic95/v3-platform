// Secondary pink button atom in the extra-small size variant.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton } from "./BaseButton";

export interface SecondaryPinkExtraSmallProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * default  → pink text + border (light backgrounds)
   * inverted → white text + border (dark backgrounds only, explicit opt-in)
   */
  tone?: "default" | "inverted";
}

export const SecondaryPinkExtraSmall = React.forwardRef<
  HTMLButtonElement,
  SecondaryPinkExtraSmallProps
>(({ tone = "default", className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        // 32px height, padding 8px 12px
        "h-[32px] px-3 py-2 gap-1",
        // explicit typography
        "text-body-small-bold",
        // base
        "bg-transparent border",
        tone === "default" && [
          "border-secondary text-secondary",
          "hover:border-secondary hover:text-secondary",
          "active:opacity-90",
        ],
        tone === "inverted" && [
          // for dark backgrounds only
          "border-white text-white",
          "hover:border-white/80 hover:text-white/80",
          "active:border-white/60 active:text-white/60",
        ],
        // disabled (shared)
        "disabled:border-border disabled:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

SecondaryPinkExtraSmall.displayName = "SecondaryPinkExtraSmall";
