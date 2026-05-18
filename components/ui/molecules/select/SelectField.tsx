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
  const selectedValue = value ?? internalValue;
  const hasValue = selectedValue !== undefined;

  return (
    <div className="flex flex-col">
      <Label htmlFor={id} className="mb-1" disabled={disabled}>{label}</Label>

      <Select.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={(v) => {
          if (value === undefined) {
            setInternalValue(v);
          }
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
            "flex h-10 w-full items-center justify-between rounded-lg px-3",
            "text-body-small",
            // remove native focus ring (we style focus via border)
            "outline-none focus:outline-none focus-visible:outline-none",
            "[-webkit-tap-highlight-color:transparent]",
            // background
            "bg-surface",
            // default (closed, empty)
            !disabled &&
              state === "default" &&
              !hasValue &&
              !open &&
              "border border-border-input text-foreground-muted",
            // filled (closed) — same outline as default, darker text only
            !disabled &&
              state === "default" &&
              hasValue &&
              !open &&
              "border border-border-input text-foreground-body",
            // open — match input focus (no near-black border)
            !disabled &&
              open &&
              state !== "highlighted" &&
              "border-[1.5px] border-border-focus text-foreground-body",
            // highlighted
            !disabled &&
              state === "highlighted" &&
              "border-[1.5px] border-border-focus text-foreground-body",
            // disabled
            disabled &&
              "bg-disabled border border-border-input text-foreground-disabled cursor-not-allowed",
          )}
        >
          <Select.Value
            placeholder={
              <span className={disabled ? "text-foreground-disabled" : "text-foreground-muted"}>
                {placeholder}
              </span>
            }
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
              disabled && "text-foreground-disabled",
              !disabled && state === "highlighted" && "text-foreground-accent",
              !disabled && state !== "highlighted" && open && "text-foreground-accent",
              !disabled &&
                state !== "highlighted" &&
                !open &&
                hasValue &&
                "text-foreground-body",
              !disabled &&
                state !== "highlighted" &&
                !open &&
                !hasValue &&
                "text-foreground-muted",
            )}
          >
            <ChevronDown size={16} />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content
          className="z-50 w-[var(--radix-select-trigger-width)] rounded-lg border border-border bg-surface py-1 text-body-small shadow-md"
          position="popper"
          sideOffset={2} // ← 2px gap per Figma
        >
          <Select.Viewport className="flex max-h-[40dvh] flex-col gap-0.5 overflow-y-auto px-2 py-0">
            {children}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
