"use client";

import { t } from "@/lib/i18n";
import { Icon } from "../../atoms/Icon";
import { NavLink } from "../../atoms/NavLink";

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
  "aria-label": ariaLabel,
  className,
}: BreadcrumbsProps) {
  return (
    <nav aria-label={ariaLabel ?? t("ui.breadcrumbs.ariaLabel")} className={className}>
      <ol className="flex flex-wrap items-center gap-1 text-body-extra-small">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <NavLink href={item.href} variant="breadcrumb">
                  {item.label}
                </NavLink>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "font-bold text-foreground-title" : "text-foreground-muted"}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <Icon
                  name="chevron-right"
                  size="sm"
                  className="text-foreground-muted"
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
