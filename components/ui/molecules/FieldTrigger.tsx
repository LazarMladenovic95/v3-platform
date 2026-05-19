"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type FieldTriggerState = "default" | "highlighted" | "error";

export interface FieldTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: FieldTriggerState;
  disabled?: boolean;
  isFilled?: boolean;
  open?: boolean;
}

export function fieldTriggerClasses({
  state = "default",
  disabled = false,
  isFilled = false,
  open = false,
  className,
}: FieldTriggerProps): string {
  return cn(
    "inline-flex h-[38px] w-fit max-w-full shrink-0 items-center rounded-lg px-3",
    "gap-2",
    "text-body-small font-normal",
    "bg-surface border border-border-input",
    "transition-colors",
    "focus-within:outline-none focus-within:ring-2 focus-within:ring-focus focus-within:ring-offset-2 focus-within:ring-offset-surface",
    !disabled && state === "default" && !isFilled && "text-foreground-muted",
    !disabled && state === "default" && isFilled && "text-foreground-body",
    !disabled &&
      open &&
      state !== "highlighted" &&
      state !== "error" &&
      "border-[1.5px] border-border-focus text-foreground-body",
    !disabled && state === "highlighted" && "border-[1.5px] border-border-focus text-foreground-body",
    state === "error" &&
      !disabled &&
      "border-[1.5px] border-border-error bg-destructive-subtle text-foreground-body",
    disabled && "cursor-not-allowed border-border-input bg-disabled text-foreground-disabled",
    "[-webkit-tap-highlight-color:transparent]",
    className,
  );
}

export function FieldTrigger({
  state = "default",
  disabled = false,
  isFilled = false,
  open = false,
  className,
  children,
  ...props
}: FieldTriggerProps) {
  return (
    <div
      className={fieldTriggerClasses({ state, disabled, isFilled, open, className })}
      {...props}
    >
      {children}
    </div>
  );
}
