// RadioGroupField molecule that combines a RadioGroup atom with a group label and option labels.
"use client";

import * as React from "react";
import { cn } from "../../../lib/utils";
import { RadioGroup, RadioGroupItem } from "../atoms/Radio";
import { Label } from "../atoms/Label";

export interface RadioOption {
  value: string;
  label: string;
  hint?: string;
}

export interface RadioGroupFieldProps {
  label: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  className?: string;
}

export function RadioGroupField({
  label,
  options,
  value,
  defaultValue,
  onValueChange,
  disabled,
  name,
  className,
}: RadioGroupFieldProps) {
  const groupId = React.useId();

  return (
    <div className={cn("flex flex-col", className)}>
      <Label disabled={disabled} className="mb-2">
        {label}
      </Label>
      <RadioGroup
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
        name={name}
      >
        {options.map((option) => {
          const optionId = `${groupId}-${option.value}`;
          return (
            <div key={option.value} className="flex items-start gap-2">
              <RadioGroupItem value={option.value} id={optionId} disabled={disabled} />
              <div className="flex flex-col gap-1">
                <Label
                  htmlFor={optionId}
                  disabled={disabled}
                  className={cn("leading-4", !disabled && "cursor-pointer")}
                >
                  {option.label}
                </Label>
                {option.hint && (
                  <p className="text-body-small text-foreground-muted">{option.hint}</p>
                )}
              </div>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
}
