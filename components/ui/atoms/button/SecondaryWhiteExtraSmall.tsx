// Secondary white button atom in the extra-small size variant.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton } from "./BaseButton";

export interface SecondaryWhiteExtraSmallProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SecondaryWhiteExtraSmall = React.forwardRef<
  HTMLButtonElement,
  SecondaryWhiteExtraSmallProps
>(({ className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        // 32px height, padding 8px 12px
        "h-[32px] px-3 py-2 gap-1",
        // explicit typography
        "text-body-small-bold",
        // base: white border + text, transparent background
        "bg-transparent border border-white text-white",
        // hover
        "hover:border-white/80 hover:text-white/80",
        // active
        "active:border-white/60 active:text-white/60",
        // disabled
        "disabled:border-white/40 disabled:text-white/40 disabled:cursor-not-allowed disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

SecondaryWhiteExtraSmall.displayName = "SecondaryWhiteExtraSmall";
