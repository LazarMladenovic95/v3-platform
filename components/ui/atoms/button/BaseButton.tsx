// Base button atom that wraps a native button with shared styling, hint text, and error state support.
import * as React from "react";
import { cn } from "@/lib/utils";
import { HintText } from "@/components/ui/atoms/HintText";

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  hint?: string;
  state?: "default" | "error";
}

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ className, hint, state = "default", ...props }, ref) => {
    const buttonClasses = cn(
      "inline-flex items-center justify-center rounded-lg whitespace-nowrap cursor-pointer",
      className,
    );

    if (!hint) {
      return <button ref={ref} className={buttonClasses} {...props} />;
    }

    const hintId = `${props.id ?? "btn"}-hint`;

    return (
      <div className="inline-flex flex-col gap-1">
        <button
          ref={ref}
          aria-invalid={state === "error" || undefined}
          aria-describedby={hintId}
          className={buttonClasses}
          {...props}
        />

        <HintText
          id={hintId}
          className={cn(
            "w-0 min-w-full",
            state === "error" ? "text-red-util-100" : undefined,
          )}
        >
          {hint}
        </HintText>
      </div>
    );
  },
);

BaseButton.displayName = "BaseButton";
