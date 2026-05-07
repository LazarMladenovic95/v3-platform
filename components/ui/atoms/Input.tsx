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
          "text-[16px] md:text-[14px] leading-[18px] font-normal placeholder:text-grey-500",
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

Input.displayName = "Input";

export { Input };
