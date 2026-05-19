// CheckboxField molecule that combines a Checkbox atom with a Label and optional hint.
"use client";

import * as React from "react";
import { cn } from "../../../lib/utils";
import { Checkbox } from "../atoms/Checkbox";
import { HintText } from "../atoms/HintText";
import { Label } from "../atoms/Label";

export interface CheckboxFieldProps {
  label: string;
  hint?: string;
  checked?: boolean | "indeterminate";
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
  disabled?: boolean;
  id?: string;
  name?: string;
  className?: string;
}

export const CheckboxField = React.forwardRef<HTMLButtonElement, CheckboxFieldProps>(
  (
    {
      label,
      hint,
      checked,
      defaultChecked,
      onCheckedChange,
      disabled,
      id,
      name,
      className,
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const checkboxId = id ?? generatedId;

    return (
      <div className={cn("flex items-start gap-2", className)}>
        <Checkbox
          ref={ref}
          id={checkboxId}
          name={name}
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
        />
        <div className="flex flex-col gap-1">
          <Label
            htmlFor={checkboxId}
            disabled={disabled}
            className={cn("leading-4", !disabled && "cursor-pointer")}
          >
            {label}
          </Label>
          {hint && <HintText>{hint}</HintText>}
        </div>
      </div>
    );
  },
);

CheckboxField.displayName = "CheckboxField";
