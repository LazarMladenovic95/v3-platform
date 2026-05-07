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
        "text-[16px] leading-[18px] font-[700]",
        // Secondary pink style
        "border border-pink-500 text-pink-500 bg-transparent",
        "hover:border-pink-600 hover:text-pink-600 active:border-pink-700 active:text-pink-700 disabled:border-grey-100 disabled:text-grey-100 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

SecondaryPink.displayName = "SecondaryPink";
