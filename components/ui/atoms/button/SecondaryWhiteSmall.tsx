// Secondary white button atom in the small size variant.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton } from "./BaseButton";

export interface SecondaryWhiteSmallProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SecondaryWhiteSmall = React.forwardRef<
  HTMLButtonElement,
  SecondaryWhiteSmallProps
>(({ className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        // 40px height, padding 11px 12px
        "h-[40px] px-3 py-[11px] gap-2",
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

SecondaryWhiteSmall.displayName = "SecondaryWhiteSmall";
