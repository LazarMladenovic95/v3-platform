import * as React from "react";
import { cn } from "@/lib/utils";

export type HeadingVariant =
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "title-bold"
  | "body-bold";

const variantClasses: Record<HeadingVariant, string> = {
  "heading-1": "text-heading-1 text-foreground-title",
  "heading-2": "text-heading-2 text-foreground-title",
  "heading-3": "text-heading-3 text-foreground-title",
  "title-bold": "text-body-regular-bold text-foreground-title",
  "body-bold": "text-body-small-bold text-foreground-title",
};

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  variant?: HeadingVariant;
}

export function Heading({
  as: Component = "h3",
  variant = "title-bold",
  className,
  ...props
}: HeadingProps) {
  return <Component className={cn(variantClasses[variant], className)} {...props} />;
}
