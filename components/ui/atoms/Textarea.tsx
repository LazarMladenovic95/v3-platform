// Textarea atom providing a styled native multi-line text input element.
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        className={cn(
          // layout + shape (locked)
          "flex w-full rounded-lg px-3 py-3 min-h-[120px] resize-none items-start",
          // typography (explicit, no globals)
          "text-body-small font-normal font-[inherit] placeholder:text-foreground-muted",
          // base visuals
          "bg-surface border border-border-input text-foreground-muted",
          // focus (active)
          "focus:outline-none focus:border-border-focus focus:border-[1.5px] focus:text-foreground-body",
          // disabled
          "disabled:bg-disabled disabled:text-foreground-disabled disabled:cursor-not-allowed",
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
