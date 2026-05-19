import { Pagination } from "@/components/ui";

export function PaginationShowcase() {
  return (
    <div className="grid gap-6">
      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Usage guidance</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-body-small-bold text-foreground-title">Use pagination for</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Tables, search results, and datasets where people need location, count, and predictable page
              navigation.
            </p>
          </div>
          <div>
            <h3 className="text-body-small-bold text-foreground-title">Use infinite scroll for</h3>
            <p className="mt-1 text-body-small text-foreground-muted">
              Browsing feeds where exact position matters less than continuous discovery.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Default pagination</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use page numbers when people need to understand their position in a larger result set.
        </p>
        <div className="mt-4 overflow-x-auto">
          <Pagination currentPage={3} totalPages={7} />
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Pagination with ellipsis</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use ellipsis pagination when the total page count is too large to show every page.
        </p>
        <div className="mt-4 overflow-x-auto">
          <Pagination currentPage={8} totalPages={20} />
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Compact pagination</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Use compact pagination in tight spaces where previous and next controls are enough.
        </p>
        <div className="mt-4">
          <Pagination currentPage={2} totalPages={5} compact />
        </div>
      </section>
    </div>
  );
}
