// InputField molecule that combines a Label, Input atom, and HintText for labeled text form fields.
"use client";

import * as React from "react";
import { cn } from "../../../lib/utils";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";
import { HintText } from "../atoms/HintText";

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  hintClassName?: string; // override hint spacing, e.g. "-mt-1" to tighten the gap-2 default to 4px
  state?: "default" | "highlighted" | "error";
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      hint,
      hintClassName,
      state = "default",
      className,
      id,
      value,
      defaultValue,
      ...props
    },
    ref,
  ) => {
    const inputId = id ?? React.useId();
    const hintId = hint ? `${inputId}-hint` : undefined;
    const isFilled = Boolean(value || defaultValue);

    return (
      <div className="flex flex-col gap-2">
        <Label htmlFor={inputId}>{label}</Label>

        <div>
          <Input
            ref={ref}
            id={inputId}
            {...(value !== undefined && { value })}
            {...(defaultValue !== undefined && { defaultValue })}
            aria-invalid={state === "error"}
            aria-describedby={hint ? hintId : undefined}
            className={cn(
              isFilled &&
                state === "default" &&
                "border-grey-700 text-grey-700",
              state === "highlighted" &&
                "border-[1.5px] border-blue-500 focus:border-[1.5px] focus:border-blue-500",
              state === "error" &&
                "border-[1.5px] border-red-util-100 focus:border-[1.5px] focus:border-red-util-100",
              className,
            )}
            {...props}
          />
        </div>

        {hint && (
          <HintText
            id={hintId}
            className={cn(
              state === "error" ? "text-red-util-100" : "text-grey-300",
              hintClassName,
            )}
          >
            {hint}
          </HintText>
        )}
      </div>
    );
  },
);

InputField.displayName = "InputField";
