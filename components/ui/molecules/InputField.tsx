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
                "border-foreground-body text-foreground-body",
              state === "highlighted" &&
                "border-[1.5px] border-border-focus focus:border-[1.5px] focus:border-border-focus",
              state === "error" &&
                "border-[1.5px] border-border-error focus:border-[1.5px] focus:border-border-error",
              className,
            )}
            {...props}
          />
        </div>

        {hint && (
          <HintText
            id={hintId}
            className={cn(
              state === "error" ? "text-destructive" : "text-foreground-subtle",
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
