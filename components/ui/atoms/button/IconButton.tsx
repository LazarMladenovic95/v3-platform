// Icon-only button atom — square, accessible (aria-label required), all variants + sizes.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton, type BaseButtonProps } from "./BaseButton";
import { type ButtonSize } from "./buttonClasses";

export type IconButtonVariant =
  | "primary"
  | "outline"
  | "ghost"
  | "ghost-neutral"
  | "destructive"
  | "outline-destructive"
  | "outline-white";

export interface IconButtonProps extends Omit<BaseButtonProps, "iconLeft" | "iconRight" | "children"> {
  variant?: IconButtonVariant;
  size?: ButtonSize;
  /** The icon to render. Should be a sized SVG (callers control icon size). */
  icon: React.ReactNode;
  /** Required — icon buttons have no visible label. */
  "aria-label": string;
}

const iconButtonSizeClasses: Record<ButtonSize, string> = {
  large: "h-[44px] w-[44px]",
  medium: "h-10 w-10",
  small: "h-[32px] w-[32px]",
};

/**
 * Variant styles mirror the corresponding sized button atoms. If hover/active/disabled
 * tokens change on those atoms, update them here too.
 */
const iconButtonVariantClasses: Record<IconButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active disabled:bg-disabled disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
  outline:
    "border border-primary text-primary bg-transparent hover:border-primary-hover hover:text-primary-hover active:border-primary-active active:text-primary-active disabled:border-border disabled:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
  ghost:
    "bg-transparent text-primary hover:bg-primary/10 hover:text-primary-hover active:text-primary-active disabled:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
  "ghost-neutral":
    "bg-transparent text-foreground-muted hover:bg-primary/10 hover:text-primary-hover active:text-primary-active disabled:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive-hover active:bg-destructive-active disabled:bg-disabled disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
  "outline-destructive":
    "border border-destructive text-destructive bg-transparent hover:border-destructive-active hover:text-destructive-active active:border-destructive-active active:text-destructive-active disabled:border-border disabled:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
  "outline-white":
    "bg-transparent border border-foreground-on-dark text-foreground-on-dark hover:border-foreground-on-dark/80 hover:text-foreground-on-dark/80 active:border-foreground-on-dark/60 active:text-foreground-on-dark/60 disabled:border-foreground-on-dark/40 disabled:text-foreground-on-dark/40 disabled:cursor-not-allowed disabled:pointer-events-none",
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = "primary", size = "large", icon, className, ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        iconLeft={icon}
        className={cn(
          "p-0",
          iconButtonSizeClasses[size],
          iconButtonVariantClasses[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

IconButton.displayName = "IconButton";
