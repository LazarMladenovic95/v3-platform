// SearchField molecule that combines a Label and Input atom with a search icon for venue search inputs.
"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "../../../../lib/utils";
import { Input } from "../../atoms/Input";
import { Label } from "../../atoms/Label";

export interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  state?: "default" | "highlighted" | "error";
  hint?: string;
}

export const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    { label, state = "default", hint, disabled, className, id, ...props },
    ref,
  ) => {
    const inputId = id ?? React.useId();
    const hintId = hint ? `${inputId}-hint` : undefined;

    return (
      <div className="flex flex-col gap-2">
        <Label htmlFor={inputId}>{label}</Label>

        <div className="relative">
          <Input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={state === "error"}
            aria-describedby={state === "error" ? hintId : undefined}
            className={cn(
              "peer pr-10", // space for icon
              state === "highlighted" &&
                "border-[1.5px] border-border-focus focus:border-border-focus",
              state === "error" &&
                "border-[1.5px] border-border-error focus:border-border-error",
              className,
            )}
            {...props}
          />

          <span
            className={cn(
              "pointer-events-none absolute right-4 top-1/2 -translate-y-1/2",
              "h-4 w-4 flex items-center justify-center", // ✅ true optical centering
              // default
              "text-foreground-muted",
              // focused/active
              !disabled &&
                state !== "highlighted" &&
                "peer-focus:text-foreground-body",
              // highlighted
              !disabled && state === "highlighted" && "text-foreground-accent",
              // disabled
              disabled && "text-foreground-subtle",
            )}
          >
            <Search size={16} />
          </span>
        </div>

        {state === "error" && hint && (
          <p
            id={hintId}
            role="alert"
            className="text-destructive text-body-extra-small"
          >
            {hint}
          </p>
        )}
      </div>
    );
  },
);

SearchField.displayName = "SearchField";
