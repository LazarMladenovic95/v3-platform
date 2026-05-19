import * as React from "react";
import { cn } from "@/lib/utils";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  muted?: boolean;
  padding?: "none" | "small" | "medium";
  surface?: "default" | "background" | "muted";
}

const cardPaddingClasses = {
  none: "p-0",
  small: "p-4",
  medium: "p-5",
} as const;

const cardSurfaceClasses = {
  default: "bg-surface shadow-sm",
  background: "bg-background",
  muted: "bg-surface-muted",
} as const;

export function Card({ muted = false, padding = "medium", surface = "default", className, ...props }: CardProps) {
  const resolvedSurface = muted ? "muted" : surface;

  return (
    <div
      className={cn(
        "rounded-lg border border-border",
        cardPaddingClasses[padding],
        cardSurfaceClasses[resolvedSurface],
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading as="h3" variant="title-bold" className={className} {...props} />;
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <Text variant="body-small-muted" className={cn("mt-2", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-5 flex flex-wrap gap-2", className)} {...props} />;
}
