// TextareaField molecule that combines a Label, Textarea atom, and HintText for labeled multi-line form fields.
"use client";

import * as React from "react";
import { cn } from "../../../lib/utils";
import { Textarea } from "../atoms/Textarea";
import { Label } from "../atoms/Label";
import { HintText } from "../atoms/HintText";

export interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: string;
  state?: "default" | "highlighted" | "error";
}

export const TextareaField = React.forwardRef<
  HTMLTextAreaElement,
  TextareaFieldProps
>(
  (
    {
      label,
      hint,
      state = "default",
      className,
      id,
      value,
      defaultValue,
      disabled,
      ...props
    },
    ref,
  ) => {
    const textareaId = id ?? React.useId();
    const hintId = hint ? `${textareaId}-hint` : undefined;
    const isFilled = Boolean(value || defaultValue);

    return (
      <div className="flex flex-col">
        <Label htmlFor={textareaId} className="mb-1" disabled={disabled}>{label}</Label>

        <Textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          {...(value !== undefined && { value })}
          {...(defaultValue !== undefined && { defaultValue })}
          aria-invalid={state === "error"}
          aria-describedby={state === "error" ? hintId : undefined}
          className={cn(
            isFilled &&
              state === "default" &&
              "text-foreground-body",
            state === "highlighted" &&
              "border-[1.5px] border-border-focus focus:border-[1.5px] focus:border-border-focus",
            state === "error" &&
              "bg-destructive-subtle border-[1.5px] border-border-error focus:border-[1.5px] focus:border-border-error",
            className,
          )}
          {...props}
        />

        {state === "error" && hint && (
          <HintText id={hintId} className="mt-2">
            {hint}
          </HintText>
        )}
      </div>
    );
  },
);

TextareaField.displayName = "TextareaField";
