// DateField composite — labeled date picker composing Input, IconButton, Popover, and CalendarPicker.
"use client";

import * as React from "react";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Label } from "../atoms/Label";
import { HintText } from "../atoms/HintText";
import { Icon } from "../atoms/Icon";
import { IconButton } from "../atoms/button/IconButton";
import { fieldTriggerClasses } from "../molecules/FieldTrigger";
import {
  CalendarPicker,
  isValidDateString,
  type DateRangeValue,
} from "./CalendarPicker";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import type { InputFieldProps } from "../molecules/InputField";

export interface DateFieldProps
  extends Omit<
    InputFieldProps,
    "type" | "value" | "defaultValue" | "onChange" | "min" | "max"
  > {
  value?: string;
  defaultValue?: string;
  min?: string;
  max?: string;
  onValueChange?: (value: string) => void;
}

export const DateField = React.forwardRef<HTMLInputElement, DateFieldProps>(
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
      name,
      min,
      max,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const [open, setOpen] = React.useState(false);
    const selectedValue = isControlled ? value : internalValue;
    const isFilled = Boolean(selectedValue);
    const calendarValue = isValidDateString(selectedValue) ? selectedValue : undefined;
    const resolvedPlaceholder = placeholder ?? t("ui.dateField.placeholder");

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
      const nextValue = event.target.value;

      if (!isControlled) {
        setInternalValue(nextValue);
      }

      onValueChange?.(nextValue);
    }

    function handleSelect(nextValue: string) {
      if (!isControlled) {
        setInternalValue(nextValue);
      }

      onValueChange?.(nextValue);
      setOpen(false);
    }

    return (
      <div className="flex flex-col">
        <Label htmlFor={inputId} className="mb-1" disabled={disabled}>
          {label}
        </Label>

        <div className="inline-flex w-fit max-w-full min-w-0">
          <Popover open={open} onOpenChange={setOpen}>
            <div
              className={fieldTriggerClasses({
                state,
                disabled,
                isFilled,
                open,
                className,
              })}
            >
              <PopoverTrigger asChild>
                <IconButton
                  type="button"
                  variant="ghost-neutral"
                  size="small"
                  aria-label={t("ui.dateField.openCalendar")}
                  disabled={disabled}
                  icon={<Icon name="calendar" />}
                  className="-ml-2 text-foreground-muted"
                />
              </PopoverTrigger>
              <input
                ref={ref}
                type="text"
                inputMode="numeric"
                id={inputId}
                name={name}
                value={selectedValue ?? ""}
                disabled={disabled}
                placeholder={resolvedPlaceholder}
                aria-invalid={state === "error"}
                aria-describedby={hint ? hintId : undefined}
                onChange={handleInputChange}
                className={cn(
                  "min-w-[10ch] flex-1 border-0 bg-transparent p-0 text-body-small font-normal outline-none",
                  "placeholder:text-foreground-muted disabled:cursor-not-allowed disabled:text-foreground-disabled disabled:placeholder:text-foreground-disabled",
                )}
                {...props}
              />
            </div>
            <PopoverContent align="start" sideOffset={4} className="w-auto p-3">
              <CalendarPicker
                value={calendarValue}
                defaultVisibleMonth={calendarValue}
                min={min}
                max={max}
                onSelect={handleSelect}
              />
            </PopoverContent>
          </Popover>
        </div>

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

DateField.displayName = "DateField";

export type { DateRangeValue };
