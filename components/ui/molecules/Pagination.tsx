import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export type PaginationItem = number | "ellipsis";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  items?: readonly PaginationItem[];
  compact?: boolean;
  className?: string;
};

function paginationItems(currentPage: number, totalPages: number): PaginationItem[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "ellipsis", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [1, "ellipsis", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages];
}

export function Pagination({
  currentPage,
  totalPages,
  items = paginationItems(currentPage, totalPages),
  compact = false,
  className,
}: PaginationProps) {
  return (
    <nav className={cn("flex items-center gap-2", className)} aria-label="Pagination">
      <button
        type="button"
        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-foreground-title-subtle transition-colors hover:border-border-focus hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Previous page"
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" aria-hidden />
      </button>

      {!compact && (
        <div className="flex items-center gap-1">
          {items.map((item, index) => {
            if (item === "ellipsis") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="flex h-8 w-8 items-center justify-center text-foreground-muted"
                  aria-hidden
                >
                  <MoreHorizontal className="h-4 w-4" />
                </span>
              );
            }

            const isActive = item === currentPage;

            return (
              <button
                key={item}
                type="button"
                className={cn(
                  "h-8 min-w-8 rounded-md px-2 text-body-extra-small-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
                  isActive
                    ? "bg-surface-active text-foreground-title"
                    : "text-foreground-title-subtle hover:bg-surface-hover hover:text-secondary",
                )}
                aria-current={isActive ? "page" : undefined}
                aria-label={`Page ${item}`}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}

      <button
        type="button"
        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-foreground-title-subtle transition-colors hover:border-border-focus hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Next page"
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" aria-hidden />
      </button>
    </nav>
  );
}
