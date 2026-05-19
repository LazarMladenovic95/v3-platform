import * as React from "react";
import { cn } from "@/lib/utils";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
  variant?: "default" | "dashed" | "muted";
}

const variantClasses: Record<NonNullable<EmptyStateProps["variant"]>, string> = {
  default: "border-border bg-surface",
  dashed: "border-dashed border-border bg-surface",
  muted: "border-border bg-surface-muted",
};

export function EmptyState({
  icon,
  title,
  description,
  action,
  variant = "muted",
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "rounded-lg border px-6 py-10 text-center",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface text-secondary">
          {icon}
        </div>
      )}
      <Heading as="h3" variant="title-bold" className={icon ? "mt-4" : undefined}>
        {title}
      </Heading>
      <Text variant="body-small-muted" className="mx-auto mt-2 max-w-sm">
        {description}
      </Text>
      {action && <div className="mt-5 flex justify-center">{action}</div>}
    </div>
  );
}
