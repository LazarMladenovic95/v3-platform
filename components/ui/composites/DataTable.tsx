import * as React from "react";
import { cn } from "@/lib/utils";

export function DataTable({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return <table className={cn("w-full border-collapse text-left", className)} {...props} />;
}

export function DataTableRow({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn(
        "border-b border-border transition-colors last:border-b-0 hover:bg-background",
        className,
      )}
      {...props}
    />
  );
}

export function DataTableHeaderCell({
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn("px-3 py-2.5 text-body-small font-bold text-foreground-title-subtle", className)}
      {...props}
    />
  );
}

export function DataTableCell({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn("px-3 py-3 align-middle text-body-small text-foreground-body", className)} {...props} />;
}
