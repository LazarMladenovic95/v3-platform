// Hint text atom that displays helper or error messages beneath form fields.
import * as React from "react";
import { cn } from "@/lib/utils";

export type HintTextProps = React.HTMLAttributes<HTMLSpanElement>;

export const HintText = React.forwardRef<HTMLSpanElement, HintTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "text-body-small font-normal text-foreground-muted",
        className,
      )}
      {...props}
    />
  ),
);

HintText.displayName = "HintText";
