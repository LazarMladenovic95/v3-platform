import * as React from "react";
import { cn } from "@/lib/utils";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

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
          <Heading as="h3" variant="title-bold">
            {title}
          </Heading>
          {description && (
            <Text variant="body-small-muted" className="mt-1">
              {description}
            </Text>
          )}
        </div>
        {headerAction}
      </div>
      <div className="mt-4 grid gap-4">{children}</div>
      {footer && <div className="mt-5 flex flex-wrap justify-end gap-2">{footer}</div>}
    </div>
  );
}
