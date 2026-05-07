// Primary pink button atom with regular and small size variants.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton } from "./BaseButton";

export interface PrimaryPinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "regular" | "small";
}

const sizeClasses: Record<NonNullable<PrimaryPinkProps["size"]>, string> = {
  // 44px height, padding 13px 16px, gap 8
  regular: "h-[44px] px-4 py-[13px] gap-2",

  // 40px height, padding 11px 12px, gap 8
  small: "h-[40px] px-3 py-[11px] gap-2",
};

export const PrimaryPink = React.forwardRef<
  HTMLButtonElement,
  PrimaryPinkProps
>(({ size = "regular", className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        sizeClasses[size],
        // Explicit typography (per Figma)
        "text-[16px] leading-[18px] font-[700]",
        // Primary pink (per tokens)
        "bg-pink-500 text-white",
        "hover:bg-pink-600 active:bg-pink-700 disabled:bg-grey-100 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

PrimaryPink.displayName = "PrimaryPink";
