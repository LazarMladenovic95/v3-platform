import * as React from "react";
import { cn } from "@/lib/utils";

export interface FilterPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  headerAction?: React.ReactNode;
  footer?: React.ReactNode;
}

export function FilterPanel({
  title,
  description,
  headerAction,
  footer,
  className,
  children,
  ...props
}: FilterPanelProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-surface p-4 shadow-sm", className)} {...props}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-body-regular-bold text-foreground-title">{title}</h3>
          {description && <p className="mt-1 text-body-small text-foreground-muted">{description}</p>}
        </div>
        {headerAction}
      </div>
      <div className="mt-4 grid gap-4">{children}</div>
      {footer && <div className="mt-5 flex flex-wrap justify-end gap-2">{footer}</div>}
    </div>
  );
}
