// Primary pink button atom with regular and small size variants.
import * as React from "react";
import { BaseButton } from "./BaseButton";
import { primaryPinkClassName } from "./primaryPinkClasses";

export interface PrimaryPinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "regular" | "small";
}

export const PrimaryPink = React.forwardRef<
  HTMLButtonElement,
  PrimaryPinkProps
>(({ size = "regular", className, ...props }, ref) => {
  return <BaseButton ref={ref} className={primaryPinkClassName(size, className)} {...props} />;
});

PrimaryPink.displayName = "PrimaryPink";
