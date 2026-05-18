"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  href?: string;
  label: string;
};

export interface BreadcrumbsProps {
  items: readonly BreadcrumbItem[];
  "aria-label"?: string;
  className?: string;
}

export function Breadcrumbs({
  items,
  "aria-label": ariaLabel = "Breadcrumb",
  className,
}: BreadcrumbsProps) {
  return (
    <nav aria-label={ariaLabel} className={className}>
      <ol className="flex flex-wrap items-center gap-1 text-body-extra-small">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-sm text-foreground-muted transition-colors hover:text-primary-hover",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "font-bold text-foreground-title" : "text-foreground-muted"}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight
                  className="h-3.5 w-3.5 text-foreground-muted"
                  aria-hidden
                  strokeWidth={2.25}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
