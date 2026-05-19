// Base button atom that wraps a native button with shared styling, hint text, error state, and loading support.
import * as React from "react";
import { cn } from "@/lib/utils";
import { HintText } from "@/components/ui/atoms/HintText";
import { Spinner } from "@/components/ui/atoms/Spinner";

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hint?: string;
  state?: "default" | "error";
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    {
      className,
      hint,
      state = "default",
      loading = false,
      iconLeft,
      iconRight,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const buttonClasses = cn(
      "inline-flex items-center justify-center rounded-lg whitespace-nowrap cursor-pointer",
      "[&_svg]:stroke-[2.25]",
      "transition duration-150 ease-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
      loading && "pointer-events-none cursor-wait",
      className,
    );

    const startNode = loading ? (
      <Spinner aria-hidden="true" />
    ) : iconLeft ? (
      <span className="inline-flex shrink-0" aria-hidden="true">
        {iconLeft}
      </span>
    ) : null;

    const endNode = iconRight ? (
      <span className="inline-flex shrink-0" aria-hidden="true">
        {iconRight}
      </span>
    ) : null;

    const content = (
      <>
        {startNode}
        {children}
        {endNode}
      </>
    );

    if (!hint) {
      return (
        <button
          ref={ref}
          disabled={disabled}
          aria-busy={loading || undefined}
          aria-disabled={loading || undefined}
          className={buttonClasses}
          {...props}
        >
          {content}
        </button>
      );
    }

    const hintId = `${props.id ?? "btn"}-hint`;

    return (
      <div className="inline-flex flex-col gap-1">
        <button
          ref={ref}
          disabled={disabled}
          aria-busy={loading || undefined}
          aria-disabled={loading || undefined}
          aria-invalid={state === "error" || undefined}
          aria-describedby={hintId}
          className={buttonClasses}
          {...props}
        >
          {content}
        </button>

        <HintText
          id={hintId}
          className={cn(
            "w-0 min-w-full",
            state === "error" ? "text-destructive" : undefined,
          )}
        >
          {hint}
        </HintText>
      </div>
    );
  },
);

BaseButton.displayName = "BaseButton";
