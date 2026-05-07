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
          "flex w-full rounded-lg px-4 py-3 min-h-[120px] resize-none items-start",
          // typography (explicit, no globals)
          "text-[16px] md:text-[14px] leading-[18px] font-normal font-[inherit] placeholder:text-grey-500",
          // base visuals
          "bg-white border border-grey-300 text-grey-500",
          // focus (active)
          "focus:outline-none focus:border-grey-700 focus:border-[1.5px] focus:text-grey-700",
          // disabled
          "disabled:bg-grey-100 disabled:text-grey-500 disabled:cursor-not-allowed",
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
