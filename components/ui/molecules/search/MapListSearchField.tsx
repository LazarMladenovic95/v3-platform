// Map list search field molecule providing a compact search input for the map venue list.
"use client";

import * as React from "react";
import { cn } from "../../../../lib/utils";
import { Input } from "../../atoms/Input";

type NativeInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "results"
>;

export interface MapListSearchFieldProps extends NativeInputProps {
  /** async results to render */
  results?: string[];
  /** called when a result is selected */
  onSelectResult?: (value: string) => void;
}

export const MapListSearchField = React.forwardRef<
  HTMLInputElement,
  MapListSearchFieldProps
>(
  (
    {
      className,
      results = [],
      onSelectResult,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref,
  ) => {
    const isControlled = value !== undefined;

    const [internalValue, setInternalValue] = React.useState<
      string | number | readonly string[] | undefined
    >(defaultValue);

    const currentValue = isControlled ? value : internalValue;
    const hasValue =
      currentValue !== undefined && String(currentValue).length > 0;

    const isOpen = results.length > 0;

    return (
      <div className="relative pointer-events-none">
        <Input
          ref={ref}
          value={isControlled ? value : internalValue}
          defaultValue={defaultValue}
          onChange={(e) => {
            if (!isControlled) {
              setInternalValue(e.target.value);
            }
            onChange?.(e);
          }}
          role="combobox"
          aria-expanded={isOpen}
          className={cn(
            // allow interaction
            "pointer-events-auto",
            // height override (48px)
            "h-12",
            // typography
            "text-body-regular-bold",
            // background must always be white
            "bg-surface",
            // default / filled
            !isOpen &&
              (hasValue
                ? "border border-foreground-body text-foreground-body"
                : "border border-border-input text-foreground-muted"),
            // active / results open
            isOpen && "border-[1.5px] border-foreground-body text-foreground-body",
            className,
          )}
          {...props}
        />

        {isOpen && (
          <div
            role="listbox"
            className={cn(
              "pointer-events-auto",
              "absolute left-0 right-0 top-full z-50 mt-[2px]",
              "rounded-lg border-[1.5px] border-foreground-body bg-surface",
            )}
          >
            <ul className="py-3">
              {results.map((item) => (
                <li
                  key={item}
                  role="option"
                  tabIndex={0}
                  className={cn(
                    "flex h-12 items-center px-4",
                    "cursor-pointer outline-none",
                    "text-body-regular-bold text-foreground-body",
                    "hover:bg-surface-hover/50 focus:bg-surface-hover/50",
                  )}
                  onClick={() => onSelectResult?.(item)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") onSelectResult?.(item);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
);

MapListSearchField.displayName = "MapListSearchField";
