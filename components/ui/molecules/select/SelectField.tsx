// SelectField molecule built on Radix UI that combines a Label with a styled dropdown selector.
"use client";

import * as React from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { cn } from "../../../../lib/utils";
import { Label } from "../../atoms/Label";

export interface SelectFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  state?: "default" | "highlighted";
  disabled?: boolean;
  children: React.ReactNode;
}

export function SelectField({
  label,
  placeholder,
  value,
  defaultValue,
  onValueChange,
  state = "default",
  disabled = false,
  children,
}: SelectFieldProps) {
  const id = React.useId();
  const [open, setOpen] = React.useState(false);

  // support controlled + uncontrolled
  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    value ?? defaultValue,
  );

  React.useEffect(() => {
    if (value !== undefined) setInternalValue(value);
  }, [value]);

  const hasValue = internalValue !== undefined;

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>

      <Select.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={(v) => {
          setInternalValue(v);
          onValueChange?.(v);
        }}
        disabled={disabled}
        open={open}
        onOpenChange={setOpen}
      >
        <Select.Trigger
          id={id}
          aria-labelledby={`${id}-label`}
          className={cn(
            // layout
            "flex h-11 w-full items-center justify-between rounded-lg px-4",
            "text-[16px] md:text-[14px] leading-[18px]",
            // remove native focus ring (we style focus via border)
            "outline-none focus:outline-none focus-visible:outline-none",
            // background
            "bg-white",
            // default (closed, empty)
            !disabled &&
              state === "default" &&
              !hasValue &&
              !open &&
              "border border-grey-300 text-grey-500",
            // filled (closed)
            !disabled &&
              state === "default" &&
              hasValue &&
              !open &&
              "border border-grey-700 text-grey-700",
            // active (open / focused)
            !disabled &&
              open &&
              state !== "highlighted" &&
              "border-[1.5px] border-grey-700 text-grey-700",
            // highlighted
            !disabled &&
              state === "highlighted" &&
              "border-[1.5px] border-blue-500 text-grey-700",
            // disabled
            disabled &&
              "bg-grey-100 border border-grey-300 text-grey-500 cursor-not-allowed",
          )}
        >
          <Select.Value
            placeholder={<span className="text-grey-500">{placeholder}</span>}
          />

          {/* Chevron */}
          <Select.Icon
            className={cn(
              // fixed 16x16 box
              "ml-2 flex h-4 w-4 items-center justify-center",
              // rotation
              "transition-transform",
              open && "rotate-180",
              // color mapping
              disabled && "text-grey-300",
              !disabled && state === "highlighted" && "text-blue-500",
              !disabled && state !== "highlighted" && open && "text-grey-700",
              !disabled &&
                state !== "highlighted" &&
                !open &&
                hasValue &&
                "text-grey-700",
              !disabled &&
                state !== "highlighted" &&
                !open &&
                !hasValue &&
                "text-grey-500",
            )}
          >
            <ChevronDown size={16} />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content
          className="z-50 w-[var(--radix-select-trigger-width)] rounded-lg border-[1.5px] border-grey-700 bg-white shadow-lg"
          position="popper"
          sideOffset={2} // ← 2px gap per Figma
        >
          <Select.Viewport className="py-3 max-h-[40dvh] overflow-y-auto">
            {children}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
