// Destructive red button atom — large / medium / small. For dangerous or irreversible actions.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton, type BaseButtonProps } from "./BaseButton";
import { buttonSizeClasses, type ButtonSize } from "./buttonClasses";

export interface DestructiveRedProps extends BaseButtonProps {
  size?: ButtonSize;
}

export const DestructiveRed = React.forwardRef<
  HTMLButtonElement,
  DestructiveRedProps
>(({ size = "large", className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        buttonSizeClasses[size],
        "bg-destructive text-destructive-foreground",
        "hover:bg-destructive-hover active:bg-destructive-active disabled:bg-disabled disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
        className,
      )}
      {...props}
    />
  );
});

DestructiveRed.displayName = "DestructiveRed";
