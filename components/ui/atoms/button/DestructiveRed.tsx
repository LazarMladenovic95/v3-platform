// Destructive red button atom used for dangerous or irreversible actions.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton } from "./BaseButton";

export interface DestructiveRedProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "regular" | "small";
}

const sizeClasses: Record<NonNullable<DestructiveRedProps["size"]>, string> = {
  // 44px height, padding 13px 16px, gap 8
  regular: "h-[44px] px-4 py-[13px] gap-2",

  // 40px height, padding 11px 12px, gap 8
  small: "h-[40px] px-3 py-[11px] gap-2",
};

export const DestructiveRed = React.forwardRef<
  HTMLButtonElement,
  DestructiveRedProps
>(({ size = "regular", className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        sizeClasses[size],
        // Explicit typography (per Figma)
        "text-body-regular-bold",
        // Destructive red (per tokens)
        "bg-destructive text-destructive-foreground",
        "hover:opacity-90 active:opacity-80 disabled:bg-disabled disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

DestructiveRed.displayName = "DestructiveRed";
