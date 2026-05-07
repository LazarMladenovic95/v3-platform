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
        "text-[16px] leading-[18px] font-[700] underline",
        "text-pink-500 bg-transparent",
        "hover:text-pink-600 active:text-pink-700",
        "disabled:text-grey-100 disabled:no-underline disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
});

CtaLinkPink.displayName = "CtaLinkPink";
