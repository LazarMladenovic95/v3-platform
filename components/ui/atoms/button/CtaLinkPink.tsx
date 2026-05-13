// CTA link-styled pink button atom used for secondary text-link actions.
import * as React from "react";
import { cn } from "@/lib/utils";
import { BaseButton } from "./BaseButton";

export interface CtaLinkPinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CtaLinkPink = React.forwardRef<
  HTMLButtonElement,
  CtaLinkPinkProps
>(({ className, ...props }, ref) => {
  return (
    <BaseButton
      ref={ref}
      className={cn(
        "h-auto",
        "text-body-regular-bold underline",
        "text-foreground-accent bg-transparent",
        "hover:opacity-90 active:opacity-80",
        "disabled:text-foreground-muted disabled:no-underline disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
});

CtaLinkPink.displayName = "CtaLinkPink";
