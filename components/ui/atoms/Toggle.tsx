// Toggle atom for binary on/off settings.
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      checked,
      defaultChecked = false,
      onCheckedChange,
      disabled,
      className,
      onClick,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledChecked, setUncontrolledChecked] = React.useState(defaultChecked);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : uncontrolledChecked;

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
      onClick?.(event);

      if (event.defaultPrevented || disabled) return;

      const nextChecked = !isChecked;

      if (!isControlled) {
        setUncontrolledChecked(nextChecked);
      }

      onCheckedChange?.(nextChecked);
    }

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        data-state={isChecked ? "checked" : "unchecked"}
        disabled={disabled}
        className={cn(
          "relative inline-flex h-5 w-10 shrink-0 items-center rounded-full bg-foreground-title-subtle/60 p-0.5",
          "transition-colors duration-150 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
          "data-[state=checked]:bg-primary",
          "disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none",
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        <span
          aria-hidden="true"
          className={cn(
            "block h-4 w-4 rounded-full bg-surface shadow-sm transition-transform duration-150 ease-out",
            isChecked && "translate-x-5",
          )}
        />
      </button>
    );
  },
);

Toggle.displayName = "Toggle";
