// Hint text atom that displays helper or error messages beneath form fields.
import * as React from "react";
import { cn } from "@/lib/utils";

export interface HintTextProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const HintText = React.forwardRef<HTMLSpanElement, HintTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "text-body-extra-small font-normal text-foreground-body",
        className,
      )}
      {...props}
    />
  ),
);

HintText.displayName = "HintText";
