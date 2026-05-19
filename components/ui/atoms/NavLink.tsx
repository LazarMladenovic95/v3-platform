"use client";

import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

export type NavLinkVariant = "tab" | "vertical" | "breadcrumb";

export interface NavLinkProps extends Omit<React.ComponentProps<typeof Link>, "className"> {
  variant: NavLinkVariant;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<NavLinkVariant, string> = {
  tab: cn(
    "relative inline-flex h-10 shrink-0 items-center justify-center rounded-t-lg px-4 text-body-small-bold transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
  ),
  vertical: cn(
    "relative flex min-h-10 w-full items-center gap-2 rounded-md px-3 py-2 text-body-small transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
  ),
  breadcrumb: cn(
    "rounded-sm text-foreground-muted transition-colors hover:text-secondary",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
  ),
};

export function NavLink({
  variant,
  active = false,
  disabled = false,
  className,
  children,
  href,
  ...props
}: NavLinkProps) {
  const linkClassName = cn(
    variantClasses[variant],
    variant === "tab" &&
      (active
        ? "font-bold text-foreground-title"
        : "border-transparent text-foreground-title-subtle hover:text-secondary"),
    variant === "vertical" &&
      (active
        ? "bg-surface-active font-bold text-foreground-title"
        : "text-foreground-title-subtle hover:bg-surface-hover hover:text-secondary"),
    disabled && "pointer-events-none text-foreground-disabled opacity-60",
    className,
  );

  if (disabled) {
    return (
      <span className={linkClassName} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={linkClassName} aria-current={active ? "page" : undefined} {...props}>
      {children}
    </Link>
  );
}
