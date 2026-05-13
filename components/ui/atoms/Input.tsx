// Input atom providing a styled native text input element.
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          // layout + shape (locked)
          "flex w-full h-11 rounded-lg px-4",
          "text-body-regular font-normal placeholder:text-foreground-subtle",
          // base visuals
          "bg-surface border border-border-input text-foreground-muted",
          // focus (active)
          "focus:outline-none focus:border-border-focus focus:border-[1.5px] focus:text-foreground-body",
          // disabled
          "disabled:bg-disabled disabled:text-foreground-muted disabled:cursor-not-allowed",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
