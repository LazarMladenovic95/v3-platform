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
      ...props
    },
    ref,
  ) => {
    const textareaId = id ?? React.useId();
    const hintId = hint ? `${textareaId}-hint` : undefined;
    const isFilled = Boolean(value || defaultValue);

    return (
      <div className="flex flex-col gap-2">
        <Label htmlFor={textareaId}>{label}</Label>

        <Textarea
          ref={ref}
          id={textareaId}
          {...(value !== undefined && { value })}
          {...(defaultValue !== undefined && { defaultValue })}
          aria-invalid={state === "error"}
          aria-describedby={state === "error" ? hintId : undefined}
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

        {state === "error" && hint && (
          <HintText id={hintId} className="text-red-util-100">
            {hint}
          </HintText>
        )}
      </div>
    );
  },
);

TextareaField.displayName = "TextareaField";
