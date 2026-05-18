"use client";

// InPageAlert composite — contextual page-level message with optional action and close affordance.
import * as React from "react";
import { AlertCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconButton } from "../atoms/button/IconButton";

export type InPageAlertVariant = "default" | "destructive" | "warning";

export interface InPageAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  header: string;
  description?: string;
  action?: React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  closeAriaLabel?: string;
  variant?: InPageAlertVariant;
}

const variantClasses: Record<InPageAlertVariant, string> = {
  default: "border-border bg-surface text-foreground-body",
  destructive: "border-destructive bg-destructive-subtle text-foreground-body",
  warning: "border-warning bg-warning-subtle text-warning-foreground",
};

const iconClasses: Record<InPageAlertVariant, string> = {
  default: "text-foreground-accent",
  destructive: "text-destructive",
  warning: "text-warning-foreground",
};

export function InPageAlert({
  header,
  description,
  action,
  onClose,
  closeAriaLabel = "Close alert",
  variant = "default",
  className,
  ...props
}: InPageAlertProps) {
  return (
    <div
      role={variant === "destructive" ? "alert" : "status"}
      className={cn(
        "flex gap-3 rounded-lg border p-4",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {variant === "default" ? (
        <Info
          className={cn("mt-0.5 h-4 w-4 shrink-0", iconClasses.default)}
          strokeWidth={2}
          aria-hidden
        />
      ) : (
        <AlertCircle
          className={cn("mt-0.5 h-4 w-4 shrink-0", iconClasses[variant])}
          strokeWidth={2}
          aria-hidden
        />
      )}
      <div className="min-w-0 flex-1">
        <h3 className="text-body-small-bold">{header}</h3>
        {description && (
          <p className="mt-1 text-body-small">{description}</p>
        )}
      </div>
      {action && (
        <div className="ml-auto flex shrink-0 justify-end self-center">{action}</div>
      )}
      {onClose && (
        <IconButton
          type="button"
          variant="ghost"
          size="small"
          aria-label={closeAriaLabel}
          icon={<X className="h-4 w-4" aria-hidden />}
          className="-mr-2 -mt-2 text-foreground-muted hover:bg-transparent hover:text-foreground-title active:text-foreground-title"
          onClick={onClose}
        />
      )}
    </div>
  );
}
