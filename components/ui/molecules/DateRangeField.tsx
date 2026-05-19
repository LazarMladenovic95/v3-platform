// DateRangeField molecule — labeled custom range picker using the shared calendar popover.
"use client";

import * as React from "react";
import { Calendar } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Label } from "../atoms/Label";
import { HintText } from "../atoms/HintText";
import {
  formatDisplayDate,
  RangeCalendarPicker,
  type DateRangeValue,
} from "../composites/CalendarPicker";
import { Popover, PopoverContent, PopoverTrigger } from "../composites/Popover";
import type { InputFieldProps } from "./InputField";

export interface DateRangeFieldProps
  extends Omit<InputFieldProps, "type" | "value" | "defaultValue" | "onChange" | "name"> {
  value?: DateRangeValue;
  defaultValue?: DateRangeValue;
  min?: string;
  max?: string;
  startName?: string;
  endName?: string;
  onValueChange?: (value: DateRangeValue) => void;
}

function formatRangeValue(value?: DateRangeValue): string {
  if (!value?.start) return "";

  if (!value.end) return formatDisplayDate(value.start);

  return `${formatDisplayDate(value.start)} - ${formatDisplayDate(value.end)}`;
}

export const DateRangeField = React.forwardRef<HTMLInputElement, DateRangeFieldProps>(
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
      disabled,
      placeholder,
      min,
      max,
      startName,
      endName,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const triggerId = `${inputId}-trigger`;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState<DateRangeValue | undefined>(
      defaultValue,
    );
    const [open, setOpen] = React.useState(false);
    const selectedValue = isControlled ? value : internalValue;
    const isFilled = Boolean(selectedValue?.start);
    const triggerText = formatRangeValue(selectedValue) || placeholder || label;

    const triggerClass = cn(
      "inline-flex h-[38px] w-fit max-w-full shrink-0 items-center rounded-lg px-3",
      "gap-3",
      "text-body-small font-normal",
      "bg-surface border border-border-input",
      "transition-colors",
      "outline-none focus:outline-none focus-visible:outline-none",
      "focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
      !disabled && state === "default" && !isFilled && "text-foreground-muted",
      !disabled && state === "default" && isFilled && "text-foreground-body",
      !disabled &&
        open &&
        state !== "highlighted" &&
        state !== "error" &&
        "border-[1.5px] border-border-focus text-foreground-body",
      !disabled &&
        state === "highlighted" &&
        "border-[1.5px] border-border-focus text-foreground-body",
      state === "error" &&
        !disabled &&
        "border-[1.5px] border-border-error bg-destructive-subtle text-foreground-body",
      disabled &&
        "cursor-not-allowed border-border-input bg-disabled text-foreground-disabled",
      "[-webkit-tap-highlight-color:transparent]",
      className,
    );

    function handleSelect(nextValue: DateRangeValue) {
      if (!isControlled) {
        setInternalValue(nextValue);
      }

      onValueChange?.(nextValue);

      if (nextValue.start && nextValue.end) {
        setOpen(false);
      }
    }

    return (
      <div className="flex flex-col">
        <Label htmlFor={triggerId} className="mb-1" disabled={disabled}>
          {label}
        </Label>

        <div className="inline-flex w-fit max-w-full min-w-0">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button
                type="button"
                id={triggerId}
                disabled={disabled}
                aria-describedby={hint ? hintId : undefined}
                className={triggerClass}
              >
                <Calendar
                  className={cn(
                    "h-4 w-4 shrink-0",
                    disabled ? "text-foreground-disabled" : "text-foreground-muted",
                  )}
                  aria-hidden
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <span className="min-w-[16ch] text-left">{triggerText}</span>
              </button>
            </PopoverTrigger>
            <PopoverContent align="start" sideOffset={4} className="w-auto p-3">
              <RangeCalendarPicker
                mode="range"
                value={selectedValue}
                defaultVisibleMonth={selectedValue?.start ?? selectedValue?.end}
                min={min}
                max={max}
                onSelect={handleSelect}
              />
            </PopoverContent>
          </Popover>
        </div>
        <input
          ref={ref}
          type="hidden"
          name={startName}
          value={selectedValue?.start ?? ""}
          disabled={disabled}
          readOnly
          {...props}
        />
        <input
          type="hidden"
          name={endName}
          value={selectedValue?.end ?? ""}
          disabled={disabled}
          readOnly
        />

        {hint && (
          <HintText
            id={hintId}
            className={cn("mt-2", state === "error" && "text-destructive", hintClassName)}
          >
            {hint}
          </HintText>
        )}
      </div>
    );
  },
);

DateRangeField.displayName = "DateRangeField";
