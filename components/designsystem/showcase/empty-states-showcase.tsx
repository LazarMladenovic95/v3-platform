import { Inbox, SearchX } from "lucide-react";
import { EmptyState, OutlinePrimary, PrimaryPink } from "@/components/ui";

export function EmptyStatesShowcase() {
  return (
    <div className="grid gap-6">
      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Default empty state</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Empty states explain why content is missing and give people a clear next action.
        </p>

        <div className="mt-4">
          <EmptyState
            title="No reviews yet"
            description="Once customers start sharing reviews, they will appear here for your team to review."
            icon={<Inbox className="h-6 w-6" aria-hidden />}
            action={
            <PrimaryPink type="button" size="small">
              Invite reviewers
            </PrimaryPink>
            }
          />
        </div>
      </section>

      <section className="rounded-lg border border-border bg-surface p-5">
        <h2 className="text-title-2 text-foreground-title">Search empty state</h2>
        <p className="mt-1 max-w-2xl text-body-small text-foreground-muted">
          Search empty states should confirm the query found no results and offer a way forward.
        </p>

        <div className="mt-4">
          <EmptyState
            variant="dashed"
            title="No matching products"
            description="Try adjusting your filters or search terms to find what you are looking for."
            icon={<SearchX className="h-6 w-6" aria-hidden />}
            action={
            <OutlinePrimary type="button" size="small">
              Clear filters
            </OutlinePrimary>
            }
          />
        </div>
      </section>
    </div>
  );
}
