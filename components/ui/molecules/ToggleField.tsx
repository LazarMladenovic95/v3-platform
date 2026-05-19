// ToggleField molecule that pairs a Toggle atom with label and helper text.
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { HintText } from "../atoms/HintText";
import { Label } from "../atoms/Label";
import { Toggle } from "../atoms/Toggle";

export interface ToggleFieldProps {
  label: string;
  hint?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}

export const ToggleField = React.forwardRef<HTMLButtonElement, ToggleFieldProps>(
  (
    {
      label,
      hint,
      checked,
      defaultChecked,
      onCheckedChange,
      disabled,
      id,
      className,
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const toggleId = id ?? generatedId;

    return (
      <div className={cn("flex items-center justify-between gap-4", className)}>
        <div className="min-w-0 flex flex-col gap-1">
          <Label
            htmlFor={toggleId}
            disabled={disabled}
            className={cn("leading-4", !disabled && "cursor-pointer")}
          >
            {label}
          </Label>
          {hint && <HintText>{hint}</HintText>}
        </div>
        <Toggle
          ref={ref}
          id={toggleId}
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
        />
      </div>
    );
  },
);

ToggleField.displayName = "ToggleField";
