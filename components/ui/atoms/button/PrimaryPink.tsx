// Primary pink button atom — large / medium / small.
import * as React from "react";
import { BaseButton, type BaseButtonProps } from "./BaseButton";
import { primaryPinkClassName, type ButtonSize } from "./buttonClasses";

export interface PrimaryPinkProps extends BaseButtonProps {
  size?: ButtonSize;
}

export const PrimaryPink = React.forwardRef<
  HTMLButtonElement,
  PrimaryPinkProps
>(({ size = "large", className, ...props }, ref) => {
  return <BaseButton ref={ref} className={primaryPinkClassName(size, className)} {...props} />;
});

PrimaryPink.displayName = "PrimaryPink";
