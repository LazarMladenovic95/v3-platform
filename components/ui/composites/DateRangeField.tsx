// DateRangeField composite — labeled range picker composing FieldTrigger, Popover, and RangeCalendarPicker.
"use client";

import * as React from "react";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Label } from "../atoms/Label";
import { HintText } from "../atoms/HintText";
import { Icon } from "../atoms/Icon";
import { fieldTriggerClasses } from "../molecules/FieldTrigger";
import {
  formatDisplayDate,
  RangeCalendarPicker,
  type DateRangeValue,
} from "./CalendarPicker";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import type { InputFieldProps } from "../molecules/InputField";

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
                aria-label={t("ui.dateField.openCalendar")}
                aria-describedby={hint ? hintId : undefined}
                className={fieldTriggerClasses({
                  state,
                  disabled,
                  isFilled,
                  open,
                  className: cn("gap-3", className),
                })}
              >
                <Icon
                  name="calendar"
                  className={cn(
                    disabled ? "text-foreground-disabled" : "text-foreground-muted",
                  )}
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
