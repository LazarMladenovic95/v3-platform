"use client";

// Tag atom — removable label based on the default Badge treatment.
import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  onRemove?: React.MouseEventHandler<HTMLButtonElement>;
  removeAriaLabel?: string;
  disabled?: boolean;
}

export function Tag({
  label,
  onRemove,
  removeAriaLabel,
  disabled = false,
  className,
  ...props
}: TagProps) {
  const removeLabel = removeAriaLabel ?? `Remove ${label}`;

  return (
    <span
      className={cn(
        "inline-flex h-7 items-center justify-center gap-1 rounded-lg bg-surface-hover px-3 py-1 transition-colors",
        "text-body-extra-small text-foreground-title-subtle",
        !disabled && "hover:bg-background hover:text-foreground-title",
        disabled && "opacity-60",
        className,
      )}
      {...props}
    >
      {label}
      {onRemove ? (
        <button
          type="button"
          className={cn(
            "-mr-1 inline-flex h-4 w-4 items-center justify-center rounded-sm text-current",
            "hover:bg-foreground-title-subtle/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
            "disabled:cursor-not-allowed disabled:opacity-60",
          )}
          aria-label={removeLabel}
          disabled={disabled}
          onClick={onRemove}
        >
          <X className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
        </button>
      ) : (
        <X className="-mr-1 h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden />
      )}
    </span>
  );
}
