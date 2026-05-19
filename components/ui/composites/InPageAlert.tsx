"use client";

// InPageAlert composite — contextual page-level message with optional action and close affordance.
import * as React from "react";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Heading } from "../atoms/Heading";
import { Icon } from "../atoms/Icon";
import { Text } from "../atoms/Text";
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
  closeAriaLabel,
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
      <Icon
        name={variant === "default" ? "info" : "alert-circle"}
        className={cn("mt-0.5 shrink-0", iconClasses[variant])}
      />
      <div className="min-w-0 flex-1">
        <Heading as="h3" variant="body-bold">
          {header}
        </Heading>
        {description && (
          <Text variant="body-small" className="mt-1">
            {description}
          </Text>
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
          aria-label={closeAriaLabel ?? t("ui.alert.close")}
          icon={<Icon name="x" />}
          className="-mr-2 -mt-2 text-foreground-muted hover:bg-transparent hover:text-foreground-title active:text-foreground-title"
          onClick={onClose}
        />
      )}
    </div>
  );
}
