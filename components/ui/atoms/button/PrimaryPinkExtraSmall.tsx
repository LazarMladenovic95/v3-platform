// Primary pink button atom in the extra-small size variant.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton } from "./BaseButton";

export interface PrimaryPinkExtraSmallProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const PrimaryPinkExtraSmall = React.forwardRef<
  HTMLButtonElement,
  PrimaryPinkExtraSmallProps
>(({ className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        // 32px height, padding 8px 12px, gap 4
        "h-[32px] px-3 py-2 gap-1",
        // Explicit typography (per Figma)
        "text-[14px] leading-[16px] font-[700]",
        // Primary pink
        "bg-pink-500 text-white",
        "hover:bg-pink-600 active:bg-pink-700 disabled:bg-grey-100 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

PrimaryPinkExtraSmall.displayName = "PrimaryPinkExtraSmall";
