// CTA link-styled pink button atom used for secondary text-link actions.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton, type BaseButtonProps } from "./BaseButton";
import { type ButtonSize } from "./buttonClasses";

export interface CtaLinkPinkProps extends BaseButtonProps {
  size?: ButtonSize;
}

const ctaSizeClasses: Record<ButtonSize, string> = {
  large: "gap-2 text-body-regular-bold",
  medium: "gap-2 text-body-small-bold",
  small: "gap-1 text-body-extra-small-bold",
};

export const CtaLinkPink = React.forwardRef<
  HTMLButtonElement,
  CtaLinkPinkProps
>(({ size = "large", className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        "h-auto underline",
        ctaSizeClasses[size],
        "text-foreground-accent bg-transparent",
        "hover:text-primary-hover active:text-primary-active",
        "disabled:text-foreground-muted disabled:no-underline disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
});

CtaLinkPink.displayName = "CtaLinkPink";
