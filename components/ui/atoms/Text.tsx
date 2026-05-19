import * as React from "react";
import { cn } from "@/lib/utils";

export type TextVariant =
  | "body-regular"
  | "body-small"
  | "body-small-muted"
  | "body-extra-small"
  | "body-extra-small-muted";

const variantClasses: Record<TextVariant, string> = {
  "body-regular": "text-body-regular text-foreground-body",
  "body-small": "text-body-small text-foreground-body",
  "body-small-muted": "text-body-small text-foreground-muted",
  "body-extra-small": "text-body-extra-small text-foreground-body",
  "body-extra-small-muted": "text-body-extra-small text-foreground-muted",
};

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span";
  variant?: TextVariant;
}

export function Text({
  as: Component = "p",
  variant = "body-small",
  className,
  ...props
}: TextProps) {
  return <Component className={cn(variantClasses[variant], className)} {...props} />;
}
